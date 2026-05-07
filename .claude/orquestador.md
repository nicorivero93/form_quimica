# Orquestador del proyecto — `tabla-atomos`

> Generado por `/orquestador` el 2026-05-07.
> Esta es la fuente de verdad para convenciones, reglas y decisiones de este repo.

---

## Qué es esto

**Tabla periódica 3D interactiva** de los 118 elementos químicos con visualizaciones científicamente precisas: cristales con CIFs reales del COD, alótropos, minerales y moléculas vía PubChem.

**Objetivo declarado de Nico**: app educativa visual, mobile-first, que se pueda usar sin internet (PWA con cache offline). Diferenciador: estructuras 3D reales (no generadas algorítmicamente). En curso: agregar una sección `/lab` con **funciones de fusión química, fusión nuclear y descomposición** estilo Little Alchemy curado (ver `~/.claude/plans/holis-necesito-que-armemos-delegated-platypus.md`).

---

## Stack

| Capa | Tech | Notas |
|---|---|---|
| Frontend | React 18 + Vite 5 + TypeScript 5.6 | Sin backend propio: webapp 100% estática. |
| Estilos | Tailwind CSS 3 + shadcn-style (Radix + CVA) | `tailwind.config.js`, tokens en `src/styles/`. |
| Estado | Zustand 5 | `src/store/ui-store.ts` único hoy. Cuando crezca, sumar stores por feature (ej: `lab-store.ts`). |
| 3D cristales | three 0.170 + @react-three/fiber 8 + @react-three/drei + @react-three/postprocessing | PBR + bloom + contact shadows. |
| 3D moléculas | 3dmol.js 2 (lazy) | Para SDFs de PubChem. Carga on-demand. |
| Datos remotos | TanStack Query 5 + persistencia IndexedDB (`idb-keyval`) | Wikipedia + PubChem cacheados offline. |
| Routing | react-router-dom 6 | Rutas declaradas en `src/App.tsx`. |
| PWA | vite-plugin-pwa | Cache de JSONs de cristales + imágenes Wikipedia. |
| Tests | Vitest 2 (unit) + Playwright 1.48 (e2e) | jsdom + fake-indexeddb en setup. |
| Errores | Sentry React 8 | Init condicional a `import.meta.env.PROD` + `VITE_SENTRY_DSN`. |
| Build cristales | Python + `pymatgen` (build-time) | `scripts/build_crystals.py` baja CIFs del COD. CI no necesita Python. |
| Deploy | Firebase Hosting | `firebase.json` ya configurado. |

### Comandos de uso diario

```bash
npm run dev               # vite dev server, http://localhost:5173
npm test                  # vitest run (unit)
npm run test:watch        # vitest watch
npm run test:coverage     # vitest + v8 coverage
npm run test:e2e          # playwright (requiere build previo)
npm run lint              # tsc --noEmit (no eslint)
npm run build             # tsc -b && vite build
npm run preview           # serve dist/

npm run build:crystals    # python scripts/build_crystals.py — solo si tocás cristales
firebase deploy --only hosting
```

---

## Estructura del repo

```
.
├── public/
│   └── data/crystals/         JSONs pre-procesados desde COD (commiteados)
├── scripts/
│   └── build_crystals.py      Build-time: descarga CIFs + genera JSONs
├── src/
│   ├── App.tsx                Router (HomePage en todas las rutas hoy)
│   ├── main.tsx               Entry: providers (QueryClient, Router, Sentry)
│   ├── pages/
│   │   └── HomePage.tsx       Pantalla única: tabla + modal
│   ├── components/
│   │   ├── PeriodicTable/     Grid 18×10 + ElementCell + búsqueda + legend
│   │   ├── ElementModal/      Dialog con tabs: Material / Estructuras / Datos
│   │   ├── viewers/
│   │   │   ├── CrystalViewer.tsx       r3f + AtomMesh + BondMesh + UnitCellBox
│   │   │   ├── MoleculeViewer.tsx      3dmol.js (lazy)
│   │   │   ├── AtomMesh.tsx, BondMesh.tsx, SceneLighting.tsx, etc.
│   │   ├── lab/               (futuro: ver plan /lab)
│   │   └── shared/Footer.tsx  Footer del estudio (regla 11 global)
│   ├── data/
│   │   ├── elements.ts        118 elementos con metadata química
│   │   ├── structures.ts      Mapeo structureId → CrystalStructure | MoleculeStructure | AtomStructure
│   │   └── categories.ts      Colores y etiquetas por categoría
│   ├── hooks/
│   │   ├── useCrystalStructure.ts    fetch JSON de /data/crystals/ con TanStack Query
│   │   ├── usePubChemMolecule.ts     PubChem API + cache
│   │   └── useWikipediaImage.ts      Wikipedia API + cache
│   ├── lib/
│   │   ├── atomic-radii.ts            Cordero 2008 + covalentRadius()
│   │   ├── crystal-builder.ts         buildSuperCell() + computeBonds() (geométrico)
│   │   ├── material-presets.ts        PBR por categoría (metalness/roughness)
│   │   ├── pubchem-api.ts, wikipedia-api.ts
│   │   ├── sentry.ts                  init condicional
│   │   └── utils.ts
│   ├── store/
│   │   └── ui-store.ts        Zustand: selección, search, controles 3D
│   ├── styles/                Tailwind base + tokens
│   ├── test/setup.ts          fake-indexeddb + @testing-library/jest-dom
│   └── types/
│       ├── element.ts, crystal.ts, molecule.ts
├── tests/                      Playwright E2E
├── vite.config.ts              + PWA plugin
├── vitest.config.ts            jsdom + setup
├── playwright.config.ts
├── firebase.json               hosting
└── tsconfig.json               alias @/ → src/
```

---

## Convenciones observadas

- **Idioma**: UI y comentarios en español rioplatense/neutro (descripciones de elementos están en español, ej: "El que respirás", "Tan fuerte como el acero pero la mitad de pesado"). Código (variables, funciones) en inglés.
- **Naming**: `camelCase` para variables/funciones, `PascalCase` para componentes y types. Archivos de componentes en `PascalCase.tsx`; lib/data/utils en `kebab-case.ts`.
- **Imports**: alias `@/` apunta a `src/`. Usar siempre `@/...` para imports cross-feature; `./` solo para co-located.
- **Tests colocados** junto al archivo (`crystal-builder.test.ts` al lado de `crystal-builder.ts`). E2E en `tests/`.
- **Tailwind**: tokens semánticos, no colores raw. Categorías de elementos tienen colores propios (`data/categories.ts`).
- **Commits**: español, estilo libre (no Conventional Commits estricto). Mensajes cortos descriptivos.
- **Comentarios**: solo cuando el WHY es no obvio (constraint oculta, fix de un bug específico).

---

## Reglas específicas de este repo

### 1. Curado > generado para reacciones químicas

La sección `/lab` (en construcción) usa **datasets curados a mano** (`reactions-chemical.ts`, `reactions-nuclear.ts`), no un motor de reglas (electronegatividad + octeto + valencia). Razones: rigor pedagógico, evitar errores de predicción, y aprovechar las estructuras 3D que ya existen en `data/structures.ts`. Si en el futuro querés un motor predictivo, va aparte como **fallback** del curado, no en lugar de.

### 2. Cristales: build-time, no runtime

Los CIFs del COD se descargan **una sola vez** con `scripts/build_crystals.py` y se commitean los JSONs resultantes a `public/data/crystals/`. **Nunca** llamar a `crystallography.net` ni a APIs de cristales en runtime — rompe offline, suma latencia, y a veces tiene CORS. Si necesitás un cristal nuevo:

```bash
python scripts/build_crystals.py <id-nuevo>
```

Y agregar la entrada en `data/structures.ts`.

### 3. Moléculas: PubChem en runtime con cache agresivo

A diferencia de cristales, las moléculas se traen en runtime desde PubChem (`hooks/usePubChemMolecule.ts`) **porque** TanStack Query las cachea en IndexedDB y la PWA las sirve offline. Si rompe el modal de moléculas, primero verificá que la URL de PubChem siga viva, después el cache.

### 4. Tres tipos de Structure y sus viewers

`STRUCTURES` en `data/structures.ts` discrimina por `type`:
- `'crystal'` → `<CrystalViewer>` (r3f + JSON local).
- `'molecule'` → `<MoleculeViewer>` (3dmol.js + PubChem).
- `'atom'` → vista atómica simple (sin estructura cristalina, ej. gases nobles).

Cualquier feature nueva que muestre productos químicos en 3D **tiene que** soportar los 3 tipos o documentar por qué no.

### 5. Performance del viewer 3D

`CrystalViewer` con `superCellSize=3` puede llegar a ~200 átomos. Si agregás un viewer nuevo, mantener:
- Suspense + lazy load para 3dmol.js (es pesado).
- `frameloop="demand"` cuando `autoRotate=false`.
- No instanciar `<Canvas>` múltiples veces en la misma pantalla — reusarlo si es posible.

### 6. Mobile-first (regla 9 global de Nico)

- `viewport-fit=cover` en `index.html` (notch).
- `apple-mobile-web-app-capable` + `apple-touch-icon`.
- Inputs con `font-size: 16px` (no auto-zoom iOS).
- PWA manifest con `purpose: 'any maskable'`.
- La tabla periódica completa (118 celdas) es difícil en celular — la `MiniPeriodicTable` del lab debe pensarse buscador + chips si no entra cómoda.

### 7. Footer del estudio (regla 11 global)

`<Footer />` está en `src/components/shared/Footer.tsx` y se monta una sola vez en `App.tsx` fuera de `<Routes>`. Si agregás una pantalla nueva, queda automáticamente con footer. **No** duplicar el componente por ruta.

### 8. Sentry (regla 12 global)

`src/lib/sentry.ts` con init condicional a `import.meta.env.PROD && VITE_SENTRY_DSN`. Si está vacío, la app sigue andando sin Sentry. **No** poner DSN hardcodeado.

### 9. Tests críticos a mantener verdes

- `src/data/elements.test.ts` — valida los 118 elementos (Z secuencial, sin duplicados, etc).
- `src/lib/crystal-builder.test.ts` — superceldas y bonds geométricos.
- `src/components/PeriodicTable/PeriodicTable.test.tsx` — smoke del grid.
- (Futuro) `src/lib/reaction-engine.test.ts` — match de reacciones del lab.

---

## Archivos espejo cliente ↔ servidor

**No aplica.** Este repo es 100% cliente. Toda la lógica vive en el browser; los datos remotos vienen de Wikipedia y PubChem (públicos, sin backend propio).

---

## Qué NO hacer acá

1. **No** llamar a `crystallography.net` en runtime — los cristales son build-time (script Python).
2. **No** importar `data/elements.ts` ni `data/structures.ts` desde dentro de un componente UI sin tipar — usar siempre los types de `src/types/`.
3. **No** crear nuevos `<Canvas>` r3f anidados dentro de otro Canvas. Un Canvas por pantalla.
4. **No** mockear `three` ni `@react-three/fiber` en tests — testear lógica pura (en `lib/`) o usar Playwright para verificación visual.
5. **No** poner secrets ni DSNs hardcodeados — solo via `.env.local` con prefijo `VITE_`.
6. **No** mergear sin que `npm test` y `npm run lint` (que es `tsc --noEmit`) pasen verde.
7. **No** subir documentación comercial al repo (regla 8 global): `docs/propuestas/`, `docs/ADENDA-*.md`, `*.pdf` van al `.gitignore`.
8. **No** generar reacciones químicas inventadas con un motor de reglas en `/lab` — usar el dataset curado. Si hace falta una reacción nueva, sumarla a `reactions-chemical.ts` con descripción y `discoveryHint`.

---

## Deuda visible (al 2026-05-07)

### 🟡 En curso
- **Sección `/lab`** (fusión química / nuclear / descomposición) — plan en `~/.claude/plans/holis-necesito-que-armemos-delegated-platypus.md`. No empezada todavía.

### 🟢 Nice to have
- Tests E2E Playwright son mínimos. Sumar 2-3 specs cuando estabilice `/lab`.
- `oxidationStates` y `electronegativity` en `data/elements.ts` están como datos textuales — si en algún momento se usan para predicción, normalizar a estructura tipada.
- `App.tsx` tiene 3 rutas que cargan la misma `HomePage`. Si crece el routing, splitear las páginas por ruta.

---

## Bitácora

- **2026-05-07** | Bootstrap inicial del orquestador. Plan aprobado para sumar `/lab` (fusión química/nuclear/descomposición curada, ~40-60 reacciones, gameificación con localStorage, animación r3f). Implementación pendiente.
