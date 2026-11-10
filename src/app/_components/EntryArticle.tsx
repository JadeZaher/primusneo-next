import Link from 'next/link';
import { JsonLd } from '@/app/_components/JsonLd';
import { PieceClose, ProseBlockView } from '@/app/_components/Prose';
import type { EssaySource, ProseBlock } from '@/content/essays';
import { WritingNav } from './WritingNav';

type EntryLink = { label: string; href: string };

export function EntryArticle({
  sectionHref,
  sectionLabel,
  kicker,
  title,
  date,
  banner,
  paragraphs,
  blocks,
  sources,
  links = [],
  close,
  jsonLd,
}: {
  sectionHref: string;
  sectionLabel: string;
  kicker: string;
  title: string;
  date: string;
  banner?: string;
  paragraphs?: string[];
  blocks?: ProseBlock[];
  sources?: EssaySource[];
  links?: EntryLink[];
  close?: { layer: string; layerHref: string };
  jsonLd: Record<string, unknown>;
}) {
  return (
    <main className="bg-ink text-paper">
      <JsonLd data={jsonLd} />
      <article className="mx-auto max-w-[1600px] px-7 pt-32 pb-24">
        <Link
          href={sectionHref}
          className="text-faint hover:text-paper font-mono text-[11px] tracking-[0.18em] uppercase transition-colors"
        >
          ← {sectionLabel}
        </Link>
        <header className="mt-10 max-w-[18ch]">
          <div className="text-accent font-mono text-[11px] tracking-[0.22em] uppercase">
            {kicker}
          </div>
          <h1 className="mt-4 text-[clamp(40px,6vw,88px)] leading-[0.98] font-medium tracking-[-0.035em] text-balance">
            {title}
          </h1>
          <time
            dateTime={date}
            className="text-faint mt-8 block font-mono text-[11px] tracking-[0.18em] uppercase"
          >
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
        </header>
        {banner ? (
          <p className="text-accent mt-10 max-w-[62ch] border border-white/15 px-5 py-4 font-mono text-[12px] tracking-[0.14em] uppercase">
            {banner}
          </p>
        ) : null}
        <div className="text-mist mt-12 max-w-[68ch] text-[18px] leading-[1.65]">
          {blocks && blocks.length > 0
            ? blocks.map((block, index) => (
                <ProseBlockView key={index} block={block} />
              ))
            : paragraphs?.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
        </div>
        {sources && sources.length > 0 ? (
          <section className="mt-16 max-w-[68ch] border-t border-white/10 pt-8">
            <h2 className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
              Sources
            </h2>
            <ol className="mt-5 space-y-3">
              {sources.map((source) => (
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
        ) : null}
        {links.length > 0 ? (
          <ul className="mt-10 max-w-[68ch] space-y-3 border-t border-white/10 pt-8">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/') ? (
                  <Link
                    href={link.href}
                    className="text-paper hover:text-accent underline decoration-white/25 underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper hover:text-accent underline decoration-white/25 underline-offset-4"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : null}
        <WritingNav current={sectionHref} />
        {close ? (
          <PieceClose layer={close.layer} layerHref={close.layerHref} />
        ) : null}
      </article>
    </main>
  );
}
