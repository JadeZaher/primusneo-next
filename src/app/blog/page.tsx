import Link from 'next/link';
import { loadWritingIndex } from '@/lib/writing';

export const metadata = {
  title: 'Notes',
  description:
    'Op-eds on digital-twin lock-in, grid queues, cooperative records, treasuries, agent consent, and plugin supply chains. Sources linked. No unnamed statistics.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Notes | PrimusNeo',
    description: 'Researched notes on the coordination problems the stack is for, with the citations attached.',
    url: '/blog',
    type: 'website',
  },
};

const kindLabel = {
  essay: 'Note',
  post: 'Post',
  news: 'News',
} as const;

export default async function BlogPage() {
  const items = await loadWritingIndex();

  return (
    <main className="bg-ink text-paper">
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Notes</div>
        <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(48px,7vw,112px)] font-medium leading-[0.94] tracking-[-0.04em]">
          Proof, with the footnotes attached.
        </h1>
        <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-mist">
          Arguments about problems that already have public sources. Each one ends by naming the layer that
          applies, and the layer that does not get to take credit.
        </p>
      </header>

      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {items.length > 0 ? (
          items.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="group grid gap-4 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.02] md:grid-cols-[120px_minmax(0,1.4fr)_minmax(0,1fr)] md:items-baseline md:gap-8 md:px-2"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-2 block">
                  {new Date(item.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </span>
              </div>
              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {kindLabel[item.kind]}
                  {item.isAiGenerated ? ' · AI curated' : ''}
                  {item.sourceName ? ` · ${item.sourceName}` : ''}
                </div>
                <h2 className="text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em] group-hover:text-accent">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-mist">{item.excerpt}</p>
            </Link>
          ))
        ) : (
          <p className="py-20 text-mist">Nothing on the desk yet.</p>
        )}
      </section>
    </main>
  );
}
