import type { Metadata } from 'next';

/** Fallback share image. One per site is enough when a page has no picture of its own. */
export const shareImage = {
  url: '/images/ampheader.png',
  width: 1200,
  height: 630,
  alt: 'PrimusNeo — Federated Operational Infrastructure',
};

/**
 * Page-level canonical, Open Graph, and Twitter tags.
 * Pass the title the way it should read in a share card, brand included.
 */
export function pageMeta({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  rss = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  rss?: boolean;
}): Pick<Metadata, 'alternates' | 'openGraph' | 'twitter'> {
  return {
    alternates: {
      canonical: path,
      ...(rss ? { types: { 'application/rss+xml': '/feed.xml' as const } } : {}),
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [shareImage],
    },
  };
}
