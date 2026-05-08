import { Component, type ReactNode, type ErrorInfo } from 'react';
import { captureError, tryReloadOnChunkError } from '@/lib/error-capture';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    if (tryReloadOnChunkError(error)) return { hasError: false, error: null };
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (tryReloadOnChunkError(error)) return;
    captureError(error, {
      component: 'ErrorBoundary',
      extra: { componentStack: info.componentStack },
    });
  }

  reset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
          <div className="max-w-md space-y-4 rounded-lg border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur">
            <h1 className="text-2xl font-bold text-rose-400">Algo salió mal</h1>
            <p className="text-sm text-slate-300">
              Refrescá la página. Si sigue, escribime y lo miro.
            </p>
            {this.state.error && (
              <pre className="overflow-auto rounded bg-slate-950 p-3 text-left text-xs text-slate-400">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400"
            >
              Refrescar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
