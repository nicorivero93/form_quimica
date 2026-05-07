import type { Element } from '@/types/element';
import { useWikipediaSummary } from '@/hooks/useWikipediaImage';
import { bestWikipediaImage, wikipediaPageUrl } from '@/lib/wikipedia-api';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ProceduralPreview } from './ProceduralPreview';

interface Props {
  element: Element;
}

export function MaterialTab({ element }: Props) {
  const { data, isLoading, isError } = useWikipediaSummary(element.wikiSlug);
  const imageUrl = bestWikipediaImage(data);
  const pageUrl = wikipediaPageUrl(data);

  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <div>
        {isLoading && <LoadingSpinner className="h-72" label="Buscando en Wikipedia…" />}
        {!isLoading && imageUrl && (
          <figure className="group overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-xl shadow-black/50 transition hover:scale-[1.01]">
            <img
              src={imageUrl}
              alt={`${element.name} físico`}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="px-4 py-2 text-xs text-slate-400">
              Imagen de Wikipedia ·{' '}
              {pageUrl && (
                <a
                  href={pageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-500 hover:underline"
                >
                  Ver artículo completo
                </a>
              )}
              {' '}· CC BY-SA
            </figcaption>
          </figure>
        )}
        {!isLoading && (!imageUrl || isError) && (
          <div className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
              <ProceduralPreview element={element} className="aspect-[4/3] w-full" />
            </div>
            <p className="text-xs text-slate-500">
              No se encontró imagen en Wikipedia. Mostrando vista procedural según fase ({element.phase.toLowerCase()}).
            </p>
          </div>
        )}
      </div>

      <aside className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-100">Resumen</h3>
        <p className="text-sm leading-relaxed text-slate-300">{element.description}</p>
        {data?.extract && (
          <p className="border-l-2 border-slate-700 pl-3 text-xs leading-relaxed text-slate-400">
            {data.extract.slice(0, 320)}
            {data.extract.length > 320 ? '…' : ''}
          </p>
        )}
        <div className="grid grid-cols-2 gap-2 pt-2 text-sm">
          <div className="rounded-md border border-slate-800 bg-slate-900/50 p-2">
            <p className="text-[10px] uppercase text-slate-500">Fase</p>
            <p className="text-slate-100">{element.phase}</p>
          </div>
          <div className="rounded-md border border-slate-800 bg-slate-900/50 p-2">
            <p className="text-[10px] uppercase text-slate-500">Densidad</p>
            <p className="font-mono text-slate-100">
              {element.density != null ? `${element.density} g/cm³` : '—'}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
