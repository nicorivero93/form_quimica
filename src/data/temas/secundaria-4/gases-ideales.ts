import type { Tema } from '@/types/tema';

export const gasesIdeales: Tema = {
  slug: 'gases-ideales',
  titulo: 'Ley de los gases ideales',
  anios: ['secundaria-4'],
  area: 'gases',
  nivel: 'intro',
  resumen:
    'La ecuación PV = nRT y las leyes de Boyle, Charles y Gay-Lussac que se derivan de ella.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un **gas ideal** es uno donde las moléculas no interactúan entre sí (más allá de chocar) y ocupan un volumen despreciable. La realidad se aproxima bastante para gases comunes a temperaturas y presiones razonables.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ecuación de los gases ideales',
      texto:
        'Vincula presión, volumen, cantidad y temperatura: $PV = nRT$. Es la fórmula maestra: las demás leyes (Boyle, Charles, Gay-Lussac) son casos particulares cuando dos variables se mantienen constantes.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Ley', '¿Qué es constante?', 'Relación'],
      filas: [
        ['Boyle', 'T y n', '$P \\cdot V = $ cte'],
        ['Charles', 'P y n', '$V/T = $ cte'],
        ['Gay-Lussac', 'V y n', '$P/T = $ cte'],
        ['Combinada', 'n', '$\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Unidades importan',
      texto:
        'La temperatura en $PV=nRT$ va siempre en **Kelvin** (T(K) = t(°C) + 273). Si usás R = 0,082 L·atm/(K·mol), las otras unidades son litros, atmósferas y moles.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La constante $R$ tiene varios valores según las unidades: $R = 0{,}082 \\, \\dfrac{L \\cdot atm}{mol \\cdot K}$ es la más usada en secundaria. En el SI, $R = 8{,}314 \\, \\dfrac{J}{mol \\cdot K}$.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Gases ideales',
      latex: 'PV = nRT',
      variables: [
        { simbolo: 'P', nombre: 'presión', unidad: 'atm' },
        { simbolo: 'V', nombre: 'volumen', unidad: 'L' },
        { simbolo: 'n', nombre: 'moles', unidad: 'mol' },
        { simbolo: 'R', nombre: 'constante', unidad: '0,082 L·atm/(K·mol)' },
        { simbolo: 'T', nombre: 'temperatura absoluta', unidad: 'K' },
      ],
    },
    {
      nombre: 'Ecuación combinada',
      latex: '\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}',
      variables: [
        { simbolo: 'P_i, V_i, T_i', nombre: 'estado i', unidad: '—' },
      ],
      cuandoUsar: 'Cuando un gas pasa de un estado a otro y la cantidad (n) no cambia.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Volumen de oxígeno',
      enunciado: '¿Qué volumen ocupan 2 moles de O₂ a 27 °C y 2 atm de presión?',
      pasos: [
        {
          explicacion: 'Pasamos la temperatura a Kelvin: $T = 27 + 273 = 300 \\, K$.',
        },
        {
          explicacion: 'Despejamos V de $PV = nRT$.',
          latex: 'V = \\dfrac{nRT}{P}',
        },
        {
          explicacion: 'Reemplazamos.',
          latex: 'V = \\dfrac{2 \\times 0{,}082 \\times 300}{2} = 24{,}6 \\, L',
        },
      ],
      resultado: 'El gas ocupa 24,6 L.',
    },
    {
      titulo: 'Compresión isotérmica (Boyle)',
      enunciado:
        'Un gas ocupa 10 L a 1 atm. Si lo comprimimos a 4 atm manteniendo la temperatura, ¿qué volumen tiene?',
      pasos: [
        {
          explicacion: 'Como T y n son constantes, vale Boyle: $P_1 V_1 = P_2 V_2$.',
        },
        {
          explicacion: 'Despejamos V₂.',
          latex: 'V_2 = \\dfrac{P_1 V_1}{P_2} = \\dfrac{1 \\times 10}{4} = 2{,}5 \\, L',
        },
      ],
      resultado: 'El gas se comprime a 2,5 L.',
    },
  ],
  erroresComunes: [
    'Usar la temperatura en grados Celsius en lugar de Kelvin. T(K) = T(°C) + 273.',
    'Mezclar unidades: si usás R=0,082, la presión va en atm y el volumen en litros. Si los datos vienen en otras unidades, convertí primero.',
    'Aplicar Boyle cuando cambia la temperatura. Boyle requiere T constante. Si cambia P, V y T, usá la combinada.',
    'Olvidarse que 1 atm = 760 mmHg = 101 325 Pa.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En la ecuación $PV = nRT$, ¿en qué unidad debe estar la temperatura?',
        opciones: ['°C', 'K (Kelvin)', '°F', 'Cualquier escala absoluta'],
        correcta: 1,
        explicacion: 'Siempre Kelvin. Recordá: T(K) = T(°C) + 273.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos moles hay en 49,2 L de un gas a 0 °C y 1 atm? (R = 0,082)',
        respuesta: 2.196,
        tolerancia: 0.05,
        unidad: 'mol',
        explicacion:
          '$n = PV/(RT) = (1 \\times 49{,}2)/(0{,}082 \\times 273) \\approx 2{,}2 \\, mol$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'A volumen y cantidad constantes, si duplicamos la temperatura absoluta, la presión se duplica.',
        respuesta: true,
        explicacion: 'Es Gay-Lussac: $P/T = $ cte, entonces si T se duplica, P también.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué volumen ocupa 1 mol de gas ideal en CNPT (0 °C, 1 atm)?',
        opciones: ['10 L', '22,4 L', '44,8 L', '101 L'],
        correcta: 1,
        explicacion: 'En CNPT, $V = nRT/P = 1 \\times 0{,}082 \\times 273 / 1 \\approx 22{,}4 \\, L$.',
      },
    ],
  },
  relacionados: ['calculos-estequiometricos'],
  tags: ['gases ideales', 'PV=nRT', 'boyle', 'charles', 'gay-lussac', 'CNPT'],
};
