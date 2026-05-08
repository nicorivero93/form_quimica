import type { Tema } from '@/types/tema';

export const enlaceCovalente: Tema = {
  slug: 'enlace-covalente',
  titulo: 'Enlace covalente',
  anios: ['secundaria-4'],
  area: 'estructura-enlace',
  nivel: 'intermedio',
  resumen:
    'Cómo dos átomos comparten electrones para alcanzar la estabilidad. Polar vs. apolar, simple/doble/triple.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En un **enlace covalente**, dos átomos **comparten** electrones para que ambos completen su octeto. Es típico entre **no metales** (alta electronegatividad de los dos).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Tipos por número de pares compartidos',
      texto:
        '**Simple** (1 par compartido, ej. H–H), **doble** (2 pares, ej. O=O), **triple** (3 pares, ej. N≡N). Cuantos más pares, más fuerte y corto el enlace.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Δ electronegatividad', 'Reparto de electrones', 'Ejemplo'],
      filas: [
        ['Apolar', '0 a 0,4', 'parejo', 'H₂, O₂, N₂, CH₄'],
        ['Polar', '0,4 a 1,7', 'desigual (un átomo más δ−, el otro δ+)', 'H₂O, HCl, NH₃'],
        ['Iónico', '> 1,7', 'transferencia total', 'NaCl, KBr'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Polaridad molecular ≠ polaridad de enlace',
      texto:
        'Una molécula puede tener enlaces polares pero ser apolar como conjunto si los dipolos se cancelan por **simetría**. Ejemplo: $CO_2$ tiene 2 enlaces polares pero es lineal y simétrica → apolar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para dibujar la estructura de Lewis: contás los electrones de valencia totales, ponés enlaces simples entre los átomos y distribuís los pares libres hasta cumplir el octeto. Si te faltan electrones para octeto, "subís" pares libres formando dobles o triples enlaces.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Compuesto covalente molecular', 'Por qué'],
      filas: [
        ['Punto de fusión', 'bajo', 'fuerzas entre moléculas son débiles'],
        ['Estado a 25 °C', 'gas, líquido o sólido blando', 'depende de tamaño + polaridad'],
        ['Conducción eléctrica', 'no conducen (salvo grafito)', 'no hay iones libres'],
        ['Solubilidad', '"like dissolves like"', 'polares en polares; apolares en apolares'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Estructura de Lewis del agua',
      enunciado: 'Dibujar la estructura de Lewis del H₂O.',
      pasos: [
        {
          explicacion: 'Electrones de valencia: H (1) × 2 + O (6) = 8 electrones.',
        },
        {
          explicacion: 'O en el centro (es el menos electronegativo de los 3? No: H solo forma 1 enlace, así que O es central).',
        },
        {
          explicacion: 'Hacemos H–O–H (2 enlaces simples = 4 electrones).',
        },
        {
          explicacion:
            'Quedan 8 − 4 = 4 electrones, los ponemos como 2 pares libres en el oxígeno. O cumple octeto (2 enlaces × 2e + 2 pares × 2e = 8). H tiene 2 e (su capa máxima).',
        },
      ],
      resultado: 'H–Ö–H con dos pares libres sobre el O. Por la geometría angular, la molécula es polar.',
    },
    {
      titulo: 'Polaridad de moléculas',
      enunciado: '¿Cuál de estas moléculas es POLAR? CO₂, H₂O, CH₄, NH₃.',
      pasos: [
        {
          explicacion:
            'CO₂: lineal y simétrica → los dipolos se cancelan → APOLAR.',
        },
        {
          explicacion:
            'H₂O: angular, los dipolos no se cancelan → POLAR.',
        },
        {
          explicacion:
            'CH₄: tetraédrica simétrica → APOLAR.',
        },
        {
          explicacion:
            'NH₃: piramidal (un par libre rompe la simetría) → POLAR.',
        },
      ],
      resultado: 'Polares: H₂O y NH₃. Apolares: CO₂ y CH₄.',
    },
  ],
  erroresComunes: [
    'Asumir que todos los enlaces O–H son polares por igual: depende del átomo central y la geometría.',
    'Confundir enlace polar con molécula polar. CO₂ tiene enlaces polares pero como molécula es apolar.',
    'Creer que covalente = molécula chica. Hay covalentes en red (diamante, cuarzo) que son sólidos durísimos y altísimos puntos de fusión.',
    'No respetar el octeto en átomos centrales del 2° período (C, N, O, F). Sí pueden faltar electrones en el 3° período (S, P pueden tener 10 o 12).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál tiene un triple enlace?',
        opciones: ['H₂O', 'O₂', 'N₂', 'CO₂'],
        correcta: 2,
        explicacion: 'N₂ tiene un triple enlace (N≡N), uno de los enlaces más fuertes que existen.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El metano (CH₄) es una molécula polar.',
        respuesta: false,
        explicacion: 'CH₄ es tetraédrica simétrica: los dipolos C–H se cancelan → apolar.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Si Δ electronegatividad = 0,5, el enlace es:',
        opciones: ['Iónico', 'Covalente polar', 'Covalente apolar', 'Metálico'],
        correcta: 1,
        explicacion: 'Entre 0,4 y 1,7 → covalente polar.',
      },
    ],
  },
  visualizadorId: 'formacion-enlace',
  relacionados: ['configuracion-electronica', 'enlace-ionico'],
  tags: ['enlace covalente', 'lewis', 'polar', 'apolar', 'doble enlace', 'triple enlace'],
};
