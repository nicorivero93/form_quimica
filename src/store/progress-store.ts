import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProgressState {
  completados: Record<string, number>;
}

interface ProgressActions {
  marcarCompletado: (slug: string) => void;
  desmarcarCompletado: (slug: string) => void;
  estaCompletado: (slug: string) => boolean;
  toggleCompletado: (slug: string) => void;
  totalCompletados: () => number;
  resetProgreso: () => void;
}

export const useProgressStore = create<ProgressState & ProgressActions>()(
  persist(
    (set, get) => ({
      completados: {},

      marcarCompletado: (slug) =>
        set((s) =>
          s.completados[slug]
            ? s
            : { completados: { ...s.completados, [slug]: Date.now() } },
        ),

      desmarcarCompletado: (slug) =>
        set((s) => {
          if (!s.completados[slug]) return s;
          const next = { ...s.completados };
          delete next[slug];
          return { completados: next };
        }),

      estaCompletado: (slug) => !!get().completados[slug],

      toggleCompletado: (slug) =>
        set((s) => {
          if (s.completados[slug]) {
            const next = { ...s.completados };
            delete next[slug];
            return { completados: next };
          }
          return { completados: { ...s.completados, [slug]: Date.now() } };
        }),

      totalCompletados: () => Object.keys(get().completados).length,

      resetProgreso: () => set({ completados: {} }),
    }),
    {
      name: 'tabla-atomos:progress:v1',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
