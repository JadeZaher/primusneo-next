"use client";

import { useState } from 'react';

export default function Ticker({ items }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex items-stretch border-y border-white/[0.08] bg-ink">
      <div className="min-w-0 flex-1 overflow-hidden py-3.5">
        <div
          className="flex w-max animate-marquee whitespace-nowrap font-mono text-[11px] tracking-[0.22em] text-faint"
          data-paused={paused ? 'true' : undefined}
        >
          <span className="pr-12">{items}</span>
          <span className="pr-12" aria-hidden="true">
            {items}
          </span>
        </div>
      </div>
      <button
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
        className="shrink-0 border-l border-white/[0.08] px-4 font-mono text-[11px] tracking-[0.16em] text-paper transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
      >
        {paused ? 'Play ticker' : 'Pause ticker'}
      </button>
    </div>
  );
}
