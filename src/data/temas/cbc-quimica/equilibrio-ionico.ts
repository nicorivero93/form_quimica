import type { Tema } from '@/types/tema';

export const equilibrioIonico: Tema = {
  slug: 'equilibrio-ionico-acidos-debiles',
  titulo: 'Equilibrio iónico: ácidos y bases débiles',
  anios: ['cbc-quimica'],
  area: 'acido-base',
  nivel: 'avanzado',
  resumen:
    'Cómo calcular el pH de soluciones de ácidos débiles (Ka), bases débiles (Kb) y de las sales que producen al neutralizarse (hidrólisis).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Los ácidos fuertes se disocian completamente, pero los **ácidos débiles** se disocian solo parcialmente, alcanzando un equilibrio. La constante de equilibrio en este caso se llama **constante de acidez** ($K_a$).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Constante de acidez',
      texto:
        'Para $HA \\rightleftharpoons H^+ + A^-$: $K_a = \\dfrac{[H^+][A^-]}{[HA]}$. Cuanto **mayor** $K_a$ (o menor $pK_a$), más fuerte el ácido.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Ácido', 'Ka', 'pKa'],
      filas: [
        ['HCl', '~10⁶', '~−6'],
        ['H₂SO₄ (1ra ionización)', '~10³', '~−3'],
        ['HSO₄⁻', '1,2 × 10⁻²', '1,92'],
        ['H₃PO₄', '7,5 × 10⁻³', '2,12'],
        ['HF', '6,8 × 10⁻⁴', '3,17'],
        ['CH₃COOH (acético)', '1,8 × 10⁻⁵', '4,76'],
        ['H₂CO₃', '4,3 × 10⁻⁷', '6,37'],
        ['NH₄⁺', '5,6 × 10⁻¹⁰', '9,25'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Aproximación de Henderson',
      texto:
        'Cuando $C_a / K_a > 100$ (ácido relativamente diluido y débil), podés despreciar lo que se disocia frente a la concentración inicial: $[H^+] \\approx \\sqrt{K_a \\cdot C_a}$. Equivalente: $pH \\approx \\tfrac{1}{2}(pK_a - \\log C_a)$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para una **sal** disuelta en agua, la base/ácido conjugada del ion débil puede hidrolizarse cambiando el pH. Por ejemplo, el acetato de sodio (sal de ácido débil + base fuerte) da solución básica porque $CH_3COO^-$ acepta un H⁺ del agua.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Sal de...', 'pH resultante', 'Ejemplo'],
      filas: [
        ['ácido fuerte + base fuerte', '7 (neutro)', 'NaCl'],
        ['ácido fuerte + base débil', '< 7 (ácido)', 'NH₄Cl'],
        ['ácido débil + base fuerte', '> 7 (básico)', 'CH₃COONa'],
        ['ácido débil + base débil', 'depende de Ka vs Kb', 'NH₄F'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Relación Ka-Kb',
      texto:
        'Para un par ácido-base conjugado: $K_a \\cdot K_b = K_w = 10^{-14}$. Equivalente en logs: $pK_a + pK_b = 14$.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Constante de acidez',
      latex: 'K_a = \\dfrac{[H^+][A^-]}{[HA]}',
      variables: [],
    },
    {
      nombre: 'Aproximación para ácido débil',
      latex: '[H^+] \\approx \\sqrt{K_a \\cdot C_a}',
      variables: [
        { simbolo: 'C_a', nombre: 'concentración inicial del ácido', unidad: 'mol/L' },
      ],
      cuandoUsar: 'Solo cuando $C_a / K_a > 100$ (es decir, la disociación es muy chica respecto a $C_a$).',
    },
    {
      nombre: 'Relación conjugados',
      latex: 'K_a \\cdot K_b = K_w = 10^{-14}',
      variables: [],
    },
  ],
  ejemplos: [
    {
      titulo: 'pH de un ácido débil',
      enunciado:
        'Calculá el pH de una solución 0,1 M de ácido acético ($K_a = 1{,}8 \\times 10^{-5}$).',
      pasos: [
        {
          explicacion:
            'Verificamos la aproximación: $C_a/K_a = 0{,}1 / 1{,}8\\times 10^{-5} \\approx 5500 > 100$ ✓.',
        },
        {
          explicacion: 'Aplicamos la fórmula aproximada.',
          latex: '[H^+] \\approx \\sqrt{K_a \\cdot C_a} = \\sqrt{1{,}8 \\times 10^{-5} \\cdot 0{,}1} = \\sqrt{1{,}8 \\times 10^{-6}} \\approx 1{,}34 \\times 10^{-3} \\, M',
        },
        {
          explicacion: 'Calculamos el pH.',
          latex: 'pH = -\\log(1{,}34 \\times 10^{-3}) \\approx 2{,}87',
        },
      ],
      resultado: 'pH ≈ 2,87.',
    },
    {
      titulo: 'pH de una sal',
      enunciado:
        '¿Cómo será el pH (ácido / neutro / básico) de una solución de $NH_4Cl$? Justificá.',
      pasos: [
        {
          explicacion:
            'NH₄Cl viene del ácido fuerte HCl + base débil NH₃. La sal es de ácido fuerte + base débil.',
        },
        {
          explicacion:
            'El catión $NH_4^+$ es el ácido conjugado del NH₃ y se hidroliza: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$.',
        },
        {
          explicacion:
            'Genera $H^+$ → pH < 7.',
        },
      ],
      resultado: 'La solución es ácida (pH < 7).',
    },
  ],
  erroresComunes: [
    'Aplicar la aproximación $[H^+] = \\sqrt{K_a C_a}$ cuando $C_a / K_a < 100$. En ese caso hay que resolver la cuadrática completa.',
    'Olvidarse que $K_a$ depende de la TEMPERATURA. Las tablas suelen ser a 25 °C.',
    'Confundir $K_a$ del ácido con $K_b$ de su base conjugada. Están relacionados por $K_w$.',
    'Asumir que toda sal "es neutra". Las sales hidrolizan según los caracteres de su ácido y base de origen.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si el pKa del ácido benzoico es 4,2, ¿cuánto vale Ka? Da el resultado como exponente: $K_a = 10^{-x}$ → x = ?',
        respuesta: 4.2,
        tolerancia: 0.05,
        explicacion: '$pK_a = -\\log K_a$ → $K_a = 10^{-pK_a} = 10^{-4{,}2}$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué pH tiene una solución de Na₂CO₃ (carbonato de sodio)?',
        opciones: ['ácido (< 7)', 'neutro (7)', 'básico (> 7)', 'depende de la concentración'],
        correcta: 2,
        explicacion:
          'Sal de ácido débil (H₂CO₃) + base fuerte (NaOH) → básica. CO₃²⁻ se hidroliza dando OH⁻.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para un par conjugado, si pKa = 4 entonces pKb = 10.',
        respuesta: true,
        explicacion: '$pK_a + pK_b = 14$ → si $pK_a = 4$, $pK_b = 10$.',
      },
    ],
  },
  relacionados: ['ph-poh', 'neutralizacion'],
  tags: ['equilibrio iónico', 'Ka', 'Kb', 'pKa', 'hidrólisis', 'ácido débil', 'base débil'],
};
