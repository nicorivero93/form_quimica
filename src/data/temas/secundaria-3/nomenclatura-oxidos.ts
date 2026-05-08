import type { Tema } from '@/types/tema';

export const nomenclaturaOxidos: Tema = {
  slug: 'nomenclatura-oxidos',
  titulo: 'Nomenclatura: óxidos',
  anios: ['secundaria-3'],
  area: 'estequiometria',
  nivel: 'intermedio',
  resumen:
    'Cómo nombrar óxidos básicos (metal + O) y óxidos ácidos (no metal + O) usando los 3 sistemas IUPAC.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un **óxido** es un compuesto binario formado por un elemento + oxígeno. Hay dos tipos: **óxidos básicos** (metal + O) y **óxidos ácidos** (no metal + O, también llamados anhídridos en el sistema viejo).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cómo se forman',
      texto:
        'El oxígeno tiene número de oxidación −2. Para escribir la fórmula: ponés el otro elemento primero con su número de oxidación, y aplicás cruzado para balancear.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay 3 sistemas de nomenclatura aceptados por IUPAC. **Importante**: aprendelos los tres porque vas a ver los tres en libros distintos.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Sistema', 'Cómo se nombra', 'Ejemplo (Fe₂O₃)'],
      filas: [
        ['Atomicidad (estequiométrico)', 'óxido + prefijo + elemento', 'trióxido de dihierro'],
        ['Stock (números romanos)', 'óxido de elemento (n° ox en romanos)', 'óxido de hierro (III)'],
        ['Tradicional (sufijos)', 'óxido + raíz + sufijo', 'óxido férrico'],
      ],
    },
    {
      tipo: 'tabla',
      encabezados: ['Prefijo (atomicidad)', 'Significado'],
      filas: [
        ['mono', '1'],
        ['di', '2'],
        ['tri', '3'],
        ['tetra', '4'],
        ['penta', '5'],
        ['hexa', '6'],
        ['hepta', '7'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Sufijos del sistema tradicional',
      texto:
        'Si el elemento tiene **una sola** valencia: termina en **-ico**. Si tiene **dos**: la menor en **-oso**, la mayor en **-ico**. Si tiene **cuatro** (S, Cl, Br, I): hipo- + raíz + -oso (la más baja), -oso, -ico, per- + raíz + -ico (la más alta).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Compuesto', 'Atomicidad', 'Stock', 'Tradicional'],
      filas: [
        ['Na₂O', 'óxido de sodio', 'óxido de sodio', 'óxido sódico'],
        ['CaO', 'óxido de calcio', 'óxido de calcio', 'óxido cálcico'],
        ['CuO', 'óxido de cobre', 'óxido de cobre (II)', 'óxido cúprico'],
        ['Cu₂O', 'óxido de dicobre', 'óxido de cobre (I)', 'óxido cuproso'],
        ['FeO', 'óxido de hierro', 'óxido de hierro (II)', 'óxido ferroso'],
        ['Fe₂O₃', 'trióxido de dihierro', 'óxido de hierro (III)', 'óxido férrico'],
        ['CO₂', 'dióxido de carbono', 'óxido de carbono (IV)', 'anhídrido carbónico'],
        ['SO₃', 'trióxido de azufre', 'óxido de azufre (VI)', 'anhídrido sulfúrico'],
        ['Cl₂O₇', 'heptaóxido de dicloro', 'óxido de cloro (VII)', 'anhídrido perclórico'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Diferencia metal vs no metal',
      texto:
        'Los óxidos de **metales** se llaman simplemente "óxido de…". Los de **no metales** se llamaban "anhídrido de…" en el sistema tradicional, pero modernamente se usa "óxido de…" igual.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Escribir fórmula de un óxido',
      enunciado:
        'Escribir la fórmula del óxido de aluminio. (Al, Z=13, valencia +3)',
      pasos: [
        {
          explicacion:
            'Al³⁺ con O²⁻. Aplicamos cruzado: $Al_2 O_3$.',
        },
        {
          explicacion:
            'Verificamos: $2(+3) + 3(-2) = 0$ ✓.',
        },
      ],
      resultado: 'Al₂O₃ — óxido de aluminio (corindón).',
    },
    {
      titulo: 'Nombrar en los 3 sistemas',
      enunciado: 'Nombrá el SO₂ en los 3 sistemas. (S puede ser +4 o +6)',
      pasos: [
        {
          explicacion:
            'Calculamos n° ox del S: $S + 2(-2) = 0 \\to S = +4$. El azufre está usando su valencia menor (+4).',
        },
        {
          explicacion:
            '**Atomicidad**: dióxido de azufre.',
        },
        {
          explicacion:
            '**Stock**: óxido de azufre (IV).',
        },
        {
          explicacion:
            '**Tradicional**: con valencia menor + no metal → anhídrido sulfuroso (sufijo -oso).',
        },
      ],
      resultado: 'Dióxido de azufre = óxido de azufre (IV) = anhídrido sulfuroso.',
    },
  ],
  erroresComunes: [
    'Confundir cuando usar -oso o -ico. El **sufijo más alto (-ico)** corresponde a la **valencia mayor**.',
    'Olvidarse de simplificar la fórmula final. CaO es CaO, no Ca₂O₂.',
    'Asumir que todos los metales tienen una sola valencia. Fe, Cu, Sn, Pb tienen dos. Cr y Mn varias.',
    'Aplicar el prefijo "mono" siempre. En atomicidad, "mono" se omite cuando se sobreentiende: CaO se llama "óxido de calcio", no "monóxido de calcio". Excepción: CO se llama monóxido de carbono para distinguirlo de CO₂.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula del óxido de magnesio?',
        opciones: ['MgO', 'Mg₂O', 'MgO₂', 'Mg₂O₃'],
        correcta: 0,
        explicacion: 'Mg²⁺ + O²⁻ → Mg₂O₂ → simplificado MgO.',
      },
      {
        tipo: 'multiple',
        enunciado: 'El nombre tradicional del Cu₂O es:',
        opciones: ['óxido cúprico', 'óxido cuproso', 'monóxido de cobre', 'anhídrido cúprico'],
        correcta: 1,
        explicacion: 'Cu con valencia menor (+1) → sufijo -oso → óxido cuproso.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En sistema Stock, el Fe₂O₃ se llama:',
        opciones: ['óxido de hierro (II)', 'óxido de hierro (III)', 'óxido férrico', 'trióxido de dihierro'],
        correcta: 1,
        explicacion: 'En Fe₂O₃ el hierro tiene Nox +3 → óxido de hierro (III).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Los óxidos básicos son los formados por metal + oxígeno.',
        respuesta: true,
        explicacion: 'Sí: metal + O = óxido básico. No metal + O = óxido ácido (anhídrido).',
      },
    ],
  },
  relacionados: ['iones-compuestos-ionicos', 'nomenclatura-hidroxidos-acidos', 'reacciones-redox'],
  tags: ['óxidos', 'nomenclatura', 'IUPAC', 'stock', 'tradicional', 'atomicidad', 'anhídrido'],
};
