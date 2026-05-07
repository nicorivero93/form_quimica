import type { Tema } from '@/types/tema';

export const cinetica: Tema = {
  slug: 'cinetica-quimica',
  titulo: 'Cinética química: velocidad de reacción',
  anios: ['secundaria-5'],
  area: 'cinetica-equilibrio',
  nivel: 'intermedio',
  resumen:
    'Qué tan rápido ocurre una reacción y qué factores la aceleran (concentración, temperatura, superficie, catalizadores).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La **cinética química** estudia la velocidad de las reacciones: cuánto cambian las concentraciones por unidad de tiempo. Es independiente de cuán completa sea la reacción (eso es termodinámica).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Velocidad de reacción',
      texto:
        'Para $aA + bB \\to cC + dD$: $v = -\\dfrac{1}{a}\\dfrac{\\Delta [A]}{\\Delta t} = \\dfrac{1}{c}\\dfrac{\\Delta [C]}{\\Delta t}$. Los signos negativos en reactivos compensan que sus concentraciones bajan.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para que una reacción ocurra, las moléculas tienen que **chocar con la orientación correcta y suficiente energía** (energía de activación, $E_a$). Cualquier factor que aumente la frecuencia o la energía de los choques acelera la reacción.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Factor', 'Efecto', 'Por qué'],
      filas: [
        ['Aumenta concentración', 'acelera', 'más choques por segundo'],
        ['Aumenta temperatura', 'acelera (mucho)', 'más moléculas con E ≥ Ea'],
        ['Aumenta superficie de contacto', 'acelera', 'más sitios disponibles para chocar'],
        ['Catalizador', 'acelera', 'baja la Ea, abre nuevo camino de reacción'],
        ['Inhibidor', 'frena', 'sube la Ea o bloquea sitios activos'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla del 10',
      texto:
        'Para muchas reacciones, subir 10 °C aproximadamente DUPLICA la velocidad. Por eso la heladera enlentece la descomposición de los alimentos y la olla a presión cocina más rápido.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La ecuación de **Arrhenius** vincula la constante de velocidad con la temperatura: $k = A \\, e^{-E_a/RT}$. Más Ea o menos T → reacción más lenta.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Un catalizador NO se consume. Aparece en reactivos y productos como reacción global, pero su rol es bajar la energía de activación, no aportar materia. La enzima que digiere la lactosa es un ejemplo biológico.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Velocidad media',
      latex: 'v = -\\dfrac{1}{a}\\dfrac{\\Delta [A]}{\\Delta t} = \\dfrac{1}{c}\\dfrac{\\Delta [C]}{\\Delta t}',
      variables: [
        { simbolo: 'v', nombre: 'velocidad de reacción', unidad: 'mol/(L·s)' },
        { simbolo: '\\Delta [X]', nombre: 'cambio de concentración', unidad: 'mol/L' },
        { simbolo: '\\Delta t', nombre: 'intervalo de tiempo', unidad: 's' },
      ],
    },
    {
      nombre: 'Ley de velocidad (general)',
      latex: 'v = k \\, [A]^m [B]^n',
      variables: [
        { simbolo: 'k', nombre: 'constante de velocidad', unidad: 'depende del orden' },
        { simbolo: 'm, n', nombre: 'órdenes parciales (experimentales)', unidad: '—' },
      ],
      cuandoUsar:
        'm y n NO son los coeficientes estequiométricos: se determinan experimentalmente.',
    },
    {
      nombre: 'Ecuación de Arrhenius',
      latex: 'k = A \\, e^{-E_a/(RT)}',
      variables: [
        { simbolo: 'A', nombre: 'factor de frecuencia', unidad: 'depende' },
        { simbolo: 'E_a', nombre: 'energía de activación', unidad: 'J/mol' },
        { simbolo: 'R', nombre: 'constante de los gases', unidad: '8,314 J/(mol·K)' },
        { simbolo: 'T', nombre: 'temperatura absoluta', unidad: 'K' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Velocidad media a partir de concentraciones',
      enunciado:
        'En la reacción $A \\to B$, la concentración de A bajó de 0,80 M a 0,50 M en 60 segundos. ¿Cuál es la velocidad media?',
      pasos: [
        {
          explicacion: 'Usamos la fórmula de velocidad para A (con signo cambiado, porque A baja).',
          latex: 'v = -\\dfrac{\\Delta [A]}{\\Delta t} = -\\dfrac{(0{,}50 - 0{,}80)}{60}',
        },
        {
          explicacion: 'Calculamos.',
          latex: 'v = -\\dfrac{-0{,}30}{60} = 0{,}005 \\, M/s = 5 \\times 10^{-3} \\, mol/(L \\cdot s)',
        },
      ],
      resultado: 'v = 5×10⁻³ M/s.',
    },
    {
      titulo: 'Efecto de duplicar la concentración',
      enunciado:
        'Si la ley de velocidad es $v = k \\, [A]^2$, ¿cómo cambia la velocidad si duplicamos $[A]$?',
      pasos: [
        {
          explicacion: 'Reemplazamos $[A]$ por $2[A]$.',
          latex: 'v_{nueva} = k (2[A])^2 = 4 \\, k [A]^2 = 4 \\, v',
        },
      ],
      resultado: 'La velocidad se cuadruplica (factor 2² = 4).',
    },
  ],
  erroresComunes: [
    'Asumir que los órdenes de la ley de velocidad coinciden con los coeficientes estequiométricos. Solo coinciden por casualidad — los órdenes son experimentales.',
    'Pensar que un catalizador cambia el ΔH o el equilibrio. Solo acelera, no afecta termodinámica.',
    'Olvidarse del signo negativo en reactivos al calcular velocidad. La velocidad es siempre positiva.',
    'Confundir energía de activación con ΔH. Son cosas distintas: $E_a$ es la "barrera" en el camino, $\\Delta H$ es la diferencia neta inicial→final.',
    'Pensar que aumentar la presión SIEMPRE acelera. Solo lo hace en gases (cambia la concentración efectiva).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Un catalizador acelera una reacción porque:',
        opciones: [
          'aumenta la temperatura',
          'aumenta la concentración',
          'baja la energía de activación',
          'cambia el ΔH',
        ],
        correcta: 2,
        explicacion: 'Provee un camino alternativo con menor Ea, por lo que más moléculas pueden reaccionar.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Para $v = k [A]^3$, si triplicamos $[A]$, la velocidad se multiplica por:',
        respuesta: 27,
        explicacion: '$3^3 = 27$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un trozo grande de tiza se disuelve en HCl más rápido que el mismo trozo molido.',
        respuesta: false,
        explicacion:
          'Al revés: la tiza molida tiene más superficie de contacto, así que reacciona más rápido.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Si subimos la temperatura 30 °C en una reacción típica, su velocidad:',
        opciones: ['no cambia', 'aumenta levemente', 'se duplica aprox.', 'aumenta unas 8 veces'],
        correcta: 3,
        explicacion: 'Regla del 10: cada +10°C duplica la velocidad. +30°C ≈ 2³ = 8 veces.',
      },
    ],
  },
  relacionados: ['equilibrio-quimico', 'termoquimica'],
  tags: ['cinética', 'velocidad', 'energía de activación', 'arrhenius', 'catalizador', 'inhibidor'],
};
