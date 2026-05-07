import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number | null | undefined, digits = 3): string {
  if (n == null || Number.isNaN(n)) return '—';
  return n.toLocaleString('es-AR', { maximumFractionDigits: digits });
}

export function formatTemp(celsius: number | null | undefined): string {
  if (celsius == null) return '—';
  return `${celsius.toLocaleString('es-AR', { maximumFractionDigits: 1 })} °C`;
}

const NOBLE_GAS_CONFIGS: Record<string, string> = {
  He: '1s²',
  Ne: '1s² 2s² 2p⁶',
  Ar: '1s² 2s² 2p⁶ 3s² 3p⁶',
  Kr: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶',
  Xe: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶',
  Rn: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
};

/**
 * Expande la notación abreviada `[Xe] 4f¹⁴ 5d¹⁰ 6s¹` a la configuración completa
 * `1s² 2s² 2p⁶ ... 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹`. Conserva las excepciones del orden Aufbau
 * (Cr, Cu, Ag, Au, Pd, Pt, etc.) porque sólo reemplaza el segmento `[GasNoble]`.
 */
export function expandElectronConfig(config: string): string {
  const match = config.match(/^\[(\w+)\]\s*(.*)$/);
  if (!match) return config;
  const [, gasNoble, rest] = match;
  const expanded = NOBLE_GAS_CONFIGS[gasNoble];
  if (!expanded) return config;
  return rest ? `${expanded} ${rest}` : expanded;
}
