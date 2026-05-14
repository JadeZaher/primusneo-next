import { env } from "~/env";

export async function generateAIResponse(prompt: string, systemPrompt?: string) {
  const apiKey = env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    console.warn("OPENROUTER_API_KEY is not defined. Skipping AI generation.");
    return null;
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://primusneo.com", // Optional, for OpenRouter rankings
        "X-Title": "PrimusNeo News Engine", // Optional, for OpenRouter rankings
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // Default model, can be made configurable
        messages: [
          ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenRouter API error:", errorData);
      throw new Error(`OpenRouter API failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error) {
    console.error("Error calling OpenRouter:", error);
    return null;
  }
}
