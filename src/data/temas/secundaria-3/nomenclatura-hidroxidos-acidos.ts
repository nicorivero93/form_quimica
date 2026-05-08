import type { Tema } from '@/types/tema';

export const nomenclaturaHidroxidosAcidos: Tema = {
  slug: 'nomenclatura-hidroxidos-acidos',
  titulo: 'Nomenclatura: hidróxidos, ácidos y sales',
  anios: ['secundaria-3'],
  area: 'estequiometria',
  nivel: 'intermedio',
  resumen:
    'Cómo se forman y nombran los hidróxidos (óxido básico + agua), los hidrácidos (no metal + H), los oxoácidos (anhídrido + agua) y las sales.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Después de los óxidos vienen las **funciones químicas inorgánicas**: hidróxidos, ácidos y sales. Cada una nace combinando un óxido o un elemento con agua o con otra molécula.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Hidróxido = óxido básico + agua',
      texto:
        'El metal queda con un grupo OH⁻ por cada carga positiva. Ej: $Na_2O + H_2O \\to 2 \\, NaOH$. Fórmula general: **Metal(OH)ₙ** donde n es la valencia del metal.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Hidróxido', 'Stock', 'Tradicional'],
      filas: [
        ['NaOH', 'hidróxido de sodio', 'hidróxido sódico'],
        ['Ca(OH)₂', 'hidróxido de calcio', 'hidróxido cálcico (cal apagada)'],
        ['Al(OH)₃', 'hidróxido de aluminio', 'hidróxido alumínico'],
        ['Fe(OH)₂', 'hidróxido de hierro (II)', 'hidróxido ferroso'],
        ['Fe(OH)₃', 'hidróxido de hierro (III)', 'hidróxido férrico'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Hidrácido = H + no metal',
      texto:
        'Los **hidrácidos** son ácidos sin oxígeno: H + un no metal de los grupos 16 y 17. Se nombran "ácido + raíz + -hídrico" cuando están disueltos en agua. Ejemplo: HCl en agua = ácido clorhídrico.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Fórmula', 'Nombre (en agua)', 'Nombre (gas puro)'],
      filas: [
        ['HF', 'ácido fluorhídrico', 'fluoruro de hidrógeno'],
        ['HCl', 'ácido clorhídrico', 'cloruro de hidrógeno'],
        ['HBr', 'ácido bromhídrico', 'bromuro de hidrógeno'],
        ['HI', 'ácido yodhídrico', 'yoduro de hidrógeno'],
        ['H₂S', 'ácido sulfhídrico', 'sulfuro de hidrógeno'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Oxoácido = anhídrido + agua',
      texto:
        'Los **oxoácidos** tienen H, no metal y O. Se forman al reaccionar un anhídrido (óxido ácido) con agua. Ej: $SO_3 + H_2O \\to H_2SO_4$ (ácido sulfúrico).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Fórmula', 'Tradicional', 'Stock'],
      filas: [
        ['H₂CO₃', 'ácido carbónico', 'ácido tetraoxocarbónico (IV)'],
        ['HNO₃', 'ácido nítrico', 'ácido trioxonítrico (V)'],
        ['HNO₂', 'ácido nitroso', 'ácido dioxonítrico (III)'],
        ['H₂SO₄', 'ácido sulfúrico', 'ácido tetraoxosulfúrico (VI)'],
        ['H₂SO₃', 'ácido sulfuroso', 'ácido trioxosulfúrico (IV)'],
        ['H₃PO₄', 'ácido fosfórico', 'ácido tetraoxofosfórico (V)'],
        ['HClO', 'ácido hipocloroso', 'ácido oxoclórico (I)'],
        ['HClO₂', 'ácido cloroso', 'ácido dioxoclórico (III)'],
        ['HClO₃', 'ácido clórico', 'ácido trioxoclórico (V)'],
        ['HClO₄', 'ácido perclórico', 'ácido tetraoxoclórico (VII)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Sales: ácido + base',
      texto:
        'Cuando un ácido reacciona con una base (hidróxido), se forma una **sal** + agua (neutralización). Ejemplo: $HCl + NaOH \\to NaCl + H_2O$. Las sales se nombran cambiando el sufijo del ácido: -hídrico → -uro, -oso → -ito, -ico → -ato.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Ácido', 'Sufijo en sal', 'Ejemplo'],
      filas: [
        ['ácido clorhídrico (HCl)', '-uro', 'NaCl: cloruro de sodio'],
        ['ácido nítrico (HNO₃)', '-ato', 'KNO₃: nitrato de potasio'],
        ['ácido nitroso (HNO₂)', '-ito', 'NaNO₂: nitrito de sodio'],
        ['ácido sulfúrico (H₂SO₄)', '-ato', 'CuSO₄: sulfato de cobre (II)'],
        ['ácido sulfhídrico (H₂S)', '-uro', 'Na₂S: sulfuro de sodio'],
        ['ácido carbónico (H₂CO₃)', '-ato', 'CaCO₃: carbonato de calcio'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Formar un hidróxido',
      enunciado: '¿Cuál es la fórmula del hidróxido de aluminio?',
      pasos: [
        {
          explicacion: 'Al³⁺ con OH⁻. Aplicamos cruzado: Al(OH)₃.',
        },
        {
          explicacion: 'Verificamos cargas: 1(+3) + 3(−1) = 0 ✓.',
        },
      ],
      resultado: 'Al(OH)₃.',
    },
    {
      titulo: 'Identificar una sal',
      enunciado:
        '¿De qué ácido y base proviene el sulfato de potasio (K₂SO₄)? ¿Cómo se llama por Stock?',
      pasos: [
        {
          explicacion:
            'Tiene K (de KOH) y SO₄²⁻ (del ácido sulfúrico H₂SO₄).',
        },
        {
          explicacion: 'Reacción: $H_2SO_4 + 2 \\, KOH \\to K_2SO_4 + 2 \\, H_2O$.',
        },
        {
          explicacion:
            'Stock: sulfato de potasio (K solo tiene valencia +1, no hace falta el romano).',
        },
      ],
      resultado: 'Viene de ácido sulfúrico + hidróxido de potasio. Es sulfato de potasio.',
    },
  ],
  erroresComunes: [
    'Olvidarse de los paréntesis en hidróxidos con valencia > 1: $Ca(OH)_2$, no $CaOH_2$.',
    'Confundir hidrácido (sin O) con oxoácido (con O). HCl = hidrácido. H₂SO₄ = oxoácido.',
    'Cambiar mal el sufijo al pasar de ácido a sal. -hídrico va a -uro, -oso va a -ito, -ico va a -ato.',
    'Pensar que el ácido nítrico es HNO₂. Es HNO₃ (-ico = mayor valencia, N con +5).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula del hidróxido de calcio?',
        opciones: ['CaOH', 'Ca(OH)₂', 'Ca₂(OH)', 'Ca₂(OH)₃'],
        correcta: 1,
        explicacion: 'Ca²⁺ + 2 OH⁻ → Ca(OH)₂.',
      },
      {
        tipo: 'multiple',
        enunciado: 'La sal del ácido nítrico (HNO₃) con sodio se llama:',
        opciones: ['nitruro de sodio', 'nitrito de sodio', 'nitrato de sodio', 'nítrico de sodio'],
        correcta: 2,
        explicacion: '-ico → -ato. NaNO₃ = nitrato de sodio.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es un hidrácido?',
        opciones: ['H₂SO₄', 'HCl', 'HNO₃', 'H₃PO₄'],
        correcta: 1,
        explicacion: 'HCl: H + no metal sin oxígeno → hidrácido. Los demás tienen O → oxoácidos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Cuando un ácido se neutraliza con una base, se forma una sal + agua.',
        respuesta: true,
        explicacion: 'Ácido + base → sal + agua. Es la reacción de neutralización.',
      },
    ],
  },
  relacionados: ['nomenclatura-oxidos', 'iones-compuestos-ionicos', 'neutralizacion'],
  tags: ['hidróxidos', 'hidrácidos', 'oxoácidos', 'sales', 'nomenclatura', 'IUPAC'],
};
