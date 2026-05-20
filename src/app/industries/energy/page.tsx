import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Energy & Utilities — Industries',
  description: '3,000 GW are stuck in queues while DERs proliferate outside utility visibility. PrimusNeo gives operators one twin of every asset, every electron, every claim.',
  alternates: { canonical: '/industries/energy' },
  openGraph: {
    title: 'Energy & Utilities | PrimusNeo',
    description: 'The operating system for grid-edge coordination and verified green.',
    url: '/industries/energy',
    type: 'website',
  },
};

const stats = [
  { value: '$3T+', label: 'Global energy investment 2024 [IEA]' },
  { value: '$400B', label: 'Annual grid spend vs $1T on generation [IEA]' },
  { value: '3,000GW', label: 'Renewables stuck in grid queues [IEA]' },
  { value: '2030', label: 'Connection date for new UK queue entrants [IEA]' },
];

const challenges = [
  {
    title: 'Generation-Grid Imbalance',
    description: 'Capital pours into renewables at $1T/yr while grid spend lags at $400B, leaving 3,000 GW of projects waiting for connection.',
    metric: '3,000GW',
    metricLabel: 'stuck in queue [IEA]',
  },
  {
    title: 'DER & Prosumer Coordination Gap',
    description: 'Millions of rooftop solar, EVs, batteries, and flexible loads operate outside utility visibility; OPEX of dispatch and balancing balloons.',
    metric: '$400B',
    metricLabel: 'annual grid spend, half of need [IEA]',
  },
  {
    title: 'Stakeholder & ESG Trust Gap',
    description: 'Communities, regulators, and green-bond holders cannot independently verify emissions, curtailment, or community-benefit claims.',
    metric: '$3T+',
    metricLabel: 'annual energy investment at stake [IEA]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Grid-Edge Twin', description: 'AMP + Fractal model substations, feeders, and DERs in one live spatial layer so operators see the network as it actually behaves.' },
  { eyebrow: 'Capital', title: 'Bankable Energy Provenance', description: 'NEOS + OASIS issue verifiable green attributes, REC trails, and CBAM data that survive due diligence.' },
  { eyebrow: 'Trust', title: 'Community-Governed Assets', description: 'NEOS programs community-benefit and dispatch rules into co-owned solar, wind, and storage, replacing opaque PPAs.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Live twin of substations, feeders, lines, and behind-the-meter assets — replacing GIS + SCADA + OMS silos with one model.' },
  { title: 'NEOS Governance', description: 'Programmable dispatch priority, curtailment compensation, and community-benefit rules for distributed and co-owned assets.' },
  { title: 'OASIS Identity', description: 'Per-asset and per-MWh identity so RECs, CBAM, and Scope 2 / Scope 3 claims can be cryptographically verified.' },
  { title: 'Fractal Engine', description: 'Load, curtailment, and OPEX forecasting that ties weather, market price, and asset health into one signal for ops and capital.' },
];

const useCase = {
  title: 'Grid-Edge Coordination & Verified Green',
  description: 'A utility unifies substation telemetry, DER inverters, and EV chargers on PrimusNeo&rsquo;s twin. NEOS dispatches flexibility under verified community-benefit rules; OASIS issues per-MWh provenance that satisfies CBAM, RE100 buyers, and green-bond covenants.',
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
  { org: 'IEA', year: '2024', title: 'Renewable energy projects in connection queues 2024', href: 'https://www.iea.org/data-and-statistics/charts/capacity-of-renewable-energy-projects-in-connection-queues-2024' },
  { org: 'IEA', year: '2024', title: 'Renewables 2024 (executive summary)', href: 'https://www.iea.org/reports/renewables-2024/executive-summary' },
  { org: 'Lawrence Berkeley National Lab', year: '2025', title: 'Queued Up 2025 — US interconnection-queue characteristics', href: 'https://emp.lbl.gov/publications/queued-2025-edition-characteristics' },
  { org: 'Vaclav Smil (Science / AAAS)', year: '2018', title: 'On the slow reality of energy transitions', href: 'https://www.science.org/content/article/meet-vaclav-smil-man-who-has-quietly-shaped-how-world-thinks-about-energy' },
  { org: 'Christophers (Uppsala / Verso)', year: '2020', title: 'Rentier Capitalism — extraction in infrastructure assets', href: 'https://www.versobooks.com/products/871-rentier-capitalism' },
];

export default function EnergyIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Energy & Utilities"
      title="The operating system for grid-edge coordination and verified green."
      description="3,000 GW are stuck in queues while DERs proliferate outside utility visibility. PrimusNeo gives operators one twin of every asset, every electron, every claim."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to utility team"
    >
      <ContrarianInsight attribution="PrimusNeo — Energy Brief">
        The energy transition is no longer a generation problem — it&rsquo;s a coordination problem. Whichever utility can govern millions of distributed agents in real time will quietly out-earn every gigawatt-scale developer waiting in a 2030 queue.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
