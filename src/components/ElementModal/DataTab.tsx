import type { Element } from '@/types/element';
import { CATEGORIES } from '@/data/categories';
import { formatNumber, formatTemp, expandElectronConfig } from '@/lib/utils';

interface Props {
  element: Element;
}

export function DataTab({ element }: Props) {
  const cat = CATEGORIES[element.category];
  const fullConfig = expandElectronConfig(element.config);
  const isAbbreviated = fullConfig !== element.config;
  const rows: { label: string; value: string }[] = [
    { label: 'Número atómico', value: element.n.toString() },
    { label: 'Símbolo', value: element.symbol },
    { label: 'Nombre', value: element.name },
    { label: 'Nombre (inglés)', value: element.nameEn },
    { label: 'Masa atómica', value: `${formatNumber(element.mass, 4)} u` },
    { label: 'Categoría', value: cat.name },
    { label: 'Período', value: element.period.toString() },
    { label: 'Grupo', value: element.group.toString() },
    { label: 'Fase a 25 °C', value: element.phase },
    {
      label: 'Electronegatividad (Pauling)',
      value: element.electronegativity == null ? '—' : formatNumber(element.electronegativity, 2),
    },
    { label: 'Punto de fusión', value: formatTemp(element.meltingPoint) },
    { label: 'Punto de ebullición', value: formatTemp(element.boilingPoint) },
    {
      label: 'Densidad',
      value:
        element.density == null
          ? '—'
          : `${formatNumber(element.density, 4)} g/cm³`,
    },
    { label: 'Estados de oxidación', value: element.oxidationStates },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {rows.slice(0, Math.ceil(rows.length / 2)).map((row) => (
            <DataRow key={row.label} {...row} />
          ))}
        </div>
        <div className="space-y-2">
          {rows.slice(Math.ceil(rows.length / 2)).map((row) => (
            <DataRow key={row.label} {...row} />
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
        <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">
          Configuración electrónica
        </div>
        <div className="break-words font-mono text-sm leading-relaxed text-slate-100">
          {fullConfig}
        </div>
        {isAbbreviated && (
          <div className="mt-2 flex flex-wrap items-baseline gap-2 border-t border-slate-800 pt-2 text-xs">
            <span className="uppercase tracking-wide text-slate-500">Abreviada</span>
            <span className="font-mono text-slate-400">{element.config}</span>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm leading-relaxed text-slate-300">
        {element.description}
      </div>
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-slate-800/50 pb-2">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="text-right font-mono text-sm text-slate-100">{value}</dd>
    </div>
  );
}
