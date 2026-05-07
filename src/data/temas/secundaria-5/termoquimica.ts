import type { Tema } from '@/types/tema';

export const termoquimica: Tema = {
  slug: 'termoquimica',
  titulo: 'Termoquímica: entalpía y calor de reacción',
  anios: ['secundaria-5'],
  area: 'termoquimica',
  nivel: 'intermedio',
  resumen:
    'Cómo medir y calcular el calor que liberan o absorben las reacciones químicas, usando entalpía (ΔH) y la ley de Hess.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Toda reacción química involucra un intercambio de energía con el entorno. La **termoquímica** estudia ese flujo de calor cuando ocurre a presión constante (la situación habitual en el laboratorio).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Entalpía (H)',
      texto:
        'Es una función de estado que representa el contenido energético del sistema a presión constante. No la medís directamente — solo medís **cambios** ($\\Delta H$).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Signo de ΔH', 'Tipo', 'Significado', 'Ejemplo'],
      filas: [
        ['negativo (–)', 'exotérmica', 'libera calor al entorno', 'combustión del metano'],
        ['positivo (+)', 'endotérmica', 'absorbe calor del entorno', 'fotosíntesis, descomposición del CaCO₃'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'En las ecuaciones termoquímicas, $\\Delta H$ se escribe a la derecha y depende de la cantidad. Por ejemplo: $C + O_2 \\to CO_2 \\quad \\Delta H = -393 \\, kJ/mol$ significa que al formarse 1 mol de CO₂ se liberan 393 kJ.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Ley de Hess',
      texto:
        'Si una reacción se puede escribir como suma de otras, $\\Delta H$ total = suma de los $\\Delta H$ parciales. Sirve para calcular calores que no se pueden medir directamente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **calores estándar de formación** ($\\Delta H_f^{\\circ}$) son los $\\Delta H$ para formar 1 mol de un compuesto a partir de sus elementos en estado estándar (1 atm, 25 °C). Tabulados, sirven para calcular el $\\Delta H$ de cualquier reacción.',
    },
    {
      tipo: 'latex',
      latex: '\\Delta H_{rxn}^{\\circ} = \\sum n \\, \\Delta H_f^{\\circ} \\text{(productos)} - \\sum n \\, \\Delta H_f^{\\circ} \\text{(reactivos)}',
      display: true,
    },
  ],
  formulasClave: [
    {
      nombre: 'Calor a presión constante',
      latex: 'q_p = \\Delta H',
      variables: [
        { simbolo: 'q_p', nombre: 'calor intercambiado a P=cte', unidad: 'J o kJ' },
        { simbolo: '\\Delta H', nombre: 'variación de entalpía', unidad: 'J o kJ' },
      ],
    },
    {
      nombre: 'Calor sensible (sin cambio de fase)',
      latex: 'q = m \\cdot c_e \\cdot \\Delta T',
      variables: [
        { simbolo: 'q', nombre: 'calor', unidad: 'J' },
        { simbolo: 'm', nombre: 'masa', unidad: 'g' },
        { simbolo: 'c_e', nombre: 'calor específico', unidad: 'J/(g·°C)' },
        { simbolo: '\\Delta T', nombre: 'cambio de temperatura', unidad: '°C' },
      ],
      cuandoUsar: 'Calorímetro: medir el calor por el cambio de temperatura del agua.',
    },
    {
      nombre: 'Entalpía de reacción',
      latex: '\\Delta H_{rxn}^{\\circ} = \\sum n \\Delta H_f^{\\circ}_{(prod)} - \\sum n \\Delta H_f^{\\circ}_{(react)}',
      variables: [
        { simbolo: 'n', nombre: 'coeficientes estequiométricos', unidad: '—' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Calor liberado al quemar carbón',
      enunciado:
        'Calculá el calor liberado al quemar 24 g de carbono según $C + O_2 \\to CO_2 \\quad \\Delta H = -393 \\, kJ/mol$. (M(C) = 12 g/mol)',
      pasos: [
        {
          explicacion: 'Calculamos los moles de carbono.',
          latex: 'n = 24 / 12 = 2 \\, mol',
        },
        {
          explicacion: 'El ΔH dado es por mol. Multiplicamos.',
          latex: 'q = 2 \\, mol \\times (-393 \\, kJ/mol) = -786 \\, kJ',
        },
        {
          explicacion: 'El signo negativo indica que se LIBERA calor.',
        },
      ],
      resultado: 'Se liberan 786 kJ.',
    },
    {
      titulo: 'Ley de Hess',
      enunciado:
        'Calculá $\\Delta H$ para $C + 2 H_2 \\to CH_4$ usando: (1) $C + O_2 \\to CO_2 \\, \\Delta H_1 = -393$; (2) $H_2 + \\tfrac{1}{2} O_2 \\to H_2 O \\, \\Delta H_2 = -286$; (3) $CH_4 + 2 O_2 \\to CO_2 + 2 H_2 O \\, \\Delta H_3 = -890$ (todos en kJ).',
      pasos: [
        {
          explicacion:
            'Queremos: C + 2 H₂ → CH₄. Sumamos (1) + 2×(2) − (3): da C + O₂ + 2 H₂ + O₂ → CO₂ + 2 H₂O, restando CH₄ + 2 O₂ → CO₂ + 2 H₂O. Simplifica a C + 2 H₂ → CH₄.',
        },
        {
          explicacion: 'Aplicamos la misma operación a los ΔH.',
          latex: '\\Delta H = \\Delta H_1 + 2 \\Delta H_2 - \\Delta H_3',
        },
        {
          explicacion: 'Reemplazamos.',
          latex: '\\Delta H = -393 + 2(-286) - (-890) = -393 - 572 + 890 = -75 \\, kJ',
        },
      ],
      resultado: 'ΔH = −75 kJ/mol (la formación del metano es exotérmica).',
    },
  ],
  erroresComunes: [
    'Olvidarse del signo: ΔH < 0 es EXOtérmica (libera calor); ΔH > 0 es ENDOtérmica (absorbe).',
    'No multiplicar ΔH por los coeficientes al sumar reacciones (ley de Hess).',
    'Usar T en Celsius cuando la fórmula necesita Kelvin (en termodinámica avanzada).',
    'Confundir calor específico ($c_e$, por gramo) con capacidad calorífica molar ($C_m$, por mol).',
    'Asumir que ΔH depende del camino: NO. La entalpía es función de estado, solo importan estado inicial y final (eso es justamente lo que dice Hess).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Una reacción con ΔH = +52 kJ/mol es:',
        opciones: ['exotérmica', 'endotérmica', 'isotérmica', 'no se puede determinar'],
        correcta: 1,
        explicacion: 'ΔH positivo = absorbe calor del entorno = endotérmica.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Para la reacción $H_2 + \\tfrac{1}{2} O_2 \\to H_2O$, $\\Delta H = -286 \\, kJ/mol$. ¿Cuánto calor se libera al formar 4 mol de agua? (en kJ)',
        respuesta: 1144,
        tolerancia: 1,
        unidad: 'kJ',
        explicacion: '$|q| = 4 \\times 286 = 1144 \\, kJ$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Calculá el calor para subir 200 g de agua de 20 a 80 °C. ($c_e$ del agua = 4,18 J/(g·°C))',
        respuesta: 50160,
        tolerancia: 100,
        unidad: 'J',
        explicacion: '$q = m c_e \\Delta T = 200 \\times 4{,}18 \\times 60 = 50\\,160 \\, J$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Según la ley de Hess, ΔH depende del camino que toma la reacción.',
        respuesta: false,
        explicacion: 'Justamente al revés: ΔH NO depende del camino, solo de estado inicial y final.',
      },
    ],
  },
  relacionados: ['cinetica-equilibrio'],
  tags: ['termoquímica', 'entalpía', 'ΔH', 'calor', 'hess', 'exotérmica', 'endotérmica'],
};
