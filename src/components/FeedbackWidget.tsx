import { useState } from 'react';
import { APP_VERSION } from '@/lib/version';

const IconPlus = (p: { className?: string }) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="12" y1="7" x2="12" y2="13"/><line x1="9" y1="10" x2="15" y2="10"/>
  </svg>
);
const IconX = (p: { className?: string }) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconSend = (p: { className?: string }) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const FEEDBACK_EMAIL = 'contacto@tomerivero.dev';
const APP_NAME = 'Tabla Periódica 3D';

const TYPES = [
  { value: 'idea', label: 'Idea' },
  { value: 'bug', label: 'Bug' },
  { value: 'otro', label: 'Otro' },
];

// Widget de feedback. Abre un modal, junta tipo + mensaje + contexto técnico
// (URL, versión, user agent), y dispara un mailto: al soporte.
// Versión simple sin Firestore — funciona en cualquier repo sin tocar rules.
export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string>('idea');
  const [message, setMessage] = useState('');

  function handleSend() {
    const trimmed = message.trim();
    if (trimmed.length < 5) return;

    const subject = `[${APP_NAME}] [${type}] ${trimmed.slice(0, 40)}`;
    const body = [
      trimmed,
      '',
      '---',
      `Tipo: ${type}`,
      `URL: ${typeof window !== 'undefined' ? window.location.href : ''}`,
      `Versión: ${APP_VERSION}`,
      `User Agent: ${typeof navigator !== 'undefined' ? navigator.userAgent : ''}`,
    ].join('\n');

    const url = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setMessage('');
    setOpen(false);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-30 flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 text-slate-900 font-semibold shadow-xl hover:bg-amber-400 transition-colors text-sm"
          aria-label="Feedback"
          title="Mandame una idea o reportá un bug"
        >
          <IconPlus className="w-4 h-4" />
          <span className="hidden sm:inline">Feedback</span>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full sm:max-w-md bg-slate-800 border border-slate-700 rounded-t-2xl sm:rounded-2xl p-5 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold text-lg">Mandame feedback</h2>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white" aria-label="Cerrar">
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Lo leo yo en persona. Si es un bug que te bloquea, escribime también por WhatsApp.
            </p>

            <div className="flex gap-2">
              {TYPES.map((t) => {
                const active = type === t.value;
                return (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setType(t.value)}
                    className={`flex-1 py-2 rounded-lg border transition-colors text-sm ${
                      active
                        ? 'bg-amber-500/10 border-amber-500/40 text-white'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                type === 'bug'
                  ? '¿Qué hiciste, qué esperabas y qué pasó?'
                  : type === 'idea'
                    ? '¿Qué te haría la vida más fácil acá?'
                    : 'Contame...'
              }
              rows={5}
              maxLength={2000}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-base focus:border-amber-500 focus:outline-none resize-none"
            />

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{message.length}/2000</span>
              <button
                type="button"
                onClick={handleSend}
                disabled={message.trim().length < 5}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <IconSend className="w-4 h-4" />
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
