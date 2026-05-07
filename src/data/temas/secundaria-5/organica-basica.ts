import type { Tema } from '@/types/tema';

export const organicaBasica: Tema = {
  slug: 'organica-hidrocarburos',
  titulo: 'Química orgánica: hidrocarburos y grupos funcionales',
  anios: ['secundaria-5'],
  area: 'organica',
  nivel: 'intro',
  resumen:
    'Los compuestos del carbono: alcanos, alquenos, alquinos y los grupos funcionales más importantes (alcoholes, ácidos, ésteres, aminas).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La **química orgánica** estudia los compuestos del carbono. El carbono forma 4 enlaces y se combina consigo mismo y con H, O, N, S, halógenos formando millones de compuestos: desde el metano hasta el ADN.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Hidrocarburos',
      texto:
        'Compuestos formados solo por C e H. Se clasifican según el tipo de enlace:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Familia', 'Enlaces C-C', 'Fórmula general', 'Ejemplo'],
      filas: [
        ['Alcanos', 'simples', '$C_n H_{2n+2}$', 'metano CH₄, etano C₂H₆'],
        ['Alquenos', '1 doble', '$C_n H_{2n}$', 'eteno C₂H₄ (etileno)'],
        ['Alquinos', '1 triple', '$C_n H_{2n-2}$', 'etino C₂H₂ (acetileno)'],
        ['Aromáticos', 'anillo deslocalizado', '—', 'benceno C₆H₆'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las cadenas pueden ser **lineales**, **ramificadas** o **cíclicas**. La nomenclatura IUPAC se basa en: (1) cadena más larga, (2) numerar dándole menor número a la insaturación o sustituyente, (3) sufijos -ano / -eno / -ino.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Prefijos numéricos',
      texto:
        'Met-(1), Et-(2), Prop-(3), But-(4), Pent-(5), Hex-(6), Hept-(7), Oct-(8), Non-(9), Dec-(10).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **grupos funcionales** son átomos o conjuntos que dan al compuesto sus propiedades características. Los más comunes:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Grupo', 'Nombre', 'Fórmula', 'Sufijo / prefijo', 'Ejemplo'],
      filas: [
        ['—OH', 'alcohol', 'R–OH', '-ol', 'etanol C₂H₅OH'],
        ['—CHO', 'aldehído', 'R–CHO', '-al', 'metanal HCHO (formaldehído)'],
        ['—CO—', 'cetona', 'R–CO–R\'', '-ona', 'propanona CH₃COCH₃ (acetona)'],
        ['—COOH', 'ácido carboxílico', 'R–COOH', 'ácido -oico', 'ácido acético CH₃COOH'],
        ['—COO—', 'éster', 'R–COO–R\'', '-oato de ...ilo', 'acetato de etilo'],
        ['—NH₂', 'amina', 'R–NH₂', '-amina', 'metilamina CH₃NH₂'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Isomería',
      texto:
        'Distintos compuestos pueden tener la misma fórmula molecular pero distinta estructura (isómeros). Ejemplo: $C_4 H_{10}$ puede ser butano (lineal) o isobutano (ramificado).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Alcanos (saturados)',
      latex: 'C_n H_{2n+2}',
      variables: [{ simbolo: 'n', nombre: 'número de carbonos', unidad: '—' }],
      cuandoUsar: 'Cadena abierta, solo simples enlaces. Ej: n=4 → C₄H₁₀ (butano).',
    },
    {
      nombre: 'Alquenos (un doble enlace)',
      latex: 'C_n H_{2n}',
      variables: [{ simbolo: 'n', nombre: 'número de carbonos', unidad: '—' }],
    },
    {
      nombre: 'Alquinos (un triple enlace)',
      latex: 'C_n H_{2n-2}',
      variables: [{ simbolo: 'n', nombre: 'número de carbonos', unidad: '—' }],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar familia y nombrar',
      enunciado: 'Identificar la familia y nombrar: $CH_3 - CH = CH - CH_3$.',
      pasos: [
        {
          explicacion: 'Contamos carbonos: 4. Hay un doble enlace → es un **alqueno**.',
        },
        {
          explicacion: 'La cadena de 4 C con doble enlace se llama buteno. El doble enlace está entre los C 2 y 3.',
        },
        {
          explicacion:
            'Numeramos para dar el menor número al doble enlace: ya está, queda en posición 2.',
        },
      ],
      resultado: 'Es 2-buteno (or but-2-eno en IUPAC moderna).',
    },
    {
      titulo: 'Reconocer grupo funcional',
      enunciado:
        'Identificar el grupo funcional y nombrar: $CH_3 - CH_2 - COOH$.',
      pasos: [
        {
          explicacion: 'Vemos el grupo —COOH al final → ácido carboxílico.',
        },
        {
          explicacion: 'La cadena tiene 3 C contando el del COOH → propano. Le agregamos "ácido -oico": ácido propanoico.',
        },
      ],
      resultado: 'Es ácido propanoico (también conocido como ácido propiónico).',
    },
  ],
  erroresComunes: [
    'No contar el carbono del grupo funcional (—COOH, —CHO) en la cadena principal.',
    'Confundir alquenos con alquinos. Alqueno = doble (-eno), alquino = triple (-ino).',
    'Numerar la cadena empezando del lado equivocado: hay que dar el menor número a la insaturación o sustituyente.',
    'Asumir que la fórmula molecular determina la estructura. Hay isómeros: misma fórmula, distinta organización.',
    'Olvidarse que un átomo de C siempre forma 4 enlaces. Si te falta un H, hay un doble/triple o un anillo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula general de los alcanos?',
        opciones: ['$C_n H_{n}$', '$C_n H_{2n}$', '$C_n H_{2n+2}$', '$C_n H_{2n-2}$'],
        correcta: 2,
        explicacion: 'Los alcanos son $C_n H_{2n+2}$. Para n=1: CH₄ (metano).',
      },
      {
        tipo: 'multiple',
        enunciado: 'El grupo funcional —COOH corresponde a:',
        opciones: ['alcohol', 'aldehído', 'ácido carboxílico', 'éster'],
        correcta: 2,
        explicacion: 'Los ácidos carboxílicos terminan en —COOH. Su sufijo IUPAC es "ácido -oico".',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos átomos de hidrógeno tiene un alcano de 5 carbonos (pentano)?',
        respuesta: 12,
        explicacion: '$C_n H_{2n+2}$ con n=5: $H = 2 \\times 5 + 2 = 12$. Pentano es C₅H₁₂.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El etanol y el éter dimetílico tienen la misma fórmula molecular C₂H₆O.',
        respuesta: true,
        explicacion: 'Son isómeros estructurales: misma fórmula, distinta organización (—OH vs. —O—).',
      },
    ],
  },
  tags: ['orgánica', 'hidrocarburos', 'alcanos', 'alquenos', 'alquinos', 'grupos funcionales', 'IUPAC'],
};
