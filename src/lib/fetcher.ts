import Parser from 'rss-parser';
import { client } from './sanity/client';

const parser = new Parser();

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  source: string;
}

const FEEDS = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/feed/' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/index.xml' },
  { name: 'Wired', url: 'https://www.wired.com/feed/rss' },
];

async function isNewsAlreadyExists(link: string): Promise<boolean> {
  const query = `*[_type == "news" && sourceUrl == $link][0]`;
  const existing = await client.fetch(query, { link });
  return !!existing;
}

export async function fetchTechNews(): Promise<NewsItem[]> {
  const allNews: NewsItem[] = [];

  for (const feed of FEEDS) {
    try {
      const feedData = await parser.parseURL(feed.url);
      for (const item of feedData.items) {
        const link = item.link || '';
        
        // Simple deduplication check against Sanity
        if (await isNewsAlreadyExists(link)) {
          continue;
        }

        allNews.push({
          title: item.title || '',
          link: link,
          pubDate: item.pubDate || '',
          content: item.contentSnippet || item.content || '',
          source: feed.name,
        });
      }
    } catch (error) {
      console.error(`Error fetching feed ${feed.name}:`, error);
    }
  }

  // Sort by date descending
  return allNews.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}
