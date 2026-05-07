import type { Reaction, ReactionReactant, ReactionType } from '@/types/reaction';

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function gcdAll(nums: number[]): number {
  return nums.reduce((acc, n) => gcd(acc, n));
}

function normalize(reactants: ReactionReactant[]): ReactionReactant[] {
  const map = new Map<string, number>();
  for (const r of reactants) {
    map.set(r.symbol, (map.get(r.symbol) ?? 0) + r.count);
  }
  return Array.from(map.entries())
    .map(([symbol, count]) => ({ symbol, count }))
    .sort((a, b) => a.symbol.localeCompare(b.symbol));
}

function reduceToMinimal(reactants: ReactionReactant[]): ReactionReactant[] {
  if (reactants.length === 0) return [];
  const counts = reactants.map((r) => r.count);
  const g = gcdAll(counts);
  return reactants.map((r) => ({ symbol: r.symbol, count: r.count / g }));
}

function reactantsEqual(a: ReactionReactant[], b: ReactionReactant[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].symbol !== b[i].symbol || a[i].count !== b[i].count) return false;
  }
  return true;
}

export function findReaction(
  reactants: ReactionReactant[],
  type: ReactionType,
  dataset: Reaction[],
): Reaction | null {
  if (reactants.length === 0) return null;
  const inputNorm = reduceToMinimal(normalize(reactants));
  for (const reaction of dataset) {
    if (reaction.type !== type) continue;
    const datasetNorm = reduceToMinimal(normalize(reaction.reactants));
    if (reactantsEqual(inputNorm, datasetNorm)) return reaction;
  }
  return null;
}

export function findDecomposition(
  structureId: string,
  dataset: Reaction[],
): Reaction | null {
  for (const reaction of dataset) {
    if (!reaction.reversible) continue;
    if (reaction.products.some((p) => p.structureId === structureId)) return reaction;
  }
  return null;
}
