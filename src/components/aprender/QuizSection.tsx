import { useState } from 'react';
import { Check, X } from 'lucide-react';
import type { PreguntaQuiz, Quiz } from '@/types/tema';
import { FormulaLatex } from '@/components/shared/FormulaLatex';
import { cn } from '@/lib/utils';

interface Props {
  quiz: Quiz;
}

export function QuizSection({ quiz }: Props) {
  return (
    <div className="space-y-4">
      {quiz.preguntas.map((pregunta, i) => (
        <PreguntaCard key={i} pregunta={pregunta} index={i + 1} />
      ))}
    </div>
  );
}

function PreguntaCard({ pregunta, index }: { pregunta: PreguntaQuiz; index: number }) {
  const [respuesta, setRespuesta] = useState<string | number | boolean | null>(null);
  const [revelado, setRevelado] = useState(false);

  const correcta =
    pregunta.tipo === 'numerica'
      ? typeof respuesta === 'number' &&
        Math.abs(respuesta - pregunta.respuesta) <= (pregunta.tolerancia ?? 0.01)
      : pregunta.tipo === 'multiple'
        ? respuesta === pregunta.correcta
        : respuesta === pregunta.respuesta;

  return (
    <article className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <header className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-400">
          Pregunta {index}
        </p>
        <p className="mt-1 text-sm text-slate-200">{renderInline(pregunta.enunciado)}</p>
      </header>

      {pregunta.tipo === 'numerica' && (
        <div className="flex items-center gap-2">
          <input
            type="number"
            step="any"
            value={typeof respuesta === 'number' ? respuesta : ''}
            onChange={(e) => setRespuesta(e.target.value === '' ? null : Number(e.target.value))}
            disabled={revelado}
            className="w-32 rounded-md border border-slate-600 bg-slate-800/60 px-3 py-2 text-base text-slate-100 focus:border-brand-500 focus:outline-none disabled:opacity-60"
            placeholder="Respuesta"
          />
          {pregunta.unidad && <span className="text-sm text-slate-400">{pregunta.unidad}</span>}
        </div>
      )}

      {pregunta.tipo === 'multiple' && (
        <ul className="space-y-1.5">
          {pregunta.opciones.map((op, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => !revelado && setRespuesta(i)}
                disabled={revelado}
                className={cn(
                  'w-full rounded-md border px-3 py-2 text-left text-sm transition-colors',
                  respuesta === i
                    ? 'border-violet-500/60 bg-violet-500/15 text-violet-100'
                    : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
                  revelado && i === pregunta.correcta && 'border-emerald-500/60 bg-emerald-500/15 text-emerald-100',
                  revelado && respuesta === i && i !== pregunta.correcta && 'border-rose-500/60 bg-rose-500/15 text-rose-100',
                )}
              >
                {renderInline(op)}
              </button>
            </li>
          ))}
        </ul>
      )}

      {pregunta.tipo === 'verdadero-falso' && (
        <div className="flex gap-2">
          {[true, false].map((v) => (
            <button
              key={v.toString()}
              type="button"
              onClick={() => !revelado && setRespuesta(v)}
              disabled={revelado}
              className={cn(
                'flex-1 rounded-md border px-3 py-2 text-sm font-semibold transition-colors',
                respuesta === v
                  ? 'border-violet-500/60 bg-violet-500/15 text-violet-100'
                  : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
              )}
            >
              {v ? 'Verdadero' : 'Falso'}
            </button>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setRevelado(true)}
          disabled={respuesta === null || revelado}
          className="rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
        >
          Verificar
        </button>
        {revelado && (
          <span
            className={cn(
              'inline-flex items-center gap-1 text-xs font-semibold',
              correcta ? 'text-emerald-300' : 'text-rose-300',
            )}
          >
            {correcta ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
            {correcta ? '¡Correcto!' : 'Incorrecto'}
          </span>
        )}
      </div>

      {revelado && (
        <p className="mt-3 rounded-md bg-slate-800/40 p-3 text-xs text-slate-300">
          {renderInline(pregunta.explicacion)}
        </p>
      )}
    </article>
  );
}

function renderInline(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return <FormulaLatex key={i} latex={part.slice(1, -1)} />;
    }
    return <span key={i}>{part}</span>;
  });
}
