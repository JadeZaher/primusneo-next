import { client } from '@/lib/sanity/client';
import { NEWS_QUERY, POSTS_QUERY } from '@/lib/sanity/queries';
import type { News, Post } from '@/lib/sanity/types';
import { essays } from '@/content/essays';

const options = { next: { revalidate: 30 } };

export type WritingCard = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  href: string;
  kind: 'essay' | 'post' | 'news';
  sourceName?: string;
  isAiGenerated?: boolean;
};

export async function loadSanityWriting(): Promise<{ posts: Post[]; news: News[] }> {
  try {
    const [posts, news] = await Promise.all([
      client.fetch<Post[]>(POSTS_QUERY, {}, options),
      client.fetch<News[]>(NEWS_QUERY, {}, options),
    ]);
    return { posts: posts ?? [], news: news ?? [] };
  } catch {
    return { posts: [], news: [] };
  }
}

export function essayCards(): WritingCard[] {
  return essays.map((essay) => ({
    id: `essay-${essay.slug}`,
    title: essay.seoTitle ?? essay.title,
    excerpt: essay.excerpt,
    publishedAt: essay.publishedAt,
    href: `/blog/${essay.slug}`,
    kind: 'essay',
  }));
}

export async function loadWritingIndex(): Promise<WritingCard[]> {
  const { posts, news } = await loadSanityWriting();
  const cards: WritingCard[] = [
    ...essayCards(),
    ...posts.map((post) => ({
      id: post._id,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      href: `/blog/${post.slug.current}`,
      kind: 'post' as const,
    })),
    ...news.map((item) => ({
      id: item._id,
      title: item.title,
      excerpt: item.excerpt,
      publishedAt: item.publishedAt,
      href: `/news/${item.slug.current}`,
      kind: 'news' as const,
      sourceName: item.sourceName,
      isAiGenerated: item.isAiGenerated,
    })),
  ];

  const seen = new Set<string>();
  return cards
    .filter((card) => {
      if (seen.has(card.href)) return false;
      seen.add(card.href);
      return true;
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
