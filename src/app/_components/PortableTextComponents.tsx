import type { PortableTextComponents } from '@portabletext/react';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/lib/sanity/image';

interface SanityImage extends SanityImageSource {
  alt?: string;
  caption?: string;
}

interface MarkDef {
  _type: string;
  href?: string;
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 leading-relaxed text-base">{children}</p>,
    // Demote in-body h1s to h2 so the page-level h1 (post title) stays the sole h1 for SEO.
    h1: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-glow">{children}</h2>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-10 mb-4 text-glow">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-medium mt-8 mb-3 text-glow">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-medium mt-6 mb-2 text-glow">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic my-6 text-muted-foreground text-glow">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a 
        href={value?.href} 
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(800).height(450).url();
      return imageUrl ? (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || ''}
            className="w-full rounded-lg shadow-md"
          />
          {value.caption && (
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null;
    },
  },
};
