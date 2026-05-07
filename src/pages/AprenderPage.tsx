import { GraduationCap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ANIOS } from '@/data/anios-quimica';
import { TEMAS } from '@/data/temas';
import { useProgressStore } from '@/store/progress-store';
import { AnioCard } from '@/components/aprender/AnioCard';

export function AprenderPage() {
  const completados = useProgressStore((s) => s.completados);
  const totalCompletados = Object.keys(completados).length;
  const progresoGlobal = TEMAS.length > 0 ? (totalCompletados / TEMAS.length) * 100 : 0;

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex items-start gap-3">
        <GraduationCap className="mt-1 h-7 w-7 text-brand-400" />
        <div className="flex-1">
          <h1 className="bg-gradient-to-br from-slate-100 via-brand-300 to-slate-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl">
            Aprender química
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Teoría, fórmulas y ejercicios resueltos para repasar lo de toda la secundaria.
            Cada tema incluye explicación, ejemplos paso a paso, errores comunes y un quiz para autoevaluarte.
          </p>
        </div>
      </header>

      <Link
        to="/aprender/buscar"
        className="flex items-center gap-3 rounded-lg border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-400 transition-colors hover:border-brand-500/50 hover:bg-slate-900 hover:text-slate-200"
      >
        <Search className="h-4 w-4" />
        <span>Buscar tema, fórmula o concepto…</span>
      </Link>

      {TEMAS.length > 0 && (
        <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-semibold text-slate-200">Tu progreso</span>
            <span className="text-slate-400">
              {totalCompletados} / {TEMAS.length} temas
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-brand-400 to-sky-400 transition-all"
              style={{ width: `${progresoGlobal}%` }}
            />
          </div>
        </div>
      )}

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ANIOS.map((anio) => {
          const temasDelAnio = TEMAS.filter((t) => t.anios.includes(anio.id));
          const completadosDelAnio = temasDelAnio.filter((t) => completados[t.slug]).length;
          return (
            <AnioCard
              key={anio.id}
              anio={anio}
              temasCount={temasDelAnio.length}
              completadosCount={completadosDelAnio}
            />
          );
        })}
      </section>

      {TEMAS.length === 0 && (
        <div className="rounded-lg border border-dashed border-slate-700 bg-slate-900/30 p-6 text-center text-sm text-slate-500">
          Estamos cargando los primeros temas. ¡Volvé en un rato!
        </div>
      )}
    </div>
  );
}
