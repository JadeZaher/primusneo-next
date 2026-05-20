import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Manufacturing & Industrial Production — Industries',
  description: '70% of Industry 4.0 pilots never scale because the IT/OT last mile is unsolved. PrimusNeo gives you the contextualized layer that ties OEE, ESG, and capex to one live model.',
  alternates: { canonical: '/industries/manufacturing' },
  openGraph: {
    title: 'Manufacturing & Industrial Production | PrimusNeo',
    description: 'Escape pilot purgatory. Run your plants on one governed twin tying OEE, ESG, and capex into a single contextualized layer.',
    url: '/industries/manufacturing',
    type: 'website',
  },
};

const stats = [
  { value: '$16.8T', label: 'Global manufacturing value 2024 [UNIDO]' },
  { value: '70%', label: 'Industry 4.0 pilots stuck in purgatory [McKinsey]' },
  { value: '$50B', label: 'Annual unplanned downtime loss [Siemens / industry]' },
  { value: '60-65%', label: 'Average OEE vs 85% world-class [Godlan]' },
];

const challenges = [
  {
    title: 'IT/OT Last-Mile Fragmentation',
    description: 'A typical mid-size plant runs 200+ devices on competing protocols; data never reaches a contextualized layer, so 70% of Industry 4.0 pilots never scale.',
    metric: '70%',
    metricLabel: 'pilots stuck in purgatory [McKinsey]',
  },
  {
    title: 'OEE & Downtime Drag',
    description: 'Average plant OEE sits at 60-65% against a world-class 85% benchmark, with unplanned downtime alone costing global manufacturers ~$50B/yr.',
    metric: '$50B',
    metricLabel: 'annual downtime cost',
  },
  {
    title: 'Supply-Network Trust Gap',
    description: 'Tier-1 OEMs cannot verify upstream provenance, ESG claims, or quality data from tier-2/3 suppliers without manual audits, blocking digital product passport compliance.',
    metric: '$16.8T',
    metricLabel: 'global mfg value at risk [UNIDO]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Plant-Floor to P&L Twin', description: 'AMP + Fractal Engine bridge the IT/OT gap so OEE, energy, and yield roll up to executive dashboards in the same model engineers use to fix a line.' },
  { eyebrow: 'Capital', title: 'Verifiable Capex Cases', description: 'NEOS + Fractal let CFOs underwrite each pilot against on-twin baselines instead of vendor slideware, killing pilot purgatory.' },
  { eyebrow: 'Trust', title: 'Digital Product Passport', description: 'OASIS + NEOS issue cryptographically signed provenance for every batch, satisfying EU DPP, CBAM, and Scope 3 in one feed.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Plant-floor digital twin combining CAD, PLC telemetry, MES events, and worker location — the contextualized data layer Industry 4.0 pilots keep failing to build.' },
  { title: 'NEOS Governance', description: 'Programmable approval flows for change control, MOC, supplier qualification, and shop-floor lockout/tagout — replacing email + spreadsheet audit trails.' },
  { title: 'OASIS Identity', description: 'Cross-tier supplier identity so a casting from a tier-3 forge carries verified mill, ESG, and conflict-mineral attestations into the OEM&rsquo;s MES.' },
  { title: 'Fractal Engine', description: 'Predictive OEE, energy intensity, scrap, and downtime modeling tied to live spatial events, not month-end reports.' },
];

const useCase = {
  title: 'Multi-Plant OEE Governance',
  description: 'A discrete manufacturer with 12 plants unifies MES, PLC, and energy telemetry on PrimusNeo&rsquo;s twin. OEE, scrap, and Scope 3 emissions flow into NEOS-governed capex committees, replacing 8-pilot purgatory with one operating system that scales across the network.',
  outcomes: [
    'IT/OT last-mile resolved across 12 plants',
    'OEE lift visible in the same model used by operators',
    'Digital product passport ready for EU DPP / CBAM',
    'Capex approvals tied to verified twin baselines',
  ],
};

const sources = [
  { org: 'UNIDO', year: '2024', title: 'World Manufacturing Production Q4 2024', href: 'https://stat.unido.org/portal/storage/file/publications/qiip/World_Manufacturing_Production_2024_Q4.pdf' },
  { org: 'McKinsey', year: '2023', title: 'How digital manufacturing can escape pilot purgatory', href: 'https://www.mckinsey.com/capabilities/operations/our-insights/how-digital-manufacturing-can-escape-pilot-purgatory' },
  { org: 'McKinsey', year: '2024', title: 'It&rsquo;s the last IT/OT mile that matters', href: 'https://www.mckinsey.com/capabilities/operations/our-insights/operations-blog/its-the-last-it-ot-mile-that-matters-in-avoiding-industry-40s-pilot-purgatory' },
  { org: 'Siemens (industry)', year: '2024', title: 'Manufacturing downtime statistics 2024', href: 'https://manufacturingleadgeneration.com/manufacturing-downtime-statistics/' },
  { org: 'Godlan', year: '2024', title: 'OEE Benchmarks by Industry', href: 'https://godlan.com/oee-benchmark-industry/' },
  { org: 'Acemoglu & Johnson (MIT)', year: '2023', title: 'Power and Progress — technology, governance, and shared prosperity', href: 'https://shapingwork.mit.edu/power-and-progress/' },
  { org: 'Mazzucato (UCL IIPP)', year: '2021', title: 'Mission Economy — mission-led industrial policy', href: 'https://marianamazzucato.com/books/mission-economy' },
];

export default function ManufacturingIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Manufacturing & Industrial Production"
      title="Escape pilot purgatory. Run your plants on one governed twin."
      description="70% of Industry 4.0 pilots never scale because the IT/OT last mile is unsolved. PrimusNeo gives you the contextualized layer that ties OEE, ESG, and capex to one live model."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Book a plant assessment"
    >
      <ContrarianInsight attribution="PrimusNeo — Manufacturing Brief">
        Industry 4.0 didn&rsquo;t fail — it just hit a coordination wall no point solution can solve. The next $1T of manufacturing value will accrue to whoever owns the <em>contextualized</em> data layer, not the sensors.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
