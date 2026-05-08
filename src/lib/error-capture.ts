// Captura de errores global con auto-reload en chunk error.
// Adaptado de contenidoapp para apps sin callable logClientError —
// usa Sentry si está cargado, sino solo console.error.

import * as Sentry from '@sentry/react';

let _lastMessage: string | null = null;
let _lastTimestamp = 0;
const DEDUPE_WINDOW_MS = 5000;

function shouldDedupe(message: string): boolean {
  const now = Date.now();
  if (message === _lastMessage && (now - _lastTimestamp) < DEDUPE_WINDOW_MS) return true;
  _lastMessage = message;
  _lastTimestamp = now;
  return false;
}

// Detecta errores típicos de "chunk JS viejo que ya no existe" — ocurren cuando
// el cliente tiene la versión anterior en memoria (lazy import del chunk hash X)
// y deployamos una versión nueva (chunk regenerado con hash Y). El cliente
// navega → React intenta dynamic import del chunk X → 404 → boom.
export function isChunkLoadError(err: unknown): boolean {
  const e = err as { message?: string } | string | null | undefined;
  const raw = typeof e === 'string' ? e : (e?.message || '');
  const msg = raw.toLowerCase();
  return (
    msg.includes('failed to fetch dynamically imported module') ||
    msg.includes('failed to fetch dynamic') ||
    msg.includes('loading chunk') ||
    msg.includes('importing a module script failed') ||
    msg.includes('error loading chunk') ||
    msg.includes('unable to preload css') ||
    msg.includes('connection to indexed database server lost') ||
    msg.includes('indexeddb is not available')
  );
}

// Errores "esperados" que NO son bugs — user behavior (cerrar popup, denegar permiso).
export function isExpectedNonError(err: unknown): boolean {
  if (!err) return false;
  const e = err as { code?: string; message?: string };
  const code = e?.code || '';
  const msg = (e?.message || (typeof err === 'string' ? err : '') || '').toLowerCase();
  return (
    code === 'auth/popup-closed-by-user' ||
    code === 'auth/cancelled-popup-request' ||
    code === 'auth/popup-blocked' ||
    msg.includes('popup closed by user') ||
    msg.includes('the user did not grant permission') ||
    msg.includes('user denied geolocation')
  );
}

// Auto-reload con guard anti-loop (no repite si recargamos hace <30s).
export function tryReloadOnChunkError(err: unknown): boolean {
  if (!isChunkLoadError(err)) return false;
  if (typeof window === 'undefined') return false;
  try {
    const RELOAD_KEY = '__chunkReloadAt';
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    const now = Date.now();
    if (last && (now - last) < 30_000) return false;
    sessionStorage.setItem(RELOAD_KEY, String(now));
  } catch { /* sessionStorage puede fallar en modo privado */ }
  captureError(err, { component: 'chunkReload', action: 'auto-reload' }, 'warning');
  setTimeout(() => window.location.reload(), 100);
  return true;
}

type Severity = 'error' | 'warning' | 'info';

interface Context {
  url?: string;
  route?: string;
  userAgent?: string;
  component?: string;
  action?: string;
  extra?: Record<string, unknown>;
}

// Reporta a Sentry (si está inicializado) + console.error siempre.
export function captureError(err: unknown, context: Context = {}, severity: Severity = 'error'): void {
  try {
    const e = err as { message?: string; stack?: string };
    const message = typeof err === 'string' ? err : (e?.message || 'unknown error');
    if (shouldDedupe(message)) return;

    const enrichedContext: Context = {
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      route: typeof window !== 'undefined' ? window.location.pathname : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      ...context,
    };

    // Sentry: best-effort. withScope para tags + contexto.
    try {
      Sentry.withScope?.((scope) => {
        scope.setLevel(severity);
        if (context.component) scope.setTag('component', context.component);
        if (context.action) scope.setTag('action', context.action);
        scope.setContext('errorContext', enrichedContext as Record<string, unknown>);
        if (err instanceof Error) {
          Sentry.captureException(err);
        } else {
          Sentry.captureMessage(message, severity);
        }
      });
    } catch { /* Sentry puede no estar inicializado en dev */ }

    // eslint-disable-next-line no-console
    console.error(`[${severity}]`, message, enrichedContext);
  } catch {
    // Nunca tirar desde el reporter.
  }
}

// Instala handlers globales. Llamar 1 vez desde main.tsx.
export function installGlobalErrorHandlers(): void {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', (event) => {
    if (!event.error) return;
    if (event.target && event.target !== window && event.target instanceof HTMLElement) return;
    if (tryReloadOnChunkError(event.error)) return;
    if (isExpectedNonError(event.error)) return;
    captureError(event.error, {
      component: 'window.onerror',
      extra: { filename: event.filename, lineno: event.lineno, colno: event.colno },
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (tryReloadOnChunkError(event.reason)) return;
    if (isExpectedNonError(event.reason)) return;
    captureError(event.reason, { component: 'unhandledrejection' });
  });
}
