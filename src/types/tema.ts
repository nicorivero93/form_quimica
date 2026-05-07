export type AnioId =
  | 'secundaria-4'
  | 'secundaria-5'
  | 'cbc-quimica';

export type AreaQuimicaId =
  | 'estructura-enlace'
  | 'tabla-periodica'
  | 'estequiometria'
  | 'gases'
  | 'soluciones'
  | 'termoquimica'
  | 'cinetica-equilibrio'
  | 'acido-base'
  | 'redox'
  | 'organica';

export type Nivel = 'intro' | 'intermedio' | 'avanzado';

export type Etapa = 'secundaria' | 'cbc';

export interface Anio {
  id: AnioId;
  etapa: Etapa;
  numero: number;
  nombre: string;
  nombreCorto: string;
  icono: string;
  color: string;
  orden: number;
}

export interface AreaQuimica {
  id: AreaQuimicaId;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
  orden: number;
}

export type BloqueTeoria =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'latex'; latex: string; display?: boolean }
  | { tipo: 'callout'; variante: 'tip' | 'cuidado' | 'definicion'; titulo?: string; texto: string }
  | { tipo: 'lista'; items: string[]; ordenada?: boolean }
  | { tipo: 'tabla'; encabezados: string[]; filas: string[][] };

export interface VariableFormula {
  simbolo: string;
  nombre: string;
  unidad: string;
  desc?: string;
}

export interface FormulaClave {
  nombre: string;
  latex: string;
  variables: VariableFormula[];
  cuandoUsar?: string;
}

export interface PasoEjemplo {
  explicacion: string;
  latex?: string;
}

export interface Ejemplo {
  titulo: string;
  enunciado: string;
  pasos: PasoEjemplo[];
  resultado: string;
}

export type PreguntaQuiz =
  | {
      tipo: 'numerica';
      enunciado: string;
      respuesta: number;
      tolerancia?: number;
      unidad?: string;
      explicacion: string;
    }
  | {
      tipo: 'multiple';
      enunciado: string;
      opciones: string[];
      correcta: number;
      explicacion: string;
    }
  | {
      tipo: 'verdadero-falso';
      enunciado: string;
      respuesta: boolean;
      explicacion: string;
    };

export interface Quiz {
  preguntas: PreguntaQuiz[];
}

export interface Tema {
  slug: string;
  titulo: string;
  anios: AnioId[];
  area: AreaQuimicaId;
  nivel: Nivel;
  resumen: string;
  teoria: BloqueTeoria[];
  formulasClave?: FormulaClave[];
  ejemplos: Ejemplo[];
  erroresComunes: string[];
  quiz?: Quiz;
  visualizadorId?: string;
  relacionados?: string[];
  tags: string[];
}
