import type { AreaQuimica, AreaQuimicaId } from '@/types/tema';

export const AREAS: AreaQuimica[] = [
  {
    id: 'estructura-enlace',
    nombre: 'Estructura atómica y enlace',
    descripcion: 'Modelos atómicos, configuración electrónica, enlace iónico, covalente y metálico.',
    icono: '⚛️',
    color: 'sky',
    orden: 1,
  },
  {
    id: 'tabla-periodica',
    nombre: 'Tabla periódica',
    descripcion: 'Grupos, períodos, propiedades periódicas (radio, electronegatividad, energía de ionización).',
    icono: '📊',
    color: 'fuchsia',
    orden: 2,
  },
  {
    id: 'estequiometria',
    nombre: 'Estequiometría y nomenclatura',
    descripcion: 'Mol, masa molar, balanceo de ecuaciones, relaciones molares, nomenclatura IUPAC.',
    icono: '⚖️',
    color: 'amber',
    orden: 3,
  },
  {
    id: 'gases',
    nombre: 'Estado gaseoso',
    descripcion: 'Ley de los gases ideales (PV=nRT), Boyle, Charles, Gay-Lussac, mezclas.',
    icono: '💨',
    color: 'cyan',
    orden: 4,
  },
  {
    id: 'soluciones',
    nombre: 'Soluciones y concentración',
    descripcion: 'Solubilidad, molaridad, %m/v, %m/m, dilución, propiedades coligativas.',
    icono: '🧪',
    color: 'emerald',
    orden: 5,
  },
  {
    id: 'termoquimica',
    nombre: 'Termoquímica',
    descripcion: 'Calor de reacción, entalpía, exotérmico vs endotérmico, ley de Hess.',
    icono: '🔥',
    color: 'orange',
    orden: 6,
  },
  {
    id: 'cinetica-equilibrio',
    nombre: 'Cinética y equilibrio',
    descripcion: 'Velocidad de reacción, factores, principio de Le Chatelier, constantes de equilibrio.',
    icono: '🔄',
    color: 'violet',
    orden: 7,
  },
  {
    id: 'acido-base',
    nombre: 'Ácidos y bases',
    descripcion: 'Teorías (Arrhenius, Brønsted-Lowry), pH, pOH, neutralización, indicadores.',
    icono: '💧',
    color: 'rose',
    orden: 8,
  },
  {
    id: 'redox',
    nombre: 'Reacciones redox',
    descripcion: 'Números de oxidación, agente oxidante y reductor, balanceo redox, electroquímica básica.',
    icono: '⚡',
    color: 'yellow',
    orden: 9,
  },
  {
    id: 'organica',
    nombre: 'Química orgánica',
    descripcion: 'Hidrocarburos (alcanos, alquenos, alquinos), grupos funcionales, isomería.',
    icono: '🧬',
    color: 'lime',
    orden: 10,
  },
];

export const AREAS_BY_ID: Record<AreaQuimicaId, AreaQuimica> = Object.fromEntries(
  AREAS.map((a) => [a.id, a]),
) as Record<AreaQuimicaId, AreaQuimica>;
