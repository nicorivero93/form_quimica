import { useMemo } from 'react';
import { REACTIONS_CHEMICAL } from '@/data/reactions-chemical';
import { STRUCTURES } from '@/data/structures';
import { cn } from '@/lib/utils';

interface Props {
  onPick: (structureId: string) => void;
  discoveries: Record<string, number>;
}

export function DecomposablePicker({ onPick, discoveries }: Props) {
  const reversibles = useMemo(() => {
    return REACTIONS_CHEMICAL.filter((r) => r.reversible).map((r) => {
      const product = r.products[0];
      const structure = product.structureId ? STRUCTURES[product.structureId] : undefined;
      return {
        reactionId: r.id,
        structureId: product.structureId,
        formula: product.formula,
        name: product.name,
        badge: structure?.badge,
        discovered: !!discoveries[r.id],
      };
    });
  }, [discoveries]);

  if (reversibles.length === 0) {
    return (
      <p className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-6 text-center text-sm text-slate-500">
        No hay compuestos descomponibles en el catálogo.
      </p>
    );
  }

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-3">
      <p className="mb-2 text-xs font-semibold text-slate-400">
        Elegí un compuesto para romperlo
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {reversibles.map((c) => (
          <button
            key={c.reactionId}
            type="button"
            disabled={!c.structureId}
            onClick={() => c.structureId && onPick(c.structureId)}
            className={cn(
              'flex flex-col items-start gap-1 rounded-md border p-2 text-left transition-all',
              c.discovered
                ? 'border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-400 hover:bg-emerald-500/20'
                : 'border-slate-700 bg-slate-800/40 hover:border-slate-500 hover:bg-slate-800',
            )}
          >
            <span className="text-base font-bold text-slate-100">{c.formula}</span>
            <span className="text-xs text-slate-300">{c.name}</span>
            {c.badge && (
              <span className="text-[10px] text-slate-500">{c.badge}</span>
            )}
            {!c.discovered && (
              <span className="text-[10px] text-amber-400/70">Sin descubrir</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
