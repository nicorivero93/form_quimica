import type { Tema } from '@/types/tema';

export const cineticaAvanzada: Tema = {
  slug: 'cinetica-avanzada-integradas',
  titulo: 'Cinética avanzada: leyes integradas y vida media',
  anios: ['cbc-quimica'],
  area: 'cinetica-equilibrio',
  nivel: 'avanzado',
  resumen:
    'Cómo evoluciona la concentración con el tiempo según el orden de reacción. Vida media y aplicaciones (decaimiento, farmacocinética).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En cinética básica trabajábamos con velocidades instantáneas. En este nivel **integramos** la ley de velocidad para obtener la concentración como función del tiempo. La forma de la solución depende del **orden** de reacción.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Orden', 'Ley de velocidad', 'Forma integrada', 'Vida media (t½)', 'Gráfico lineal'],
      filas: [
        ['0', '$v = k$', '$[A] = [A]_0 - kt$', '$\\dfrac{[A]_0}{2k}$', '[A] vs t'],
        ['1', '$v = k[A]$', '$\\ln[A] = \\ln[A]_0 - kt$', '$\\dfrac{\\ln 2}{k}$', '$\\ln[A]$ vs t'],
        ['2', '$v = k[A]^2$', '$\\dfrac{1}{[A]} = \\dfrac{1}{[A]_0} + kt$', '$\\dfrac{1}{k[A]_0}$', '$1/[A]$ vs t'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Vida media (t½)',
      texto:
        'Tiempo necesario para que la concentración del reactivo caiga a la mitad de su valor inicial. **Solo en orden 1 es independiente de la concentración** — por eso se usa en decaimiento radiactivo y eliminación de fármacos en sangre.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo determinar el orden experimentalmente',
      texto:
        'Tomás datos de [A] vs t y los graficás de tres formas: [A] vs t (orden 0), $\\ln[A]$ vs t (orden 1), $1/[A]$ vs t (orden 2). El que dé recta es el orden correcto. La pendiente es ±k.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La **ecuación de Arrhenius** linealizada permite determinar la energía de activación experimentalmente:',
    },
    {
      tipo: 'latex',
      latex: '\\ln k = \\ln A - \\dfrac{E_a}{R} \\cdot \\dfrac{1}{T}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Mecanismos y orden',
      texto:
        'El orden de la ley de velocidad NO es el número de reactivos en la ecuación, sino que refleja el **paso lento** del mecanismo. Una reacción $A + B + C \\to D$ puede ser orden 1 si el paso lento solo involucra a A.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Orden 1 — concentración vs tiempo',
      latex: '[A] = [A]_0 \\, e^{-kt}',
      variables: [
        { simbolo: '[A]_0', nombre: 'concentración inicial', unidad: 'mol/L' },
        { simbolo: 'k', nombre: 'constante de velocidad', unidad: 's⁻¹' },
        { simbolo: 't', nombre: 'tiempo', unidad: 's' },
      ],
    },
    {
      nombre: 'Vida media de orden 1',
      latex: 't_{1/2} = \\dfrac{\\ln 2}{k} = \\dfrac{0{,}693}{k}',
      variables: [],
      cuandoUsar: 'Decaimiento radiactivo, eliminación farmacológica de primer orden.',
    },
    {
      nombre: 'Arrhenius linealizada',
      latex: '\\ln \\dfrac{k_2}{k_1} = -\\dfrac{E_a}{R}\\left(\\dfrac{1}{T_2} - \\dfrac{1}{T_1}\\right)',
      variables: [
        { simbolo: 'E_a', nombre: 'energía de activación', unidad: 'J/mol' },
        { simbolo: 'R', nombre: 'constante de los gases', unidad: '8,314 J/(mol·K)' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Vida media en orden 1',
      enunciado:
        'Una reacción de primer orden tiene $k = 0{,}05 \\, s^{-1}$. Calculá su vida media.',
      pasos: [
        {
          explicacion: 'Aplicamos directo la fórmula.',
          latex: 't_{1/2} = \\dfrac{0{,}693}{0{,}05} = 13{,}86 \\, s',
        },
      ],
      resultado: 't½ ≈ 13,9 s.',
    },
    {
      titulo: 'Concentración después de 2 vidas medias',
      enunciado:
        'Si $[A]_0 = 1 \\, M$ y la reacción es de orden 1, ¿qué concentración queda después de 2 vidas medias?',
      pasos: [
        {
          explicacion:
            'Cada vida media reduce a la mitad. Después de 1 t½: 0,5 M. Después de 2 t½: 0,25 M.',
        },
        {
          explicacion: 'Equivalente: $[A] = [A]_0 \\cdot (1/2)^n$ con n = 2.',
          latex: '[A] = 1 \\cdot 0{,}5^2 = 0{,}25 \\, M',
        },
      ],
      resultado: '0,25 M (1/4 del inicial).',
    },
    {
      titulo: 'Energía de activación de Arrhenius',
      enunciado:
        'Si $k$ se duplica al subir T de 300 a 310 K, ¿cuánto vale $E_a$? (R = 8,314)',
      pasos: [
        {
          explicacion: 'De Arrhenius: $\\ln(k_2/k_1) = -(E_a/R)(1/T_2 - 1/T_1)$.',
        },
        {
          explicacion: 'Reemplazamos $k_2/k_1 = 2$.',
          latex: '\\ln 2 = -\\dfrac{E_a}{8{,}314}\\left(\\dfrac{1}{310} - \\dfrac{1}{300}\\right)',
        },
        {
          explicacion: 'Calculamos el paréntesis.',
          latex: '\\dfrac{1}{310} - \\dfrac{1}{300} = -1{,}075 \\times 10^{-4} \\, K^{-1}',
        },
        {
          explicacion: 'Despejamos.',
          latex: 'E_a = \\dfrac{0{,}693 \\cdot 8{,}314}{1{,}075 \\times 10^{-4}} \\approx 53\\,600 \\, J/mol',
        },
      ],
      resultado: 'Ea ≈ 53,6 kJ/mol.',
    },
  ],
  erroresComunes: [
    'Aplicar la fórmula de t½ de orden 1 en una reacción de orden 2 (donde t½ depende de la concentración inicial).',
    'Confundir $k$ (constante de velocidad) con $K_{eq}$ (constante de equilibrio). k mide rapidez, K mide extensión.',
    'Usar T en Celsius en Arrhenius. Siempre Kelvin.',
    'Pensar que el orden coincide con los coeficientes estequiométricos. Solo en reacciones elementales (un solo paso).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Una reacción de orden 1 tiene t½ = 30 s. ¿Cuánto vale k? (en s⁻¹, 3 decimales)',
        respuesta: 0.023,
        tolerancia: 0.002,
        unidad: 's⁻¹',
        explicacion: '$k = 0{,}693 / 30 \\approx 0{,}0231 \\, s^{-1}$.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Para determinar si una reacción es de orden 1, graficamos:',
        opciones: ['[A] vs t', '$\\ln[A]$ vs t', '$1/[A]$ vs t', 't vs $T^2$'],
        correcta: 1,
        explicacion: 'En orden 1, $\\ln[A]$ vs t da una recta de pendiente $-k$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En orden 1, la vida media depende de la concentración inicial.',
        respuesta: false,
        explicacion: 'NO: $t_{1/2} = \\ln 2 / k$, no aparece $[A]_0$. Por eso se usa en decaimiento radiactivo.',
      },
    ],
  },
  relacionados: ['cinetica-quimica'],
  tags: ['cinética avanzada', 'vida media', 'orden 1', 'arrhenius', 'integradas', 'farmacocinética'],
};
