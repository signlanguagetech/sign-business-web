import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CarouselPagination } from '@/hooks/useCarouselPagination';

export function CarouselControls({
  pagination,
  label,
  className = '',
}: {
  pagination: CarouselPagination;
  label: string;
  className?: string;
}) {
  const { active, pages, scrollBy, scrollTo } = pagination;
  if (pages <= 1) return null;
  return (
    <div className={`mt-6 flex items-center justify-center gap-4 ${className}`}>
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label={`Previous ${label}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${label} page ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? 'w-6 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label={`Next ${label}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
