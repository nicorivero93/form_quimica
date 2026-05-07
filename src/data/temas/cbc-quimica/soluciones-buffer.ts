import type { Tema } from '@/types/tema';

export const solucionesBuffer: Tema = {
  slug: 'soluciones-buffer-henderson',
  titulo: 'Soluciones reguladoras (buffer) y Henderson-Hasselbalch',
  anios: ['cbc-quimica'],
  area: 'acido-base',
  nivel: 'avanzado',
  resumen:
    'Cómo preparar soluciones que mantienen el pH casi constante incluso al agregar ácido o base. Indispensable en bioquímica.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una **solución buffer** (reguladora, amortiguadora) resiste cambios de pH cuando le agregás pequeñas cantidades de ácido o base fuertes. Está formada por un ácido débil y su base conjugada (o una base débil y su ácido conjugado) en concentraciones similares.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cómo funciona',
      texto:
        'Si agregás un ácido fuerte, la base conjugada del buffer lo neutraliza. Si agregás una base fuerte, el ácido del buffer la neutraliza. Las concentraciones de ambos componentes cambian un poco, pero su cociente se mantiene similar → el pH casi no cambia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La fórmula clave es la **ecuación de Henderson-Hasselbalch**, que sale de aplicar log a la expresión de Ka:',
    },
    {
      tipo: 'latex',
      latex: 'pH = pK_a + \\log \\dfrac{[A^-]}{[HA]}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Diseñá tu buffer',
      texto:
        'Elegí un ácido débil con $pK_a$ cercano al pH que querés ($pK_a \\pm 1$). Después ajustás la relación $[A^-]/[HA]$. Si querés pH = pKa, hacé concentraciones iguales (relación 1).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Buffer biológico', 'pKa', 'Rango útil'],
      filas: [
        ['Acetato (CH₃COOH/CH₃COO⁻)', '4,76', '3,8 - 5,8'],
        ['Carbonato (H₂CO₃/HCO₃⁻)', '6,37', '5,4 - 7,4'],
        ['Fosfato (H₂PO₄⁻/HPO₄²⁻)', '7,21', '6,2 - 8,2'],
        ['Tris (Tris-HCl)', '8,06', '7,0 - 9,0'],
        ['Amonio (NH₄⁺/NH₃)', '9,25', '8,2 - 10,2'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Capacidad amortiguadora',
      texto:
        'Un buffer no es infinito: si le agregás demasiado ácido o base, se "rompe" cuando uno de sus componentes se consume. La capacidad es máxima cuando $[A^-] = [HA]$ (pH = pKa).',
    },
    {
      tipo: 'parrafo',
      texto:
        'En el cuerpo humano hay tres sistemas buffer principales: bicarbonato (sangre, pH 7,4), fosfato (intracelular) y proteínas (hemoglobina). Sin ellos, cualquier cambio en CO₂ o ácido láctico cambiaría drásticamente el pH y nos mataría rápido.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Henderson-Hasselbalch',
      latex: 'pH = pK_a + \\log \\dfrac{[\\text{base conjugada}]}{[\\text{ácido}]}',
      variables: [
        { simbolo: 'pK_a', nombre: 'pKa del ácido débil', unidad: '—' },
        { simbolo: '[A^-]', nombre: 'conc. base conjugada', unidad: 'mol/L' },
        { simbolo: '[HA]', nombre: 'conc. ácido', unidad: 'mol/L' },
      ],
    },
    {
      nombre: 'Buffer básico (versión Kb)',
      latex: 'pOH = pK_b + \\log \\dfrac{[BH^+]}{[B]}',
      variables: [],
      cuandoUsar: 'Cuando partís de una base débil B y su ácido conjugado BH⁺.',
    },
  ],
  ejemplos: [
    {
      titulo: 'pH de un buffer acético',
      enunciado:
        'Mezclamos 0,2 M de ácido acético con 0,3 M de acetato de sodio. ¿Qué pH tiene? ($pK_a = 4{,}76$)',
      pasos: [
        {
          explicacion: 'Aplicamos Henderson-Hasselbalch directamente.',
          latex: 'pH = 4{,}76 + \\log\\dfrac{0{,}3}{0{,}2}',
        },
        {
          explicacion: 'Calculamos el log.',
          latex: '\\log(1{,}5) \\approx 0{,}176',
        },
        {
          explicacion: 'Sumamos.',
          latex: 'pH = 4{,}76 + 0{,}176 \\approx 4{,}94',
        },
      ],
      resultado: 'pH ≈ 4,94 (un poquito más básico que el pKa porque hay más conjugada).',
    },
    {
      titulo: 'Diseñar un buffer para pH 7,4',
      enunciado:
        '¿Qué relación [HPO₄²⁻]/[H₂PO₄⁻] necesito para tener un buffer fosfato a pH 7,4? ($pK_a = 7{,}21$)',
      pasos: [
        {
          explicacion: 'Despejamos la relación.',
          latex: '\\log\\dfrac{[A^-]}{[HA]} = pH - pK_a = 7{,}4 - 7{,}21 = 0{,}19',
        },
        {
          explicacion: 'Tomamos antilogaritmo.',
          latex: '\\dfrac{[HPO_4^{2-}]}{[H_2 PO_4^-]} = 10^{0{,}19} \\approx 1{,}55',
        },
      ],
      resultado:
        'Relación ≈ 1,55 (es decir, ~60% como $HPO_4^{2-}$ y ~40% como $H_2 PO_4^-$).',
    },
  ],
  erroresComunes: [
    'Usar Henderson-Hasselbalch con un ácido fuerte (HCl, HNO₃). No vale: la fórmula asume disociación parcial.',
    'Olvidarse que las cantidades dentro del log son moles, NO masas ni gramos.',
    'Pensar que el buffer puede neutralizar cantidades arbitrarias. Tiene capacidad limitada.',
    'Confundir buffer "ácido" con buffer de pH ácido. El buffer puede tener pH 4 (acetato) o pH 9 (amonio); ambos amortiguan, solo cambia la zona de acción.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si $[A^-] = [HA]$ y $pK_a = 5{,}2$, ¿qué pH tiene el buffer?',
        respuesta: 5.2,
        tolerancia: 0.05,
        explicacion:
          'Con relación 1, $\\log 1 = 0$, así que $pH = pK_a$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Para preparar un buffer de pH 7, conviene usar:',
        opciones: ['Acetato (pKa 4,76)', 'Fosfato (pKa 7,21)', 'Amonio (pKa 9,25)', 'Cualquiera'],
        correcta: 1,
        explicacion: 'El buffer mejor amortigua cerca de su pKa. 7,21 está más cerca de 7.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La capacidad amortiguadora de un buffer es máxima cuando pH = pKa.',
        respuesta: true,
        explicacion:
          'En ese punto, $[A^-] = [HA]$ y la solución resiste igual ataque ácido o básico.',
      },
    ],
  },
  relacionados: ['equilibrio-ionico-acidos-debiles', 'ph-poh'],
  tags: ['buffer', 'reguladora', 'henderson hasselbalch', 'pKa', 'capacidad amortiguadora', 'bioquímica'],
};
