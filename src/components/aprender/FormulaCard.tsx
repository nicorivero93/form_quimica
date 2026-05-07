import type { FormulaClave } from '@/types/tema';
import { FormulaLatex } from '@/components/shared/FormulaLatex';

interface Props {
  formula: FormulaClave;
}

export function FormulaCard({ formula }: Props) {
  return (
    <article className="rounded-lg border border-brand-500/30 bg-brand-500/5 p-4">
      <header className="mb-2 flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-brand-100">{formula.nombre}</h4>
      </header>
      <div className="my-3 overflow-x-auto rounded-md bg-slate-950/40 p-3">
        <FormulaLatex latex={formula.latex} display />
      </div>
      <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300 sm:grid-cols-2">
        {formula.variables.map((v) => (
          <li key={v.simbolo} className="flex items-baseline gap-2">
            <span className="font-mono text-brand-300">{v.simbolo}</span>
            <span className="text-slate-400">=</span>
            <span>
              {v.nombre}{' '}
              {v.unidad && <span className="text-slate-500">({v.unidad})</span>}
            </span>
          </li>
        ))}
      </ul>
      {formula.cuandoUsar && (
        <p className="mt-3 text-[11px] italic text-slate-400">{formula.cuandoUsar}</p>
      )}
    </article>
  );
}
