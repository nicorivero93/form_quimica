import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Anio } from '@/types/tema';
import { cn } from '@/lib/utils';

interface Props {
  anio: Anio;
  temasCount: number;
  completadosCount: number;
}

const COLOR_CLASSES: Record<string, string> = {
  lime: 'border-lime-500/40 bg-lime-500/10 hover:border-lime-400 hover:bg-lime-500/15 text-lime-200',
  amber: 'border-amber-500/40 bg-amber-500/10 hover:border-amber-400 hover:bg-amber-500/15 text-amber-200',
  rose: 'border-rose-500/40 bg-rose-500/10 hover:border-rose-400 hover:bg-rose-500/15 text-rose-200',
  emerald: 'border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-400 hover:bg-emerald-500/15 text-emerald-200',
  sky: 'border-sky-500/40 bg-sky-500/10 hover:border-sky-400 hover:bg-sky-500/15 text-sky-200',
  fuchsia: 'border-fuchsia-500/40 bg-fuchsia-500/10 hover:border-fuchsia-400 hover:bg-fuchsia-500/15 text-fuchsia-200',
};

export function AnioCard({ anio, temasCount, completadosCount }: Props) {
  const progress = temasCount > 0 ? (completadosCount / temasCount) * 100 : 0;
  return (
    <Link
      to={`/aprender/${anio.id}`}
      className={cn(
        'group flex items-center gap-4 rounded-xl border p-5 transition-all',
        COLOR_CLASSES[anio.color] ?? 'border-slate-700 bg-slate-900',
      )}
    >
      <span className="text-4xl">{anio.icono}</span>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-100">{anio.nombre}</h3>
        <p className="text-xs text-slate-400">
          {completadosCount} / {temasCount}{' '}
          {temasCount === 1 ? 'tema completado' : 'temas completados'}
        </p>
        {temasCount > 0 && (
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800/80">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-brand-400 to-sky-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <ChevronRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
