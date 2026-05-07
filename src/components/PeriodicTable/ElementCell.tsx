import { memo } from 'react';
import type { Element } from '@/types/element';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';

interface Props {
  element: Element;
  highlighted: boolean;
  dimmed: boolean;
  onSelect: (symbol: string) => void;
}

export const ElementCell = memo(function ElementCell({
  element,
  highlighted,
  dimmed,
  onSelect,
}: Props) {
  const cat = CATEGORIES[element.category];
  return (
    <button
      type="button"
      onClick={() => onSelect(element.symbol)}
      style={{ gridRow: element.row, gridColumn: element.col }}
      className={cn(
        'group relative flex aspect-square min-w-[44px] flex-col items-center justify-center rounded-md border text-center transition-all duration-150',
        cat.borderClass,
        cat.bgClass,
        'hover:z-10 hover:scale-110 hover:shadow-lg hover:shadow-black/40',
        highlighted && 'ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-950',
        dimmed && 'opacity-25 saturate-50',
      )}
      title={`${element.name} (${element.symbol}) — ${cat.name}`}
      aria-label={`${element.name}, número atómico ${element.n}`}
    >
      <span className="absolute left-1 top-0.5 text-[9px] font-medium text-slate-400 sm:text-[10px]">
        {element.n}
      </span>
      <span className={cn('text-base font-bold sm:text-lg', cat.textClass)}>
        {element.symbol}
      </span>
      <span className="hidden px-0.5 text-[8px] leading-tight text-slate-300 sm:block sm:text-[9px]">
        {element.name}
      </span>
      <span className="hidden text-[7px] text-slate-500 sm:block sm:text-[8px]">
        {element.mass.toFixed(element.mass < 100 ? 2 : 1)}
      </span>
    </button>
  );
});
