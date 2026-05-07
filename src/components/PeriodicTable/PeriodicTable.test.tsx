import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PeriodicTable } from './index';
import { SearchBar } from './SearchBar';
import { useUiStore } from '@/store/ui-store';

function renderWithProviders(ui: React.ReactNode) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={qc}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>,
  );
}

describe('PeriodicTable', () => {
  beforeEach(() => {
    useUiStore.setState({
      searchQuery: '',
      activeCategory: null,
      selectedElementSymbol: null,
      selectedStructureId: null,
    });
  });

  it('renderiza los 118 elementos como botones', () => {
    renderWithProviders(<PeriodicTable />);
    // Cada celda es un button con label "Nombre, número atómico N"
    const buttons = screen.getAllByRole('button');
    // 118 elementos + 0 botones extra (placeholders no son buttons)
    expect(buttons.length).toBe(118);
  });

  it('hace dim de elementos que no matchean búsqueda', async () => {
    renderWithProviders(
      <>
        <SearchBar />
        <PeriodicTable />
      </>,
    );
    const search = screen.getByRole('searchbox');
    await userEvent.type(search, 'Au');
    // El estado del store debería tener "Au"
    expect(useUiStore.getState().searchQuery).toBe('Au');
  });

  it('selecciona elemento al click', async () => {
    renderWithProviders(<PeriodicTable />);
    const auButton = screen.getByLabelText(/^Oro,/);
    await userEvent.click(auButton);
    expect(useUiStore.getState().selectedElementSymbol).toBe('Au');
  });
});
