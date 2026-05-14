export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  excerpt
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

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
