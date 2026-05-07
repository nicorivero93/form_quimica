export type ReactionType = 'chemical' | 'nuclear' | 'decomposition';

export type ReactionEnergy = 'exothermic' | 'endothermic';

export interface ReactionReactant {
  symbol: string;
  count: number;
}

export interface ReactionProduct {
  formula: string;
  name: string;
  count: number;
  elementSymbol?: string;
  structureId?: string;
}

export interface Reaction {
  id: string;
  type: ReactionType;
  reactants: ReactionReactant[];
  products: ReactionProduct[];
  conditions?: string;
  energy?: ReactionEnergy;
  description: string;
  reversible?: boolean;
  discoveryHint?: string;
}
