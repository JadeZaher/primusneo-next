import Link from 'next/link';
import { JsonLd } from '../_components/JsonLd';
import { SourceList } from '../_components/GuideArticle';
import { WritingNav } from '../_components/WritingNav';
import { GradientButton } from '../_components/marketing';
import { guides, type GuideSource } from '@/content/guides';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';

const description =
  'Ten field guides. Decisions, inventories, secure development, recommendations, and process twins, with the links left on. Not a certification or a deployment.';

const shareImage = {
  url: '/images/ampheader.png',
  width: 1200,
  height: 630,
  alt: 'PrimusNeo — Federated Operational Infrastructure',
};

export const metadata = {
  title: 'Guides — the source already wrote it',
  description,
  authors: [{ name: 'Escherbridge' }],
  alternates: {
    canonical: '/guides',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    title: 'Guides — the source already wrote it | PrimusNeo',
    description,
    url: '/guides',
    type: 'website' as const,
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Guides — the source already wrote it | PrimusNeo',
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
        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          Ten guides · the links stay on
        </div>
        <h1 className="mt-5 max-w-[14ch] text-balance text-[clamp(48px,7vw,104px)] font-medium leading-[0.94] tracking-[-0.04em]">
          The source already wrote the definition.
        </h1>
        <p className="mt-8 max-w-[62ch] text-[18px] leading-[1.65] text-mist">
          Ten field guides. Each one stays inside a public document, and each figure on the cards is cited on the
          child. This is not a survey, a certification, or a deployment.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Author: Escherbridge. Last reviewed: <time dateTime="2026-11-10">2026-11-10</time>, America/Denver.
        </p>
        <WritingNav current="/guides" />
      </header>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">The pattern</div>
          <h2 className="max-w-[18ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em]">
            Ten documents. The sentence is on the child.
          </h2>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-mist">
            The short label is on the card. The sentence and the link are on the child page.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <div key={guide.slug} className="flex h-full flex-col border border-white/10 bg-ink-deep px-6 py-7">
                <h3 className="mb-3 text-xl font-medium tracking-[-0.02em]">{guide.patternTitle}</h3>
                <p className="mb-8 text-sm leading-relaxed text-mist">{guide.patternDescription}</p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="text-glow text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em]">
                    {guide.metric}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    {guide.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">The guides</div>
          <h2 className="max-w-[16ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em]">
            Read the page that names the document.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                <div className="text-glow text-4xl font-medium tracking-[-0.03em] md:text-5xl">{guide.metric}</div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {guide.metricLabel}
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.02em] group-hover:text-accent">{guide.eyebrow}</h3>
                <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-mist">{guide.cardDescription}</p>
                <span className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">View the guide</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[68ch]">
          <h2 className="text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-[-0.03em]">
            A situation like this
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mist">
            Each guide includes one. It is not a customer, a charge, or a deployment.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[68ch]">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Sources</h2>
          <SourceList sources={sources} />
        </div>
      </section>

      <section className="border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">The stack</div>
          <h2 className="max-w-[16ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em]">
            The four layers, on their own pages.
          </h2>
          <p className="mt-6 max-w-[68ch] text-[17px] leading-relaxed text-mist">
            These guides do not say that a layer is a live twin, a model repository, a payment rail, a local-first
            product, or an implementation of the AI RMF or the GAO framework. The layer pages describe the software.
            The guides describe the field.
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
          <h2 className="text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-[-0.03em]">
            If a figure is wrong, write to us.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mist">
            Other writing on this site is the <Link href="/blog" className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">blog</Link>, the{' '}
            <Link href="/newsroom" className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">newsroom</Link>, and the{' '}
            <Link href="/papers" className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">papers</Link>. Sector pages are on the{' '}
            <Link href="/industries" className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">industries index</Link>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GradientButton href="/contact">Contact</GradientButton>
            <GradientButton href="/feed.xml" variant="secondary">
              RSS
            </GradientButton>
          </div>
        </div>
      </section>
    </main>
  );
}
