import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const EJEMPLOS = [
  { formula: 'H₂SO₄', componentes: [{ s: 'H', n: 2, ox: '+1' }, { s: 'S', n: 1, ox: '+6' }, { s: 'O', n: 4, ox: '−2' }] },
  { formula: 'HNO₃', componentes: [{ s: 'H', n: 1, ox: '+1' }, { s: 'N', n: 1, ox: '+5' }, { s: 'O', n: 3, ox: '−2' }] },
  { formula: 'NaCl', componentes: [{ s: 'Na', n: 1, ox: '+1' }, { s: 'Cl', n: 1, ox: '−1' }] },
  { formula: 'KMnO₄', componentes: [{ s: 'K', n: 1, ox: '+1' }, { s: 'Mn', n: 1, ox: '+7' }, { s: 'O', n: 4, ox: '−2' }] },
  { formula: 'Fe₂O₃', componentes: [{ s: 'Fe', n: 2, ox: '+3' }, { s: 'O', n: 3, ox: '−2' }] },
  { formula: 'CO₂', componentes: [{ s: 'C', n: 1, ox: '+4' }, { s: 'O', n: 2, ox: '−2' }] },
  { formula: 'NH₃', componentes: [{ s: 'N', n: 1, ox: '−3' }, { s: 'H', n: 3, ox: '+1' }] },
  { formula: 'H₂O₂', componentes: [{ s: 'H', n: 2, ox: '+1' }, { s: 'O', n: 2, ox: '−1' }] },
  { formula: 'NaH', componentes: [{ s: 'Na', n: 1, ox: '+1' }, { s: 'H', n: 1, ox: '−1' }] },
  { formula: 'CaCO₃', componentes: [{ s: 'Ca', n: 1, ox: '+2' }, { s: 'C', n: 1, ox: '+4' }, { s: 'O', n: 3, ox: '−2' }] },
];

function colorParaOx(ox: string): string {
  if (ox.startsWith('+')) return 'border-rose-500/50 bg-rose-500/10 text-rose-200';
  if (ox.startsWith('−')) return 'border-sky-500/50 bg-sky-500/10 text-sky-200';
  return 'border-slate-500/50 bg-slate-700/40 text-slate-200';
}

export function NumerosOxidacion() {
  const [idx, setIdx] = useState(0);
  const ejemplo = EJEMPLOS[idx];
  const sumaTotal = useMemo(() => {
    return ejemplo.componentes.reduce((acc, c) => {
      const n = parseInt(c.ox.replace('−', '-'), 10);
      return acc + n * c.n;
    }, 0);
  }, [ejemplo]);

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Números de oxidación</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">elegí un compuesto</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {EJEMPLOS.map((ej, i) => (
          <button
            key={ej.formula}
            type="button"
            onClick={() => setIdx(i)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs font-mono transition-colors',
              i === idx
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {ej.formula}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-md bg-slate-950/40 p-4">
        {ejemplo.componentes.map((c) => (
          <div key={c.s} className="flex flex-col items-center gap-1">
            <span
              className={cn(
                'rounded-full border px-2 py-0.5 text-xs font-bold',
                colorParaOx(c.ox),
              )}
            >
              {c.ox}
            </span>
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-slate-100">{c.s}</span>
              {c.n > 1 && <span className="text-sm text-slate-400">{toSubscript(c.n)}</span>}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 rounded-md bg-slate-800/40 p-2 text-xs text-slate-300">
        <span className="text-slate-500">Verificación:</span>{' '}
        suma de todos los Nox × cantidad ={' '}
        <span className={cn('font-semibold', sumaTotal === 0 ? 'text-emerald-300' : 'text-rose-300')}>
          {sumaTotal}
        </span>{' '}
        (debe dar 0 en compuestos neutros).
      </p>
    </div>
  );
}

function toSubscript(n: number): string {
  const map: Record<string, string> = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
  return n.toString().split('').map((d) => map[d] ?? d).join('');
}
