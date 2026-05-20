import type { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/one-pager', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/amp', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/oasis', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/governance-platform', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/fractal-engine', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/fractionalization', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ico-marketing', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
  // Solutions pillar
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/solutions/real-estate', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/smart-infrastructure', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/supply-chain', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/public-governance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/web3-governance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/ai-intelligence', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/community-coops', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/impact-investing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/institutional-investment', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions/developer-ecosystems', changeFrequency: 'monthly', priority: 0.8 },
  // Industries pillar
  { path: '/industries', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/industries/construction', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/manufacturing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/agriculture', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/robotics', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/energy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/governance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/finance', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/technology', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/healthcare', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries/logistics', changeFrequency: 'monthly', priority: 0.8 },
];

const POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updatedAt": coalesce(_updatedAt, publishedAt) }`;
const NEWS_SITEMAP_QUERY = `*[_type == "news" && defined(slug.current)]{ "slug": slug.current, "updatedAt": coalesce(_updatedAt, publishedAt) }`;

type SanitySlugRow = { slug: string; updatedAt?: string };

async function fetchSanitySlugs(): Promise<{ posts: SanitySlugRow[]; news: SanitySlugRow[] }> {
  try {
    const [posts, news] = await Promise.all([
      client.fetch<SanitySlugRow[]>(POSTS_SITEMAP_QUERY, {}, { next: { revalidate: 600 } }),
      client.fetch<SanitySlugRow[]>(NEWS_SITEMAP_QUERY, {}, { next: { revalidate: 600 } }),
    ]);
    return { posts: posts ?? [], news: news ?? [] };
  } catch {
    return { posts: [], news: [] };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const { posts, news } = await fetchSanitySlugs();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map(({ slug, updatedAt }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: updatedAt ? new Date(updatedAt) : now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const newsEntries: MetadataRoute.Sitemap = news.map(({ slug, updatedAt }) => ({
    url: `${SITE_URL}/news/${slug}`,
    lastModified: updatedAt ? new Date(updatedAt) : now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...newsEntries];
}
