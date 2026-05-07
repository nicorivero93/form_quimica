import type { Tema } from '@/types/tema';

export const redox: Tema = {
  slug: 'reacciones-redox',
  titulo: 'Reacciones redox',
  anios: ['secundaria-5'],
  area: 'redox',
  nivel: 'avanzado',
  resumen:
    'Reacciones donde hay transferencia de electrones: oxidación, reducción, agentes oxidantes y reductores, y balanceo redox.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una reacción **redox** (reducción-oxidación) es aquella donde algunos átomos cambian su estado de oxidación porque transfieren electrones. Son fundamentales en la vida (respiración celular), la industria (siderurgia, electrólisis) y la tecnología (pilas, baterías).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Conceptos clave',
      texto:
        '**Oxidación** = pérdida de electrones (el número de oxidación aumenta). **Reducción** = ganancia de electrones (el número de oxidación disminuye). **Agente oxidante** = se reduce (causa que otro se oxide). **Agente reductor** = se oxida.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla LEO–GER',
      texto:
        '**LEO**: Lose Electrons = Oxidation. **GER**: Gain Electrons = Reduction. Para recordarlo en inglés. En español: "pierde, oxida; gana, reduce".',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **número de oxidación** es una "carga ficticia" que asignamos a cada átomo siguiendo reglas. Para H suele ser +1, para O suele ser −2, los elementos sueltos tienen 0, los iones monoatómicos tienen su carga.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Reglas', 'Excepción'],
      filas: [
        ['Elemento puro: 0 (H₂, O₂, Na, Cu)', '—'],
        ['Ion monoatómico: su carga (Na⁺ = +1, Cl⁻ = −1)', '—'],
        ['H: +1', 'En hidruros metálicos (NaH, CaH₂): −1'],
        ['O: −2', 'En peróxidos (H₂O₂): −1; con F: +2'],
        ['Suma en un compuesto: 0', '—'],
        ['Suma en un ion poliatómico: su carga', '—'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Para **balancear redox** seguimos el método del ion-electrón: separamos en semireacciones (oxidación y reducción), balanceamos átomos y cargas con $H_2O$, $H^+$ (en medio ácido) o $OH^-$ (medio básico), igualamos electrones y sumamos.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Variación del número de oxidación',
      latex: '\\Delta N_{ox} = N_{ox \\, final} - N_{ox \\, inicial}',
      variables: [
        { simbolo: '\\Delta N_{ox}', nombre: 'cambio en n° de oxidación', unidad: '—' },
      ],
      cuandoUsar: 'Si Δ > 0: oxidación. Si Δ < 0: reducción.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar oxidación y reducción',
      enunciado: 'En $Zn + Cu^{2+} \\to Zn^{2+} + Cu$, ¿qué se oxida y qué se reduce?',
      pasos: [
        {
          explicacion: 'Asignamos números de oxidación: Zn (sólido)=0, Cu²⁺=+2, Zn²⁺=+2, Cu (sólido)=0.',
        },
        {
          explicacion:
            'El Zn pasa de 0 a +2 → pierde 2 electrones → se oxida (reductor).',
          latex: 'Zn \\to Zn^{2+} + 2 e^-',
        },
        {
          explicacion:
            'El Cu pasa de +2 a 0 → gana 2 electrones → se reduce (oxidante).',
          latex: 'Cu^{2+} + 2 e^- \\to Cu',
        },
      ],
      resultado: 'Zn se oxida (reductor); Cu²⁺ se reduce (oxidante). Es una pila clásica.',
    },
    {
      titulo: 'Balanceo redox simple',
      enunciado:
        'Balancear en medio ácido: $Fe^{2+} + MnO_4^- \\to Fe^{3+} + Mn^{2+}$.',
      pasos: [
        {
          explicacion: 'Identificamos: Fe²⁺ → Fe³⁺ (pierde 1 e⁻, se oxida). Mn pasa de +7 a +2 (gana 5 e⁻, se reduce).',
        },
        {
          explicacion: 'Multiplicamos para igualar electrones: la oxidación por 5, la reducción por 1.',
          latex: '5 Fe^{2+} \\to 5 Fe^{3+} + 5 e^-',
        },
        {
          explicacion: 'Reducción balanceada (necesita 8 H⁺ del medio ácido para los 4 O del MnO₄⁻).',
          latex: 'MnO_4^- + 8 H^+ + 5 e^- \\to Mn^{2+} + 4 H_2 O',
        },
        {
          explicacion: 'Sumamos las dos semirreacciones.',
          latex: '5 Fe^{2+} + MnO_4^- + 8 H^+ \\to 5 Fe^{3+} + Mn^{2+} + 4 H_2 O',
        },
      ],
      resultado: 'Reacción balanceada con 5 Fe²⁺ + MnO₄⁻ + 8 H⁺.',
    },
  ],
  erroresComunes: [
    'Asignar n° de oxidación a átomos individuales en moléculas covalentes como si fueran iones reales. Es ficticio — sirve como herramienta contable.',
    'Olvidarse de las excepciones: H = −1 en hidruros, O = −1 en peróxidos.',
    'No igualar los electrones perdidos y ganados antes de sumar las semirreacciones.',
    'Confundir agente oxidante con oxidación. El oxidante es la sustancia que SE REDUCE (causa la oxidación de otra).',
    'Olvidar el medio (ácido / básico) al balancear: en básico se usan OH⁻ y H₂O.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En $2 Na + Cl_2 \\to 2 NaCl$, ¿qué hace el sodio?',
        opciones: ['Se reduce', 'Se oxida', 'No cambia', 'Es el oxidante'],
        correcta: 1,
        explicacion: 'Na pasa de 0 a +1 → pierde un electrón → se oxida (es el reductor).',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el número de oxidación del azufre en $H_2 SO_4$?',
        respuesta: 6,
        explicacion: 'Suma total = 0. 2(+1) + S + 4(−2) = 0 → S = +6.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El agente oxidante es la especie que se reduce.',
        respuesta: true,
        explicacion: 'El oxidante "oxida a otro" mientras él mismo se reduce (gana electrones).',
      },
      {
        tipo: 'multiple',
        enunciado: 'En $H_2 O_2$ (peróxido de hidrógeno), el oxígeno tiene número de oxidación:',
        opciones: ['−2', '−1', '0', '+1'],
        correcta: 1,
        explicacion: 'En peróxidos el O es −1 (no el típico −2). 2(+1) + 2(−1) = 0. ✓',
      },
    ],
  },
  visualizadorId: 'numeros-oxidacion',
  relacionados: ['cinetica-quimica'],
  tags: ['redox', 'oxidación', 'reducción', 'agente oxidante', 'agente reductor', 'balanceo'],
};
