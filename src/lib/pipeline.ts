import { fetchTechNews } from './fetcher';
import { processNewsItemWithAI } from './processor';
import { writeClient } from './sanity/write-client';
import { env } from '~/env';

export async function runNewsPipeline() {
  console.log('--- Starting News Pipeline ---');
  
  if (!env.SANITY_API_TOKEN) {
    console.error('SANITY_API_TOKEN is missing. Pipeline aborted.');
    return;
  }

  try {
    const freshNews = await fetchTechNews();
    console.log(`Fetched ${freshNews.length} new items from RSS.`);

    // Limit to a few items per run to avoid hitting rate limits or being too noisy
    const newsToProcess = freshNews.slice(0, 5);

    for (const item of newsToProcess) {
      console.log(`Processing: ${item.title}`);
      
      const aiContent = await processNewsItemWithAI(item);
      
      if (!aiContent) {
        console.warn(`Failed to process "${item.title}" with AI. Skipping.`);
        continue;
      }

      // Create document in Sanity
      const slug = aiContent.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');

      try {
        await writeClient.create({
          _type: 'news',
          title: aiContent.title,
          slug: { _type: 'slug', current: slug },
          sourceName: item.source,
          sourceUrl: item.link,
          publishedAt: new Date(item.pubDate).toISOString(),
          excerpt: aiContent.excerpt,
          body: [
            {
              _key: Math.random().toString(36).substring(7),
              _type: 'block',
              children: [{ _key: 'c1', _type: 'span', text: aiContent.body }],
              markDefs: [],
              style: 'normal',
            },
          ],
          isAiGenerated: true,
        });
        console.log(`Successfully published: ${aiContent.title}`);
      } catch (publishError) {
        console.error(`Error publishing "${aiContent.title}" to Sanity:`, publishError);
      }
    }

    console.log('--- News Pipeline Finished ---');
  } catch (error) {
    console.error('Critical error in news pipeline:', error);
  }
}
