import { useState, useEffect } from 'react';

const IconMessageCircle = (p: { className?: string }) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const IconX = (p: { className?: string }) => (
  <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const WHATSAPP_NUMBER = '5491135160074';
const STORAGE_KEY = 'whatsappFAB.dismissedAt';
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

function buildUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface Props {
  message?: string;
}

export function WhatsAppFAB({ message }: Props = {}) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const ts = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (ts && Date.now() - ts < DISMISS_TTL_MS) {
        setDismissed(true);
      }
    } catch { /* localStorage puede fallar en private mode */ }
  }, []);

  if (dismissed) return null;

  const text = message ?? 'Hola Tome! Tengo una consulta sobre la Tabla Periódica 3D.';

  const handleDismiss = () => {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch { /* noop */ }
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <div className="relative bg-[#25D366] text-white rounded-2xl shadow-2xl px-4 py-3 max-w-[260px] hidden sm:block">
        <button
          onClick={handleDismiss}
          aria-label="Cerrar"
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs flex items-center justify-center"
        >
          <IconX className="w-3 h-3" />
        </button>
        <div className="text-xs font-semibold mb-0.5">¿Necesitás ayuda?</div>
        <div className="text-[11px] opacity-90 leading-snug">
          Escribime al WhatsApp y te respondo.
        </div>
      </div>
      <a
        href={buildUrl(text)}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
      >
        <IconMessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
