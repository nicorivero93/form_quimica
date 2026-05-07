import { Link } from 'react-router-dom';
import type { Tema } from '@/types/tema';
import { AREAS_BY_ID } from '@/data/areas-quimica';
import { cn } from '@/lib/utils';

interface Props {
  tema: Tema;
}

const NIVEL_BADGE: Record<Tema['nivel'], { label: string; className: string }> = {
  intro: { label: 'Intro', className: 'bg-emerald-500/20 text-emerald-300' },
  intermedio: { label: 'Intermedio', className: 'bg-amber-500/20 text-amber-300' },
  avanzado: { label: 'Avanzado', className: 'bg-rose-500/20 text-rose-300' },
};

export function TemaCard({ tema }: Props) {
  const area = AREAS_BY_ID[tema.area];
  const badge = NIVEL_BADGE[tema.nivel];

  return (
    <Link
      to={`/aprender/tema/${tema.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-slate-700/60 bg-slate-900/40 p-4 transition-colors hover:border-brand-500/50 hover:bg-slate-900"
    >
      <header className="flex items-start gap-2">
        <span className="text-xl">{area?.icono ?? '🧪'}</span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-slate-100 group-hover:text-brand-200">
            {tema.titulo}
          </h3>
          <p className="text-[11px] text-slate-500">{area?.nombre}</p>
        </div>
        <span
          className={cn(
            'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
            badge.className,
          )}
        >
          {badge.label}
        </span>
      </header>
      <p className="text-xs leading-relaxed text-slate-400">{tema.resumen}</p>
    </Link>
  );
}
