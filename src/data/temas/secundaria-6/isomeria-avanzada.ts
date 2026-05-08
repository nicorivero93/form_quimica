import type { Tema } from '@/types/tema';

export const isomeriaAvanzada: Tema = {
  slug: 'isomeria-avanzada',
  titulo: 'Isomería: estructural, cis-trans y óptica',
  anios: ['secundaria-6'],
  area: 'organica',
  nivel: 'avanzado',
  resumen:
    'Compuestos con la misma fórmula molecular pero distinta estructura. Tipos: de cadena, de posición, de función, geométrica (cis-trans) y óptica (quiralidad).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Dos compuestos son **isómeros** si tienen la misma fórmula molecular pero **distinta estructura** (átomos conectados de otra manera o en otra disposición espacial). La isomería explica por qué la glucosa y la fructosa son tan distintas aunque ambas sean $C_6H_{12}O_6$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo principal', 'Subtipo', 'Qué cambia', 'Ejemplo'],
      filas: [
        ['Estructural (constitucional)', 'de cadena', 'orden de los átomos en la cadena', 'butano vs. isobutano'],
        ['Estructural', 'de posición', 'posición del grupo funcional o doble enlace', '1-propanol vs. 2-propanol'],
        ['Estructural', 'de función', 'distinto grupo funcional', 'etanol vs. dimetil éter'],
        ['Estereoisomería', 'geométrica (cis-trans)', 'disposición alrededor de un doble enlace', 'cis-2-buteno vs. trans-2-buteno'],
        ['Estereoisomería', 'óptica (enantiómeros)', 'imagen especular no superponible', 'L-alanina vs. D-alanina'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Isómeros estructurales',
      texto:
        'Tienen la **misma fórmula** pero los átomos están **conectados distinto**. Cambia la cadena, la posición del grupo, o el grupo funcional mismo. Tienen propiedades muy distintas (punto de ebullición, reactividad).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cis-trans (geométrica)',
      texto:
        'Aparece en alquenos (no rotan alrededor del doble enlace). **Cis** = los grupos iguales del mismo lado. **Trans** = en lados opuestos. Cis y trans tienen distintas propiedades físicas: el ácido oleico (cis) es líquido a 25 °C; su isómero trans (elaidico) es sólido.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Quiralidad e isómeros ópticos',
      texto:
        'Una molécula es **quiral** si tiene un **carbono asimétrico** (un C unido a 4 grupos distintos). Hay 2 formas: una y su imagen en el espejo, no superponibles. Estos pares se llaman **enantiómeros**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los enantiómeros tienen **propiedades químicas idénticas** salvo dos:',
    },
    {
      tipo: 'lista',
      items: [
        'Rotan el plano de la luz polarizada en direcciones opuestas (uno a la izquierda, levógiro o "−"; otro a la derecha, dextrógiro o "+").',
        'Reaccionan distinto con otras moléculas quirales (ej: enzimas, receptores en el cuerpo). Por eso muchos fármacos solo "funcionan" en una de sus dos formas.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Caso talidomida',
      texto:
        'La talidomida es un caso famoso: el enantiómero "R" calmaba náuseas en embarazadas; el "S" causaba malformaciones graves. Hoy todo fármaco quiral se evalúa con ambos isómeros por separado.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Compuesto', 'Forma natural', 'Forma sintética'],
      filas: [
        ['Glucosa', 'D (dextrógira)', 'D (la nuestra metaboliza)'],
        ['Aminoácidos', 'L (levógiros)', 'racémico (50/50)'],
        ['Carvona', 'R (olor a menta)', 'S (olor a comino)'],
        ['Limoneno', 'R (olor a naranja)', 'S (olor a limón)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo identificar un C asimétrico',
      texto:
        'Buscás un C que tenga **4 grupos distintos** (ninguna repetición). Ej: en $CH_3-CHOH-COOH$ (ácido láctico), el C central tiene H, OH, CH₃ y COOH → es quiral.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar tipo de isomería',
      enunciado:
        '¿Qué tipo de isómeros son? (a) butano y 2-metilpropano. (b) propanal y propanona. (c) cis-2-buteno y trans-2-buteno.',
      pasos: [
        {
          explicacion:
            '(a) Butano (CH₃CH₂CH₂CH₃) e isobutano (CH₃-CH(CH₃)-CH₃) tienen misma fórmula C₄H₁₀ pero distinta cadena → **isómeros de cadena** (estructurales).',
        },
        {
          explicacion:
            '(b) Propanal (CH₃CH₂CHO) y propanona (CH₃COCH₃) tienen misma fórmula C₃H₆O pero distinto grupo funcional (aldehído vs. cetona) → **isómeros de función**.',
        },
        {
          explicacion:
            '(c) Cis y trans del 2-buteno tienen misma conectividad pero distinta disposición espacial alrededor del doble enlace → **isómeros geométricos** (cis-trans).',
        },
      ],
      resultado: 'a: cadena, b: función, c: geométricos.',
    },
    {
      titulo: 'Identificar carbono asimétrico',
      enunciado:
        'En el ácido láctico ($CH_3-CHOH-COOH$), ¿es quiral? ¿Dónde está el C asimétrico?',
      pasos: [
        {
          explicacion:
            'Miramos cada C de la cadena. El primero tiene 3 H + 1 C: NO es asimétrico (3 grupos iguales).',
        },
        {
          explicacion:
            'El **C central** está unido a: H, OH, CH₃, COOH → 4 grupos distintos → ¡quiral!',
        },
        {
          explicacion:
            'Existen 2 enantiómeros: ácido D-láctico (en los músculos cuando hacés ejercicio) y ácido L-láctico (en yogures por fermentación).',
        },
      ],
      resultado: 'Es quiral en el C central. Hay enantiómeros D y L.',
    },
  ],
  erroresComunes: [
    'Confundir isómeros estructurales con estereoisómeros. Estructurales: distinta CONECTIVIDAD. Estereo: misma conectividad, distinta DISPOSICIÓN ESPACIAL.',
    'Pensar que cis-trans es lo mismo que enantiómeros. NO: cis y trans tienen propiedades físicas distintas; los enantiómeros tienen casi todas iguales (excepto rotación de luz polarizada).',
    'Decir que un alcano puede tener cis-trans. Solo aparece donde hay restricción de rotación (alquenos, ciclos).',
    'Olvidarse que un C asimétrico necesita 4 grupos TODOS distintos. Si dos son iguales, no es quiral.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'El etanol y el dimetil éter son ejemplos de isómeros:',
        opciones: ['de cadena', 'de posición', 'de función', 'geométricos'],
        correcta: 2,
        explicacion: 'Mismo C₂H₆O pero distinto grupo funcional (alcohol vs. éter) → de función.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas moléculas es quiral?',
        opciones: ['CH₄', 'CH₃Cl', 'CHFClBr', 'CH₂Cl₂'],
        correcta: 2,
        explicacion: 'CHFClBr tiene 4 átomos distintos en el C → quiral. Las otras tienen átomos repetidos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Los enantiómeros tienen propiedades físicas idénticas excepto por su efecto en la luz polarizada.',
        respuesta: true,
        explicacion: 'Sí: mismo punto de fusión, ebullición, densidad. Solo difieren en la rotación óptica (y en interacciones con otras moléculas quirales).',
      },
      {
        tipo: 'multiple',
        enunciado: 'En 1-buteno y 2-buteno, ¿qué cambia?',
        opciones: ['la fórmula molecular', 'la posición del doble enlace', 'el grupo funcional', 'nada'],
        correcta: 1,
        explicacion: 'Misma fórmula C₄H₈, mismo grupo (alqueno), pero el doble enlace está en distinto lugar → isómeros de posición.',
      },
    ],
  },
  relacionados: ['organica-hidrocarburos', 'alcoholes-aldehidos-cetonas', 'mecanismos-reaccion-organica', 'biomoleculas'],
  tags: ['isomería', 'isómeros estructurales', 'cis-trans', 'quiralidad', 'enantiómeros', 'estereoisomería', 'óptica'],
};
