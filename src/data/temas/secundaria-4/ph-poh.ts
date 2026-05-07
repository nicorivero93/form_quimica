import type { Tema } from '@/types/tema';

export const phPoh: Tema = {
  slug: 'ph-poh',
  titulo: 'pH y pOH',
  anios: ['secundaria-4'],
  area: 'acido-base',
  nivel: 'intro',
  resumen:
    'La escala logarítmica que mide acidez/basicidad de una solución, basada en la concentración de iones $H^+$ y $OH^-$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En el agua, una pequeña cantidad de moléculas se autoioniza: $H_2O \\rightleftharpoons H^+ + OH^-$. A 25 °C la concentración de cada ion en agua pura es $10^{-7} \\, M$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Producto iónico del agua',
      texto:
        'A 25 °C: $K_w = [H^+][OH^-] = 10^{-14}$. Esta relación se cumple **siempre** en soluciones acuosas, aunque las concentraciones individuales cambien.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Como $[H^+]$ varía en muchísimos órdenes de magnitud, se usa una escala logarítmica:',
    },
    {
      tipo: 'latex',
      latex: 'pH = -\\log [H^+] \\quad ; \\quad pOH = -\\log [OH^-]',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['pH', 'Tipo', '[H⁺] (M)', 'Ejemplo'],
      filas: [
        ['0–3', 'ácido fuerte', '$10^{0}$ a $10^{-3}$', 'jugo gástrico, limón'],
        ['4–6', 'ácido débil', '$10^{-4}$ a $10^{-6}$', 'café, lluvia ácida'],
        ['7', 'neutro', '$10^{-7}$', 'agua pura'],
        ['8–10', 'básico débil', '$10^{-8}$ a $10^{-10}$', 'sangre (≈7,4), bicarbonato'],
        ['11–14', 'básico fuerte', '$10^{-11}$ a $10^{-14}$', 'lejía, soda cáustica'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Tomando log a $K_w = 10^{-14}$ obtenés la relación más útil: $pH + pOH = 14$. Si te dan uno, calculás el otro restando.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para un ácido fuerte (HCl, HNO₃, H₂SO₄), $[H^+]$ ≈ concentración del ácido. Para una base fuerte (NaOH, KOH), $[OH^-]$ ≈ concentración de la base.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Escala logarítmica',
      texto:
        'Cada unidad de pH representa un factor 10. Una solución de pH 3 es **100 veces** más ácida que una de pH 5, no "un poquito más".',
    },
  ],
  formulasClave: [
    {
      nombre: 'pH',
      latex: 'pH = -\\log [H^+]',
      variables: [
        { simbolo: '[H^+]', nombre: 'concentración de protones', unidad: 'mol/L' },
      ],
    },
    {
      nombre: 'pOH',
      latex: 'pOH = -\\log [OH^-]',
      variables: [
        { simbolo: '[OH^-]', nombre: 'concentración de hidroxilos', unidad: 'mol/L' },
      ],
    },
    {
      nombre: 'Relación pH–pOH',
      latex: 'pH + pOH = 14',
      variables: [],
      cuandoUsar: 'Solo a 25 °C. A otras temperaturas $K_w$ varía y la suma cambia.',
    },
    {
      nombre: 'Concentración a partir de pH',
      latex: '[H^+] = 10^{-pH}',
      variables: [],
      cuandoUsar: 'La inversa: si te dan el pH y querés la concentración de $H^+$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'pH de un ácido fuerte',
      enunciado: 'Calculá el pH de una solución de HCl 0,01 M.',
      pasos: [
        {
          explicacion: 'HCl es un ácido fuerte: se disocia totalmente, así que $[H^+] = 0{,}01 \\, M = 10^{-2} \\, M$.',
        },
        {
          explicacion: 'Aplicamos la fórmula del pH.',
          latex: 'pH = -\\log(10^{-2}) = 2',
        },
      ],
      resultado: 'pH = 2 (ácido fuerte).',
    },
    {
      titulo: 'pH de una solución de NaOH',
      enunciado: 'Calculá el pH de una solución 0,001 M de NaOH.',
      pasos: [
        {
          explicacion: 'NaOH es base fuerte: $[OH^-] = 0{,}001 = 10^{-3} \\, M$.',
        },
        {
          explicacion: 'Calculamos el pOH.',
          latex: 'pOH = -\\log(10^{-3}) = 3',
        },
        {
          explicacion: 'Usamos la relación con pH a 25 °C.',
          latex: 'pH = 14 - pOH = 14 - 3 = 11',
        },
      ],
      resultado: 'pH = 11 (básico).',
    },
    {
      titulo: 'Concentración a partir del pH',
      enunciado: 'El jugo gástrico tiene pH ≈ 1,5. ¿Cuál es la concentración de $H^+$?',
      pasos: [
        {
          explicacion: 'Despejamos $[H^+]$ con la inversa.',
          latex: '[H^+] = 10^{-pH} = 10^{-1{,}5} \\approx 0{,}032 \\, M',
        },
      ],
      resultado: 'Aproximadamente 0,032 M (32 mM) — ¡bastante concentrado!',
    },
  ],
  erroresComunes: [
    'Pensar que pH 14 es el "máximo posible". Es el máximo en agua a 25 °C, pero soluciones muy concentradas de bases fuertes pueden tener pH > 14.',
    'Olvidarse que la escala es logarítmica: subir 1 unidad de pH significa que $[H^+]$ baja 10 veces.',
    'Aplicar pH = -log[H⁺] cuando la concentración no es la del ion sino del compuesto, sin chequear si es ácido fuerte/débil. En débiles hay que usar Ka.',
    'Sumar pH directamente al mezclar soluciones. No funciona así: hay que calcular las concentraciones finales y volver a aplicar las fórmulas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el pH de una solución con $[H^+] = 10^{-5} \\, M$?',
        respuesta: 5,
        explicacion: '$pH = -\\log(10^{-5}) = 5$. Ácido débil.',
      },
      {
        tipo: 'multiple',
        enunciado: 'A 25 °C, si una solución tiene pH = 9, ¿cuál es su pOH?',
        opciones: ['3', '5', '9', '14'],
        correcta: 1,
        explicacion: '$pOH = 14 - pH = 14 - 9 = 5$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Una solución A tiene pH 4 y otra B tiene pH 6. ¿Cuántas veces más ácida es A que B?',
        opciones: ['1,5 veces', '2 veces', '10 veces', '100 veces'],
        correcta: 3,
        explicacion: 'Diferencia de 2 unidades de pH = factor $10^2 = 100$ en $[H^+]$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El agua pura a 25 °C tiene pH = 7 y es neutra porque $[H^+] = [OH^-]$.',
        respuesta: true,
        explicacion: 'Sí: $[H^+] = [OH^-] = 10^{-7} \\, M$, así que $pH = pOH = 7$.',
      },
    ],
  },
  visualizadorId: 'ph-slider',
  relacionados: ['concentracion-soluciones'],
  tags: ['pH', 'pOH', 'ácidos', 'bases', 'logaritmo', 'Kw', 'autoionización'],
};
