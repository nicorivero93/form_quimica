import type { Tema } from '@/types/tema';

export const alcoholesAldehidosCetonas: Tema = {
  slug: 'alcoholes-aldehidos-cetonas',
  titulo: 'Alcoholes, aldehídos y cetonas',
  anios: ['secundaria-5'],
  area: 'organica',
  nivel: 'intermedio',
  resumen:
    'Tres familias de compuestos orgánicos relacionadas por oxidación: cómo se nombran, cómo se distinguen y para qué se usan.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Estas tres familias están relacionadas: oxidando un **alcohol** primario obtenés un **aldehído**, y oxidando más un ácido carboxílico. Oxidando un alcohol secundario obtenés una **cetona** (que ya no se oxida más fácil).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Familia', 'Grupo funcional', 'Sufijo', 'Ejemplo común'],
      filas: [
        ['Alcohol primario', 'R–CH₂–OH', '-ol', 'metanol (CH₃OH), etanol (C₂H₅OH)'],
        ['Alcohol secundario', 'R₂CH–OH', '-ol', '2-propanol (alcohol isopropílico)'],
        ['Alcohol terciario', 'R₃C–OH', '-ol', 't-butanol'],
        ['Aldehído', 'R–CHO', '-al', 'metanal (formaldehído), etanal (acetaldehído)'],
        ['Cetona', 'R–CO–R\'', '-ona', 'propanona (acetona), butanona'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Diferencia clave aldehído vs. cetona',
      texto:
        'En el **aldehído** el grupo C=O está en el extremo de la cadena (con un H pegado). En la **cetona** está entre dos carbonos. Por eso los aldehídos se oxidan más fácil (el H del CHO sale como agua + el O del oxidante).',
    },
    {
      tipo: 'parrafo',
      texto:
        'La oxidación de alcoholes es un patrón importante en química y biología (las enzimas alcohol-deshidrogenasa procesan así el etanol del vino):',
    },
    {
      tipo: 'latex',
      latex: '\\text{R-CH}_2\\text{OH} \\xrightarrow{[O]} \\text{R-CHO} \\xrightarrow{[O]} \\text{R-COOH}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo nombrar',
      texto:
        '(1) cadena más larga que contenga el grupo funcional, (2) numerar dándole el menor número al grupo funcional, (3) sufijo según familia y posición. Ej: $CH_3-CHOH-CH_3$ → propan-2-ol.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Compuesto', 'Uso cotidiano'],
      filas: [
        ['Metanol', 'combustible, anticongelante (tóxico, ciega)'],
        ['Etanol', 'bebidas, biocombustible, antiséptico (alcohol etílico)'],
        ['2-propanol', 'antiséptico de farmacia, limpiador'],
        ['Etilenglicol', 'anticongelante de autos (diol)'],
        ['Glicerina', 'cosmética, jabones (triol)'],
        ['Formaldehído', 'preservación de tejidos, plásticos (formol)'],
        ['Acetona', 'quita esmalte, disolvente'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar y nombrar',
      enunciado: 'Identificar la familia y nombrar IUPAC: $CH_3 - CO - CH_3$.',
      pasos: [
        {
          explicacion: 'C=O entre dos carbonos → cetona.',
        },
        {
          explicacion: 'Cadena de 3 C → propanona. Solo hay una posición posible para el C=O.',
        },
      ],
      resultado: 'Es propanona (acetona en nombre vulgar).',
    },
    {
      titulo: 'Predecir el producto de una oxidación',
      enunciado:
        '¿Qué producto da la oxidación moderada del 2-propanol con un oxidante suave?',
      pasos: [
        {
          explicacion:
            'El 2-propanol es alcohol secundario: $CH_3-CHOH-CH_3$.',
        },
        {
          explicacion:
            'Los alcoholes secundarios al oxidarse pierden el H del C-OH y forman cetona.',
          latex: 'CH_3 - CHOH - CH_3 \\xrightarrow{[O]} CH_3 - CO - CH_3',
        },
      ],
      resultado: 'Da propanona (acetona).',
    },
  ],
  erroresComunes: [
    'No incluir el carbono del CHO en la cadena principal cuando contás carbonos del aldehído.',
    'Confundir 1-butanol con 2-butanol. El número indica DÓNDE está el OH en la cadena.',
    'Pensar que cetonas y aldehídos son lo mismo: el grupo C=O está, pero en distinta posición. Reaccionan diferente.',
    'Asumir que un alcohol terciario se oxida como los otros. NO: no tiene H en el C-OH para arrancar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula del etanol?',
        opciones: ['CH₃OH', 'C₂H₅OH', 'C₂H₆O₂', 'CH₃COOH'],
        correcta: 1,
        explicacion: 'Etanol = 2 carbonos + OH = $CH_3-CH_2-OH = C_2H_5OH$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'La acetona ($CH_3-CO-CH_3$) es:',
        opciones: ['un alcohol', 'un aldehído', 'una cetona', 'un éter'],
        correcta: 2,
        explicacion: 'Tiene un grupo C=O entre dos carbonos → cetona.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un alcohol terciario no puede oxidarse a aldehído ni a cetona.',
        respuesta: true,
        explicacion:
          'No tiene H en el carbono del OH para arrancar, así que la oxidación no procede en condiciones normales.',
      },
    ],
  },
  relacionados: ['organica-hidrocarburos'],
  tags: ['alcoholes', 'aldehídos', 'cetonas', 'orgánica', 'oxidación', 'IUPAC'],
};
