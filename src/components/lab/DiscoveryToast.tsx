import { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface Props {
  message: string | null;
  onDismiss: () => void;
}

export function DiscoveryToast({ message, onDismiss }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) return;
    setVisible(true);
    const t = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onDismiss, 250);
    }, 3500);
    return () => window.clearTimeout(t);
  }, [message, onDismiss]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-200 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-amber-400/40 bg-slate-900/95 px-4 py-2.5 text-sm shadow-xl shadow-amber-500/10 backdrop-blur">
        <Sparkles className="h-4 w-4 text-amber-300" />
        <div>
          <p className="text-[10px] uppercase tracking-wide text-amber-300">Nuevo descubrimiento</p>
          <p className="text-sm font-semibold text-slate-100">{message}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            window.setTimeout(onDismiss, 250);
          }}
          aria-label="Cerrar"
          className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
