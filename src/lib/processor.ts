import { generateAIResponse } from './openrouter';
import { type NewsItem } from './fetcher';

const SYSTEM_PROMPT = `
You are an expert tech curator for PrimusNeo, a platform for Federated Operational Infrastructure.
Your goal is to summarize tech news into concise, insightful, and professional posts.
The brand voice is:
- Professional and authoritative
- Future-forward but grounded in operational delivery
- Focused on spatial intelligence, digital twins, decentralized governance, and modular infrastructure.

For each news item, provide:
1. A catchy but professional title.
2. A brief excerpt (2-3 sentences).
3. A short body (1-2 paragraphs) that explains why this news matters in the context of federated infrastructure or PrimusNeo's core layers (AMP, OASIS, NEOS, Fractal Engine).

Output format: JSON
{
  "title": "...",
  "excerpt": "...",
  "body": "..."
}
`;

export async function processNewsItemWithAI(item: NewsItem) {
  const userPrompt = `
  Source: ${item.source}
  Title: ${item.title}
  Content: ${item.content}
  URL: ${item.link}
  
  Please process this news item into the PrimusNeo brand voice.
  `;

  const response = await generateAIResponse(userPrompt, SYSTEM_PROMPT);
  
  if (!response) return null;

  try {
    // Attempt to parse JSON from the response
    // Sometimes AI adds markdown backticks, so we clean them
    const cleanedResponse = response.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanedResponse) as { title: string; excerpt: string; body: string };
  } catch (error) {
    console.error("Failed to parse AI response as JSON:", error);
    return null;
  }
}
