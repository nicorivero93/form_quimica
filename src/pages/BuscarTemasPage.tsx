import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { TEMAS } from '@/data/temas';
import { TemaCard } from '@/components/aprender/TemaCard';

export function BuscarTemasPage() {
  const [query, setQuery] = useState('');

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TEMAS;
    const tokens = q.split(/\s+/).filter(Boolean);
    return TEMAS.filter((t) => {
      const haystack = (
        t.titulo +
        ' ' +
        t.resumen +
        ' ' +
        t.tags.join(' ') +
        ' ' +
        (t.formulasClave?.map((f) => f.nombre).join(' ') ?? '')
      ).toLowerCase();
      return tokens.every((tok) => haystack.includes(tok));
    });
  }, [query]);

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-5 px-3 py-6 sm:px-6 sm:py-10">
      <header className="flex flex-col gap-3">
        <Link
          to="/aprender"
          className="inline-flex w-fit items-center gap-1 text-xs text-slate-400 transition-colors hover:text-brand-300"
        >
          <ArrowLeft className="h-3 w-3" />
          Aprender
        </Link>
        <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">Buscar temas</h1>
      </header>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          placeholder="Probá: pH, gases, mol, redox, alcanos…"
          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-3 pl-10 pr-4 text-base text-slate-100 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none"
        />
      </div>

      <p className="text-xs text-slate-500">
        {query ? `${resultados.length} resultado${resultados.length === 1 ? '' : 's'}` : `${TEMAS.length} temas en total`}
      </p>

      {resultados.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-700 bg-slate-900/30 p-6 text-center text-sm text-slate-500">
          Sin resultados. Probá con otra palabra (ej: "estequiometría", "pV nRT", "balanceo redox").
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {resultados.map((tema) => (
            <li key={tema.slug}>
              <TemaCard tema={tema} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
