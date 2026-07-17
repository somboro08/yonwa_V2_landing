import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport.
 * Returns [ref, isVisible].
 * @param {number} threshold – 0 to 1, portion of element visible to trigger
 * @param {string} rootMargin – CSS margin around root
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
