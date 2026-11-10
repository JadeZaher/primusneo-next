import { notFound } from 'next/navigation';
import { EntryArticle } from '@/app/_components/EntryArticle';
import { getNewsItem, newsItems } from '@/content/news';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return { title: 'Not found', robots: { index: false, follow: false } };
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/newsroom/${slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: 'article',
      url: `/newsroom/${slug}`,
      publishedTime: item.date,
    },
    twitter: { card: 'summary_large_image', title: item.title, description: item.excerpt },
  };
}

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  return (
    <EntryArticle
      sectionHref="/newsroom"
      sectionLabel="Newsroom"
      kicker={item.kicker}
      title={item.title}
      date={item.date}
      paragraphs={item.paragraphs}
      links={item.links}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: item.title,
        description: item.excerpt,
        datePublished: item.date,
        mainEntityOfPage: `${SITE_URL}/newsroom/${item.slug}`,
        publisher: { '@type': 'Organization', name: 'PrimusNeo', url: SITE_URL },
      }}
    />
  );
}
