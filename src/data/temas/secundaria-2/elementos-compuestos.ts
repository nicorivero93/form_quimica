import type { Tema } from '@/types/tema';

export const elementosCompuestos: Tema = {
  slug: 'elementos-y-compuestos',
  titulo: 'Elementos y compuestos',
  anios: ['secundaria-2'],
  area: 'tabla-periodica',
  nivel: 'intro',
  resumen:
    'Diferencia entre elemento (un solo tipo de átomo) y compuesto (varios elementos unidos químicamente).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las **sustancias puras** se dividen en dos grandes grupos: **elementos** y **compuestos**. La diferencia está en si están hechas de un solo tipo de átomo o de varios unidos químicamente.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Definición', 'Ejemplo', '¿Se descompone?'],
      filas: [
        ['Elemento', 'sustancia formada por un solo tipo de átomo', 'oro (Au), oxígeno (O₂), helio (He)', 'no por métodos químicos'],
        ['Compuesto', 'sustancia formada por 2 o más elementos unidos en proporción fija', 'agua (H₂O), sal (NaCl), CO₂', 'sí, por métodos químicos'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Elemento',
      texto:
        'Hay 118 elementos conocidos (cada uno con su Z). Cada elemento tiene un símbolo: H, O, C, Fe, Au. Los primeros 92 existen en la naturaleza; los demás se sintetizan en laboratorio.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Compuesto',
      texto:
        'En un compuesto los elementos se unen en **proporciones fijas** (siempre las mismas). Por eso el agua siempre es H₂O — 2 H por cada O —, nunca H₃O o HO arbitrariamente.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Sustancia', '¿Elemento o compuesto?', 'Por qué'],
      filas: [
        ['O₂ (oxígeno molecular)', 'elemento', 'solo átomos de O'],
        ['H₂O (agua)', 'compuesto', 'átomos de H y O unidos'],
        ['Au (oro)', 'elemento', 'solo Au'],
        ['NaCl (sal)', 'compuesto', 'Na y Cl'],
        ['Fe (hierro)', 'elemento', 'solo Fe'],
        ['CH₄ (metano)', 'compuesto', 'C e H'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Sustancia simple vs molécula',
      texto:
        'Algunos elementos no aparecen sueltos sino como moléculas: O₂, N₂, H₂, Cl₂. Siguen siendo elementos (sustancias simples) porque están formados por átomos del mismo tipo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cómo distinguir mezcla / compuesto / elemento:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Característica', 'Mezcla', 'Compuesto', 'Elemento'],
      filas: [
        ['Composición', 'variable', 'fija', 'única (un solo átomo)'],
        ['Separación', 'métodos físicos (filtración, destilación)', 'métodos químicos (electrólisis, etc.)', 'no se separa'],
        ['Propiedades', 'mantienen las de cada componente', 'distintas a las de los elementos que la forman', 'sus propias'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Las propiedades cambian',
      texto:
        'El agua (H₂O) NO se parece nada al hidrógeno (gas explosivo) ni al oxígeno (gas que respirás). Cuando dos elementos se combinan en compuesto, **nacen propiedades nuevas**.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Clasificar sustancias',
      enunciado:
        'Indicar si cada sustancia es elemento, compuesto o mezcla: (a) acero (Fe + C), (b) glucosa (C₆H₁₂O₆), (c) plata pura, (d) leche, (e) ozono (O₃).',
      pasos: [
        {
          explicacion: '(a) Acero: hierro y carbono mezclados (proporción variable) → **mezcla** (homogénea, aleación).',
        },
        {
          explicacion: '(b) Glucosa: 3 elementos en proporción fija → **compuesto**.',
        },
        {
          explicacion: '(c) Plata pura: solo Ag → **elemento**.',
        },
        {
          explicacion: '(d) Leche: agua + grasas + proteínas + lactosa, proporción variable → **mezcla**.',
        },
        {
          explicacion: '(e) O₃: solo átomos de oxígeno → **elemento** (forma molecular del oxígeno).',
        },
      ],
      resultado: 'Elementos: c, e. Compuesto: b. Mezclas: a, d.',
    },
  ],
  erroresComunes: [
    'Pensar que el agua es un elemento. NO: es un **compuesto** (H + O).',
    'Confundir compuesto con mezcla. Compuesto = elementos unidos químicamente en proporción fija. Mezcla = juntos sin reaccionar, en proporción variable.',
    'Decir que el aire es un compuesto. Es una mezcla (no hay proporción fija; cambia con la altura, humedad, contaminación).',
    'Asumir que un elemento siempre es un átomo aislado. Algunos forman moléculas (O₂, N₂, S₈), pero siguen siendo elementos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'El dióxido de carbono (CO₂) es:',
        opciones: ['un elemento', 'un compuesto', 'una mezcla', 'una solución'],
        correcta: 1,
        explicacion: 'Tiene C y O en proporción fija (1:2) → compuesto.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es un elemento?',
        opciones: ['NaCl', 'H₂SO₄', 'Cu', 'aire'],
        correcta: 2,
        explicacion: 'Cu (cobre) es un solo tipo de átomo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El N₂ es un compuesto porque tiene 2 átomos.',
        respuesta: false,
        explicacion: 'NO: son 2 átomos del MISMO elemento (nitrógeno). Es un elemento (sustancia simple diatómica).',
      },
      {
        tipo: 'multiple',
        enunciado: 'Las propiedades del agua (H₂O):',
        opciones: [
          'son las del H más las del O',
          'son las del H solamente',
          'son distintas a las del H y O por separado',
          'son las del O solamente',
        ],
        correcta: 2,
        explicacion: 'Al combinarse en compuesto nacen propiedades nuevas (el agua no se parece al H ni al O).',
      },
    ],
  },
  relacionados: ['el-atomo', 'simbolos-formulas', 'que-es-la-materia'],
  tags: ['elemento', 'compuesto', 'sustancia pura', 'molécula', 'sustancia simple'],
};
