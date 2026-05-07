import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Reaction, ReactionReactant, ReactionType } from '@/types/reaction';
import { REACTIONS_CHEMICAL } from '@/data/reactions-chemical';
import { REACTIONS_NUCLEAR } from '@/data/reactions-nuclear';
import { findDecomposition, findReaction } from '@/lib/reaction-engine';

export const MAX_REACTANTS = 8;

interface LabState {
  mode: ReactionType;
  reactants: ReactionReactant[];
  lastResult: Reaction | null;
  noMatchAttempt: boolean;
  discoveries: Record<string, number>;
  isAnimating: boolean;
}

interface LabActions {
  setMode: (mode: ReactionType) => void;
  addReactant: (symbol: string) => void;
  removeReactant: (symbol: string) => void;
  clearReactants: () => void;
  react: () => Reaction | null;
  decompose: (structureId: string) => Reaction | null;
  setAnimating: (v: boolean) => void;
  resetAll: () => void;
}

const initialState: LabState = {
  mode: 'chemical',
  reactants: [],
  lastResult: null,
  noMatchAttempt: false,
  discoveries: {},
  isAnimating: false,
};

function datasetForMode(mode: ReactionType): Reaction[] {
  switch (mode) {
    case 'chemical':
      return REACTIONS_CHEMICAL;
    case 'nuclear':
      return REACTIONS_NUCLEAR;
    case 'decomposition':
      return REACTIONS_CHEMICAL;
  }
}

export const useLabStore = create<LabState & LabActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      setMode: (mode) =>
        set({ mode, reactants: [], lastResult: null, noMatchAttempt: false }),

      addReactant: (symbol) =>
        set((s) => {
          const total = s.reactants.reduce((acc, r) => acc + r.count, 0);
          if (total >= MAX_REACTANTS) return s;
          const idx = s.reactants.findIndex((r) => r.symbol === symbol);
          if (idx >= 0) {
            const next = [...s.reactants];
            next[idx] = { ...next[idx], count: next[idx].count + 1 };
            return { reactants: next, lastResult: null, noMatchAttempt: false };
          }
          return {
            reactants: [...s.reactants, { symbol, count: 1 }],
            lastResult: null,
            noMatchAttempt: false,
          };
        }),

      removeReactant: (symbol) =>
        set((s) => {
          const idx = s.reactants.findIndex((r) => r.symbol === symbol);
          if (idx < 0) return s;
          const cur = s.reactants[idx];
          if (cur.count > 1) {
            const next = [...s.reactants];
            next[idx] = { ...cur, count: cur.count - 1 };
            return { reactants: next, lastResult: null, noMatchAttempt: false };
          }
          return {
            reactants: s.reactants.filter((r) => r.symbol !== symbol),
            lastResult: null,
            noMatchAttempt: false,
          };
        }),

      clearReactants: () =>
        set({ reactants: [], lastResult: null, noMatchAttempt: false }),

      react: () => {
        const { reactants, mode } = get();
        const result = findReaction(reactants, mode, datasetForMode(mode));
        set((s) => ({
          lastResult: result,
          noMatchAttempt: result === null,
          isAnimating: result !== null,
          discoveries: result
            ? {
                ...s.discoveries,
                [result.id]: s.discoveries[result.id] ?? Date.now(),
              }
            : s.discoveries,
        }));
        return result;
      },

      decompose: (structureId) => {
        const result = findDecomposition(structureId, REACTIONS_CHEMICAL);
        set((s) => ({
          lastResult: result,
          reactants: result ? result.reactants.map((r) => ({ ...r })) : s.reactants,
          noMatchAttempt: result === null,
          isAnimating: result !== null,
          discoveries: result
            ? {
                ...s.discoveries,
                [result.id]: s.discoveries[result.id] ?? Date.now(),
              }
            : s.discoveries,
        }));
        return result;
      },

      setAnimating: (v) => set({ isAnimating: v }),

      resetAll: () => set({ ...initialState, discoveries: get().discoveries }),
    }),
    {
      name: 'tabla-atomos:lab:v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ discoveries: state.discoveries }),
    },
  ),
);
