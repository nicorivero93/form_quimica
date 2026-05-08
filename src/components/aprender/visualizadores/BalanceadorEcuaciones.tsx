import { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Especie {
  formula: string;
  atomos: Record<string, number>;
}

interface Reaccion {
  id: string;
  nombre: string;
  reactivos: Especie[];
  productos: Especie[];
  solucion: { reactivos: number[]; productos: number[] };
}

const REACCIONES: Reaccion[] = [
  {
    id: 'h2-o2',
    nombre: 'Combustión de H₂',
    reactivos: [
      { formula: 'H₂', atomos: { H: 2 } },
      { formula: 'O₂', atomos: { O: 2 } },
    ],
    productos: [{ formula: 'H₂O', atomos: { H: 2, O: 1 } }],
    solucion: { reactivos: [2, 1], productos: [2] },
  },
  {
    id: 'haber',
    nombre: 'Síntesis de NH₃',
    reactivos: [
      { formula: 'N₂', atomos: { N: 2 } },
      { formula: 'H₂', atomos: { H: 2 } },
    ],
    productos: [{ formula: 'NH₃', atomos: { N: 1, H: 3 } }],
    solucion: { reactivos: [1, 3], productos: [2] },
  },
  {
    id: 'metano',
    nombre: 'Combustión de CH₄',
    reactivos: [
      { formula: 'CH₄', atomos: { C: 1, H: 4 } },
      { formula: 'O₂', atomos: { O: 2 } },
    ],
    productos: [
      { formula: 'CO₂', atomos: { C: 1, O: 2 } },
      { formula: 'H₂O', atomos: { H: 2, O: 1 } },
    ],
    solucion: { reactivos: [1, 2], productos: [1, 2] },
  },
  {
    id: 'fe2o3',
    nombre: 'Reducción de Fe₂O₃',
    reactivos: [
      { formula: 'Fe₂O₃', atomos: { Fe: 2, O: 3 } },
      { formula: 'CO', atomos: { C: 1, O: 1 } },
    ],
    productos: [
      { formula: 'Fe', atomos: { Fe: 1 } },
      { formula: 'CO₂', atomos: { C: 1, O: 2 } },
    ],
    solucion: { reactivos: [1, 3], productos: [2, 3] },
  },
];

export function BalanceadorEcuaciones() {
  const [idx, setIdx] = useState(0);
  const reaccion = REACCIONES[idx];
  const [coefR, setCoefR] = useState<number[]>(() => reaccion.reactivos.map(() => 1));
  const [coefP, setCoefP] = useState<number[]>(() => reaccion.productos.map(() => 1));

  const balance = useMemo(() => {
    const elementos = new Set<string>();
    reaccion.reactivos.forEach((e) => Object.keys(e.atomos).forEach((a) => elementos.add(a)));
    reaccion.productos.forEach((e) => Object.keys(e.atomos).forEach((a) => elementos.add(a)));

    const out: { elemento: string; lado1: number; lado2: number; ok: boolean }[] = [];
    elementos.forEach((el) => {
      const lado1 = reaccion.reactivos.reduce((a, e, i) => a + (e.atomos[el] ?? 0) * coefR[i], 0);
      const lado2 = reaccion.productos.reduce((a, e, i) => a + (e.atomos[el] ?? 0) * coefP[i], 0);
      out.push({ elemento: el, lado1, lado2, ok: lado1 === lado2 });
    });
    return out;
  }, [coefR, coefP, reaccion]);

  const balanceado = balance.every((b) => b.ok);

  const cambiarReaccion = (i: number) => {
    setIdx(i);
    setCoefR(REACCIONES[i].reactivos.map(() => 1));
    setCoefP(REACCIONES[i].productos.map(() => 1));
  };

  const aplicarSolucion = () => {
    setCoefR([...reaccion.solucion.reactivos]);
    setCoefP([...reaccion.solucion.productos]);
  };

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Balanceador interactivo</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">ajustá coeficientes</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {REACCIONES.map((r, i) => (
          <button
            key={r.id}
            type="button"
            onClick={() => cambiarReaccion(i)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              i === idx
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {r.nombre}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-md bg-slate-950/40 p-4 font-mono text-base text-slate-100">
        {reaccion.reactivos.map((e, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-slate-500">+</span>}
            <CoefInput value={coefR[i]} onChange={(v) => setCoefR(coefR.map((c, j) => (j === i ? v : c)))} />
            <span>{e.formula}</span>
          </span>
        ))}
        <span className="text-slate-400">→</span>
        {reaccion.productos.map((e, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-slate-500">+</span>}
            <CoefInput value={coefP[i]} onChange={(v) => setCoefP(coefP.map((c, j) => (j === i ? v : c)))} />
            <span>{e.formula}</span>
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {balance.map((b) => (
          <div
            key={b.elemento}
            className={cn(
              'flex items-center justify-between rounded-md border px-2 py-1 text-xs',
              b.ok ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : 'border-rose-500/40 bg-rose-500/10 text-rose-200',
            )}
          >
            <span className="font-bold">{b.elemento}</span>
            <span className="font-mono">
              {b.lado1} {b.ok ? '=' : '≠'} {b.lado2}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <p
          className={cn(
            'flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs',
            balanceado ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-800/40 text-slate-400',
          )}
        >
          {balanceado && <Check className="h-3.5 w-3.5" />}
          {balanceado ? 'Ecuación balanceada' : 'Aún sin balancear'}
        </p>
        <button
          type="button"
          onClick={aplicarSolucion}
          className="rounded-md border border-slate-700 bg-slate-800/40 px-2.5 py-1 text-xs text-slate-300 hover:border-slate-500"
        >
          Mostrar solución
        </button>
      </div>
    </div>
  );
}

function CoefInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <input
      type="number"
      min={1}
      max={20}
      value={value}
      onChange={(e) => onChange(Math.max(1, Math.min(20, parseInt(e.target.value, 10) || 1)))}
      className="w-12 rounded border border-slate-700 bg-slate-800 px-1 py-0.5 text-center font-mono text-sm text-slate-100"
    />
  );
}
