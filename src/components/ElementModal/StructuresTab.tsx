import { lazy, Suspense, useEffect, useMemo } from 'react';
import type { Element } from '@/types/element';
import { STRUCTURES, type Structure, type AtomStructure } from '@/data/structures';
import { useUiStore } from '@/store/ui-store';
import { useCrystalStructure } from '@/hooks/useCrystalStructure';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { StructureSelector } from './StructureSelector';

const CrystalViewer = lazy(() =>
  import('@/components/viewers/CrystalViewer').then((m) => ({ default: m.CrystalViewer })),
);
const MoleculeViewer = lazy(() =>
  import('@/components/viewers/MoleculeViewer').then((m) => ({ default: m.MoleculeViewer })),
);
const AtomOnlyViewer = lazy(() =>
  import('@/components/viewers/AtomOnlyViewer').then((m) => ({ default: m.AtomOnlyViewer })),
);

interface Props {
  element: Element;
}

export function StructuresTab({ element }: Props) {
  const selectedId = useUiStore((s) => s.selectedStructureId);
  const selectStructure = useUiStore((s) => s.selectStructure);

  const structures = useMemo<Structure[]>(() => {
    const list: Structure[] = element.structures
      .map((id) => STRUCTURES[id])
      .filter((s): s is Structure => !!s);
    if (list.length === 0) {
      // Fallback: átomo aislado
      const atomic: AtomStructure = {
        id: `atom-${element.symbol}`,
        type: 'atom',
        symbol: element.symbol,
        formula: element.symbol,
        name: `${element.name} (átomo aislado)`,
        label: 'Átomo aislado',
        badge: 'Átomo',
      };
      list.push(atomic);
    }
    return list;
  }, [element]);

  const activeStructure: Structure = useMemo(() => {
    return structures.find((s) => s.id === selectedId) ?? structures[0];
  }, [structures, selectedId]);

  // Si el elemento cambió, resetear selección
  useEffect(() => {
    if (!structures.find((s) => s.id === selectedId)) {
      selectStructure(structures[0].id);
    }
  }, [structures, selectedId, selectStructure]);

  return (
    <div className="space-y-4">
      <StructureSelector
        structures={structures}
        activeId={activeStructure.id}
        onSelect={selectStructure}
      />
      <Suspense fallback={<LoadingSpinner className="h-[500px]" label="Cargando visor 3D…" />}>
        {activeStructure.type === 'crystal' && (
          <CrystalContent jsonFile={activeStructure.jsonFile} />
        )}
        {activeStructure.type === 'molecule' && (
          <MoleculeViewer
            key={activeStructure.id}
            pubchemQuery={activeStructure.pubchemQuery}
            formula={activeStructure.formula}
            name={activeStructure.name}
          />
        )}
        {activeStructure.type === 'atom' && (
          <AtomOnlyViewer symbol={activeStructure.symbol} />
        )}
      </Suspense>
      <p className="text-[11px] text-slate-500">
        Datos cristalográficos:{' '}
        <a
          href="https://www.crystallography.net/cod/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-500 hover:underline"
        >
          Crystallography Open Database
        </a>{' '}
        (CC0). Moléculas:{' '}
        <a
          href="https://pubchem.ncbi.nlm.nih.gov/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-500 hover:underline"
        >
          PubChem
        </a>
        .
      </p>
    </div>
  );
}

function CrystalContent({ jsonFile }: { jsonFile: string }) {
  const { data, isLoading, isError, error } = useCrystalStructure(jsonFile);
  if (isLoading) return <LoadingSpinner className="h-[500px]" label="Cargando estructura cristalina…" />;
  if (isError || !data) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/5 p-6 text-center">
        <div className="space-y-2">
          <p className="text-sm text-rose-300">No se pudo cargar el cristal.</p>
          <p className="text-xs text-slate-500">{(error as Error)?.message ?? 'JSON no disponible'}</p>
          <p className="text-xs text-slate-500">
            Corré <code className="rounded bg-slate-800 px-1 font-mono">npm run build:crystals</code> para generar los datos.
          </p>
        </div>
      </div>
    );
  }
  return <CrystalViewer crystal={data} />;
}
