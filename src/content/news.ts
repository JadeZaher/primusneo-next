/**
 * Newsroom entries. Dated, and only as dated as the source.
 * See CONTENT.md before adding one.
 */

export type NewsLink = { label: string; href: string };

export type NewsItem = {
  slug: string;
  title: string;
  /** YYYY-MM-DD. Use the date of the commit or the site change, not a guessed launch. */
  date: string;
  kicker: string;
  excerpt: string;
  paragraphs: string[];
  links?: NewsLink[];
};

export const newsItems: NewsItem[] = [
  {
    slug: 'notes-are-in-the-repo',
    title: 'The notes are in the repo',
    date: '2026-11-10',
    kicker: 'Site',
    excerpt:
      'The public site restated the stack in the lab’s own words and started publishing builder notes from the codebase.',
    paragraphs: [
      'On 10 November 2026 the marketing site on main changed its front door. The line is “Many timelines. One line.” The lab steps are on the page. The layer names match the ones we actually use: AMP for the operational runtime, NEOS for agreements and permissions, AZOA for identity, consent, and settlement, Fractal Engine for organizational memory, Elevate Impact for research enablement.',
      'The long notes are TypeScript in the repo, rendered next to anything the Sanity studio already holds. They cite public sources. They also say where our own software is alpha, including the parts that are not finished.',
      'Tie Town, in McDade, Texas, is still the first live deployment. That was true before this change. The footer now uses that site’s coordinates, 30.28°N / 97.24°W.',
    ],
    links: [
      { label: 'The notes', href: '/blog' },
      { label: 'NEOS, agreements and permissions', href: 'https://neos.primusneo.com' },
      { label: 'AZOA, identity, consent, and settlement', href: 'https://azoa.ardanova.com' },
      { label: 'Site commit', href: 'https://github.com/JadeZaher/primusneo-next/commit/f1eef217ea735d7fc3a190a10ec2c753ab7684eb' },
    ],
  },
  {
    slug: 'fractal-engine-stays-alpha',
    title: 'Fractal Engine stays alpha',
    date: '2026-11-09',
    kicker: 'Fractal Engine',
    excerpt:
      'The extension platform and the portal surface merged to main. The engine is still pre-1.0, and the old signature field is still zeros.',
    paragraphs: [
      'On 9 November 2026 two tracks merged to the Fractal Engine main branch: the extension platform, and the web-bundle portal surface on top of it. The public README still describes the project as alpha. That word is doing real work.',
      'What the README says works includes a Bevy editor, embedded SurrealDB, BLAKE3-addressed assets, .hexon map packages, peer-to-peer replication over iroh, and BI egress toward DuckDB, GeoParquet, or Power BI. The plugin host runs Rhai and WASM in sandboxes. The desktop starts that host and loads no packages on its own. Admission fails closed. The relay does not host plugins.',
      'The same README says operation-log entries carry an ed25519 signature field, and that legacy write paths store zeros. Signed operations belong to the canonical log. Do not treat the op-log as an integrity guarantee yet. Pre-1.0 packages are unsigned, and there is no macOS build.',
    ],
    links: [
      { label: 'Fractal Engine on the site', href: '/fractal-engine' },
      { label: 'README', href: 'https://github.com/Escherbridge/fractalengine/blob/main/README.md' },
      { label: 'Extension platform merge', href: 'https://github.com/Escherbridge/fractalengine/commit/0b579b6' },
      { label: 'Portal surface merge', href: 'https://github.com/Escherbridge/fractalengine/commit/f2adc8f' },
    ],
  },
  {
    slug: 'elevate-impact-named-on-the-site',
    title: 'Elevate Impact is named as the research module',
    date: '2026-11-08',
    kicker: 'Partnership',
    excerpt:
      'The site lists Elevate Impact as the research-enablement partner. The sickle cell work is live. The join to the four layers is not.',
    paragraphs: [
      'On 8 November 2026 the site commit that added Elevate Impact as a stack module landed on the repository. The public description is specific. Elevate Impact is the research partner. It is live with the sickle cell community. The people affected join as co-designers, not as subjects. Design lives on their platform. Execution does not.',
      'The Elevate Impact page publishes a set of platform figures dated September 2026: 7 courses, 80 lessons in 3 languages, 1,185 clinical trials analysed, 3,696 care and research centres mapped, 7,374 rare diseases catalogued, and 390+ API operations across 121 data models. It also notes Minority Business Enterprise certification. Those numbers live on that page. This note does not add new ones.',
      'The connection from Elevate Impact to AMP, NEOS, AZOA, and Fractal Engine is in build. The page says the flow is planned, not live. Their own site and LinkedIn company page are the public record beside ours.',
    ],
    links: [
      { label: 'Elevate Impact page', href: '/elevate-impact' },
      { label: 'elevateimpact.com', href: 'https://elevateimpact.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/elevateimpact' },
      { label: 'Site commit', href: 'https://github.com/JadeZaher/primusneo-next/commit/406d829' },
    ],
  },
  {
    slug: 'neos-recorded-a-public-introduction',
    title: 'NEOS recorded a public introduction',
    date: '2026-11-04',
    kicker: 'NEOS',
    excerpt:
      'The governance platform repository recorded a deployed public introduction. Councils at Tie Town were already the claim on our site.',
    paragraphs: [
      'On 4 November 2026 the NEOS governance platform repository recorded a deployed public introduction, and an About-navigation follow-up. The same day it recorded a verified member tutorial rollout. Those are commit messages, not a press tour. They mean the platform repo is tracking a deployment, not a slide.',
      'On our site, NEOS is agreements and permissions. The operating-system repository is the skill stack: agreements written down, authority that is scoped and expires, and decisions by advice, consent, and a reversible test. OmniOne, stewarded by Green Earth Vision, is the ecosystem named there. Councils run at Tie Town [TX].',
      'This note does not claim that every skill in that stack is in use at the creator house. The councils are the deployment we state. The catalog is the repo.',
    ],
    links: [
      { label: 'Governance platform', href: '/governance-platform' },
      { label: 'NEOS, agreements and permissions', href: 'https://neos.primusneo.com' },
      { label: 'Public introduction commit', href: 'https://github.com/JadeZaher/NEOS/commit/eac6028' },
      { label: 'Operating system', href: 'https://github.com/JadeZaher/neos-operating-system' },
    ],
  },
  {
    slug: 'azoa-alpha-gate-consent-stays-narrow',
    title: 'AZOA’s alpha gate keeps consent narrow',
    date: '2026-11-01',
    kicker: 'AZOA',
    excerpt:
      'Identity and revocable consent are in. Real-value bridges are not. A November fix refused to mint wallets into claimed accounts.',
    paragraphs: [
      'AZOA’s own README calls the status pre-launch, Alpha Gate. Self-sovereign identity and revocable consent are shipped and security-reviewed. Durable actions, the visual builder, and SurrealDB as the only data engine are in the tree. Real-value bridges stay off. Wallet creation outside development is simulated. Governance tally and credential revocation remain in the not-enabled list until their reviews close.',
      'On 1 November 2026 a fix on the tenant track said relinquish is claimed-only, the consent copy stays minimal, and wallets are not minted into claimed accounts. Two days earlier, a claimed member was given a way to keep working under their own grant. That is the shape of the alpha: the permission is real, the money movement is not switched on.',
      'ArdaNova, the public cooperative-project repo, is a designed consumer of this layer. It is not a live settlement deployment, and it has made no token offering.',
    ],
    links: [
      { label: 'AZOA on the site', href: '/azoa' },
      { label: 'AZOA, identity, consent, and settlement', href: 'https://azoa.ardanova.com' },
      { label: 'README', href: 'https://github.com/JadeZaher/azoa-autonomous-zones-of-action/blob/main/README.md' },
      { label: '1 November fix', href: 'https://github.com/JadeZaher/azoa-autonomous-zones-of-action/commit/da1a4b6' },
      { label: 'ArdaNova, a designed consumer of this layer', href: 'https://ardanova.com' },
      { label: 'ArdaNova repository', href: 'https://github.com/Escherbridge/Ardanova' },
    ],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
