import type { ReactionReactant } from '@/types/reaction';
import { ELEMENTS } from '@/data/elements';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Props {
  reactants: ReactionReactant[];
  onRemove: (symbol: string) => void;
  max: number;
}

const ELEMENT_BY_SYMBOL = new Map(ELEMENTS.map((e) => [e.symbol, e]));

export function ReactantSlots({ reactants, onRemove, max }: Props) {
  const totalCount = reactants.reduce((acc, r) => acc + r.count, 0);
  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">Reactivos</span>
        <span className="text-[10px] text-slate-500">
          {totalCount} / {max}
        </span>
      </div>
      {reactants.length === 0 ? (
        <p className="py-3 text-center text-xs text-slate-500">
          Tocá un elemento de la tabla para agregarlo.
        </p>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {reactants.map((r) => {
            const el = ELEMENT_BY_SYMBOL.get(r.symbol);
            const cat = el ? CATEGORIES[el.category] : null;
            return (
              <li
                key={r.symbol}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border px-2 py-1 text-sm font-semibold',
                  cat?.borderClass ?? 'border-slate-600',
                  cat?.bgClass ?? 'bg-slate-800',
                  cat?.textClass ?? 'text-slate-200',
                )}
              >
                <span>
                  {r.symbol}
                  {r.count > 1 && (
                    <sub className="ml-0.5 text-[10px]">{r.count}</sub>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(r.symbol)}
                  aria-label={`Quitar ${r.symbol}`}
                  className="rounded-full p-0.5 text-slate-400 transition-colors hover:bg-slate-700 hover:text-rose-400"
                >
                  <X className="h-3 w-3" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
