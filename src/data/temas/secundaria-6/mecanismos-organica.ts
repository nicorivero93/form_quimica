import type { Tema } from '@/types/tema';

export const mecanismosOrganica: Tema = {
  slug: 'mecanismos-reaccion-organica',
  titulo: 'Mecanismos de reacción orgánica',
  anios: ['secundaria-6'],
  area: 'organica',
  nivel: 'avanzado',
  resumen:
    'Los 4 tipos fundamentales de reacciones orgánicas: sustitución, eliminación, adición y oxidación-reducción.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En química inorgánica una reacción suele ocurrir en un solo paso. En orgánica los procesos son más sutiles: hay **mecanismos** que describen cómo se rompen y forman enlaces paso a paso. Conocer el mecanismo permite predecir el producto correcto.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cuatro tipos básicos',
      texto:
        '**Sustitución**: un átomo o grupo se reemplaza por otro. **Eliminación**: dos grupos vecinos salen y se forma un doble enlace. **Adición**: un doble o triple enlace se abre y se le agregan dos grupos. **Redox**: cambia el número de oxidación de algún C (oxidación o reducción).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Símbolo', 'Sustrato típico', 'Ejemplo'],
      filas: [
        ['Sustitución', 'S (SN1, SN2)', 'alcanos halogenados, alcoholes', 'CH₃Cl + OH⁻ → CH₃OH + Cl⁻'],
        ['Eliminación', 'E (E1, E2)', 'haluros, alcoholes', 'CH₃CH₂Br → CH₂=CH₂ + HBr'],
        ['Adición', 'A', 'alquenos, alquinos', 'CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br'],
        ['Oxidación', '[O]', 'alcoholes, aldehídos', 'CH₃OH → HCHO → HCOOH'],
        ['Reducción', '[H]', 'aldehídos, alquenos', 'HCHO + H₂ → CH₃OH'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Sustitución: SN1 vs SN2',
      texto:
        '**SN1** (1° orden): primero sale el grupo saliente (forma carbocatión), después entra el nucleófilo. Favorecido en C terciarios. **SN2** (2° orden): el nucleófilo ataca y el grupo sale al mismo tiempo (un solo paso). Favorecido en C primarios.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Adición a alquenos: Markovnikov',
      texto:
        'Cuando un H-X (HCl, HBr, HI) se adiciona a un alqueno asimétrico, **el H va al carbono que ya tiene más H** (regla de Markovnikov). Razón: el carbocatión más estable es el más sustituido (3° > 2° > 1°).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Reacción', 'Mecanismo', 'Producto'],
      filas: [
        ['CH₂=CH-CH₃ + HBr', 'adición Markovnikov', 'CH₃-CHBr-CH₃ (no CH₂Br-CH₂-CH₃)'],
        ['CH₂=CH₂ + Br₂', 'adición de halógeno', 'CH₂Br-CH₂Br (anti)'],
        ['Alqueno + H₂ (Pt)', 'hidrogenación', 'alcano correspondiente'],
        ['CH₃-CH₂Br + KOH (etanol)', 'eliminación E2', 'CH₂=CH₂ + KBr + H₂O'],
        ['CH₃-CH₂Br + KOH (agua)', 'sustitución SN2', 'CH₃-CH₂OH + KBr'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Sustitución vs eliminación con la misma base',
      texto:
        'KOH puede dar sustitución o eliminación. **Solvente acuoso + temperatura baja → SN2** (sustitución). **Solvente etanólico + alta T → E2** (eliminación). El mismo reactivo, distinto resultado según condiciones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La oxidación de alcoholes sigue una secuencia: **alcohol primario → aldehído → ácido carboxílico** (con K₂Cr₂O₇/H₂SO₄). Los **alcoholes secundarios** se oxidan a **cetonas** (que ya no se oxidan más fácil). Los **terciarios** no se oxidan.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Los mecanismos no son "magia": cada flecha que se dibuja representa el movimiento de un par de electrones. La química orgánica es predictiva si seguís el flujo de electrones desde nucleófilos (ricos en e⁻) hacia electrófilos (pobres en e⁻).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Predecir producto Markovnikov',
      enunciado:
        '¿Cuál es el producto principal de $CH_3-CH=CH_2 + HCl$?',
      pasos: [
        {
          explicacion:
            'En el alqueno asimétrico, el H del HCl se va al carbono que ya tiene MÁS hidrógenos (CH₂=).',
        },
        {
          explicacion:
            'Por lo tanto el Cl se va al carbono más sustituido (CH del medio).',
          latex: 'CH_3 - CH = CH_2 + HCl \\to CH_3 - CHCl - CH_3',
        },
      ],
      resultado: '2-cloropropano (no 1-cloropropano).',
    },
    {
      titulo: 'Sustitución vs eliminación',
      enunciado:
        '¿Qué producto da la reacción de bromuro de etilo (CH₃CH₂Br) con KOH alcohólico a 80 °C?',
      pasos: [
        {
          explicacion:
            'KOH en etanol + alta T favorece **eliminación E2**.',
        },
        {
          explicacion:
            'El OH⁻ saca el H de un carbono adyacente al Br, se forma un doble enlace y sale Br⁻.',
          latex: 'CH_3 - CH_2Br + KOH \\xrightarrow{\\Delta, \\, EtOH} CH_2 = CH_2 + KBr + H_2O',
        },
      ],
      resultado: 'Eteno (etileno) + bromuro de potasio + agua.',
    },
  ],
  erroresComunes: [
    'Aplicar Markovnikov a alquenos simétricos (CH₂=CH₂). No hay diferencia entre carbonos: cualquier producto es el mismo.',
    'Pensar que SN1 y SN2 dan productos distintos. El producto es similar; lo que difiere es la velocidad y la estereoquímica (SN2 invierte la configuración).',
    'Olvidarse que los alcoholes terciarios no se oxidan en condiciones suaves. Solo primarios y secundarios.',
    'Confundir adición con sustitución. Adición ABRE un doble enlace y agrega 2 grupos. Sustitución reemplaza 1 grupo por otro sin tocar enlaces múltiples.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En la reacción $CH_2 = CH - CH_3 + HBr$, el producto principal es:',
        opciones: ['1-bromopropano', '2-bromopropano', 'propano', 'propino'],
        correcta: 1,
        explicacion: 'Por Markovnikov, el H va al carbono más hidrogenado y el Br al otro: 2-bromopropano.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'La oxidación moderada de un alcohol secundario produce:',
        opciones: ['un aldehído', 'una cetona', 'un éter', 'un alqueno'],
        correcta: 1,
        explicacion: 'Alcohol secundario → cetona (no se sigue oxidando fácilmente).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En una reacción de adición, se forma un doble enlace nuevo.',
        respuesta: false,
        explicacion: 'Al revés: la adición ROMPE un doble enlace para agregar dos grupos. La que forma doble enlace es la eliminación.',
      },
      {
        tipo: 'multiple',
        enunciado: 'La hidrogenación de un alqueno con catalizador de Pt produce:',
        opciones: ['un alcano', 'un alquino', 'un alcohol', 'un éster'],
        correcta: 0,
        explicacion: '$RHC=CHR + H_2 \\to RH_2C-CH_2R$ (alcano correspondiente).',
      },
    ],
  },
  relacionados: ['organica-hidrocarburos', 'alcoholes-aldehidos-cetonas', 'isomeria-avanzada'],
  tags: ['mecanismos', 'sustitución', 'eliminación', 'adición', 'markovnikov', 'SN1', 'SN2', 'orgánica'],
};
