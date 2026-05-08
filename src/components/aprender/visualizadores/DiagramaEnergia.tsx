import { useState } from 'react';
import { cn } from '@/lib/utils';

type Tipo = 'exo' | 'endo';

export function DiagramaEnergia() {
  const [tipo, setTipo] = useState<Tipo>('exo');
  const [Ea, setEa] = useState(80);
  const [absDH, setAbsDH] = useState(40);

  const dH = tipo === 'exo' ? -absDH : absDH;
  const yReact = 60;
  const yProd = yReact - dH;
  const yPico = Math.min(yReact, yProd) - Ea;

  const minY = Math.min(yReact, yProd, yPico) - 10;
  const maxY = Math.max(yReact, yProd, yPico) + 10;
  const altura = maxY - minY;

  const norm = (y: number) => 200 - ((y - minY) / altura) * 180;

  const path = `M 30 ${norm(yReact)}
                L 70 ${norm(yReact)}
                Q 130 ${norm(yPico)} 190 ${norm(yPico)}
                Q 220 ${norm(yPico)} 240 ${norm(yProd)}
                L 280 ${norm(yProd)}`;

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Diagrama de energía</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">reactivos → productos</span>
      </div>

      <div className="flex gap-1.5">
        <BotonTipo activa={tipo === 'exo'} onClick={() => setTipo('exo')} color="rose" label="Exotérmica (ΔH < 0)" />
        <BotonTipo activa={tipo === 'endo'} onClick={() => setTipo('endo')} color="sky" label="Endotérmica (ΔH > 0)" />
      </div>

      <div className="mt-4 rounded-md bg-slate-950/40 p-3">
        <svg viewBox="0 0 310 220" className="w-full">
          <line x1="20" y1="210" x2="305" y2="210" stroke="rgb(71 85 105)" strokeWidth="1" />
          <line x1="20" y1="10" x2="20" y2="210" stroke="rgb(71 85 105)" strokeWidth="1" />
          <text x="6" y="14" className="fill-slate-400 text-[10px]">E</text>
          <text x="295" y="206" className="fill-slate-400 text-[10px]">t</text>

          <path d={path} fill="none" stroke={tipo === 'exo' ? 'rgb(251 113 133)' : 'rgb(56 189 248)'} strokeWidth="2.4" />

          <line x1="70" y1={norm(yReact)} x2="240" y2={norm(yReact)} stroke="rgb(148 163 184)" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="130" y1={norm(yPico)} x2="240" y2={norm(yPico)} stroke="rgb(148 163 184)" strokeWidth="0.5" strokeDasharray="3 3" />

          <line x1="245" y1={norm(yReact)} x2="245" y2={norm(yPico)} stroke="rgb(252 211 77)" strokeWidth="1.2" markerEnd="url(#arrow-y)" />
          <text x="252" y={(norm(yReact) + norm(yPico)) / 2} className="fill-amber-300 text-[10px] font-mono">Ea</text>

          <line x1="265" y1={norm(yReact)} x2="265" y2={norm(yProd)} stroke={tipo === 'exo' ? 'rgb(251 113 133)' : 'rgb(56 189 248)'} strokeWidth="1.2" markerEnd="url(#arrow-y)" />
          <text x="272" y={(norm(yReact) + norm(yProd)) / 2} className={cn('text-[10px] font-mono', tipo === 'exo' ? 'fill-rose-300' : 'fill-sky-300')}>ΔH</text>

          <text x="40" y={norm(yReact) - 6} className="fill-slate-300 text-[10px]">reactivos</text>
          <text x="200" y={norm(yProd) - 6} className="fill-slate-300 text-[10px]">productos</text>
          <text x="125" y={norm(yPico) - 6} className="fill-slate-400 text-[10px]">complejo activado</text>

          <defs>
            <marker id="arrow-y" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="rgb(148 163 184)" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <SliderEnergia label="Energía de activación Ea" valor={Ea} setValor={setEa} min={10} max={120} unidad="kJ/mol" color="text-amber-300" />
        <SliderEnergia label="|ΔH|" valor={absDH} setValor={setAbsDH} min={5} max={100} unidad="kJ/mol" color={tipo === 'exo' ? 'text-rose-300' : 'text-sky-300'} />
      </div>

      <p className="mt-3 rounded-md bg-slate-800/40 p-3 text-xs text-slate-300">
        {tipo === 'exo'
          ? `Reacción exotérmica: libera ${absDH} kJ/mol al ambiente. Ea = ${Ea} kJ/mol es la barrera que hay que superar para que arranque.`
          : `Reacción endotérmica: absorbe ${absDH} kJ/mol del ambiente. Ea = ${Ea} kJ/mol es la barrera energética inicial.`}
      </p>
    </div>
  );
}

function BotonTipo({ activa, onClick, color, label }: { activa: boolean; onClick: () => void; color: string; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-md border px-2.5 py-1 text-xs transition-colors',
        activa
          ? color === 'rose'
            ? 'border-rose-500/60 bg-rose-500/15 text-rose-100'
            : 'border-sky-500/60 bg-sky-500/15 text-sky-100'
          : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
      )}
    >
      {label}
    </button>
  );
}

function SliderEnergia({
  label,
  valor,
  setValor,
  min,
  max,
  unidad,
  color,
}: {
  label: string;
  valor: number;
  setValor: (v: number) => void;
  min: number;
  max: number;
  unidad: string;
  color: string;
}) {
  return (
    <div className="rounded-md border border-slate-700/60 bg-slate-800/40 p-2.5">
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs text-slate-400">{label}</span>
        <span className={cn('font-mono text-sm', color)}>{valor} {unidad}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={(e) => setValor(parseFloat(e.target.value))}
        className="w-full accent-brand-500"
      />
    </div>
  );
}
