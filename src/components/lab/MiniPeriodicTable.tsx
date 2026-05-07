import { memo } from 'react';
import { ELEMENTS } from '@/data/elements';
import { CATEGORIES } from '@/data/categories';
import { cn } from '@/lib/utils';

interface Props {
  onPick: (symbol: string) => void;
  disabled?: boolean;
}

export function MiniPeriodicTable({ onPick, disabled }: Props) {
  return (
    <div className="overflow-x-auto">
      <div
        className="mx-auto grid w-full min-w-[640px] gap-[2px] sm:gap-1"
        style={{
          gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
        }}
      >
        {ELEMENTS.map((el) => (
          <MiniCell
            key={el.symbol}
            symbol={el.symbol}
            n={el.n}
            row={el.row}
            col={el.col}
            category={el.category}
            onPick={onPick}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

interface CellProps {
  symbol: string;
  n: number;
  row: number;
  col: number;
  category: keyof typeof CATEGORIES;
  onPick: (symbol: string) => void;
  disabled?: boolean;
}

const MiniCell = memo(function MiniCell({
  symbol,
  n,
  row,
  col,
  category,
  onPick,
  disabled,
}: CellProps) {
  const cat = CATEGORIES[category];
  return (
    <button
      type="button"
      onClick={() => onPick(symbol)}
      disabled={disabled}
      style={{ gridRow: row, gridColumn: col }}
      title={`Agregar ${symbol} (Z=${n})`}
      aria-label={`Agregar ${symbol}`}
      className={cn(
        'flex aspect-square min-w-[28px] items-center justify-center rounded-sm border text-[10px] font-bold transition-all',
        cat.borderClass,
        cat.bgClass,
        cat.textClass,
        'hover:z-10 hover:scale-110 hover:shadow-md hover:shadow-black/40',
        'sm:min-w-[34px] sm:text-xs',
        disabled && 'cursor-not-allowed opacity-40',
      )}
    >
      {symbol}
    </button>
  );
});
