import type { Tema } from '@/types/tema';

export const propiedadesMateria: Tema = {
  slug: 'propiedades-materia',
  titulo: 'Propiedades de la materia',
  anios: ['secundaria-1'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Diferencia entre propiedades físicas y químicas, intensivas y extensivas. Cómo identificar una sustancia por sus propiedades.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las **propiedades** son las características que tiene una porción de materia. Algunas se observan sin transformar la sustancia (físicas), otras solo cuando la sustancia reacciona y se convierte en otra (químicas).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Propiedades físicas vs químicas',
      texto:
        '**Físicas**: las medís sin cambiar la sustancia (color, masa, densidad, punto de fusión, conductividad). **Químicas**: solo se manifiestan cuando la sustancia reacciona y se transforma en otra (combustión, oxidación, acidez).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Tipo', 'Ejemplo'],
      filas: [
        ['Color', 'física', 'el oro es amarillo'],
        ['Densidad', 'física', 'el agua = 1 g/mL'],
        ['Punto de fusión', 'física', 'el hierro funde a 1538 °C'],
        ['Solubilidad', 'física', 'la sal se disuelve en agua'],
        ['Conductividad eléctrica', 'física', 'el cobre conduce'],
        ['Inflamabilidad', 'química', 'la nafta arde'],
        ['Oxidación al aire', 'química', 'el hierro se herrumbra'],
        ['Acidez', 'química', 'el vinagre es ácido'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Propiedades intensivas vs extensivas',
      texto:
        '**Intensivas**: NO dependen de cuánta materia haya (densidad, color, T de fusión). Sirven para identificar sustancias. **Extensivas**: SÍ dependen de la cantidad (masa, volumen, peso).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', '¿Intensiva o extensiva?'],
      filas: [
        ['Masa', 'extensiva (depende del tamaño)'],
        ['Volumen', 'extensiva'],
        ['Densidad', 'intensiva (igual para 1 g o 1 kg de la misma sustancia)'],
        ['Punto de ebullición', 'intensiva'],
        ['Color', 'intensiva'],
        ['Sabor', 'intensiva'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Densidad: la prueba más usada',
      texto:
        'Densidad = masa / volumen. Es **intensiva** (depende de la sustancia, no de cuánto). Un kilo de hierro y 1 g de hierro tienen la **misma** densidad: 7,87 g/cm³. Por eso sirve para identificar materiales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para **identificar una sustancia** la comparás con datos tabulados de sus propiedades intensivas: punto de fusión, punto de ebullición, densidad, color, índice de refracción. Si coinciden, es esa sustancia.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Densidad',
      latex: '\\delta = \\dfrac{m}{V}',
      variables: [
        { simbolo: '\\delta', nombre: 'densidad', unidad: 'g/cm³ o kg/m³' },
        { simbolo: 'm', nombre: 'masa', unidad: 'g o kg' },
        { simbolo: 'V', nombre: 'volumen', unidad: 'cm³ o m³' },
      ],
      cuandoUsar: 'Para identificar materiales o saber si flotan (más densos hunden, menos densos flotan).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular densidad para identificar',
      enunciado:
        'Un cubito de metal tiene 50 g y ocupa 5,8 cm³. ¿De qué metal está hecho? (oro = 19,3 g/cm³, plata = 10,5, cobre = 8,9, hierro = 7,87)',
      pasos: [
        {
          explicacion: 'Aplicamos la fórmula.',
          latex: '\\delta = \\dfrac{m}{V} = \\dfrac{50}{5{,}8} \\approx 8{,}62 \\, g/cm^3',
        },
        {
          explicacion:
            'Comparamos con la tabla. El valor más cercano es el cobre (8,9).',
        },
      ],
      resultado: 'Probablemente cobre.',
    },
    {
      titulo: 'Clasificar propiedades',
      enunciado:
        'Indicar si cada una es física/química e intensiva/extensiva: (a) la sal se disuelve en agua, (b) un papel se quema, (c) la masa de un trozo de plata, (d) el oro funde a 1064 °C.',
      pasos: [
        {
          explicacion:
            '(a) Solubilidad → propiedad **física** (no se transforma la sal). Es **intensiva** (no depende de cuánta sal).',
        },
        {
          explicacion:
            '(b) Combustión → **química** (el papel se transforma en cenizas, CO₂ y vapor). **Intensiva** (cualquier cantidad de papel arde).',
        },
        {
          explicacion:
            '(c) Masa → **física** y **extensiva** (depende de cuánto trozo).',
        },
        {
          explicacion:
            '(d) Punto de fusión → **física** (no cambia el oro al fundirse) y **intensiva**.',
        },
      ],
      resultado:
        'a: física-intensiva. b: química-intensiva. c: física-extensiva. d: física-intensiva.',
    },
  ],
  erroresComunes: [
    'Pensar que el peso y la masa son lo mismo. **Masa** se mide en kg/g (cuánta materia hay). **Peso** se mide en Newtons (fuerza con que la atrae la gravedad).',
    'Confundir solubilidad con solidificación. Solubilidad = capacidad de disolverse. Solidificación = cambio de líquido a sólido.',
    'Decir que la dureza es química. Es física: la dureza se mide rayando, sin transformar la sustancia.',
    'Pensar que la densidad cambia si tomás un trozo más chico. NO cambia: es intensiva.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es una propiedad química?',
        opciones: ['Densidad', 'Punto de fusión', 'Inflamabilidad', 'Color'],
        correcta: 2,
        explicacion: 'Inflamabilidad solo se observa cuando la sustancia se quema (se transforma).',
      },
      {
        tipo: 'multiple',
        enunciado: 'La masa es una propiedad:',
        opciones: ['física e intensiva', 'física y extensiva', 'química e intensiva', 'química y extensiva'],
        correcta: 1,
        explicacion: 'Masa: física (no transforma) y extensiva (depende de cuánto material).',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Una pieza de aluminio (densidad = 2,7 g/cm³) tiene 270 g de masa. ¿Qué volumen ocupa? (en cm³)',
        respuesta: 100,
        tolerancia: 1,
        unidad: 'cm³',
        explicacion: '$V = m/\\delta = 270/2{,}7 = 100 \\, cm^3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos trozos de la misma sustancia tienen la misma densidad aunque pesen distinto.',
        respuesta: true,
        explicacion: 'Sí: la densidad es intensiva, no depende de la cantidad.',
      },
    ],
  },
  relacionados: ['que-es-la-materia', 'estados-materia'],
  tags: ['propiedades', 'densidad', 'punto de fusión', 'intensivas', 'extensivas', 'físicas', 'químicas'],
};
