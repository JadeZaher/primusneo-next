import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Logistics & Mobility — Industries',
  description: 'One coordinated twin for every shipment, fleet, port, and customs lane. Write finance and compliance against the same evidence — across 12.7B tons of global trade.',
  alternates: { canonical: '/industries/logistics' },
  openGraph: {
    title: 'Logistics & Mobility | PrimusNeo',
    description: 'One coordinated twin for every shipment, fleet, port, and customs lane.',
    url: '/industries/logistics',
    type: 'website',
  },
};

const stats = [
  { value: '12.7B', label: 'Tons of seaborne trade 2024 [UNCTAD]' },
  { value: '80%+', label: 'Of global trade by sea volume [UNCTAD]' },
  { value: '10-15%', label: 'Logistics spend as share of GDP [Statista / Market.us]' },
  { value: '$1.3T', label: 'Annual supply-chain inefficiency loss (industry est.)' },
];

const challenges = [
  {
    title: 'Multi-Party Visibility Fragmentation',
    description: 'Cargo passes shippers, carriers, ports, customs, and 3PLs on disconnected systems; nobody owns the end-to-end picture.',
    metric: '80%+',
    metricLabel: 'global trade by sea, fragmented [UNCTAD]',
  },
  {
    title: 'Asset & Route OPEX Inefficiency',
    description: 'Freight rates spiked in 2024 as Red Sea and Panama disruptions added ton-miles; idle assets and empty backhauls compound the bleed.',
    metric: '12.7B',
    metricLabel: 'tons of seaborne trade [UNCTAD]',
  },
  {
    title: 'Provenance, Customs & ESG Trust Gap',
    description: 'CBAM, deforestation rules, and origin verification still rely on paper and PDFs across 80%+ of global trade volume.',
    metric: '10-15%',
    metricLabel: 'logistics as share of GDP [Statista]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'End-to-End Movement Twin', description: 'AMP + Fractal map shipments, fleets, ports, and warehouses as one live model that every party reads from.' },
  { eyebrow: 'Capital', title: 'Trade-Finance-Ready Provenance', description: 'NEOS + OASIS sign milestones (loaded, sailed, cleared, delivered) so trade finance, insurance, and CBAM execute on the same evidence.' },
  { eyebrow: 'Trust', title: 'Verifiable Origin & Customs', description: 'OASIS issues tamper-evident origin and chain-of-custody attestations that customs and buyers accept without paperwork.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Live twin of fleets, containers, ports, yards, and last-mile vehicles — with telemetry, ETA, and exception state in one view.' },
  { title: 'NEOS Governance', description: 'Programmable shipment milestones, demurrage/detention rules, and customs handoffs — auto-executing on verified events.' },
  { title: 'OASIS Identity', description: 'Shipper, carrier, broker, and consignee identity (plus per-container identity) — one credential graph across global trade.' },
  { title: 'Fractal Engine', description: 'Predictive ETA, OPEX, emissions, and risk modeling tied to weather, congestion, and geopolitical signals.' },
];

const useCase = {
  title: 'Multi-Party Cargo Twin',
  description: 'A global shipper, its carriers, and its key customers operate on PrimusNeo. Each container has identity in OASIS; each milestone signs to NEOS; AMP shows the real-time movement twin and Fractal predicts exceptions before they hit. Trade finance, CBAM, and insurance execute on the same verified evidence.',
  outcomes: [
    'End-to-end visibility across all carriers and 3PLs',
    'Trade finance releases on verified milestone events',
    'CBAM and origin compliance baked into shipment record',
    'Predictive exception management cuts demurrage',
  ],
};

const sources = [
  { org: 'UNCTAD', year: '2024', title: 'Review of Maritime Transport 2024', href: 'https://unctad.org/publication/review-maritime-transport-2024' },
  { org: 'UNCTAD', year: '2024', title: 'Maritime trade chapter (RMT 2024, PDF)', href: 'https://unctad.org/system/files/official-document/rmt2024ch1_en.pdf' },
  { org: 'Market.us', year: '2024', title: 'Global Logistics Market 2024', href: 'https://market.us/report/global-logistics-market/' },
  { org: 'Statista', year: '2024', title: 'Logistics industry worldwide — statistics', href: 'https://www.statista.com/topics/5691/logistics-industry-worldwide/' },
  { org: 'WTO', year: '2024', title: 'Global Trade Outlook and Statistics April 2024', href: 'https://www.wto.org/english/res_e/booksp_e/trade_outlook24_e.pdf' },
  { org: 'World Bank', year: '2023', title: 'Logistics Performance Index — country-by-country', href: 'https://lpi.worldbank.org/' },
  { org: 'Levinson (Princeton)', year: '2016', title: 'The Box — economic history of containerization', href: 'https://press.princeton.edu/books/paperback/9780691170817/the-box' },
];

export default function LogisticsIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Logistics & Mobility"
      title="One coordinated twin for every shipment, fleet, port, and customs lane."
      description="80%+ of global trade leaks evidence at every handoff. PrimusNeo gives shippers, carriers, and customs one live model — and writes finance and compliance against it."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to logistics team"
    >
      <ContrarianInsight attribution="PrimusNeo — Logistics Brief">
        Logistics platforms that try to win by digitizing one party will lose. The next trillion comes to whoever convenes <em>all</em> parties around a single twin — and writes finance, customs, and ESG against it.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
