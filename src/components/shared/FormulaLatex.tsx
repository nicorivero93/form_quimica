import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';

interface Props {
  latex: string;
  display?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function FormulaLatex({ latex, display = false, className, ariaLabel }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    try {
      katex.render(latex, ref.current, {
        throwOnError: false,
        displayMode: display,
        output: 'html',
      });
    } catch {
      if (ref.current) ref.current.textContent = latex;
    }
  }, [latex, display]);

  return (
    <span
      ref={ref}
      className={cn(display ? 'block py-1 text-center' : 'inline', className)}
      aria-label={ariaLabel ?? latex}
      role="math"
    />
  );
}
