import { describe, it, expect } from 'vitest';
import { expandElectronConfig } from './utils';

describe('expandElectronConfig', () => {
  it('expande [Xe] correctamente para oro (Au)', () => {
    expect(expandElectronConfig('[Xe] 4f¹⁴ 5d¹⁰ 6s¹')).toBe(
      '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s¹',
    );
  });

  it('expande [Ar] correctamente para hierro (Fe)', () => {
    expect(expandElectronConfig('[Ar] 3d⁶ 4s²')).toBe('1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²');
  });

  it('respeta excepciones del Aufbau (Cr: [Ar] 3d⁵ 4s¹)', () => {
    // No reordena: si la fuente dice 3d⁵ 4s¹, la expansión también
    expect(expandElectronConfig('[Ar] 3d⁵ 4s¹')).toBe('1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹');
  });

  it('respeta la excepción de Cu ([Ar] 3d¹⁰ 4s¹)', () => {
    expect(expandElectronConfig('[Ar] 3d¹⁰ 4s¹')).toBe('1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹');
  });

  it('expande [Rn] para uranio', () => {
    expect(expandElectronConfig('[Rn] 5f³ 6d¹ 7s²')).toBe(
      '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶ 4f¹⁴ 5d¹⁰ 6s² 6p⁶ 5f³ 6d¹ 7s²',
    );
  });

  it('expande [He] para Li', () => {
    expect(expandElectronConfig('[He] 2s¹')).toBe('1s² 2s¹');
  });

  it('devuelve igual si no tiene gas noble (caso H, He)', () => {
    expect(expandElectronConfig('1s¹')).toBe('1s¹');
    expect(expandElectronConfig('1s²')).toBe('1s²');
  });

  it('devuelve igual si el gas noble no está mapeado', () => {
    expect(expandElectronConfig('[Xx] 1s¹')).toBe('[Xx] 1s¹');
  });
});
