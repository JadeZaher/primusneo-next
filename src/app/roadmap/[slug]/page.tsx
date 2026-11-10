import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WritingNav } from '@/app/_components/WritingNav';
import { getRoadmapLayer, roadmapLayers, type RoadmapStatus } from '@/content/roadmap';

const statusLabel: Record<RoadmapStatus, string> = {
  shipped: 'Shipped',
  'in alpha': 'In alpha',
  building: 'Building',
  exploring: 'Exploring',
};

export function generateStaticParams() {
  return roadmapLayers.map((layer) => ({ slug: layer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const layer = getRoadmapLayer(slug);
  if (!layer) return { title: 'Not found', robots: { index: false, follow: false } };
  const description = `${layer.name}: ${statusLabel[layer.status]}. ${layer.summary}`;
  return {
    title: `${layer.name} roadmap`,
    description,
    alternates: { canonical: `/roadmap/${slug}` },
    openGraph: {
      title: `${layer.name} roadmap | PrimusNeo`,
      description,
      url: `/roadmap/${slug}`,
      type: 'article',
    },
  };
}

export default async function RoadmapLayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const layer = getRoadmapLayer(slug);
  if (!layer) notFound();

  const columns = [
    ['Now', layer.now],
    ['Next', layer.next],
    ['Later', layer.later],
  ] as const;

  return (
    <main className="bg-ink text-paper">
      <article className="mx-auto max-w-[1600px] px-7 pb-24 pt-32">
        <Link
          href="/roadmap"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint hover:text-paper"
        >
          ← Roadmap
        </Link>
        <header className="mt-10 max-w-[16ch]">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {statusLabel[layer.status]} · {layer.role}
          </div>
          <h1 className="mt-4 text-balance text-[clamp(40px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.035em]">
            {layer.name}
          </h1>
        </header>
        <p className="mt-8 max-w-[62ch] text-[18px] leading-relaxed text-mist">{layer.summary}</p>
        <div className="mt-8 flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.14em]">
          <Link href={layer.href} className="text-paper hover:text-accent">
            {layer.href.startsWith('/') ? 'Product page' : 'Partner site'}
          </Link>
          {layer.repo ? (
            <a href={layer.repo} className="text-mist hover:text-paper" target="_blank" rel="noopener noreferrer">
              Public repo
            </a>
          ) : null}
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {columns.map(([label, items]) => (
            <section key={label}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{label}</h2>
              <ul className="mt-5 space-y-4 text-[17px] leading-relaxed text-paper">
                {items.map((item) => (
                  <li key={item} className="border-t border-white/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <WritingNav current="/roadmap" />
      </article>
    </main>
  );
}
