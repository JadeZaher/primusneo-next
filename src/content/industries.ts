/** Sector pages. Titles match the live cards. Used for sibling links, not for new figures. */

export const industryPages = [
  { slug: 'construction', title: 'Construction & Built Environment' },
  { slug: 'manufacturing', title: 'Manufacturing & Industrial Production' },
  { slug: 'agriculture', title: 'Agriculture & Food Systems' },
  { slug: 'robotics', title: 'Robotics & Autonomous Systems' },
  { slug: 'energy', title: 'Energy & Utilities' },
  { slug: 'governance', title: 'Governance & Public Sector' },
  { slug: 'finance', title: 'Finance & Investing' },
  { slug: 'technology', title: 'Technology & Software' },
  { slug: 'healthcare', title: 'Healthcare & Life Sciences' },
  { slug: 'logistics', title: 'Logistics & Mobility' },
] as const;

export function siblingIndustries(path: string, count = 2) {
  const slug = path.split('/').filter(Boolean).pop();
  const index = industryPages.findIndex((page) => page.slug === slug);
  const siblings: Array<(typeof industryPages)[number]> = [];
  if (index < 0) return siblings;
  for (let step = 1; siblings.length < count && step < industryPages.length; step += 1) {
    siblings.push(industryPages[(index + step) % industryPages.length]);
  }
  return siblings;
}
