import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources, PartnerNote, PARTNERS } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Energy & Utilities — Industries',
  description: 'At least 3,000 GW of renewable projects were waiting on a connection in the IEA’s 2023 count, and that count covered countries with about half of global wind and solar capacity. DERs still proliferate outside utility visibility.',
  alternates: { canonical: '/industries/energy' },
  openGraph: {
    title: 'Energy & Utilities | PrimusNeo',
    description: 'The operating system for grid-edge coordination and verified green.',
    url: '/industries/energy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy & Utilities | PrimusNeo',
    description: 'The operating system for grid-edge coordination and verified green.',
  },
};

const stats = [
  { value: '$3T+', label: 'Global energy investment set to exceed this in 2024, about $2T of it clean [IEA]' },
  { value: '$400B', label: 'Grid spending expected in 2024, out of more than $3T total [IEA]' },
  { value: '≥3,000 GW', label: 'Renewable projects waiting in 2023, at least; 1,500 GW advanced. Queue data covered about half of global wind and solar [IEA]' },
];

const challenges = [
  {
    title: 'Generation-Grid Imbalance',
    description: 'Global energy investment is set to exceed $3 trillion in 2024, with about $2 trillion going to clean energy. Grid spending, after years around $300 billion, is expected to hit about $400 billion in 2024. At least 3,000 GW of renewable projects were waiting on a connection.',
    metric: '≥3,000 GW',
    metricLabel: 'in queues in 2023, at least [IEA]',
  },
  {
    title: 'DER & Prosumer Coordination Gap',
    description: 'Millions of rooftop solar, EVs, batteries, and flexible loads operate outside utility visibility; OPEX of dispatch and balancing balloons.',
    metric: '$400B',
    metricLabel: 'grid spending expected in 2024 [IEA]',
  },
  {
    title: 'Stakeholder & ESG Trust Gap',
    description: 'Communities, regulators, and green-bond holders cannot independently verify emissions, curtailment, or community-benefit claims.',
    metric: '$3T+',
    metricLabel: 'energy investment set to exceed this in 2024 [IEA]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Grid-Edge Twin', description: 'AMP + Fractal model substations, feeders, and DERs in one live spatial layer so operators see the network as it actually behaves.' },
  { eyebrow: 'Capital', title: 'Bankable Energy Provenance', description: 'NEOS + AZOA issue verifiable green attributes, REC trails, and CBAM data that survive due diligence.' },
  { eyebrow: 'Trust', title: 'Community-Governed Assets', description: 'NEOS programs community-benefit and dispatch rules into co-owned solar, wind, and storage, replacing opaque PPAs.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Live twin of substations, feeders, lines, and behind-the-meter assets — replacing GIS + SCADA + OMS silos with one model.' },
  { title: 'NEOS Governance', description: 'Programmable dispatch priority, curtailment compensation, and community-benefit rules for distributed and co-owned assets.' },
  { title: 'AZOA Identity', description: 'Per-asset and per-MWh identity so RECs, CBAM, and Scope 2 / Scope 3 claims can be cryptographically verified.' },
  { title: 'Fractal Engine', description: 'Load, curtailment, and OPEX forecasting that ties weather, market price, and asset health into one signal for ops and capital.' },
];

const useCase = {
  title: 'Grid-Edge Coordination & Verified Green',
  description: 'A utility unifies substation telemetry, DER inverters, and EV chargers on PrimusNeo&rsquo;s twin. NEOS dispatches flexibility under verified community-benefit rules; AZOA issues per-MWh provenance that satisfies CBAM, RE100 buyers, and green-bond covenants.',
  outcomes: [
    'DER visibility from substation to inverter',
    'Cryptographically verifiable green energy attributes',
    'Community-governed dispatch and benefit payouts',
    'Predictive curtailment & OPEX modeling',
  ],
};

const sources = [
  { org: 'IEA', year: '2024', title: 'World Energy Investment 2024', href: 'https://www.iea.org/reports/world-energy-investment-2024/overview-and-key-findings' },
  { org: 'IEA', year: '2023', title: 'Electricity Grids and Secure Energy Transitions', href: 'https://www.iea.org/reports/electricity-grids-and-secure-energy-transitions/executive-summary' },
  { org: 'IEA', year: '2024', title: 'Renewables 2024 (executive summary)', href: 'https://www.iea.org/reports/renewables-2024/executive-summary' },
  { org: 'Lawrence Berkeley National Lab', year: '2025', title: 'Queued Up 2025 — US interconnection-queue characteristics', href: 'https://emp.lbl.gov/publications/queued-2025-edition-characteristics' },
  { org: 'Vaclav Smil (Science / AAAS)', year: '2018', title: 'On the slow reality of energy transitions', href: 'https://www.science.org/content/article/meet-vaclav-smil-man-who-has-quietly-shaped-how-world-thinks-about-energy' },
  { org: 'Christophers (Uppsala / Verso)', year: '2020', title: 'Rentier Capitalism — extraction in infrastructure assets', href: 'https://www.versobooks.com/products/871-rentier-capitalism' },
];

export default function EnergyIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Energy & Utilities"
      title="The queue is not a power plant."
      description="At least 3,000 GW of renewable projects were waiting on a connection in the IEA’s 2023 count, and that count covered countries with about half of global wind and solar capacity. DERs still proliferate outside utility visibility."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      path="/industries/energy"
      sources={sources}
      primaryCtaText="Talk to utility team"
      relatedEssay={{ href: '/blog/the-queue-is-not-a-plan', title: 'The queue is not a plan' }}
    >
      <ContrarianInsight attribution="PrimusNeo — Energy Brief">
        Generation is not the part sitting in the queue. A connection date does not charge anything tonight. The useful question is what the site can see, shed, and record while it waits.
      </ContrarianInsight>
      <PartnerNote partners={[PARTNERS.opqpwr]} />
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
