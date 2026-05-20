import { useEffect, useRef, useState } from 'react';

export function useCarouselPagination(itemCount: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(itemCount);

  const getStep = () => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    return card.getBoundingClientRect().width + gap;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const recompute = () => {
      const step = getStep();
      if (!step) return;
      const visible = Math.max(1, Math.round(el.clientWidth / step));
      setPages(Math.max(1, itemCount - visible + 1));
    };
    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      setActive(Math.round(el.scrollLeft / step));
    };
    recompute();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recompute);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recompute);
    };
  }, [itemCount]);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    const step = getStep();
    if (!el || !step) return;
    const next = Math.max(0, Math.min(pages - 1, active + dir));
    el.scrollTo({ left: next * step, behavior: 'smooth' });
  };

  const scrollTo = (i: number) => {
    const el = ref.current;
    const step = getStep();
    if (!el || !step) return;
    el.scrollTo({ left: i * step, behavior: 'smooth' });
  };

  return { ref, active, pages, scrollBy, scrollTo };
}

export type CarouselPagination = ReturnType<typeof useCarouselPagination>;
