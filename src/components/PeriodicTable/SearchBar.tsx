import { Search, X } from 'lucide-react';
import { useUiStore } from '@/store/ui-store';
import { cn } from '@/lib/utils';

export function SearchBar({ className }: { className?: string }) {
  const searchQuery = useUiStore((s) => s.searchQuery);
  const setSearch = useUiStore((s) => s.setSearch);

  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscá por símbolo, nombre o número (ej: Au, oro, 79)"
        className="w-full rounded-lg border border-slate-700 bg-slate-900/80 py-2 pl-10 pr-10 text-base text-slate-100 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        aria-label="Buscar elemento"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearch('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
          aria-label="Limpiar búsqueda"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
