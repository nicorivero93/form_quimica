import { GraduationCap } from 'lucide-react';
import { ANIOS } from '@/data/anios-quimica';
import { TEMAS } from '@/data/temas';
import { AnioCard } from '@/components/aprender/AnioCard';

export function AprenderPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex items-start gap-3">
        <GraduationCap className="mt-1 h-7 w-7 text-brand-400" />
        <div>
          <h1 className="bg-gradient-to-br from-slate-100 via-brand-300 to-slate-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl">
            Aprender química
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Teoría, fórmulas y ejercicios resueltos para repasar lo de toda la secundaria.
            Cada tema incluye explicación, ejemplos paso a paso, errores comunes y un quiz para autoevaluarte.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ANIOS.map((anio) => {
          const count = TEMAS.filter((t) => t.anios.includes(anio.id)).length;
          return <AnioCard key={anio.id} anio={anio} temasCount={count} />;
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
