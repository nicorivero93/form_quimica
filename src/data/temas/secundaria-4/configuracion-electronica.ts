import type { Tema } from '@/types/tema';

export const configuracionElectronica: Tema = {
  slug: 'configuracion-electronica',
  titulo: 'Configuración electrónica',
  anios: ['secundaria-4'],
  area: 'estructura-enlace',
  nivel: 'intro',
  resumen:
    'Cómo se distribuyen los electrones de un átomo en niveles, subniveles y orbitales, siguiendo Aufbau, Pauli y Hund.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La configuración electrónica te dice en qué "casilleros" energéticos se ubican los electrones de un átomo. Esos casilleros son los **subniveles** (s, p, d, f) y se llenan en orden de energía creciente.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Principio de Aufbau',
      texto:
        'Los electrones ocupan primero los subniveles de menor energía. Se llena $1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p$ y así.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cada subnivel tiene una capacidad fija de electrones: **s** = 2, **p** = 6, **d** = 10, **f** = 14. Por eso el helio (Z=2) tiene $1s^2$ y se llenan los 2 e⁻ que admite el subnivel s del primer nivel.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Subnivel', 'Orbitales', 'Electrones máx'],
      filas: [
        ['s', '1', '2'],
        ['p', '3', '6'],
        ['d', '5', '10'],
        ['f', '7', '14'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla nemotécnica',
      texto:
        'Para no perderte el orden de llenado, dibujás la diagonal de Madelung: filas $1s$, $2s\\,2p$, $3s\\,3p\\,3d$, $4s\\,4p\\,4d\\,4f$… y trazás flechas diagonales hacia arriba.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los **electrones de valencia** son los del último nivel ocupado — los que participan en enlaces. Fijate la última parte de la configuración: para el sodio ($1s^2 2s^2 2p^6 3s^1$), tiene 1 electrón de valencia en $3s$.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'En átomos grandes el orden $4s$ antes de $3d$ se invierte una vez que están ambos ocupados (anomalías como Cr y Cu). Para 4° año basta con la regla general.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Capacidad por nivel n',
      latex: '2n^2',
      variables: [{ simbolo: 'n', nombre: 'número del nivel', unidad: '—' }],
      cuandoUsar: 'Para saber cuántos electrones caben en el nivel n (ej: n=3 → 18 e⁻).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Configuración del cloro (Z=17)',
      enunciado: 'Escribir la configuración electrónica del cloro y decir cuántos electrones de valencia tiene.',
      pasos: [
        {
          explicacion: 'Empezamos a llenar desde $1s$ siguiendo Aufbau, hasta repartir los 17 electrones.',
          latex: '1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^2 \\, 3p^5',
        },
        {
          explicacion: 'Sumamos para verificar: $2+2+6+2+5 = 17$. ✓',
        },
        {
          explicacion:
            'Los electrones de valencia son los del último nivel (n=3): $3s^2 3p^5 = 7$ electrones de valencia.',
        },
      ],
      resultado: 'Cl: $1s^2 2s^2 2p^6 3s^2 3p^5$, 7 electrones de valencia.',
    },
    {
      titulo: 'Configuración abreviada del hierro (Z=26)',
      enunciado: 'Escribir la configuración del Fe usando notación abreviada con el gas noble anterior.',
      pasos: [
        {
          explicacion:
            'El gas noble anterior al Fe es el argón (Z=18, $1s^2 2s^2 2p^6 3s^2 3p^6$). Lo abreviamos como [Ar].',
        },
        {
          explicacion: 'Después del argón hay que ubicar 8 electrones más siguiendo Aufbau: primero $4s^2$, luego $3d^6$.',
          latex: '[Ar] \\, 4s^2 \\, 3d^6',
        },
      ],
      resultado: 'Fe: [Ar] $4s^2 3d^6$.',
    },
  ],
  erroresComunes: [
    'Llenar el $3d$ antes que el $4s$: el orden de llenado es $4s$ primero, después $3d$.',
    'Pensar que la suma de electrones es el número de masa. Es el número atómico (Z) el que coincide con la cantidad de electrones en un átomo neutro.',
    'Confundir nivel (n) con subnivel (s, p, d, f). Un nivel agrupa varios subniveles.',
    'Olvidarse que iones positivos pierden electrones del último nivel ocupado, no del último que se llenó (los metales de transición pierden primero $4s$, no $3d$).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuántos electrones admite el subnivel d?',
        opciones: ['2', '6', '10', '14'],
        correcta: 2,
        explicacion: 'El subnivel d tiene 5 orbitales y cada orbital admite 2 electrones (Pauli) → $5 \\times 2 = 10$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la configuración correcta del oxígeno (Z=8)?',
        opciones: ['$1s^2 2s^2 2p^4$', '$1s^2 2s^4 2p^2$', '$1s^2 2s^2 2p^6$', '$1s^2 2p^6$'],
        correcta: 0,
        explicacion: 'Llenamos en orden: $1s$ (2 e⁻) → $2s$ (2 e⁻) → $2p$ (4 e⁻ restantes). Total $2+2+4=8$. ✓',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos electrones de valencia tiene el carbono (Z=6)?',
        respuesta: 4,
        explicacion: 'C: $1s^2 2s^2 2p^2$. La capa de valencia (n=2) tiene $2s^2 + 2p^2 = 4$ electrones.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Los gases nobles tienen 8 electrones de valencia (excepto el helio, que tiene 2).',
        respuesta: true,
        explicacion:
          'Por eso son inertes: tienen su capa de valencia completa (regla del octeto), lo que los hace muy estables.',
      },
    ],
  },
  tags: ['configuración electrónica', 'aufbau', 'subniveles', 'electrones de valencia', 'estructura atómica'],
};
