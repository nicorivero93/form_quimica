import type { Tema } from '@/types/tema';

export const nernstElectroquimica: Tema = {
  slug: 'nernst-electroquimica-cuantitativa',
  titulo: 'Ecuación de Nernst y electrólisis cuantitativa',
  anios: ['cbc-quimica'],
  area: 'redox',
  nivel: 'avanzado',
  resumen:
    'Cómo varía el potencial de una pila con la concentración (Nernst) y cuántos gramos de producto se obtienen en una electrólisis (Faraday).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Hasta ahora calculábamos $E^{\\circ}_{pila}$ a condiciones estándar (1 M, 1 atm, 25 °C). En la realidad, las concentraciones cambian a medida que la pila funciona (se consume reactivo, se acumula producto). La **ecuación de Nernst** te dice cómo varía el potencial con esas concentraciones.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ecuación de Nernst',
      texto:
        'Para una reacción $aA + bB \\to cC + dD$ con $n$ electrones transferidos:',
    },
    {
      tipo: 'latex',
      latex: 'E = E^{\\circ} - \\dfrac{RT}{nF} \\ln Q',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'A 25 °C, simplificamos a:',
    },
    {
      tipo: 'latex',
      latex: 'E = E^{\\circ} - \\dfrac{0{,}0592}{n} \\log Q',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cuando Q = K (equilibrio)',
      texto:
        'En equilibrio, $E = 0$ → la pila está agotada. Combinando: $E^{\\circ} = (RT/nF) \\ln K$, lo que conecta termodinámica y electroquímica.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En **electrólisis**, una fuente externa fuerza una reacción no espontánea (ej. obtener Al puro a partir de Al₂O₃). Las **leyes de Faraday** te dicen cuánto producto sale en función de la corriente y el tiempo:',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Leyes de Faraday',
      texto:
        '(1) La masa depositada/liberada es proporcional a la carga eléctrica que pasa. (2) La masa también es proporcional al "equivalente químico" (M/n).',
    },
    {
      tipo: 'latex',
      latex: 'm = \\dfrac{M \\cdot I \\cdot t}{n \\cdot F}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Constante', 'Valor', 'Significado'],
      filas: [
        ['F (Faraday)', '96\\,485 C/mol', 'carga de 1 mol de electrones'],
        ['1 mol e⁻', '6,022 × 10²³', 'número de Avogadro'],
        ['Carga del e⁻', '1,602 × 10⁻¹⁹ C', 'carga elemental'],
      ],
    },
  ],
  formulasClave: [
    {
      nombre: 'Nernst general',
      latex: 'E = E^{\\circ} - \\dfrac{RT}{nF} \\ln Q',
      variables: [
        { simbolo: 'n', nombre: 'electrones transferidos', unidad: '—' },
        { simbolo: 'F', nombre: 'constante de Faraday', unidad: '96\\,485 C/mol' },
        { simbolo: 'Q', nombre: 'cociente de reacción', unidad: '—' },
      ],
    },
    {
      nombre: 'Nernst a 25 °C',
      latex: 'E = E^{\\circ} - \\dfrac{0{,}0592}{n} \\log Q',
      variables: [],
      cuandoUsar: 'La forma más usada en problemas. R, T y F ya están agrupados.',
    },
    {
      nombre: 'Faraday — masa electrolizada',
      latex: 'm = \\dfrac{M \\cdot I \\cdot t}{n \\cdot F}',
      variables: [
        { simbolo: 'm', nombre: 'masa depositada', unidad: 'g' },
        { simbolo: 'M', nombre: 'masa molar', unidad: 'g/mol' },
        { simbolo: 'I', nombre: 'corriente', unidad: 'A' },
        { simbolo: 't', nombre: 'tiempo', unidad: 's' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Voltaje de pila no estándar',
      enunciado:
        'Una pila Daniell tiene $[Cu^{2+}] = 0{,}010 \\, M$ y $[Zn^{2+}] = 1{,}0 \\, M$. ¿Qué voltaje genera? ($E^{\\circ}_{pila} = 1{,}10 \\, V$)',
      pasos: [
        {
          explicacion:
            'Reacción: $Zn + Cu^{2+} \\to Zn^{2+} + Cu$. Q = [Zn²⁺]/[Cu²⁺] = 1/0,010 = 100. n = 2 electrones.',
        },
        {
          explicacion: 'Aplicamos Nernst a 25 °C.',
          latex: 'E = 1{,}10 - \\dfrac{0{,}0592}{2} \\log(100)',
        },
        {
          explicacion: 'Calculamos.',
          latex: 'E = 1{,}10 - 0{,}0296 \\cdot 2 = 1{,}10 - 0{,}059 \\approx 1{,}04 \\, V',
        },
      ],
      resultado: 'E ≈ 1,04 V (un poco menos que el estándar porque el cobre está más diluido).',
    },
    {
      titulo: 'Cuántos gramos de Cu se depositan',
      enunciado:
        'Pasamos una corriente de 5 A durante 30 min a través de una solución de CuSO₄. ¿Cuántos gramos de Cu se depositan? (M(Cu) = 63,5; n=2)',
      pasos: [
        {
          explicacion: 'Pasamos t a segundos: $30 \\cdot 60 = 1800 \\, s$.',
        },
        {
          explicacion: 'Aplicamos Faraday.',
          latex: 'm = \\dfrac{63{,}5 \\cdot 5 \\cdot 1800}{2 \\cdot 96\\,485}',
        },
        {
          explicacion: 'Calculamos.',
          latex: 'm = \\dfrac{571\\,500}{192\\,970} \\approx 2{,}96 \\, g',
        },
      ],
      resultado: 'Se depositan ≈ 2,96 g de Cu.',
    },
  ],
  erroresComunes: [
    'Olvidarse del signo en Nernst. La fórmula es $E = E^{\\circ} - (...) \\log Q$. Si Q > 1 baja el voltaje, si Q < 1 sube.',
    'No identificar correctamente el número de electrones n. Mirá la semirreacción balanceada.',
    'Confundir Q con K. Q es en cualquier momento; K es solo en equilibrio.',
    'Mezclar unidades de tiempo (segundos vs. minutos) en la fórmula de Faraday. Siempre segundos.',
    'Usar $\\log$ con base 10 cuando la fórmula original con $RT/nF$ usa $\\ln$ (natural). Ojo a qué versión usás.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'En una pila a 25 °C con n=2 y Q=10, ¿cuánto se reduce el voltaje respecto a $E^{\\circ}$? (en V)',
        respuesta: 0.0296,
        tolerancia: 0.002,
        unidad: 'V',
        explicacion: '$\\Delta E = (0{,}0592/2) \\cdot \\log 10 = 0{,}0296 \\cdot 1 = 0{,}0296 \\, V$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la carga de 1 mol de electrones?',
        opciones: ['9,11 × 10⁻³¹ C', '6,022 × 10²³ C', '96\\,485 C', '1,602 × 10⁻¹⁹ C'],
        correcta: 2,
        explicacion: '1 F = 96\\,485 C/mol = N_A × carga del electrón.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Cuando una pila se descarga totalmente, $E = E^{\\circ}$.',
        respuesta: false,
        explicacion: 'Cuando se descarga, $E = 0$ (equilibrio: Q = K). $E^{\\circ}$ es el valor a condiciones estándar.',
      },
    ],
  },
  relacionados: ['pilas-electroquimica', 'reacciones-redox'],
  tags: ['nernst', 'electroquímica', 'faraday', 'electrólisis', 'potencial', 'pila'],
};
