import { Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';
import type { BloqueTeoria } from '@/types/tema';
import { FormulaLatex } from '@/components/shared/FormulaLatex';
import { cn } from '@/lib/utils';

interface Props {
  bloque: BloqueTeoria;
}

export function BloqueTeoriaRender({ bloque }: Props) {
  switch (bloque.tipo) {
    case 'parrafo':
      return (
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          {renderInlineLatex(bloque.texto)}
        </p>
      );

    case 'latex':
      return (
        <div className={cn(bloque.display !== false && 'my-3 overflow-x-auto')}>
          <FormulaLatex latex={bloque.latex} display={bloque.display !== false} />
        </div>
      );

    case 'callout': {
      const variants = {
        tip: {
          icon: Lightbulb,
          border: 'border-amber-500/40',
          bg: 'bg-amber-500/10',
          text: 'text-amber-200',
          label: 'Tip',
        },
        cuidado: {
          icon: AlertTriangle,
          border: 'border-rose-500/40',
          bg: 'bg-rose-500/10',
          text: 'text-rose-200',
          label: 'Cuidado',
        },
        definicion: {
          icon: BookOpen,
          border: 'border-sky-500/40',
          bg: 'bg-sky-500/10',
          text: 'text-sky-200',
          label: 'Definición',
        },
      };
      const v = variants[bloque.variante];
      const Icon = v.icon;
      return (
        <aside className={cn('flex gap-3 rounded-lg border p-3', v.border, v.bg)}>
          <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', v.text)} />
          <div>
            <p className={cn('text-xs font-semibold uppercase tracking-wide', v.text)}>
              {bloque.titulo ?? v.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              {renderInlineLatex(bloque.texto)}
            </p>
          </div>
        </aside>
      );
    }

    case 'lista': {
      const Tag = bloque.ordenada ? 'ol' : 'ul';
      return (
        <Tag
          className={cn(
            'space-y-1 pl-5 text-sm text-slate-300 sm:text-base',
            bloque.ordenada ? 'list-decimal' : 'list-disc',
          )}
        >
          {bloque.items.map((item, i) => (
            <li key={i}>{renderInlineLatex(item)}</li>
          ))}
        </Tag>
      );
    }

    case 'tabla':
      return (
        <div className="overflow-x-auto rounded-lg border border-slate-700/60">
          <table className="w-full text-sm">
            <thead className="bg-slate-800/60 text-left text-xs uppercase tracking-wide text-slate-400">
              <tr>
                {bloque.encabezados.map((h, i) => (
                  <th key={i} className="px-3 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/60 text-slate-300">
              {bloque.filas.map((fila, i) => (
                <tr key={i}>
                  {fila.map((celda, j) => (
                    <td key={j} className="px-3 py-2">
                      {renderInlineLatex(celda)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function renderInlineLatex(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      const latex = part.slice(1, -1);
      return <FormulaLatex key={i} latex={latex} />;
    }
    return <span key={i}>{part}</span>;
  });
}
