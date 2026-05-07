import { describe, it, expect } from 'vitest';
import { findReaction, findDecomposition } from './reaction-engine';
import { REACTIONS_CHEMICAL } from '@/data/reactions-chemical';

describe('findReaction (química)', () => {
  it('encuentra agua con H + H + O', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 1 },
        { symbol: 'H', count: 1 },
        { symbol: 'O', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('h2o');
  });

  it('es insensible al orden de los reactivos', () => {
    const r = findReaction(
      [
        { symbol: 'O', count: 1 },
        { symbol: 'H', count: 1 },
        { symbol: 'H', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('h2o');
  });

  it('matchea coeficientes proporcionales (4H + 2O = H₂O)', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 4 },
        { symbol: 'O', count: 2 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('h2o');
  });

  it('NO matchea estequiometría incorrecta (H + O ≠ H₂O)', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 1 },
        { symbol: 'O', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r).toBeNull();
  });

  it('agrupa duplicados (4×H + C → CH₄)', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 1 },
        { symbol: 'H', count: 1 },
        { symbol: 'H', count: 1 },
        { symbol: 'H', count: 1 },
        { symbol: 'C', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('ch4');
  });

  it('encuentra sal con Na + Cl', () => {
    const r = findReaction(
      [
        { symbol: 'Na', count: 1 },
        { symbol: 'Cl', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('nacl');
  });

  it('encuentra hematita con 2Fe + 3O', () => {
    const r = findReaction(
      [
        { symbol: 'Fe', count: 2 },
        { symbol: 'O', count: 3 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('fe2o3');
  });

  it('encuentra NaOH con tres elementos distintos (Na + O + H)', () => {
    const r = findReaction(
      [
        { symbol: 'Na', count: 1 },
        { symbol: 'O', count: 1 },
        { symbol: 'H', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('naoh');
  });

  it('devuelve null para combinación inexistente (He + Ne)', () => {
    const r = findReaction(
      [
        { symbol: 'He', count: 1 },
        { symbol: 'Ne', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r).toBeNull();
  });

  it('devuelve null para reactivos vacíos', () => {
    const r = findReaction([], 'chemical', REACTIONS_CHEMICAL);
    expect(r).toBeNull();
  });

  it('devuelve null si el tipo no coincide (busca nuclear en dataset químico)', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 2 },
        { symbol: 'O', count: 1 },
      ],
      'nuclear',
      REACTIONS_CHEMICAL,
    );
    expect(r).toBeNull();
  });

  it('matchea cuando un reactivo aparece en partes (H, H, H, H combinados a 4)', () => {
    const r = findReaction(
      [
        { symbol: 'H', count: 2 },
        { symbol: 'H', count: 2 },
        { symbol: 'C', count: 1 },
      ],
      'chemical',
      REACTIONS_CHEMICAL,
    );
    expect(r?.id).toBe('ch4');
  });
});

describe('findDecomposition', () => {
  it('descompone agua (reversible)', () => {
    const r = findDecomposition('mol-h2o', REACTIONS_CHEMICAL);
    expect(r?.id).toBe('h2o');
  });

  it('descompone sal de mesa (reversible)', () => {
    const r = findDecomposition('nacl', REACTIONS_CHEMICAL);
    expect(r?.id).toBe('nacl');
  });

  it('descompone fluorita (reversible)', () => {
    const r = findDecomposition('caf2', REACTIONS_CHEMICAL);
    expect(r?.id).toBe('caf2');
  });

  it('NO descompone CO₂ (no marcado como reversible)', () => {
    const r = findDecomposition('mol-co2', REACTIONS_CHEMICAL);
    expect(r).toBeNull();
  });

  it('NO descompone metano (no marcado como reversible)', () => {
    const r = findDecomposition('mol-ch4', REACTIONS_CHEMICAL);
    expect(r).toBeNull();
  });

  it('devuelve null para structureId inexistente', () => {
    const r = findDecomposition('xxx-no-existe', REACTIONS_CHEMICAL);
    expect(r).toBeNull();
  });
});
