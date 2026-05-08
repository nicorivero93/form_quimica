import { useEffect, useMemo, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubnivelInfo {
  n: number;
  l: number;
  label: string;
  cap: number;
}

const ORDEN_LLENADO: SubnivelInfo[] = [
  { n: 1, l: 0, label: '1s', cap: 2 },
  { n: 2, l: 0, label: '2s', cap: 2 },
  { n: 2, l: 1, label: '2p', cap: 6 },
  { n: 3, l: 0, label: '3s', cap: 2 },
  { n: 3, l: 1, label: '3p', cap: 6 },
  { n: 4, l: 0, label: '4s', cap: 2 },
  { n: 3, l: 2, label: '3d', cap: 10 },
  { n: 4, l: 1, label: '4p', cap: 6 },
  { n: 5, l: 0, label: '5s', cap: 2 },
  { n: 4, l: 2, label: '4d', cap: 10 },
  { n: 5, l: 1, label: '5p', cap: 6 },
  { n: 6, l: 0, label: '6s', cap: 2 },
  { n: 4, l: 3, label: '4f', cap: 14 },
  { n: 5, l: 2, label: '5d', cap: 10 },
  { n: 6, l: 1, label: '6p', cap: 6 },
  { n: 7, l: 0, label: '7s', cap: 2 },
  { n: 5, l: 3, label: '5f', cap: 14 },
  { n: 6, l: 2, label: '6d', cap: 10 },
  { n: 7, l: 1, label: '7p', cap: 6 },
];

const GRID: (string | null)[][] = [
  ['1s', null, null, null],
  ['2s', '2p', null, null],
  ['3s', '3p', '3d', null],
  ['4s', '4p', '4d', '4f'],
  ['5s', '5p', '5d', '5f'],
  ['6s', '6p', '6d', null],
  ['7s', '7p', null, null],
];

const COLOR_POR_TIPO: Record<string, string> = {
  s: 'border-sky-500/50 bg-sky-500/15 text-sky-100',
  p: 'border-emerald-500/50 bg-emerald-500/15 text-emerald-100',
  d: 'border-amber-500/50 bg-amber-500/15 text-amber-100',
  f: 'border-violet-500/50 bg-violet-500/15 text-violet-100',
};

const ELEMENTOS_PRESET = [
  { Z: 1, simbolo: 'H' },
  { Z: 2, simbolo: 'He' },
  { Z: 6, simbolo: 'C' },
  { Z: 11, simbolo: 'Na' },
  { Z: 17, simbolo: 'Cl' },
  { Z: 20, simbolo: 'Ca' },
  { Z: 26, simbolo: 'Fe' },
  { Z: 35, simbolo: 'Br' },
  { Z: 53, simbolo: 'I' },
  { Z: 79, simbolo: 'Au' },
  { Z: 92, simbolo: 'U' },
];

function configuracionPara(Z: number) {
  let restantes = Z;
  const out: { label: string; electrones: number }[] = [];
  for (const sub of ORDEN_LLENADO) {
    if (restantes <= 0) break;
    const e = Math.min(restantes, sub.cap);
    out.push({ label: sub.label, electrones: e });
    restantes -= e;
  }
  return out;
}

export function DiagramaMoeller() {
  const [pasoActual, setPasoActual] = useState(-1);
  const [animando, setAnimando] = useState(false);
  const [Z, setZ] = useState(35);

  useEffect(() => {
    if (!animando) return;
    if (pasoActual >= ORDEN_LLENADO.length - 1) {
      setAnimando(false);
      return;
    }
    const t = setTimeout(() => setPasoActual((p) => p + 1), 450);
    return () => clearTimeout(t);
  }, [animando, pasoActual]);

  const config = useMemo(() => configuracionPara(Z), [Z]);
  const setPorZ = useMemo(() => new Set(config.map((c) => c.label)), [config]);

  const isAnimMode = pasoActual >= 0;
  const setAnim = useMemo(() => {
    const s = new Set<string>();
    for (let i = 0; i <= pasoActual; i++) s.add(ORDEN_LLENADO[i].label);
    return s;
  }, [pasoActual]);

  const llenados = isAnimMode ? setAnim : setPorZ;

  const reproducir = () => {
    if (animando) {
      setAnimando(false);
      return;
    }
    if (pasoActual >= ORDEN_LLENADO.length - 1) setPasoActual(-1);
    setAnimando(true);
  };

  const reset = () => {
    setAnimando(false);
    setPasoActual(-1);
  };

  const pasoSub = pasoActual >= 0 ? ORDEN_LLENADO[pasoActual] : null;
  const acumuladoAnim = pasoActual >= 0
    ? ORDEN_LLENADO.slice(0, pasoActual + 1).reduce((a, s) => a + s.cap, 0)
    : 0;

  return (
    <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h4 className="text-sm font-semibold text-slate-200">Diagrama de Moeller</h4>
        <span className="text-[10px] uppercase tracking-wide text-slate-500">regla de las diagonales</span>
      </div>

      <div className="flex flex-col items-center gap-1.5 rounded-md bg-slate-950/30 p-3">
        {GRID.map((fila, rowIdx) => (
          <div key={rowIdx} className="flex gap-1.5">
            {fila.map((sub, colIdx) => {
              if (!sub) return <div key={colIdx} className="h-12 w-14" />;
              const tipo = sub[1];
              const ordenIdx = ORDEN_LLENADO.findIndex((s) => s.label === sub);
              const cap = ORDEN_LLENADO[ordenIdx].cap;
              const llenado = llenados.has(sub);
              const esActual = isAnimMode && ordenIdx === pasoActual;
              const electronesZ = !isAnimMode ? config.find((c) => c.label === sub)?.electrones : undefined;
              const electronesMostrar = isAnimMode ? (llenado ? cap : null) : electronesZ ?? null;
              return (
                <div
                  key={colIdx}
                  className={cn(
                    'relative flex h-12 w-14 flex-col items-center justify-center rounded-md border font-mono transition-all',
                    COLOR_POR_TIPO[tipo],
                    llenado ? 'opacity-100' : 'opacity-30',
                    esActual && 'scale-110 ring-2 ring-white shadow-lg shadow-brand-500/30',
                  )}
                >
                  <span className="text-sm font-bold">{sub}</span>
                  <span className="text-[10px] opacity-80">
                    {electronesMostrar != null && (
                      <>
                        e⁻: <span className="font-semibold">{electronesMostrar}</span>
                      </>
                    )}
                  </span>
                  <span className="absolute -left-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[9px] text-slate-300">
                    {ordenIdx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
        <span>Tipo:</span>
        <Leyenda tipo="s" label="s (cap. 2)" />
        <Leyenda tipo="p" label="p (cap. 6)" />
        <Leyenda tipo="d" label="d (cap. 10)" />
        <Leyenda tipo="f" label="f (cap. 14)" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={reproducir}
          className="inline-flex items-center gap-1.5 rounded-md border border-brand-500/50 bg-brand-500/10 px-3 py-1.5 text-xs text-brand-200 hover:bg-brand-500/20"
        >
          {animando ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {animando ? 'Pausar' : pasoActual === -1 ? 'Reproducir llenado' : 'Continuar'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-500"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reiniciar
        </button>
        {pasoSub && (
          <span className="rounded-md bg-slate-950/40 px-3 py-1.5 text-xs text-slate-300">
            Paso <span className="text-slate-100">{pasoActual + 1}/19</span>:{' '}
            <span className="font-mono text-slate-100">
              {pasoSub.label}
              <sup>{pasoSub.cap}</sup>
            </span>{' '}
            <span className="text-slate-500">— acumulado {acumuladoAnim} e⁻</span>
          </span>
        )}
      </div>

      <div className="mt-4 border-t border-slate-800 pt-3">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs text-slate-400">
            Z = <span className="text-slate-200">{Z}</span>
          </label>
          <input
            type="range"
            min={1}
            max={118}
            value={Z}
            onChange={(e) => setZ(Math.max(1, Math.min(118, parseInt(e.target.value, 10) || 1)))}
            className="flex-1 min-w-[120px] accent-brand-500"
          />
          <input
            type="number"
            min={1}
            max={118}
            value={Z}
            onChange={(e) => setZ(Math.max(1, Math.min(118, parseInt(e.target.value, 10) || 1)))}
            className="w-16 rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-200"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {ELEMENTOS_PRESET.map((el) => (
            <button
              key={el.Z}
              type="button"
              onClick={() => {
                reset();
                setZ(el.Z);
              }}
              className={cn(
                'rounded-md border px-2 py-0.5 text-[11px] font-mono transition-colors',
                Z === el.Z && !isAnimMode
                  ? 'border-brand-500/60 bg-brand-500/15 text-brand-100'
                  : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-500',
              )}
            >
              {el.simbolo}
              <span className="ml-1 opacity-50">{el.Z}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 rounded-md bg-slate-950/40 p-3">
          <div className="text-[11px] uppercase tracking-wide text-slate-500">
            Configuración para Z = {Z}
          </div>
          <div className="mt-1 break-all font-mono text-sm text-slate-100 leading-relaxed">
            {config.map((c, i) => (
              <span key={i}>
                {c.label}
                <sup>{c.electrones}</sup>
                {i < config.length - 1 && <span className="text-slate-600">·</span>}
              </span>
            ))}
          </div>
          <div className="mt-1.5 text-[11px] text-slate-500">
            Suma: {config.reduce((a, c) => a + c.electrones, 0)} e⁻
          </div>
        </div>
      </div>
    </div>
  );
}

function Leyenda({ tipo, label }: { tipo: string; label: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5',
        COLOR_POR_TIPO[tipo],
      )}
    >
      <span className="font-bold">{tipo}</span>
      <span className="opacity-80">{label.replace(`${tipo} `, '')}</span>
    </span>
  );
}
