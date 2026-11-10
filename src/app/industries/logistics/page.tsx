import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Logistics & Mobility — Industries',
  description: 'One coordinated twin for every shipment, fleet, port, and customs lane. UNCTAD counted 12,292 million tons of seaborne trade in 2023. The paperwork still changes hands as if the ship were the record.',
  alternates: { canonical: '/industries/logistics' },
  openGraph: {
    title: 'Logistics & Mobility | PrimusNeo',
    description: 'One coordinated twin for every shipment, fleet, port, and customs lane.',
    url: '/industries/logistics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics & Mobility | PrimusNeo',
    description: 'One coordinated twin for every shipment, fleet, port, and customs lane.',
  },
};

const stats = [
  { value: '12.3B', label: 'Tons of seaborne trade in 2023 (12,292 million tons) [UNCTAD]' },
];

const challenges = [
  {
    title: 'Multi-Party Visibility Fragmentation',
    description: 'Cargo passes shippers, carriers, ports, customs, and 3PLs on disconnected systems; nobody owns the end-to-end picture.',
    metric: '12.3B',
    metricLabel: 'tons of seaborne trade in 2023 [UNCTAD]',
  },
  {
    title: 'Asset & Route OPEX Inefficiency',
    description: 'Red Sea and Panama disruptions in 2024 added distance and delay. Idle assets and empty backhauls compound the bleed. UNCTAD’s tonnage is not a price.',
    metric: '12.3B',
    metricLabel: 'tons in 2023, not a leakage rate [UNCTAD]',
  },
  {
    title: 'Provenance, Customs & ESG Trust Gap',
    description: 'CBAM, deforestation rules, and origin verification still rely on paper and PDFs. That is a habit, not a UNCTAD finding about how much trade moves by sea.',
    metric: 'Paper',
    metricLabel: 'still the customs file',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'End-to-End Movement Twin', description: 'AMP + Fractal map shipments, fleets, ports, and warehouses as one live model that every party reads from.' },
  { eyebrow: 'Capital', title: 'Trade-Finance-Ready Provenance', description: 'NEOS + AZOA sign milestones (loaded, sailed, cleared, delivered) so trade finance, insurance, and CBAM execute on the same evidence.' },
  { eyebrow: 'Trust', title: 'Verifiable Origin & Customs', description: 'AZOA issues tamper-evident origin and chain-of-custody attestations that customs and buyers accept without paperwork.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Live twin of fleets, containers, ports, yards, and last-mile vehicles — with telemetry, ETA, and exception state in one view.' },
  { title: 'NEOS Governance', description: 'Programmable shipment milestones, demurrage/detention rules, and customs handoffs — auto-executing on verified events.' },
  { title: 'AZOA Identity', description: 'Shipper, carrier, broker, and consignee identity (plus per-container identity) — one credential graph across global trade.' },
  { title: 'Fractal Engine', description: 'Predictive ETA, OPEX, emissions, and risk modeling tied to weather, congestion, and geopolitical signals.' },
];

const useCase = {
  title: 'Multi-Party Cargo Twin',
  description: 'A global shipper, its carriers, and its key customers operate on PrimusNeo. Each container has identity in AZOA; each milestone signs to NEOS; AMP shows the real-time movement twin and Fractal predicts exceptions before they hit. Trade finance, CBAM, and insurance execute on the same verified evidence.',
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
  { org: 'WTO', year: '2024', title: 'Global Trade Outlook and Statistics April 2024', href: 'https://www.wto.org/english/res_e/booksp_e/trade_outlook24_e.pdf' },
  { org: 'World Bank', year: '2023', title: 'Logistics Performance Index — country-by-country', href: 'https://lpi.worldbank.org/' },
  { org: 'Levinson (Princeton)', year: '2016', title: 'The Box — economic history of containerization', href: 'https://press.princeton.edu/books/paperback/9780691170817/the-box' },
];

export default function LogisticsIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Logistics & Mobility"
      title="One coordinated twin for every shipment, fleet, port, and customs lane."
      description="Seaborne trade was 12,292 million tons in 2023. That is not a measure of evidence lost at the handoff. PrimusNeo gives shippers, carriers, and customs one live model — and writes finance and compliance against it."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      path="/industries/logistics"
      sources={sources}
      primaryCtaText="Talk to logistics team"
    >
      <ContrarianInsight attribution="PrimusNeo — Logistics Brief">
        Logistics platforms that try to win by digitizing one party will lose. The useful move is the one that convenes <em>all</em> parties around a single twin — and writes finance, customs, and ESG against it.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
