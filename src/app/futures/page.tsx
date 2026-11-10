import Link from 'next/link';
import { WritingNav } from '../_components/WritingNav';
import { futures } from '@/content/futures';

export const metadata = {
  title: 'Futures',
  description:
    'Speculative notes on coordination, local-first software, twins, and agents. Labeled as speculation. Tied to a layer. Not a forecast.',
  alternates: {
    canonical: '/futures',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    title: 'Futures | PrimusNeo',
    description: 'Five to twenty years, written as a direction, not a delivery date.',
    url: '/futures',
    type: 'website',
  },
};

export default function FuturesPage() {
  return (
    <main className="bg-ink text-paper">
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Futures</div>
        <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(48px,7vw,112px)] font-medium leading-[0.94] tracking-[-0.04em]">
          Speculation, labeled as such.
        </h1>
        <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-mist">
          Directions for five to twenty years. Each piece says what is already true, then what is only a wish with a layer attached. None of them is a milestone.
        </p>
        <WritingNav current="/futures" />
      </header>
      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {futures.map((piece, index) => (
          <Link
            key={piece.slug}
            href={`/futures/${piece.slug}`}
            className="group grid gap-4 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.02] md:grid-cols-[120px_minmax(0,1.4fr)_minmax(0,1fr)] md:items-baseline md:gap-8 md:px-2"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
              <span className="mt-2 block">{piece.horizon}</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Speculation · {piece.layer}</div>
              <h2 className="text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em] group-hover:text-accent">
                {piece.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-mist">{piece.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
