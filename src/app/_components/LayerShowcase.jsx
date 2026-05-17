"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Static Tailwind class strings per accent (Tailwind can't see dynamic names).
const ACCENTS = {
  emerald: {
    eyebrow: 'text-emerald-300',
    dot: 'bg-emerald-400',
    glow: 'from-emerald-500/25',
    progress: 'bg-emerald-300',
    tabActive: 'border-emerald-300/60 bg-emerald-300/10 text-emerald-100',
    cta: 'from-emerald-300 via-lime-300 to-cyan-300 shadow-[0_0_32px_rgba(74,222,128,0.22)]',
  },
  cyan: {
    eyebrow: 'text-cyan-300',
    dot: 'bg-cyan-400',
    glow: 'from-cyan-500/25',
    progress: 'bg-cyan-300',
    tabActive: 'border-cyan-300/60 bg-cyan-300/10 text-cyan-100',
    cta: 'from-cyan-300 via-sky-300 to-emerald-300 shadow-[0_0_32px_rgba(34,211,238,0.22)]',
  },
  violet: {
    eyebrow: 'text-violet-300',
    dot: 'bg-violet-400',
    glow: 'from-violet-500/25',
    progress: 'bg-violet-300',
    tabActive: 'border-violet-300/60 bg-violet-300/10 text-violet-100',
    cta: 'from-violet-300 via-fuchsia-300 to-cyan-300 shadow-[0_0_32px_rgba(167,139,250,0.22)]',
  },
  amber: {
    eyebrow: 'text-amber-300',
    dot: 'bg-amber-400',
    glow: 'from-amber-500/25',
    progress: 'bg-amber-300',
    tabActive: 'border-amber-300/60 bg-amber-300/10 text-amber-100',
    cta: 'from-amber-300 via-lime-300 to-emerald-300 shadow-[0_0_32px_rgba(252,211,77,0.22)]',
  },
};

const AUTOPLAY_MS = 7000;

export default function LayerShowcase({ layers = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = layers.length;

  const go = useCallback(
    (next) => setActive((prev) => (next + count) % count),
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
  const accent = ACCENTS[current.accent] ?? ACCENTS.emerald;

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
        <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          {layers.map((layer, i) => (
            <Image
              key={layer.href}
              src={layer.image}
              alt={layer.title}
              fill
              priority={i === 0}
              className={`object-cover transition-all duration-700 ease-out ${
                i === active
                  ? 'scale-100 opacity-80'
                  : 'scale-105 opacity-0'
              }`}
            />
          ))}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${accent.glow} via-transparent to-transparent transition-colors duration-700`}
          />
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot} animate-pulse`} />
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
            <div className={`text-sm font-semibold uppercase tracking-[0.35em] ${accent.eyebrow}`}>
              {current.eyebrow}
            </div>
            <h3 className="mt-4 text-3xl font-bold text-white text-glow md:text-4xl lg:text-5xl">
              {current.title}
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {current.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={current.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${accent.cta} px-6 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:opacity-95`}
              >
                Explore {current.tab}
                <span aria-hidden="true">→</span>
              </Link>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Previous layer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Next layer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab strip — jump directly to any layer */}
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, i) => {
          const tabAccent = ACCENTS[layer.accent] ?? ACCENTS.emerald;
          const isActive = i === active;
          return (
            <button
              key={layer.href}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${layer.tab}`}
              aria-current={isActive}
              className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition ${
                isActive
                  ? tabAccent.tabActive
                  : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/25 hover:text-white'
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em]">
                {layer.eyebrow.split('·')[0].trim()}
              </div>
              <div className="mt-1 text-base font-bold">{layer.tab}</div>
              {isActive ? (
                <span
                  key={progressKey}
                  className={`absolute bottom-0 left-0 h-0.5 ${tabAccent.progress} ${
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
