import { useEffect, useRef, useState } from 'react';
import { usePubChemMolecule } from '@/hooks/usePubChemMolecule';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MoleculeViewerStyle } from '@/types/molecule';

interface Props {
  pubchemQuery: string;
  formula?: string;
  name?: string;
}

declare global {
  interface Window {
    $3Dmol?: any;
  }
}

async function ensure3Dmol(): Promise<any> {
  if (typeof window === 'undefined') throw new Error('SSR no soportado');
  if (window.$3Dmol) return window.$3Dmol;
  const mod = await import('3dmol');
  // 3dmol exporta como default o como propiedades del módulo según la versión
  const $3Dmol = (mod as any).default ?? mod;
  window.$3Dmol = $3Dmol;
  return $3Dmol;
}

export function MoleculeViewer({ pubchemQuery, formula, name }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const { data, isLoading, isError, error } = usePubChemMolecule(pubchemQuery);
  const [style, setStyle] = useState<MoleculeViewerStyle>('ballstick');
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    if (!data?.sdf || !containerRef.current) return;
    let cancelled = false;
    let viewer: any = null;

    (async () => {
      try {
        const $3Dmol = await ensure3Dmol();
        if (cancelled || !containerRef.current) return;
        // Limpieza preventiva
        containerRef.current.innerHTML = '';
        viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: '#020617',
          antialias: true,
        });
        viewer.addModel(data.sdf, 'sdf');
        applyStyle(viewer, style);
        viewer.zoomTo();
        viewer.zoom(0.95);
        if (spinning) viewer.spin('y', 0.6);
        viewer.render();
        viewerRef.current = viewer;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error al inicializar 3Dmol', e);
      }
    })();

    return () => {
      cancelled = true;
      try {
        viewer?.spin?.(false);
        viewer?.clear?.();
        viewer?.removeAllModels?.();
      } catch {
        /* noop */
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      viewerRef.current = null;
    };
  }, [data?.sdf]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cambio de estilo y spin sin re-crear el viewer
  useEffect(() => {
    if (!viewerRef.current) return;
    applyStyle(viewerRef.current, style);
    viewerRef.current.render();
  }, [style]);

  useEffect(() => {
    if (!viewerRef.current) return;
    if (spinning) viewerRef.current.spin('y', 0.6);
    else viewerRef.current.spin(false);
  }, [spinning]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950 sm:h-[600px]">
      <div ref={containerRef} className="absolute inset-0" />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70">
          <LoadingSpinner label="Cargando desde PubChem…" />
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="space-y-2">
            <p className="text-sm text-rose-400">No se pudo cargar la molécula.</p>
            <p className="text-xs text-slate-500">{(error as Error)?.message}</p>
          </div>
        </div>
      )}

      {/* Top-left: info */}
      <div className="pointer-events-none absolute left-3 top-3 max-w-[60%] rounded-md border border-slate-800/80 bg-slate-900/80 p-2 text-xs backdrop-blur">
        <div className="font-mono text-base font-bold text-slate-100">{formula ?? pubchemQuery}</div>
        {name && <div className="text-slate-400">{name}</div>}
        {data?.cid && (
          <a
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${data.cid}`}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto text-[10px] text-brand-500 hover:underline"
          >
            CID {data.cid} en PubChem
          </a>
        )}
      </div>

      {/* Top-right */}
      <div className="absolute right-3 top-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setSpinning((s) => !s)}
          aria-label={spinning ? 'Pausar' : 'Reanudar'}
        >
          {spinning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Bottom: style switcher */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-md border border-slate-700 bg-slate-900/80 p-1 backdrop-blur">
        {(['ballstick', 'stick', 'sphere'] as MoleculeViewerStyle[]).map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={cn(
              'rounded px-3 py-1 text-xs font-medium transition',
              style === s ? 'bg-brand-500 text-white' : 'text-slate-300 hover:bg-slate-800',
            )}
            aria-pressed={style === s}
          >
            {s === 'ballstick' ? 'Bolas+palos' : s === 'stick' ? 'Palos' : 'Esferas'}
          </button>
        ))}
      </div>
    </div>
  );
}

function applyStyle(viewer: any, style: MoleculeViewerStyle) {
  viewer.setStyle({}, {});
  if (style === 'stick') {
    viewer.setStyle({}, { stick: { radius: 0.18, colorscheme: 'Jmol' } });
  } else if (style === 'sphere') {
    viewer.setStyle({}, { sphere: { scale: 0.42, colorscheme: 'Jmol' } });
  } else {
    viewer.setStyle({}, {
      stick: { radius: 0.16, colorscheme: 'Jmol' },
      sphere: { scale: 0.28, colorscheme: 'Jmol' },
    });
  }
}
