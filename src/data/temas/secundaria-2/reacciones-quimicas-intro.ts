import type { Tema } from '@/types/tema';

export const reaccionesQuimicasIntro: Tema = {
  slug: 'reacciones-quimicas-intro',
  titulo: 'Reacciones químicas: introducción',
  anios: ['secundaria-2'],
  area: 'estequiometria',
  nivel: 'intro',
  resumen:
    'Qué son las reacciones, cómo se reconocen, qué cambia y qué se conserva (ley de Lavoisier).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una **reacción química** es un proceso donde una o más sustancias (reactivos) se transforman en otras distintas (productos). Los átomos se reorganizan: se rompen enlaces viejos y se forman nuevos.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cómo darse cuenta',
      texto:
        'Indicios de que ocurrió una reacción: cambio de color, desprendimiento de gas (burbujas), formación de un sólido (precipitado), cambio de temperatura, emisión de luz, cambio de olor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se escribe con flecha entre reactivos y productos:',
    },
    {
      tipo: 'latex',
      latex: '\\text{reactivos} \\;\\to\\; \\text{productos}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Símbolo', 'Significado'],
      filas: [
        ['+', 'separa reactivos o productos'],
        ['→', 'indica la transformación'],
        ['(s), (l), (g), (ac)', 'estado: sólido, líquido, gas, acuoso (disuelto en agua)'],
        ['↓', 'precipitado (sólido que se forma)'],
        ['↑', 'desprendimiento de gas'],
        ['Δ o calor', 'reacción que necesita calor'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cambios físicos vs. químicos',
      texto:
        'Si **no nace una sustancia nueva** es **físico** (derretir hielo, romper un papel). Si nacen sustancias con propiedades distintas, es **químico** (quemar madera, oxidar hierro).',
    },
    {
      tipo: 'parrafo',
      texto:
        'La **ley de Lavoisier** (conservación de la masa) dice que en una reacción química **la masa total se conserva**: la masa de los reactivos = masa de los productos. Por eso las ecuaciones se balancean.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Tipos básicos de reacciones',
      texto:
        '**Síntesis**: A + B → AB (formación). **Descomposición**: AB → A + B. **Sustitución simple**: A + BC → AC + B. **Doble sustitución**: AB + CD → AD + CB. **Combustión**: combustible + O₂ → CO₂ + H₂O.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Ejemplo'],
      filas: [
        ['Síntesis', '$2 H_2 + O_2 \\to 2 H_2O$'],
        ['Descomposición', '$2 H_2 O_2 \\to 2 H_2 O + O_2$'],
        ['Sustitución simple', '$Zn + 2 HCl \\to ZnCl_2 + H_2$'],
        ['Doble sustitución', '$AgNO_3 + NaCl \\to AgCl + NaNO_3$'],
        ['Combustión', '$CH_4 + 2 O_2 \\to CO_2 + 2 H_2 O$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'En una reacción química se conservan: la **masa**, el número de átomos de cada elemento y la carga total. NO se conservan las sustancias ni las moléculas (de eso justamente se trata: cambian).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar tipo de reacción',
      enunciado:
        'Clasificar: (a) $C + O_2 \\to CO_2$, (b) $2 H_2 O \\to 2 H_2 + O_2$, (c) $Fe + CuSO_4 \\to FeSO_4 + Cu$.',
      pasos: [
        {
          explicacion:
            '(a) Dos sustancias se unen y dan una nueva → **síntesis**.',
        },
        {
          explicacion:
            '(b) Una sustancia se rompe en otras dos → **descomposición**.',
        },
        {
          explicacion:
            '(c) Un elemento (Fe) reemplaza a otro (Cu) en un compuesto → **sustitución simple**.',
        },
      ],
      resultado: 'a: síntesis, b: descomposición, c: sustitución simple.',
    },
    {
      titulo: 'Aplicar Lavoisier',
      enunciado:
        'Si reaccionan 4 g de hidrógeno con 32 g de oxígeno, ¿cuántos gramos de agua se forman? (sabiendo que reaccionan totalmente)',
      pasos: [
        {
          explicacion:
            'Por la ley de Lavoisier, la masa total se conserva: masa(productos) = masa(reactivos).',
        },
        {
          explicacion:
            '$m(H_2 O) = m(H_2) + m(O_2) = 4 + 32 = 36 \\, g$.',
        },
      ],
      resultado: 'Se forman 36 g de agua.',
    },
  ],
  erroresComunes: [
    'Pensar que un cambio de estado (hervir agua) es una reacción química. Es **físico** (no nace sustancia nueva).',
    'Asumir que en una reacción se "crea" o "destruye" materia. Por Lavoisier, los átomos solo se reorganizan.',
    'Confundir reactivos con productos. Reactivos están a la izquierda de la flecha, productos a la derecha.',
    'Pensar que romper un papel es una reacción química. Es físico (sigue siendo papel).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es un cambio químico?',
        opciones: ['hervir agua', 'romper un vidrio', 'quemar madera', 'cortar papel'],
        correcta: 2,
        explicacion: 'Quemar madera la transforma en CO₂, agua y cenizas (sustancias nuevas).',
      },
      {
        tipo: 'multiple',
        enunciado: '$2 KClO_3 \\to 2 KCl + 3 O_2$ es una reacción de:',
        opciones: ['síntesis', 'descomposición', 'sustitución simple', 'combustión'],
        correcta: 1,
        explicacion: 'Una sustancia se rompe en dos productos → descomposición.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si reaccionan 24 g de C con 64 g de O₂, ¿cuántos g de CO₂ se forman? (Lavoisier)',
        respuesta: 88,
        unidad: 'g',
        explicacion: '$m(CO_2) = 24 + 64 = 88 \\, g$ (conservación de masa).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En una reacción química, los átomos pueden desaparecer.',
        respuesta: false,
        explicacion: 'Por Lavoisier, los átomos se conservan: solo se reorganizan.',
      },
    ],
  },
  relacionados: ['simbolos-formulas', 'el-atomo', 'balanceo-ecuaciones'],
  tags: ['reacción química', 'lavoisier', 'reactivos', 'productos', 'síntesis', 'descomposición', 'cambio físico'],
};
