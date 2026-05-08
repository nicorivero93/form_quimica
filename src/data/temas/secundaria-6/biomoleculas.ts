import type { Tema } from '@/types/tema';

export const biomoleculas: Tema = {
  slug: 'biomoleculas',
  titulo: 'Biomoléculas: la química de la vida',
  anios: ['secundaria-6'],
  area: 'organica',
  nivel: 'avanzado',
  resumen:
    'Las 4 grandes familias de moléculas que sostienen la vida: hidratos de carbono, lípidos, proteínas y ácidos nucleicos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Toda la materia viva está hecha de **biomoléculas** organizadas en 4 grandes familias. Cada una tiene una estructura química característica y cumple funciones específicas en el organismo: energía, almacenamiento, estructura o información.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Familia', 'Monómero', 'Función principal', 'Ejemplo'],
      filas: [
        ['Hidratos de carbono', 'monosacárido (glucosa)', 'energía rápida + estructura', 'almidón, celulosa, glucosa'],
        ['Lípidos', 'glicerol + ácidos grasos', 'reserva energética + membranas', 'grasas, aceites, colesterol'],
        ['Proteínas', 'aminoácido (20 distintos)', 'enzimas, transporte, estructura', 'hemoglobina, queratina, insulina'],
        ['Ácidos nucleicos', 'nucleótido', 'información genética', 'ADN, ARN'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Hidratos de carbono (glúcidos)',
      texto:
        'Fórmula general $(CH_2O)_n$. Se clasifican por tamaño: **monosacáridos** (glucosa, fructosa, galactosa), **disacáridos** (sacarosa = glu+fru; lactosa = glu+gal; maltosa = glu+glu) y **polisacáridos** (almidón, glucógeno, celulosa). Cada disacárido o polisacárido se forma por **condensación** liberando H₂O.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La diferencia entre **almidón** (digerible) y **celulosa** (no digerible para humanos) es solo el **tipo de enlace** entre glucosas: α-1,4 vs. β-1,4. Tan parecidas pero la enzima que rompe una no rompe la otra.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Lípidos',
      texto:
        'Familia heterogénea unida por su **insolubilidad en agua**. Los más comunes: **triglicéridos** (3 ácidos grasos + glicerol; reserva de energía), **fosfolípidos** (forman las membranas celulares con su característica bicapa), **esteroides** (colesterol, hormonas como testosterona y estrógeno), **ceras** (impermeables).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo de ácido graso', 'Estructura', 'Estado a 25 °C', 'Ejemplo'],
      filas: [
        ['Saturado', 'sin dobles enlaces', 'sólido (grasa)', 'manteca, sebo'],
        ['Mono-insaturado', '1 doble enlace', 'líquido', 'aceite de oliva (oleico)'],
        ['Poli-insaturado', '2+ dobles enlaces', 'líquido', 'omega-3, linoleico'],
        ['Trans', 'dobles cis convertidos a trans', 'sólido', 'margarina (problemáticos para salud)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Proteínas',
      texto:
        'Polímeros de **aminoácidos** (hay 20 distintos en proteínas humanas). Los AA se unen por **enlace peptídico** (carboxilo de uno + amino del siguiente, liberando H₂O). El orden de los AA = **estructura primaria**. Después la cadena se pliega en **hélices α y láminas β** (secundaria), forma globular o fibrosa (terciaria) y a veces varias subunidades (cuaternaria, ej. hemoglobina).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Desnaturalización',
      texto:
        'El calor, los ácidos o el alcohol pueden romper la estructura tridimensional de una proteína sin romper su cadena de AA. Por eso un huevo se pone sólido al cocinar (ovalbúmina desnaturalizada). Una proteína desnaturalizada generalmente pierde su función (la enzima ya no cataliza).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ácidos nucleicos (ADN/ARN)',
      texto:
        'Polímeros de **nucleótidos** (cada uno = base nitrogenada + azúcar + fosfato). Las bases del ADN son **A, T, G, C** (ARN tiene U en vez de T). El ADN es de **doble cadena** unida por puentes de hidrógeno entre bases complementarias (A-T, G-C). El ARN es de **una sola cadena** y suele ser temporal (mensajero, etc).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Macromolécula', '¿Qué se libera al hidrolizarse?'],
      filas: [
        ['Almidón / glucógeno / celulosa', 'glucosa'],
        ['Triglicérido', 'glicerol + 3 ácidos grasos'],
        ['Proteína', 'aminoácidos'],
        ['ADN / ARN', 'nucleótidos (luego: bases + azúcar + fosfato)'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar tipo de biomolécula',
      enunciado:
        'Clasificar: (a) glucógeno, (b) testosterona, (c) hemoglobina, (d) ARN mensajero.',
      pasos: [
        {
          explicacion:
            '(a) Glucógeno: polímero de glucosa (reserva en hígado/músculo) → **hidrato de carbono** (polisacárido).',
        },
        {
          explicacion:
            '(b) Testosterona: hormona derivada del colesterol → **lípido** (esteroide).',
        },
        {
          explicacion:
            '(c) Hemoglobina: polímero de aminoácidos con grupos hemo (transporta O₂) → **proteína**.',
        },
        {
          explicacion:
            '(d) ARN mensajero: polímero de nucleótidos (lleva info del ADN al ribosoma) → **ácido nucleico**.',
        },
      ],
      resultado: 'a: HC, b: lípido, c: proteína, d: ácido nucleico.',
    },
    {
      titulo: 'Hidrólisis',
      enunciado:
        '¿Qué obtenemos al hidrolizar un trozo de manteca y un trozo de carne (proteína)?',
      pasos: [
        {
          explicacion:
            '**Manteca** (triglicéridos saturados): hidrólisis con base (saponificación) → **glicerol + 3 sales de ácidos grasos** (jabón).',
        },
        {
          explicacion:
            '**Carne**: hidrólisis enzimática (en estómago/intestino) → **aminoácidos** libres que se absorben en el intestino delgado.',
        },
      ],
      resultado: 'Manteca → glicerol + ácidos grasos. Carne → aminoácidos.',
    },
  ],
  erroresComunes: [
    'Pensar que "lípido" es sinónimo de "grasa". Las grasas son una clase de lípidos. Hay otros (fosfolípidos, esteroides, ceras).',
    'Confundir almidón con celulosa. Mismo monómero (glucosa), pero distinto enlace → distinta digestibilidad.',
    'Decir que las proteínas dan energía rápido. Su rol principal es estructural y catalítico (enzimas). El cuerpo las usa para energía solo si faltan HC y lípidos.',
    'Olvidarse que el ADN es doble cadena (con apareamiento A-T y G-C) y el ARN es simple cadena.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es el monómero de las proteínas?',
        opciones: ['Glucosa', 'Aminoácido', 'Nucleótido', 'Glicerol'],
        correcta: 1,
        explicacion: 'Las proteínas son polímeros de aminoácidos unidos por enlace peptídico.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Las bases del ADN se aparean según:',
        opciones: ['A-G y T-C', 'A-T y G-C', 'A-C y T-G', 'todas con todas'],
        correcta: 1,
        explicacion: 'Apareamiento Watson-Crick: A con T (2 puentes H), G con C (3 puentes H).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El colesterol es un lípido.',
        respuesta: true,
        explicacion: 'Sí: es un esteroide (familia de los lípidos). Forma parte de las membranas y precursor de hormonas.',
      },
      {
        tipo: 'multiple',
        enunciado: 'La hidrólisis de un disacárido como la sacarosa produce:',
        opciones: ['agua + CO₂', 'glucosa + fructosa', 'aminoácidos', 'ácidos grasos'],
        correcta: 1,
        explicacion: 'Sacarosa = glucosa + fructosa unidas. La hidrólisis las separa con agua.',
      },
    ],
  },
  relacionados: ['polimeros', 'organica-hidrocarburos', 'isomeria-avanzada', 'alcoholes-aldehidos-cetonas'],
  tags: ['biomoléculas', 'proteínas', 'lípidos', 'hidratos de carbono', 'ADN', 'ARN', 'aminoácidos', 'glucosa'],
};
