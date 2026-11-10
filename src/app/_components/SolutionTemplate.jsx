import React from 'react';
import Link from 'next/link';
import { JsonLd } from './JsonLd';
import { GradientButton, InsightCard, NumberedCard, SectionHeader, ChallengeCard, MetricCard, RelatedWriting } from './marketing';
import { articleNode, breadcrumbList, citationWorks, graph } from '@/lib/jsonld';
import { siblingIndustries } from '@/content/industries';

export const SolutionTemplate = ({
  eyebrow,
  title,
  description,
  stats = [],
  challenges = [],
  features = [],
  layers = [],
  useCase,
  children,
  ctaTitle = 'If the record and the room disagree, start there.',
  ctaDesc = 'Tell us the environment. We will say which layer applies, and which one does not.',
  primaryCtaText = 'Talk to us',
  primaryCtaHref = '/contact',
  relatedEssay,
  path,
  sources = [],
}) => {
  const industryPage = typeof path === 'string' && path.startsWith('/industries/');
  const siblings = industryPage ? siblingIndustries(path) : [];
  const schema = path
    ? graph(
        articleNode({
          headline: title,
          description,
          path,
          datePublished: '2026-11-10',
          citations: citationWorks(sources),
        }),
        breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
          { name: eyebrow, path },
        ]),
      )
    : null;

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-accent selection:text-white">
      {schema ? <JsonLd data={schema} /> : null}
      <section className="px-7 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto grid max-w-[1600px] items-end gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div>
            {industryPage ? (
              <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                <Link href="/" className="hover:text-paper">Home</Link>
                <span className="px-2" aria-hidden="true">/</span>
                <Link href="/industries" className="hover:text-paper">Industries</Link>
                <span className="px-2" aria-hidden="true">/</span>
                <span className="text-mist">{eyebrow}</span>
              </nav>
            ) : null}
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">{eyebrow}</div>
            <h1 className="max-w-[16ch] text-balance text-[clamp(40px,5.6vw,88px)] font-medium leading-[0.98] tracking-[-0.035em]">
              {title}
            </h1>
            <p className="mt-8 max-w-[54ch] text-[18px] leading-relaxed text-mist">{description}</p>
            {industryPage ? (
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Escherbridge · Last reviewed <time dateTime="2026-11-10">10 November 2026</time>
              </p>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-3">
              <GradientButton href={primaryCtaHref}>{primaryCtaText}</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">
                The stack
              </GradientButton>
            </div>
          </div>

          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 border border-white/10 bg-ink-deep p-8">
              {stats.map((stat, idx) => (
                <MetricCard key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          )}
        </div>
      </section>

      {challenges.length > 0 && (
        <section className="border-t border-white/[0.06] bg-ink-deep px-7 py-24">
          <div className="mx-auto max-w-[1600px]">
            <SectionHeader eyebrow="01 — Friction" title="The bill for a split system.">
              The figures below are other people’s, with the citations kept on the page. The shape is the part we work on.
            </SectionHeader>
            <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, idx) => (
                <ChallengeCard key={idx} {...challenge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="bg-ink px-7 py-24">
          <div className="mx-auto max-w-[1600px]">
            <SectionHeader eyebrow="02 — What changes" title="A shared record, applied here." />
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {features.map((feature, idx) => (
                <InsightCard key={idx} title={feature.title} eyebrow={feature.eyebrow}>
                  {feature.description}
                </InsightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {layers.length > 0 && (
        <section className="border-t border-white/[0.06] bg-ink px-7 py-24">
          <div className="mx-auto max-w-[1600px]">
            <SectionHeader eyebrow="03 — Layers" title="Which part of the stack does the work." />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer, idx) => (
                <NumberedCard key={idx} number={`0${idx + 1}`} title={layer.title}>
                  {layer.description}
                </NumberedCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      {useCase && (
        <section className="border-t border-white/10 bg-ink-deep px-7 py-24">
          <div className="mx-auto grid max-w-[1600px] items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">On the ground</div>
              {industryPage ? (
                <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-mist">
                  Illustrative. A worked example, not a completed engagement and not a customer.
                </p>
              ) : null}
              <h2 className="mt-4 max-w-[16ch] text-[clamp(32px,4vw,60px)] font-medium leading-[1.05] tracking-[-0.03em]">
                {useCase.title}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-mist">{useCase.description}</p>
            </div>
            <div className="border border-white/10 px-7 py-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">What it produces</h3>
              <ul className="mt-6 space-y-4">
                {useCase.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex gap-4 text-[17px] leading-snug text-paper">
                    <span className="font-mono text-accent">→</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {relatedEssay ? <RelatedWriting href={relatedEssay.href} title={relatedEssay.title} /> : null}

      {siblings.length > 0 ? (
        <section className="border-t border-white/10 bg-ink px-7 py-16">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Also in this section</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {siblings.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={`/industries/${sibling.slug}`}
                    className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent"
                  >
                    {sibling.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/industries" className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-faint hover:text-paper">
              All industries
            </Link>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/[0.06] bg-ink px-7 py-32 text-center">
        <h2 className="mx-auto max-w-[18ch] text-balance text-[clamp(36px,5vw,80px)] font-medium leading-none tracking-[-0.035em]">
          {ctaTitle}
        </h2>
        <p className="mx-auto mt-8 max-w-[46ch] text-[17px] leading-relaxed text-mist">{ctaDesc}</p>
        <div className="mt-12 flex justify-center">
          <GradientButton href={primaryCtaHref}>{primaryCtaText}</GradientButton>
        </div>
        <div className="mt-6">
          <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint hover:text-paper">
            Or read the notes →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionTemplate;
