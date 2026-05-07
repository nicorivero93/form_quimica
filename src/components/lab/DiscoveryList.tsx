import { useMemo, useState } from 'react';
import { ChevronDown, Lock, Sparkles } from 'lucide-react';
import { REACTIONS_CHEMICAL } from '@/data/reactions-chemical';
import { REACTIONS_NUCLEAR } from '@/data/reactions-nuclear';
import type { Reaction } from '@/types/reaction';
import { cn } from '@/lib/utils';

interface Props {
  discoveries: Record<string, number>;
}

const ALL_REACTIONS: Reaction[] = [...REACTIONS_CHEMICAL, ...REACTIONS_NUCLEAR];

export function DiscoveryList({ discoveries }: Props) {
  const [open, setOpen] = useState(false);

  const { discovered, total } = useMemo(() => {
    const totalCount = ALL_REACTIONS.length;
    const discoveredCount = ALL_REACTIONS.filter((r) => discoveries[r.id]).length;
    return { discovered: discoveredCount, total: totalCount };
  }, [discoveries]);

  const progress = total > 0 ? (discovered / total) * 100 : 0;

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-3 text-left transition-colors hover:bg-slate-800/40"
      >
        <Sparkles className="h-4 w-4 text-amber-400" />
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-sm font-semibold text-slate-200">Descubrimientos</span>
            <span className="text-xs text-slate-400">
              {discovered} / {total}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-brand-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <ChevronDown
          className={cn('h-4 w-4 text-slate-500 transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="border-t border-slate-700/60 p-3">
          <DiscoverySection
            title="Química"
            reactions={REACTIONS_CHEMICAL}
            discoveries={discoveries}
          />
          <DiscoverySection
            title="Nuclear"
            reactions={REACTIONS_NUCLEAR}
            discoveries={discoveries}
            className="mt-4"
          />
        </div>
      )}
    </div>
  );
}

interface SectionProps {
  title: string;
  reactions: Reaction[];
  discoveries: Record<string, number>;
  className?: string;
}

function DiscoverySection({ title, reactions, discoveries, className }: SectionProps) {
  const found = reactions.filter((r) => discoveries[r.id]).length;
  return (
    <div className={className}>
      <h4 className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-400">
        <span>{title}</span>
        <span className="text-slate-500">
          {found}/{reactions.length}
        </span>
      </h4>
      <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {reactions.map((r) => {
          const found = !!discoveries[r.id];
          return (
            <li
              key={r.id}
              className={cn(
                'rounded-md border p-2 text-xs',
                found
                  ? 'border-emerald-500/40 bg-emerald-500/5 text-emerald-200'
                  : 'border-slate-700 bg-slate-800/40 text-slate-500',
              )}
            >
              <div className="flex items-center gap-1.5 font-semibold">
                {!found && <Lock className="h-3 w-3" />}
                <span>{found ? r.products[0].formula : '???'}</span>
              </div>
              <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                {found ? r.products[0].name : r.discoveryHint ?? 'Sin pista'}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
