import type { Tema } from '@/types/tema';

export const concentracion: Tema = {
  slug: 'concentracion-soluciones',
  titulo: 'Concentración de soluciones',
  anios: ['secundaria-4'],
  area: 'soluciones',
  nivel: 'intermedio',
  resumen:
    'Cómo expresar cuánto soluto hay disuelto: molaridad, %m/v, %m/m, ppm, y cómo se calculan diluciones.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una **solución** es una mezcla homogénea de un **soluto** disuelto en un **solvente**. La concentración te dice qué tanto soluto hay por unidad de solución (o de solvente).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Distintas formas de expresar concentración',
      texto:
        'No hay una única manera "correcta": depende del contexto. En el laboratorio se usa **molaridad**; en farmacia o cocina, **% m/v** o **% m/m**; para contaminantes en agua, **ppm**.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Unidad', 'Definición', 'Cuándo se usa'],
      filas: [
        ['Molaridad (M)', 'mol soluto / L solución', 'Reacciones químicas, equilibrio, pH'],
        ['% m/v', '(g soluto / mL solución) × 100', 'Soluciones farmacéuticas, suero'],
        ['% m/m', '(g soluto / g solución) × 100', 'Mezclas sólidas, aleaciones'],
        ['ppm', 'mg soluto / kg solución', 'Contaminación, trazas'],
        ['Molalidad (m)', 'mol soluto / kg solvente', 'Propiedades coligativas (no varía con T)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para diluciones (agregar solvente a una solución concentrada) usás $C_1 V_1 = C_2 V_2$. Sirve para cualquier unidad de concentración (M, %, etc), siempre que la uses consistente en ambos lados.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pasar entre molaridad y % m/v es común: necesitás la masa molar del soluto y la densidad de la solución (si es muy diluida, ≈ 1 g/mL).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Molaridad',
      latex: 'M = \\dfrac{n_{\\text{soluto}}}{V_{\\text{solución (L)}}}',
      variables: [
        { simbolo: 'M', nombre: 'molaridad', unidad: 'mol/L' },
        { simbolo: 'n', nombre: 'moles de soluto', unidad: 'mol' },
        { simbolo: 'V', nombre: 'volumen de solución', unidad: 'L' },
      ],
    },
    {
      nombre: 'Porcentaje masa/volumen',
      latex: '\\%\\,m/v = \\dfrac{m_{\\text{soluto (g)}}}{V_{\\text{solución (mL)}}} \\times 100',
      variables: [
        { simbolo: '\\%\\,m/v', nombre: 'porcentaje m/v', unidad: '%' },
      ],
      cuandoUsar: 'Soluciones acuosas en farmacia. Ej: suero fisiológico 0,9% m/v de NaCl.',
    },
    {
      nombre: 'Dilución',
      latex: 'C_1 V_1 = C_2 V_2',
      variables: [
        { simbolo: 'C_i', nombre: 'concentración del estado i', unidad: 'cualquiera' },
        { simbolo: 'V_i', nombre: 'volumen del estado i', unidad: 'L o mL' },
      ],
      cuandoUsar: 'Cuando agregás solvente para diluir una solución (los moles de soluto no cambian).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Preparar una solución 0,5 M de NaOH',
      enunciado: 'Calculá cuántos gramos de NaOH necesitás para preparar 250 mL de solución 0,5 M. (M(NaOH) = 40 g/mol)',
      pasos: [
        {
          explicacion: 'Pasamos el volumen a litros: $V = 250 \\, mL = 0{,}25 \\, L$.',
        },
        {
          explicacion: 'Calculamos moles de NaOH necesarios.',
          latex: 'n = M \\cdot V = 0{,}5 \\times 0{,}25 = 0{,}125 \\, mol',
        },
        {
          explicacion: 'Pasamos a gramos.',
          latex: 'm = n \\cdot M = 0{,}125 \\times 40 = 5 \\, g',
        },
      ],
      resultado: 'Necesitás 5 g de NaOH.',
    },
    {
      titulo: 'Dilución de ácido',
      enunciado:
        '¿Cuántos mL de HCl 6 M tenés que tomar para preparar 500 mL de HCl 0,5 M?',
      pasos: [
        {
          explicacion: 'Aplicamos $C_1 V_1 = C_2 V_2$, donde el subíndice 1 es la solución concentrada de partida.',
        },
        {
          explicacion: 'Despejamos V₁.',
          latex: 'V_1 = \\dfrac{C_2 V_2}{C_1} = \\dfrac{0{,}5 \\times 500}{6} \\approx 41{,}7 \\, mL',
        },
        {
          explicacion:
            'Tomás 41,7 mL del HCl 6 M, los pasás a un matraz y enrasás con agua hasta 500 mL.',
        },
      ],
      resultado: 'Necesitás tomar ≈ 41,7 mL de HCl 6 M.',
    },
  ],
  erroresComunes: [
    'Usar mililitros en la fórmula de molaridad. Tienen que ser litros (1 L = 1000 mL).',
    'Confundir % m/v con % m/m. m/v = gramos / mL solución × 100. m/m = gramos / gramos solución × 100.',
    'En diluciones, usar volumen de soluto en lugar de solución. V₁ y V₂ son volúmenes finales de la solución.',
    'Olvidarse que al diluir agregás SOLVENTE hasta llegar al volumen final, no agregás $V_2 - V_1$ de solvente y listo (aunque para soluciones diluidas la diferencia es chica).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es la molaridad de una solución preparada disolviendo 11,7 g de NaCl en agua hasta completar 500 mL? (M(NaCl) = 58,5 g/mol)',
        respuesta: 0.4,
        tolerancia: 0.02,
        unidad: 'M',
        explicacion:
          '$n = 11{,}7 / 58{,}5 = 0{,}2 \\, mol$. $V = 0{,}5 \\, L$. $M = 0{,}2 / 0{,}5 = 0{,}4 \\, M$.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Qué % m/v tiene una solución con 5 g de azúcar en 200 mL de solución?',
        respuesta: 2.5,
        tolerancia: 0.1,
        unidad: '%',
        explicacion: '$\\%\\,m/v = 5/200 \\times 100 = 2{,}5\\%$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Para diluir una solución 2 M a 0,5 M tomando 100 mL del concentrado, ¿hasta qué volumen total enrasás?',
        opciones: ['200 mL', '400 mL', '500 mL', '1 L'],
        correcta: 1,
        explicacion: '$V_2 = C_1 V_1 / C_2 = 2 \\times 100 / 0{,}5 = 400 \\, mL$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Al diluir una solución, los moles totales de soluto no cambian.',
        respuesta: true,
        explicacion:
          'Por eso $C_1 V_1 = C_2 V_2$: solo agregamos solvente, los moles de soluto siguen siendo los mismos.',
      },
    ],
  },
  relacionados: ['calculos-estequiometricos', 'ph-poh'],
  tags: ['concentración', 'molaridad', 'dilución', '%m/v', 'soluciones', 'ppm'],
};
