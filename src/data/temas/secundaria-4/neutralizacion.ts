import type { Tema } from '@/types/tema';

export const neutralizacion: Tema = {
  slug: 'neutralizacion',
  titulo: 'Neutralización ácido-base',
  anios: ['secundaria-4'],
  area: 'acido-base',
  nivel: 'intermedio',
  resumen:
    'La reacción entre un ácido y una base que produce sal + agua. Cómo calcular cuánto necesitás de cada uno.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una **neutralización** es la reacción entre un ácido y una base. El ácido aporta $H^+$, la base aporta $OH^-$, y se combinan para formar agua. El otro producto es una **sal**.',
    },
    {
      tipo: 'latex',
      latex: '\\text{ácido} + \\text{base} \\to \\text{sal} + \\text{agua}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Punto de equivalencia',
      texto:
        'Es cuando los moles de $H^+$ del ácido igualan a los moles de $OH^-$ de la base. Si los dos son fuertes y monopróticos, en ese punto el pH es 7. Si uno es débil, el pH puede ser distinto de 7.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por ejemplo: $HCl + NaOH \\to NaCl + H_2O$. El sodio forma la sal con el cloruro; el protón del HCl y el hidróxido del NaOH se combinan en agua.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cálculo en punto de equivalencia',
      texto:
        'Para ácidos y bases monopróticos: $C_a V_a = C_b V_b$. Si son polipróticos (H₂SO₄, etc.) hay que multiplicar por la cantidad de H⁺ o OH⁻ que aportan.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En una **titulación**, agregamos lentamente la base de concentración conocida sobre el ácido (o viceversa) hasta el punto de equivalencia. Usamos un **indicador** que cambia de color a un pH cercano al de equivalencia (fenolftaleína vira a rosa pálido cerca de pH 8,2; el azul de bromotimol cerca de 7).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo de reacción', 'pH en punto de equivalencia', 'Ejemplo'],
      filas: [
        ['ácido fuerte + base fuerte', '7', 'HCl + NaOH'],
        ['ácido fuerte + base débil', '< 7 (ácido)', 'HCl + NH₃'],
        ['ácido débil + base fuerte', '> 7 (básico)', 'CH₃COOH + NaOH'],
        ['ácido débil + base débil', 'depende', '—'],
      ],
    },
  ],
  formulasClave: [
    {
      nombre: 'Punto de equivalencia (mono-próticos)',
      latex: 'C_a V_a = C_b V_b',
      variables: [
        { simbolo: 'C_a', nombre: 'concentración del ácido', unidad: 'mol/L' },
        { simbolo: 'V_a', nombre: 'volumen del ácido', unidad: 'L o mL' },
        { simbolo: 'C_b', nombre: 'concentración de la base', unidad: 'mol/L' },
        { simbolo: 'V_b', nombre: 'volumen de la base', unidad: 'L o mL' },
      ],
      cuandoUsar: 'Solo cuando el ácido y la base aportan 1 H⁺ / 1 OH⁻ por molécula.',
    },
    {
      nombre: 'Equivalencia general',
      latex: 'n_a \\cdot C_a V_a = n_b \\cdot C_b V_b',
      variables: [
        { simbolo: 'n_a, n_b', nombre: 'cantidad de H⁺ / OH⁻ por molécula', unidad: '—' },
      ],
      cuandoUsar: 'Para H₂SO₄ (n=2), Ca(OH)₂ (n=2), etc.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cuánta base para neutralizar',
      enunciado:
        '¿Cuántos mL de NaOH 0,2 M se necesitan para neutralizar 50 mL de HCl 0,1 M?',
      pasos: [
        {
          explicacion: 'Ambos son monopróticos, aplicamos $C_a V_a = C_b V_b$.',
        },
        {
          explicacion: 'Despejamos V_b.',
          latex: 'V_b = \\dfrac{C_a V_a}{C_b} = \\dfrac{0{,}1 \\times 50}{0{,}2} = 25 \\, mL',
        },
      ],
      resultado: 'Se necesitan 25 mL de NaOH 0,2 M.',
    },
    {
      titulo: 'Ácido diprótico',
      enunciado:
        '¿Cuántos mL de NaOH 0,5 M neutralizan 100 mL de H₂SO₄ 0,1 M?',
      pasos: [
        {
          explicacion: 'H₂SO₄ es diprótico (libera 2 H⁺ por molécula); NaOH libera 1 OH⁻.',
        },
        {
          explicacion: 'Aplicamos la versión general.',
          latex: '2 \\times C_a V_a = 1 \\times C_b V_b',
        },
        {
          explicacion: 'Despejamos.',
          latex: 'V_b = \\dfrac{2 \\times 0{,}1 \\times 100}{0{,}5} = 40 \\, mL',
        },
      ],
      resultado: 'Se necesitan 40 mL.',
    },
  ],
  erroresComunes: [
    'Olvidarse de multiplicar por la cantidad de H⁺ o OH⁻ que aporta cada molécula (H₂SO₄ aporta 2, Ca(OH)₂ aporta 2).',
    'Asumir que el pH en el punto de equivalencia siempre es 7. Solo lo es para ácido fuerte + base fuerte.',
    'Confundir punto de equivalencia (química) con punto final (cuando vira el indicador). Idealmente coinciden, pero pueden diferir un poco.',
    'No convertir unidades: si una está en mL y la otra en L, los resultados salen mal.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuántos mL de KOH 0,1 M neutralizan 30 mL de HNO₃ 0,2 M?',
        respuesta: 60,
        unidad: 'mL',
        explicacion: '$V_b = (0{,}2 \\times 30)/0{,}1 = 60 \\, mL$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Al neutralizar HCl con NaOH, los productos son:',
        opciones: ['H₂O y NaCl', 'H₂O y O₂', 'HCl + NaOH', 'NaH + ClOH'],
        correcta: 0,
        explicacion: 'Ácido + base → sal + agua. La sal es NaCl.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En una neutralización entre ácido fuerte y base débil, el pH en el punto de equivalencia es 7.',
        respuesta: false,
        explicacion:
          'El pH es < 7 porque la sal resultante es ligeramente ácida (la base débil deja iones que hidrolizan).',
      },
    ],
  },
  relacionados: ['ph-poh', 'concentracion-soluciones'],
  tags: ['neutralización', 'titulación', 'ácido', 'base', 'punto de equivalencia', 'indicador'],
};
