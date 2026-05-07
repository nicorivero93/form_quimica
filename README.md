# Tabla Periódica 3D

Webapp interactiva de los 118 elementos químicos con visualizaciones 3D científicamente precisas. Cristales con CIFs reales del Crystallography Open Database, alótropos, minerales, y moléculas vía PubChem.

**Demo local**: `npm install && npm run dev`

## Por qué existe

Las apps de tabla periódica más conocidas o son tablas planas (cero 3D), o usan estructuras cristalinas generadas algorítmicamente que se ven todas iguales y no tienen parámetros de red reales. Esta arranca de la base correcta: descarga CIFs reales del COD, los pre-procesa con `pymatgen` (espacio de simetría completo, supercelda, parámetros a/b/c/α/β/γ exactos) y los renderiza con React Three Fiber + materiales PBR por categoría de elemento. Resultado: el oro brilla como oro, el grafito se ve mate, el cuarzo translúcido.

## Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Estilos**: Tailwind CSS + componentes estilo shadcn/ui (Radix primitives + class-variance-authority)
- **3D**:
  - `three` + `@react-three/fiber` + `@react-three/drei` para cristales (PBR materials, bloom, contact shadows)
  - `3dmol.js` (lazy) para moléculas SDF de PubChem
- **Datos**: TanStack Query con persistencia en IndexedDB para Wikipedia + PubChem
- **State**: Zustand
- **PWA**: vite-plugin-pwa con cache offline de los JSONs de cristales y de las imágenes de Wikipedia
- **Tests**: Vitest (unit), Playwright (E2E)
- **Errores**: Sentry (init condicional a `import.meta.env.PROD` + `VITE_SENTRY_DSN`)

## Estructura de datos

Los CIFs del COD se descargan **una vez en build-time** con `scripts/build_crystals.py` y se convierten a JSONs simples en `public/data/crystals/`. El cliente nunca toca crystallography.net en runtime, no hay CORS, y todo cachea limpio.

```json
{
  "id": "Au-fcc",
  "formula": "Au",
  "spaceGroup": "Fm-3m",
  "lattice": { "a": 4.078, "b": 4.078, "c": 4.078, "alpha": 90, "beta": 90, "gamma": 90 },
  "cellMatrix": [[4.078, 0, 0], [0, 4.078, 0], [0, 0, 4.078]],
  "atoms": [
    { "element": "Au", "frac": [0, 0, 0], "xyz": [0, 0, 0] },
    ...
  ]
}
```

## Setup

### Frontend

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # vitest unit
npm run test:e2e     # playwright (requiere build previo)
npm run build        # tsc -b && vite build
npm run preview      # serve dist/
```

### Cristales (Python, build-time)

Para regenerar todos los JSONs desde el COD:

```bash
pip install -r scripts/requirements.txt
python scripts/build_crystals.py
```

Para regenerar uno solo:

```bash
python scripts/build_crystals.py Au-fcc Fe-bcc
```

Los JSONs van a `public/data/crystals/` y se commitean al repo. CI no necesita Python.

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

```bash
VITE_SENTRY_DSN=     # opcional. Vacío = Sentry desactivado.
```

## Atribuciones

- **Crystallography Open Database (COD)** — CIFs liberados como CC0.
- **Wikipedia** — imágenes y resúmenes bajo CC BY-SA.
- **PubChem** — moléculas (datos de dominio público del NIH).
- **Jmol/CPK colors** — convención estándar para colores por elemento.

## Licencia

[MIT](LICENSE) © 2026 [tomerivero.dev](https://tomerivero-dev.web.app)

## Reglas globales aplicadas

Este repo respeta:
- `~/.claude/CLAUDE.md` regla #11: footer único con `© {año} · tomerivero.dev` en todas las pantallas.
- `~/.claude/CLAUDE.md` regla #12: Sentry desde día 1 (init condicional).
- `~/.claude/CLAUDE.md` regla #9: PWA mobile-first con viewport-fit=cover, font-size 16px en inputs, manifest con maskable, dark mode default.
- `~/.claude/rules/testing.md`: Vitest + Playwright, colocation de tests, setup global con fake-indexeddb.
