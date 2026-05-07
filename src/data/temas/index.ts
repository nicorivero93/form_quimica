import type { AnioId, AreaQuimicaId, Tema } from '@/types/tema';
import { configuracionElectronica } from './secundaria-4/configuracion-electronica';
import { estequiometria } from './secundaria-4/estequiometria';
import { gasesIdeales } from './secundaria-4/gases-ideales';
import { concentracion } from './secundaria-4/concentracion';
import { phPoh } from './secundaria-4/ph-poh';

export const TEMAS: Tema[] = [
  configuracionElectronica,
  estequiometria,
  gasesIdeales,
  concentracion,
  phPoh,
];

const slugs = new Set<string>();
for (const t of TEMAS) {
  if (slugs.has(t.slug)) {
    throw new Error(`Slug de tema duplicado: ${t.slug}`);
  }
  slugs.add(t.slug);
}

export function getTemaBySlug(slug: string): Tema | undefined {
  return TEMAS.find((t) => t.slug === slug);
}

export function getTemasByAnio(anioId: AnioId): Tema[] {
  return TEMAS.filter((t) => t.anios.includes(anioId));
}

export function getTemasByArea(area: AreaQuimicaId): Tema[] {
  return TEMAS.filter((t) => t.area === area);
}

export function searchTemas(query: string): Tema[] {
  const q = query.trim().toLowerCase();
  if (!q) return TEMAS;
  return TEMAS.filter(
    (t) =>
      t.titulo.toLowerCase().includes(q) ||
      t.resumen.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}
