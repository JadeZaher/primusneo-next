import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Agriculture & Food Systems — Industries',
  description: 'Close the $170B smallholder credit gap, cut post-harvest loss, and ship EUDR-compliant provenance from a single governed twin of every plot, batch, and contract.',
  alternates: { canonical: '/industries/agriculture' },
  openGraph: {
    title: 'Agriculture & Food Systems | PrimusNeo',
    description: 'Banking, provenance, and yield — on one field-to-fork model.',
    url: '/industries/agriculture',
    type: 'website',
  },
};

const stats = [
  { value: '$12T', label: 'Hidden costs of global agrifood [FAO SOFA 2024]' },
  { value: '13.2%', label: 'Post-harvest food loss [FAO]' },
  { value: '$170B', label: 'Annual smallholder financing gap [FAO / CSIS]' },
  { value: '8-10%', label: 'Share of global GHG from food loss [FAO]' },
];

const challenges = [
  {
    title: 'Smallholder Fragmentation',
    description: 'Smallholders produce ~35% of food yet remain outside formal finance, certification, and digital markets, leaving a $170B annual credit gap.',
    metric: '$170B',
    metricLabel: 'smallholder credit gap [FAO]',
  },
  {
    title: 'Post-Harvest Loss',
    description: '13.2% of food is lost between farm and retail, and an additional 19% wasted downstream — together driving 8-10% of global GHG.',
    metric: '13.2%',
    metricLabel: 'post-harvest loss [FAO]',
  },
  {
    title: 'Provenance & ESG Trust Gap',
    description: 'Buyers, regulators (EUDR, CSRD) and consumers cannot verify deforestation-free, fair-labor, or carbon claims across fragmented supply layers.',
    metric: '$12T',
    metricLabel: 'hidden agrifood costs [FAO SOFA 2024]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Field-to-Fork Twin', description: 'AMP + Fractal map plots, yields, and cold-chain telemetry into one model that buyers, co-ops, and lenders all read from.' },
  { eyebrow: 'Capital', title: 'Bankable Smallholder Identity', description: 'OASIS + NEOS give a smallholder co-op a verifiable production history that closes the credit gap for the first time.' },
  { eyebrow: 'Trust', title: 'Verifiable Provenance', description: 'Fractal + OASIS issue tamper-evident EUDR / fair-labor / carbon attestations down to the plot and batch.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Plot-level digital twins fusing satellite, sensor, and equipment telemetry — replacing scattered GIS, FMS, and clipboard records.' },
  { title: 'NEOS Governance', description: 'Programmatic co-op payouts, input pre-financing, and offtake contracts that release on verified twin events (planting, harvest, delivery).' },
  { title: 'OASIS Identity', description: 'Persistent farmer / plot / batch identity that travels with the produce through aggregator, processor, exporter, and retailer.' },
  { title: 'Fractal Engine', description: 'Yield forecasting, climate risk, GPP (gross primary productivity) and supply-chain emissions modeling for buyers and insurers.' },
];

const useCase = {
  title: 'EUDR-Compliant Origin Network',
  description: 'A coffee or cocoa exporter onboards 50,000 smallholders onto PrimusNeo. Each plot is mapped, each harvest signed, each shipment carries a verifiable deforestation-free passport — unlocking EU market access and ~$170B of latent smallholder finance.',
  outcomes: [
    'Plot-level EUDR / CSRD compliance, audit-ready',
    'Smallholder credit history bankable by lenders',
    '13.2% post-harvest loss attacked with cold-chain twin',
    'Premium pricing for verified provenance batches',
  ],
};

const sources = [
  { org: 'FAO', year: '2024', title: 'State of Food and Agriculture 2024 (SOFA)', href: 'https://sdg.iisd.org/news/sofa-2024-exposes-usd-12-trillion-in-true-costs-of-global-agrifood-systems/' },
  { org: 'FAO', year: '2024', title: 'SDG Indicator 12.3.1 — Global food losses', href: 'https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/' },
  { org: 'FAO', year: '2024', title: 'Tackling food loss and waste', href: 'https://www.fao.org/newsroom/detail/tackling-food-loss-and-waste-from-the-farm-to-the-table-and-beyond/en' },
  { org: 'CSIS', year: '2024', title: 'Access to Finance for Smallholder Farmers', href: 'https://www.csis.org/analysis/access-finance-smallholder-farmers' },
  { org: 'Our World in Data', year: '2023', title: 'Smallholder food production', href: 'https://ourworldindata.org/smallholder-food-production' },
  { org: 'Bellemare et al. (SSRN)', year: '2012', title: 'Smallholder Participation in Agricultural Value Chains', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1733942' },
  { org: 'Searchinger (Princeton / WRI)', year: 'ongoing', title: 'Creating a Sustainable Food Future', href: 'https://www.wri.org/profile/tim-searchinger' },
];

export default function AgricultureIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Agriculture & Food Systems"
      title="Banking, provenance, and yield — on one field-to-fork model."
      description="Close the $170B smallholder credit gap, cut post-harvest loss, and ship EUDR-compliant provenance from a single governed twin of every plot, batch, and contract."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to agrifood team"
    >
      <ContrarianInsight attribution="PrimusNeo — Agriculture Brief">
        Agriculture&rsquo;s productivity ceiling isn&rsquo;t agronomic — it&rsquo;s coordination. The smallholders feeding a third of the planet are the world&rsquo;s largest unbanked, unverified production network. Whoever gives them identity wins the next farm bill.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
