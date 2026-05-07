import { Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Pause, Play, Box, Link, Maximize2 } from 'lucide-react';

import type { CrystalData } from '@/types/crystal';
import { buildCrystal } from '@/lib/crystal-builder';
import { ELEMENTS_BY_SYMBOL } from '@/data/elements';
import { useUiStore } from '@/store/ui-store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { AtomMesh } from './AtomMesh';
import { BondMesh } from './BondMesh';
import { UnitCellBox } from './UnitCellBox';
import { SceneLighting } from './SceneLighting';

interface Props {
  crystal: CrystalData;
}

function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 768px)').matches;
}

export function CrystalViewer({ crystal }: Props) {
  const superCellSize = useUiStore((s) => s.superCellSize);
  const setSuperCellSize = useUiStore((s) => s.setSuperCellSize);
  const showBonds = useUiStore((s) => s.showBonds);
  const showUnitCell = useUiStore((s) => s.showUnitCell);
  const autoRotate = useUiStore((s) => s.autoRotate);
  const toggleBonds = useUiStore((s) => s.toggleBonds);
  const toggleUnitCell = useUiStore((s) => s.toggleUnitCell);
  const toggleAutoRotate = useUiStore((s) => s.toggleAutoRotate);

  const [mobile] = useState(isMobile);

  const built = useMemo(
    () => buildCrystal(crystal, { x: superCellSize, y: superCellSize, z: superCellSize }),
    [crystal, superCellSize],
  );

  const cameraDist = useMemo(() => {
    const { min, max } = built.bounds;
    const size = Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
    return Math.max(size * 1.4, 8);
  }, [built.bounds]);

  const elementsLegend = useMemo(() => {
    const set = new Set(built.atoms.map((a) => a.element));
    return Array.from(set);
  }, [built.atoms]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950 sm:h-[600px]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [cameraDist, cameraDist * 0.8, cameraDist], fov: 45 }}
        frameloop={autoRotate ? 'always' : 'demand'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#020617']} />
        <Suspense fallback={null}>
          <SceneLighting />
          <group position={[-built.centroid[0], -built.centroid[1], -built.centroid[2]]}>
            {built.atoms.map((atom, i) => {
              const cat =
                ELEMENTS_BY_SYMBOL[atom.element]?.category ?? 'unknown';
              return (
                <AtomMesh
                  key={`${atom.element}-${i}`}
                  element={atom.element}
                  category={cat}
                  position={atom.position}
                  highlight={atom.isUnitCell && superCellSize > 1}
                />
              );
            })}
            {showBonds &&
              built.bonds.map((bond, i) => (
                <BondMesh
                  key={`bond-${i}`}
                  fromPos={bond.fromPos}
                  toPos={bond.toPos}
                  fromElement={bond.fromElement}
                  toElement={bond.toElement}
                />
              ))}
            {showUnitCell && <UnitCellBox cellMatrix={crystal.cellMatrix} />}
          </group>
          <ContactShadows
            position={[0, -cameraDist * 0.5, 0]}
            opacity={0.4}
            scale={cameraDist * 3}
            blur={2.5}
            far={cameraDist * 2}
          />
          {!mobile && (
            <EffectComposer>
              <Bloom intensity={0.45} luminanceThreshold={0.6} luminanceSmoothing={0.4} mipmapBlur />
            </EffectComposer>
          )}
        </Suspense>
        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          autoRotate={autoRotate}
          autoRotateSpeed={0.6}
          minDistance={cameraDist * 0.4}
          maxDistance={cameraDist * 4}
        />
      </Canvas>

      {/* Top-left: stats */}
      <div className="pointer-events-none absolute left-3 top-3 max-w-[60%] space-y-1 text-xs text-slate-300">
        <div className="font-mono text-base font-bold text-slate-100">{crystal.formula}</div>
        <div className="text-slate-400">{crystal.name}</div>
        <div className="rounded-md border border-slate-800/80 bg-slate-900/80 p-2 font-mono text-[11px] backdrop-blur">
          <div className="text-slate-500">Grupo espacial</div>
          <div className="text-slate-200">
            {crystal.spaceGroup} (#{crystal.spaceGroupNumber})
          </div>
          <div className="mt-1 text-slate-500">Parámetros (Å)</div>
          <div className="text-slate-200">
            a = {crystal.lattice.a.toFixed(3)} · b = {crystal.lattice.b.toFixed(3)} · c = {crystal.lattice.c.toFixed(3)}
          </div>
          <div className="text-slate-500">
            α = {crystal.lattice.alpha}° · β = {crystal.lattice.beta}° · γ = {crystal.lattice.gamma}°
          </div>
        </div>
      </div>

      {/* Bottom-left: legend */}
      {elementsLegend.length > 1 && (
        <div className="pointer-events-none absolute bottom-3 left-3 flex gap-2">
          {elementsLegend.map((el) => (
            <div
              key={el}
              className="flex items-center gap-1.5 rounded-md border border-slate-800/80 bg-slate-900/80 px-2 py-1 text-xs backdrop-blur"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getColor(el) }}
                aria-hidden
              />
              <span className="font-mono text-slate-200">{el}</span>
            </div>
          ))}
        </div>
      )}

      {/* Top-right: play/pause */}
      <div className="absolute right-3 top-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleAutoRotate}
          aria-label={autoRotate ? 'Pausar rotación' : 'Reanudar rotación'}
        >
          {autoRotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Bottom-right: toggles */}
      <div className="absolute bottom-3 right-3 flex flex-wrap items-center justify-end gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleBonds}
          className={cn(showBonds && 'ring-1 ring-brand-500/50')}
          aria-pressed={showBonds}
        >
          <Link className="h-3.5 w-3.5" />
          Enlaces
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleUnitCell}
          className={cn(showUnitCell && 'ring-1 ring-brand-500/50')}
          aria-pressed={showUnitCell}
        >
          <Box className="h-3.5 w-3.5" />
          Celda
        </Button>
        <div className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900/80 p-1 backdrop-blur">
          <Maximize2 className="ml-1 h-3.5 w-3.5 text-slate-400" />
          {([1, 2, 3] as const).map((n) => (
            <button
              key={n}
              onClick={() => setSuperCellSize(n)}
              className={cn(
                'rounded px-2 py-0.5 text-xs font-medium transition',
                superCellSize === n
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800',
              )}
              aria-pressed={superCellSize === n}
            >
              {n}×{n}×{n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getColor(symbol: string): string {
  // Importado lazily desde jmol-colors al usarse en el JSX (evita import cycle)
  const map: Record<string, string> = {
    H: '#FFFFFF', C: '#909090', N: '#3050F8', O: '#FF0D0D', F: '#90E050',
    Na: '#AB5CF2', Mg: '#8AFF00', Al: '#BFA6A6', Si: '#F0C8A0', P: '#FF8000', S: '#FFFF30', Cl: '#1FF01F',
    K: '#8F40D4', Ca: '#3DFF00', Ti: '#BFC2C7', Cr: '#8A99C7', Fe: '#E06633', Co: '#F090A0', Ni: '#50D050',
    Cu: '#C88033', Zn: '#7D80B0', As: '#BD80E3', Ag: '#C0C0C0', Au: '#FFD123', Hg: '#B8B8D0', Pb: '#575961',
    Bi: '#9E4FB5', Po: '#AB5C00', Mo: '#54B5B5', Pt: '#D0D0E0', W: '#2194D6',
  };
  return map[symbol] ?? '#cccccc';
}
