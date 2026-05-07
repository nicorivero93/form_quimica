import { describe, it, expect } from 'vitest';
import { ELEMENTS, ELEMENTS_BY_SYMBOL, ELEMENTS_BY_NUMBER, findElement, filterElements } from './elements';

describe('ELEMENTS dataset', () => {
  it('tiene exactamente 118 elementos', () => {
    expect(ELEMENTS).toHaveLength(118);
  });

  it('los números atómicos son consecutivos del 1 al 118', () => {
    for (let i = 0; i < 118; i++) {
      expect(ELEMENTS[i].n).toBe(i + 1);
    }
  });

  it('no tiene símbolos duplicados', () => {
    const symbols = ELEMENTS.map((e) => e.symbol);
    expect(new Set(symbols).size).toBe(symbols.length);
  });

  it('todos los símbolos están en ELEMENTS_BY_SYMBOL', () => {
    for (const el of ELEMENTS) {
      expect(ELEMENTS_BY_SYMBOL[el.symbol]).toBe(el);
    }
  });

  it('todos los números están en ELEMENTS_BY_NUMBER', () => {
    for (const el of ELEMENTS) {
      expect(ELEMENTS_BY_NUMBER[el.n]).toBe(el);
    }
  });

  it('tiene H, Au, Fe, U, Og en el lugar correcto', () => {
    expect(ELEMENTS_BY_SYMBOL.H.n).toBe(1);
    expect(ELEMENTS_BY_SYMBOL.Au.n).toBe(79);
    expect(ELEMENTS_BY_SYMBOL.Fe.n).toBe(26);
    expect(ELEMENTS_BY_SYMBOL.U.n).toBe(92);
    expect(ELEMENTS_BY_SYMBOL.Og.n).toBe(118);
  });

  it('todos los elementos tienen descripción no vacía', () => {
    for (const el of ELEMENTS) {
      expect(el.description.length).toBeGreaterThan(20);
    }
  });

  it('todos los elementos tienen wikiSlug', () => {
    for (const el of ELEMENTS) {
      expect(el.wikiSlug).toMatch(/^[A-Z]/);
    }
  });
});

describe('findElement', () => {
  it('encuentra por símbolo', () => {
    expect(findElement('Au')?.n).toBe(79);
    expect(findElement('au')?.n).toBe(79);
  });
  it('encuentra por nombre español', () => {
    expect(findElement('oro')?.symbol).toBe('Au');
    expect(findElement('Hierro')?.symbol).toBe('Fe');
  });
  it('encuentra por nombre inglés', () => {
    expect(findElement('gold')?.symbol).toBe('Au');
  });
  it('encuentra por número atómico', () => {
    expect(findElement('79')?.symbol).toBe('Au');
    expect(findElement('1')?.symbol).toBe('H');
  });
  it('devuelve undefined para inputs vacíos', () => {
    expect(findElement('')).toBeUndefined();
    expect(findElement('  ')).toBeUndefined();
  });
});

describe('filterElements', () => {
  it('devuelve todos los elementos cuando query está vacío', () => {
    expect(filterElements('').length).toBe(118);
  });
  it('filtra por substring en símbolo', () => {
    const matches = filterElements('Au');
    expect(matches.some((e) => e.symbol === 'Au')).toBe(true);
  });
  it('filtra por substring en número', () => {
    const matches = filterElements('11');
    // matches incluye n=11 (Na), 111 (Rg), y cualquier que contenga "11"
    expect(matches.some((e) => e.n === 11)).toBe(true);
  });
});
