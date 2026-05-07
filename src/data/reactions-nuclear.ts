import type { Reaction } from '@/types/reaction';

/**
 * Fusiones nucleares estilizadas para uso didáctico.
 * Usamos masa simplificada (sin neutrones explícitos, sin balance de carga
 * leptónica). El objetivo es que el usuario sienta cómo "se construyen" los
 * elementos pesados a partir de los livianos.
 */
export const REACTIONS_NUCLEAR: Reaction[] = [
  {
    id: 'pp-fusion',
    type: 'nuclear',
    reactants: [{ symbol: 'H', count: 4 }],
    products: [
      {
        formula: 'He',
        name: 'Helio',
        count: 1,
        elementSymbol: 'He',
      },
    ],
    conditions: 'Cadena pp (15 millones °C)',
    energy: 'exothermic',
    description: 'La reacción que enciende al Sol. Cuatro protones se fusionan paso a paso para formar helio-4, liberando la energía que ilumina el sistema solar. Demora millones de años por átomo.',
    discoveryHint: 'Cuatro veces el más liviano del universo.',
  },
  {
    id: 'dt-fusion',
    type: 'nuclear',
    reactants: [{ symbol: 'H', count: 2 }],
    products: [
      {
        formula: 'He',
        name: 'Helio',
        count: 1,
        elementSymbol: 'He',
      },
    ],
    conditions: 'Reactor de fusión (100 millones °C)',
    energy: 'exothermic',
    description: 'Deuterio + tritio → helio + neutrón. La reacción que persigue ITER y los reactores tokamak. Promete energía limpia casi ilimitada si lográramos contenerla establemente.',
    discoveryHint: 'Dos hidrógenos pesados (los que prueban en los tokamaks).',
  },
  {
    id: 'triple-alpha',
    type: 'nuclear',
    reactants: [{ symbol: 'He', count: 3 }],
    products: [
      {
        formula: 'C',
        name: 'Carbono',
        count: 1,
        elementSymbol: 'C',
      },
    ],
    conditions: 'Núcleo de gigante roja (100 millones °C)',
    energy: 'exothermic',
    description: 'El proceso triple-alfa: tres núcleos de helio chocan casi simultáneamente para formar carbono. Es como surgió todo el carbono del universo, incluido el de tu cuerpo.',
    discoveryHint: 'Tres veces el gas de los globos.',
  },
  {
    id: 'alpha-c',
    type: 'nuclear',
    reactants: [
      { symbol: 'C', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'O',
        name: 'Oxígeno',
        count: 1,
        elementSymbol: 'O',
      },
    ],
    conditions: 'Combustión de helio en estrellas',
    energy: 'exothermic',
    description: 'El carbono captura un alfa y se convierte en oxígeno. Después del triple-alfa, esta es la siguiente etapa estelar. Por eso C y O son los elementos más abundantes después de H y He.',
    discoveryHint: 'La base de la vida + un alfa.',
  },
  {
    id: 'alpha-o',
    type: 'nuclear',
    reactants: [
      { symbol: 'O', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'Ne',
        name: 'Neón',
        count: 1,
        elementSymbol: 'Ne',
      },
    ],
    conditions: 'Estrellas masivas',
    energy: 'exothermic',
    description: 'Captura alfa sobre oxígeno. Sigue construyendo elementos cada vez más pesados durante la vida de una estrella masiva.',
    discoveryHint: 'El que respirás + un alfa.',
  },
  {
    id: 'alpha-ne',
    type: 'nuclear',
    reactants: [
      { symbol: 'Ne', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'Mg',
        name: 'Magnesio',
        count: 1,
        elementSymbol: 'Mg',
      },
    ],
    conditions: 'Estrellas masivas',
    energy: 'exothermic',
    description: 'Neón captura otro alfa y se convierte en magnesio. La cadena alfa sigue avanzando: Ne → Mg → Si → S → Ar → Ca → Ti.',
    discoveryHint: 'El de los carteles luminosos + un alfa.',
  },
  {
    id: 'alpha-mg',
    type: 'nuclear',
    reactants: [
      { symbol: 'Mg', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'Si',
        name: 'Silicio',
        count: 1,
        elementSymbol: 'Si',
      },
    ],
    conditions: 'Estrellas masivas',
    energy: 'exothermic',
    description: 'Magnesio + alfa → silicio. La base de tus chips electrónicos se cocinó así en una estrella vieja.',
    discoveryHint: 'El de las llantas livianas + un alfa.',
  },
  {
    id: 'alpha-si',
    type: 'nuclear',
    reactants: [
      { symbol: 'Si', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'S',
        name: 'Azufre',
        count: 1,
        elementSymbol: 'S',
      },
    ],
    conditions: 'Combustión de silicio (3 mil millones °C)',
    energy: 'exothermic',
    description: 'Silicio captura alfa para formar azufre. Pasos antes de que la estrella colapse: el oxígeno se acaba y la fusión llega a su límite cerca del hierro.',
    discoveryHint: 'El de los chips + un alfa.',
  },
  {
    id: 'si-burning',
    type: 'nuclear',
    reactants: [{ symbol: 'Si', count: 2 }],
    products: [
      {
        formula: 'Fe',
        name: 'Hierro',
        count: 1,
        elementSymbol: 'Fe',
      },
    ],
    conditions: 'Última etapa estelar antes del colapso',
    energy: 'exothermic',
    description: 'Dos silicios se funden para formar hierro. Es el final del camino: el Fe-56 tiene la mayor energía de enlace por nucleón. Más allá del hierro, la fusión consume energía en lugar de producirla — y la estrella colapsa.',
    discoveryHint: 'Dos veces la base de los chips.',
  },
  {
    id: 'r-process-au',
    type: 'nuclear',
    reactants: [
      { symbol: 'Fe', count: 1 },
      { symbol: 'He', count: 1 },
    ],
    products: [
      {
        formula: 'Ni',
        name: 'Níquel',
        count: 1,
        elementSymbol: 'Ni',
      },
    ],
    conditions: 'Supernova (proceso s)',
    energy: 'endothermic',
    description: 'Después del hierro la fusión deja de liberar energía. Los elementos más pesados se forman por captura lenta o rápida de neutrones en supernovas y choques de estrellas de neutrones.',
    discoveryHint: 'El metal industrial + un alfa.',
  },
  {
    id: 'd-d',
    type: 'nuclear',
    reactants: [{ symbol: 'H', count: 3 }],
    products: [
      {
        formula: 'Li',
        name: 'Litio',
        count: 1,
        elementSymbol: 'Li',
      },
    ],
    conditions: 'Nucleosíntesis primordial',
    energy: 'exothermic',
    description: 'Tres hidrógenos pueden formar litio en condiciones extremas (los primeros minutos del universo). Es uno de los pocos elementos que se "cocinó" durante el Big Bang junto al H y He.',
    discoveryHint: 'Tres veces el más liviano.',
  },
];
