import { useState, useEffect, useRef } from 'react';

export function useRotatingList<T>(items: T[], interval = 5000) {
  const [index, setIndex] = useState(Math.floor(Math.random() * items.length) || 0);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  useEffect(() => {
    if (!itemsRef.current.length) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % itemsRef.current.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, itemsRef.current.length]);

  // Reset index if current index exceeds new length
  useEffect(() => {
    setIndex(i => (i >= items.length ? 0 : i));
  }, [items.length]);

  return {
    index,
    current: items[index],
    next: () => setIndex(i => (i + 1) % items.length),
    prev: () => setIndex(i => (i - 1 + items.length) % items.length),
    setIndex,
    length: items.length,
  };
}
