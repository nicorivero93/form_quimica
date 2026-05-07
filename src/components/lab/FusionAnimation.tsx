import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import type { Group } from 'three';
import * as THREE from 'three';
import type { ReactionReactant } from '@/types/reaction';
import { colorFor } from '@/lib/jmol-colors';
import { renderRadius } from '@/lib/atomic-radii';

interface Props {
  reactants: ReactionReactant[];
  productLabel: string;
  durationMs: number;
  onDone: () => void;
}

export function FusionAnimation({ reactants, productLabel, durationMs, onDone }: Props) {
  const flatSymbols = useMemo(() => {
    const out: string[] = [];
    for (const r of reactants) for (let i = 0; i < r.count; i++) out.push(r.symbol);
    return out;
  }, [reactants]);

  const [phase, setPhase] = useState<'orbit' | 'flash' | 'reveal'>('orbit');

  useEffect(() => {
    const orbitMs = durationMs * 0.65;
    const flashMs = durationMs * 0.15;
    const t1 = window.setTimeout(() => setPhase('flash'), orbitMs);
    const t2 = window.setTimeout(() => setPhase('reveal'), orbitMs + flashMs);
    const t3 = window.setTimeout(onDone, durationMs);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [durationMs, onDone]);

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-lg border border-brand-500/40 bg-slate-950">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#59beff" />
        <Scene
          symbols={flatSymbols}
          productLabel={productLabel}
          phase={phase}
          orbitDurationMs={durationMs * 0.65}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-xs text-slate-400">
        {phase === 'reveal' ? '¡Listo!' : 'Fusionando…'}
      </div>
    </div>
  );
}

interface SceneProps {
  symbols: string[];
  productLabel: string;
  phase: 'orbit' | 'flash' | 'reveal';
  orbitDurationMs: number;
}

function Scene({ symbols, productLabel, phase, orbitDurationMs }: SceneProps) {
  const groupRef = useRef<Group>(null);
  const startRef = useRef<number | null>(null);

  const initialPositions = useMemo(() => {
    const radius = 2.5;
    return symbols.map((_, i) => {
      const angle = (i / symbols.length) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    });
  }, [symbols]);

  useFrame((state) => {
    if (phase !== 'orbit' || !groupRef.current) return;
    if (startRef.current === null) startRef.current = state.clock.elapsedTime;
    const t = (state.clock.elapsedTime - startRef.current) * 1000;
    const progress = Math.min(1, t / orbitDurationMs);
    const eased = 1 - Math.pow(1 - progress, 3);
    const radius = 2.5 * (1 - eased);
    groupRef.current.children.forEach((child, i) => {
      const baseAngle = (i / symbols.length) * Math.PI * 2;
      const spin = state.clock.elapsedTime * 1.5;
      const angle = baseAngle + spin;
      child.position.x = Math.cos(angle) * radius;
      child.position.y = Math.sin(angle) * radius;
      child.position.z = 0;
      const s = 1 - eased * 0.4;
      child.scale.setScalar(s);
    });
  });

  return (
    <group>
      {phase === 'orbit' && (
        <group ref={groupRef}>
          {symbols.map((sym, i) => (
            <ReactantOrb key={`${sym}-${i}`} symbol={sym} position={initialPositions[i].toArray() as [number, number, number]} />
          ))}
        </group>
      )}
      {phase === 'flash' && <FlashOrb />}
      {phase === 'reveal' && <ProductReveal label={productLabel} />}
    </group>
  );
}

function ReactantOrb({ symbol, position }: { symbol: string; position: [number, number, number] }) {
  const color = colorFor(symbol);
  const radius = Math.max(renderRadius(symbol) * 0.8, 0.4);
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
      <Text
        position={[0, 0, radius + 0.05]}
        fontSize={radius * 0.9}
        color="#0f172a"
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
}

function FlashOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const m = meshRef.current.material as THREE.MeshBasicMaterial;
    m.opacity = Math.max(0, (m.opacity ?? 1) - delta * 2);
    meshRef.current.scale.addScalar(delta * 8);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={1} />
    </mesh>
  );
}

function ProductReveal({ label }: { label: string }) {
  const groupRef = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.scale.addScalar(delta * 1.5);
    if (groupRef.current.scale.x > 1) groupRef.current.scale.setScalar(1);
  });
  return (
    <group ref={groupRef} scale={0.1}>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[0, 0, 1.25]}
        fontSize={0.7}
        color="#052e16"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}
