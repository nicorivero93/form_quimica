import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type Orden = 0 | 1 | 2;

export function CurvaCinetica() {
  const [orden, setOrden] = useState<Orden>(1);
  const [k, setK] = useState(0.1);
  const [c0, setC0] = useState(1.0);

  const puntos = useMemo(() => {
    const tMax = 30;
    const N = 60;
    const out: { t: number; c: number }[] = [];
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * tMax;
      let c = 0;
      if (orden === 0) c = Math.max(0, c0 - k * t);
      else if (orden === 1) c = c0 * Math.exp(-k * t);
      else c = 1 / (1 / c0 + k * t);
      out.push({ t, c });
    }
    return out;
  }, [orden, k, c0]);

  const tMax = 30;
  const cMax = 1.2;
  const W = 300;
  const H = 180;
  const padX = 30;
  const padY = 18;
  const x = (t: number) => padX + (t / tMax) * (W - padX - 8);
  const y = (c: number) => H - padY - (c / cMax) * (H - padY - 8);

  const path = puntos.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(p.t).toFixed(1)} ${y(p.c).toFixed(1)}`).join(' ');

  const tHalfTexto = (() => {
    if (orden === 0) return `${(c0 / (2 * k)).toFixed(2)} u (depende de [A]₀)`;
    if (orden === 1) return `${(Math.LN2 / k).toFixed(2)} u (constante)`;
    return `${(1 / (k * c0)).toFixed(2)} u (depende de [A]₀)`;
  })();

  const ley = orden === 0 ? 'v = k' : orden === 1 ? 'v = k · [A]' : 'v = k · [A]²';
  const integrada = orden === 0 ? '[A] = [A]₀ − k·t' : orden === 1 ? '[A] = [A]₀ · e^(−k·t)' : '1/[A] = 1/[A]₀ + k·t';

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Cinética: [A] vs tiempo</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">orden de reacción</span>
      </div>

      <div className="flex gap-1.5">
        {[0, 1, 2].map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setOrden(o as Orden)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              orden === o
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            Orden {o}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-md bg-slate-950/40 p-3">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          {[0, 0.25, 0.5, 0.75, 1].map((f) => (
            <line key={f} x1={padX} y1={y(f * cMax)} x2={W - 8} y2={y(f * cMax)} stroke="rgb(51 65 85 / 0.5)" strokeWidth="0.5" />
          ))}
          <line x1={padX} y1={padY} x2={padX} y2={H - padY} stroke="rgb(71 85 105)" strokeWidth="1" />
          <line x1={padX} y1={H - padY} x2={W - 8} y2={H - padY} stroke="rgb(71 85 105)" strokeWidth="1" />

          <text x="6" y={padY + 4} className="fill-slate-400 text-[10px]">[A]</text>
          <text x={W - 14} y={H - padY + 12} className="fill-slate-400 text-[10px]">t</text>

          <path d={path} fill="none" stroke="rgb(56 189 248)" strokeWidth="2" />

          <line x1={padX} y1={y(c0 / 2)} x2={W - 8} y2={y(c0 / 2)} stroke="rgb(252 211 77 / 0.4)" strokeWidth="0.6" strokeDasharray="3 2" />
          <text x={W - 60} y={y(c0 / 2) - 3} className="fill-amber-300 text-[9px]">[A]₀ / 2</text>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-slate-700/60 bg-slate-800/40 p-2.5">
          <div className="mb-1 flex items-baseline justify-between">
            <span className="text-xs text-slate-400">Constante k</span>
            <span className="font-mono text-sm text-slate-100">{k.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={0.01}
            max={0.5}
            step={0.01}
            value={k}
            onChange={(e) => setK(parseFloat(e.target.value))}
            className="w-full accent-brand-500"
          />
        </div>
        <div className="rounded-md border border-slate-700/60 bg-slate-800/40 p-2.5">
          <div className="mb-1 flex items-baseline justify-between">
            <span className="text-xs text-slate-400">[A]₀</span>
            <span className="font-mono text-sm text-slate-100">{c0.toFixed(2)} M</span>
          </div>
          <input
            type="range"
            min={0.2}
            max={1.2}
            step={0.05}
            value={c0}
            onChange={(e) => setC0(parseFloat(e.target.value))}
            className="w-full accent-brand-500"
          />
        </div>
      </div>

      <div className="mt-3 rounded-md bg-slate-800/40 p-3 text-xs space-y-1">
        <div className="font-mono text-slate-200">Ley de velocidad: {ley}</div>
        <div className="font-mono text-slate-300">Integrada: {integrada}</div>
        <div className="text-slate-400">
          t<sub>½</sub> = <span className="text-slate-100">{tHalfTexto}</span>
        </div>
      </div>
    </div>
  );
}
