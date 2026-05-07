export interface CrystalAtom {
  element: string;
  frac: [number, number, number];
  xyz: [number, number, number];
}

export interface CrystalLattice {
  a: number;
  b: number;
  c: number;
  alpha: number;
  beta: number;
  gamma: number;
}

export type CellMatrix = [
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

export interface CrystalData {
  id: string;
  formula: string;
  name: string;
  spaceGroup: string;
  spaceGroupNumber: number;
  lattice: CrystalLattice;
  cellMatrix: CellMatrix;
  atoms: CrystalAtom[];
  source?: string;
  codId?: number;
}

export interface RenderedAtom {
  element: string;
  position: [number, number, number];
  isUnitCell: boolean;
}

export interface RenderedBond {
  from: number;
  to: number;
  fromElement: string;
  toElement: string;
  fromPos: [number, number, number];
  toPos: [number, number, number];
}
