import { useEffect, useRef, useState } from 'react';
import { FlaskConical, Sparkles, Trash2 } from 'lucide-react';
import { MAX_REACTANTS, useLabStore } from '@/store/lab-store';
import { ModeToggle } from '@/components/lab/ModeToggle';
import { MiniPeriodicTable } from '@/components/lab/MiniPeriodicTable';
import { ReactantSlots } from '@/components/lab/ReactantSlots';
import { ReactionResult } from '@/components/lab/ReactionResult';
import { DecomposablePicker } from '@/components/lab/DecomposablePicker';
import { FusionAnimation } from '@/components/lab/FusionAnimation';
import { DiscoveryList } from '@/components/lab/DiscoveryList';
import { DiscoveryToast } from '@/components/lab/DiscoveryToast';
import { REACTIONS_CHEMICAL } from '@/data/reactions-chemical';
import { REACTIONS_NUCLEAR } from '@/data/reactions-nuclear';

const ANIMATION_MS = 2200;

export function LabPage() {
  const mode = useLabStore((s) => s.mode);
  const reactants = useLabStore((s) => s.reactants);
  const lastResult = useLabStore((s) => s.lastResult);
  const noMatchAttempt = useLabStore((s) => s.noMatchAttempt);
  const discoveries = useLabStore((s) => s.discoveries);
  const isAnimating = useLabStore((s) => s.isAnimating);
  const setMode = useLabStore((s) => s.setMode);
  const addReactant = useLabStore((s) => s.addReactant);
  const removeReactant = useLabStore((s) => s.removeReactant);
  const clearReactants = useLabStore((s) => s.clearReactants);
  const react = useLabStore((s) => s.react);
  const decompose = useLabStore((s) => s.decompose);
  const setAnimating = useLabStore((s) => s.setAnimating);

  const isDecomp = mode === 'decomposition';
  const canReact = !isDecomp && reactants.length > 0;
  const actionLabel = isDecomp ? 'Romper' : 'Fusionar';

  const knownIdsRef = useRef<Set<string>>(new Set(Object.keys(discoveries)));
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    for (const id of Object.keys(discoveries)) {
      if (!knownIdsRef.current.has(id)) {
        knownIdsRef.current.add(id);
        const reaction =
          [...REACTIONS_CHEMICAL, ...REACTIONS_NUCLEAR].find((r) => r.id === id);
        if (reaction) {
          const product = reaction.products[0];
          setToast(`${product.formula} — ${product.name}`);
        }
      }
    }
  }, [discoveries]);

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-5 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex items-start gap-3">
        <FlaskConical className="mt-1 h-7 w-7 text-brand-400" />
        <div>
          <h1 className="bg-gradient-to-br from-slate-100 via-brand-300 to-slate-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl">
            Laboratorio
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-400">
            Combiná elementos para descubrir compuestos reales, fusioná núcleos como en una estrella, o rompé compuestos en sus partes.
          </p>
        </div>
      </header>

      <ModeToggle mode={mode} onChange={setMode} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr]">
        <section className="flex flex-col gap-3">
          {isDecomp ? (
            <DecomposablePicker onPick={decompose} discoveries={discoveries} />
          ) : (
            <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-3">
              <p className="mb-2 text-xs font-semibold text-slate-400">
                Tocá los elementos para agregarlos a la mezcla
              </p>
              <MiniPeriodicTable onPick={addReactant} />
            </div>
          )}

          {!isDecomp && (
            <ReactantSlots
              reactants={reactants}
              onRemove={removeReactant}
              max={MAX_REACTANTS}
            />
          )}

          {!isDecomp && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={react}
                disabled={!canReact}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
              >
                <Sparkles className="h-4 w-4" />
                {actionLabel}
              </button>
              <button
                type="button"
                onClick={clearReactants}
                disabled={reactants.length === 0}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800/40 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 className="h-4 w-4" />
                Limpiar
              </button>
            </div>
          )}
        </section>

        <section>
          {isAnimating && lastResult ? (
            <FusionAnimation
              reactants={lastResult.reactants}
              productLabel={lastResult.products[0].formula}
              durationMs={ANIMATION_MS}
              onDone={() => setAnimating(false)}
            />
          ) : (
            <ReactionResult
              reaction={lastResult}
              noMatch={noMatchAttempt}
              decomposition={isDecomp}
            />
          )}
        </section>
      </div>

      <DiscoveryList discoveries={discoveries} />

      <DiscoveryToast message={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
