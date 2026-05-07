import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { Reaction } from '@/types/reaction';
import { ELEMENTS_BY_SYMBOL } from '@/data/elements';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';
import { StructurePreview } from './StructurePreview';

interface Props {
  reaction: Reaction | null;
  noMatch: boolean;
  decomposition?: boolean;
}

export function ReactionResult({ reaction, noMatch, decomposition }: Props) {
  if (!reaction && !noMatch) {
    return (
      <div className="rounded-lg border border-dashed border-slate-700 bg-slate-900/30 p-6 text-center text-sm text-slate-500">
        {decomposition
          ? 'Elegí un compuesto a la izquierda para romperlo.'
          : (
            <>
              Agregá reactivos y tocá{' '}
              <strong className="text-slate-300">Fusionar</strong> para ver qué pasa.
            </>
          )}
      </div>
    );
  }

  if (noMatch) {
    return (
      <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-5 text-center">
        <p className="text-base font-semibold text-rose-300">
          {decomposition ? 'No se puede romper' : 'No reacciona'}
        </p>
        <p className="mt-1 text-xs text-rose-200/70">
          {decomposition
            ? 'Ese compuesto no es reversible en el catálogo.'
            : 'Esa combinación no forma un compuesto del catálogo. Probá otras proporciones o elementos.'}
        </p>
      </div>
    );
  }

  if (!reaction) return null;

  const product = reaction.products[0];
  const headerLabel = decomposition ? 'Compuesto roto' : 'Reacción descubierta';
  const arrow = decomposition ? '←' : '→';

  return (
    <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-5">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-wide text-emerald-400">
          {headerLabel}
        </span>
        <h3 className="text-2xl font-bold text-emerald-100">{product.formula}</h3>
        <p className="text-sm font-medium text-emerald-200/90">{product.name}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1 text-sm text-slate-300">
        {reaction.reactants.map((r, i) => (
          <span key={`${r.symbol}-${i}`} className="inline-flex items-baseline gap-0.5">
            {i > 0 && <span className="mx-1 text-slate-500">+</span>}
            {r.count > 1 && <span className="text-xs text-slate-400">{r.count}</span>}
            <span className="font-semibold">{r.symbol}</span>
          </span>
        ))}
        <span className="mx-2 text-emerald-400">{arrow}</span>
        <span className="font-semibold text-emerald-200">{product.formula}</span>
      </div>

      {decomposition && (
        <p className="mt-3 rounded-md bg-slate-900/60 p-2 text-xs text-slate-400">
          Al romper este compuesto se liberan{' '}
          {reaction.reactants.map((r, i) => (
            <span key={r.symbol}>
              {i > 0 && ', '}
              <span className="font-semibold text-slate-200">
                {r.count > 1 && <span className="text-slate-400">{r.count} </span>}
                {r.symbol}
              </span>
            </span>
          ))}
          .
        </p>
      )}

      {reaction.conditions && (
        <p className="mt-3 text-xs text-slate-400">
          <span className="text-slate-500">Condiciones:</span> {reaction.conditions}
          {reaction.energy && (
            <span
              className={cn(
                'ml-2 rounded-full px-2 py-0.5 text-[10px]',
                reaction.energy === 'exothermic'
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'bg-sky-500/20 text-sky-300',
              )}
            >
              {reaction.energy === 'exothermic' ? 'Exotérmica' : 'Endotérmica'}
            </span>
          )}
        </p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-slate-300">{reaction.description}</p>

      {product.structureId && (
        <div className="mt-4">
          <StructurePreview structureId={product.structureId} />
        </div>
      )}

      {product.elementSymbol && !product.structureId && (
        <ElementProductCard symbol={product.elementSymbol} />
      )}
    </div>
  );
}

function ElementProductCard({ symbol }: { symbol: string }) {
  const element = ELEMENTS_BY_SYMBOL[symbol];
  if (!element) return null;
  const cat = CATEGORIES[element.category];
  return (
    <Link
      to={`/element/${symbol}`}
      className="mt-4 flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-900/60 p-3 transition-colors hover:border-brand-500/50 hover:bg-slate-900"
    >
      <div
        className={cn(
          'flex h-16 w-16 flex-col items-center justify-center rounded-md border text-center',
          cat.borderClass,
          cat.bgClass,
        )}
      >
        <span className="text-[10px] text-slate-400">{element.n}</span>
        <span className={cn('text-2xl font-bold', cat.textClass)}>{element.symbol}</span>
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-100">{element.name}</p>
        <p className="text-xs text-slate-400">{cat.name} · Período {element.period}</p>
        <p className="text-[10px] text-slate-500">Z = {element.n} · Masa {element.mass}</p>
      </div>
      <ExternalLink className="h-4 w-4 text-slate-500" />
    </Link>
  );
}
