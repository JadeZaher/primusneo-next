export const partnerLogos = {
  escherbridge: '/images/partners/escherbridge-logo.svg',
  omnione: '/images/partners/omnione-logo.webp',
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
    tag: 'OPERATIONAL RUNTIME',
    summary: 'Spatial OS for the site. Public kit: amp.SDK. Live at Tie Town [TX].',
    href: '/amp',
  },
  {
    index: 'L—02',
    name: 'NEOS',
    tag: 'AGREEMENTS & PERMISSIONS',
    summary: 'Written agreements, scoped authority, and decisions that outlive the chat.',
    href: '/governance-platform',
  },
  {
    index: 'L—03',
    name: 'AZOA',
    tag: 'IDENTITY, CONSENT, SETTLEMENT',
    summary: 'Open engine. Consent is in. Real-value bridges stay off until review.',
    href: '/azoa',
  },
  {
    index: 'L—04',
    name: 'Fractal Engine',
    tag: 'ORGANIZATIONAL MEMORY',
    summary: 'Local-first spatial analytics. Alpha, with the limits written down.',
    href: '/fractal-engine',
  },
  {
    index: 'L—05',
    name: 'Elevate Impact',
    tag: 'RESEARCH ENABLEMENT',
    summary: 'Live with the sickle cell community. Study design with the people affected at the table.',
    href: '/elevate-impact',
  },
];

export const platformLayers = [
  {
    eyebrow: 'Layer 01',
    title: 'AMP — Operational Runtime / Spatial OS',
    partner: 'Spatial OS and community networks',
    body: 'Offline-capable, privacy-first spatial collaboration on the ground — PLAN 3D interfaces and community OS workflows. Integrates standalone or with the full stack.',
  },
  {
    eyebrow: 'Layer 02',
    title: 'NEOS Governance',
    partner: 'Backend governance ecosystem — OmniOne',
    body: 'Decision rights, councils, contribution accounting, project charters, and holonic organization that outlive the teams that define them.',
    sites: [{ href: 'https://neos.primusneo.com', label: 'NEOS, agreements and permissions' }],
  },
  {
    eyebrow: 'Layer 03',
    title: 'AZOA (Autonomous Zones of Action)',
    partner: 'Federation rails — workflows & settlement',
    body: 'Self-sovereign identity and consent, durable quest workflows, and settlement rails across blockchain and fiat — the structured seam that moves value through the stack, with SurrealDB as its sole data engine. ArdaNova is a designed consumer of this layer, not a live deployment, and it has made no token offering.',
    sites: [
      { href: 'https://azoa.ardanova.com', label: 'AZOA, identity, consent, and settlement' },
      { href: 'https://ardanova.com', label: 'ArdaNova, a designed consumer of this layer' },
    ],
  },
  {
    eyebrow: 'Layer 04',
    title: 'Fractal Engine',
    partner: 'Intelligence layer — Escherbridge',
    body: 'Field telemetry turned into durable, shareable insight. Built by Escherbridge to ingest and share data through AMP’s realtime operational systems.',
  },
  {
    eyebrow: 'Layer 05',
    title: 'Elevate Impact',
    partner: 'Research enablement — Elevate Impact',
    body: 'Turns research questions into finished, expert-checked study designs, with the community at the table. Live in production with the sickle cell community; links to the four layers are in build.',
  },
];

// Interactive showcase: one explorable slide per layer with a direct link to
// its dedicated page. Visuals are purpose-built SVG schematics per layer
// (public/images/stack/) in the design-system language.
export const layerShowcase = [
  {
    tab: 'AMP',
    eyebrow: 'Layer 01 · Spatial OS',
    title: 'AMP — the operational ground layer',
    summary:
      'Offline-capable, privacy-first spatial collaboration. PLAN 3D interfaces and community OS workflows that run the real-world environment.',
    href: '/amp',
    image: '/images/stack/amp-spatial-os.svg',
    status: 'Spatial_OS_Online',
  },
  {
    tab: 'NEOS',
    eyebrow: 'Layer 02 · Governance',
    title: 'NEOS — durable coordination & decision rights',
    summary:
      'Councils, charters, contribution accounting, and holonic structure via the NEOS ecosystem. Governance defined before complexity arrives.',
    href: '/governance-platform',
    image: '/images/stack/neos-governance.svg',
    status: 'Governance_Engaged',
  },
  {
    tab: 'AZOA',
    eyebrow: 'Layer 03 · Federation Rails',
    title: 'AZOA — structured value in motion',
    summary:
      'Durable, auditable financial workflows: self-sovereign identity and consent, quest graphs, and chain + fiat settlement behind one uniform interface.',
    href: '/azoa',
    image: '/images/stack/azoa.svg',
    status: 'Rails_Connected',
  },
  {
    tab: 'Fractal Engine',
    eyebrow: 'Layer 04 · Intelligence',
    title: 'Fractal Engine — telemetry into durable insight',
    summary:
      'The intelligence and analytics layer by Escherbridge. Turns raw operational telemetry into historical archives and actionable signals.',
    href: '/fractal-engine',
    image: '/images/stack/fractal-engine.svg',
    status: 'Intelligence_Active',
  },
  {
    tab: 'Elevate Impact',
    eyebrow: 'Layer 05 · Research',
    title: 'Elevate Impact — questions into study designs',
    summary:
      'Research enablement that turns a question into a finished, expert-checked study design. Live with the sickle cell community, where patients join as co-designers, never as subjects. Links to the four layers are in build.',
    href: '/elevate-impact',
    image: '/images/stack/elevate-impact.svg',
    status: 'Research_Live',
  },
];

export const ecosystemPartners = [
  {
    name: 'Elevate Impact',
    href: 'https://elevateimpact.com/',
    role: 'Research enablement · Stack module',
    body: 'The research partner. Live with the sickle cell community: patients join as co-designers, never as subjects. LinkedIn carries the public record; the four-layer connection is in build.',
    linkedin: 'https://www.linkedin.com/company/elevateimpact',
  },
  {
    name: 'PLAN Systems',
    href: 'https://plan-systems.org/',
    image: partnerLogos.amp,
    role: 'Spatial OS · Delivery',
    body: 'Privacy-first spatial collaboration and the operational environment for P2P community networks.',
  },
  {
    name: 'OmniOne / NEOS',
    href: 'https://www.greenearthvision.org/omnione-1',
    image: partnerLogos.omnione,
    role: 'Governance · Delivery',
    body: 'The NEOS governance ecosystem and E.T.H.O.S. methodology for contribution-oriented organizations.',
  },
  {
    name: 'AZOA',
    href: '/azoa',
    image: partnerLogos.azoa,
    role: 'Workflows · Settlement Rails',
    body: 'Open-source engine for structured financial workflows — identity, consent, durable quests, and chain + fiat settlement.',
  },
  {
    name: 'Escherbridge',
    href: 'https://escherbridge.com/',
    image: partnerLogos.escherbridge,
    role: 'Intelligence · Integration',
    body: 'Developer of Fractal Engine and technical steward connecting the modular layers.',
  },
  // No logo assets for the entries below; consumers must render a wordmark when `image` is absent.
  {
    name: 'OVERSEASGENAI',
    href: 'https://overseasgenai.com/',
    role: 'Venture shipyard',
    body: 'Agentic venture shipyard: idea, grilled, modelled, built, shipped, judged. Led by Ahmad Darwish in partnership with Escherbridge; seven waves, each ending in an honest check.',
  },
  {
    name: 'OPQPWR',
    href: 'https://opqpwr.com/',
    role: 'Physical layer · On-prem',
    body: 'Opaque Power builds field-deployable racks for power, AI compute, storage, cooling and communications. The starting partner on the path to running the stack on owned, bare-metal hardware.',
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
