# ChatGPT / image-gen prompt — Margory shopping icons

**Status (2026-10-06 ET):** Approval-only. Do **not** replace `/public/item-placeholders/icons/` or redeploy until Dan approves.

Attach the style reference: `00-reference-style-sample.jpg` (same art as the approved sample).

Ask for **contact sheets first** (12 icons per sheet). After approval, ask for **individual** square transparent PNGs.

---

## Style block (reuse at the top of every ChatGPT message)

You are generating grocery product icons for a Spanish-first mobile shopping app (Colombia household list: Margory).

**Style (match the attached reference for illustration quality — but NO text in the images):**
- Soft modern illustrated product art (gentle 3D / sticker look), NOT flat emoji, NOT photoreal photos, NOT crude geometric / Pillow placeholders
- Product only — **no Spanish or English labels, captions, or names** on the art (the app UI shows names and switches language)
- Contact sheets: pure white canvas, 4×3 grid of product icons only; map by number (1 = top-left, left-to-right, top-to-bottom). Tiny corner numbers OK; no product-name text
- Soft top-left lighting, subtle grounded shadow under each product

**Output format:**
1. CONTACT SHEET: 4×3 grid (12 icons), pure white background, **no product name labels**
2. One sheet per request; wait for OK before the next
3. After approval: export each icon as separate **transparent PNG** 1024×1024, product only, **zero text**, soft shadow OK, kebab-case Spanish filename from the numbered list

**Do not** invent brands unless the item name includes one (Hershey, Nestlé, Club Colombia, Cascade, Axion, Glenlivet, Tosh, BioVarsol, Nescafe). Keep packaging generic otherwise.

---

## Already on disk (GenerateImage drafts — keep for comparison)

These are style-match drafts already saved under this folder. Dan may still prefer ChatGPT sheets.

| File | Contents (approx.) |
|------|--------------------|
| `sheet-00-referencia-aprobada.png` | Approved mixed sample (Aguacate…Yogurt) |
| `sheet-01-frutas.png` | Aguacates, Bananos, Fresas, Mangos, Limones, Naranjas, Piña, Sandía, Uvas, Kiwi, Cocos, Moras |
| `sheet-02-verduras.png` | Tomates, Ajo, Cebollas, Zanahorias, Brócoli, Lechuga, Pepinos, Pimentones, Papas, Espinaca, Habichuelas, Remolacha |
| `sheet-03-proteinas.png` | Huevos, Pollo, Carne, Cerdo, Camarones, Salmón, Atún, Jamón, Queso, Yogur, Mozzarella, Pavo |
| `sheet-04-granos-basicos.png` | Arroz, Avena, Quinua, Frijoles, Lentejas, Pan, Tortillas, Arepas, Pasta, Harina, Granola, Almendras |
| `sheet-05-condimentos.png` | Aceite oliva, Aceite coco, Miel, Mantequilla, Mayonesa, Mostaza, Ketchup, Sal, Pimienta, Canela, Vinagre, Café |
| `sheet-06-bocadillos-bebidas.png` | Chocolate, Chips, Galletas, Palomitas, Chía, Nueces, Leche almendra, Agua coco, Té, Vino, Whisky, Jugo |
| `sheet-07-hogar-limpieza.png` | Papel higiénico, Toallas, Detergente, Jabón platos, Esponja, Bolsas basura, Aluminio, Film, Limpiador, Bolsas sándwich, Cascade, BioVarsol |

---

## Prompt A — paste after style block (FRUTAS gaps)

Generate a 4×3 contact sheet for these 12 FRUTAS items not fully covered yet:
1. Guineos
2. Guayaba
3. Limas
4. Mango Biche
5. Manzanas rojas
6. Manzanas verdes
7. Maracuyá
8. Papaya
9. Arándanos
10. Tomates (orgánico)
11. Plátanos maduros
12. Plátanos verdes

Filename suggestion when saving: `sheet-08-frutas-extras.png`

---

## Prompt B — VERDURAS gaps

Generate a 4×3 contact sheet for these 12 VERDURAS:
1. Arracacha
2. Batatas / Camotes
3. Calabacín
4. Calabaza amarilla
5. Cebolla larga
6. Cidra / Guatila
7. Cilantro
8. Col rizada
9. Coliflor
10. Espárragos
11. Yuca
12. Ahuyama zapayo

Filename suggestion: `sheet-09-verduras-extras.png`

---

## Prompt C — VERDURAS + pantry leftovers

Generate a 4×3 contact sheet:
1. Col rizada morada
2. Mix de lechugas
3. Papa dulce
4. Perejil liso
5. Repollitas
6. Rúgula
7. Bicarbonato
8. Levadura en polvo
9. Azúcar
10. Panela
11. Marmalade
12. Jarabe de arce

Filename suggestion: `sheet-10-misc-despensa.png`

---

## Prompt D — BEBIDAS + BOCADILLOS leftovers

Generate a 4×3 contact sheet:
1. Café instantáneo (Nescafe)
2. Café molida
3. Chocolate caliente
4. Club Colombia Dorada
5. Club Colombia Negra
6. Leche de vaca deslactosada
7. Vino blanco
8. Vino rosé
9. Gelatina
10. Marshmallows
11. Saltines
12. Tosh (fresa) / Tosh (miel) as two cookie packs if needed — prefer Marshmallows + Saltines + Gelatina + Semillas girasol + Cacao almendras + Chocolate Hershey if swapping for uniqueness

Better fixed list of 12:
1. Café Nescafe
2. Café molida
3. Chocolate caliente
4. Club Colombia Dorada
5. Club Colombia Negra
6. Leche deslactosada
7. Vino blanco
8. Vino rosé
9. Gelatina
10. Marshmallows
11. Saltines
12. Semillas de girasol

Filename suggestion: `sheet-11-bebidas-bocadillos-extras.png`

---

## Prompt E — PROTEÍNAS + HOGAR leftovers

Generate a 4×3 contact sheet:
1. Carne molida
2. Chicharrón
3. Cola de res
4. Punta de anca
5. Queso campesino
6. Queso de cabra
7. Queso parmesano
8. Tilapia
9. Pavo molido
10. Bolsas freezer
11. Bolsas baño
12. Esponja raspadora

Filename suggestion: `sheet-12-proteinas-hogar-extras.png`

---

## Follow-up after approving any sheet

> Export each icon from the approved sheet as a separate 1024×1024 PNG with a **fully transparent background** (no white tile, no label). Soft shadow under the product is OK. Filename = Spanish kebab-case slug matching the label.

---

## Full catalog checklist (177 unique names)

### FRUTAS (22)
Aguacates, Bananos, Guineos, Cocos, Fresas, Guayaba, Limas, Limones, Mangos, Mango Biche, Manzanas rojas, Manzanas verdes, Maracuyá, Moras, Naranjas, Papaya, Piña, Kiwi, Sandía, Uvas, Arándanos (solo orgánico), Tomates (solo orgánico)

### VERDURAS (31)
Ajo, Arracacha, Batatas / Camotes, Brócoli, Calabacín, Calabaza (amarilla), Cebolla larga, Cebollas moradas, Cidra / Guatila, Cilantro, Col rizada, Col rizada morada, Coliflor, Espárragos, Espinaca Baby, Habichuelas, Lechuga, Mix de lechugas, Papa dulce, Papas, Pepinos, Perejil liso, Pimientos / Pimentones, Plátanos - maduros, Plátanos - verdes, Remolacha, Repollitas, Rugula, Yuca, Zanahorias, Ahuyama zapayo

### PROTEÍNAS (23)
Camarones, Muslos de pollo, Pechugas de pollo, Carne de res - solomito, Carne de res - otra, Carne molida, Chicharron, Chuletas de cerdo, Cola de res, Punta de anca, Huevos, Jamón de cerdo, Jamón de pavo, Pavo molido, Queso campesino, Queso de cabra / oveja, Queso parmesano, Yogur griego, Yogur natural, Atún enlatado, Pescado fresco (salmón), Pescado fresco (tilapia), Queso mozzarella

### GRANOS Y BÁSICOS (25)
Arepas Caseras, Cereal de Quinua, Frijoles negros, Frijoles rojos, Bicarbonato, Granola - Keto, Harina de almendras, Harina de horno, Harina de maíz con quinua, Harina de maíz (para arepas), Harina integral, Lentejas, Levadura en polvo, Pan (integral), Pasta (de almendras), Pasta (integral sin gluten), Quinua, Tortillas, Almendras, Arroz blanco, Arroz integral, Avena, Granola, Nueces, Pecanos

### ESPECIAS Y CONDIMENTOS (26)
Azucar, Canela, Comino, Extracto de vainilla, Ghee, Mantequilla (sin sal), Marmalade, Mayonesa con limón, Miel, Mostaza, Orégano, Panela, Pasta de tomate, Pimentón, Sal (normal), Salsa de tomate (ketchup), Salsa picante, Salsa rosada, Vinagre balsámico, Aceite de coco, Aceite de oliva, Jarabe de arce, Mayonesa, Pimienta negra, Sal himalaya, Vinagre blanco (para limpiar)

### BOCADILLOS (19)
Cacao almendras, Chips, Chocolate de Hershey, Chocolate oscuro, Especial (mezcla de nueces / fiestas), Galletas para queso, Galletas saladas (integrales), Gelatina, Marshmallows, Palomitas de maíz (natural), Saltines, Semillas de chía, Semillas de girasol, Tosh (fresa), Tosh (miel), Almendras, Granola, Nueces, Pecanos

### BEBIDAS (14)
Agua de coco, Café instantáneo (Nescafe), Café molida, Chocolate caliente, Club Colombia - Dorada, Club Colombia - Negra, Jugos naturales, Leche de almendra, Leche de vaca (deslactosada), Té (aromatica), Vino - blanco, Vino - rosé, Vino - tinto, Whisky - Glenlivet

### HOGAR Y LIMPIEZA (17)
Bolsas para baños, Esponja, Esponja raspadora, Jabón para platos - Axion, BioVarsol Blanco, Aluminio, Bolsas de basura - grandes, Bolsas de basura - small, Bolsas grandes para congelador, Bolsas para bocadillos, Bolsas para sándwiches, Detergente para ropa, Envoltura de plástico, Jabón - lavaplatos - Cascade Platinum, Limpiador multiusos, Papel higiénico, Toallas de papel

**Similar items may share one icon** (e.g. Guineos≈Bananos, Frijoles negros/rojos, bolsas variants) once Dan approves the visual.
