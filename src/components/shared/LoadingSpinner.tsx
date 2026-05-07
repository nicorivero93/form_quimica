import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  label?: string;
}

export function LoadingSpinner({ className, label }: Props) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 text-slate-400', className)}>
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-brand-500" />
      {label && <p className="text-sm">{label}</p>}
    </div>
  );
}
