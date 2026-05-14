import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY, NEWS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Post, News } from "@/lib/sanity/types";

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const [posts, newsItems] = await Promise.all([
    client.fetch<Post[]>(POSTS_QUERY, {}, options),
    client.fetch<News[]>(NEWS_QUERY, {}, options)
  ]);

  // Combine and sort by date
  const allItems = [
    ...posts.map(p => ({ ...p, _kind: 'post' as const })),
    ...newsItems.map(n => ({ ...n, _kind: 'news' as const }))
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <main className="min-h-screen w-full p-8">
      <div className="mx-auto" style={{ width: '80vw' }}>
        <h1 className="text-5xl font-bold mb-12 text-center text-glow">Intelligence & Updates</h1>
        {allItems.length > 0 ? (
          <div className="space-y-8">
            {allItems.map((item) => {
              const isNews = item._kind === 'news';
              const imageUrl = !isNews && item.image
                ? urlFor(item.image)?.width(400).height(300).url()
                : "/images/logo-primus-neo.png";
              
              const href = isNews ? `/news/${item.slug.current}` : `/blog/${item.slug.current}`;

              return (
                <Link 
                  href={href}
                  key={item._id}
                  className="group hover:no-underline block"
                >
                  <article className="bg-black/50 rounded-xl overflow-hidden border border-border/40 transition-all duration-200 hover:border-border/80 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative bg-zinc-900/50 flex items-center justify-center">
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className={`object-cover ${!isNews ? 'w-full h-full min-h-[250px]' : 'h-24 w-auto opacity-40'} transition-transform duration-200 group-hover:scale-105`}
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            {isNews && item.isAiGenerated && (
                              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-emerald-500/20">
                                AI Curated
                              </span>
                            )}
                            <time className="text-sm text-muted-foreground block">
                              {new Date(item.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                            {isNews && item.sourceName && (
                              <span className="text-xs text-muted-foreground/60">
                                via {item.sourceName}
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl font-semibold group-hover:text-primary text-glow transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed line-clamp-3">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No updates found.</p>
        )}
      </div>
    </main>
  );
}
