import { essays } from '@/content/essays';
import { futures } from '@/content/futures';
import { guides } from '@/content/guides';
import { newsItems } from '@/content/news';
import { papers } from '@/content/papers';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

type FeedItem = { title: string; href: string; date: string; description: string };

export function GET() {
  const items: FeedItem[] = [
    ...essays.map((essay) => ({
      title: essay.title,
      href: `/blog/${essay.slug}`,
      date: essay.publishedAt,
      description: essay.excerpt,
    })),
    ...newsItems.map((item) => ({
      title: item.title,
      href: `/newsroom/${item.slug}`,
      date: item.date,
      description: item.excerpt,
    })),
    ...futures.map((piece) => ({
      title: piece.title,
      href: `/futures/${piece.slug}`,
      date: piece.date,
      description: piece.excerpt,
    })),
    ...papers.map((paper) => ({
      title: paper.title,
      href: `/papers/${paper.slug}`,
      date: paper.publishedAt,
      description: paper.description,
    })),
    ...guides.map((guide) => ({
      title: guide.title,
      href: `/guides/${guide.slug}`,
      date: guide.publishedAt,
      description: guide.excerpt,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>PrimusNeo</title>
    <link>${SITE_URL}</link>
    <description>Builder notes, field guides, papers, newsroom items, and labeled speculation.</description>
    <language>en-us</language>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}${item.href}</link>
      <guid>${SITE_URL}${item.href}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`,
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=600',
    },
  });
}
