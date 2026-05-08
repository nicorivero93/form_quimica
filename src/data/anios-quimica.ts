import type { Anio, AnioId } from '@/types/tema';

export const ANIOS: Anio[] = [
  {
    id: 'secundaria-1',
    etapa: 'secundaria',
    numero: 1,
    nombre: '1er año (materia y mezclas)',
    nombreCorto: '1°',
    icono: '🌱',
    color: 'lime',
    orden: 1,
  },
  {
    id: 'secundaria-2',
    etapa: 'secundaria',
    numero: 2,
    nombre: '2do año (átomos y reacciones)',
    nombreCorto: '2°',
    icono: '🔬',
    color: 'amber',
    orden: 2,
  },
  {
    id: 'secundaria-3',
    etapa: 'secundaria',
    numero: 3,
    nombre: '3er año (nomenclatura inorgánica)',
    nombreCorto: '3°',
    icono: '🧂',
    color: 'rose',
    orden: 3,
  },
  {
    id: 'secundaria-4',
    etapa: 'secundaria',
    numero: 4,
    nombre: '4to año (química básica)',
    nombreCorto: '4°',
    icono: '🧪',
    color: 'emerald',
    orden: 4,
  },
  {
    id: 'secundaria-5',
    etapa: 'secundaria',
    numero: 5,
    nombre: '5to año (química avanzada)',
    nombreCorto: '5°',
    icono: '⚗️',
    color: 'sky',
    orden: 5,
  },
  {
    id: 'cbc-quimica',
    etapa: 'cbc',
    numero: 1,
    nombre: 'CBC / Química universitaria',
    nombreCorto: 'CBC',
    icono: '🎓',
    color: 'fuchsia',
    orden: 6,
  },
];

export const ANIOS_BY_ID: Record<AnioId, Anio> = Object.fromEntries(
  ANIOS.map((a) => [a.id, a]),
) as Record<AnioId, Anio>;
