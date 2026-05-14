# Specification: Implement AI-Powered News Engine with Sanity & OpenRouter

## Objective
Create an automated news generation system that fetches tech news, uses AI via OpenRouter to generate relevant posts, and publishes them to the PrimusNeo news tool managed by Sanity CMS.

## Scope
- **Sanity Schema:** Update or add a `news` schema in Sanity CMS to store automated and manual posts.
- **Web Fetcher:** Implement a Node.js utility to fetch recent tech news and relevant site topics (e.g., via RSS or specific site scraping).
- **AI Generation:** Integrate OpenRouter API to summarize/rephrase fetched news into high-quality posts.
- **Automation:** Set up a cron job (GitHub Actions or Vercel Cron) to trigger the fetch-generate-publish pipeline.
- **Frontend:** Update the news listing and post pages to display these automated updates.

## Out of Scope
- Building a complex multi-agent AI system (start with a simple prompt-response flow).
- Real-time streaming of news (periodic updates via cron are sufficient).
- Advanced automated social media posting (can be a future track).