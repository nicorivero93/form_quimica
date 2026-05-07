import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide transition',
  {
    variants: {
      variant: {
        default: 'border-slate-700 bg-slate-800 text-slate-200',
        crystal: 'border-sky-500/40 bg-sky-500/15 text-sky-300',
        allotrope: 'border-fuchsia-500/40 bg-fuchsia-500/15 text-fuchsia-300',
        mineral: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
        molecule: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
        compound: 'border-teal-500/40 bg-teal-500/15 text-teal-300',
        atom: 'border-slate-500/40 bg-slate-500/15 text-slate-300',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
