export type StructureBadge =
  | 'Cristal'
  | 'Alótropo'
  | 'Mineral'
  | 'Molécula'
  | 'Compuesto'
  | 'Átomo';

interface BaseStructure {
  id: string;
  formula: string;
  name: string;
  label: string;
  badge: StructureBadge;
}

export interface CrystalStructure extends BaseStructure {
  type: 'crystal';
  jsonFile: string;
  codId?: number;
}

export interface MoleculeStructure extends BaseStructure {
  type: 'molecule';
  pubchemQuery: string;
}

export interface AtomStructure extends BaseStructure {
  type: 'atom';
  symbol: string;
}

export type Structure = CrystalStructure | MoleculeStructure | AtomStructure;

export const STRUCTURES: Record<string, Structure> = {
  // ─────────── Metales FCC ───────────
  'au-fcc': { id: 'au-fcc', type: 'crystal', jsonFile: 'Au-fcc.json', formula: 'Au', name: 'Oro metálico', label: 'Cúbica centrada en caras (FCC)', badge: 'Cristal', codId: 9008463 },
  'cu-fcc': { id: 'cu-fcc', type: 'crystal', jsonFile: 'Cu-fcc.json', formula: 'Cu', name: 'Cobre metálico', label: 'FCC', badge: 'Cristal', codId: 9008468 },
  'ag-fcc': { id: 'ag-fcc', type: 'crystal', jsonFile: 'Ag-fcc.json', formula: 'Ag', name: 'Plata metálica', label: 'FCC', badge: 'Cristal', codId: 9008474 },
  'al-fcc': { id: 'al-fcc', type: 'crystal', jsonFile: 'Al-fcc.json', formula: 'Al', name: 'Aluminio', label: 'FCC', badge: 'Cristal', codId: 9008460 },
  'pb-fcc': { id: 'pb-fcc', type: 'crystal', jsonFile: 'Pb-fcc.json', formula: 'Pb', name: 'Plomo', label: 'FCC', badge: 'Cristal', codId: 9008477 },
  'pt-fcc': { id: 'pt-fcc', type: 'crystal', jsonFile: 'Pt-fcc.json', formula: 'Pt', name: 'Platino', label: 'FCC', badge: 'Cristal', codId: 9008478 },
  'ni-fcc': { id: 'ni-fcc', type: 'crystal', jsonFile: 'Ni-fcc.json', formula: 'Ni', name: 'Níquel', label: 'FCC', badge: 'Cristal', codId: 9008476 },

  // ─────────── Metales BCC ───────────
  'fe-bcc': { id: 'fe-bcc', type: 'crystal', jsonFile: 'Fe-bcc.json', formula: 'Fe', name: 'Hierro α', label: 'Cúbica centrada (BCC)', badge: 'Alótropo', codId: 9008536 },
  'fe-fcc': { id: 'fe-fcc', type: 'crystal', jsonFile: 'Fe-fcc.json', formula: 'Fe', name: 'Hierro γ', label: 'FCC (austenita)', badge: 'Alótropo', codId: 9008539 },
  'w-bcc':  { id: 'w-bcc',  type: 'crystal', jsonFile: 'W-bcc.json',  formula: 'W',  name: 'Wolframio', label: 'BCC', badge: 'Cristal', codId: 9008556 },
  'cr-bcc': { id: 'cr-bcc', type: 'crystal', jsonFile: 'Cr-bcc.json', formula: 'Cr', name: 'Cromo', label: 'BCC', badge: 'Cristal', codId: 9008534 },
  'na-bcc': { id: 'na-bcc', type: 'crystal', jsonFile: 'Na-bcc.json', formula: 'Na', name: 'Sodio metálico', label: 'BCC', badge: 'Cristal', codId: 9008548 },
  'k-bcc':  { id: 'k-bcc',  type: 'crystal', jsonFile: 'K-bcc.json',  formula: 'K',  name: 'Potasio', label: 'BCC', badge: 'Cristal', codId: 9008544 },

  // ─────────── Metales HCP ───────────
  'mg-hcp': { id: 'mg-hcp', type: 'crystal', jsonFile: 'Mg-hcp.json', formula: 'Mg', name: 'Magnesio', label: 'Hexagonal compacta (HCP)', badge: 'Cristal', codId: 9008506 },
  'ti-hcp': { id: 'ti-hcp', type: 'crystal', jsonFile: 'Ti-hcp.json', formula: 'Ti', name: 'Titanio α', label: 'HCP', badge: 'Cristal', codId: 9008517 },
  'zn-hcp': { id: 'zn-hcp', type: 'crystal', jsonFile: 'Zn-hcp.json', formula: 'Zn', name: 'Zinc', label: 'HCP', badge: 'Cristal', codId: 9008522 },
  'co-hcp': { id: 'co-hcp', type: 'crystal', jsonFile: 'Co-hcp.json', formula: 'Co', name: 'Cobalto', label: 'HCP', badge: 'Cristal', codId: 9008492 },

  // ─────────── Otras estructuras simples ───────────
  'po-sc':       { id: 'po-sc',       type: 'crystal', jsonFile: 'Po-sc.json',       formula: 'Po', name: 'Polonio',     label: 'Cúbica simple',           badge: 'Cristal', codId: 9011603 },
  'diamond':     { id: 'diamond',     type: 'crystal', jsonFile: 'diamond.json',     formula: 'C',  name: 'Diamante',    label: 'Tetraédrica covalente',   badge: 'Alótropo', codId: 9008569 },
  'graphite':    { id: 'graphite',    type: 'crystal', jsonFile: 'graphite.json',    formula: 'C',  name: 'Grafito',     label: 'Capas hexagonales',       badge: 'Alótropo', codId: 9008570 },
  'si-diamond':  { id: 'si-diamond',  type: 'crystal', jsonFile: 'Si-diamond.json',  formula: 'Si', name: 'Silicio',     label: 'Estructura diamante',     badge: 'Cristal',  codId: 9008566 },
  'ge-diamond':  { id: 'ge-diamond',  type: 'crystal', jsonFile: 'Ge-diamond.json',  formula: 'Ge', name: 'Germanio',    label: 'Estructura diamante',     badge: 'Cristal',  codId: 9008567 },
  's8':          { id: 's8',          type: 'crystal', jsonFile: 'S8.json',          formula: 'S₈', name: 'Azufre rómbico', label: 'Anillos S₈',           badge: 'Alótropo', codId: 9013762 },
  'bi-rhomb':    { id: 'bi-rhomb',    type: 'crystal', jsonFile: 'Bi-rhomb.json',    formula: 'Bi', name: 'Bismuto',     label: 'Romboédrica',             badge: 'Cristal',  codId: 9008576 },
  'as-rhomb':    { id: 'as-rhomb',    type: 'crystal', jsonFile: 'As-rhomb.json',    formula: 'As', name: 'Arsénico gris', label: 'Romboédrica',           badge: 'Alótropo', codId: 9008574 },

  // ─────────── Compuestos / Minerales ───────────
  'nacl':           { id: 'nacl',           type: 'crystal', jsonFile: 'NaCl.json',           formula: 'NaCl',  name: 'Halita (sal)',     label: 'Tipo rocksalt',     badge: 'Mineral', codId: 9000054 },
  'caf2':           { id: 'caf2',           type: 'crystal', jsonFile: 'CaF2.json',           formula: 'CaF₂',  name: 'Fluorita',          label: 'Tipo fluorita',     badge: 'Mineral', codId: 9000026 },
  'zns-zincblende': { id: 'zns-zincblende', type: 'crystal', jsonFile: 'ZnS-zincblende.json', formula: 'ZnS',   name: 'Esfalerita',        label: 'Blenda de zinc',    badge: 'Mineral', codId: 9000093 },
  'fe2o3-hematite': { id: 'fe2o3-hematite', type: 'crystal', jsonFile: 'Fe2O3-hematite.json', formula: 'Fe₂O₃', name: 'Hematita',          label: 'Corindón',          badge: 'Mineral', codId: 9015964 },
  'fe3o4-magnetite':{ id: 'fe3o4-magnetite',type: 'crystal', jsonFile: 'Fe3O4-magnetite.json',formula: 'Fe₃O₄', name: 'Magnetita',         label: 'Espinela inversa',  badge: 'Mineral', codId: 9002321 },
  'fes2-pyrite':    { id: 'fes2-pyrite',    type: 'crystal', jsonFile: 'FeS2-pyrite.json',    formula: 'FeS₂',  name: 'Pirita',            label: 'Tipo pirita',       badge: 'Mineral', codId: 9000593 },
  'sio2-quartz':    { id: 'sio2-quartz',    type: 'crystal', jsonFile: 'SiO2-quartz.json',    formula: 'SiO₂',  name: 'Cuarzo α',          label: 'Tetraedros SiO₄',   badge: 'Mineral', codId: 9000776 },
  'caco3-calcite':  { id: 'caco3-calcite',  type: 'crystal', jsonFile: 'CaCO3-calcite.json',  formula: 'CaCO₃', name: 'Calcita',           label: 'Romboédrica',       badge: 'Mineral', codId: 9000095 },
  'al2o3-corundum': { id: 'al2o3-corundum', type: 'crystal', jsonFile: 'Al2O3-corundum.json', formula: 'Al₂O₃', name: 'Corindón',          label: 'Hexagonal compacta',badge: 'Mineral', codId: 9000139 },
  'tio2-rutile':    { id: 'tio2-rutile',    type: 'crystal', jsonFile: 'TiO2-rutile.json',    formula: 'TiO₂',  name: 'Rutilo',            label: 'Tetragonal',        badge: 'Mineral', codId: 9004144 },
  'hgs-cinnabar':   { id: 'hgs-cinnabar',   type: 'crystal', jsonFile: 'HgS-cinnabar.json',   formula: 'HgS',   name: 'Cinabrio',          label: 'Trigonal',          badge: 'Mineral', codId: 9000098 },
  'pbs-galena':     { id: 'pbs-galena',     type: 'crystal', jsonFile: 'PbS-galena.json',     formula: 'PbS',   name: 'Galena',            label: 'Tipo rocksalt',     badge: 'Mineral', codId: 9000041 },
  'mos2':           { id: 'mos2',           type: 'crystal', jsonFile: 'MoS2.json',           formula: 'MoS₂',  name: 'Molibdenita',       label: 'Capas hexagonales', badge: 'Mineral', codId: 9007661 },

  // ─────────── Moléculas (PubChem) ───────────
  'mol-h2':       { id: 'mol-h2',       type: 'molecule', pubchemQuery: 'hydrogen',          formula: 'H₂',   name: 'Hidrógeno molecular', label: 'Diatómica',  badge: 'Molécula' },
  'mol-o2':       { id: 'mol-o2',       type: 'molecule', pubchemQuery: 'oxygen',            formula: 'O₂',   name: 'Oxígeno molecular',   label: 'Diatómica',  badge: 'Molécula' },
  'mol-n2':       { id: 'mol-n2',       type: 'molecule', pubchemQuery: 'nitrogen',          formula: 'N₂',   name: 'Nitrógeno molecular', label: 'Diatómica',  badge: 'Molécula' },
  'mol-cl2':      { id: 'mol-cl2',      type: 'molecule', pubchemQuery: 'chlorine',          formula: 'Cl₂',  name: 'Cloro molecular',     label: 'Diatómica',  badge: 'Molécula' },
  'mol-f2':       { id: 'mol-f2',       type: 'molecule', pubchemQuery: 'fluorine',          formula: 'F₂',   name: 'Flúor molecular',     label: 'Diatómica',  badge: 'Molécula' },
  'mol-br2':      { id: 'mol-br2',      type: 'molecule', pubchemQuery: 'bromine',           formula: 'Br₂',  name: 'Bromo molecular',     label: 'Diatómica',  badge: 'Molécula' },
  'mol-i2':       { id: 'mol-i2',       type: 'molecule', pubchemQuery: 'iodine',            formula: 'I₂',   name: 'Yodo molecular',      label: 'Diatómica',  badge: 'Molécula' },
  'mol-h2o':      { id: 'mol-h2o',      type: 'molecule', pubchemQuery: 'water',             formula: 'H₂O',  name: 'Agua',                label: 'Triatómica', badge: 'Compuesto' },
  'mol-co2':      { id: 'mol-co2',      type: 'molecule', pubchemQuery: 'carbon dioxide',    formula: 'CO₂',  name: 'Dióxido de carbono',  label: 'Lineal',     badge: 'Compuesto' },
  'mol-nh3':      { id: 'mol-nh3',      type: 'molecule', pubchemQuery: 'ammonia',           formula: 'NH₃',  name: 'Amoníaco',            label: 'Piramidal',  badge: 'Compuesto' },
  'mol-ch4':      { id: 'mol-ch4',      type: 'molecule', pubchemQuery: 'methane',           formula: 'CH₄',  name: 'Metano',              label: 'Tetraédrica',badge: 'Compuesto' },
  'mol-benzene':  { id: 'mol-benzene',  type: 'molecule', pubchemQuery: 'benzene',           formula: 'C₆H₆', name: 'Benceno',             label: 'Aromática',  badge: 'Molécula' },
  'mol-glucose':  { id: 'mol-glucose',  type: 'molecule', pubchemQuery: 'glucose',           formula: 'C₆H₁₂O₆',name: 'Glucosa',           label: 'Hexosa',     badge: 'Compuesto' },
  'mol-p4':       { id: 'mol-p4',       type: 'molecule', pubchemQuery: 'white phosphorus',  formula: 'P₄',   name: 'Fósforo blanco',      label: 'Tetraédrica',badge: 'Molécula' },
  'mol-o3':       { id: 'mol-o3',       type: 'molecule', pubchemQuery: 'ozone',             formula: 'O₃',   name: 'Ozono',               label: 'Angular',    badge: 'Molécula' },
  'mol-h2so4':    { id: 'mol-h2so4',    type: 'molecule', pubchemQuery: 'sulfuric acid',     formula: 'H₂SO₄',name: 'Ácido sulfúrico',     label: 'Tetraédrica',badge: 'Compuesto' },
  'mol-naoh':     { id: 'mol-naoh',     type: 'molecule', pubchemQuery: 'sodium hydroxide',  formula: 'NaOH', name: 'Hidróxido de sodio',  label: '',           badge: 'Compuesto' },
  'mol-c2h6o':    { id: 'mol-c2h6o',    type: 'molecule', pubchemQuery: 'ethanol',           formula: 'C₂H₆O',name: 'Etanol',              label: '',           badge: 'Compuesto' },
};

export function getStructure(id: string): Structure | undefined {
  return STRUCTURES[id];
}

export function listCrystalStructures(): CrystalStructure[] {
  return Object.values(STRUCTURES).filter((s): s is CrystalStructure => s.type === 'crystal');
}
