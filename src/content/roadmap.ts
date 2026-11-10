/**
 * Public roadmap. Statuses are shipped, in alpha, building, or exploring.
 * No dates. If a sentence is not supported by the site or a public repo, do not add it.
 * See CONTENT.md.
 */

export type RoadmapStatus = 'shipped' | 'in alpha' | 'building' | 'exploring';

export type RoadmapColumn = {
  label: string;
  items: string[];
};

export type RoadmapLayer = {
  slug: string;
  name: string;
  role: string;
  status: RoadmapStatus;
  summary: string;
  /** Product page on this site. */
  href: string;
  repo?: string;
  now: string[];
  next: string[];
  later: string[];
};

export const roadmapLayers: RoadmapLayer[] = [
  {
    slug: 'amp',
    name: 'AMP',
    role: 'Operational runtime',
    status: 'shipped',
    summary:
      'The spatial OS. The public kit is amp.SDK. The runtime people can point at is Tie Town [TX].',
    href: '/amp',
    repo: 'https://github.com/plan-systems/amp.SDK',
    now: [
      'Runs at Tie Town, a creator house in McDade, Texas. PLAN Systems stewards the runtime.',
      'The public SDK is a Go library for 3D geo-spatial apps, with Unity and Unreal bindings and content crates that ship apart from the app build.',
      'The lineage named in the SDK is PLAN 3D, in production since 2019.',
    ],
    next: [
      'Nothing beyond the public kit and the Tie Town deployment is scheduled on this page.',
    ],
    later: [
      'Exploring: a single story for moving a twin off whoever hosts it. The site argues for it. The SDK does not list it as a milestone.',
    ],
  },
  {
    slug: 'neos',
    name: 'NEOS',
    role: 'Agreements and permissions',
    status: 'shipped',
    summary:
      'Councils at Tie Town, a public skill stack, and a platform repo that has recorded a deployment. Not a claim that every skill is in the building.',
    href: '/governance-platform',
    repo: 'https://github.com/JadeZaher/NEOS',
    now: [
      'Councils run at Tie Town [TX]. OmniOne, stewarded by Green Earth Vision, is the ecosystem named on the site.',
      'The operating-system repo is the skill stack: written agreements, authority that is scoped and expires, and decisions by advice, consent, and a reversible test.',
      'On 4 November 2026 the platform repo recorded a deployed public introduction and a member tutorial rollout.',
    ],
    next: [
      'The platform work visible in public commits is the introduction and the tutorial already recorded. This column does not add a feature that those commits do not name.',
    ],
    later: [
      'Exploring, in the sense that we will not pretend: the full skill catalog is in the operating-system repo. This page does not say every skill is in use at Tie Town.',
    ],
  },
  {
    slug: 'azoa',
    name: 'AZOA',
    role: 'Identity, consent, settlement',
    status: 'in alpha',
    summary:
      'Alpha Gate. The permission is shipped. The money movement is switched off until custody review.',
    href: '/azoa',
    repo: 'https://github.com/JadeZaher/azoa-autonomous-zones-of-action',
    now: [
      'Self-sovereign identity and revocable consent are shipped and security-reviewed.',
      'Durable actions, the visual builder, and SurrealDB as the only data engine are in the repository. The license is Apache-2.0.',
      'Real-value bridges stay off. Wallet creation outside development is simulated.',
    ],
    next: [
      'Building: governance tally and credential revocation stay in the not-enabled list until their reviews close. The refusal is in the code, on purpose.',
      'Building: production custody for real-value bridges. The README says no provider currently implements the full reviewed lifecycle.',
    ],
    later: [
      'Exploring as a live consumer: ArdaNova is a public project designed to sit on this layer. It is not a live settlement deployment, and it has made no token offering.',
    ],
  },
  {
    slug: 'fractal-engine',
    name: 'Fractal Engine',
    role: 'Organizational memory',
    status: 'in alpha',
    summary:
      'A local-first spatial engine. Alpha means the README and the limits are the same document.',
    href: '/fractal-engine',
    repo: 'https://github.com/Escherbridge/fractalengine',
    now: [
      'Bevy editor, embedded SurrealDB, BLAKE3-addressed assets, .hexon packages, iroh replication, and BI egress toward DuckDB, GeoParquet, or Power BI.',
      'Rhai and WASM plugins in sandboxes. The desktop starts the host and loads no packages until they are admitted. The relay does not host plugins.',
      'The extension platform and the portal surface merged to main on 9 November 2026. The project is still pre-1.0.',
    ],
    next: [
      'Building, because it is a known hole: legacy operation-log signature fields are zeros. Do not treat that log as an integrity guarantee yet.',
      'The README’s in-progress editor work is implemented and waiting on in-app verification. That is not the same as done.',
    ],
    later: [
      'Exploring: a macOS build and a signed release. Current packages are unsigned alpha builds, and there is no macOS build.',
      'Exploring: the road and path builder the README still lists as planned.',
    ],
  },
  {
    slug: 'elevate-impact',
    name: 'Elevate Impact',
    role: 'Research enablement',
    status: 'shipped',
    summary:
      'The research module is live with the sickle cell community. The pipe into the four layers is not.',
    href: '/elevate-impact',
    repo: 'https://github.com/ElevateImpact/elevate-impact-realtime',
    now: [
      'Live in production with the sickle cell community. Patients join as co-designers, never as subjects. Design lives on the platform. Execution does not.',
      'The site page carries the September 2026 figures: 7 courses, 80 lessons in 3 languages, 1,185 trials analysed, 3,696 centres mapped, 7,374 rare diseases catalogued, 390+ API operations across 121 data models. Minority Business Enterprise certified.',
      'A public realtime repository exists (a SignalR hub). The other Elevate Impact repositories were not readable when this page was written, so they are not described here.',
    ],
    next: [
      'Building: the connection to AMP, NEOS, AZOA, and Fractal Engine. The site says that flow is planned, not live.',
    ],
    later: [
      'Exploring: any field past the sickle cell deployment. The page does not claim one.',
    ],
  },
  {
    slug: 'overseasgenai',
    name: 'OVERSEASGENAI',
    role: 'Venture shipyard',
    status: 'building',
    summary:
      'Named on the site as the venture shipyard. This page does not invent a product changelog the site does not have.',
    href: 'https://overseasgenai.com/',
    now: [
      'The site calls it an agentic venture shipyard: idea, grilled, modelled, built, shipped, judged. Seven waves, each ending in an honest check. The partnership with Escherbridge is named.',
    ],
    next: [
      'No next milestone is stated in the public site copy. This column stays empty on purpose.',
    ],
    later: [
      'Exploring: anything past the seven-wave description. If it is not on the site, it is not on this roadmap.',
    ],
  },
  {
    slug: 'opqpwr',
    name: 'OPQPWR',
    role: 'Physical layer',
    status: 'exploring',
    summary:
      'The named path to hardware a site can own. Not a running deployment.',
    href: 'https://opqpwr.com/',
    now: [
      'Named as the on-prem infrastructure partner. The site describes field-deployable racks for power, compute, storage, cooling, and communications.',
      'The same pages say this is a starting partnership. No on-prem deployment of the stack is claimed as running.',
    ],
    next: [
      'There is no scheduled install on this page. A starting partnership is not a rack in a room.',
    ],
    later: [
      'Exploring: the stack on hardware a community owns, in places where the cloud is thin. That is the reason the partner is named. It is not a date.',
    ],
  },
];

export function getRoadmapLayer(slug: string): RoadmapLayer | undefined {
  return roadmapLayers.find((layer) => layer.slug === slug);
}
