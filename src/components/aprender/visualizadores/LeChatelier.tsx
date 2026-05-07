import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Direccion = 'izq' | 'der' | 'sin';

interface Perturbacion {
  id: string;
  label: string;
  efecto: Direccion;
  explicacion: string;
}

const REACCIONES = [
  {
    id: 'haber',
    nombre: 'Síntesis de amoníaco',
    formula: 'N₂ + 3 H₂ ⇌ 2 NH₃',
    nota: 'Exotérmica. 4 mol de gas → 2 mol.',
    perturbaciones: [
      { id: 'mas-n2', label: '+ N₂', efecto: 'der' as Direccion, explicacion: 'Más reactivo desplaza hacia productos.' },
      { id: 'mas-nh3', label: '+ NH₃', efecto: 'izq' as Direccion, explicacion: 'Más producto desplaza hacia reactivos.' },
      { id: 'mas-p', label: '↑ presión', efecto: 'der' as Direccion, explicacion: 'Aumenta P → va al lado con menos moles de gas (productos: 2 mol).' },
      { id: 'menos-p', label: '↓ presión', efecto: 'izq' as Direccion, explicacion: 'Baja P → va al lado con más moles de gas (reactivos: 4 mol).' },
      { id: 'mas-t', label: '↑ temperatura', efecto: 'izq' as Direccion, explicacion: 'Exotérmica + más T → desplaza hacia reactivos (absorbe el calor extra).' },
      { id: 'menos-t', label: '↓ temperatura', efecto: 'der' as Direccion, explicacion: 'Exotérmica + menos T → desplaza hacia productos.' },
      { id: 'cat', label: '+ catalizador', efecto: 'sin' as Direccion, explicacion: 'No desplaza el equilibrio, solo lo alcanza más rápido.' },
    ],
  },
  {
    id: 'caliza',
    nombre: 'Descomposición de la caliza',
    formula: 'CaCO₃ (s) ⇌ CaO (s) + CO₂ (g)',
    nota: 'Endotérmica. Sólidos no cuentan en Keq.',
    perturbaciones: [
      { id: 'mas-co2', label: '+ CO₂', efecto: 'izq' as Direccion, explicacion: 'Más producto gaseoso → equilibrio se mueve hacia reactivos.' },
      { id: 'menos-co2', label: '↓ CO₂', efecto: 'der' as Direccion, explicacion: 'Menos producto → más descomposición.' },
      { id: 'mas-t', label: '↑ temperatura', efecto: 'der' as Direccion, explicacion: 'Endotérmica + más T → más productos. Por eso los hornos de cemento son a alta T.' },
      { id: 'mas-caco3', label: '+ CaCO₃ (s)', efecto: 'sin' as Direccion, explicacion: 'Sólidos no afectan: su "concentración" es constante.' },
    ],
  },
  {
    id: 'agua-h',
    nombre: 'Equilibrio del agua',
    formula: '2 H₂ + O₂ ⇌ 2 H₂O',
    nota: 'Exotérmica. 3 mol de gas → 2 mol.',
    perturbaciones: [
      { id: 'mas-h2', label: '+ H₂', efecto: 'der' as Direccion, explicacion: 'Más reactivo → más agua.' },
      { id: 'mas-p', label: '↑ presión', efecto: 'der' as Direccion, explicacion: '3 → 2 mol de gas, va hacia productos.' },
      { id: 'mas-t', label: '↑ temperatura', efecto: 'izq' as Direccion, explicacion: 'Exotérmica + más T → reactivos.' },
    ],
  },
];

export function LeChatelier() {
  const [reaccionIdx, setReaccionIdx] = useState(0);
  const [perturbacion, setPerturbacion] = useState<Perturbacion | null>(null);
  const reaccion = REACCIONES[reaccionIdx];

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Le Chatelier interactivo</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">probá perturbaciones</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {REACCIONES.map((r, i) => (
          <button
            key={r.id}
            type="button"
            onClick={() => {
              setReaccionIdx(i);
              setPerturbacion(null);
            }}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              i === reaccionIdx
                ? 'border-violet-500/60 bg-violet-500/15 text-violet-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {r.nombre}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-md bg-slate-950/40 p-4 text-center">
        <p className="text-lg font-mono text-slate-100">{reaccion.formula}</p>
        <p className="mt-1 text-[11px] text-slate-500">{reaccion.nota}</p>

        {perturbacion && (
          <div className="mt-3 inline-flex items-center gap-3 rounded-md bg-slate-900 px-3 py-1.5 text-xs">
            <span className="text-slate-300">{perturbacion.label}</span>
            <DireccionIcon dir={perturbacion.efecto} />
            <span
              className={cn(
                'font-semibold',
                perturbacion.efecto === 'der' && 'text-emerald-300',
                perturbacion.efecto === 'izq' && 'text-amber-300',
                perturbacion.efecto === 'sin' && 'text-slate-400',
              )}
            >
              {perturbacion.efecto === 'der' && 'avanza →'}
              {perturbacion.efecto === 'izq' && '← retrocede'}
              {perturbacion.efecto === 'sin' && 'no se desplaza'}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {reaccion.perturbaciones.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPerturbacion(p)}
            className={cn(
              'rounded-md border px-2.5 py-1 text-xs transition-colors',
              perturbacion?.id === p.id
                ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {perturbacion && (
        <p className="mt-3 rounded-md bg-slate-800/40 p-3 text-xs leading-relaxed text-slate-300">
          {perturbacion.explicacion}
        </p>
      )}
    </div>
  );
}

function DireccionIcon({ dir }: { dir: Direccion }) {
  if (dir === 'der') return <ArrowRight className="h-4 w-4 text-emerald-400" />;
  if (dir === 'izq') return <ArrowLeft className="h-4 w-4 text-amber-400" />;
  return <span className="text-slate-500">—</span>;
}
