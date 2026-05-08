import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

type Modo = 'ionico' | 'covalente';

export function FormacionEnlace() {
  const [modo, setModo] = useState<Modo>('ionico');
  const [t, setT] = useState(0);
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
    if (!animando) return;
    if (t >= 1) {
      setAnimando(false);
      return;
    }
    const id = setTimeout(() => setT((x) => Math.min(1, x + 0.04)), 60);
    return () => clearTimeout(id);
  }, [animando, t]);

  const reproducir = () => {
    if (t >= 1) setT(0);
    setAnimando(!animando);
  };

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Formación de enlace</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">animación</span>
      </div>

      <div className="flex gap-1.5">
        <BotonModo activa={modo === 'ionico'} onClick={() => { setModo('ionico'); setT(0); setAnimando(false); }} label="Iónico (Na + Cl)" />
        <BotonModo activa={modo === 'covalente'} onClick={() => { setModo('covalente'); setT(0); setAnimando(false); }} label="Covalente (H + H)" />
      </div>

      <div className="mt-4 rounded-md bg-slate-950/40 p-3">
        {modo === 'ionico' ? <EnlaceIonicoSVG t={t} /> : <EnlaceCovalenteSVG t={t} />}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={reproducir}
          className="inline-flex items-center gap-1.5 rounded-md border border-brand-500/50 bg-brand-500/10 px-3 py-1.5 text-xs text-brand-200 hover:bg-brand-500/20"
        >
          {animando ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {animando ? 'Pausar' : t >= 1 ? 'Reiniciar y reproducir' : 'Reproducir'}
        </button>
        <button
          type="button"
          onClick={() => { setT(0); setAnimando(false); }}
          className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-500"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={t}
          onChange={(e) => { setAnimando(false); setT(parseFloat(e.target.value)); }}
          className="flex-1 min-w-[120px] accent-brand-500"
        />
      </div>

      <p className="mt-3 rounded-md bg-slate-800/40 p-3 text-xs leading-relaxed text-slate-300">
        {modo === 'ionico'
          ? 'El sodio (1 e⁻ de valencia) le cede el electrón al cloro (7 e⁻ de valencia). Se forman Na⁺ y Cl⁻, que se atraen electrostáticamente formando NaCl.'
          : 'Cada hidrógeno aporta 1 electrón al par compartido. Ambos completan el dueto (2 e⁻) y se forma el enlace covalente H–H.'}
      </p>
    </div>
  );
}

function BotonModo({ activa, onClick, label }: { activa: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-md border px-2.5 py-1 text-xs transition-colors',
        activa
          ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
          : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
      )}
    >
      {label}
    </button>
  );
}

function EnlaceIonicoSVG({ t }: { t: number }) {
  const xNa = 50 + t * 30;
  const xCl = 250 - t * 30;
  const xElectron = 50 + t * 200;
  const cargaNa = t > 0.6 ? '+' : '';
  const cargaCl = t > 0.6 ? '−' : '';

  return (
    <svg viewBox="0 0 300 140" className="w-full">
      <circle cx={xNa} cy="70" r="26" fill="rgb(251 191 36 / 0.2)" stroke="rgb(251 191 36)" strokeWidth="1.5" />
      <text x={xNa} y="74" textAnchor="middle" className="fill-amber-200 text-sm font-bold">
        Na{cargaNa && <tspan dy="-6" className="text-[10px]">{cargaNa}</tspan>}
      </text>

      <circle cx={xCl} cy="70" r="32" fill="rgb(74 222 128 / 0.2)" stroke="rgb(74 222 128)" strokeWidth="1.5" />
      <text x={xCl} y="74" textAnchor="middle" className="fill-emerald-200 text-sm font-bold">
        Cl{cargaCl && <tspan dy="-6" className="text-[10px]">{cargaCl}</tspan>}
      </text>

      <circle cx={xElectron} cy="70" r="4" fill="rgb(96 165 250)" />

      <text x="150" y="125" textAnchor="middle" className="fill-slate-400 text-[10px]">
        {t < 0.3 ? 'átomos neutros separados' : t < 0.7 ? 'transferencia de electrón' : 'iones Na⁺ y Cl⁻ atraídos'}
      </text>
    </svg>
  );
}

function EnlaceCovalenteSVG({ t }: { t: number }) {
  const xA = 80 + t * 30;
  const xB = 220 - t * 30;
  const radioA = 22;
  const radioB = 22;

  const e1x = xA + (xB - xA) * (0.3 + t * 0.2);
  const e2x = xA + (xB - xA) * (0.7 - t * 0.2);

  return (
    <svg viewBox="0 0 300 140" className="w-full">
      <circle cx={xA} cy="70" r={radioA} fill="rgb(251 113 133 / 0.2)" stroke="rgb(251 113 133)" strokeWidth="1.5" />
      <text x={xA} y="74" textAnchor="middle" className="fill-rose-200 text-sm font-bold">H</text>

      <circle cx={xB} cy="70" r={radioB} fill="rgb(251 113 133 / 0.2)" stroke="rgb(251 113 133)" strokeWidth="1.5" />
      <text x={xB} y="74" textAnchor="middle" className="fill-rose-200 text-sm font-bold">H</text>

      {t > 0.5 && (
        <ellipse
          cx={(xA + xB) / 2}
          cy="70"
          rx={Math.abs(xB - xA) / 2 + 4}
          ry="20"
          fill="rgb(96 165 250 / 0.15)"
          stroke="rgb(96 165 250 / 0.5)"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      )}

      <circle cx={e1x} cy="64" r="4" fill="rgb(96 165 250)" />
      <circle cx={e2x} cy="76" r="4" fill="rgb(56 189 248)" />

      <text x="150" y="125" textAnchor="middle" className="fill-slate-400 text-[10px]">
        {t < 0.4 ? 'átomos H separados, 1 e⁻ cada uno' : t < 0.8 ? 'orbitales se acercan' : 'par compartido = enlace H–H'}
      </text>
    </svg>
  );
}
