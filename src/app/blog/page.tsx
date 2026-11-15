import Link from 'next/link';
import { Crumbs } from '../_components/Crumbs';
import { JsonLd } from '../_components/JsonLd';
import { WritingNav } from '../_components/WritingNav';
import { loadWritingIndex } from '@/lib/writing';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';

export const metadata = {
  title: 'Blog',
  description:
    'Builder notes and op-eds. The long ones cite public sources and name the layer that applies. Sanity posts sit in the same list when the studio has them.',
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    title: 'Blog | PrimusNeo',
    description: 'Builder notes and op-eds, with the footnotes attached.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | PrimusNeo',
    description: 'Builder notes and op-eds, with the footnotes attached.',
  },
};

const kindLabel = {
  essay: 'Note',
  post: 'Post',
  news: 'News',
} as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const items = await loadWritingIndex();
  const topics = [...new Set(items.flatMap((item) => (item.topic ? [item.topic] : [])))].sort((a, b) =>
    a.localeCompare(b),
  );
  const active = topic && topics.includes(topic) ? topic : undefined;
  const shown = active ? items.filter((item) => item.topic === active) : items;

  return (
    <main className="bg-ink text-paper">
      <JsonLd
        data={graph(
          collectionNode({
            name: 'Blog',
            description: 'Builder notes and op-eds, with the footnotes attached.',
            path: '/blog',
            items: shown.map((item) => ({ name: item.title, path: item.href })),
          }),
          breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        )}
      />
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <Crumbs items={[{ href: '/', label: 'Home' }, { label: 'Blog' }]} />
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Engineering Blog</div>
        <h1 className="mt-5 max-w-[14ch] text-balance text-[clamp(48px,7vw,104px)] font-medium leading-[0.94] tracking-[-0.04em]">
          How systems break—and what holds state.
        </h1>
        <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-mist">
          Candid engineering notes on retry bugs, local-first custody, county GIS handoffs, and software accountability
          across organizations. Each post traces an operational failure to primary sources and names the architectural
          boundary responsible.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/demos/paid-twice"
            className="inline-flex items-center justify-center bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Run Paid-Twice simulator
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center justify-center border border-white/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Explore field guides
          </Link>
        </div>
        <WritingNav current="/blog" />
        <nav aria-label="Topics" className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/blog"
            aria-current={active ? undefined : 'page'}
            className={`font-mono text-[11px] uppercase tracking-[0.16em] ${active ? 'text-faint hover:text-paper' : 'text-accent'}`}
          >
            All
          </Link>
          {topics.map((label) => (
            <Link
              key={label}
              href={`/blog?topic=${encodeURIComponent(label)}`}
              aria-current={active === label ? 'page' : undefined}
              className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                active === label ? 'text-accent' : 'text-faint hover:text-paper'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {shown.length > 0 ? (
          shown.map((item, index) => (
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
                  {item.topic ?? kindLabel[item.kind]}
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
          <p className="py-20 text-mist">{active ? 'Nothing filed under that label.' : 'Nothing on the desk yet.'}</p>
        )}
      </section>
    </main>
  );
}
