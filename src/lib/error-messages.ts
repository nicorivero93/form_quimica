// Traductor de errores técnicos a mensajes humanos en español argentino.
// Adaptado de contenidoapp con códigos del dominio préstamos/cobranza.

interface Pattern {
  kind: string;
  match: RegExp;
  msg: string;
}

const PATTERNS: Pattern[] = [
  {
    kind: 'permission_denied',
    match: /permission[-_ ]denied|insufficient permissions/i,
    msg: 'No tenés permiso para hacer esto. Si te parece raro, escribinos por WhatsApp.',
  },
  {
    kind: 'unauthenticated',
    match: /unauthenticated|login requerido|no autorizado/i,
    msg: 'Tu sesión venció. Refrescá la página y volvé a entrar.',
  },
  {
    kind: 'wrong_password',
    match: /auth\/wrong-password|invalid-credential|invalid-login-credentials/i,
    msg: 'Email o contraseña incorrectos.',
  },
  {
    kind: 'user_not_found',
    match: /auth\/user-not-found/i,
    msg: 'No encontramos esa cuenta. Verificá el email.',
  },
  {
    kind: 'too_many_requests',
    match: /auth\/too-many-requests|rate-limit/i,
    msg: 'Demasiados intentos. Esperá un par de minutos antes de probar de nuevo.',
  },
  {
    kind: 'not_found',
    match: /not[-_ ]found/i,
    msg: 'No encontramos lo que buscabas. Refrescá la página y volvé a probar.',
  },
  {
    kind: 'idempotency_conflict',
    match: /already-exists|conflict|duplicate/i,
    msg: 'Esto ya se procesó. Refrescá la página para ver el estado actualizado.',
  },
  {
    kind: 'network',
    match: /network|fetch|failed to fetch|networkerror/i,
    msg: 'No pudimos conectarnos. Chequeá tu internet y probá de nuevo.',
  },
  {
    kind: 'timeout',
    match: /timeout|deadline/i,
    msg: 'La operación tardó demasiado. Probá de nuevo en un minuto.',
  },
  {
    kind: 'storage',
    match: /storage|upload/i,
    msg: 'Hubo un problema con el archivo. Probá con uno más liviano.',
  },
  {
    kind: 'offline_queue',
    match: /indexeddb|cola offline|queue/i,
    msg: 'Estás sin internet. La operación se va a sincronizar cuando vuelvas a estar online.',
  },
];

// @param err  el error original (Error / HttpsError / string)
// @param action  contexto opcional: "registrando el pago", "guardando los cambios"
export function humanError(err: unknown, action?: string): string {
  const e = err as { message?: string };
  const message = e?.message || String(err || '');
  let kind = 'unknown';
  let humanMsg: string | undefined;
  for (const p of PATTERNS) {
    if (p.match.test(message)) {
      kind = p.kind;
      humanMsg = p.msg;
      break;
    }
  }
  if (!humanMsg) {
    humanMsg = action
      ? `No pudimos ${action}. Probá de nuevo en un minuto.`
      : 'Algo no salió bien. Probá de nuevo en un minuto.';
  }

  // Tracking best-effort en Sentry si está cargado.
  try {
    const w = window as unknown as { Sentry?: { withScope?: (cb: (s: { setTag: (k: string, v: string) => void; setExtra: (k: string, v: unknown) => void }) => void) => void; captureException?: (e: Error) => void } };
    if (typeof window !== 'undefined' && w.Sentry && err instanceof Error) {
      w.Sentry.withScope?.((scope) => {
        scope.setTag('errorKind', kind);
        scope.setTag('humanized', 'true');
        if (action) scope.setExtra('action', action);
        w.Sentry?.captureException?.(err);
      });
    }
  } catch { /* tracking best-effort */ }

  return humanMsg;
}
