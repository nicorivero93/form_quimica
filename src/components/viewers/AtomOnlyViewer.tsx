import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ELEMENTS_BY_SYMBOL } from '@/data/elements';
import { AtomMesh } from './AtomMesh';
import { SceneLighting } from './SceneLighting';

interface Props {
  symbol: string;
}

export function AtomOnlyViewer({ symbol }: Props) {
  const element = ELEMENTS_BY_SYMBOL[symbol];
  if (!element) return null;

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950 sm:h-[600px]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 2, 4], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <SceneLighting intensity={1.2} />
        <AtomMesh
          element={symbol}
          category={element.category}
          position={[0, 0, 0]}
          highlight
        />
        <OrbitControls enableDamping dampingFactor={0.08} autoRotate autoRotateSpeed={1.0} />
      </Canvas>
      <div className="pointer-events-none absolute left-3 top-3 max-w-[80%] rounded-md border border-slate-800/80 bg-slate-900/80 p-3 text-xs text-slate-300 backdrop-blur">
        <div className="font-mono text-2xl font-bold text-slate-100">{element.symbol}</div>
        <div className="text-slate-400">{element.name} · átomo aislado</div>
      </div>
    </div>
  );
}
