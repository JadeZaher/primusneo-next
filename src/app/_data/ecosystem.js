export const partnerLogos = {
  escherbridge: '/images/partners/escherbridge-logo.svg',
  azoa: '/images/partners/azoa-logo.png',
  amp: 'https://www.plan-systems.org/wp-content/uploads/2020/08/PLAN_Logo_600px.png',
  ampArchitecture: '/images/partners/amp-architecture.jpg',
  ampNetwork: '/images/partners/amp-network.jpg',
  ampSpatialArchitecture: '/images/partners/amp-spatial-architecture.jpg',
};

// Home architecture index — one row per layer, copy kept to a single line.
export const stackIndex = [
  {
    index: 'L—01',
    name: 'AMP',
    tag: 'REMOVING FRICTION',
    summary: 'One shared picture of a site and the work on it, so the crew on the ground and the people off site see the same thing. Tie Town [TX] is the first live site.',
    href: '/amp',
  },
  {
    index: 'L—02',
    name: 'NEOS',
    tag: 'STRUCTURE & DECISION RIGHTS',
    summary: 'Written agreements, clear authority, and decisions that outlive the group chat.',
    href: '/governance-platform',
  },
  {
    index: 'L—03',
    name: 'AZOA',
    tag: 'OVERSIGHT & APPROVALS',
    summary: 'Who agreed to what, and the steps work goes through before anything is paid. Real-money connections stay switched off until they have been reviewed.',
    href: '/azoa',
  },
  {
    index: 'L—04',
    name: 'Fractal Engine',
    tag: 'GENERATING INSIGHT',
    summary: 'Turns what happens on the ground into a record you can learn from. It is early, and the limits are written down.',
    href: '/fractal-engine',
  },
  {
    index: 'L—05',
    name: 'Elevate Impact',
    tag: 'RESEARCH WITH COMMUNITIES',
    summary: 'Live with the sickle cell community. Study design with the people affected at the table.',
    href: '/elevate-impact',
  },
];

export const platformLayers = [
  {
    eyebrow: 'Layer 01',
    title: 'AMP — one picture of the site',
    partner: 'Removing friction on the ground',
    body: 'A shared, private view of a real place and the work happening in it, so the crew on site and the people off site see the same thing. It keeps working when the signal drops, and it runs on its own or alongside the other parts.',
  },
  {
    eyebrow: 'Layer 02',
    title: 'NEOS — who decides, written down',
    partner: 'Decision rights, written down',
    body: 'Who has the authority to decide what, how councils and project charters work, and a fair record of who contributed what. It is written down so it outlasts the people who wrote it.',
    sites: [{ href: 'https://neos.primusneo.com', label: 'NEOS, agreements and decision rights' }],
  },
  {
    eyebrow: 'Layer 03',
    title: 'AZOA (Autonomous Zones of Action)',
    partner: 'Oversight and approvals',
    body: 'Walks each piece of work through its approval steps and keeps a record of who agreed to what, in a form a board can read afterward. Anything that moves real money stays switched off until it has been reviewed. ArdaNova, a workspace for shared work, is designed to run on AZOA. It is not live yet. It has made no token offering.',
    sites: [
      { href: 'https://azoa.ardanova.com', label: 'AZOA, approvals and consent' },
      { href: 'https://ardanova.com', label: 'ArdaNova, designed to run on AZOA' },
    ],
  },
  {
    eyebrow: 'Layer 04',
    title: 'Fractal Engine — what the work is telling you',
    partner: 'Generating insight, built by Escherbridge',
    body: 'Turns the day-to-day record of a site into history you can look back on and early signals worth acting on. Built by Escherbridge to work with AMP. It is early, and the limits are written down.',
  },
  {
    eyebrow: 'Layer 05',
    title: 'Elevate Impact',
    partner: 'Research with the people affected',
    body: 'Turns research questions into finished, expert-checked study designs, with the community at the table. Live in production with the sickle cell community; its connection to the other four parts is still being built.',
  },
];

// Interactive showcase: one explorable slide per layer with a direct link to
// its dedicated page. Visuals are purpose-built SVG schematics per layer
// (public/images/stack/) in the design-system language.
export const layerShowcase = [
  {
    tab: 'AMP',
    eyebrow: 'Part 01 · Friction',
    title: 'AMP — one picture of the site',
    summary:
      'A shared, private view of a real place and the work happening in it. It keeps working when the signal drops, which on a rural site is most afternoons.',
    href: '/amp',
    image: '/images/stack/amp-spatial-os.svg',
    status: 'First live site: Tie Town [TX]',
  },
  {
    tab: 'NEOS',
    eyebrow: 'Part 02 · Structure',
    title: 'NEOS — who decides, written down',
    summary:
      'Councils, charters and a fair record of who contributed what. The rules get written down before the organization is big enough to argue about them.',
    href: '/governance-platform',
    image: '/images/stack/neos-governance.svg',
    status: 'In use',
  },
  {
    tab: 'AZOA',
    eyebrow: 'Part 03 · Oversight',
    title: 'AZOA — approvals you can check later',
    summary:
      'Each step of a piece of work, who approved it and who consented, kept in a record a board can read afterward. Anything involving real money stays off until it has been reviewed.',
    href: '/azoa',
    image: '/images/stack/azoa.svg',
    status: 'Alpha, reviewed before money moves',
  },
  {
    tab: 'Fractal Engine',
    eyebrow: 'Part 04 · Insight',
    title: 'Fractal Engine — what the work is telling you',
    summary:
      'Built by Escherbridge. It turns the day-to-day record of a site into history you can look back on and early signals worth acting on.',
    href: '/fractal-engine',
    image: '/images/stack/fractal-engine.svg',
    status: 'Alpha',
  },
  {
    tab: 'Elevate Impact',
    eyebrow: 'Part 05 · Research',
    title: 'Elevate Impact — questions into study designs',
    summary:
      'Research enablement that turns a question into a finished, expert-checked study design. Live with the sickle cell community, where patients join as co-designers, never as subjects. Its connection to the other four parts is still being built.',
    href: '/elevate-impact',
    image: '/images/stack/elevate-impact.svg',
    status: 'Live',
  },
];

export const ecosystemPartners = [
  {
    name: 'Elevate Impact',
    href: 'https://elevateimpact.com/',
    role: 'Research partner',
    body: 'The research partner. Live with the sickle cell community: patients join as co-designers, never as subjects. LinkedIn carries the public record; the connection to the rest of PrimusNeo is still being built.',
    linkedin: 'https://www.linkedin.com/company/elevateimpact',
  },
  {
    name: 'PLAN Systems',
    href: 'https://plan-systems.org/',
    image: partnerLogos.amp,
    role: 'Shared site view · Delivery',
    body: 'The team behind AMP. They build private, shared views of real places for community networks that run their own sites.',
  },
  {
    name: 'AZOA',
    href: '/azoa',
    image: partnerLogos.azoa,
    role: 'Approvals · Oversight',
    body: 'An open-source engine that walks work through its approval steps and keeps the record of who consented to what.',
  },
  {
    name: 'Escherbridge',
    href: 'https://escherbridge.com/',
    image: partnerLogos.escherbridge,
    role: 'Insight · Engineering',
    body: 'Builds Fractal Engine and does the engineering that makes the parts work together.',
  },
  // No logo assets for the entries below; consumers must render a wordmark when `image` is absent.
  {
    name: 'OVERSEASGENAI',
    href: 'https://overseasgenai.com/',
    role: 'Venture shipyard',
    body: 'A venture shipyard that takes an idea through seven waves, from the first test to a running business, and each wave ends with an honest check. Led by Ahmad Darwish, in partnership with Escherbridge.',
  },
  {
    name: 'OPQPWR',
    href: 'https://opqpwr.com/',
    role: 'Hardware partner',
    body: 'Opaque Power builds equipment racks that bring power, computing, storage, cooling and communications to a site. They are our first partner for running PrimusNeo on hardware the organization owns.',
  },
];

export const outcomePillars = [
  'Spatial OS workflows',
  'NEOS backend governance',
  'AZOA federation rails',
  'Hexon (v1.0.0) file standard',
  'WASM extension ecosystem',
  'Fractal Engine intelligence',
  'P2P community tooling',
  'Asset-backed fractionalization',
];
