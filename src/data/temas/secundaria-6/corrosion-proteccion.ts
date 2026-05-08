import type { Tema } from '@/types/tema';

export const corrosionProteccion: Tema = {
  slug: 'corrosion-proteccion-metales',
  titulo: 'Corrosión y protección de metales',
  anios: ['secundaria-6'],
  area: 'redox',
  nivel: 'avanzado',
  resumen:
    'Por qué los metales se oxidan en el ambiente y cómo evitarlo: galvanizado, ánodos de sacrificio, pinturas, pasivación.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La **corrosión** es la oxidación espontánea de un metal por su entorno (aire, agua, sales, ácidos). Es una reacción **redox** y un problema enorme: se calcula que entre 3-4% del PBI mundial se pierde cada año por corrosión y reparaciones.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Mecanismo electroquímico (caso del hierro)',
      texto:
        'En presencia de agua y O₂ se forman zonas anódicas (donde se oxida el Fe) y catódicas (donde se reduce O₂) sobre la superficie. **Ánodo**: $Fe \\to Fe^{2+} + 2 e^-$. **Cátodo**: $O_2 + 2 H_2O + 4 e^- \\to 4 OH^-$. Los iones $Fe^{2+}$ migran y reaccionan con $OH^-$ y $O_2$ formando óxido férrico hidratado (la herrumbre).',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **resultado neto** es:',
    },
    {
      tipo: 'latex',
      latex: '4 Fe + 3 O_2 + 6 H_2O \\to 4 Fe(OH)_3 \\to 2 Fe_2O_3 \\cdot 3 H_2O',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Factores que aceleran la corrosión',
      texto:
        '**Humedad** (sin agua no hay corrosión electroquímica), **electrolitos** (sal, ácidos: aceleran 10-100x el proceso), **presencia de otros metales** en contacto (corrosión galvánica), **rayones** o defectos en la superficie (concentran la oxidación).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Método de protección', 'Cómo funciona', 'Ejemplo'],
      filas: [
        ['Pintura/recubrimiento', 'aísla del agua/aire', 'autos, barandales, barcos'],
        ['Galvanizado', 'capa de zinc — el Zn se sacrifica antes que el Fe', 'chapas de techo, postes'],
        ['Cromado / niquelado', 'capa decorativa + protectora', 'grifos, parrillas, motos'],
        ['Pasivación', 'capa muy fina de óxido propio que protege', 'acero inoxidable, aluminio'],
        ['Ánodos de sacrificio', 'pieza de Mg/Zn más activa que se corroe primero', 'cascos de barcos, calderas'],
        ['Protección catódica', 'corriente externa que invierte la polaridad', 'oleoductos, tanques enterrados'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Galvanizado vs. ánodo de sacrificio',
      texto:
        'Ambos protegen al hierro porque el **zinc es más activo** ($E^{\\circ}(Zn^{2+}/Zn) = -0{,}76 \\, V$ vs. $E^{\\circ}(Fe^{2+}/Fe) = -0{,}44 \\, V$). En el galvanizado, el Zn cubre todo (capa fina). Aunque se raspe, el Zn vecino se oxida antes que el Fe expuesto. En **ánodos de sacrificio**, conectás un bloque grande de Zn o Mg al casco del barco; ese bloque se va consumiendo y lo cambiás cada tanto.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Pasivación: el truco del aluminio',
      texto:
        'El aluminio es muy reactivo, pero cuando se expone al aire forma una capa **invisible de Al₂O₃** muy delgada y compacta que **bloquea** la oxidación posterior. El acero inoxidable hace lo mismo con Cr₂O₃. Por eso el aluminio "puro" no se herrumbra como el hierro.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Serie de actividad (resumen)',
      texto:
        'Los metales más activos (más fácil oxidación) están a la izquierda en la serie: **K > Na > Ca > Mg > Al > Zn > Fe > Sn > Pb > H > Cu > Hg > Ag > Au**. Cualquier metal protege catódicamente a los que están a su derecha.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Metal protector', 'Protege a', '¿Por qué funciona?'],
      filas: [
        ['Mg', 'Fe, Cu, Zn, …', 'más activo que casi todos'],
        ['Zn', 'Fe, Cu', 'más activo que Fe y Cu'],
        ['Al', 'Fe (sí en teoría, pero forma capa pasiva)', 'pasivación + ser más activo'],
        ['Cu', 'plata, oro', 'útil pocas veces'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar protección catódica',
      enunciado:
        'Un barco de acero tiene bloques de magnesio sujetos al casco bajo el agua. ¿Por qué? ¿Qué pasa con esos bloques con el tiempo?',
      pasos: [
        {
          explicacion:
            'El Mg es más activo (más fácil de oxidar) que el Fe del casco. Forma con el Fe una "pila" donde el Mg actúa como **ánodo** y el Fe como cátodo.',
        },
        {
          explicacion:
            'El Mg se oxida (se disuelve poco a poco) sacrificándose: $Mg \\to Mg^{2+} + 2e^-$. Mientras haya Mg, el Fe NO se oxida.',
        },
        {
          explicacion:
            'Con el tiempo el bloque de Mg se consume y hay que cambiarlo (mantenimiento programado).',
        },
      ],
      resultado:
        'Es un **ánodo de sacrificio**: el Mg se corroe en lugar del Fe. Hay que reponerlo periódicamente.',
    },
    {
      titulo: 'Por qué el aluminio dura más que el hierro',
      enunciado:
        'El aluminio es más activo que el hierro (se oxida más fácil). Sin embargo, una ventana de aluminio dura décadas sin "corroerse" mientras una de hierro se herrumbra rápido. ¿Por qué?',
      pasos: [
        {
          explicacion:
            'El Al expuesto al aire se oxida instantáneamente formando una capita de Al₂O₃ de unos pocos nm.',
        },
        {
          explicacion:
            'Esa capa es **compacta y adherente**: bloquea el O₂ y el agua del metal interior → **no avanza** la corrosión.',
        },
        {
          explicacion:
            'El Fe también forma óxido (Fe₂O₃ • H₂O), pero es **poroso y se descascara**: el O₂ y el agua siguen llegando al Fe debajo y la corrosión sigue indefinidamente.',
        },
      ],
      resultado: 'Al → óxido protector (pasivación). Fe → óxido frágil que no protege.',
    },
  ],
  erroresComunes: [
    'Pensar que la corrosión solo afecta al hierro. Cualquier metal expuesto al ambiente se corroe; lo que cambia es la velocidad y si forma capa pasiva.',
    'Confundir galvanizado con cromado. Galvanizado = Zn (protección sacrificial). Cromado = Cr (estético + barrera; si se ralla, abajo se oxida).',
    'Asumir que el agua dulce y el agua de mar corroen igual. El agua de mar (con sales) corroe mucho más rápido por ser mejor electrolito.',
    'Aplicar protección catódica con un metal MENOS activo que el protegido. Tiene que ser MÁS activo para que se sacrifique él.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Para proteger un casco de hierro, qué metal usás como ánodo de sacrificio?',
        opciones: ['Cu', 'Au', 'Mg', 'Sn'],
        correcta: 2,
        explicacion: 'Mg es mucho más activo que Fe. Se oxida primero, protegiendo al hierro.',
      },
      {
        tipo: 'multiple',
        enunciado: 'El acero inoxidable se mantiene brillante porque:',
        opciones: ['no se oxida', 'forma una capa de Cr₂O₃ que protege', 'es de oro', 'lo pintan'],
        correcta: 1,
        explicacion: 'Pasivación: el cromo forma una capa fina de óxido que evita más oxidación.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La corrosión del hierro requiere agua y oxígeno.',
        respuesta: true,
        explicacion: 'Sí: sin uno de los dos no procede el mecanismo electroquímico. Por eso en climas secos las herramientas no se herrumbran.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Una chapa galvanizada está cubierta con:',
        opciones: ['cromo', 'zinc', 'aluminio', 'estaño'],
        correcta: 1,
        explicacion: 'Galvanizado = capa de zinc. El Zn se sacrifica primero protegiendo al Fe.',
      },
    ],
  },
  relacionados: ['reacciones-redox', 'pilas-electroquimica', 'nernst-electroquimica-cuantitativa'],
  tags: ['corrosión', 'galvanizado', 'ánodo de sacrificio', 'pasivación', 'redox', 'protección catódica', 'serie de actividad'],
};
