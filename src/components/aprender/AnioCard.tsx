import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Anio } from '@/types/tema';
import { cn } from '@/lib/utils';

interface Props {
  anio: Anio;
  temasCount: number;
}

const COLOR_CLASSES: Record<string, string> = {
  emerald: 'border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-400 hover:bg-emerald-500/15 text-emerald-200',
  sky: 'border-sky-500/40 bg-sky-500/10 hover:border-sky-400 hover:bg-sky-500/15 text-sky-200',
};

export function AnioCard({ anio, temasCount }: Props) {
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
          {temasCount} {temasCount === 1 ? 'tema disponible' : 'temas disponibles'}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
