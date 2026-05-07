import type { Tema } from '@/types/tema';

export const acidosEsteresAminas: Tema = {
  slug: 'acidos-esteres-aminas',
  titulo: 'Ácidos carboxílicos, ésteres y aminas',
  anios: ['secundaria-5'],
  area: 'organica',
  nivel: 'intermedio',
  resumen:
    'Los grupos funcionales con O y N que aparecen en los ácidos del vinagre, perfumes, fármacos y bases biológicas (aminoácidos, neurotransmisores).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Después de los hidrocarburos, alcoholes y aldehídos, vienen tres grupos clave de la química orgánica: los **ácidos carboxílicos**, los **ésteres** (sus derivados de aroma frutal) y las **aminas** (con nitrógeno, de gusto a base).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Familia', 'Grupo', 'Sufijo / prefijo', 'Ejemplo'],
      filas: [
        ['Ácido carboxílico', '–COOH', 'ácido -oico', 'ácido etanoico (acético, vinagre)'],
        ['Éster', '–COO–', '-oato de -ilo', 'acetato de etilo (olor a quitaesmalte)'],
        ['Amina primaria', '–NH₂', '-amina', 'metilamina'],
        ['Amina secundaria', '–NH–', 'di...amina', 'dimetilamina'],
        ['Amida', '–CO–NH₂', '-amida', 'urea (aunque CO–NH₂)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Reacción de esterificación',
      texto:
        'Un ácido carboxílico + un alcohol → éster + agua (con catalizador ácido y calor). Es reversible. Por eso muchos ésteres tienen olor a fruta (los aromas naturales son ésteres formados por levaduras).',
    },
    {
      tipo: 'latex',
      latex: 'R - COOH \\; + \\; HO - R\' \\; \\rightleftharpoons \\; R - COO - R\' \\; + \\; H_2O',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **ácidos carboxílicos** son ácidos débiles ($K_a$ chico): se disocian parcialmente. El ácido acético, por ejemplo, tiene $pK_a \\approx 4{,}76$ — bastante ácido pero no fuerte como HCl.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Aminas: bases orgánicas',
      texto:
        'El N de las aminas tiene un par de electrones libres → puede aceptar un H⁺ y formar un catión amonio. Por eso las aminas se comportan como bases. Aplicación: las drogas farmacéuticas se venden como "clorhidratos" (formas protonadas, más solubles).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Compuesto', 'Familia', 'Uso'],
      filas: [
        ['Ácido acético', 'ácido carboxílico', 'vinagre (5-7%)'],
        ['Ácido cítrico', 'tri-carboxílico', 'frutas cítricas, gaseosas, conservante'],
        ['Aspirina', 'éster + ácido', 'analgésico'],
        ['Acetato de etilo', 'éster', 'aroma de pera, disolvente'],
        ['Cafeína', 'amina cíclica (metil-xantina)', 'estimulante (café, té, mate)'],
        ['Adrenalina', 'amina', 'neurotransmisor / fármaco'],
        ['Urea', 'amida', 'fertilizantes, eliminada en orina'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar grupo funcional',
      enunciado:
        '¿Qué tipo de compuesto es $CH_3 - COO - CH_2 - CH_3$?',
      pasos: [
        {
          explicacion:
            'El grupo central es –COO– entre dos cadenas → éster.',
        },
        {
          explicacion:
            'Viene del ácido acético (CH₃COOH) + etanol → acetato de etilo.',
        },
      ],
      resultado: 'Es un éster: acetato de etilo.',
    },
    {
      titulo: 'Esterificación',
      enunciado:
        'Predecir el producto de la reacción entre ácido fórmico (HCOOH) y metanol (CH₃OH).',
      pasos: [
        {
          explicacion:
            'Esterificación: el OH del ácido pierde el H y el OH del alcohol pierde el OH; se unen formando el enlace O–C de éster + agua.',
        },
        {
          explicacion:
            'Producto: H–COO–CH₃ (formiato de metilo) + H₂O.',
          latex: 'HCOOH + CH_3OH \\rightleftharpoons HCOOCH_3 + H_2O',
        },
      ],
      resultado: 'Formiato de metilo (olor a ron) + agua.',
    },
  ],
  erroresComunes: [
    'Confundir ácido carboxílico con éster: en ácido el grupo termina en –OH (–COOH); en éster está cerrado (–COO–R\').',
    'Olvidarse de contar el carbono del COOH en la cadena principal.',
    'Pensar que las aminas son ácidas (por el "amin" que parece "ammonia"). Son **bases** porque el N tiene par libre.',
    'No distinguir amina primaria, secundaria y terciaria (cuántos C están unidos al N).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'El ácido acético del vinagre tiene fórmula:',
        opciones: ['$HCOOH$', '$CH_3 COOH$', '$C_2 H_5 OH$', '$CH_3 CHO$'],
        correcta: 1,
        explicacion: 'Vinagre = ácido acético = ácido etanoico = CH₃COOH.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Una reacción de esterificación produce:',
        opciones: ['éster + agua', 'éster + alcohol', 'sal + agua', 'éter + agua'],
        correcta: 0,
        explicacion: 'Ácido carboxílico + alcohol → éster + H₂O.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Las aminas se comportan como bases porque el N tiene un par de electrones libres.',
        respuesta: true,
        explicacion:
          'Sí: ese par puede aceptar un protón formando un catión amonio (R–NH₃⁺), por eso son bases.',
      },
    ],
  },
  relacionados: ['organica-hidrocarburos', 'alcoholes-aldehidos-cetonas'],
  tags: ['ácidos carboxílicos', 'ésteres', 'aminas', 'esterificación', 'orgánica', 'amidas'],
};
