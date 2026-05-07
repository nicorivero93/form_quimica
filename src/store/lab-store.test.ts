import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MAX_REACTANTS, useLabStore } from './lab-store';

const initialDiscoveries = { ...useLabStore.getState().discoveries };

beforeEach(() => {
  localStorage.clear();
  useLabStore.setState({
    mode: 'chemical',
    reactants: [],
    lastResult: null,
    noMatchAttempt: false,
    discoveries: {},
    isAnimating: false,
  });
});

afterEach(() => {
  useLabStore.setState({ discoveries: initialDiscoveries });
});

describe('addReactant', () => {
  it('agrega un símbolo nuevo con count 1', () => {
    useLabStore.getState().addReactant('H');
    expect(useLabStore.getState().reactants).toEqual([{ symbol: 'H', count: 1 }]);
  });

  it('agrupa duplicados (incrementa count)', () => {
    useLabStore.getState().addReactant('H');
    useLabStore.getState().addReactant('H');
    expect(useLabStore.getState().reactants).toEqual([{ symbol: 'H', count: 2 }]);
  });

  it('respeta MAX_REACTANTS', () => {
    for (let i = 0; i < MAX_REACTANTS + 3; i++) useLabStore.getState().addReactant('H');
    const total = useLabStore
      .getState()
      .reactants.reduce((acc, r) => acc + r.count, 0);
    expect(total).toBe(MAX_REACTANTS);
  });
});

describe('removeReactant', () => {
  it('decrementa count si > 1', () => {
    useLabStore.getState().addReactant('H');
    useLabStore.getState().addReactant('H');
    useLabStore.getState().removeReactant('H');
    expect(useLabStore.getState().reactants).toEqual([{ symbol: 'H', count: 1 }]);
  });

  it('elimina el símbolo si count llega a 0', () => {
    useLabStore.getState().addReactant('H');
    useLabStore.getState().removeReactant('H');
    expect(useLabStore.getState().reactants).toEqual([]);
  });

  it('no hace nada si el símbolo no existe', () => {
    useLabStore.getState().removeReactant('Xx');
    expect(useLabStore.getState().reactants).toEqual([]);
  });
});

describe('clearReactants', () => {
  it('vacía reactivos y resetea lastResult', () => {
    useLabStore.getState().addReactant('H');
    useLabStore.getState().clearReactants();
    expect(useLabStore.getState().reactants).toEqual([]);
    expect(useLabStore.getState().lastResult).toBeNull();
  });
});

describe('react', () => {
  it('encuentra agua y la registra como descubrimiento', () => {
    const s = useLabStore.getState();
    s.addReactant('H');
    s.addReactant('H');
    s.addReactant('O');
    const result = s.react();
    expect(result?.id).toBe('h2o');
    expect(useLabStore.getState().lastResult?.id).toBe('h2o');
    expect(useLabStore.getState().discoveries.h2o).toBeTypeOf('number');
  });

  it('no duplica el timestamp si ya estaba descubierta', () => {
    const s = useLabStore.getState();
    s.addReactant('H');
    s.addReactant('H');
    s.addReactant('O');
    s.react();
    const firstTs = useLabStore.getState().discoveries.h2o;
    s.clearReactants();
    s.addReactant('H');
    s.addReactant('H');
    s.addReactant('O');
    s.react();
    expect(useLabStore.getState().discoveries.h2o).toBe(firstTs);
  });

  it('devuelve null y marca noMatchAttempt cuando no hay match', () => {
    const s = useLabStore.getState();
    s.addReactant('He');
    s.addReactant('Ne');
    const result = s.react();
    expect(result).toBeNull();
    expect(useLabStore.getState().lastResult).toBeNull();
    expect(useLabStore.getState().noMatchAttempt).toBe(true);
    expect(useLabStore.getState().discoveries).toEqual({});
  });

  it('respeta el modo activo (química con reactivos solo nucleares → null)', () => {
    const s = useLabStore.getState();
    s.setMode('chemical');
    s.addReactant('Au');
    s.addReactant('Pt');
    const result = s.react();
    expect(result).toBeNull();
  });
});

describe('decompose', () => {
  it('descompone agua a sus reactivos y registra discovery', () => {
    const result = useLabStore.getState().decompose('mol-h2o');
    expect(result?.id).toBe('h2o');
    expect(useLabStore.getState().reactants).toContainEqual({ symbol: 'H', count: 2 });
    expect(useLabStore.getState().reactants).toContainEqual({ symbol: 'O', count: 1 });
    expect(useLabStore.getState().discoveries.h2o).toBeTypeOf('number');
  });

  it('null para compuesto no reversible', () => {
    const result = useLabStore.getState().decompose('mol-co2');
    expect(result).toBeNull();
    expect(useLabStore.getState().noMatchAttempt).toBe(true);
  });
});

describe('setMode', () => {
  it('cambia el modo y limpia reactivos', () => {
    const s = useLabStore.getState();
    s.addReactant('H');
    s.setMode('nuclear');
    expect(useLabStore.getState().mode).toBe('nuclear');
    expect(useLabStore.getState().reactants).toEqual([]);
  });
});

describe('persistencia', () => {
  it('escribe discoveries en localStorage bajo el namespace versionado', () => {
    const s = useLabStore.getState();
    s.addReactant('H');
    s.addReactant('H');
    s.addReactant('O');
    s.react();
    const raw = localStorage.getItem('tabla-atomos:lab:v1');
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed.state.discoveries.h2o).toBeTypeOf('number');
  });

  it('NO persiste reactants ni lastResult (solo discoveries)', () => {
    const s = useLabStore.getState();
    s.addReactant('Na');
    s.addReactant('Cl');
    s.react();
    const raw = localStorage.getItem('tabla-atomos:lab:v1');
    const parsed = JSON.parse(raw!);
    expect(parsed.state.reactants).toBeUndefined();
    expect(parsed.state.lastResult).toBeUndefined();
    expect(parsed.state.discoveries.nacl).toBeTypeOf('number');
  });
});
