import Link from 'next/link';
import { JsonLd } from '../_components/JsonLd';
import { SourceList } from '../_components/GuideArticle';
import { WritingNav } from '../_components/WritingNav';
import { GradientButton } from '../_components/marketing';
import { guides, type GuideSource } from '@/content/guides';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';

const description =
  'Ten technical field guides unpacking idempotent retries, local-first custody, open BIM/IFC handoffs, digital twins, SBOMs, and AI governance—with primary specifications linked.';

const shareImage = {
  url: '/images/ampheader.png',
  width: 1200,
  height: 630,
  alt: 'PrimusNeo — Federated Operational Infrastructure',
};

export const metadata = {
  title: 'Field Guides — Why Multi-Party Systems Break',
  description,
  authors: [{ name: 'Escherbridge' }],
  alternates: {
    canonical: '/guides',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    title: 'Field Guides — Why Multi-Party Systems Break | PrimusNeo',
    description,
    url: '/guides',
    type: 'website' as const,
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Field Guides — Why Multi-Party Systems Break | PrimusNeo',
    description,
    images: [shareImage.url],
  },
};

const layers = [
  { href: '/amp', label: 'AMP', note: 'Operational runtime and spatial OS.' },
  { href: '/governance-platform', label: 'NEOS', note: 'Agreements and permissions.' },
  { href: '/azoa', label: 'AZOA', note: 'Identity, consent, and settlement.' },
  { href: '/fractal-engine', label: 'Fractal Engine', note: 'Intelligence and organizational memory.' },
];

function indexSources(): GuideSource[] {
  const seen = new Set<string>();
  const sources: GuideSource[] = [];
  for (const guide of guides) {
    for (const source of guide.sources) {
      if (seen.has(source.href)) continue;
      seen.add(source.href);
      sources.push(source);
    }
  }
  return sources;
}

export default function GuidesPage() {
  const sources = indexSources();
  return (
    <main className="bg-ink text-paper">
      <JsonLd
        data={graph(
          collectionNode({
            name: 'Guides',
            description,
            path: '/guides',
            items: guides.map((guide) => ({ name: guide.title, path: `/guides/${guide.slug}` })),
          }),
          breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
          ]),
        )}
      />
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          <Link href="/" className="hover:text-paper">
            Home
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <span className="text-mist">Guides</span>
        </nav>
        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Field Guides · Systems &amp; Architecture
        </div>
        <h1 className="mt-5 max-w-[16ch] text-balance text-[clamp(48px,7vw,104px)] font-medium leading-[0.94] tracking-[-0.04em]">
          Why multi-party systems break between teams.
        </h1>
        <p className="mt-8 max-w-[62ch] text-[18px] leading-[1.65] text-mist">
          Most multi-party software fails in the boring gaps between teams: two services disagree on whether a payment
          settled, a building export drops half its attributes at handoff, or an AI tool makes a call nobody can trace
          back to a responsible owner. These ten field guides unpack the specifications and real failure modes behind
          PrimusNeo&rsquo;s architecture—from idempotent retries and local-first custody to verifiable state
          transitions—with primary sources linked directly on every guide.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Author: Escherbridge. Last reviewed: <time dateTime="2026-11-10">2026-11-10</time>, America/Denver.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GradientButton href="/demos/paid-twice">Run Paid-Twice simulator</GradientButton>
          <GradientButton href="/blog" variant="secondary">
            Read engineering blog
          </GradientButton>
        </div>
        <WritingNav current="/guides" />
      </header>

      <section id="guides" className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">All ten guides</div>
          <h2 className="max-w-[20ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em]">
            Primary specifications behind production failure modes.
          </h2>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-mist">
            Each guide starts with an operational break in the field, names the exact rule or open standard that binds
            state across handoffs, and walks through a concrete test case.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {guide.eyebrow}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    {guide.metric}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] text-paper group-hover:text-accent">
                  {guide.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-mist">{guide.cardDescription}</p>
                <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">The stack</div>
          <h2 className="max-w-[18ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em]">
            Four layers behind the architecture notes.
          </h2>
          <p className="mt-6 max-w-[68ch] text-[17px] leading-relaxed text-mist">
            These field guides document external standards and failure mechanics honestly—they are not certifications,
            compliance attestations, or customer deployment claims. Explore the PrimusNeo software layers below to see
            where each mechanism sits in production.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {layers.map((layer) => (
              <Link
                key={layer.href}
                href={layer.href}
                className="border border-white/10 px-6 py-6 transition hover:border-white/25 hover:bg-white/[0.03]"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{layer.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-mist">{layer.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[68ch]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">References</div>
          <h2 className="text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em]">
            Primary sources cited across the guides
          </h2>
          <SourceList sources={sources} />
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[68ch]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Interactive proof</div>
          <h2 className="text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-[-0.03em]">
            Step through a real retry failure in your browser.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mist">
            Try breaking our interactive Paid-Twice simulator on purpose: drop a reply mid-flight, compare naive
            retries against an idempotency ledger, or read{' '}
            <Link
              href="/papers/why-good-work-goes-unbuilt"
              className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent"
            >
              White Paper #1
            </Link>
            . Spot an error in a guide or want to trace a workflow on your own stack?{' '}
            <Link href="/contact" className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">
              Talk to engineering
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="/demos/paid-twice">Run Paid-Twice simulator</GradientButton>
            <GradientButton href="/papers/why-good-work-goes-unbuilt" variant="secondary">
              Read White Paper #1
            </GradientButton>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-faint">
            More from PrimusNeo:{' '}
            <Link href="/blog" className="text-mist underline decoration-white/20 underline-offset-4 hover:text-accent">
              Engineering blog
            </Link>{' '}
            ·{' '}
            <Link href="/newsroom" className="text-mist underline decoration-white/20 underline-offset-4 hover:text-accent">
              Newsroom
            </Link>{' '}
            ·{' '}
            <Link href="/industries" className="text-mist underline decoration-white/20 underline-offset-4 hover:text-accent">
              Industries
            </Link>{' '}
            ·{' '}
            <Link href="/feed.xml" className="text-mist underline decoration-white/20 underline-offset-4 hover:text-accent">
              RSS
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
