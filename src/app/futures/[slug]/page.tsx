import { notFound } from 'next/navigation';
import { EntryArticle } from '@/app/_components/EntryArticle';
import { futures, getFuture } from '@/content/futures';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

export function generateStaticParams() {
  return futures.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = getFuture(slug);
  if (!piece) return { title: 'Not found', robots: { index: false, follow: false } };
  return {
    title: piece.title,
    description: piece.excerpt,
    alternates: { canonical: `/futures/${slug}` },
    openGraph: {
      title: `${piece.title} | PrimusNeo`,
      description: piece.excerpt,
      type: 'article',
      url: `/futures/${slug}`,
      publishedTime: piece.date,
    },
    twitter: { card: 'summary_large_image', title: piece.title, description: piece.excerpt },
  };
}

export default async function FuturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = getFuture(slug);
  if (!piece) notFound();

  return (
    <EntryArticle
      sectionHref="/futures"
      sectionLabel="Futures"
      kicker={`Speculation · ${piece.horizon} · ${piece.layer}`}
      title={piece.title}
      date={piece.date}
      banner="Speculation. Not a roadmap, not a delivery date."
      paragraphs={piece.paragraphs}
      blocks={piece.blocks}
      sources={piece.sources}
      links={[{ label: 'Roadmap', href: '/roadmap' }]}
      close={{ layer: piece.layer, layerHref: piece.layerHref }}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: piece.title,
        description: piece.excerpt,
        datePublished: piece.date,
        mainEntityOfPage: `${SITE_URL}/futures/${piece.slug}`,
        author: { '@type': 'Organization', name: 'PrimusNeo', url: SITE_URL },
        citation: piece.sources?.map((source) => source.href),
      }}
    />
  );
}
