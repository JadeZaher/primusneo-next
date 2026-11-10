import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GuideArticle } from '@/app/_components/GuideArticle';
import { getGuide, guides } from '@/content/guides';

const shareImage = {
  url: '/images/ampheader.png',
  width: 1200,
  height: 630,
  alt: 'PrimusNeo — Federated Operational Infrastructure',
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: 'Not found', robots: { index: false, follow: false } };
  const path = `/guides/${guide.slug}`;
  return {
    title: { absolute: guide.seoTitle },
    description: guide.description,
    authors: [{ name: 'Escherbridge' }],
    alternates: { canonical: path },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      type: 'article',
      url: path,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.lastReviewed,
      authors: ['Escherbridge'],
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.seoTitle,
      description: guide.description,
      images: [shareImage.url],
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
