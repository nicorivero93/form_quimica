import type { Tema } from '@/types/tema';

export const equilibrio: Tema = {
  slug: 'equilibrio-quimico',
  titulo: 'Equilibrio químico y Le Chatelier',
  anios: ['secundaria-5'],
  area: 'cinetica-equilibrio',
  nivel: 'intermedio',
  resumen:
    'Reacciones reversibles, constante de equilibrio (Keq) y cómo predecir hacia dónde se desplaza el equilibrio cuando perturbás el sistema.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Algunas reacciones no son completas: cuando llegás a cierta concentración de productos, la reacción inversa empieza a ser tan rápida como la directa y el sistema queda en un **equilibrio dinámico**. Las reacciones siguen ocurriendo, pero las concentraciones netas no cambian.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Constante de equilibrio',
      texto:
        'Para $aA + bB \\rightleftharpoons cC + dD$, en el equilibrio: $K_{eq} = \\dfrac{[C]^c [D]^d}{[A]^a [B]^b}$. Solo depende de la temperatura.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Valor de K', 'Significado'],
      filas: [
        ['$K \\gg 1$', 'predominan los productos (la reacción es casi completa hacia la derecha)'],
        ['$K \\approx 1$', 'concentraciones similares de reactivos y productos'],
        ['$K \\ll 1$', 'predominan los reactivos (poco avance)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Principio de Le Chatelier',
      texto:
        'Si perturbás un sistema en equilibrio (cambiás concentración, presión o temperatura), el sistema se desplaza para **contrarrestar** la perturbación.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Perturbación', 'Desplazamiento'],
      filas: [
        ['Aumenta [reactivo]', 'hacia los productos'],
        ['Aumenta [producto]', 'hacia los reactivos'],
        ['Aumenta P (gases)', 'hacia el lado con menos moles de gas'],
        ['Aumenta T (exotérmica)', 'hacia los reactivos (absorbe el calor extra)'],
        ['Aumenta T (endotérmica)', 'hacia los productos'],
        ['Catalizador', 'no desplaza, solo acelera'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Sólidos y líquidos puros',
      texto:
        'No se incluyen en la expresión de $K_{eq}$ porque su "concentración" es esencialmente constante. Por ejemplo, en $CaCO_3 (s) \\rightleftharpoons CaO (s) + CO_2 (g)$, $K_{eq} = [CO_2]$.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Constante de equilibrio (concentraciones)',
      latex: 'K_c = \\dfrac{[C]^c [D]^d}{[A]^a [B]^b}',
      variables: [
        { simbolo: 'K_c', nombre: 'constante en concentraciones', unidad: '— (depende de la rxn)' },
        { simbolo: '[X]', nombre: 'concentración molar en equilibrio', unidad: 'mol/L' },
      ],
    },
    {
      nombre: 'Cociente de reacción',
      latex: 'Q = \\dfrac{[C]^c [D]^d}{[A]^a [B]^b}',
      variables: [],
      cuandoUsar:
        'Misma fórmula que K pero con concentraciones EN CUALQUIER MOMENTO. Si Q < K → avanza hacia productos. Si Q > K → retrocede. Si Q = K → equilibrio.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cálculo de Keq',
      enunciado:
        'Para $N_2 + 3 H_2 \\rightleftharpoons 2 NH_3$, en el equilibrio: $[N_2]=0{,}5$, $[H_2]=2$, $[NH_3]=1$ M. Calculá Keq.',
      pasos: [
        {
          explicacion: 'Aplicamos la fórmula con los coeficientes al cuadrado/cubo según la ecuación.',
          latex: 'K_c = \\dfrac{[NH_3]^2}{[N_2][H_2]^3}',
        },
        {
          explicacion: 'Reemplazamos.',
          latex: 'K_c = \\dfrac{(1)^2}{(0{,}5)(2)^3} = \\dfrac{1}{0{,}5 \\times 8} = \\dfrac{1}{4} = 0{,}25',
        },
      ],
      resultado: 'Keq = 0,25 (predominan reactivos en este equilibrio).',
    },
    {
      titulo: 'Le Chatelier: aumentar la presión',
      enunciado:
        'En el equilibrio $N_2 (g) + 3 H_2 (g) \\rightleftharpoons 2 NH_3 (g)$, ¿hacia dónde se desplaza si aumentás la presión?',
      pasos: [
        {
          explicacion: 'Contamos moles de gas en cada lado: reactivos = 1+3 = 4 mol; productos = 2 mol.',
        },
        {
          explicacion:
            'Al aumentar P, el sistema se contrae hacia el lado con MENOS moles de gas (productos).',
        },
      ],
      resultado: 'Se desplaza hacia la derecha (más NH₃). Por eso Haber-Bosch usa altas presiones.',
    },
  ],
  erroresComunes: [
    'Incluir sólidos o líquidos puros en la expresión de Keq. Solo van gases y soluciones.',
    'Olvidarse de elevar las concentraciones a sus coeficientes estequiométricos.',
    'Pensar que un catalizador desplaza el equilibrio. NO: solo acelera ambas direcciones por igual.',
    'Confundir velocidad con extensión. Un equilibrio puede alcanzarse rápido o lento, pero la K solo dice qué tanto se forma producto.',
    'No usar las mismas unidades en todos los términos (todos M, todos atm, etc).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Si Keq = 1×10⁻⁵, en el equilibrio:',
        opciones: [
          'predominan los productos',
          'predominan los reactivos',
          'reactivos y productos están al 50%',
          'la reacción no ocurre',
        ],
        correcta: 1,
        explicacion: 'K muy pequeño = los reactivos son mucho mayores que los productos en el equilibrio.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'En $2 SO_2 + O_2 \\rightleftharpoons 2 SO_3$ (exotérmica), aumentar la temperatura:',
        opciones: [
          'desplaza hacia productos',
          'desplaza hacia reactivos',
          'no afecta el equilibrio',
          'solo afecta la velocidad',
        ],
        correcta: 1,
        explicacion: 'Aumentar T en una exotérmica desplaza hacia reactivos (donde se absorbe calor).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un catalizador aumenta el valor de Keq.',
        respuesta: false,
        explicacion:
          'Un catalizador acelera ambas direcciones por igual: el equilibrio se alcanza más rápido pero K no cambia.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Para $A + B \\rightleftharpoons C$, en equilibrio $[A]=2 \\, M$, $[B]=4 \\, M$, $[C]=8 \\, M$. ¿Cuánto vale Keq?',
        respuesta: 1,
        tolerancia: 0.05,
        explicacion: '$K_c = [C] / ([A][B]) = 8 / (2 \\times 4) = 1$.',
      },
    ],
  },
  visualizadorId: 'le-chatelier',
  relacionados: ['termoquimica', 'cinetica-quimica'],
  tags: ['equilibrio', 'Keq', 'Le Chatelier', 'reversible', 'desplazamiento'],
};
