import Link from 'next/link';
import Script from 'next/script';
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
  links = [],
  jsonLd,
}: {
  sectionHref: string;
  sectionLabel: string;
  kicker: string;
  title: string;
  date: string;
  banner?: string;
  paragraphs: string[];
  links?: EntryLink[];
  jsonLd: Record<string, unknown>;
}) {
  return (
    <main className="bg-ink text-paper">
      <Script
        id={`ld-${sectionHref}-${date}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-[1600px] px-7 pb-24 pt-32">
        <Link
          href={sectionHref}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint transition-colors hover:text-paper"
        >
          ← {sectionLabel}
        </Link>
        <header className="mt-10 max-w-[18ch]">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{kicker}</div>
          <h1 className="mt-4 text-balance text-[clamp(40px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.035em]">
            {title}
          </h1>
          <time dateTime={date} className="mt-8 block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
        </header>
        {banner ? (
          <p className="mt-10 max-w-[62ch] border border-white/15 px-5 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
            {banner}
          </p>
        ) : null}
        <div className="mt-12 max-w-[68ch] text-[18px] leading-[1.65] text-mist">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        {links.length > 0 ? (
          <ul className="mt-10 max-w-[68ch] space-y-3 border-t border-white/10 pt-8">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/') ? (
                  <Link href={link.href} className="text-paper underline decoration-white/25 underline-offset-4 hover:text-accent">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper underline decoration-white/25 underline-offset-4 hover:text-accent"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : null}
        <WritingNav current={sectionHref} />
      </article>
    </main>
  );
}
