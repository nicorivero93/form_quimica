import type { AnioId, AreaQuimicaId, Tema } from '@/types/tema';
// Secundaria 1°
import { queEsLaMateria } from './secundaria-1/que-es-la-materia';
import { estadosMateria } from './secundaria-1/estados-materia';
import { metodosSeparacion } from './secundaria-1/metodos-separacion';
import { propiedadesMateria } from './secundaria-1/propiedades-materia';
// Secundaria 2°
import { elAtomo } from './secundaria-2/el-atomo';
import { elementosCompuestos } from './secundaria-2/elementos-compuestos';
import { simbolosFormulas } from './secundaria-2/simbolos-formulas';
import { reaccionesQuimicasIntro } from './secundaria-2/reacciones-quimicas-intro';
// Secundaria 3°
import { tablaPeriodicaOrganizacion } from './secundaria-3/tabla-periodica-organizacion';
import { ionesCompuestosIonicos } from './secundaria-3/iones-compuestos-ionicos';
import { nomenclaturaOxidos } from './secundaria-3/nomenclatura-oxidos';
import { nomenclaturaHidroxidosAcidos } from './secundaria-3/nomenclatura-hidroxidos-acidos';
import { balanceoEcuaciones } from './secundaria-3/balanceo-ecuaciones';
// Secundaria 4°
import { configuracionElectronica } from './secundaria-4/configuracion-electronica';
import { modelosAtomicos } from './secundaria-4/modelos-atomicos';
import { enlaceIonico } from './secundaria-4/enlace-ionico';
import { enlaceCovalente } from './secundaria-4/enlace-covalente';
import { estequiometria } from './secundaria-4/estequiometria';
import { gasesIdeales } from './secundaria-4/gases-ideales';
import { concentracion } from './secundaria-4/concentracion';
import { phPoh } from './secundaria-4/ph-poh';
import { neutralizacion } from './secundaria-4/neutralizacion';
// Secundaria 5°
import { termoquimica } from './secundaria-5/termoquimica';
import { equilibrio } from './secundaria-5/equilibrio';
import { cinetica } from './secundaria-5/cinetica';
import { redox } from './secundaria-5/redox';
import { pilasElectroquimica } from './secundaria-5/pilas-electroquimica';
import { organicaBasica } from './secundaria-5/organica-basica';
import { alcoholesAldehidosCetonas } from './secundaria-5/alcoholes-aldehidos-cetonas';
import { acidosEsteresAminas } from './secundaria-5/acidos-esteres-aminas';
import { polimeros } from './secundaria-5/polimeros';
// Secundaria 6° (técnica / orientación)
import { procesosIndustriales } from './secundaria-6/procesos-industriales';
import { mecanismosOrganica } from './secundaria-6/mecanismos-organica';
import { isomeriaAvanzada } from './secundaria-6/isomeria-avanzada';
import { biomoleculas } from './secundaria-6/biomoleculas';
import { corrosionProteccion } from './secundaria-6/corrosion-proteccion';
// CBC
import { equilibrioIonico } from './cbc-quimica/equilibrio-ionico';
import { solucionesBuffer } from './cbc-quimica/soluciones-buffer';
import { cineticaAvanzada } from './cbc-quimica/cinetica-avanzada';
import { entropiaEnergiaLibre } from './cbc-quimica/entropia-energia-libre';
import { nernstElectroquimica } from './cbc-quimica/nernst-electroquimica';

export const TEMAS: Tema[] = [
  // Secundaria 1°
  queEsLaMateria,
  estadosMateria,
  metodosSeparacion,
  propiedadesMateria,
  // Secundaria 2°
  elAtomo,
  elementosCompuestos,
  simbolosFormulas,
  reaccionesQuimicasIntro,
  // Secundaria 3°
  tablaPeriodicaOrganizacion,
  ionesCompuestosIonicos,
  nomenclaturaOxidos,
  nomenclaturaHidroxidosAcidos,
  balanceoEcuaciones,
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
  // Secundaria 6° (técnica / orientación)
  procesosIndustriales,
  mecanismosOrganica,
  isomeriaAvanzada,
  biomoleculas,
  corrosionProteccion,
  // CBC / Universitario
  equilibrioIonico,
  solucionesBuffer,
  cineticaAvanzada,
  entropiaEnergiaLibre,
  nernstElectroquimica,
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
