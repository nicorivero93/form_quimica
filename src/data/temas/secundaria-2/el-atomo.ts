import type { Tema } from '@/types/tema';

export const elAtomo: Tema = {
  slug: 'el-atomo',
  titulo: 'El átomo y partículas subatómicas',
  anios: ['secundaria-2'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Protones, neutrones y electrones. Número atómico (Z), número másico (A), isótopos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Toda la materia está formada por **átomos**, partículas tan chicas que ni con un microscopio común las podés ver. Cada átomo tiene **3 partículas subatómicas** principales:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Partícula', 'Carga', 'Masa relativa', 'Dónde está'],
      filas: [
        ['Protón (p⁺)', '+1', '1 (1 uma)', 'núcleo'],
        ['Neutrón (n)', '0 (sin carga)', '1 (1 uma)', 'núcleo'],
        ['Electrón (e⁻)', '−1', '1/1836 (despreciable)', 'orbitales (alrededor del núcleo)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Núcleo y corteza',
      texto:
        'El **núcleo** concentra los protones y neutrones. Tiene casi toda la masa pero ocupa muy poco volumen (si el átomo fuera un estadio, el núcleo sería una pelotita en el centro). La **corteza** es donde están los electrones, ocupando casi todo el espacio del átomo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los átomos se identifican con dos números clave:',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Z y A',
      texto:
        '**Número atómico (Z)**: cantidad de protones. Define qué elemento es. **Número másico (A)**: cantidad total de protones + neutrones. La cantidad de neutrones es $N = A - Z$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se escriben así, antepuestos al símbolo del elemento:',
    },
    {
      tipo: 'latex',
      latex: '^{A}_{Z}X',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Por ejemplo, el carbono más común se escribe $^{12}_{6}C$: tiene 6 protones (porque Z=6 → es carbono) y 12 − 6 = 6 neutrones.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Átomos neutros',
      texto:
        'En un átomo **neutro** la cantidad de protones es igual a la de electrones (las cargas se cancelan). Si pierde o gana electrones se convierte en **ion**: positivo (catión, perdió e⁻) o negativo (anión, ganó e⁻).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Isótopos',
      texto:
        'Átomos del mismo elemento (mismo Z) con distinta cantidad de neutrones (distinto A). Ejemplo: $^{12}C$, $^{13}C$ y $^{14}C$ son isótopos del carbono. Tienen las mismas propiedades químicas pero distinta masa.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'No confundas isótopos con iones. Isótopos varían en **neutrones** (en el núcleo). Iones varían en **electrones** (la carga).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Número de neutrones',
      latex: 'N = A - Z',
      variables: [
        { simbolo: 'N', nombre: 'cantidad de neutrones', unidad: '—' },
        { simbolo: 'A', nombre: 'número másico', unidad: '—' },
        { simbolo: 'Z', nombre: 'número atómico', unidad: '—' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar un átomo',
      enunciado:
        '¿Cuántos protones, neutrones y electrones tiene un átomo neutro de oxígeno-16 ($^{16}_{8}O$)?',
      pasos: [
        {
          explicacion: 'Z = 8 → 8 **protones**. Como es neutro, también tiene 8 **electrones**.',
        },
        {
          explicacion: 'A = 16. Neutrones = A − Z = 16 − 8 = **8 neutrones**.',
        },
      ],
      resultado: '8 protones, 8 neutrones, 8 electrones.',
    },
    {
      titulo: 'Identificar un ion',
      enunciado:
        '¿Cuántos protones y electrones tiene el ion sodio Na⁺? (Z(Na) = 11)',
      pasos: [
        {
          explicacion: 'Z = 11 → siempre 11 **protones** (eso lo define como Na, no cambia al ionizarse).',
        },
        {
          explicacion:
            'El "+1" significa que perdió 1 electrón → tiene 11 − 1 = **10 electrones**.',
        },
      ],
      resultado: '11 protones, 10 electrones (catión Na⁺).',
    },
  ],
  erroresComunes: [
    'Pensar que Z indica masa. Z indica protones (identidad). A indica masa (protones + neutrones).',
    'Confundir isótopos con iones. Isótopos: distinta cantidad de **neutrones**. Iones: distinta cantidad de **electrones**.',
    'Olvidarse que en un ion, los protones NO cambian. Solo cambian los electrones.',
    'Asumir que todos los átomos de un elemento tienen la misma masa. No: existen isótopos. La masa atómica que ves en la tabla es un **promedio** ponderado por abundancia.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos neutrones tiene un átomo de $^{40}_{20}Ca$?',
        respuesta: 20,
        explicacion: 'N = A − Z = 40 − 20 = 20 neutrones.',
      },
      {
        tipo: 'multiple',
        enunciado: 'El número atómico (Z) representa:',
        opciones: ['el total de partículas en el núcleo', 'solo los neutrones', 'solo los protones', 'los electrones de valencia'],
        correcta: 2,
        explicacion: 'Z = cantidad de protones = define qué elemento es.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El protón y el electrón tienen aproximadamente la misma masa.',
        respuesta: false,
        explicacion: 'NO: el protón pesa unas 1836 veces más que el electrón.',
      },
      {
        tipo: 'multiple',
        enunciado: 'El ion Cl⁻ tiene un electrón de más respecto al átomo neutro porque:',
        opciones: ['ganó un protón', 'perdió un protón', 'ganó un electrón', 'perdió un electrón'],
        correcta: 2,
        explicacion: 'El "−" indica carga negativa: ganó un electrón.',
      },
    ],
  },
  relacionados: ['elementos-y-compuestos', 'simbolos-formulas', 'modelos-atomicos'],
  tags: ['átomo', 'protón', 'neutrón', 'electrón', 'número atómico', 'número másico', 'isótopo', 'ion'],
};
