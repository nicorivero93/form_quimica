import type { ReactionType } from '@/types/reaction';
import { cn } from '@/lib/utils';

interface Props {
  mode: ReactionType;
  onChange: (mode: ReactionType) => void;
}

const MODES: { id: ReactionType; label: string; sub: string }[] = [
  { id: 'chemical', label: 'Química', sub: 'Combiná elementos en compuestos' },
  { id: 'nuclear', label: 'Nuclear', sub: 'Fusioná núcleos en otros elementos' },
  { id: 'decomposition', label: 'Romper', sub: 'Separá un compuesto en partes' },
];

export function ModeToggle({ mode, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Modo del laboratorio"
      className="grid w-full grid-cols-3 gap-1 rounded-lg border border-slate-700/60 bg-slate-900/60 p-1"
    >
      {MODES.map((m) => {
        const active = m.id === mode;
        return (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(m.id)}
            className={cn(
              'flex flex-col items-center justify-center rounded-md px-2 py-2 text-center transition-colors',
              'text-xs sm:text-sm',
              active
                ? 'bg-brand-500/20 text-brand-100 ring-1 ring-brand-400/50'
                : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200',
            )}
          >
            <span className="font-semibold">{m.label}</span>
            <span className="hidden text-[10px] text-slate-500 sm:block">{m.sub}</span>
          </button>
        );
      })}
    </div>
  );
}
