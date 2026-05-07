import type { Tema } from '@/types/tema';

export const enlaceIonico: Tema = {
  slug: 'enlace-ionico',
  titulo: 'Enlace iónico',
  anios: ['secundaria-4'],
  area: 'estructura-enlace',
  nivel: 'intermedio',
  resumen:
    'Cómo y por qué un metal cede electrones a un no metal formando iones que se atraen y construyen redes cristalinas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un **enlace iónico** se forma cuando un átomo le **transfiere completamente** uno o más electrones a otro. El que cede queda con carga positiva (catión) y el que recibe con carga negativa (anión). Las cargas opuestas se atraen y arman una red cristalina.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cuándo se forma',
      texto:
        'Cuando la diferencia de electronegatividad entre los dos átomos es **grande** (típicamente Δχ > 1,7). Eso pasa entre **metales** (electronegatividad baja) y **no metales** (alta).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Tomá NaCl como ejemplo: el sodio (1 e⁻ de valencia, electronegatividad 0,9) se lo cede al cloro (7 e⁻ de valencia, electronegatividad 3,2). Resultado: $Na^+$ y $Cl^-$. Ambos quedan con configuración estable de gas noble.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Compuesto iónico', 'Por qué'],
      filas: [
        ['Punto de fusión', 'alto', 'romper la red requiere mucha energía'],
        ['Estado a 25 °C', 'sólido cristalino', 'red 3D ordenada'],
        ['Solubilidad', 'muchos solubles en agua', 'el agua estabiliza los iones (solvatación)'],
        ['Conducción eléctrica', 'no como sólido, sí disuelto o fundido', 'los iones tienen que moverse libres'],
        ['Dureza', 'duros pero frágiles', 'un golpe alinea cargas iguales y se rompe'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla del octeto',
      texto:
        'La idea detrás del enlace: la mayoría de los átomos "buscan" tener 8 electrones de valencia (como los gases nobles). Ceder, ganar o compartir electrones es la forma de lograrlo.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Una "molécula de NaCl" no existe en sentido estricto: no hay un par aislado de Na⁺ y Cl⁻. Lo que hay es una red iónica. La fórmula NaCl indica la **proporción** (1:1).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Predecir un compuesto iónico',
      enunciado: 'El magnesio (Mg) reacciona con cloro (Cl). ¿Qué fórmula tiene el compuesto?',
      pasos: [
        {
          explicacion:
            'Mg está en grupo 2 → tiende a ceder 2 electrones formando $Mg^{2+}$.',
        },
        {
          explicacion:
            'Cl está en grupo 17 → tiende a ganar 1 electrón formando $Cl^-$.',
        },
        {
          explicacion:
            'Para neutralizar la carga +2 del Mg necesitamos 2 cloruros: la fórmula es $MgCl_2$.',
        },
      ],
      resultado: 'Cloruro de magnesio: $MgCl_2$.',
    },
    {
      titulo: 'Identificar enlace iónico',
      enunciado:
        'En una lista de compuestos: NaCl, H₂O, KBr, CO₂, CaO. ¿Cuáles tienen enlace iónico?',
      pasos: [
        {
          explicacion: 'Iónico = metal + no metal con gran diferencia de electronegatividad.',
        },
        {
          explicacion: 'NaCl: metal alcalino + halógeno → iónico ✓.',
        },
        {
          explicacion: 'H₂O: dos no metales → covalente.',
        },
        {
          explicacion: 'KBr: alcalino + halógeno → iónico ✓.',
        },
        {
          explicacion: 'CO₂: dos no metales → covalente.',
        },
        {
          explicacion: 'CaO: alcalinotérreo + no metal → iónico ✓.',
        },
      ],
      resultado: 'Iónicos: NaCl, KBr, CaO. Covalentes: H₂O, CO₂.',
    },
  ],
  erroresComunes: [
    'Pensar que el catión "regala" electrones por gusto. Lo hace porque la energía total del sistema (ion + ion + red) baja respecto a los átomos sueltos.',
    'Olvidarse de balancear cargas al escribir la fórmula. Mg²⁺ + Cl⁻ = MgCl₂ (no MgCl).',
    'Decir que NaCl "es una molécula". Es una red cristalina; la fórmula indica proporción.',
    'Asumir que todos los compuestos iónicos son solubles en agua. Muchos sí (NaCl, KBr) pero otros no (AgCl, BaSO₄).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Qué tipo de enlace tiene el KBr?',
        opciones: ['Covalente polar', 'Covalente apolar', 'Iónico', 'Metálico'],
        correcta: 2,
        explicacion: 'K (alcalino) + Br (halógeno): gran diferencia de electronegatividad → iónico.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la fórmula del compuesto iónico entre Al³⁺ y O²⁻?',
        opciones: ['AlO', 'AlO₂', 'Al₂O₃', 'Al₃O₂'],
        correcta: 2,
        explicacion: 'Para balancear cargas: 2(+3) + 3(−2) = 0 → Al₂O₃ (corindón, alúmina).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Los compuestos iónicos sólidos conducen la electricidad.',
        respuesta: false,
        explicacion: 'No: los iones están fijos en la red. Sí conducen disueltos en agua o fundidos.',
      },
    ],
  },
  relacionados: ['configuracion-electronica', 'enlace-covalente'],
  tags: ['enlace iónico', 'catión', 'anión', 'red cristalina', 'octeto', 'electronegatividad'],
};
