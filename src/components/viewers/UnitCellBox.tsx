import { useMemo } from 'react';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import type { CellMatrix } from '@/types/crystal';

interface Props {
  cellMatrix: CellMatrix;
  origin?: [number, number, number];
  color?: string;
  opacity?: number;
}

/**
 * Dibuja las 12 aristas del paralelepípedo definido por la celda unitaria.
 */
export function UnitCellBox({
  cellMatrix,
  origin = [0, 0, 0],
  color = '#fbbf24',
  opacity = 0.7,
}: Props) {
  const lines = useMemo(() => {
    const o = new THREE.Vector3(...origin);
    const a = new THREE.Vector3(...cellMatrix[0]);
    const b = new THREE.Vector3(...cellMatrix[1]);
    const c = new THREE.Vector3(...cellMatrix[2]);

    const v: THREE.Vector3[] = [
      o.clone(),                          // 0
      o.clone().add(a),                   // 1
      o.clone().add(b),                   // 2
      o.clone().add(a).add(b),            // 3
      o.clone().add(c),                   // 4
      o.clone().add(a).add(c),            // 5
      o.clone().add(b).add(c),            // 6
      o.clone().add(a).add(b).add(c),     // 7
    ];

    const edges: [THREE.Vector3, THREE.Vector3][] = [
      [v[0], v[1]], [v[0], v[2]], [v[1], v[3]], [v[2], v[3]],
      [v[4], v[5]], [v[4], v[6]], [v[5], v[7]], [v[6], v[7]],
      [v[0], v[4]], [v[1], v[5]], [v[2], v[6]], [v[3], v[7]],
    ];
    return edges.map(([from, to]): [[number, number, number], [number, number, number]] => [
      [from.x, from.y, from.z],
      [to.x, to.y, to.z],
    ]);
  }, [cellMatrix, origin]);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={color}
          transparent
          opacity={opacity}
          lineWidth={1.5}
          dashed={false}
        />
      ))}
    </>
  );
}
