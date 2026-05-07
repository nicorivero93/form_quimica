export function Footer() {
  return (
    <footer className="px-4 py-3 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} ·{' '}
      <a
        href="https://tomerivero-dev.web.app"
        target="_blank"
        rel="noreferrer"
        className="text-brand-500 transition hover:text-brand-400 hover:underline"
      >
        tomerivero.dev
      </a>
    </footer>
  );
}
