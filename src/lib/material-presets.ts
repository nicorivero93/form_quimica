import type { ElementCategory } from '@/types/element';

export interface MaterialPreset {
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  reflectivity: number;
  envMapIntensity: number;
}

const PRESETS: Record<ElementCategory, MaterialPreset> = {
  alkali:           { metalness: 0.55, roughness: 0.30, clearcoat: 0.50, clearcoatRoughness: 0.10, reflectivity: 0.7, envMapIntensity: 1.2 },
  alkaline:         { metalness: 0.50, roughness: 0.35, clearcoat: 0.45, clearcoatRoughness: 0.12, reflectivity: 0.6, envMapIntensity: 1.1 },
  transition:       { metalness: 0.85, roughness: 0.18, clearcoat: 0.75, clearcoatRoughness: 0.06, reflectivity: 0.95, envMapIntensity: 1.5 },
  'post-transition':{ metalness: 0.70, roughness: 0.25, clearcoat: 0.60, clearcoatRoughness: 0.10, reflectivity: 0.8, envMapIntensity: 1.3 },
  metalloid:        { metalness: 0.40, roughness: 0.40, clearcoat: 0.40, clearcoatRoughness: 0.15, reflectivity: 0.5, envMapIntensity: 1.0 },
  nonmetal:         { metalness: 0.05, roughness: 0.55, clearcoat: 0.25, clearcoatRoughness: 0.20, reflectivity: 0.3, envMapIntensity: 0.8 },
  halogen:          { metalness: 0.20, roughness: 0.45, clearcoat: 0.40, clearcoatRoughness: 0.15, reflectivity: 0.5, envMapIntensity: 1.0 },
  noble:            { metalness: 0.10, roughness: 0.55, clearcoat: 0.20, clearcoatRoughness: 0.20, reflectivity: 0.4, envMapIntensity: 0.9 },
  lanthanide:       { metalness: 0.75, roughness: 0.22, clearcoat: 0.55, clearcoatRoughness: 0.08, reflectivity: 0.85, envMapIntensity: 1.3 },
  actinide:         { metalness: 0.70, roughness: 0.25, clearcoat: 0.50, clearcoatRoughness: 0.10, reflectivity: 0.75, envMapIntensity: 1.2 },
  unknown:          { metalness: 0.40, roughness: 0.40, clearcoat: 0.30, clearcoatRoughness: 0.15, reflectivity: 0.5, envMapIntensity: 1.0 },
};

export function getMaterialPreset(category: ElementCategory): MaterialPreset {
  return PRESETS[category] ?? PRESETS.unknown;
}

const ELEMENT_OVERRIDES: Record<string, Partial<MaterialPreset>> = {
  Au: { metalness: 1.0, roughness: 0.10, clearcoat: 0.9, envMapIntensity: 2.0 },
  Ag: { metalness: 1.0, roughness: 0.08, clearcoat: 0.9, envMapIntensity: 2.0 },
  Cu: { metalness: 0.95, roughness: 0.15, clearcoat: 0.85, envMapIntensity: 1.8 },
  Pt: { metalness: 1.0, roughness: 0.12, clearcoat: 0.9, envMapIntensity: 1.8 },
  Hg: { metalness: 1.0, roughness: 0.05, clearcoat: 1.0, envMapIntensity: 2.0 },
  C:  { metalness: 0.0, roughness: 0.40, clearcoat: 0.20 },
  S:  { metalness: 0.0, roughness: 0.50, clearcoat: 0.10 },
};

export function getElementMaterial(symbol: string, category: ElementCategory): MaterialPreset {
  const base = getMaterialPreset(category);
  const override = ELEMENT_OVERRIDES[symbol];
  return override ? { ...base, ...override } : base;
}
