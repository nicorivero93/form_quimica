import { describe, it, expect } from 'vitest';
import { buildSuperCell, computeBonds, buildCrystal } from './crystal-builder';
import type { CrystalData } from '@/types/crystal';

const AU_FCC: CrystalData = {
  id: 'Au-fcc',
  formula: 'Au',
  name: 'Oro FCC',
  spaceGroup: 'Fm-3m',
  spaceGroupNumber: 225,
  lattice: { a: 4.078, b: 4.078, c: 4.078, alpha: 90, beta: 90, gamma: 90 },
  cellMatrix: [
    [4.078, 0, 0],
    [0, 4.078, 0],
    [0, 0, 4.078],
  ],
  atoms: [
    { element: 'Au', frac: [0, 0, 0], xyz: [0, 0, 0] },
    { element: 'Au', frac: [0.5, 0.5, 0], xyz: [2.039, 2.039, 0] },
    { element: 'Au', frac: [0.5, 0, 0.5], xyz: [2.039, 0, 2.039] },
    { element: 'Au', frac: [0, 0.5, 0.5], xyz: [0, 2.039, 2.039] },
  ],
};

describe('buildSuperCell', () => {
  it('mantiene los 4 átomos de la celda primitiva en 1×1×1', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 1, y: 1, z: 1 });
    expect(atoms).toHaveLength(4);
    expect(atoms.every((a) => a.element === 'Au')).toBe(true);
    expect(atoms.every((a) => a.isUnitCell)).toBe(true);
  });

  it('expande a 32 átomos en supercelda 2×2×2', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 2, y: 2, z: 2 });
    expect(atoms).toHaveLength(4 * 8);
    const inUnitCell = atoms.filter((a) => a.isUnitCell);
    expect(inUnitCell).toHaveLength(4);
  });

  it('expande a 108 átomos en supercelda 3×3×3', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 3, y: 3, z: 3 });
    expect(atoms).toHaveLength(4 * 27);
  });

  it('coloca los átomos replicados a múltiplos del parámetro de red', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 2, y: 1, z: 1 });
    const xs = atoms.map((a) => a.position[0]).sort((a, b) => a - b);
    expect(xs[0]).toBeCloseTo(0, 3);
    expect(xs[xs.length - 1]).toBeCloseTo(4.078 + 2.039, 3);
  });
});

describe('computeBonds', () => {
  it('encuentra los 12 vecinos más cercanos en FCC (a/√2 ≈ 2.88 Å)', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 3, y: 3, z: 3 });
    const bonds = computeBonds(atoms);
    // Cada átomo interno tiene 12 vecinos. Cada bond se cuenta una sola vez.
    // No verificamos exacto porque los átomos del borde tienen menos vecinos,
    // pero debe haber un número grande.
    expect(bonds.length).toBeGreaterThan(50);

    // La distancia más corta entre vecinos debe rondar 2.88 Å
    const distances = bonds.map((b) => {
      const dx = b.fromPos[0] - b.toPos[0];
      const dy = b.fromPos[1] - b.toPos[1];
      const dz = b.fromPos[2] - b.toPos[2];
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    });
    const minDist = Math.min(...distances);
    expect(minDist).toBeCloseTo(2.884, 1);
  });

  it('no genera bonds con átomos en la misma posición', () => {
    const atoms = buildSuperCell(AU_FCC, { x: 1, y: 1, z: 1 });
    const bonds = computeBonds(atoms);
    for (const b of bonds) {
      const dx = b.fromPos[0] - b.toPos[0];
      const dy = b.fromPos[1] - b.toPos[1];
      const dz = b.fromPos[2] - b.toPos[2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      expect(d).toBeGreaterThan(0.5);
    }
  });
});

describe('buildCrystal', () => {
  it('devuelve atoms, bonds, centroide y bounds coherentes', () => {
    const result = buildCrystal(AU_FCC, { x: 2, y: 2, z: 2 });
    expect(result.atoms).toHaveLength(32);
    expect(result.bonds.length).toBeGreaterThan(0);
    expect(result.bounds.min[0]).toBeCloseTo(0, 3);
    expect(result.bounds.max[0]).toBeCloseTo(2 * 4.078 - 2.039, 3);
    expect(result.centroid[0]).toBeGreaterThan(0);
    expect(result.centroid[0]).toBeLessThan(2 * 4.078);
  });
});
