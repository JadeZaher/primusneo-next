import Link from 'next/link';
import { WritingNav } from '../_components/WritingNav';
import { roadmapLayers, type RoadmapStatus } from '@/content/roadmap';

export const metadata = {
  title: 'Roadmap',
  description:
    'Honest status for AMP, NEOS, AZOA, Fractal Engine, Elevate Impact, OVERSEASGENAI, and OPQPWR. Now, next, and later. No dates.',
  alternates: { canonical: '/roadmap' },
  openGraph: {
    title: 'Roadmap | PrimusNeo',
    description: 'Shipped, in alpha, building, or exploring. If it is not in a public repo or on the site, it is not a milestone.',
    url: '/roadmap',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roadmap | PrimusNeo',
    description: 'Shipped, in alpha, building, or exploring. If it is not in a public repo or on the site, it is not a milestone.',
  },
};

const statusLabel: Record<RoadmapStatus, string> = {
  shipped: 'Shipped',
  'in alpha': 'In alpha',
  building: 'Building',
  exploring: 'Exploring',
};

export default function RoadmapPage() {
  return (
    <main className="bg-ink text-paper">
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Roadmap</div>
        <h1 className="mt-5 max-w-[14ch] text-balance text-[clamp(48px,7vw,112px)] font-medium leading-[0.94] tracking-[-0.04em]">
          Now, next, later. No calendar.
        </h1>
        <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-mist">
          Statuses are shipped, in alpha, building, or exploring. A sentence lands here only if the site or a public repository already says it. Uncertain work is marked exploring.
        </p>
        <WritingNav current="/roadmap" />
      </header>

      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {roadmapLayers.map((layer) => (
          <article key={layer.slug} className="border-b border-white/10 py-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {statusLabel[layer.status]}
                </div>
                <h2 className="mt-2 text-[clamp(28px,3vw,44px)] font-medium tracking-[-0.03em]">
                  <Link href={`/roadmap/${layer.slug}`} className="hover:text-accent">
                    {layer.name}
                  </Link>
                </h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">{layer.role}</p>
              </div>
              <Link href={layer.href} className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist hover:text-paper">
                {layer.href.startsWith('/') ? 'Product page →' : 'Partner site →'}
              </Link>
            </div>
            <p className="mt-6 max-w-[62ch] text-mist">{layer.summary}</p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {(
                [
                  ['Now', layer.now],
                  ['Next', layer.next],
                  ['Later', layer.later],
                ] as const
              ).map(([label, items]) => (
                <div key={label}>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
