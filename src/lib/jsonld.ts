/** Structured data helpers. The sitewide Organization graph lives in the root layout. */

export const CANONICAL_ORIGIN = 'https://primusneo.com';
export const ORGANIZATION_ID = `${CANONICAL_ORIGIN}/#organization`;
export const WEBSITE_ID = `${CANONICAL_ORIGIN}/#website`;
/** Operator node already declared as parentOrganization on the site graph. */
export const ESCHERBRIDGE_ID = 'https://escherbridge.com/#organization';
export const DEFAULT_IMAGE = `${CANONICAL_ORIGIN}/images/ampheader.png`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${CANONICAL_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

export type Crumb = { name: string; path: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export type CitedSource = {
  href: string;
  label?: string;
  title?: string;
  org?: string;
  year?: string;
};

export function citationWorks(sources: CitedSource[]) {
  return sources.map((source) => {
    const work: Record<string, unknown> = {
      '@type': 'CreativeWork',
      name: source.title ?? source.label ?? source.href,
      url: source.href,
    };
    if (source.org) work.author = { '@type': 'Organization', name: source.org };
    if (source.year && /^\d{4}$/.test(source.year)) work.datePublished = source.year;
    return work;
  });
}

export function articleNode({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
  citations,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  citations?: Record<string, unknown>[];
}) {
  return {
    '@type': 'Article',
    headline,
    description,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    image: image ?? DEFAULT_IMAGE,
    author: { '@id': ESCHERBRIDGE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    ...(citations && citations.length > 0 ? { citation: citations } : {}),
  };
}

export function collectionNode({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    '@type': 'CollectionPage',
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
