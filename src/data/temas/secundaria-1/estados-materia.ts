import type { Tema } from '@/types/tema';

export const estadosMateria: Tema = {
  slug: 'estados-materia',
  titulo: 'Estados de la materia y cambios de estado',
  anios: ['secundaria-1'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Sólido, líquido y gas: cómo se acomodan las partículas y qué pasa cuando cambian de uno a otro (fusión, evaporación, sublimación).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Toda la materia está formada por **partículas** (átomos o moléculas) en movimiento. La forma en que esas partículas se acomodan y se mueven define el **estado** en que está la materia.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Estado', 'Forma', 'Volumen', 'Movimiento de partículas'],
      filas: [
        ['Sólido', 'fija', 'fijo', 'vibran en su lugar (orden)'],
        ['Líquido', 'la del recipiente', 'fijo', 'se deslizan unas sobre otras'],
        ['Gas', 'la del recipiente', 'la del recipiente', 'libres, chocan, llenan todo'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Modelo cinético-molecular',
      texto:
        'Las partículas siempre están moviéndose. Cuanta más **energía** (temperatura) tienen, más se mueven. Cuando se mueven mucho, se separan y vencen las fuerzas que las mantenían juntas → cambia el estado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **cambios de estado** son procesos físicos (no cambia la sustancia, solo cómo están sus partículas). Hay seis cambios posibles, agrupados según si absorben calor (van hacia más desorden) o lo liberan (van hacia más orden):',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cambio', 'De → A', '¿Absorbe o libera calor?', 'Ejemplo'],
      filas: [
        ['Fusión', 'sólido → líquido', 'absorbe', 'hielo derretido'],
        ['Solidificación', 'líquido → sólido', 'libera', 'agua que se congela'],
        ['Vaporización', 'líquido → gas', 'absorbe', 'agua hirviendo'],
        ['Condensación', 'gas → líquido', 'libera', 'gotas en un vaso frío'],
        ['Sublimación', 'sólido → gas (directo)', 'absorbe', 'naftalina, hielo seco'],
        ['Deposición / sublimación inversa', 'gas → sólido (directo)', 'libera', 'escarcha en hojas'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Punto de fusión y de ebullición',
      texto:
        'Cada sustancia pura tiene **temperaturas fijas** a las que cambia de estado: el agua funde a 0 °C y hierve a 100 °C (a 1 atm). Estos puntos sirven para identificar sustancias.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Mientras está cambiando de estado, la temperatura **NO sube** aunque le sigas dando calor. Toda la energía se usa en cambiar el estado, no en calentar. Por eso el hielo en hielo+agua está siempre a 0 °C hasta que se funde todo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar cambios de estado en el día a día',
      enunciado: 'Identificar el cambio de estado en cada caso: (a) ropa colgada al sol que se seca, (b) gotitas en la pared del baño después de bañarte, (c) vaho que sale al respirar en invierno, (d) un cubito de hielo en el vaso.',
      pasos: [
        {
          explicacion: '(a) **Vaporización**: el agua de la ropa pasa a vapor en el aire.',
        },
        {
          explicacion: '(b) **Condensación**: el vapor de agua del aire (caliente) se enfría al tocar la pared y vuelve a líquido.',
        },
        {
          explicacion: '(c) **Condensación**: el vapor de agua de tu boca se enfría rápido afuera y forma gotitas visibles.',
        },
        {
          explicacion: '(d) **Fusión**: el hielo (sólido) pasa a agua (líquida) absorbiendo calor del entorno.',
        },
      ],
      resultado: 'a: vaporización, b y c: condensación, d: fusión.',
    },
  ],
  erroresComunes: [
    'Decir "evaporación" siempre. Técnicamente, **evaporación** es lenta y ocurre solo en la superficie (a cualquier T); **ebullición** es rápida y en todo el volumen (en el punto de ebullición).',
    'Pensar que el vapor de agua es lo que se ve cuando hierve la pava. NO: lo que ves es agua líquida en gotitas chiquitas (vapor condensado). El vapor real es invisible.',
    'Confundir el "hielo seco" con hielo común. El hielo seco es CO₂ sólido y sublima directo a gas (no se hace líquido).',
    'Pensar que la temperatura siempre sube cuando le das calor. Mientras hay cambio de estado, queda constante.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se llama el cambio de estado de líquido a gas?',
        opciones: ['Fusión', 'Vaporización', 'Sublimación', 'Condensación'],
        correcta: 1,
        explicacion: 'Líquido → gas = vaporización (incluye evaporación lenta y ebullición rápida).',
      },
      {
        tipo: 'multiple',
        enunciado: '¿En qué estado las partículas tienen forma fija pero pueden vibrar?',
        opciones: ['Sólido', 'Líquido', 'Gas', 'Plasma'],
        correcta: 0,
        explicacion: 'Sólido: las partículas vibran en su lugar pero no se desplazan.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Mientras un cubito de hielo se está derritiendo, su temperatura sigue siendo 0 °C.',
        respuesta: true,
        explicacion: 'Sí: toda la energía recibida se usa en romper la red cristalina, no en calentar.',
      },
      {
        tipo: 'multiple',
        enunciado: 'La naftalina pasa directamente de sólido a gas. Ese cambio se llama:',
        opciones: ['Fusión', 'Vaporización', 'Sublimación', 'Condensación'],
        correcta: 2,
        explicacion: 'Sublimación: sólido → gas sin pasar por líquido.',
      },
    ],
  },
  relacionados: ['que-es-la-materia', 'metodos-separacion'],
  tags: ['estados de la materia', 'sólido', 'líquido', 'gas', 'fusión', 'evaporación', 'sublimación'],
};
