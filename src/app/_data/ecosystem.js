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
    tag: 'SPATIAL OS',
    summary: 'Offline-capable, privacy-first spatial collaboration on the ground.',
    href: '/amp',
  },
  {
    index: 'L—02',
    name: 'NEOS',
    tag: 'GOVERNANCE',
    summary: 'Decision rights, councils, and contribution accounting that outlive teams.',
    href: '/governance-platform',
  },
  {
    index: 'L—03',
    name: 'AZOA',
    tag: 'FEDERATION RAILS',
    summary: 'Identity, consent, and durable quests settling value across chain and fiat rails.',
    href: '/azoa',
  },
  {
    index: 'L—04',
    name: 'Fractal Engine',
    tag: 'INTELLIGENCE',
    summary: 'Field telemetry turned into durable, shareable insight.',
    href: '/fractal-engine',
  },
];

export const platformLayers = [
  {
    eyebrow: 'Layer 01',
    title: 'AMP (Art and Media Platform)',
    partner: 'Spatial OS and community networks',
    body: 'Offline-capable, privacy-first spatial collaboration on the ground — PLAN 3D interfaces and community OS workflows. Integrates standalone or with the full stack.',
  },
  {
    eyebrow: 'Layer 02',
    title: 'NEOS Governance',
    partner: 'Backend governance ecosystem — OmniOne',
    body: 'Decision rights, councils, contribution accounting, project charters, and holonic organization that outlive the teams that define them.',
  },
  {
    eyebrow: 'Layer 03',
    title: 'AZOA (Autonomous Zones of Action)',
    partner: 'Federation rails — workflows & settlement',
    body: 'Self-sovereign identity and consent, durable quest workflows, and settlement rails across blockchain and fiat — the structured seam that moves value through the stack, with SurrealDB as its sole data engine.',
  },
  {
    eyebrow: 'Layer 04',
    title: 'Fractal Engine',
    partner: 'Intelligence layer — Escherbridge',
    body: 'Field telemetry turned into durable, shareable insight. Built by Escherbridge to ingest and share data through AMP’s realtime operational systems.',
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
];

export const ecosystemPartners = [
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
