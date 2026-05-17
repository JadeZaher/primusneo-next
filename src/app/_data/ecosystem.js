export const partnerLogos = {
  escherbridge: '/images/partners/escherbridge-logo.svg',
  omnione: '/images/partners/omnione-logo.webp',
  oasis: '/images/partners/oasis-logo.png',
  amp: 'https://www.plan-systems.org/wp-content/uploads/2020/08/PLAN_Logo_600px.png',
  ampArchitecture: '/images/partners/amp-architecture.jpg',
  ampNetwork: '/images/partners/amp-network.jpg',
  ampSpatialArchitecture: '/images/partners/amp-spatial-architecture.jpg',
};

export const platformLayers = [
  {
    eyebrow: 'Layer 01',
    title: 'AMP (Art and Media Platform)',
    partner: 'Spatial OS and community networks',
    body: 'Offline-capable, privacy-oriented spatial collaboration, PLAN 3D interfaces, and community OS workflows. Can be integrated standalone or with the full stack.',
  },
  {
    eyebrow: 'Layer 02',
    title: 'NEOS Governance',
    partner: 'Backend governance ecosystem — OmniOne',
    body: 'Council formation, decision rights, contribution accounting, project charters, and holonic organization via the NEOS ecosystem. A modular component for teams needing durable coordination.',
  },
  {
    eyebrow: 'Layer 03',
    title: 'OASIS Web4',
    partner: 'Universal interoperability fabric',
    body: 'One API across providers, chains, storage systems, identity, avatars, and reputation. Provides the modular interoperability backbone for the ecosystem.',
  },
  {
    eyebrow: 'Layer 04',
    title: 'Fractal Engine',
    partner: 'Intelligence layer — Escherbridge',
    body: 'A specialized intelligence and analytics solution developed by Escherbridge. Built to ingest and share data through AMP’s realtime operational systems.',
  },
];

// Interactive showcase: one explorable slide per layer with a direct link to
// its dedicated page. Copy here is deliberately punchier and outcome-oriented
// (not the dense reference text in `platformLayers`) so the slider reads as a
// guided tour rather than a duplicate of the architecture overview above it.
export const layerShowcase = [
  {
    tab: 'AMP',
    eyebrow: 'Layer 01 · Spatial OS',
    title: 'AMP — the operational ground layer',
    summary:
      'Offline-capable, privacy-first spatial collaboration. PLAN 3D interfaces and community OS workflows that run the real-world environment.',
    href: '/amp',
    image: '/images/newassets/ep03-architecture-frame.png',
    status: 'Spatial_OS_Online',
    accent: 'emerald',
  },
  {
    tab: 'NEOS',
    eyebrow: 'Layer 02 · Governance',
    title: 'NEOS — durable coordination & decision rights',
    summary:
      'Councils, charters, contribution accounting, and holonic structure via the NEOS ecosystem. Governance defined before complexity arrives.',
    href: '/governance-platform',
    image: '/images/newassets/ep05-sovereign-frame.png',
    status: 'Governance_Engaged',
    accent: 'cyan',
  },
  {
    tab: 'OASIS',
    eyebrow: 'Layer 03 · Interoperability',
    title: 'OASIS Web4 — one API across everything',
    summary:
      'A universal fabric across providers, chains, storage, identity, and reputation. The modular backbone that keeps the stack interoperable.',
    href: '/oasis',
    image: '/images/newassets/ep04-deployment-frame.png',
    status: 'Fabric_Connected',
    accent: 'violet',
  },
  {
    tab: 'Fractal Engine',
    eyebrow: 'Layer 04 · Intelligence',
    title: 'Fractal Engine — telemetry into durable insight',
    summary:
      'The intelligence and analytics layer by Escherbridge. Turns raw operational telemetry into historical archives and actionable signals.',
    href: '/fractal-engine',
    image: '/images/newassets/00-hero-transmission.png',
    status: 'Intelligence_Active',
    accent: 'amber',
  },
];

export const ecosystemPartners = [
  {
    name: 'AMP',
    href: 'https://plan-systems.org/',
    image: partnerLogos.amp,
    role: 'Spatial OS and full-stack delivery',
    body: 'AMP contributes privacy-first spatial collaboration and full-stack delivery capability. Their tools provide the operational environment for peer-to-peer community networks.',
  },
  {
    name: 'OmniOne / NEOS',
    href: 'https://www.greenearthvision.org/omnione-1',
    image: partnerLogos.omnione,
    role: 'Governance and full-stack delivery',
    body: 'OmniOne provides the NEOS governance ecosystem and can deliver complete solutions. Their E.T.H.O.S. methodology supports contribution-oriented organizations and regenerative communities.',
  },
  {
    name: 'OASIS Web4',
    href: 'https://oasisweb4.com/',
    image: partnerLogos.oasis,
    role: 'Interoperability and full-stack delivery',
    body: 'OASIS provides the universal interoperability layer and can lead full-stack delivery. They abstract complexity across dozens of blockchain and cloud providers.',
  },
  {
    name: 'Escherbridge',
    href: 'https://escherbridge.com/',
    image: partnerLogos.escherbridge,
    role: 'Integration support and engine development',
    body: 'Escherbridge focuses on integration support and the development of Fractal Engine. They provide technical stewardship to help partners and projects connect the modular layers of the ecosystem.',
  },
];

export const outcomePillars = [
  'Spatial OS workflows',
  'NEOS backend governance',
  'OASIS Web4 interoperability',
  'Hexon (v1.0.0) file standard',
  'WASM extension ecosystem',
  'Fractal Engine intelligence',
  'P2P community tooling',
  'Asset-backed fractionalization',
];
