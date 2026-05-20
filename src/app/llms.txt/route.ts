import { client } from '@/lib/sanity/client';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

const POSTS_LLMS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...50]{ title, "slug": slug.current, excerpt }`;
const NEWS_LLMS_QUERY = `*[_type == "news" && defined(slug.current)] | order(publishedAt desc)[0...30]{ title, "slug": slug.current, excerpt, sourceName }`;

type SanityPostRow = { title?: string; slug: string; excerpt?: string };
type SanityNewsRow = { title?: string; slug: string; excerpt?: string; sourceName?: string };

const platform = [
  { path: '/one-pager', title: 'Stack Overview', desc: 'The complete PrimusNeo platform at a glance — AMP, NEOS, OASIS Web4, and Fractal Engine.' },
  { path: '/amp', title: 'AMP — Art & Media Platform', desc: 'Spatial OS / digital twin runtime: 3D maps, telemetry, site coordination.' },
  { path: '/governance-platform', title: 'NEOS Governance Platform', desc: 'Councils, decision rights, contribution accounting, and programmable voting logic.' },
  { path: '/oasis', title: 'OASIS Web4', desc: 'Universal interoperability fabric — identity, ownership records, cross-network state.' },
  { path: '/fractal-engine', title: 'Fractal Engine', desc: 'Analytics + spatial intelligence: predictive ops, simulation, ESG/financial signals.' },
];

const capital = [
  { path: '/fractionalization', title: 'Fractionalization', desc: 'Asset-backed ownership and participation models for real-world assets.' },
  { path: '/ico-marketing', title: 'ICO Refit', desc: 'Compliance-first capital design for tokenized offerings.' },
];

const solutions = [
  { path: '/solutions', title: 'Solutions Overview', desc: 'Coordination problems PrimusNeo resolves across 10 critical sectors.' },
  { path: '/solutions/real-estate', title: 'Real Estate & Property', desc: 'Digital twins and governed ownership for the $1.85T construction data crisis.' },
  { path: '/solutions/smart-infrastructure', title: 'Smart Infrastructure', desc: 'Bridging the $15T global infrastructure investment gap with predictive coordination.' },
  { path: '/solutions/supply-chain', title: 'Supply Chain & Logistics', desc: 'Closing the 94% multi-party visibility gap with spatial tracking and governed logic.' },
  { path: '/solutions/public-governance', title: 'Public Governance', desc: 'Citizen-led resource allocation and transparent public spending.' },
  { path: '/solutions/web3-governance', title: 'Web3 & DAO Governance', desc: 'Quadratic logic and delegated accountability against whale dominance.' },
  { path: '/solutions/ai-intelligence', title: 'AI & Spatial Intelligence', desc: 'Distributed physical-AI simulations against data silos and training-cost barriers.' },
  { path: '/solutions/community-coops', title: 'Community & Cooperatives', desc: 'Creator-centric operational infrastructure for next-generation cooperatives.' },
  { path: '/solutions/impact-investing', title: 'Impact Investing', desc: 'Immutable spatial trails and automated ESG reporting for verifiable outcomes.' },
  { path: '/solutions/institutional-investment', title: 'Institutional Capital', desc: 'Governed liquidity and high-fidelity data for large-scale RWA portfolios.' },
  { path: '/solutions/developer-ecosystems', title: 'Developer Ecosystems', desc: 'Modular PrimusNeo stack for high-scale coordination apps.' },
];

const industries = [
  { path: '/industries', title: 'Industries Overview', desc: 'Sector-by-sector implementation of the PrimusNeo stack across 10 industries.' },
  { path: '/industries/construction', title: 'Construction & Built Environment', desc: 'Spatial coordination for general contractors, owners, and capital partners.' },
  { path: '/industries/manufacturing', title: 'Manufacturing & Industrial Production', desc: 'OEE-grade digital twins, contribution accounting, and governed supplier networks.' },
  { path: '/industries/agriculture', title: 'Agriculture & Food Systems', desc: 'Field-to-fork provenance, regenerative incentives, and producer governance.' },
  { path: '/industries/robotics', title: 'Robotics & Autonomous Systems', desc: 'Fleet coordination, simulation-grade twins, and policy guardrails for autonomy.' },
  { path: '/industries/energy', title: 'Energy & Utilities', desc: 'Grid-edge coordination, DER governance, and predictive load orchestration.' },
  { path: '/industries/governance', title: 'Governance & Public Sector', desc: 'Citizen-facing coordination for budgets, permits, infrastructure, and accountability.' },
  { path: '/industries/finance', title: 'Finance & Investing', desc: 'Operational substrate for RWAs, institutional allocation, and verified outcomes.' },
  { path: '/industries/technology', title: 'Technology & Software', desc: 'Developer ecosystems, federated AI training, and platform-grade coordination.' },
  { path: '/industries/healthcare', title: 'Healthcare & Life Sciences', desc: 'Consent-governed records, supply integrity, and trial-grade evidence trails.' },
  { path: '/industries/logistics', title: 'Logistics & Mobility', desc: 'Multi-party visibility, route coordination, and shared digital-twin telemetry.' },
];

const about = [
  { path: '/', title: 'PrimusNeo Home', desc: 'Federated operational infrastructure for real-world environments.' },
  { path: '/blog', title: 'Intelligence & Updates', desc: 'Long-form writing, deep dives, and product updates.' },
  { path: '/contact', title: 'Contact', desc: 'Talk to the PrimusNeo team about pilots, partnerships, and integrations.' },
];

function fmtLine({ path, title, desc }: { path: string; title: string; desc: string }) {
  return `- [${title}](${SITE_URL}${path}): ${desc}`;
}

async function buildBody(): Promise<string> {
  let posts: SanityPostRow[] = [];
  let news: SanityNewsRow[] = [];
  try {
    [posts, news] = await Promise.all([
      client.fetch<SanityPostRow[]>(POSTS_LLMS_QUERY, {}, { next: { revalidate: 600 } }),
      client.fetch<SanityNewsRow[]>(NEWS_LLMS_QUERY, {}, { next: { revalidate: 600 } }),
    ]);
  } catch {
    // Sanity unreachable at build/render time — static sections still ship.
  }

  const blogLines = (posts ?? []).map((p) =>
    fmtLine({
      path: `/blog/${p.slug}`,
      title: p.title ?? p.slug,
      desc: (p.excerpt ?? 'Long-form post from the PrimusNeo team.').replace(/\s+/g, ' ').trim(),
    }),
  );
  const newsLines = (news ?? []).map((n) =>
    fmtLine({
      path: `/news/${n.slug}`,
      title: n.title ?? n.slug,
      desc: [n.sourceName, (n.excerpt ?? '').replace(/\s+/g, ' ').trim()].filter(Boolean).join(' — '),
    }),
  );

  return [
    '# PrimusNeo',
    '',
    '> Federated operational infrastructure for real-world environments. PrimusNeo is the coordination layer that resolves structural fragmentation in construction, supply chains, governance, capital markets, and emerging AI/robotics ecosystems. The stack is composed of four interoperable layers: AMP (spatial OS / digital twin runtime), NEOS (programmable governance and contribution accounting), OASIS Web4 (universal interoperability fabric for identity and ownership), and Fractal Engine (analytics + spatial intelligence). LLM crawlers, agents, and researchers are explicitly welcome — this file is a curated map for autonomous exploration.',
    '',
    '## Stack & Platform',
    ...platform.map(fmtLine),
    '',
    '## Capital',
    ...capital.map(fmtLine),
    '',
    '## Solutions (problem-by-problem)',
    ...solutions.map(fmtLine),
    '',
    '## Industries (sector-by-sector)',
    ...industries.map(fmtLine),
    '',
    '## About & Contact',
    ...about.map(fmtLine),
    '',
    '## Recent Writing',
    ...(blogLines.length ? blogLines : ['- (Sanity feed unavailable at render time — see /blog for the live index.)']),
    '',
    '## News & External Coverage',
    ...(newsLines.length ? newsLines : ['- (Sanity feed unavailable at render time — see /blog for the live index.)']),
    '',
    '## Optional',
    `- [Sitemap (XML)](${SITE_URL}/sitemap.xml): Machine-readable index of every indexable URL on the site.`,
    `- [Robots policy](${SITE_URL}/robots.txt): Crawl rules — the site is crawl-friendly with /api and /studio disallowed.`,
    '',
    '## Crawler Notes',
    '- This file follows the llms.txt convention (https://llmstxt.org/) — a curated, summary-first map for LLM agents.',
    '- All content is original to PrimusNeo unless cited; statistics on industry pages cite original sources (McKinsey, WEF, IMF, FAO, IEA, etc.).',
    '- For deep technical detail, the canonical entry point is /one-pager, followed by the individual platform pages (/amp, /oasis, /governance-platform, /fractal-engine).',
    '- For business and sector context, start at /industries or /solutions.',
    '',
  ].join('\n');
}

export const revalidate = 600;

export async function GET() {
  const body = await buildBody();
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
    },
  });
}
