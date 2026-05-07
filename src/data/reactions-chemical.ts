import type { Reaction } from '@/types/reaction';

export const REACTIONS_CHEMICAL: Reaction[] = [
  {
    id: 'h2o',
    type: 'chemical',
    reactants: [
      { symbol: 'H', count: 2 },
      { symbol: 'O', count: 1 },
    ],
    products: [
      { formula: 'H₂O', name: 'Agua', count: 1, structureId: 'mol-h2o' },
    ],
    conditions: 'Combustión',
    energy: 'exothermic',
    description: 'La reacción más famosa de la química. Dos moléculas de hidrógeno y una de oxígeno liberan una cantidad enorme de energía y forman agua. Es el motor de los cohetes de combustible líquido.',
    reversible: true,
    discoveryHint: 'El gas más liviano del universo + el que respirás.',
  },
  {
    id: 'nacl',
    type: 'chemical',
    reactants: [
      { symbol: 'Na', count: 1 },
      { symbol: 'Cl', count: 1 },
    ],
    products: [
      { formula: 'NaCl', name: 'Sal de mesa (Halita)', count: 1, structureId: 'nacl' },
    ],
    conditions: 'Ambiente',
    energy: 'exothermic',
    description: 'Un metal violentamente reactivo con un gas verde tóxico forman el cristal cúbico que tenés en cada salero. Increíble cómo dos venenos hacen algo esencial para la vida.',
    reversible: true,
    discoveryHint: 'Un metal alcalino + un halógeno verde-amarillento.',
  },
  {
    id: 'co2',
    type: 'chemical',
    reactants: [
      { symbol: 'C', count: 1 },
      { symbol: 'O', count: 2 },
    ],
    products: [
      { formula: 'CO₂', name: 'Dióxido de carbono', count: 1, structureId: 'mol-co2' },
    ],
    conditions: 'Combustión',
    energy: 'exothermic',
    description: 'Lo que exhalás al respirar y lo que sale de un auto a nafta. Lineal, sin polaridad neta. Atrapa calor en la atmósfera — protagonista del cambio climático.',
    discoveryHint: 'La base de la vida + el gas que respirás (×2).',
  },
  {
    id: 'ch4',
    type: 'chemical',
    reactants: [
      { symbol: 'C', count: 1 },
      { symbol: 'H', count: 4 },
    ],
    products: [
      { formula: 'CH₄', name: 'Metano', count: 1, structureId: 'mol-ch4' },
    ],
    conditions: 'Catalizador',
    energy: 'exothermic',
    description: 'El gas natural que usás para cocinar. Tetraédrico perfecto. También lo emiten las vacas y los pantanos — mucho más potente que el CO₂ como gas de efecto invernadero.',
    discoveryHint: 'La base de la vida + cuatro veces el más liviano.',
  },
  {
    id: 'nh3',
    type: 'chemical',
    reactants: [
      { symbol: 'N', count: 1 },
      { symbol: 'H', count: 3 },
    ],
    products: [
      { formula: 'NH₃', name: 'Amoníaco', count: 1, structureId: 'mol-nh3' },
    ],
    conditions: 'Proceso Haber-Bosch (alta presión + Fe)',
    energy: 'exothermic',
    description: 'El proceso Haber-Bosch fija nitrógeno atmosférico para hacer fertilizantes. Sin esta reacción industrial no se podría alimentar la mitad del planeta.',
    discoveryHint: 'El 78% del aire + tres veces el más liviano.',
  },
  {
    id: 'fe2o3',
    type: 'chemical',
    reactants: [
      { symbol: 'Fe', count: 2 },
      { symbol: 'O', count: 3 },
    ],
    products: [
      { formula: 'Fe₂O₃', name: 'Hematita (óxido de hierro)', count: 1, structureId: 'fe2o3-hematite' },
    ],
    conditions: 'Aire húmedo',
    energy: 'exothermic',
    description: 'La herrumbre. El hierro se oxida lentamente al aire formando este óxido rojizo. Es el mismo mineral que pinta de rojo la superficie de Marte.',
    discoveryHint: 'El metal industrial por excelencia + el que oxida todo.',
  },
  {
    id: 'caf2',
    type: 'chemical',
    reactants: [
      { symbol: 'Ca', count: 1 },
      { symbol: 'F', count: 2 },
    ],
    products: [
      { formula: 'CaF₂', name: 'Fluorita', count: 1, structureId: 'caf2' },
    ],
    conditions: 'Ambiente',
    energy: 'exothermic',
    description: 'El mineral que dio nombre a la fluorescencia. Cristales transparentes de varios colores; se usa en lentes ópticos y en pasta dental como fuente de fluoruro.',
    reversible: true,
    discoveryHint: 'El de tus huesos + el más electronegativo de la tabla.',
  },
  {
    id: 'al2o3',
    type: 'chemical',
    reactants: [
      { symbol: 'Al', count: 2 },
      { symbol: 'O', count: 3 },
    ],
    products: [
      { formula: 'Al₂O₃', name: 'Corindón (alúmina)', count: 1, structureId: 'al2o3-corundum' },
    ],
    conditions: 'Aire',
    energy: 'exothermic',
    description: 'La capa que protege al aluminio de seguir oxidándose. En su forma cristalina pura es el corindón: rubíes (con cromo) y zafiros (con titanio + hierro).',
    discoveryHint: 'El metal de las latas + el que respirás.',
  },
  {
    id: 'sio2',
    type: 'chemical',
    reactants: [
      { symbol: 'Si', count: 1 },
      { symbol: 'O', count: 2 },
    ],
    products: [
      { formula: 'SiO₂', name: 'Cuarzo', count: 1, structureId: 'sio2-quartz' },
    ],
    conditions: 'Naturaleza / alta temperatura',
    energy: 'exothermic',
    description: 'La arena, el vidrio, el cuarzo de los relojes. Tetraedros de SiO₄ unidos por vértices forman uno de los minerales más abundantes de la corteza terrestre.',
    discoveryHint: 'La base de los chips + el que respirás.',
  },
  {
    id: 'tio2',
    type: 'chemical',
    reactants: [
      { symbol: 'Ti', count: 1 },
      { symbol: 'O', count: 2 },
    ],
    products: [
      { formula: 'TiO₂', name: 'Rutilo', count: 1, structureId: 'tio2-rutile' },
    ],
    conditions: 'Aire',
    energy: 'exothermic',
    description: 'El blanco más blanco que existe. Se usa en pinturas, protectores solares y pasta dental. Fotocatalizador bajo luz UV: descompone contaminantes orgánicos.',
    discoveryHint: 'El metal de los implantes + el que respirás.',
  },
  {
    id: 'fes2',
    type: 'chemical',
    reactants: [
      { symbol: 'Fe', count: 1 },
      { symbol: 'S', count: 2 },
    ],
    products: [
      { formula: 'FeS₂', name: 'Pirita ("oro de los tontos")', count: 1, structureId: 'fes2-pyrite' },
    ],
    conditions: 'Hidrotermal',
    energy: 'exothermic',
    description: 'Cubos dorados brillantes que se confundían con oro real durante la fiebre minera. Cuando se oxida produce ácido sulfúrico — un dolor de cabeza en minería.',
    discoveryHint: 'El metal industrial por excelencia + el de los anillos amarillos S₈.',
  },
  {
    id: 'naoh',
    type: 'chemical',
    reactants: [
      { symbol: 'Na', count: 1 },
      { symbol: 'O', count: 1 },
      { symbol: 'H', count: 1 },
    ],
    products: [
      { formula: 'NaOH', name: 'Soda cáustica (hidróxido de sodio)', count: 1, structureId: 'mol-naoh' },
    ],
    conditions: 'Industrial',
    energy: 'exothermic',
    description: 'La base más usada en industria. Hace jabón a partir de grasas (saponificación), destapa cañerías, fabrica papel. Quema la piel al toque.',
    discoveryHint: 'Sal sin cloro + el que respirás + el más liviano.',
  },
  {
    id: 'h2so4',
    type: 'chemical',
    reactants: [
      { symbol: 'H', count: 2 },
      { symbol: 'S', count: 1 },
      { symbol: 'O', count: 4 },
    ],
    products: [
      { formula: 'H₂SO₄', name: 'Ácido sulfúrico', count: 1, structureId: 'mol-h2so4' },
    ],
    conditions: 'Proceso de contacto',
    energy: 'exothermic',
    description: 'El químico más producido del mundo. Se usa en baterías de auto, fertilizantes, refinerías. Tan ávido de agua que carboniza la madera al contacto.',
    discoveryHint: 'Dos hidrógenos + un anillo amarillo + cuatro oxígenos.',
  },
  {
    id: 'caco3',
    type: 'chemical',
    reactants: [
      { symbol: 'Ca', count: 1 },
      { symbol: 'C', count: 1 },
      { symbol: 'O', count: 3 },
    ],
    products: [
      { formula: 'CaCO₃', name: 'Calcita', count: 1, structureId: 'caco3-calcite' },
    ],
    conditions: 'Sedimentaria',
    energy: 'exothermic',
    description: 'Conchas marinas, cáscaras de huevo, mármol, tiza, perlas: todo es calcita. La fabrican muchísimos seres vivos hace cientos de millones de años.',
    reversible: true,
    discoveryHint: 'El de los huesos + la base de la vida + tres oxígenos.',
  },
  {
    id: 'mgo',
    type: 'chemical',
    reactants: [
      { symbol: 'Mg', count: 1 },
      { symbol: 'O', count: 1 },
    ],
    products: [
      { formula: 'MgO', name: 'Óxido de magnesio', count: 1 },
    ],
    conditions: 'Combustión (luz blanca brillante)',
    energy: 'exothermic',
    description: 'El humo blanco brillante de las bengalas y de las cintas de magnesio prendidas. Refractario industrial: aguanta hasta 2800 °C sin fundirse.',
    discoveryHint: 'El de las bengalas + el que respirás.',
  },
  {
    id: 'co',
    type: 'chemical',
    reactants: [
      { symbol: 'C', count: 1 },
      { symbol: 'O', count: 1 },
    ],
    products: [
      { formula: 'CO', name: 'Monóxido de carbono', count: 1 },
    ],
    conditions: 'Combustión incompleta',
    energy: 'exothermic',
    description: 'Gas tóxico, inodoro e incoloro: el "asesino silencioso" de los calefones mal ventilados. Se forma cuando hay carbono y poco oxígeno en una combustión.',
    discoveryHint: 'La base de la vida + el que respirás (uno solo).',
  },
  {
    id: 'hcl',
    type: 'chemical',
    reactants: [
      { symbol: 'H', count: 1 },
      { symbol: 'Cl', count: 1 },
    ],
    products: [
      { formula: 'HCl', name: 'Ácido clorhídrico', count: 1 },
    ],
    conditions: 'Síntesis directa con luz UV',
    energy: 'exothermic',
    description: 'El ácido del estómago (lo segregan tus células parietales). En industria limpia metales y procesa alimentos. En el laboratorio es uno de los ácidos fuertes clásicos.',
    discoveryHint: 'El más liviano + el verde-amarillento.',
  },
  {
    id: 'glucose',
    type: 'chemical',
    reactants: [
      { symbol: 'C', count: 6 },
      { symbol: 'H', count: 12 },
      { symbol: 'O', count: 6 },
    ],
    products: [
      { formula: 'C₆H₁₂O₆', name: 'Glucosa', count: 1, structureId: 'mol-glucose' },
    ],
    conditions: 'Fotosíntesis',
    energy: 'endothermic',
    description: 'El combustible de tu cerebro. Las plantas la fabrican con luz solar a partir de CO₂ y agua. El motor de la vida en la Tierra.',
    discoveryHint: '6 carbonos + 12 hidrógenos + 6 oxígenos (la fórmula clásica del azúcar).',
  },
  {
    id: 'ethanol',
    type: 'chemical',
    reactants: [
      { symbol: 'C', count: 2 },
      { symbol: 'H', count: 6 },
      { symbol: 'O', count: 1 },
    ],
    products: [
      { formula: 'C₂H₆O', name: 'Etanol', count: 1, structureId: 'mol-c2h6o' },
    ],
    conditions: 'Fermentación o síntesis',
    energy: 'exothermic',
    description: 'El alcohol del vino, la cerveza y el alcohol de farmacia. Las levaduras lo producen al fermentar glucosa. También combustible (biocombustible E10/E25 en Argentina).',
    discoveryHint: '2 carbonos + 6 hidrógenos + 1 oxígeno.',
  },
  {
    id: 'pbs',
    type: 'chemical',
    reactants: [
      { symbol: 'Pb', count: 1 },
      { symbol: 'S', count: 1 },
    ],
    products: [
      { formula: 'PbS', name: 'Galena', count: 1, structureId: 'pbs-galena' },
    ],
    conditions: 'Hidrotermal',
    energy: 'exothermic',
    description: 'El mineral de plomo principal. Se usaba como detector en las primeras radios a galena (transistor natural). También fuente histórica de plata (lleva trazas).',
    discoveryHint: 'El de las soldaduras pesadas + el de los anillos amarillos.',
  },
  {
    id: 'hgs',
    type: 'chemical',
    reactants: [
      { symbol: 'Hg', count: 1 },
      { symbol: 'S', count: 1 },
    ],
    products: [
      { formula: 'HgS', name: 'Cinabrio', count: 1, structureId: 'hgs-cinnabar' },
    ],
    conditions: 'Hidrotermal volcánico',
    energy: 'exothermic',
    description: 'Pigmento rojo "bermellón" usado durante 2000 años. Fuente principal del mercurio. Tóxico — los pintores antiguos lo pagaron caro.',
    discoveryHint: 'El metal líquido + el anillo amarillo.',
  },
  {
    id: 'zns',
    type: 'chemical',
    reactants: [
      { symbol: 'Zn', count: 1 },
      { symbol: 'S', count: 1 },
    ],
    products: [
      { formula: 'ZnS', name: 'Esfalerita', count: 1, structureId: 'zns-zincblende' },
    ],
    conditions: 'Hidrotermal',
    energy: 'exothermic',
    description: 'El mineral más común de zinc. Su estructura "blenda de zinc" es el modelo de tantos semiconductores III-V (GaAs, GaN). Brilla en pantallas viejas (fluorescente).',
    discoveryHint: 'El de las chapas galvanizadas + el de los anillos amarillos.',
  },
  {
    id: 'fe3o4',
    type: 'chemical',
    reactants: [
      { symbol: 'Fe', count: 3 },
      { symbol: 'O', count: 4 },
    ],
    products: [
      { formula: 'Fe₃O₄', name: 'Magnetita', count: 1, structureId: 'fe3o4-magnetite' },
    ],
    conditions: 'Alta temperatura',
    energy: 'exothermic',
    description: 'El imán natural más fuerte. Las brújulas funcionan gracias a este óxido. Las bacterias magnetotácticas la fabrican adentro suyo para orientarse.',
    discoveryHint: '3 hierros + 4 oxígenos.',
  },
];
