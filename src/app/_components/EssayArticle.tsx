import Link from 'next/link';
import Script from 'next/script';
import type { Essay, Inline } from '@/content/essays';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

function Inlines({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : part.href.startsWith('/') ? (
          <Link key={i} href={part.href} className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent hover:decoration-accent">
            {part.t}
          </Link>
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            {part.t}
          </a>
        ),
      )}
    </>
  );
}

export function EssayArticle({ essay }: { essay: Essay }) {
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
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-primus-neo.png` },
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
      <article className="mx-auto max-w-[1600px] px-7 pb-24 pt-32">
        <Link
          href="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint transition-colors hover:text-paper"
        >
          ← All notes
        </Link>
        <header className="mt-10 max-w-[18ch]">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{essay.kicker}</div>
          <h1 className="mt-4 text-balance text-[clamp(40px,6vw,92px)] font-medium leading-[0.98] tracking-[-0.035em]">
            {essay.title}
          </h1>
          <time dateTime={essay.publishedAt} className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            {new Date(essay.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
        </header>

        <div className="mt-16 max-w-[68ch] text-[18px] leading-[1.65] text-mist">
          {essay.blocks.map((block, i) => {
            if (block.kind === 'h2') {
              return (
                <h2 key={i} className="mb-4 mt-14 text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em] text-paper">
                  {block.text}
                </h2>
              );
            }
            if (block.kind === 'ul') {
              return (
                <ul key={i} className="mb-8 space-y-3 border-l border-white/15 pl-5 text-paper">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.kind === 'cta') {
              return (
                <aside key={i} className="mt-16 border border-white/15 bg-ink-deep px-7 py-8 text-paper">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Where the stack fits</div>
                  <h2 className="mt-3 text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-[-0.03em]">
                    <Link href={block.layerHref} className="hover:text-accent">
                      {block.layer}
                    </Link>
                  </h2>
                  <p className="mt-5 text-[17px] leading-relaxed text-mist">
                    <Inlines parts={block.inlines} />
                  </p>
                </aside>
              );
            }
            return (
              <p key={i} className="mb-6">
                <Inlines parts={block.inlines} />
              </p>
            );
          })}
        </div>

        <section className="mt-16 max-w-[68ch] border-t border-white/10 pt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Sources</h2>
          <ol className="mt-5 space-y-3">
            {essay.sources.map((source) => (
              <li key={source.href} className="text-sm leading-relaxed">
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-paper underline decoration-white/20 underline-offset-4 hover:text-accent">
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
