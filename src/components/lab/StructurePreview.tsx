import { Suspense, lazy } from 'react';
import { STRUCTURES } from '@/data/structures';
import { useCrystalStructure } from '@/hooks/useCrystalStructure';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

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
  structureId: string;
  className?: string;
}

export function StructurePreview({ structureId, className }: Props) {
  const structure = STRUCTURES[structureId];

  if (!structure) {
    return (
      <div className="flex h-72 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-center text-xs text-amber-300">
        Estructura "{structureId}" no encontrada en el catálogo.
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={<LoadingSpinner className="h-72" label="Cargando visor 3D…" />}>
        {structure.type === 'crystal' && <CrystalContent jsonFile={structure.jsonFile} />}
        {structure.type === 'molecule' && (
          <MoleculeViewer
            key={structure.id}
            pubchemQuery={structure.pubchemQuery}
            formula={structure.formula}
            name={structure.name}
          />
        )}
        {structure.type === 'atom' && <AtomOnlyViewer symbol={structure.symbol} />}
      </Suspense>
    </div>
  );
}

function CrystalContent({ jsonFile }: { jsonFile: string }) {
  const { data, isLoading, isError } = useCrystalStructure(jsonFile);
  if (isLoading) return <LoadingSpinner className="h-72" label="Cargando estructura cristalina…" />;
  if (isError || !data) {
    return (
      <div className="flex h-72 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/5 p-4 text-center text-xs text-rose-300">
        No se pudo cargar el cristal.
      </div>
    );
  }
  return <CrystalViewer crystal={data} />;
}
