import Link from 'next/link';
import { JsonLd } from '@/app/_components/JsonLd';
import { Inlines, PieceClose, ProseBlockView } from '@/app/_components/Prose';
import type { Guide, GuideSource } from '@/content/guides';
import { articleNode, breadcrumbList, citationWorks, graph } from '@/lib/jsonld';

function guideCitations(sources: GuideSource[]) {
  return sources.flatMap((source) => {
    const primary = citationWorks([source]);
    const extras = [
      ...(source.doi
        ? citationWorks([
            {
              href: source.doi,
              title: source.title ? `${source.title} (DOI)` : `${source.label} (DOI)`,
              org: source.org,
              year: source.year,
            },
          ])
        : []),
      ...(source.more ?? []).flatMap((item) =>
        citationWorks([
          {
            href: item.href,
            title: item.label,
            org: source.org,
            year: source.year,
          },
        ]),
      ),
    ];
    return [...primary, ...extras];
  });
}

export function SourceList({ sources }: { sources: GuideSource[] }) {
  return (
    <ol className="mt-5 space-y-4">
      {sources.map((source) => (
        <li key={source.href} className="text-sm leading-relaxed">
          <span className="text-paper">{source.label}</span>{' '}
          <a
            href={source.href}
            className="text-paper underline decoration-white/20 underline-offset-4 hover:text-accent"
          >
            {source.href}
          </a>
          {source.more?.map((item) => (
            <span key={item.href}>
              {' '}
              · {item.label}:{' '}
              <a
                href={item.href}
                className="text-paper underline decoration-white/20 underline-offset-4 hover:text-accent"
              >
                {item.href}
              </a>
            </span>
          ))}
          {source.doi ? (
            <>
              {' '}
              · DOI:{' '}
              <a
                href={source.doi}
                className="text-paper underline decoration-white/20 underline-offset-4 hover:text-accent"
              >
                {source.doi}
              </a>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function GuideArticle({ guide }: { guide: Guide }) {
  const path = `/guides/${guide.slug}`;
  const standfirst = guide.lead[0];
  const preamble = guide.lead.slice(1);
  const jsonLd = graph(
    articleNode({
      headline: guide.title,
      description: guide.description,
      path,
      datePublished: guide.publishedAt,
      dateModified: guide.lastReviewed,
      citations: guideCitations(guide.sources),
    }),
    breadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Guides', path: '/guides' },
      { name: guide.crumb, path },
    ]),
  );

  return (
    <main className="bg-ink text-paper">
      <JsonLd data={jsonLd} />
      <article className="mx-auto max-w-[1600px] px-7 pt-32 pb-24">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          <Link href="/" className="hover:text-paper">
            Home
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <Link href="/guides" className="hover:text-paper">
            Guides
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <span className="text-mist">{guide.crumb}</span>
        </nav>
        <Link
          href="/guides"
          className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-faint transition-colors hover:text-paper"
        >
          ← All guides
        </Link>
        <header className="mt-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{guide.eyebrow}</div>
          <h1 className="mt-4 max-w-[22ch] text-balance text-[clamp(40px,5vw,76px)] leading-[0.98] font-medium tracking-[-0.035em]">
            {guide.title}
          </h1>
          {standfirst?.kind === 'p' ? (
            <p className="mt-8 max-w-[68ch] text-[18px] leading-[1.65] text-mist">
              <Inlines parts={standfirst.inlines} />
            </p>
          ) : null}
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Author: Escherbridge. Published{' '}
            <time dateTime={guide.publishedAt}>{guide.publishedAt}</time>. Last reviewed:{' '}
            <time dateTime={guide.lastReviewed}>{guide.lastReviewed}</time>, America/Denver.
          </p>
        </header>

        <div className="mt-16 max-w-[68ch] text-[18px] leading-[1.65] text-mist">
          {preamble.map((block, index) => (
            <ProseBlockView key={index} block={block} />
          ))}

          {guide.figures.map((figure) => (
            <p key={figure.lead} className="mb-6">
              {figure.lead} {figure.text}
            </p>
          ))}

          {guide.sections.map((block, index) => (
            <ProseBlockView key={index} block={block} />
          ))}

          <section className="mt-14">
            <h2 className="mb-4 text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em] text-paper">
              A situation like this
            </h2>
            <p className="mb-6">{guide.scenario}</p>
          </section>
        </div>

        <section className="mt-16 max-w-[68ch] border-t border-white/10 pt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Sources</h2>
          <SourceList sources={guide.sources} />
          {guide.sourceNote ? <p className="mt-5 text-sm leading-relaxed text-mist">{guide.sourceNote}</p> : null}
        </section>

        <section className="mt-16 max-w-[68ch] border-t border-white/10 pt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Also in this section</h2>
          <ul className="mt-5 border-t border-white/10">
            {guide.siblings.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <Link href={item.href} className="group block py-5 transition-colors hover:bg-white/[0.02]">
                  <span className="block text-[18px] font-medium leading-snug tracking-[-0.02em] group-hover:text-accent">
                    {item.label}
                  </span>
                  {item.note ? <span className="mt-1 block text-sm leading-relaxed text-mist">{item.note}</span> : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 max-w-[68ch] text-[18px] leading-[1.65] text-mist">
          {guide.closing.map((block, index) => (
            <ProseBlockView key={index} block={block} />
          ))}
        </div>
        <PieceClose />
      </article>
    </main>
  );
}
