import { Link, useLocation } from 'react-router-dom';
import { FlaskConical, TableProperties } from 'lucide-react';
import { cn } from '@/lib/utils';

const TABS = [
  { to: '/', label: 'Tabla periódica', icon: TableProperties, match: (p: string) => p === '/' || p.startsWith('/element') },
  { to: '/lab', label: 'Laboratorio', icon: FlaskConical, match: (p: string) => p.startsWith('/lab') },
];

export function AppNav() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-2 px-3 py-2 sm:px-6">
        {TABS.map((tab) => {
          const active = tab.match(pathname);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-brand-500/20 text-brand-100 ring-1 ring-brand-400/40'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200',
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
