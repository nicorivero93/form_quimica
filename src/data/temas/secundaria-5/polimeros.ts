import type { Tema } from '@/types/tema';

export const polimeros: Tema = {
  slug: 'polimeros',
  titulo: 'Polímeros: plásticos y biopolímeros',
  anios: ['secundaria-5'],
  area: 'organica',
  nivel: 'intro',
  resumen:
    'Cómo se forman las cadenas largas de monómeros: poliadición y policondensación. Plásticos comunes y polímeros biológicos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un **polímero** es una macromolécula formada por la repetición de una unidad pequeña llamada **monómero**. Si tenés monómero "M" y se repite N veces, el polímero es $-M-M-M-\\ldots-M-$ (con N entre 100 y millones).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Dos formas de polimerizar',
      texto:
        '**Adición**: el doble enlace del monómero se abre y se conecta con el siguiente. No se pierden átomos. Ej: etileno → polietileno. **Condensación**: dos monómeros se unen liberando una molécula chica (H₂O, HCl). Ej: aminoácidos → proteína + H₂O.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Plástico', 'Monómero', 'Tipo', 'Uso típico'],
      filas: [
        ['Polietileno (PE)', 'eteno (CH₂=CH₂)', 'adición', 'bolsas, botellas'],
        ['Polipropileno (PP)', 'propeno (CH₃-CH=CH₂)', 'adición', 'tuppers, sillas, alfombras'],
        ['Poliestireno (PS)', 'estireno (vinilbenceno)', 'adición', 'telgopor, vasitos'],
        ['PVC', 'cloruro de vinilo (CH₂=CHCl)', 'adición', 'tuberías, canaletas'],
        ['PET', 'ácido tereftálico + etilenglicol', 'condensación', 'botellas de gaseosa'],
        ['Nylon', 'diaminas + diácidos', 'condensación', 'medias, sogas'],
        ['Teflón', 'tetrafluoretileno', 'adición', 'sartenes antiadherentes'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo identificar el monómero',
      texto:
        'Al ver el polímero, buscá la unidad mínima que se repite (sin contar los extremos). Si era poliadición, el monómero suele tener un doble enlace que se rompió. Si fue policondensación, faltan átomos en las uniones (grupos OH y H que se fueron como agua).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **biopolímeros** son los polímeros naturales que sostienen la vida:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Biopolímero', 'Monómero', 'Función'],
      filas: [
        ['Almidón', 'glucosa α', 'reserva de energía en plantas'],
        ['Celulosa', 'glucosa β', 'estructura de plantas (madera)'],
        ['Glucógeno', 'glucosa α (ramificada)', 'reserva en animales (hígado, músculo)'],
        ['Proteínas', 'aminoácidos (20 distintos)', 'todo: enzimas, transporte, estructura'],
        ['ADN/ARN', 'nucleótidos', 'información genética'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Reciclado',
      texto:
        'Los polímeros se identifican con números 1-7 dentro de un triángulo. Solo algunos se reciclan fácil: PET (1) y HDPE (2) sí; PVC (3) y PS (6) son problemáticos. El telgopor (PS expandido) tarda cientos de años en degradarse.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar tipo de polimerización',
      enunciado:
        'El polipropileno se forma de propeno (CH₃-CH=CH₂). ¿Es por adición o condensación? ¿Cómo se ve la unidad?',
      pasos: [
        {
          explicacion:
            'El monómero tiene un doble enlace, no hay liberación de molécula chica → poliadición.',
        },
        {
          explicacion:
            'El doble enlace se abre y se forma una cadena de carbonos con un metilo colgando cada 2 C.',
          latex: '\\ldots - CH_2 - CH(CH_3) - CH_2 - CH(CH_3) - \\ldots',
        },
      ],
      resultado: 'Es poliadición; la unidad repetitiva es $-[CH_2-CH(CH_3)]-$.',
    },
    {
      titulo: 'Reconocer un polímero natural',
      enunciado:
        'La celulosa de la madera, ¿de qué monómero está hecha y cómo se forma?',
      pasos: [
        {
          explicacion:
            'Celulosa = polímero lineal de glucosa (en su forma β).',
        },
        {
          explicacion:
            'Cada vez que dos glucosas se unen pierden una molécula de agua → policondensación.',
        },
      ],
      resultado:
        'Celulosa = polímero por condensación de glucosa β. La diferencia con almidón está en la orientación del enlace (β en celulosa, α en almidón).',
    },
  ],
  erroresComunes: [
    'Pensar que "plástico" es una sustancia única. Hay decenas de polímeros distintos con propiedades muy diferentes.',
    'Confundir "polímero" con "macromolécula": todo polímero es macromolécula, pero no toda macromolécula es polímero (depende si la unidad se repite).',
    'Olvidarse que en condensación se libera una molécula chica. Si no, es adición.',
    'Suponer que los polímeros naturales (proteínas, ADN) no son polímeros porque no son plástico. Sí lo son.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'El monómero del polietileno es:',
        opciones: ['etano', 'etino', 'eteno (etileno)', 'etanol'],
        correcta: 2,
        explicacion: 'PE se forma por poliadición del eteno (CH₂=CH₂).',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál NO se forma por condensación?',
        opciones: ['Nylon', 'PET', 'Polietileno', 'Proteínas'],
        correcta: 2,
        explicacion: 'El polietileno se forma por poliadición. Los otros sí son condensación.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El ADN es un polímero.',
        respuesta: true,
        explicacion: 'Sí: es un biopolímero formado por nucleótidos como monómeros.',
      },
    ],
  },
  relacionados: ['organica-hidrocarburos', 'acidos-esteres-aminas'],
  tags: ['polímeros', 'plásticos', 'monómero', 'adición', 'condensación', 'biopolímero', 'PET', 'reciclado'],
};
