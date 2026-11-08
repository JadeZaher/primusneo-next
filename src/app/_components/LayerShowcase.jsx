"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AUTOPLAY_MS = 7000;

export default function LayerShowcase({ layers = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = layers.length;

  const go = useCallback(
    (next) => setActive(() => (next + count) % count),
    [count],
  );

  // Restart the autoplay progress whenever the slide or pause state changes.
  const [progressKey, setProgressKey] = useState(0);
  useEffect(() => setProgressKey((k) => k + 1), [active]);

  useEffect(() => {
    if (paused || count <= 1) return undefined;
    const timer = setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [active, paused, count, go]);

  const touchX = useRef(null);
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1));
    touchX.current = null;
  };

  if (count === 0) return null;

  const current = layers[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="PrimusNeo platform layers"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Visual */}
        <div className="relative aspect-square overflow-hidden border border-white/10 bg-ink">
          {layers.map((layer, i) => (
            <Image
              key={layer.href}
              src={layer.image}
              alt={layer.title}
              fill
              priority={i === 0}
              className={`object-cover transition-all duration-700 ease-out ${
                i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
              }`}
            />
          ))}
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {current.status}
            </span>
          </div>
          <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[20rem]">
          <div key={active} className="animate-[fadeIn_0.5s_ease-out]">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {current.eyebrow}
            </div>
            <h3 className="mt-4 text-[clamp(26px,2.8vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-paper">
              {current.title}
            </h3>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mist">
              {current.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={current.href}
                className="inline-flex items-center gap-2 bg-paper px-7 py-4 font-mono text-xs tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
              >
                EXPLORE {current.tab.toUpperCase()}
                <span aria-hidden="true">→</span>
              </Link>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Previous layer"
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-paper transition hover:border-accent hover:text-accent"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Next layer"
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-paper transition hover:border-accent hover:text-accent"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab strip — jump directly to any layer */}
      <div className="mt-12 grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((layer, i) => {
          const isActive = i === active;
          // Odd final tab spans both columns on two-column layouts so no empty cell shows.
          const spansRow = i === count - 1 && count % 2 === 1;
          return (
            <button
              key={layer.href}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${layer.tab}`}
              aria-current={isActive}
              className={`group relative overflow-hidden px-5 py-4 text-left transition-colors ${
                spansRow ? 'sm:col-span-2 lg:col-span-1' : ''
              } ${
                isActive
                  ? 'bg-white/[0.05] text-paper'
                  : 'bg-ink-deep text-faint hover:bg-white/[0.03] hover:text-paper'
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em]">
                {layer.eyebrow.split('·')[0].trim()}
              </div>
              <div className="mt-1 text-base font-medium">{layer.tab}</div>
              {isActive ? (
                <span
                  key={progressKey}
                  className={`absolute bottom-0 left-0 h-px bg-accent ${
                    paused ? '' : 'animate-[grow_7s_linear_forwards]'
                  }`}
                  style={paused ? { width: '100%' } : undefined}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
