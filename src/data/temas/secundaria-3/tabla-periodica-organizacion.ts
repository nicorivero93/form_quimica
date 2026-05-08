import type { Tema } from '@/types/tema';

export const tablaPeriodicaOrganizacion: Tema = {
  slug: 'tabla-periodica-organizacion',
  titulo: 'La tabla periódica: cómo está organizada',
  anios: ['secundaria-3'],
  area: 'tabla-periodica',
  nivel: 'intro',
  resumen:
    'Grupos, períodos, metales, no metales y metaloides. Cómo predecir comportamiento mirando la posición de un elemento.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La **tabla periódica** ordena los 118 elementos por orden creciente de número atómico (Z). Lo genial es que los elementos quedan agrupados según sus propiedades, repitiendo patrones cada cierta cantidad de Z (eso es lo "periódico").',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Filas (períodos) y columnas (grupos)',
      texto:
        '**Períodos** (filas, 1 a 7): cada fila empieza un nuevo nivel electrónico. **Grupos** (columnas, 1 a 18): elementos del mismo grupo tienen propiedades químicas parecidas porque tienen la misma cantidad de **electrones de valencia**.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Grupo', 'Nombre', 'e⁻ valencia', 'Característica'],
      filas: [
        ['1 (IA)', 'Alcalinos', '1', 'muy reactivos, blandos'],
        ['2 (IIA)', 'Alcalinotérreos', '2', 'reactivos pero menos'],
        ['3-12', 'Metales de transición', 'variable', 'conducen, multivalentes'],
        ['13 (IIIA)', 'Térreos', '3', 'incluye al aluminio'],
        ['14 (IVA)', 'Carbonoideos', '4', 'incluye C, Si'],
        ['15 (VA)', 'Nitrogenoideos', '5', 'N, P'],
        ['16 (VIA)', 'Calcógenos', '6', 'O, S'],
        ['17 (VIIA)', 'Halógenos', '7', 'muy reactivos no metales'],
        ['18 (VIIIA)', 'Gases nobles', '8 (2 para He)', 'inertes'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Metales, no metales y metaloides',
      texto:
        'La tabla se divide en 3 grandes zonas separadas por una línea diagonal escalonada (de B a Po): a la izquierda **metales** (la mayoría), a la derecha **no metales**, y sobre la línea **metaloides** (B, Si, Ge, As, Sb, Te). El H, aunque está en el grupo 1, es no metal.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Característica', 'Metales', 'No metales'],
      filas: [
        ['Brillo', 'sí (metálico)', 'no (mate)'],
        ['Conducen calor/electricidad', 'sí', 'no (excepto grafito)'],
        ['Maleables/dúctiles', 'sí', 'no (frágiles)'],
        ['Estado a 25 °C', 'sólidos (excepto Hg)', 'sólidos, líquidos o gases'],
        ['Forman cationes', 'sí (pierden e⁻)', 'forman aniones (ganan e⁻)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Los **lantánidos** (Z 57-71) y **actínidos** (Z 89-103) están afuera del cuerpo principal de la tabla solo por **espacio gráfico**: en realidad pertenecen al período 6 y 7 respectivamente, en una "extensión" del grupo 3.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sabiendo dónde está un elemento podés predecir mucho: si es metal o no, cuántos electrones de valencia tiene, qué tipo de iones forma, con qué reacciona. Esa es la potencia de la tabla.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Predecir comportamiento por posición',
      enunciado:
        'El bario (Ba, Z=56) está en el grupo 2. ¿Es metal? ¿Cuántos electrones de valencia tiene? ¿Qué ion suele formar?',
      pasos: [
        {
          explicacion:
            'Grupo 2 (alcalinotérreos) → es **metal**.',
        },
        {
          explicacion:
            'Grupo 2 → tiene **2 electrones de valencia**.',
        },
        {
          explicacion:
            'Los metales del grupo 2 ceden esos 2 e⁻ y forman cationes con carga **+2**: Ba²⁺.',
        },
      ],
      resultado: 'Bario es metal alcalinotérreo, 2 e⁻ de valencia, forma Ba²⁺.',
    },
    {
      titulo: 'Identificar grupo y período',
      enunciado: 'El elemento con Z=15 es el fósforo. ¿En qué período y grupo está?',
      pasos: [
        {
          explicacion:
            'P: $1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^2 \\, 3p^3$. Su nivel más alto es el 3 → **período 3**.',
        },
        {
          explicacion:
            'En el nivel 3 tiene $3s^2 + 3p^3 = 5$ electrones de valencia → **grupo 15** (VA, nitrogenoideos).',
        },
      ],
      resultado: 'Período 3, grupo 15. No metal.',
    },
  ],
  erroresComunes: [
    'Confundir grupo con período. Grupo = columna (vertical). Período = fila (horizontal).',
    'Decir que el hidrógeno es metal alcalino. Está en el grupo 1 por su electrón de valencia, pero es **no metal**.',
    'Asumir que todos los gases nobles tienen 8 e⁻ de valencia. El helio (He) tiene solo 2.',
    'Pensar que los lantánidos y actínidos son "el resto". Pertenecen a períodos 6 y 7, separados por espacio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuántos electrones de valencia tienen los halógenos (grupo 17)?',
        opciones: ['1', '5', '7', '8'],
        correcta: 2,
        explicacion: 'Grupo 17 = 7 e⁻ de valencia. Por eso solo necesitan ganar 1 para completar el octeto.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es un metal alcalino?',
        opciones: ['Mg', 'K', 'Cl', 'Fe'],
        correcta: 1,
        explicacion: 'K (potasio) está en el grupo 1 = alcalinos. Mg es alcalinotérreo, Cl halógeno, Fe transición.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Los elementos del mismo grupo tienen propiedades químicas parecidas.',
        respuesta: true,
        explicacion: 'Sí: tienen la misma cantidad de electrones de valencia, que es lo que define el comportamiento.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Los gases nobles son inertes porque:',
        opciones: [
          'son livianos',
          'tienen su capa de valencia completa',
          'son metales',
          'no tienen electrones',
        ],
        correcta: 1,
        explicacion: '8 e⁻ de valencia (2 en He) = capa completa, no necesitan reaccionar.',
      },
    ],
  },
  relacionados: ['el-atomo', 'iones-compuestos-ionicos', 'configuracion-electronica'],
  tags: ['tabla periódica', 'grupo', 'período', 'metales', 'no metales', 'electrones de valencia', 'halógenos', 'gases nobles'],
};
