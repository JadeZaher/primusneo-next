"use client";

import { useEffect, useRef, useState } from 'react';

// Scroll-reveal wrapper matching the design system's reveal.js behavior:
// fade + 26px rise, 0.9s ease, optional per-element delay, reduced-motion safe.
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(26px)',
        transition:
          'opacity .9s cubic-bezier(.2,.65,.2,1), transform .9s cubic-bezier(.2,.65,.2,1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
