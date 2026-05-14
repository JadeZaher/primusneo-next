import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/app/_components/PortableTextComponents";
import { client } from "@/lib/sanity/client";
import { NEWS_ITEM_QUERY } from "@/lib/sanity/queries";
import type { News } from "@/lib/sanity/types";
import Link from "next/link";

const options = { next: { revalidate: 30 } };

export default async function NewsItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const newsItem = await client.fetch<News | null>(NEWS_ITEM_QUERY, resolvedParams, options);
  
  if (!newsItem) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <Link href="/blog" className="hover:underline">
          Back to updates
        </Link>
        <h1 className="text-4xl font-bold mb-8">News item not found</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        ← Back to updates
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            {newsItem.isAiGenerated && (
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded border border-emerald-500/20">
                AI Curated
              </span>
            )}
            <time className="text-muted-foreground text-lg">
              {new Date(newsItem.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight text-glow">{newsItem.title}</h1>
          
          {newsItem.sourceName && (
            <div className="text-muted-foreground italic">
              Original source: <a href={newsItem.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">{newsItem.sourceName}</a>
            </div>
          )}
        </header>

        <div className="max-w-none">
          {Array.isArray(newsItem.body) && (
            <PortableText 
              value={newsItem.body} 
              components={portableTextComponents}
            />
          )}
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This post was automatically curated and summarized by the PrimusNeo Intelligence Engine from a verified technology news source. Our goal is to provide high-signal updates on the future of federated infrastructure.
          </p>
        </footer>
      </article>
    </main>
  );
}
