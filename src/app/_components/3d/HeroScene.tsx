"use client";

import dynamic from 'next/dynamic';

const HeroTimelines = dynamic(() => import('./HeroTimelines'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-ink">
      <span className="animate-pulse font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        Initializing spatial field…
      </span>
    </div>
  ),
});

export default function HeroScene({
  className,
  speed,
  density,
  accent,
}: {
  className?: string;
  speed?: number;
  density?: number;
  accent?: string;
}) {
  return (
    <HeroTimelines
      className={className}
      speed={speed}
      density={density}
      accent={accent}
    />
  );
}
