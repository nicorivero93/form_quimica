export interface MoleculeData {
  cid: number;
  name: string;
  formula?: string;
  sdf: string;
  is3D: boolean;
}

export type MoleculeViewerStyle = 'stick' | 'sphere' | 'ballstick';
