import { useUiStore } from '@/store/ui-store';
import { CATEGORY_LIST } from '@/data/categories';
import { cn } from '@/lib/utils';

export function CategoryLegend() {
  const activeCategory = useUiStore((s) => s.activeCategory);
  const setCategory = useUiStore((s) => s.setCategory);

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORY_LIST.map((cat) => {
        const active = activeCategory === cat.id;
        const inactiveDimmed = activeCategory !== null && !active;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={cn(
              'flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition',
              cat.borderClass,
              cat.bgClass,
              cat.textClass,
              active && 'ring-2 ring-offset-1 ring-offset-slate-950',
              active && cat.ringClass,
              inactiveDimmed && 'opacity-40',
            )}
            aria-pressed={active}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: cat.color }}
              aria-hidden
            />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
