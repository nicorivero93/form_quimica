import type { Tema } from '@/types/tema';

export const modelosAtomicos: Tema = {
  slug: 'modelos-atomicos',
  titulo: 'Modelos atómicos',
  anios: ['secundaria-4'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Cómo evolucionó nuestra idea del átomo: desde la "bola de billar" de Dalton hasta el modelo cuántico actual.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La idea de "átomo" (de *atomos*, indivisible en griego) tiene 2500 años, pero el modelo científico fue cambiando con cada experimento que reveló cosas nuevas. Conocer los modelos te ayuda a entender por qué la química se ve como se ve hoy.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Año', 'Modelo', 'Idea principal', 'Por qué se descartó'],
      filas: [
        ['1808', 'Dalton', 'Esfera maciza indivisible', 'No explica electricidad ni espectros'],
        ['1897', 'Thomson', '"Budín de pasas": carga + con e⁻ incrustados', 'Rutherford encontró el núcleo'],
        ['1911', 'Rutherford', 'Núcleo + denso con e⁻ orbitando', 'Predice colapso del átomo'],
        ['1913', 'Bohr', 'Órbitas con energías cuantizadas', 'Solo funciona bien para H'],
        ['1926+', 'Cuántico (Schrödinger)', 'Orbitales = nubes de probabilidad', 'Vigente'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Modelo de Rutherford (experimento de la lámina de oro)',
      texto:
        'Disparó partículas alfa contra una lámina finísima de oro. La mayoría pasaba derecho, pero algunas rebotaban como si chocaran con algo macizo. Conclusión: el átomo es **principalmente vacío**, con casi toda la masa concentrada en un núcleo pequeño y positivo.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Modelo de Bohr',
      texto:
        'Los electrones giran solo en órbitas con energías permitidas (cuantizadas). Cuando saltan de una órbita a otra emiten o absorben un fotón con energía exacta. Esto explica los espectros de líneas (rayas de colores discretos) del hidrógeno.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **modelo cuántico** actual no habla de "órbitas" sino de **orbitales**: regiones del espacio donde hay alta probabilidad de encontrar al electrón. Tienen formas características (s esférico, p de doble lóbulo, d en trébol).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Cada modelo NO está mal: es una aproximación útil para cierto nivel de detalle. Para hablar de "el carbono tiene 4 electrones de valencia" alcanza con Bohr; para predecir formas moleculares, necesitás el cuántico.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Interpretar el experimento de Rutherford',
      enunciado:
        '¿Qué se observó al bombardear la lámina de oro con partículas alfa? ¿Qué se concluyó?',
      pasos: [
        {
          explicacion:
            '99% de las partículas pasaban casi sin desviarse → el átomo es **principalmente espacio vacío**.',
        },
        {
          explicacion:
            'Algunas (1 cada 8000) rebotaban con grandes ángulos → existe algo **muy denso y positivo** (el núcleo) que repele las partículas alfa (también positivas).',
        },
        {
          explicacion:
            'El núcleo concentra >99,9% de la masa pero ocupa <0,001% del volumen del átomo.',
        },
      ],
      resultado: 'Se descartó el modelo de Thomson y nació el modelo nuclear de Rutherford.',
    },
  ],
  erroresComunes: [
    'Decir que los electrones "orbitan como planetas". Ese era el modelo de Bohr; el actual habla de orbitales (nubes de probabilidad).',
    'Confundir órbita (camino definido) con orbital (región probable). Son cosas distintas.',
    'Pensar que Dalton estaba "totalmente equivocado". Su modelo explica la conservación de masa y proporciones — sigue siendo útil a nivel macro.',
    'Asumir que el átomo es macizo. Es 99,99…% vacío.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Quién propuso que los electrones giran en órbitas con energías cuantizadas?',
        opciones: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'],
        correcta: 3,
        explicacion: 'Bohr (1913) introdujo la cuantización de las órbitas para explicar el espectro del hidrógeno.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En el modelo cuántico, podemos predecir la posición exacta del electrón en cada momento.',
        respuesta: false,
        explicacion: 'Por el principio de incertidumbre solo podemos hablar de probabilidad de encontrarlo (orbital).',
      },
      {
        tipo: 'multiple',
        enunciado: 'El experimento de la lámina de oro de Rutherford demostró que:',
        opciones: [
          'el átomo es indivisible',
          'el átomo tiene un núcleo pequeño y denso',
          'los electrones tienen carga negativa',
          'los protones existen',
        ],
        correcta: 1,
        explicacion: 'Las desviaciones grandes de algunas partículas alfa solo se explican con un núcleo pequeño y positivo.',
      },
    ],
  },
  relacionados: ['configuracion-electronica'],
  tags: ['modelos atómicos', 'dalton', 'thomson', 'rutherford', 'bohr', 'cuántico', 'historia'],
};
