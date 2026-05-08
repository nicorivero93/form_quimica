import { useState } from 'react';
import { cn } from '@/lib/utils';

const R = 0.0821;

type Variable = 'P' | 'V' | 'T' | 'n';

interface Estado {
  P: number;
  V: number;
  T: number;
  n: number;
}

const ESTADO_INICIAL: Estado = { P: 1, V: 22.4, T: 273, n: 1 };

export function GasesIdealesSliders() {
  const [estado, setEstado] = useState<Estado>(ESTADO_INICIAL);
  const [despejar, setDespejar] = useState<Variable>('V');

  const calcular = (e: Estado, target: Variable): Estado => {
    const out = { ...e };
    if (target === 'P') out.P = (out.n * R * out.T) / out.V;
    if (target === 'V') out.V = (out.n * R * out.T) / out.P;
    if (target === 'T') out.T = (out.P * out.V) / (out.n * R);
    if (target === 'n') out.n = (out.P * out.V) / (R * out.T);
    return out;
  };

  const cambiar = (key: Variable, val: number) => {
    if (key === despejar) return;
    const next = { ...estado, [key]: val };
    setEstado(calcular(next, despejar));
  };

  const verifica = Math.abs(estado.P * estado.V - estado.n * R * estado.T);

  const bloqueoOpciones: { key: Variable; label: string }[] = [
    { key: 'P', label: 'Despejar P' },
    { key: 'V', label: 'Despejar V' },
    { key: 'T', label: 'Despejar T' },
    { key: 'n', label: 'Despejar n' },
  ];

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">PV = nRT interactivo</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">R = 0.0821 atm·L/mol·K</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {bloqueoOpciones.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => setDespejar(b.key)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              despejar === b.key
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center rounded-md bg-slate-950/30 p-4">
        <BalonGas P={estado.P} T={estado.T} V={estado.V} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Slider
          label="Presión P"
          unidad="atm"
          min={0.1}
          max={10}
          step={0.1}
          valor={estado.P}
          onChange={(v) => cambiar('P', v)}
          bloqueado={despejar === 'P'}
        />
        <Slider
          label="Volumen V"
          unidad="L"
          min={0.5}
          max={100}
          step={0.5}
          valor={estado.V}
          onChange={(v) => cambiar('V', v)}
          bloqueado={despejar === 'V'}
        />
        <Slider
          label="Temperatura T"
          unidad="K"
          min={50}
          max={1000}
          step={5}
          valor={estado.T}
          onChange={(v) => cambiar('T', v)}
          bloqueado={despejar === 'T'}
        />
        <Slider
          label="Moles n"
          unidad="mol"
          min={0.1}
          max={10}
          step={0.1}
          valor={estado.n}
          onChange={(v) => cambiar('n', v)}
          bloqueado={despejar === 'n'}
        />
      </div>

      <div className="mt-3 rounded-md bg-slate-950/40 p-3 text-xs">
        <div className="font-mono text-slate-200">
          P · V = n · R · T → {estado.P.toFixed(2)} × {estado.V.toFixed(2)} ≈{' '}
          {(estado.P * estado.V).toFixed(3)} ≈ {estado.n.toFixed(2)} × 0.0821 × {estado.T.toFixed(0)} ≈{' '}
          {(estado.n * R * estado.T).toFixed(3)}
        </div>
        <div className="mt-1 text-[11px] text-slate-500">
          {verifica < 0.01 ? '✓ Ecuación verificada' : `Δ = ${verifica.toFixed(3)}`}
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  unidad,
  min,
  max,
  step,
  valor,
  onChange,
  bloqueado,
}: {
  label: string;
  unidad: string;
  min: number;
  max: number;
  step: number;
  valor: number;
  onChange: (v: number) => void;
  bloqueado: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-md border p-2.5 transition-opacity',
        bloqueado ? 'border-slate-700 bg-slate-800/30 opacity-60' : 'border-slate-700/60 bg-slate-800/40',
      )}
    >
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs text-slate-400">{label}</span>
        <span className="font-mono text-sm text-slate-100">
          {valor.toFixed(unidad === 'K' ? 0 : 2)} {unidad}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, valor))}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        disabled={bloqueado}
        className="w-full accent-brand-500"
      />
      {bloqueado && <p className="mt-1 text-[10px] text-amber-400">se calcula desde los otros</p>}
    </div>
  );
}

function BalonGas({ P, T, V }: { P: number; T: number; V: number }) {
  const radio = Math.max(20, Math.min(60, Math.cbrt(V) * 14));
  const tColor = T < 200 ? 'rgb(96 165 250)' : T > 500 ? 'rgb(248 113 113)' : 'rgb(252 211 77)';
  const moleculas = Math.min(20, Math.max(4, Math.round(P * 4)));
  const seed = (i: number) => (Math.sin(i * 12.9898) * 43758.5453) % 1;

  return (
    <svg viewBox="0 0 200 140" className="h-32 w-full max-w-[280px]">
      <circle cx="100" cy="70" r={radio} fill={tColor} fillOpacity="0.15" stroke={tColor} strokeOpacity="0.6" strokeWidth="1.2" />
      {Array.from({ length: moleculas }).map((_, i) => {
        const angle = seed(i + 1) * Math.PI * 2;
        const r = Math.abs(seed(i + 100)) * (radio - 6);
        const x = 100 + Math.cos(angle) * r;
        const y = 70 + Math.sin(angle) * r;
        return <circle key={i} cx={x} cy={y} r="2" fill={tColor} />;
      })}
      <text x="100" y="125" textAnchor="middle" className="fill-slate-400 text-[9px] font-mono">
        {moleculas} moléculas · radio ∝ ³√V
      </text>
    </svg>
  );
}
