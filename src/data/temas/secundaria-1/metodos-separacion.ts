import type { Tema } from '@/types/tema';

export const metodosSeparacion: Tema = {
  slug: 'metodos-separacion',
  titulo: 'Métodos de separación de mezclas',
  anios: ['secundaria-1'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Filtración, decantación, evaporación, destilación: cómo separar los componentes de una mezcla aprovechando sus diferencias.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para separar una mezcla **aprovechamos diferencias** entre sus componentes: tamaño, densidad, punto de ebullición, solubilidad, propiedades magnéticas, etc. Los métodos son **físicos** (no transforman las sustancias).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Método', '¿Para qué tipo de mezcla?', 'Qué aprovecha', 'Ejemplo'],
      filas: [
        ['Filtración', 'sólido + líquido (heterogénea)', 'tamaño de partícula', 'café con borra'],
        ['Decantación', 'líquido + líquido (heterogéneos)', 'densidad', 'agua y aceite'],
        ['Tamización', 'sólido + sólido (granos distintos)', 'tamaño', 'arena y piedras'],
        ['Imantación', 'sólido + sólido (uno magnético)', 'magnetismo', 'limaduras de hierro y arena'],
        ['Evaporación', 'sólido disuelto en líquido', 'punto de ebullición', 'sal del agua de mar'],
        ['Destilación', 'dos líquidos miscibles', 'punto de ebullición distinto', 'alcohol del agua'],
        ['Cromatografía', 'mezcla compleja', 'afinidad por un soporte', 'pigmentos de una tinta'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Filtración',
      texto:
        'Pasás la mezcla por un filtro (papel filtro, colador). Lo que es más chico que los poros pasa (filtrado); lo que es más grande queda retenido (residuo). Sirve para separar sólidos no disueltos de líquidos.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Destilación',
      texto:
        'Calentás la mezcla. El líquido con menor punto de ebullición evapora primero, sus vapores pasan por un tubo refrigerado donde **condensan** otra vez en líquido. Así separás dos líquidos que estaban mezclados (alcohol+agua, petróleo, perfumes).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo elegir el método',
      texto:
        '1) ¿Qué tipo de mezcla es (sólido+sólido, sólido+líquido, líquido+líquido)? 2) ¿Qué propiedad las diferencia más? 3) Elegís el método que aprovecha esa diferencia. Si una mezcla es muy compleja podés combinar varios.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Separar agua, sal y arena',
      enunciado:
        'Tenés un vaso con agua, sal disuelta y arena. ¿Cómo separás los 3 componentes?',
      pasos: [
        {
          explicacion:
            'Primero separamos la **arena** (sólido no disuelto): **filtración**. La arena queda en el filtro; el agua salada pasa.',
        },
        {
          explicacion:
            'Ahora tenemos agua salada (mezcla homogénea: sal disuelta en agua). Para separar la sal del agua: **evaporación** (calentás el agua hasta que se va y queda la sal sólida).',
        },
        {
          explicacion:
            'Si querés también recuperar el agua, en vez de evaporación usás **destilación**: el vapor pasa por un tubo refrigerado y se condensa.',
        },
      ],
      resultado: 'Filtración → evaporación (o destilación si querés recuperar el agua).',
    },
    {
      titulo: 'Aceite, agua y limaduras de hierro',
      enunciado: '¿Cómo separás esta mezcla?',
      pasos: [
        {
          explicacion:
            'Primero, **imantación**: con un imán recogés las limaduras de hierro.',
        },
        {
          explicacion:
            'Quedan aceite + agua. Como son líquidos no miscibles (no se mezclan): **decantación** con embudo. El más denso (agua) sale primero por abajo; arriba queda el aceite.',
        },
      ],
      resultado: 'Imantación + decantación.',
    },
  ],
  erroresComunes: [
    'Usar filtración para mezclas homogéneas (soluciones). No funciona: lo disuelto pasa con el líquido. Hay que evaporar o destilar.',
    'Confundir destilación con evaporación. Destilación recupera el líquido evaporado (lo condensa). Evaporación lo pierde como vapor.',
    'Decantar sin esperar. Los líquidos necesitan tiempo para separarse en capas según densidad antes de drenar.',
    'Pensar que los métodos son químicos. Son **físicos**: las sustancias no se transforman, solo se separan.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Qué método usás para separar agua y aceite?',
        opciones: ['Filtración', 'Decantación', 'Destilación', 'Evaporación'],
        correcta: 1,
        explicacion: 'Líquidos no miscibles con distinta densidad → decantación.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Para sacar la sal del agua de mar (sin perder el agua):',
        opciones: ['Filtración', 'Decantación', 'Destilación', 'Imantación'],
        correcta: 2,
        explicacion: 'Destilación: hervís el agua, recolectás el vapor condensado y la sal queda sólida.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La filtración sirve para separar el azúcar disuelto del agua.',
        respuesta: false,
        explicacion: 'No: el azúcar disuelto pasa con el agua a través del filtro. Hay que evaporar o destilar.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Si tengo arena con piedritas grandes, separo con:',
        opciones: ['Tamización', 'Decantación', 'Destilación', 'Cromatografía'],
        correcta: 0,
        explicacion: 'Tamización (colador con red): las piedras quedan, la arena pasa.',
      },
    ],
  },
  relacionados: ['que-es-la-materia', 'estados-materia'],
  tags: ['filtración', 'decantación', 'destilación', 'evaporación', 'imantación', 'tamización', 'separación'],
};
