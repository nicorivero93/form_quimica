import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { get, set, del } from 'idb-keyval';

import { App } from './App';
import { initSentry } from './lib/sentry';
import { initFirebase } from './lib/firebase';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import './styles/globals.css';

initSentry();
initFirebase();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24 * 30,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const idbPersister = createSyncStoragePersister({
  storage: {
    getItem: (key) => {
      let result: string | null = null;
      get(key).then((v) => { result = v ?? null; });
      return result;
    },
    setItem: (key, value) => { void set(key, value); },
    removeItem: (key) => { void del(key); },
  },
});

void persistQueryClient({
  queryClient,
  persister: idbPersister,
  maxAge: 1000 * 60 * 60 * 24 * 30,
  buster: 'v1',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
