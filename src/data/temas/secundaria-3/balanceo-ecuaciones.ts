import type { Tema } from '@/types/tema';

export const balanceoEcuaciones: Tema = {
  slug: 'balanceo-ecuaciones',
  titulo: 'Balanceo de ecuaciones químicas',
  anios: ['secundaria-3'],
  area: 'estequiometria',
  nivel: 'intermedio',
  resumen:
    'Cómo poner los coeficientes correctos para que la cantidad de átomos de cada elemento sea igual en reactivos y productos (ley de Lavoisier).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Por la **ley de conservación de la masa** (Lavoisier), la cantidad de átomos de cada elemento debe ser la misma a la izquierda y a la derecha de la flecha. Si no es así, la ecuación está **sin balancear** y hay que ponerle coeficientes.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Coeficientes vs subíndices',
      texto:
        'Los **subíndices** (los chiquitos abajo) NO se tocan: dependen de la fórmula del compuesto. Los **coeficientes** (delante de la fórmula) sí se cambian para balancear.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Cambiar un subíndice cambia el compuesto. Si en H₂O ponés H₃O ya no es agua. **Solo se tocan los coeficientes**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **método del tanteo** sirve para la mayoría de las ecuaciones que vas a ver en secundaria. Pasos:',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Pasos del tanteo',
      texto:
        '(1) Escribí la ecuación sin balancear. (2) Contá los átomos de cada elemento en cada lado. (3) Empezá balanceando los **metales**, después los **no metales** distintos del O y H. (4) Balanceá **oxígeno**. (5) Por último el **hidrógeno**. (6) Verificá todo de nuevo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Estrategias útiles:',
    },
    {
      tipo: 'lista',
      items: [
        'Si un elemento aparece en muchos productos, dejalo para el final.',
        'Si te da fracciones (ej. coeficiente 5/2), multiplicá toda la ecuación por 2.',
        'Los coeficientes finales deben ser los más chicos posibles (relación mínima).',
      ],
    },
    {
      tipo: 'tabla',
      encabezados: ['Reacción', 'Sin balancear', 'Balanceada'],
      filas: [
        ['Combustión del H₂', 'H₂ + O₂ → H₂O', '2 H₂ + O₂ → 2 H₂O'],
        ['Combustión del metano', 'CH₄ + O₂ → CO₂ + H₂O', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O'],
        ['Síntesis del NH₃', 'N₂ + H₂ → NH₃', 'N₂ + 3 H₂ → 2 NH₃'],
        ['Descomposición H₂O₂', 'H₂O₂ → H₂O + O₂', '2 H₂O₂ → 2 H₂O + O₂'],
        ['Herrumbre', 'Fe + O₂ → Fe₂O₃', '4 Fe + 3 O₂ → 2 Fe₂O₃'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Balancear la combustión del propano',
      enunciado: 'Balancear: $C_3 H_8 + O_2 \\to CO_2 + H_2 O$.',
      pasos: [
        {
          explicacion: '**Carbono primero**: hay 3 C a la izquierda → coeficiente 3 en CO₂.',
          latex: 'C_3 H_8 + O_2 \\to 3\\,CO_2 + H_2 O',
        },
        {
          explicacion: '**Hidrógeno**: 8 H a la izquierda → coeficiente 4 en H₂O (4 × 2 = 8).',
          latex: 'C_3 H_8 + O_2 \\to 3\\,CO_2 + 4\\,H_2 O',
        },
        {
          explicacion:
            '**Oxígeno**: a la derecha hay $3 \\times 2 + 4 \\times 1 = 10$ O. A la izquierda son moléculas de O₂ → necesitamos 5 (5 × 2 = 10).',
          latex: 'C_3 H_8 + 5\\,O_2 \\to 3\\,CO_2 + 4\\,H_2 O',
        },
        {
          explicacion: 'Verificamos: C: 3=3 ✓. H: 8=8 ✓. O: 10=10 ✓.',
        },
      ],
      resultado: 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.',
    },
    {
      titulo: 'Balancear con hierro y oxígeno',
      enunciado: 'Balancear: $Fe + O_2 \\to Fe_2 O_3$.',
      pasos: [
        {
          explicacion: 'Empezamos con Fe (hay 2 en producto): coeficiente 2 en Fe.',
          latex: '2\\,Fe + O_2 \\to Fe_2 O_3',
        },
        {
          explicacion:
            'O: derecha tiene 3, izquierda 2 → mcm = 6. Coeficientes: 3 en O₂ (3×2=6), 2 en Fe₂O₃ (2×3=6).',
          latex: '2\\,Fe + 3\\,O_2 \\to 2\\,Fe_2 O_3',
        },
        {
          explicacion:
            'Re-balanceamos Fe: derecha tiene 2×2=4 → coeficiente 4 en Fe.',
          latex: '4\\,Fe + 3\\,O_2 \\to 2\\,Fe_2 O_3',
        },
        {
          explicacion: 'Verificamos: Fe: 4=4 ✓. O: 6=6 ✓.',
        },
      ],
      resultado: '4 Fe + 3 O₂ → 2 Fe₂O₃.',
    },
  ],
  erroresComunes: [
    'Cambiar subíndices para balancear. NUNCA: cambiar H₂O por H₃O cambia el compuesto.',
    'Olvidarse de re-balancear elementos previos cuando ajustás otro.',
    'No simplificar al final. Si quedan coeficientes 4-2-6 podés dividir por 2 y queda 2-1-3.',
    'Empezar siempre por el oxígeno o hidrógeno. Conviene dejarlos para el final porque suelen aparecer en varios compuestos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Balancear: $H_2 + N_2 \\to NH_3$.',
        opciones: [
          'H₂ + N₂ → NH₃',
          '3 H₂ + N₂ → 2 NH₃',
          '2 H₂ + N₂ → NH₃',
          'H₂ + 3 N₂ → 2 NH₃',
        ],
        correcta: 1,
        explicacion: '3 H₂ aporta 6 H, N₂ aporta 2 N. 2 NH₃ tiene 2 N + 6 H ✓.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En $\\_\\_ \\, KClO_3 \\to \\_\\_ \\, KCl + \\_\\_ \\, O_2$, los coeficientes correctos son:',
        opciones: ['1, 1, 1', '2, 2, 3', '3, 3, 2', '2, 1, 3'],
        correcta: 1,
        explicacion: '2 KClO₃ → 2 KCl + 3 O₂. K: 2=2, Cl: 2=2, O: 6=6 ✓.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para balancear, podés cambiar los subíndices de las fórmulas si hace falta.',
        respuesta: false,
        explicacion: 'NUNCA. Solo se cambian coeficientes. Cambiar subíndices cambia el compuesto.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'En $\\_\\_ \\, Al + \\_\\_ \\, O_2 \\to \\_\\_ \\, Al_2 O_3$, ¿cuánto vale el coeficiente del Al?',
        respuesta: 4,
        explicacion: '4 Al + 3 O₂ → 2 Al₂O₃. Al: 4=4, O: 6=6 ✓.',
      },
    ],
  },
  visualizadorId: 'balanceador-ecuaciones',
  relacionados: ['reacciones-quimicas-intro', 'calculos-estequiometricos'],
  tags: ['balanceo', 'lavoisier', 'tanteo', 'coeficientes', 'ecuación química'],
};
