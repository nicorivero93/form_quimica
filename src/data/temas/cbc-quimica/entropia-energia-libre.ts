import type { Tema } from '@/types/tema';

export const entropiaEnergiaLibre: Tema = {
  slug: 'entropia-energia-libre',
  titulo: 'Entropía, energía libre y espontaneidad',
  anios: ['cbc-quimica'],
  area: 'termoquimica',
  nivel: 'avanzado',
  resumen:
    'La segunda ley de la termodinámica: por qué unas reacciones ocurren espontáneamente y otras no. Cómo predecir con $\\Delta G$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En termoquímica básica vimos que algunas reacciones liberan calor (exotérmicas, $\\Delta H < 0$). Pero hay reacciones endotérmicas que **igual ocurren espontáneamente** (ej. disolución del NH₄NO₃ en agua, que enfría). Para entender por qué, necesitamos **entropía**.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Entropía (S)',
      texto:
        'Es una medida del **desorden** o número de microestados accesibles del sistema. La segunda ley de la termodinámica dice que en un proceso espontáneo la entropía total del universo (sistema + entorno) **siempre aumenta**.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Proceso', '¿$\\Delta S$ del sistema?'],
      filas: [
        ['Sólido → líquido (fusión)', '$> 0$ (más desorden)'],
        ['Líquido → gas (evaporación)', '$\\gg 0$'],
        ['Disolverse en agua', '> 0 generalmente'],
        ['Polimerización (muchas moléculas → 1)', '$< 0$'],
        ['Aumentar temperatura', '> 0'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Energía libre de Gibbs (G)',
      texto:
        'Combina entalpía y entropía en una sola cantidad: $G = H - TS$. La variación $\\Delta G$ predice si una reacción es espontánea **a presión y temperatura constantes**, sin tener que calcular el entorno.',
    },
    {
      tipo: 'latex',
      latex: '\\Delta G = \\Delta H - T \\Delta S',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Signo de $\\Delta G$', 'Significado'],
      filas: [
        ['$\\Delta G < 0$', 'reacción espontánea (puede ocurrir sola)'],
        ['$\\Delta G = 0$', 'equilibrio'],
        ['$\\Delta G > 0$', 'no espontánea (necesita energía externa para ocurrir)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Combinaciones de signos',
      texto:
        'Si $\\Delta H < 0$ y $\\Delta S > 0$: ESPONTÁNEA a toda T. Si $\\Delta H > 0$ y $\\Delta S < 0$: NUNCA espontánea. Si los dos tienen el mismo signo: depende de T (la temperatura "decide").',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay una relación clave entre energía libre y la constante de equilibrio: $\\Delta G^{\\circ} = -RT \\ln K$. Si $K \\gg 1$, $\\Delta G^{\\circ} \\ll 0$ (productos predominan, espontánea). Si $K \\ll 1$, $\\Delta G^{\\circ} \\gg 0$.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Energía libre de Gibbs',
      latex: '\\Delta G = \\Delta H - T \\Delta S',
      variables: [
        { simbolo: '\\Delta H', nombre: 'cambio de entalpía', unidad: 'J/mol' },
        { simbolo: 'T', nombre: 'temperatura absoluta', unidad: 'K' },
        { simbolo: '\\Delta S', nombre: 'cambio de entropía', unidad: 'J/(mol·K)' },
      ],
    },
    {
      nombre: 'Relación con K',
      latex: '\\Delta G^{\\circ} = -RT \\ln K',
      variables: [
        { simbolo: 'R', nombre: 'constante de los gases', unidad: '8,314 J/(mol·K)' },
        { simbolo: 'K', nombre: 'constante de equilibrio', unidad: '—' },
      ],
      cuandoUsar: 'A condiciones estándar. Si te dan G° en kJ, pasá R a kJ/(mol·K) o convertí.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Espontaneidad a 298 K',
      enunciado:
        'Para una reacción: $\\Delta H = -50 \\, kJ/mol$, $\\Delta S = +120 \\, J/(mol \\cdot K)$. ¿Es espontánea a 298 K?',
      pasos: [
        {
          explicacion:
            'Pasamos $\\Delta S$ a kJ: $120 / 1000 = 0{,}120 \\, kJ/(mol \\cdot K)$.',
        },
        {
          explicacion: 'Aplicamos la fórmula.',
          latex: '\\Delta G = -50 - 298 \\cdot 0{,}120 = -50 - 35{,}76 = -85{,}76 \\, kJ/mol',
        },
        {
          explicacion:
            'Como ambos términos colaboran (H exotérmica, S aumenta), es espontánea a CUALQUIER T.',
        },
      ],
      resultado: 'Espontánea ($\\Delta G = -85{,}76 \\, kJ/mol$).',
    },
    {
      titulo: 'Temperatura mínima para espontaneidad',
      enunciado:
        'Una reacción tiene $\\Delta H = +30 \\, kJ/mol$ y $\\Delta S = +150 \\, J/(mol\\cdot K)$. ¿A qué temperatura empieza a ser espontánea?',
      pasos: [
        {
          explicacion: 'Buscamos T donde $\\Delta G = 0$ (equilibrio).',
        },
        {
          explicacion:
            '$\\Delta H = T \\Delta S$ → $T = \\Delta H / \\Delta S$.',
        },
        {
          explicacion: 'Pasamos a unidades coherentes.',
          latex: 'T = \\dfrac{30\\,000 \\, J/mol}{150 \\, J/(mol \\cdot K)} = 200 \\, K',
        },
        {
          explicacion:
            'Por encima de 200 K (= -73 °C), $\\Delta G < 0$ → espontánea.',
        },
      ],
      resultado: 'Espontánea cuando T > 200 K.',
    },
  ],
  erroresComunes: [
    'Mezclar unidades: $\\Delta H$ suele venir en kJ/mol y $\\Delta S$ en J/(mol·K). Convertí antes de restar.',
    'Confundir "espontáneo" con "rápido". $\\Delta G < 0$ dice que PUEDE ocurrir, no que ocurra rápido. La cinética determina la velocidad.',
    'Olvidarse del factor T en $T \\Delta S$: dependiendo de T, una reacción puede pasar de no espontánea a espontánea (o viceversa).',
    'Aplicar la fórmula a procesos donde T cambia mucho. Asume T constante a lo largo de la reacción.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Para una reacción con $\\Delta H > 0$ y $\\Delta S > 0$, la espontaneidad:',
        opciones: [
          'siempre es espontánea',
          'nunca es espontánea',
          'depende de T (espontánea si T es alta)',
          'depende de T (espontánea si T es baja)',
        ],
        correcta: 2,
        explicacion: 'Con ambos positivos, hace falta T alta para que $T\\Delta S > \\Delta H$ y $\\Delta G < 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\Delta G < 0$ implica que la reacción ocurre rápidamente.',
        respuesta: false,
        explicacion:
          'Solo dice que es espontánea (puede ocurrir sin energía externa). Puede ser muy lenta si la Ea es alta.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si $K = 1$, ¿cuánto vale $\\Delta G^{\\circ}$ (en kJ/mol)?',
        respuesta: 0,
        explicacion:
          '$\\Delta G^{\\circ} = -RT \\ln K = -RT \\cdot 0 = 0$. Equilibrio, ni reactivos ni productos predominan.',
      },
    ],
  },
  relacionados: ['termoquimica', 'equilibrio-quimico'],
  tags: ['entropía', 'energía libre', 'gibbs', 'espontaneidad', '2da ley termodinámica', 'ΔG'],
};
