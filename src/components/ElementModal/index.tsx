import { Suspense, lazy } from 'react';
import { Atom, FlaskConical, Table } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { CATEGORIES } from '@/data/categories';
import { ELEMENTS_BY_SYMBOL } from '@/data/elements';
import { useUiStore } from '@/store/ui-store';
import { cn } from '@/lib/utils';
import { DataTab } from './DataTab';
import { MaterialTab } from './MaterialTab';

const StructuresTab = lazy(() =>
  import('./StructuresTab').then((m) => ({ default: m.StructuresTab })),
);

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ElementModal({ open, onClose }: Props) {
  const symbol = useUiStore((s) => s.selectedElementSymbol);
  const element = symbol ? ELEMENTS_BY_SYMBOL[symbol] : null;

  if (!element) {
    return (
      <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
        <DialogContent className="max-w-md p-6">
          <p className="text-slate-400">Elemento no encontrado.</p>
        </DialogContent>
      </Dialog>
    );
  }

  const cat = CATEGORIES[element.category];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div
              className={cn(
                'flex h-16 w-16 flex-col items-center justify-center rounded-lg border text-center sm:h-20 sm:w-20',
                cat.borderClass,
                cat.bgClass,
              )}
            >
              <span className="text-[10px] text-slate-400">{element.n}</span>
              <span className={cn('text-2xl font-bold sm:text-3xl', cat.textClass)}>
                {element.symbol}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <DialogTitle className="truncate">{element.name}</DialogTitle>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span>{cat.name}</span>
                <span>·</span>
                <span>Período {element.period}</span>
                <span>·</span>
                <span>Grupo {element.group}</span>
                <span>·</span>
                <span>{element.phase}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 pb-6">
          <Tabs defaultValue="material" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
              <TabsTrigger value="material" className="gap-1.5">
                <FlaskConical className="h-3.5 w-3.5" />
                Material físico
              </TabsTrigger>
              <TabsTrigger value="structures" className="gap-1.5">
                <Atom className="h-3.5 w-3.5" />
                Estructuras 3D
              </TabsTrigger>
              <TabsTrigger value="data" className="gap-1.5">
                <Table className="h-3.5 w-3.5" />
                Datos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="material">
              <MaterialTab element={element} />
            </TabsContent>

            <TabsContent value="structures">
              <Suspense fallback={<LoadingSpinner className="h-96" label="Cargando visor 3D…" />}>
                <StructuresTab element={element} />
              </Suspense>
            </TabsContent>

            <TabsContent value="data">
              <DataTab element={element} />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
