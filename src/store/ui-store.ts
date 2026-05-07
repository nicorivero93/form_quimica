import { create } from 'zustand';
import type { ElementCategory } from '@/types/element';

interface UiState {
  searchQuery: string;
  activeCategory: ElementCategory | null;
  selectedElementSymbol: string | null;
  selectedStructureId: string | null;
  superCellSize: 1 | 2 | 3;
  showBonds: boolean;
  showUnitCell: boolean;
  autoRotate: boolean;
  setSearch: (q: string) => void;
  setCategory: (c: ElementCategory | null) => void;
  selectElement: (symbol: string | null) => void;
  selectStructure: (id: string | null) => void;
  setSuperCellSize: (n: 1 | 2 | 3) => void;
  toggleBonds: () => void;
  toggleUnitCell: () => void;
  toggleAutoRotate: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  searchQuery: '',
  activeCategory: null,
  selectedElementSymbol: null,
  selectedStructureId: null,
  superCellSize: 2,
  showBonds: true,
  showUnitCell: true,
  autoRotate: true,
  setSearch: (q) => set({ searchQuery: q }),
  setCategory: (c) => set((s) => ({ activeCategory: s.activeCategory === c ? null : c })),
  selectElement: (symbol) => set({ selectedElementSymbol: symbol, selectedStructureId: null }),
  selectStructure: (id) => set({ selectedStructureId: id }),
  setSuperCellSize: (n) => set({ superCellSize: n }),
  toggleBonds: () => set((s) => ({ showBonds: !s.showBonds })),
  toggleUnitCell: () => set((s) => ({ showUnitCell: !s.showUnitCell })),
  toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
}));
