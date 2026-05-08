import type { Tema } from '@/types/tema';

export const ionesCompuestosIonicos: Tema = {
  slug: 'iones-compuestos-ionicos',
  titulo: 'Iones y compuestos iónicos',
  anios: ['secundaria-3'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Cómo se forman los cationes y aniones, y cómo se combinan en compuestos iónicos balanceando cargas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Los átomos buscan tener la **configuración estable de gas noble** (8 e⁻ de valencia, regla del octeto). Para lograrlo, ceden o ganan electrones, transformándose en **iones** con carga.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cationes y aniones',
      texto:
        '**Catión**: ion positivo. Se forma cuando un **metal** pierde electrones (le sobran). Ej: Na pierde 1 e⁻ → Na⁺. **Anión**: ion negativo. Se forma cuando un **no metal** gana electrones (le faltan). Ej: Cl gana 1 e⁻ → Cl⁻.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Grupo', 'Carga típica del ion', 'Ejemplos'],
      filas: [
        ['1 (alcalinos)', '+1', 'Li⁺, Na⁺, K⁺'],
        ['2 (alcalinotérreos)', '+2', 'Mg²⁺, Ca²⁺, Ba²⁺'],
        ['13 (térreos)', '+3', 'Al³⁺'],
        ['15', '−3', 'N³⁻, P³⁻'],
        ['16 (calcógenos)', '−2', 'O²⁻, S²⁻'],
        ['17 (halógenos)', '−1', 'F⁻, Cl⁻, Br⁻, I⁻'],
        ['Transición', 'variable', 'Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla rápida (excepto transición)',
      texto:
        'Para grupos principales: la carga del ion = electrones de valencia (si pierde) o 8 − e⁻ valencia (si gana). Los metales generalmente pierden, los no metales generalmente ganan.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando un catión y un anión se atraen, forman un **compuesto iónico**. La regla clave: **las cargas totales tienen que cancelarse** (el compuesto es neutro).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cómo balancear cargas (regla del cruzado)',
      texto:
        'Si tenés $A^{+a}$ y $B^{-b}$, la fórmula es $A_b B_a$ (la carga de uno baja como subíndice del otro). Después simplificás si los subíndices tienen factor común.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Catión', 'Anión', 'Cruzado', 'Fórmula final'],
      filas: [
        ['Na⁺', 'Cl⁻', 'Na₁Cl₁', 'NaCl'],
        ['Mg²⁺', 'Cl⁻', 'Mg₁Cl₂', 'MgCl₂'],
        ['Al³⁺', 'O²⁻', 'Al₂O₃', 'Al₂O₃'],
        ['Ca²⁺', 'O²⁻', 'Ca₂O₂', 'CaO (simplificada)'],
        ['Fe³⁺', 'SO₄²⁻', 'Fe₂(SO₄)₃', 'Fe₂(SO₄)₃'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Los compuestos iónicos NO existen como moléculas individuales: son **redes cristalinas** infinitas. La fórmula te da la **proporción**, no la cantidad por molécula. Por eso decimos "1 fórmula unidad" no "1 molécula" cuando hablamos de NaCl.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **iones poliatómicos** son grupos de átomos con carga neta. Los más comunes:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Ion', 'Nombre', 'Carga'],
      filas: [
        ['OH⁻', 'hidróxido', '−1'],
        ['NO₃⁻', 'nitrato', '−1'],
        ['SO₄²⁻', 'sulfato', '−2'],
        ['CO₃²⁻', 'carbonato', '−2'],
        ['PO₄³⁻', 'fosfato', '−3'],
        ['NH₄⁺', 'amonio', '+1'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Predecir el ion de un átomo',
      enunciado: '¿Qué ion forma el azufre (Z=16, grupo 16)?',
      pasos: [
        {
          explicacion: 'Z=16 → 6 e⁻ de valencia. Para llegar a 8, le faltan 2.',
        },
        {
          explicacion:
            'Como no metal, los **gana** → forma anión $S^{2-}$.',
        },
      ],
      resultado: 'Forma $S^{2-}$ (sulfuro).',
    },
    {
      titulo: 'Escribir fórmula de compuesto iónico',
      enunciado: '¿Cuál es la fórmula del compuesto entre Al³⁺ y SO₄²⁻?',
      pasos: [
        {
          explicacion:
            'Aplicamos cruzado: Al³⁺ con carga 3 y SO₄²⁻ con carga 2 → $Al_2 (SO_4)_3$.',
        },
        {
          explicacion:
            'Verificamos cargas: $2 \\times (+3) + 3 \\times (-2) = +6 - 6 = 0 \\, \\checkmark$.',
        },
      ],
      resultado: 'Al₂(SO₄)₃ — sulfato de aluminio.',
    },
  ],
  erroresComunes: [
    'Olvidarse de simplificar. CaO no es Ca₂O₂ (las cargas se compensan 1:1).',
    'No usar paréntesis cuando hay un ion poliatómico repetido. $Al_2 (SO_4)_3$ NO es $Al_2 SO_{43}$.',
    'Asumir que los metales de transición tienen siempre la misma carga. Fe puede ser Fe²⁺ o Fe³⁺ — hay que mirar el contexto.',
    'Confundir el subíndice con la carga. NaCl₂ NO existe; Cl forma anión con carga −1, no 2.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula del compuesto entre Na⁺ y O²⁻?',
        opciones: ['NaO', 'NaO₂', 'Na₂O', 'Na₂O₂'],
        correcta: 2,
        explicacion: 'Cruzado: Na con 2, O con 1 → Na₂O. Cargas: 2(+1) + (−2) = 0 ✓.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué ion forma el calcio (grupo 2)?',
        opciones: ['Ca⁻', 'Ca⁺', 'Ca²⁺', 'Ca²⁻'],
        correcta: 2,
        explicacion: 'Grupo 2 → pierde 2 e⁻ → catión con carga +2.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Para que un compuesto entre Fe³⁺ y O²⁻ sea neutro, ¿cuántos átomos de Fe se necesitan por cada 3 O?',
        respuesta: 2,
        explicacion: '$Fe_2 O_3$: 2(+3) + 3(−2) = 0. Hematita.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un ion negativo se llama catión.',
        respuesta: false,
        explicacion: 'Los iones negativos son **aniones** (ganaron electrones). Cationes son los positivos.',
      },
    ],
  },
  relacionados: ['tabla-periodica-organizacion', 'enlace-ionico', 'el-atomo'],
  tags: ['ion', 'catión', 'anión', 'compuesto iónico', 'octeto', 'iones poliatómicos', 'sulfato'],
};
