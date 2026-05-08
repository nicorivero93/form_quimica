import type { Tema } from '@/types/tema';

export const simbolosFormulas: Tema = {
  slug: 'simbolos-formulas',
  titulo: 'Símbolos químicos y fórmulas',
  anios: ['secundaria-2'],
  area: 'tabla-periodica',
  nivel: 'intro',
  resumen:
    'Cómo se nombran y abrevian los elementos. Cómo leer una fórmula química e interpretar subíndices y coeficientes.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cada elemento tiene un **símbolo** universal de 1 o 2 letras. Lo eligió Berzelius en 1813 a partir del nombre en latín. La primera letra siempre es **mayúscula**; la segunda (si la hay) **minúscula**.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Elemento', 'Símbolo', 'Origen del nombre'],
      filas: [
        ['Hidrógeno', 'H', 'griego: "que genera agua"'],
        ['Carbono', 'C', 'latín: carbo (carbón)'],
        ['Oxígeno', 'O', 'griego: "que genera ácido"'],
        ['Sodio', 'Na', 'latín: natrium'],
        ['Potasio', 'K', 'latín: kalium'],
        ['Hierro', 'Fe', 'latín: ferrum'],
        ['Plata', 'Ag', 'latín: argentum'],
        ['Oro', 'Au', 'latín: aurum'],
        ['Mercurio', 'Hg', 'latín: hydrargyrum'],
        ['Plomo', 'Pb', 'latín: plumbum'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Cuidado con las mayúsculas',
      texto:
        '**Co** es cobalto (un elemento). **CO** es monóxido de carbono (un compuesto: C y O). Cambia todo según las mayúsculas. Igual: Cu (cobre) ≠ CU.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una **fórmula química** te dice qué elementos hay en un compuesto y en qué proporción. Los **subíndices** indican cuántos átomos de cada elemento; los **coeficientes** (delante) indican cuántas moléculas hay.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cómo leer 3 H₂SO₄',
      texto:
        '**3** = coeficiente: hay 3 moléculas de ácido sulfúrico. **H₂** = 2 hidrógenos por molécula. **S** = 1 azufre por molécula. **O₄** = 4 oxígenos por molécula. En total tenés $3 \\times 2 = 6$ H, $3$ S, $3 \\times 4 = 12$ O.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Fórmula', 'Lectura'],
      filas: [
        ['H₂O', '2 H, 1 O por molécula → agua'],
        ['CO₂', '1 C, 2 O → dióxido de carbono'],
        ['NH₃', '1 N, 3 H → amoníaco'],
        ['H₂SO₄', '2 H, 1 S, 4 O → ácido sulfúrico'],
        ['Ca(OH)₂', '1 Ca, 2 O, 2 H → hidróxido de calcio (los paréntesis multiplican todo lo de adentro)'],
        ['2 H₂O', '2 moléculas de agua → 4 H, 2 O en total'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Paréntesis en fórmulas',
      texto:
        'Cuando hay un grupo de átomos que se repite, lo encerrás en paréntesis. $Ca(OH)_2$ significa: 1 Ca y "OH dos veces" (es decir, 2 O y 2 H en total). Sirve para grupos como OH⁻, NO₃⁻, SO₄²⁻.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las fórmulas también te dicen la **masa molar** del compuesto: sumás las masas atómicas de cada elemento multiplicadas por sus subíndices.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Contar átomos en una fórmula',
      enunciado:
        '¿Cuántos átomos de cada elemento hay en $2 \\, Al(NO_3)_3$?',
      pasos: [
        {
          explicacion: 'Coeficiente = 2 (dos moléculas).',
        },
        {
          explicacion:
            'Por cada molécula: 1 Al, y "NO₃ tres veces" → 3 N y 3×3 = 9 O.',
        },
        {
          explicacion:
            'Total con el coeficiente 2: $2 \\times 1 = 2$ Al, $2 \\times 3 = 6$ N, $2 \\times 9 = 18$ O.',
        },
      ],
      resultado: '2 Al, 6 N, 18 O.',
    },
    {
      titulo: 'Calcular masa molar',
      enunciado:
        'Calculá la masa molar de la sacarosa $C_{12}H_{22}O_{11}$. (M(C)=12, M(H)=1, M(O)=16)',
      pasos: [
        {
          explicacion: 'Sumamos las contribuciones de cada elemento.',
          latex: 'M = 12 \\times 12 + 22 \\times 1 + 11 \\times 16',
        },
        {
          explicacion: 'Calculamos.',
          latex: 'M = 144 + 22 + 176 = 342 \\, g/mol',
        },
      ],
      resultado: 'M = 342 g/mol.',
    },
  ],
  erroresComunes: [
    'Olvidarse que la primera letra del símbolo va en MAYÚSCULA. CO ≠ Co.',
    'Confundir subíndice con coeficiente. **Coeficiente** delante (multiplica todo). **Subíndice** después (solo afecta al elemento de al lado).',
    'No multiplicar lo del paréntesis. Ca(OH)₂ tiene 2 O, no 1.',
    'Pensar que las masas atómicas son enteras siempre. Suelen ser decimales (promedio de isótopos): Cl = 35,45.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos átomos de oxígeno hay en una molécula de $H_3 PO_4$?',
        respuesta: 4,
        explicacion: 'El subíndice del O es 4.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En $3 \\, H_2 SO_4$, ¿cuántos átomos de hidrógeno hay en total?',
        opciones: ['2', '3', '5', '6'],
        correcta: 3,
        explicacion: '$3 \\, \\text{moléculas} \\times 2 \\, H/\\text{molécula} = 6 \\, H$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Masa molar del agua $H_2 O$ (M(H)=1, M(O)=16). En g/mol.',
        respuesta: 18,
        explicacion: '$2 \\times 1 + 16 = 18 \\, g/mol$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál símbolo NO existe?',
        opciones: ['Ag', 'Au', 'Hg', 'Cb'],
        correcta: 3,
        explicacion: 'Cb no es ningún elemento. Los demás son plata, oro y mercurio.',
      },
    ],
  },
  relacionados: ['el-atomo', 'elementos-y-compuestos', 'reacciones-quimicas-intro'],
  tags: ['símbolos químicos', 'fórmula', 'subíndice', 'coeficiente', 'masa molar'],
};
