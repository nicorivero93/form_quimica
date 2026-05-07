import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { AreaQuimicaId, Nivel } from '@/types/tema';
import { ANIOS_BY_ID } from '@/data/anios-quimica';
import { AREAS } from '@/data/areas-quimica';
import { getTemasByAnio } from '@/data/temas';
import { TemaCard } from '@/components/aprender/TemaCard';
import { cn } from '@/lib/utils';

export function AnioPage() {
  const { anioId } = useParams<{ anioId: string }>();
  const anio = anioId ? ANIOS_BY_ID[anioId as keyof typeof ANIOS_BY_ID] : undefined;
  const [areaFilter, setAreaFilter] = useState<AreaQuimicaId | null>(null);
  const [nivelFilter, setNivelFilter] = useState<Nivel | null>(null);

  const temas = useMemo(() => {
    if (!anio) return [];
    return getTemasByAnio(anio.id).filter(
      (t) => (!areaFilter || t.area === areaFilter) && (!nivelFilter || t.nivel === nivelFilter),
    );
  }, [anio, areaFilter, nivelFilter]);

  const areasConTemas = useMemo(() => {
    if (!anio) return [];
    const ids = new Set(getTemasByAnio(anio.id).map((t) => t.area));
    return AREAS.filter((a) => ids.has(a.id));
  }, [anio]);

  if (!anio) return <Navigate to="/aprender" replace />;

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-5 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex flex-col gap-3">
        <Link
          to="/aprender"
          className="inline-flex w-fit items-center gap-1 text-xs text-slate-400 transition-colors hover:text-brand-300"
        >
          <ArrowLeft className="h-3 w-3" />
          Todos los años
        </Link>
        <div className="flex items-start gap-3">
          <span className="text-4xl">{anio.icono}</span>
          <div>
            <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">{anio.nombre}</h1>
            <p className="mt-1 text-sm text-slate-400">
              {temas.length} {temas.length === 1 ? 'tema' : 'temas'}
              {(areaFilter || nivelFilter) && ' filtrados'}
            </p>
          </div>
        </div>
      </header>

      {areasConTemas.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          <FilterPill active={areaFilter === null} onClick={() => setAreaFilter(null)}>
            Todas las áreas
          </FilterPill>
          {areasConTemas.map((area) => (
            <FilterPill
              key={area.id}
              active={areaFilter === area.id}
              onClick={() => setAreaFilter(areaFilter === area.id ? null : area.id)}
            >
              {area.icono} {area.nombre}
            </FilterPill>
          ))}
        </div>
      )}

      {temas.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          <FilterPill active={nivelFilter === null} onClick={() => setNivelFilter(null)} compact>
            Todos los niveles
          </FilterPill>
          {(['intro', 'intermedio', 'avanzado'] as Nivel[]).map((n) => (
            <FilterPill
              key={n}
              active={nivelFilter === n}
              onClick={() => setNivelFilter(nivelFilter === n ? null : n)}
              compact
            >
              {n}
            </FilterPill>
          ))}
        </div>
      )}

      {temas.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-700 bg-slate-900/30 p-6 text-center text-sm text-slate-500">
          {getTemasByAnio(anio.id).length === 0
            ? 'Todavía no hay temas cargados para este año.'
            : 'Ningún tema coincide con los filtros seleccionados.'}
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {temas.map((tema) => (
            <li key={tema.slug}>
              <TemaCard tema={tema} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  compact,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-3 transition-colors',
        compact ? 'py-0.5 text-[11px]' : 'py-1 text-xs',
        active
          ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
          : 'border-slate-700 bg-slate-800/40 text-slate-400 hover:border-slate-500',
      )}
    >
      {children}
    </button>
  );
}
