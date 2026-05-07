import { useMemo } from 'react';
import { ELEMENTS } from '@/data/elements';
import { useUiStore } from '@/store/ui-store';
import { ElementCell } from './ElementCell';

const PLACEHOLDER_LANTHANIDE_ROW = 6;
const PLACEHOLDER_ACTINIDE_ROW = 7;
const PLACEHOLDER_COL = 3;

export function PeriodicTable() {
  const searchQuery = useUiStore((s) => s.searchQuery);
  const activeCategory = useUiStore((s) => s.activeCategory);
  const selectElement = useUiStore((s) => s.selectElement);

  const { highlightedSymbols, dimmedSymbols } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const highlighted = new Set<string>();
    const dimmed = new Set<string>();

    for (const el of ELEMENTS) {
      const matchesSearch =
        !q ||
        el.symbol.toLowerCase().includes(q) ||
        el.name.toLowerCase().includes(q) ||
        el.nameEn.toLowerCase().includes(q) ||
        el.n.toString().includes(q);
      const matchesCategory = !activeCategory || el.category === activeCategory;

      if (q && matchesSearch && matchesCategory) {
        highlighted.add(el.symbol);
      }
      if (!matchesSearch || !matchesCategory) {
        dimmed.add(el.symbol);
      }
    }

    return { highlightedSymbols: highlighted, dimmedSymbols: dimmed };
  }, [searchQuery, activeCategory]);

  return (
    <div className="overflow-x-auto pb-4">
      <div
        className="mx-auto grid w-full min-w-[900px] max-w-[1400px] gap-1 sm:gap-1.5"
        style={{
          gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
        }}
      >
        {ELEMENTS.map((el) => (
          <ElementCell
            key={el.symbol}
            element={el}
            highlighted={highlightedSymbols.has(el.symbol)}
            dimmed={dimmedSymbols.has(el.symbol)}
            onSelect={selectElement}
          />
        ))}
        {/* Placeholder en celda (6,3) que apunta a los lantánidos */}
        <div
          className="flex aspect-square items-center justify-center rounded-md border border-pink-500/40 bg-pink-500/10 text-[10px] font-medium text-pink-300"
          style={{ gridRow: PLACEHOLDER_LANTHANIDE_ROW, gridColumn: PLACEHOLDER_COL }}
          title="Lantánidos (57-71)"
        >
          57-71
        </div>
        {/* Placeholder en celda (7,3) que apunta a los actínidos */}
        <div
          className="flex aspect-square items-center justify-center rounded-md border border-red-500/40 bg-red-500/10 text-[10px] font-medium text-red-300"
          style={{ gridRow: PLACEHOLDER_ACTINIDE_ROW, gridColumn: PLACEHOLDER_COL }}
          title="Actínidos (89-103)"
        >
          89-103
        </div>
        {/* Etiqueta lantánidos en strip */}
        <div
          className="col-span-2 flex items-center justify-end pr-2 text-[10px] text-slate-500"
          style={{ gridRow: 9, gridColumn: '1 / span 2' }}
        >
          Lantánidos →
        </div>
        <div
          className="col-span-2 flex items-center justify-end pr-2 text-[10px] text-slate-500"
          style={{ gridRow: 10, gridColumn: '1 / span 2' }}
        >
          Actínidos →
        </div>
      </div>
    </div>
  );
}
