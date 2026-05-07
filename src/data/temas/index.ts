import type { AnioId, AreaQuimicaId, Tema } from '@/types/tema';
import { configuracionElectronica } from './secundaria-4/configuracion-electronica';
import { modelosAtomicos } from './secundaria-4/modelos-atomicos';
import { enlaceIonico } from './secundaria-4/enlace-ionico';
import { enlaceCovalente } from './secundaria-4/enlace-covalente';
import { estequiometria } from './secundaria-4/estequiometria';
import { gasesIdeales } from './secundaria-4/gases-ideales';
import { concentracion } from './secundaria-4/concentracion';
import { phPoh } from './secundaria-4/ph-poh';
import { neutralizacion } from './secundaria-4/neutralizacion';
import { termoquimica } from './secundaria-5/termoquimica';
import { equilibrio } from './secundaria-5/equilibrio';
import { cinetica } from './secundaria-5/cinetica';
import { redox } from './secundaria-5/redox';
import { pilasElectroquimica } from './secundaria-5/pilas-electroquimica';
import { organicaBasica } from './secundaria-5/organica-basica';
import { alcoholesAldehidosCetonas } from './secundaria-5/alcoholes-aldehidos-cetonas';
import { acidosEsteresAminas } from './secundaria-5/acidos-esteres-aminas';
import { polimeros } from './secundaria-5/polimeros';

export const TEMAS: Tema[] = [
  // Secundaria 4°
  modelosAtomicos,
  configuracionElectronica,
  enlaceIonico,
  enlaceCovalente,
  estequiometria,
  gasesIdeales,
  concentracion,
  phPoh,
  neutralizacion,
  // Secundaria 5°
  termoquimica,
  equilibrio,
  cinetica,
  redox,
  pilasElectroquimica,
  organicaBasica,
  alcoholesAldehidosCetonas,
  acidosEsteresAminas,
  polimeros,
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
