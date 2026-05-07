import type { Tema } from '@/types/tema';

export const estequiometria: Tema = {
  slug: 'calculos-estequiometricos',
  titulo: 'Cálculos estequiométricos',
  anios: ['secundaria-4'],
  area: 'estequiometria',
  nivel: 'intermedio',
  resumen:
    'Cómo usar los coeficientes de una ecuación química balanceada para calcular masas, moles y cantidades de reactivos y productos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La estequiometría es la "regla de tres" de la química: una vez que tenés la **ecuación balanceada**, los coeficientes te dicen las proporciones exactas en que reaccionan los compuestos.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Mol',
      texto:
        'Un mol son $6{,}022 \\times 10^{23}$ partículas (Avogadro). La masa de 1 mol de una sustancia (en gramos) es su **masa molar** y se calcula sumando las masas atómicas de la fórmula.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por ejemplo, en la combustión del metano $CH_4 + 2 O_2 \\to CO_2 + 2 H_2 O$ los coeficientes te dicen que 1 mol de metano necesita 2 moles de oxígeno y produce 1 mol de CO₂ y 2 moles de agua.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Hoja de ruta',
      texto:
        'Siempre seguí estos pasos: (1) balancear la ecuación, (2) pasar lo que te dan a moles, (3) usar los coeficientes para hallar moles del que buscás, (4) convertir a la unidad pedida (gramos, litros, etc).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para gases en condiciones normales (CNPT: 0 °C y 1 atm), 1 mol ocupa $22{,}4 \\, L$. En cualquier otra condición usás la ecuación de los gases ideales $PV = nRT$.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Si te dan dos reactivos, alguno puede ser **limitante** (el que se acaba primero). Calculás cuántos moles de producto da cada uno por separado y elegís el menor.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Moles a partir de masa',
      latex: 'n = \\dfrac{m}{M}',
      variables: [
        { simbolo: 'n', nombre: 'cantidad de moles', unidad: 'mol' },
        { simbolo: 'm', nombre: 'masa', unidad: 'g' },
        { simbolo: 'M', nombre: 'masa molar', unidad: 'g/mol' },
      ],
      cuandoUsar: 'Cuando te dan gramos y necesitás moles (o al revés despejás m).',
    },
    {
      nombre: 'Volumen de gas en CNPT',
      latex: 'V = n \\cdot 22{,}4 \\, \\text{L/mol}',
      variables: [
        { simbolo: 'V', nombre: 'volumen', unidad: 'L' },
        { simbolo: 'n', nombre: 'moles', unidad: 'mol' },
      ],
      cuandoUsar: 'Solo a 0 °C y 1 atm. Para otras condiciones, usá $PV=nRT$.',
    },
    {
      nombre: 'Número de partículas',
      latex: 'N = n \\cdot N_A',
      variables: [
        { simbolo: 'N', nombre: 'cantidad de partículas', unidad: '—' },
        { simbolo: 'n', nombre: 'moles', unidad: 'mol' },
        { simbolo: 'N_A', nombre: 'número de Avogadro', unidad: '$6{,}022 \\times 10^{23}$ /mol' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Masa de agua producida en una combustión',
      enunciado:
        'Se queman 8 g de metano (CH₄) según $CH_4 + 2 O_2 \\to CO_2 + 2 H_2 O$. ¿Cuántos gramos de agua se forman? (Datos: M(CH₄)=16 g/mol, M(H₂O)=18 g/mol)',
      pasos: [
        {
          explicacion: 'Calculamos los moles de metano que tenemos.',
          latex: 'n_{CH_4} = \\dfrac{8 \\, g}{16 \\, g/mol} = 0{,}5 \\, mol',
        },
        {
          explicacion: 'Por la ecuación, 1 mol de CH₄ produce 2 moles de H₂O. Hacemos regla de tres.',
          latex: 'n_{H_2O} = 0{,}5 \\, mol \\times \\dfrac{2 \\, mol \\, H_2O}{1 \\, mol \\, CH_4} = 1 \\, mol',
        },
        {
          explicacion: 'Pasamos los moles de agua a gramos usando $m = n \\cdot M$.',
          latex: 'm_{H_2O} = 1 \\, mol \\times 18 \\, g/mol = 18 \\, g',
        },
      ],
      resultado: 'Se forman 18 g de agua.',
    },
    {
      titulo: 'Reactivo limitante',
      enunciado:
        'Mezclamos 4 g de H₂ y 32 g de O₂ según $2 H_2 + O_2 \\to 2 H_2 O$. ¿Cuál es el reactivo limitante? (M(H₂)=2, M(O₂)=32)',
      pasos: [
        {
          explicacion: 'Pasamos a moles cada uno.',
          latex: 'n_{H_2} = \\dfrac{4}{2} = 2 \\, mol \\quad ; \\quad n_{O_2} = \\dfrac{32}{32} = 1 \\, mol',
        },
        {
          explicacion: 'Según la ecuación, 2 mol de H₂ necesitan 1 mol de O₂. Veamos: con 2 mol de H₂ necesitaríamos 1 mol de O₂.',
        },
        {
          explicacion:
            'Tenemos exactamente 1 mol de O₂ disponible y necesitamos 1 mol → reaccionan justo. Ninguno limita en sentido estricto, pero si tuviéramos menos O₂ ese sería el limitante.',
        },
      ],
      resultado: 'Es una mezcla estequiométrica perfecta: ambos reactivos se consumen totalmente.',
    },
  ],
  erroresComunes: [
    'Olvidarse de balancear la ecuación antes de hacer los cálculos. Sin balance, las proporciones están mal.',
    'Confundir masa atómica con masa molar. La masa atómica es de un átomo individual; la molar es de 1 mol (g/mol). Numéricamente coinciden.',
    'Usar 22,4 L/mol fuera de CNPT. Solo vale a 0 °C y 1 atm; en otras condiciones usá $PV=nRT$.',
    'Hacer regla de tres con masas en lugar de moles. Los coeficientes son proporciones de moles, no de gramos.',
    'No identificar el reactivo limitante cuando te dan dos cantidades distintas: si calculás el producto desde el reactivo en exceso te da más de la cuenta.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos moles hay en 36 g de agua? (M(H₂O) = 18 g/mol)',
        respuesta: 2,
        unidad: 'mol',
        explicacion: '$n = m/M = 36/18 = 2 \\, mol$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'En la reacción $N_2 + 3 H_2 \\to 2 NH_3$, ¿cuántos moles de NH₃ se producen a partir de 6 mol de H₂?',
        respuesta: 4,
        unidad: 'mol',
        explicacion: '3 mol H₂ → 2 mol NH₃. Regla de tres: $6 \\times 2 / 3 = 4 \\, mol$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué volumen ocupan 0,5 mol de un gas en CNPT?',
        opciones: ['11,2 L', '22,4 L', '44,8 L', '5,6 L'],
        correcta: 0,
        explicacion: 'En CNPT, $V = n \\times 22{,}4 = 0{,}5 \\times 22{,}4 = 11{,}2 \\, L$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En una reacción, la masa total de los reactivos es igual a la masa total de los productos.',
        respuesta: true,
        explicacion: 'Es la ley de conservación de la masa de Lavoisier. Por eso balanceamos las ecuaciones.',
      },
    ],
  },
  relacionados: ['gases-ideales', 'concentracion-soluciones'],
  tags: ['estequiometría', 'mol', 'masa molar', 'reactivo limitante', 'avogadro', 'balanceo'],
};
