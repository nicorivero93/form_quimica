import type { Tema } from '@/types/tema';

export const pilasElectroquimica: Tema = {
  slug: 'pilas-electroquimica',
  titulo: 'Pilas y electroquímica',
  anios: ['secundaria-5'],
  area: 'redox',
  nivel: 'avanzado',
  resumen:
    'Cómo una reacción redox espontánea genera corriente eléctrica (pilas) y cómo la corriente eléctrica fuerza reacciones no espontáneas (electrólisis).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En una **pila galvánica** (o "celda voltaica") aprovechamos una reacción redox espontánea: separamos los reactivos en dos compartimentos y forzamos a los electrones a pasar por un cable externo. Esa circulación de electrones es la corriente eléctrica.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Componentes de una pila',
      texto:
        '**Ánodo**: electrodo donde ocurre la oxidación (pierde e⁻). **Cátodo**: donde ocurre la reducción (gana e⁻). **Puente salino**: cierra el circuito permitiendo el flujo de iones entre las medias celdas.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Pila (galvánica)', 'Electrólisis'],
      filas: [
        ['Energía', 'libera (química → eléctrica)', 'consume (eléctrica → química)'],
        ['Espontaneidad', 'reacción espontánea', 'reacción no espontánea (forzada)'],
        ['Ánodo', '−', '+'],
        ['Cátodo', '+', '−'],
        ['Aplicación', 'baterías, pilas', 'producción de Al, Cl₂, NaOH; cromado'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Ejemplo clásico: pila Daniell',
      texto:
        'Zn metálico en solución de ZnSO₄ y Cu metálico en solución de CuSO₄. Reacción global: $Zn + Cu^{2+} \\to Zn^{2+} + Cu$. El Zn se oxida (ánodo), el Cu²⁺ se reduce (cátodo). Genera 1,10 V.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **potencial estándar de la pila** ($E^{\\circ}_{pila}$) se calcula con los potenciales de reducción tabulados: $E^{\\circ}_{pila} = E^{\\circ}_{cátodo} - E^{\\circ}_{ánodo}$. Si da positivo, la reacción es espontánea (sirve como pila). Si da negativo, hay que invertirla o forzarla con electrólisis.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Las pilas tienen **vencimiento**: las concentraciones de los iones cambian con el uso, y cuando llegan al equilibrio (Q=K) la pila se "agota". Para recargar, usás electrólisis (en baterías recargables).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Potencial estándar de la pila',
      latex: 'E^{\\circ}_{pila} = E^{\\circ}_{cátodo} - E^{\\circ}_{ánodo}',
      variables: [
        { simbolo: 'E^{\\circ}', nombre: 'potencial estándar de reducción', unidad: 'V' },
      ],
      cuandoUsar: 'Ambos potenciales se buscan TABULADOS como reducción, no se invierte el signo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular FEM de la pila Zn/Cu',
      enunciado:
        'Datos: $E^{\\circ}(Zn^{2+}/Zn) = -0{,}76 \\, V$, $E^{\\circ}(Cu^{2+}/Cu) = +0{,}34 \\, V$. Calcular $E^{\\circ}_{pila}$.',
      pasos: [
        {
          explicacion:
            'El que tenga mayor potencial de reducción es el cátodo. $E(Cu) = +0{,}34 > E(Zn) = -0{,}76$ → Cu es cátodo, Zn es ánodo.',
        },
        {
          explicacion: 'Aplicamos la fórmula.',
          latex: 'E^{\\circ}_{pila} = E^{\\circ}_{cátodo} - E^{\\circ}_{ánodo} = 0{,}34 - (-0{,}76) = 1{,}10 \\, V',
        },
        {
          explicacion: 'E°_pila > 0 → reacción espontánea, funciona como pila.',
        },
      ],
      resultado: 'E°_pila = 1,10 V (la pila Daniell clásica).',
    },
    {
      titulo: 'Predecir si funciona como pila',
      enunciado:
        'Datos: $E^{\\circ}(Ag^+/Ag) = +0{,}80$; $E^{\\circ}(Fe^{3+}/Fe^{2+}) = +0{,}77$. ¿La reacción $Fe^{2+} + Ag^+ \\to Fe^{3+} + Ag$ es espontánea?',
      pasos: [
        {
          explicacion:
            'El que se reduce es Ag⁺ (cátodo). El que se oxida es Fe²⁺ → Fe³⁺ (ánodo).',
        },
        {
          explicacion: 'Calculamos.',
          latex: 'E^{\\circ}_{pila} = 0{,}80 - 0{,}77 = +0{,}03 \\, V',
        },
        {
          explicacion: 'Es positivo (apenas) → es espontánea, pero genera muy poco voltaje.',
        },
      ],
      resultado: 'Sí, espontánea. E° = +0,03 V (pila muy débil).',
    },
  ],
  erroresComunes: [
    'Cambiar de signo el potencial cuando lo busqás en la tabla. Los potenciales se buscan SIEMPRE como reducción y se restan: cátodo − ánodo.',
    'Confundir signos del ánodo y cátodo entre pila galvánica (ánodo −) y electrólisis (ánodo +).',
    'Olvidarse del puente salino — sin él, la pila no funciona porque las cargas se acumulan.',
    'Pensar que una pila descargada no se puede recargar. Las baterías recargables (Li-ion, Ni-MH) sí, vía electrólisis.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si $E^{\\circ}(Cu^{2+}/Cu) = +0{,}34$ y $E^{\\circ}(Mg^{2+}/Mg) = -2{,}37$, calculá $E^{\\circ}_{pila}$ (en V).',
        respuesta: 2.71,
        tolerancia: 0.02,
        unidad: 'V',
        explicacion: 'Cu cátodo, Mg ánodo. $E = 0{,}34 - (-2{,}37) = 2{,}71 \\, V$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En una pila galvánica, en el cátodo ocurre:',
        opciones: ['oxidación', 'reducción', 'electrólisis', 'precipitación'],
        correcta: 1,
        explicacion: 'Reducción siempre en el cátodo (mnemónico: "Reducción en Cátodo": ambos con C/R cerca).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En electrólisis, el ánodo es positivo (al revés que en pila galvánica).',
        respuesta: true,
        explicacion: 'Sí: la fuente externa fuerza la oxidación en el ánodo positivo.',
      },
    ],
  },
  relacionados: ['reacciones-redox'],
  tags: ['electroquímica', 'pila', 'galvánica', 'electrólisis', 'ánodo', 'cátodo', 'FEM'],
};
