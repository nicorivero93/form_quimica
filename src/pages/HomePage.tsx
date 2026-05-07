import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PeriodicTable } from '@/components/PeriodicTable';
import { SearchBar } from '@/components/PeriodicTable/SearchBar';
import { CategoryLegend } from '@/components/PeriodicTable/CategoryLegend';
import { ElementModal } from '@/components/ElementModal';
import { useUiStore } from '@/store/ui-store';

export function HomePage() {
  const params = useParams<{ symbol?: string; id?: string }>();
  const navigate = useNavigate();
  const selectedSymbol = useUiStore((s) => s.selectedElementSymbol);
  const selectElement = useUiStore((s) => s.selectElement);
  const selectStructure = useUiStore((s) => s.selectStructure);

  useEffect(() => {
    if (params.symbol && params.symbol !== selectedSymbol) {
      selectElement(params.symbol);
    }
    if (params.id) {
      selectStructure(params.id);
    }
  }, [params.symbol, params.id, selectedSymbol, selectElement, selectStructure]);

  const closeModal = () => {
    selectElement(null);
    navigate('/');
  };

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex flex-col items-start gap-3 text-balance">
        <h1 className="bg-gradient-to-br from-slate-100 via-brand-300 to-slate-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl">
          Tabla Periódica 3D
        </h1>
        <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
          Hacé click en cualquier elemento para ver su estructura cristalina real, sus alótropos y minerales en 3D.
          Datos de bases científicas abiertas: COD, PubChem, Wikipedia.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <SearchBar />
        <CategoryLegend />
      </div>

      <PeriodicTable />

      <ElementModal open={selectedSymbol !== null} onClose={closeModal} />
    </div>
  );
}
