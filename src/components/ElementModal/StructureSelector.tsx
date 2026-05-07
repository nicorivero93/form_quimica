import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Structure, StructureBadge } from '@/data/structures';

const BADGE_VARIANT: Record<StructureBadge, 'crystal' | 'allotrope' | 'mineral' | 'molecule' | 'compound' | 'atom'> = {
  Cristal: 'crystal',
  Alótropo: 'allotrope',
  Mineral: 'mineral',
  Molécula: 'molecule',
  Compuesto: 'compound',
  Átomo: 'atom',
};

interface Props {
  structures: Structure[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export function StructureSelector({ structures, activeId, onSelect }: Props) {
  if (structures.length === 0) return null;
  return (
    <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {structures.map((s) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.id)}
            className={cn(
              'flex shrink-0 flex-col items-start gap-1 rounded-lg border px-3 py-2 text-left transition',
              active
                ? 'border-brand-500/60 bg-brand-500/10 ring-1 ring-brand-500/40'
                : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/60',
            )}
            aria-pressed={active}
          >
            <Badge variant={BADGE_VARIANT[s.badge]}>{s.badge}</Badge>
            <span className="font-mono text-base font-semibold text-slate-100">{s.formula}</span>
            <span className="text-[11px] text-slate-400">{s.label || s.name}</span>
          </button>
        );
      })}
    </div>
  );
}
