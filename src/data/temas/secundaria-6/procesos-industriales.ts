import type { Tema } from '@/types/tema';

export const procesosIndustriales: Tema = {
  slug: 'procesos-quimicos-industriales',
  titulo: 'Procesos químicos industriales clave',
  anios: ['secundaria-6'],
  area: 'estequiometria',
  nivel: 'avanzado',
  resumen:
    'Los 4 procesos que sostienen la economía moderna: Haber-Bosch (NH₃), contacto (H₂SO₄), cloro-soda (Cl₂ + NaOH) y altos hornos (Fe).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La química industrial es la **aplicación a escala masiva** de las reacciones que estudiaste en años anteriores. Hay un puñado de procesos que producen los químicos básicos sobre los que se monta toda la industria moderna.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Los 4 grandes procesos inorgánicos',
      texto:
        '(1) **Haber-Bosch**: amoníaco para fertilizantes. (2) **Contacto**: ácido sulfúrico (el químico más producido). (3) **Cloro-soda**: cloro y NaOH. (4) **Altos hornos**: hierro a partir de mineral. Cada uno mueve millones de toneladas por año.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Proceso', 'Reacción clave', 'Producto', 'Para qué sirve'],
      filas: [
        ['Haber-Bosch', '$N_2 + 3 H_2 \\rightleftharpoons 2 NH_3$', 'amoníaco', 'fertilizantes (alimenta a la mitad del planeta)'],
        ['Contacto', '$2 SO_2 + O_2 \\rightleftharpoons 2 SO_3$ → $H_2SO_4$', 'ácido sulfúrico', 'baterías, fertilizantes, refinación'],
        ['Cloro-soda', '$2 NaCl + 2 H_2O \\to Cl_2 + H_2 + 2 NaOH$', 'cloro + soda cáustica', 'plásticos, papel, jabón, desinfección'],
        ['Altos hornos', '$Fe_2O_3 + 3 CO \\to 2 Fe + 3 CO_2$', 'arrabio (Fe + C)', 'acero, infraestructura'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Haber-Bosch (1909)',
      texto:
        'Sintetiza amoníaco a partir de N₂ del aire e H₂ del gas natural. Condiciones brutales: ~200 atm y 400-500 °C, con catalizador de Fe. Reacción exotérmica: por Le Chatelier, baja T desplazaría a productos pero la cinética se vuelve impráctica → compromiso a 450 °C. Este proceso consume ~1% de la energía mundial.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Contacto (H₂SO₄)',
      texto:
        '(1) Quemás azufre o pirita: $S + O_2 \\to SO_2$. (2) Oxidás SO₂ a SO₃ con catalizador de V₂O₅ a 450 °C: $2 SO_2 + O_2 \\to 2 SO_3$. (3) Absorbés el SO₃ en H₂SO₄ concentrado para hacer óleum, después diluís: $SO_3 + H_2O \\to H_2SO_4$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cloro-soda (electrólisis de salmuera)',
      texto:
        'Electrólisis de NaCl disuelto en agua. **Cátodo (−)**: $2 H_2O + 2e^- \\to H_2 + 2 OH^-$. **Ánodo (+)**: $2 Cl^- \\to Cl_2 + 2e^-$. Productos: H₂, Cl₂ y NaOH (en la solución). Las celdas modernas usan membrana selectiva para evitar mezclas.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Altos hornos',
      texto:
        'Reducción del óxido de hierro con monóxido de carbono: $Fe_2O_3 + 3 CO \\to 2 Fe + 3 CO_2$. El CO viene de la combustión incompleta del coque (carbón). Se agrega caliza ($CaCO_3$) para eliminar impurezas como SiO₂ formando escoria. Sale "arrabio" (Fe con ~4% C) que después se convierte en acero bajando el carbono al 0,1-2%.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Por qué importan',
      texto:
        'Sin Haber-Bosch no se puede alimentar 8 mil millones de personas (la mitad de la población humana depende de fertilizantes sintéticos). Sin H₂SO₄ no hay baterías ni fertilizantes ni refinación de petróleo. Sin Cl₂/NaOH no hay PVC ni papel ni jabón. Sin acero no hay edificios ni puentes ni autos.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Compromiso termodinámica vs cinética',
      texto:
        'En Haber-Bosch y contacto, la termodinámica favorece bajar la temperatura (son exotérmicas), pero la cinética la frena. La industria elige T y P intermedias + catalizador para llegar al 95-98% del equilibrio en tiempo razonable.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar Le Chatelier a Haber-Bosch',
      enunciado:
        '$N_2 + 3 H_2 \\rightleftharpoons 2 NH_3$ ($\\Delta H < 0$). Justificá la elección industrial de alta presión y temperatura intermedia.',
      pasos: [
        {
          explicacion:
            '**Presión**: 4 mol de gas en reactivos vs. 2 mol en productos → más P desplaza a productos (NH₃). Por eso usan ~200 atm.',
        },
        {
          explicacion:
            '**Temperatura**: la reacción es exotérmica → bajar T desplazaría a productos (Le Chatelier favorable). Pero a baja T la velocidad cae mucho (Arrhenius desfavorable). Compromiso: 450 °C + catalizador.',
        },
        {
          explicacion:
            '**Recirculación**: el gas que sale del reactor con NH₃ + N₂ + H₂ no reaccionado se condensa el NH₃ (líquido) y el resto vuelve al reactor. Así llegás a 95-98% de eficiencia.',
        },
      ],
      resultado:
        'Alta P (favorece termodinámicamente), T intermedia (compromiso térmico-cinético), catalizador de Fe, recirculación.',
    },
    {
      titulo: 'Cuántas toneladas de NH₃ por tonelada de N₂',
      enunciado:
        'En Haber-Bosch ideal, ¿cuántas toneladas de NH₃ se obtienen por cada tonelada de N₂? (M(N₂)=28, M(NH₃)=17)',
      pasos: [
        {
          explicacion:
            'Por la estequiometría: 1 mol N₂ → 2 mol NH₃.',
        },
        {
          explicacion:
            'En masa: $1 \\, t \\, N_2 \\to ?$. Pasamos a moles, multiplicamos por 2, volvemos a masa.',
          latex: 'm_{NH_3} = \\dfrac{1\\,000\\,000 \\, g}{28} \\times 2 \\times 17 \\approx 1\\,214\\,286 \\, g \\approx 1{,}21 \\, t',
        },
      ],
      resultado: 'Aproximadamente 1,21 t de NH₃ por tonelada de N₂.',
    },
  ],
  erroresComunes: [
    'Pensar que el catalizador desplaza el equilibrio. NO: solo acelera, no cambia las concentraciones finales en el equilibrio.',
    'Asumir que la reacción se completa al 100%. Industrialmente quedás en 95-98% gracias a recirculación; el resto se pierde como purga.',
    'Confundir arrabio con acero. Arrabio = Fe con 3-4% C (frágil). Acero = Fe con 0,1-2% C (más útil). Hay que reducir el carbono.',
    'Olvidarse de los catalizadores específicos: Fe en Haber, V₂O₅ en contacto, Pt/Rh en convertidores catalíticos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'El proceso Haber-Bosch produce:',
        opciones: ['Ácido sulfúrico', 'Amoníaco', 'Cloro', 'Hierro'],
        correcta: 1,
        explicacion: 'Haber-Bosch sintetiza NH₃ a partir de N₂ + H₂. Es el proceso que sostiene los fertilizantes modernos.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En el proceso de contacto, el catalizador de la oxidación de SO₂ a SO₃ es:',
        opciones: ['Fe', 'Pt', 'V₂O₅', 'Ni'],
        correcta: 2,
        explicacion: 'V₂O₅ (pentóxido de vanadio) a 450 °C.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En el proceso cloro-soda, el cloro se forma en el cátodo.',
        respuesta: false,
        explicacion: 'Se forma en el ÁNODO (oxidación: Cl⁻ pierde electrón). En cátodo se forma H₂ y se acumula NaOH.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'En Haber-Bosch, ¿cuántos moles de NH₃ se obtienen idealmente a partir de 6 mol de H₂?',
        respuesta: 4,
        unidad: 'mol',
        explicacion: '$3 \\, H_2 \\to 2 \\, NH_3$. Regla de tres: $6 \\times 2/3 = 4 \\, mol$.',
      },
    ],
  },
  relacionados: ['equilibrio-quimico', 'cinetica-quimica', 'pilas-electroquimica'],
  tags: ['industrial', 'haber-bosch', 'contacto', 'cloro-soda', 'altos hornos', 'amoníaco', 'ácido sulfúrico', 'fertilizantes'],
};
