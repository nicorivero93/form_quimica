import type { CellMatrix, CrystalData, RenderedAtom, RenderedBond } from '@/types/crystal';
import { covalentRadius } from './atomic-radii';

export interface SuperCell {
  x: 1 | 2 | 3;
  y: 1 | 2 | 3;
  z: 1 | 2 | 3;
}

export interface BuildResult {
  atoms: RenderedAtom[];
  bonds: RenderedBond[];
  centroid: [number, number, number];
  bounds: { min: [number, number, number]; max: [number, number, number] };
}

const BOND_TOLERANCE = 1.15;

/**
 * Multiplica un vector fraccional por la matriz de celda para obtener cartesianas.
 * pos = u·a + v·b + w·c (cellMatrix está en formato fila: [a, b, c]).
 */
function fracToCart(
  frac: [number, number, number],
  cell: CellMatrix,
): [number, number, number] {
  const [u, v, w] = frac;
  const [a, b, c] = cell;
  return [
    u * a[0] + v * b[0] + w * c[0],
    u * a[1] + v * b[1] + w * c[1],
    u * a[2] + v * b[2] + w * c[2],
  ];
}

/**
 * Expande una celda unitaria a una supercelda Nx×Ny×Nz.
 * Marca como "isUnitCell" a los átomos del primer bloque (i=j=k=0).
 */
export function buildSuperCell(crystal: CrystalData, superCell: SuperCell): RenderedAtom[] {
  const out: RenderedAtom[] = [];
  for (let i = 0; i < superCell.x; i++) {
    for (let j = 0; j < superCell.y; j++) {
      for (let k = 0; k < superCell.z; k++) {
        for (const atom of crystal.atoms) {
          const cart = fracToCart(
            [atom.frac[0] + i, atom.frac[1] + j, atom.frac[2] + k],
            crystal.cellMatrix,
          );
          out.push({
            element: atom.element,
            position: cart,
            isUnitCell: i === 0 && j === 0 && k === 0,
          });
        }
      }
    }
  }
  return out;
}

/**
 * Calcula los bonds entre átomos por proximidad: distancia < (r1 + r2) * tolerance.
 * O(n²) para mantenerlo simple; con n < 500 funciona bien.
 */
export function computeBonds(atoms: RenderedAtom[]): RenderedBond[] {
  const bonds: RenderedBond[] = [];
  for (let i = 0; i < atoms.length; i++) {
    const a = atoms[i];
    const ra = covalentRadius(a.element);
    for (let j = i + 1; j < atoms.length; j++) {
      const b = atoms[j];
      const rb = covalentRadius(b.element);
      const cutoff = (ra + rb) * BOND_TOLERANCE;
      const dx = a.position[0] - b.position[0];
      const dy = a.position[1] - b.position[1];
      const dz = a.position[2] - b.position[2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < cutoff && dist > 0.5) {
        bonds.push({
          from: i,
          to: j,
          fromElement: a.element,
          toElement: b.element,
          fromPos: a.position,
          toPos: b.position,
        });
      }
    }
  }
  return bonds;
}

/**
 * Centroide y bounds para centrar la cámara.
 */
export function computeBounds(atoms: RenderedAtom[]) {
  if (atoms.length === 0) {
    return {
      centroid: [0, 0, 0] as [number, number, number],
      bounds: {
        min: [0, 0, 0] as [number, number, number],
        max: [0, 0, 0] as [number, number, number],
      },
    };
  }
  const min: [number, number, number] = [Infinity, Infinity, Infinity];
  const max: [number, number, number] = [-Infinity, -Infinity, -Infinity];
  for (const a of atoms) {
    for (let i = 0; i < 3; i++) {
      if (a.position[i] < min[i]) min[i] = a.position[i];
      if (a.position[i] > max[i]) max[i] = a.position[i];
    }
  }
  const centroid: [number, number, number] = [
    (min[0] + max[0]) / 2,
    (min[1] + max[1]) / 2,
    (min[2] + max[2]) / 2,
  ];
  return { centroid, bounds: { min, max } };
}

export function buildCrystal(crystal: CrystalData, superCell: SuperCell): BuildResult {
  const atoms = buildSuperCell(crystal, superCell);
  const bonds = computeBonds(atoms);
  const { centroid, bounds } = computeBounds(atoms);
  return { atoms, bonds, centroid, bounds };
}
