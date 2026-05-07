import { useState } from 'react';
import { cn } from '@/lib/utils';

const EJEMPLOS = [
  { ph: 0, label: 'HCl 1M' },
  { ph: 1, label: 'jugo gástrico' },
  { ph: 2, label: 'limón' },
  { ph: 3, label: 'vinagre' },
  { ph: 4, label: 'tomate' },
  { ph: 5, label: 'café negro' },
  { ph: 6, label: 'leche' },
  { ph: 7, label: 'agua pura' },
  { ph: 7.4, label: 'sangre humana' },
  { ph: 8, label: 'agua de mar' },
  { ph: 9, label: 'bicarbonato' },
  { ph: 10, label: 'jabón' },
  { ph: 11, label: 'amoníaco' },
  { ph: 12, label: 'lejía diluida' },
  { ph: 13, label: 'NaOH 0,1M' },
  { ph: 14, label: 'NaOH 1M' },
];

function colorPara(ph: number): string {
  if (ph < 3) return '#dc2626';
  if (ph < 5) return '#ea580c';
  if (ph < 6.5) return '#f59e0b';
  if (ph < 7.5) return '#22c55e';
  if (ph < 9) return '#06b6d4';
  if (ph < 11) return '#3b82f6';
  return '#7c3aed';
}

function ejemploCercano(ph: number): string {
  let mejor = EJEMPLOS[0];
  let menorDist = Infinity;
  for (const ej of EJEMPLOS) {
    const d = Math.abs(ej.ph - ph);
    if (d < menorDist) {
      menorDist = d;
      mejor = ej;
    }
  }
  return mejor.label;
}

export function PhSlider() {
  const [ph, setPh] = useState(7);
  const pOH = 14 - ph;
  const hConc = Math.pow(10, -ph);
  const ohConc = Math.pow(10, -pOH);
  const tipo = ph < 6.5 ? 'ácido' : ph > 7.5 ? 'básico' : 'neutro';
  const color = colorPara(ph);

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Slider interactivo de pH</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">explorá la escala</span>
      </div>

      <div
        className="relative flex h-20 items-center justify-center rounded-md text-3xl font-bold text-white shadow-inner transition-colors"
        style={{ backgroundColor: color }}
      >
        pH = {ph.toFixed(1)}
      </div>

      <input
        type="range"
        min={0}
        max={14}
        step={0.1}
        value={ph}
        onChange={(e) => setPh(Number(e.target.value))}
        className="mt-3 w-full accent-brand-400"
        aria-label="Valor de pH"
      />
      <div className="mt-1 flex justify-between text-[10px] text-slate-500">
        <span>0 (muy ácido)</span>
        <span>7 (neutro)</span>
        <span>14 (muy básico)</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Tipo" value={tipo} accent={tipo === 'ácido' ? 'rose' : tipo === 'básico' ? 'sky' : 'emerald'} />
        <Stat label="pOH" value={pOH.toFixed(1)} />
        <Stat label="[H⁺]" value={hConc.toExponential(2)} unit="M" />
        <Stat label="[OH⁻]" value={ohConc.toExponential(2)} unit="M" />
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Algo parecido en la vida real: <span className="font-semibold text-slate-200">{ejemploCercano(ph)}</span>.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit?: string;
  accent?: 'rose' | 'sky' | 'emerald';
}) {
  const tone =
    accent === 'rose'
      ? 'text-rose-300'
      : accent === 'sky'
        ? 'text-sky-300'
        : accent === 'emerald'
          ? 'text-emerald-300'
          : 'text-slate-100';
  return (
    <div className="rounded-md border border-slate-700 bg-slate-800/40 px-3 py-2">
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
      <p className={cn('text-sm font-semibold', tone)}>
        {value}
        {unit && <span className="ml-1 text-[10px] text-slate-400">{unit}</span>}
      </p>
    </div>
  );
}
