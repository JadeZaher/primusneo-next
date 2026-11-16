/** Studio posts that stay in Sanity and are not served on the site. */
export const EXCLUDED_CMS_POST_SLUGS = ['first-among-equals'] as const;

const excludedCmsPostList = EXCLUDED_CMS_POST_SLUGS.map((slug) => `"${slug}"`).join(', ');

/** GROQ clause. `slug.current` is in scope. */
export const excludedCmsPostGroq = `!(slug.current in [${excludedCmsPostList}])`;

export function isExcludedCmsPost(slug: string | null | undefined): boolean {
  return typeof slug === 'string' && (EXCLUDED_CMS_POST_SLUGS as readonly string[]).includes(slug);
}

export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && ${excludedCmsPostGroq}
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  excerpt
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug && ${excludedCmsPostGroq}][0]`;

export const NEWS_QUERY = `*[
  _type == "news"
  && defined(slug.current)
]|order(publishedAt desc)[0...24]{
  _id,
  title,
  slug,
  publishedAt,
  sourceName,
  sourceUrl,
  excerpt,
  isAiGenerated
}`;

export const NEWS_ITEM_QUERY = `*[_type == "news" && slug.current == $slug][0]`;
