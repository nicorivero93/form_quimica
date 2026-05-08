import { useState } from 'react';
import { cn } from '@/lib/utils';

type OrbitalKey = '1s' | '2s' | '2px' | '2py' | '2pz' | '3dxy' | '3dz2';

interface Orbital {
  key: OrbitalKey;
  nombre: string;
  desc: string;
  capacidad: number;
}

const ORBITALES: Orbital[] = [
  { key: '1s', nombre: '1s', desc: 'Esfera centrada en el núcleo. Sin nodos. Energía más baja.', capacidad: 2 },
  { key: '2s', nombre: '2s', desc: 'Esfera más grande con un nodo radial (zona vacía interna).', capacidad: 2 },
  { key: '2px', nombre: '2pₓ', desc: 'Mancuerna sobre el eje x. Plano nodal en yz.', capacidad: 2 },
  { key: '2py', nombre: '2pᵧ', desc: 'Mancuerna sobre el eje y. Plano nodal en xz.', capacidad: 2 },
  { key: '2pz', nombre: '2p_z', desc: 'Mancuerna sobre el eje z. Plano nodal en xy.', capacidad: 2 },
  { key: '3dxy', nombre: '3d_xy', desc: 'Cuatro lóbulos en el plano xy entre los ejes.', capacidad: 2 },
  { key: '3dz2', nombre: '3d_z²', desc: 'Mancuerna en z con un toroide (anillo) ecuatorial.', capacidad: 2 },
];

export function OrbitalesAtomicos() {
  const [sel, setSel] = useState<OrbitalKey>('1s');
  const orbital = ORBITALES.find((o) => o.key === sel)!;

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Orbitales atómicos</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">forma de la nube electrónica</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ORBITALES.map((o) => (
          <button
            key={o.key}
            type="button"
            onClick={() => setSel(o.key)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs font-mono transition-colors',
              sel === o.key
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {o.nombre}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[200px_1fr]">
        <div className="flex items-center justify-center rounded-md bg-slate-950/50 p-3">
          <OrbitalSVG tipo={orbital.key} />
        </div>
        <div className="space-y-2">
          <p className="rounded-md bg-slate-800/40 p-2 text-xs text-slate-300">{orbital.desc}</p>
          <p className="text-[11px] text-slate-500">
            Capacidad máxima: <span className="text-slate-200">{orbital.capacidad} electrones</span> (Pauli).
          </p>
          <p className="text-[11px] text-slate-500">
            Las zonas claras representan alta probabilidad de encontrar al electrón. No son trayectorias.
          </p>
        </div>
      </div>
    </div>
  );
}

function OrbitalSVG({ tipo }: { tipo: OrbitalKey }) {
  const cx = 90;
  const cy = 90;

  return (
    <svg viewBox="0 0 180 180" className="h-44 w-44">
      <defs>
        <radialGradient id="orb-cloud" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(125 211 252)" stopOpacity="0.85" />
          <stop offset="60%" stopColor="rgb(56 189 248)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="rgb(14 165 233)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb-cloud-pos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(110 231 183)" stopOpacity="0.85" />
          <stop offset="60%" stopColor="rgb(52 211 153)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb-cloud-neg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(252 165 165)" stopOpacity="0.85" />
          <stop offset="60%" stopColor="rgb(248 113 113)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="rgb(239 68 68)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ejes */}
      <line x1="10" y1={cy} x2="170" y2={cy} stroke="rgb(71 85 105)" strokeWidth="0.6" strokeDasharray="2 3" />
      <line x1={cx} y1="10" x2={cx} y2="170" stroke="rgb(71 85 105)" strokeWidth="0.6" strokeDasharray="2 3" />

      {tipo === '1s' && <circle cx={cx} cy={cy} r="55" fill="url(#orb-cloud)" />}

      {tipo === '2s' && (
        <>
          <circle cx={cx} cy={cy} r="70" fill="url(#orb-cloud)" />
          <circle cx={cx} cy={cy} r="30" fill="rgb(2 6 23)" />
          <circle cx={cx} cy={cy} r="22" fill="url(#orb-cloud)" />
        </>
      )}

      {tipo === '2px' && (
        <>
          <ellipse cx={cx - 40} cy={cy} rx="35" ry="22" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx + 40} cy={cy} rx="35" ry="22" fill="url(#orb-cloud-neg)" />
        </>
      )}

      {tipo === '2py' && (
        <>
          <ellipse cx={cx} cy={cy - 40} rx="22" ry="35" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx} cy={cy + 40} rx="22" ry="35" fill="url(#orb-cloud-neg)" />
        </>
      )}

      {tipo === '2pz' && (
        <g transform={`rotate(-30 ${cx} ${cy})`}>
          <ellipse cx={cx - 40} cy={cy} rx="35" ry="22" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx + 40} cy={cy} rx="35" ry="22" fill="url(#orb-cloud-neg)" />
        </g>
      )}

      {tipo === '3dxy' && (
        <>
          <ellipse cx={cx - 35} cy={cy - 35} rx="22" ry="22" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx + 35} cy={cy + 35} rx="22" ry="22" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx - 35} cy={cy + 35} rx="22" ry="22" fill="url(#orb-cloud-neg)" />
          <ellipse cx={cx + 35} cy={cy - 35} rx="22" ry="22" fill="url(#orb-cloud-neg)" />
        </>
      )}

      {tipo === '3dz2' && (
        <>
          <ellipse cx={cx} cy={cy} rx="55" ry="14" fill="url(#orb-cloud-neg)" />
          <ellipse cx={cx} cy={cy - 38} rx="20" ry="28" fill="url(#orb-cloud-pos)" />
          <ellipse cx={cx} cy={cy + 38} rx="20" ry="28" fill="url(#orb-cloud-pos)" />
        </>
      )}

      {/* Núcleo */}
      <circle cx={cx} cy={cy} r="3" fill="rgb(248 250 252)" />
    </svg>
  );
}
