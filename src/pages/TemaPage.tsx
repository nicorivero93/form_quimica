import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Target, FlaskConical, BookOpen, Brain } from 'lucide-react';
import { ANIOS_BY_ID } from '@/data/anios-quimica';
import { AREAS_BY_ID } from '@/data/areas-quimica';
import { getTemaBySlug, TEMAS } from '@/data/temas';
import { BloqueTeoriaRender } from '@/components/aprender/BloqueTeoria';
import { FormulaCard } from '@/components/aprender/FormulaCard';
import { EjemploPasoAPaso } from '@/components/aprender/EjemploPasoAPaso';
import { QuizSection } from '@/components/aprender/QuizSection';
import { cn } from '@/lib/utils';

const NIVEL_BADGE = {
  intro: { label: 'Intro', className: 'bg-emerald-500/20 text-emerald-300' },
  intermedio: { label: 'Intermedio', className: 'bg-amber-500/20 text-amber-300' },
  avanzado: { label: 'Avanzado', className: 'bg-rose-500/20 text-rose-300' },
};

export function TemaPage() {
  const { slug } = useParams<{ slug: string }>();
  const tema = slug ? getTemaBySlug(slug) : undefined;

  if (!tema) return <Navigate to="/aprender" replace />;

  const area = AREAS_BY_ID[tema.area];
  const anios = tema.anios.map((id) => ANIOS_BY_ID[id]).filter(Boolean);
  const relacionados = (tema.relacionados ?? [])
    .map((s) => TEMAS.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => !!t);
  const badge = NIVEL_BADGE[tema.nivel];

  return (
    <article className="mx-auto flex w-full max-w-[920px] flex-col gap-7 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex flex-col gap-3">
        <Link
          to={`/aprender/${anios[0]?.id ?? ''}`}
          className="inline-flex w-fit items-center gap-1 text-xs text-slate-400 transition-colors hover:text-brand-300"
        >
          <ArrowLeft className="h-3 w-3" />
          Volver
        </Link>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2 py-0.5">
            {area?.icono} {area?.nombre}
          </span>
          {anios.map((a) => (
            <span
              key={a.id}
              className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2 py-0.5"
            >
              {a.icono} {a.nombreCorto}
            </span>
          ))}
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
              badge.className,
            )}
          >
            {badge.label}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">{tema.titulo}</h1>
        <p className="text-sm text-slate-400 sm:text-base">{tema.resumen}</p>
      </header>

      <Section icon={BookOpen} title="Teoría">
        <div className="space-y-3">
          {tema.teoria.map((bloque, i) => (
            <BloqueTeoriaRender key={i} bloque={bloque} />
          ))}
        </div>
      </Section>

      {tema.formulasClave && tema.formulasClave.length > 0 && (
        <Section icon={Target} title="Fórmulas clave">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {tema.formulasClave.map((f, i) => (
              <FormulaCard key={i} formula={f} />
            ))}
          </div>
        </Section>
      )}

      <Section icon={FlaskConical} title="Ejemplos paso a paso">
        <div className="space-y-3">
          {tema.ejemplos.map((ej, i) => (
            <EjemploPasoAPaso key={i} ejemplo={ej} index={i + 1} />
          ))}
        </div>
      </Section>

      <Section icon={AlertTriangle} title="Errores comunes" tone="warning">
        <ul className="space-y-1.5 pl-5 text-sm text-slate-300 [&>li]:list-disc">
          {tema.erroresComunes.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      </Section>

      {tema.quiz && (
        <Section icon={Brain} title="Autoevaluación">
          <QuizSection quiz={tema.quiz} />
        </Section>
      )}

      {relacionados.length > 0 && (
        <Section icon={BookOpen} title="Temas relacionados">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {relacionados.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/aprender/tema/${r.slug}`}
                  className="block rounded-md border border-slate-700 bg-slate-900/40 p-3 text-sm text-slate-300 transition-colors hover:border-brand-500/50 hover:text-brand-200"
                >
                  {r.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  );
}

function Section({
  icon: Icon,
  title,
  children,
  tone,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
  tone?: 'warning';
}) {
  return (
    <section>
      <h2
        className={cn(
          'mb-3 flex items-center gap-2 text-lg font-semibold',
          tone === 'warning' ? 'text-rose-300' : 'text-slate-100',
        )}
      >
        <Icon className="h-5 w-5" />
        {title}
      </h2>
      {children}
    </section>
  );
}
