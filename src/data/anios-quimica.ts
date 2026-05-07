import type { Anio, AnioId } from '@/types/tema';

export const ANIOS: Anio[] = [
  {
    id: 'secundaria-4',
    etapa: 'secundaria',
    numero: 4,
    nombre: '4to año (química básica)',
    nombreCorto: '4°',
    icono: '🧪',
    color: 'emerald',
    orden: 1,
  },
  {
    id: 'secundaria-5',
    etapa: 'secundaria',
    numero: 5,
    nombre: '5to año (química avanzada)',
    nombreCorto: '5°',
    icono: '⚗️',
    color: 'sky',
    orden: 2,
  },
  {
    id: 'cbc-quimica',
    etapa: 'cbc',
    numero: 1,
    nombre: 'CBC / Química universitaria',
    nombreCorto: 'CBC',
    icono: '🎓',
    color: 'fuchsia',
    orden: 3,
  },
];

export const ANIOS_BY_ID: Record<AnioId, Anio> = Object.fromEntries(
  ANIOS.map((a) => [a.id, a]),
) as Record<AnioId, Anio>;
