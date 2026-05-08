import type { Tema } from '@/types/tema';

export const queEsLaMateria: Tema = {
  slug: 'que-es-la-materia',
  titulo: '¿Qué es la materia?',
  anios: ['secundaria-1'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Todo lo que ocupa lugar y tiene masa. Diferencia entre cuerpo, materia, sustancia y mezcla.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La **materia** es todo lo que ocupa un lugar en el espacio (tiene volumen) y tiene masa. Una piedra, el agua, el aire que respirás, tu cuerpo: todo es materia. Lo que **NO es** materia: la luz, el sonido, el calor, las ideas.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cuerpo, materia, sustancia',
      texto:
        '**Cuerpo**: una porción limitada de materia con forma propia (una silla, una manzana). **Materia**: la sustancia de la que está hecho. **Sustancia**: un tipo específico de materia con propiedades fijas (oxígeno, agua pura, oro).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Ejemplo cotidiano'],
      filas: [
        ['Cuerpo', 'una pelota de fútbol'],
        ['Materia', 'el cuero y aire que la forman'],
        ['Sustancia', 'el cuero (compuesto de proteínas) y el aire (mezcla de gases)'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las sustancias se dividen en **sustancias puras** (un solo tipo de materia, ej. agua destilada, oxígeno O₂) y **mezclas** (varias sustancias juntas, ej. agua de mar, aire, leche).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Sustancias puras vs mezclas',
      texto:
        'Si lo podés separar en partes con propiedades distintas (filtración, evaporación, etc.) → es **mezcla**. Si no lo podés separar por métodos físicos → es **sustancia pura**.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo de mezcla', 'Cómo se ve', 'Ejemplo'],
      filas: [
        ['Homogénea (solución)', 'una sola fase visible', 'agua salada, aire, alcohol fino'],
        ['Heterogénea', 'varias fases visibles', 'aceite + agua, ensalada, granito'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Una mezcla parece homogénea o heterogénea según la **escala** con la que la mires. La leche parece homogénea a simple vista, pero al microscopio ves gotitas de grasa flotando: en realidad es una emulsión (heterogénea).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Clasificar materiales',
      enunciado:
        'Indicar si cada uno es sustancia pura o mezcla, y si es mezcla, qué tipo: (a) agua destilada, (b) agua de mar, (c) jugo con pulpa, (d) oro 24 quilates, (e) bronce.',
      pasos: [
        {
          explicacion:
            '**Agua destilada**: agua sin nada disuelto → sustancia pura.',
        },
        {
          explicacion:
            '**Agua de mar**: agua + sales disueltas (no las ves separadas) → mezcla **homogénea**.',
        },
        {
          explicacion:
            '**Jugo con pulpa**: ves fases distintas (líquido + trozos) → mezcla **heterogénea**.',
        },
        {
          explicacion:
            '**Oro 24 quilates**: oro químicamente puro → sustancia pura.',
        },
        {
          explicacion:
            '**Bronce**: aleación de cobre y estaño en una sola fase visible → mezcla **homogénea**.',
        },
      ],
      resultado:
        'Puras: agua destilada, oro 24K. Homogéneas: agua de mar, bronce. Heterogénea: jugo con pulpa.',
    },
  ],
  erroresComunes: [
    'Pensar que "puro" significa "limpio" o "sano". En química "puro" = "una sola sustancia". El agua mineral, aunque sea limpia, NO es agua pura: tiene sales disueltas.',
    'Confundir cuerpo con sustancia. Dos cuerpos distintos pueden estar hechos de la misma sustancia (un anillo y un lingote, ambos de oro).',
    'Decir que el aire es una sustancia pura. Es una mezcla homogénea (78% N₂, 21% O₂, 1% otros).',
    'Asumir que toda mezcla heterogénea se ve a simple vista. La leche parece uniforme pero al microscopio ves gotitas separadas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos NO es materia?',
        opciones: ['un libro', 'el aire', 'el calor', 'el agua'],
        correcta: 2,
        explicacion:
          'El calor es una forma de energía. Materia es lo que ocupa volumen y tiene masa.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿El agua salada es una mezcla...',
        opciones: ['heterogénea', 'homogénea (solución)', 'sustancia pura', 'compuesto'],
        correcta: 1,
        explicacion: 'No ves la sal flotando: está disuelta. Mezcla homogénea = solución.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una sustancia pura puede separarse en partes con propiedades distintas usando métodos físicos.',
        respuesta: false,
        explicacion: 'NO: por eso es pura. Las mezclas sí se separan por métodos físicos.',
      },
      {
        tipo: 'multiple',
        enunciado: 'El aceite y el agua forman:',
        opciones: ['solución', 'mezcla heterogénea', 'sustancia pura', 'compuesto'],
        correcta: 1,
        explicacion: 'No se mezclan: ves dos fases (capa de aceite arriba, agua abajo) → heterogénea.',
      },
    ],
  },
  relacionados: ['estados-materia', 'metodos-separacion'],
  tags: ['materia', 'sustancia pura', 'mezcla', 'homogénea', 'heterogénea', 'solución'],
};
