import * as Sentry from '@sentry/react';

export function initSentry(): void {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!import.meta.env.PROD || !dsn) return;

  Sentry.init({
    dsn,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0.5,
  });
}

export const captureError = (error: unknown, context?: Record<string, unknown>): void => {
  if (import.meta.env.DEV) {
    console.error('[Sentry mock]', error, context);
    return;
  }
  Sentry.captureException(error, { extra: context });
};
