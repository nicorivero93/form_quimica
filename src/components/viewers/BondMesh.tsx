import { useMemo } from 'react';
import * as THREE from 'three';
import { colorFor } from '@/lib/jmol-colors';

interface Props {
  fromPos: [number, number, number];
  toPos: [number, number, number];
  fromElement: string;
  toElement: string;
  radius?: number;
}

export function BondMesh({ fromPos, toPos, fromElement, toElement, radius = 0.12 }: Props) {
  const { midpoint, length, quaternion } = useMemo(() => {
    const from = new THREE.Vector3(...fromPos);
    const to = new THREE.Vector3(...toPos);
    const mid = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(to, from);
    const len = dir.length();
    dir.normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    return { midpoint: mid, length: len, quaternion: quat };
  }, [fromPos, toPos]);

  const fromColor = colorFor(fromElement);
  const toColor = colorFor(toElement);
  const halfLen = length / 2;

  // Posición de cada mitad: a partir del midpoint, desplazada media-cuarta en dirección
  const fromOffset = new THREE.Vector3(0, -halfLen / 2, 0).applyQuaternion(quaternion);
  const toOffset = new THREE.Vector3(0, halfLen / 2, 0).applyQuaternion(quaternion);

  return (
    <group position={midpoint} quaternion={quaternion}>
      <mesh position={[fromOffset.x, fromOffset.y, fromOffset.z]} castShadow>
        <cylinderGeometry args={[radius, radius, halfLen, 16]} />
        <meshStandardMaterial color={fromColor} metalness={0.4} roughness={0.4} />
      </mesh>
      <mesh position={[toOffset.x, toOffset.y, toOffset.z]} castShadow>
        <cylinderGeometry args={[radius, radius, halfLen, 16]} />
        <meshStandardMaterial color={toColor} metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  );
}
