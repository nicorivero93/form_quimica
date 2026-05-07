import { useMemo } from 'react';
import * as THREE from 'three';
import { colorFor } from '@/lib/jmol-colors';
import { renderRadius } from '@/lib/atomic-radii';
import { getElementMaterial } from '@/lib/material-presets';
import type { ElementCategory } from '@/types/element';

interface Props {
  element: string;
  category: ElementCategory;
  position: [number, number, number];
  highlight?: boolean;
}

export function AtomMesh({ element, category, position, highlight = false }: Props) {
  const color = colorFor(element);
  const radius = renderRadius(element);
  const preset = useMemo(() => getElementMaterial(element, category), [element, category]);

  return (
    <mesh position={position} castShadow receiveShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshPhysicalMaterial
        color={new THREE.Color(color)}
        metalness={preset.metalness}
        roughness={preset.roughness}
        clearcoat={preset.clearcoat}
        clearcoatRoughness={preset.clearcoatRoughness}
        reflectivity={preset.reflectivity}
        envMapIntensity={preset.envMapIntensity}
        emissive={highlight ? new THREE.Color(color) : new THREE.Color(0x000000)}
        emissiveIntensity={highlight ? 0.4 : 0}
      />
    </mesh>
  );
}
