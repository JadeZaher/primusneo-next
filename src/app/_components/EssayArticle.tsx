import Link from 'next/link';
import Script from 'next/script';
import { Inlines, PieceClose, ProseBlockView } from '@/app/_components/Prose';
import type { Essay } from '@/content/essays';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com'
).replace(/\/$/, '');

function stackLayer(essay: Essay): { layer: string; href: string } | undefined {
  if (essay.layer && essay.layerHref)
    return { layer: essay.layer, href: essay.layerHref };
  for (const block of essay.blocks) {
    if (block.kind === 'cta')
      return { layer: block.layer, href: block.layerHref };
  }
  return undefined;
}

export function EssayArticle({ essay }: { essay: Essay }) {
  const layer = stackLayer(essay);
  const url = `${SITE_URL}/blog/${essay.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay.title,
    description: essay.description,
    datePublished: essay.publishedAt,
    dateModified: essay.publishedAt,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'PrimusNeo', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'PrimusNeo',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-primus-neo.png`,
      },
    },
    citation: essay.sources.map((source) => source.href),
  };

  return (
    <main className="bg-ink text-paper">
      <Script
        id={`ld-essay-${essay.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-[1600px] px-7 pt-32 pb-24">
        <Link
          href="/blog"
          className="text-faint hover:text-paper font-mono text-[11px] tracking-[0.18em] uppercase transition-colors"
        >
          ← All notes
        </Link>
        <header className="mt-10 max-w-[18ch]">
          <div className="text-accent font-mono text-[11px] tracking-[0.22em] uppercase">
            {essay.kicker}
          </div>
          <h1 className="mt-4 text-[clamp(40px,6vw,92px)] leading-[0.98] font-medium tracking-[-0.035em] text-balance">
            {essay.title}
          </h1>
          <time
            dateTime={essay.publishedAt}
            className="text-faint mt-8 block font-mono text-[11px] tracking-[0.18em] uppercase"
          >
            {new Date(essay.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
        </header>

        <div className="text-mist mt-16 max-w-[68ch] text-[18px] leading-[1.65]">
          {essay.blocks.map((block, i) => {
            if (block.kind === 'cta') {
              return (
                <aside
                  key={i}
                  className="bg-ink-deep text-paper mt-16 border border-white/15 px-7 py-8"
                >
                  <div className="text-accent font-mono text-[11px] tracking-[0.22em] uppercase">
                    Where the stack fits
                  </div>
                  <h2 className="mt-3 text-[clamp(28px,3vw,44px)] leading-tight font-medium tracking-[-0.03em]">
                    <Link href={block.layerHref} className="hover:text-accent">
                      {block.layer}
                    </Link>
                  </h2>
                  <p className="text-mist mt-5 text-[17px] leading-relaxed">
                    <Inlines parts={block.inlines} />
                  </p>
                </aside>
              );
            }
            return <ProseBlockView key={i} block={block} />;
          })}
        </div>

        <section className="mt-16 max-w-[68ch] border-t border-white/10 pt-8">
          <h2 className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
            Sources
          </h2>
          <ol className="mt-5 space-y-3">
            {essay.sources.map((source) => (
              <li key={source.href} className="text-sm leading-relaxed">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-accent underline decoration-white/20 underline-offset-4"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
        <PieceClose layer={layer?.layer} layerHref={layer?.href} />
      </article>
    </main>
  );
}
