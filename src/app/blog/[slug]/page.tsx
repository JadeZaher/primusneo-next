import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/app/_components/PortableTextComponents";
import { client } from "@/lib/sanity/client";
import { POST_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/types";
import Link from "next/link";

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<Post | null>(POST_QUERY, resolvedParams, options);
  
  if (!post) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <Link href="/blog" className="hover:underline">
          Back to posts
        </Link>
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(675).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        ← Back to posts
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-glow">{post.title}</h1>
          <time className="text-muted-foreground text-lg">
            Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        {postImageUrl && (
          <figure className="mb-12">
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full rounded-xl shadow-lg"
              width="800"
              height="450"
            />
          </figure>
        )}

        <div className="max-w-none">
          {Array.isArray(post.body) && (
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          )}
        </div>
      </article>
    </main>
  );
}
