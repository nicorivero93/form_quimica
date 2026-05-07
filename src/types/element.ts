export type ElementCategory =
  | 'alkali'
  | 'alkaline'
  | 'transition'
  | 'post-transition'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type Phase = 'Sólido' | 'Líquido' | 'Gas';

export interface Element {
  n: number;
  symbol: string;
  name: string;
  nameEn: string;
  wikiSlug: string;
  mass: number;
  category: ElementCategory;
  row: number;
  col: number;
  group: number;
  period: number;
  phase: Phase;
  config: string;
  electronegativity: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  density: number | null;
  oxidationStates: string;
  description: string;
  structures: string[];
}
