/* Basic offline cache for Margory PWA */
const CACHE = 'margory-v26';
const PRECACHE = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

/** Strip retry nonce so icon cache keys stay stable. */
function iconStoreRequest(request) {
  const u = new URL(request.url);
  u.searchParams.delete('r');
  return new Request(u.href, {
    method: 'GET',
    headers: request.headers,
    mode: request.mode,
    credentials: request.credentials,
    cache: 'reload',
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Network-first for HTML navigations so deploys show up quickly.
  const isNav =
    request.mode === 'navigate' ||
    (request.headers.get('accept') || '').includes('text/html');

  if (isNav) {
    event.respondWith(
      // Revalidate with the server (bypass the 10-min GitHub Pages HTTP cache)
      // so a fresh deploy's index.html is picked up on the next open.
      fetch(request.url, { cache: 'no-cache', credentials: 'same-origin' })
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then((c) => c || caches.match('/index.html'))),
    );
    return;
  }

  const url = new URL(request.url);
  const isIcon =
    url.pathname.startsWith('/item-placeholders/') ||
    (url.pathname.endsWith('.png') && !url.pathname.startsWith('/assets/'));

  // Cache-first for product icons: once we have a good copy, never blank the tile
  // on a flaky network. Revalidate in the background. Match ignoreSearch so
  // ?v= / leftover ?r= still hit the same cached PNG.
  if (isIcon) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached =
          (await cache.match(request, { ignoreSearch: true })) ||
          (await caches.match(request, { ignoreSearch: true }));

        const storeReq = iconStoreRequest(request);
        const networkPromise = fetch(request)
          .then(async (response) => {
            if (response && response.ok) {
              try {
                await cache.put(storeReq, response.clone());
              } catch {
                /* ignore quota / opaque failures */
              }
            }
            return response;
          })
          .catch(() => null);

        if (cached) {
          // Background refresh; ignore result.
          networkPromise.then(() => {});
          return cached;
        }

        const net = await networkPromise;
        if (net && net.ok) return net;
        // No cache and network failed / non-OK — surface failure so img can retry.
        if (net) return net;
        return Response.error();
      })(),
    );
    return;
  }

  // Network-first for hashed CSS/JS so new deploys aren't stuck behind SW cache.
  const isAsset =
    url.pathname.startsWith('/assets/') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js');

  if (isAsset) {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
            return response;
          }
          const cached = await caches.match(request);
          return cached || response;
        })
        .catch(() => caches.match(request)),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetched;
    }),
  );
});
