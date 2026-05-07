import type { Ejemplo } from '@/types/tema';
import { FormulaLatex } from '@/components/shared/FormulaLatex';

interface Props {
  ejemplo: Ejemplo;
  index: number;
}

export function EjemploPasoAPaso({ ejemplo, index }: Props) {
  return (
    <article className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <header className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
          Ejemplo {index}
        </p>
        <h4 className="mt-1 text-base font-semibold text-slate-100">{ejemplo.titulo}</h4>
      </header>
      <p className="mb-4 rounded-md bg-slate-800/40 p-3 text-sm text-slate-300">
        {renderInline(ejemplo.enunciado)}
      </p>
      <ol className="space-y-2.5">
        {ejemplo.pasos.map((paso, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-300">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 space-y-1.5">
              <p className="text-sm text-slate-300">{renderInline(paso.explicacion)}</p>
              {paso.latex && (
                <div className="overflow-x-auto rounded-md bg-slate-950/40 px-3 py-2">
                  <FormulaLatex latex={paso.latex} display />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-md border-l-4 border-emerald-500 bg-emerald-500/10 p-3">
        <p className="text-xs uppercase tracking-wide text-emerald-300">Resultado</p>
        <p className="mt-1 text-sm font-medium text-emerald-100">
          {renderInline(ejemplo.resultado)}
        </p>
      </div>
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
