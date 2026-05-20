import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Construction & Built Environment — Industries',
  description: 'Replace the 200-tool capex stack with one governed twin. Reconcile owners, GCs, and subs against a single live model — and finally underwrite progress in real time.',
  alternates: { canonical: '/industries/construction' },
  openGraph: {
    title: 'Construction & Built Environment | PrimusNeo',
    description: 'The coordination layer for the world&rsquo;s largest, most fragmented industry — owners, GCs, and subs on one live twin.',
    url: '/industries/construction',
    type: 'website',
  },
};

const stats = [
  { value: '0.4%', label: 'Annual productivity growth 2000-2024 [McKinsey]' },
  { value: '80%', label: 'Average megaproject budget overrun [McKinsey]' },
  { value: '$12T', label: 'Global construction spend 2024 [Next MSC]' },
  { value: '20mo', label: 'Average megaproject timeline overrun [McKinsey]' },
];

const challenges = [
  {
    title: 'Owner-Contractor-Sub Fragmentation',
    description: 'Capex projects fail at the seams between owners, GCs, specialty subs, and designers, where 200+ proprietary tools never speak.',
    metric: '0.4%',
    metricLabel: 'annual productivity growth [McKinsey]',
  },
  {
    title: 'Cost & Schedule Blowout',
    description: 'Megaprojects routinely deliver 80% over budget and 20 months late because change orders, RFIs, and field telemetry never reconcile to a single source of truth.',
    metric: '80%',
    metricLabel: 'average budget overrun [McKinsey]',
  },
  {
    title: 'Capital & Trust Gap',
    description: 'Owners can&rsquo;t verify what was actually built versus what was paid for, eroding lender confidence and inflating contingency reserves across the $12T sector.',
    metric: '$12T',
    metricLabel: 'annual construction spend [Next MSC]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Site-to-Spec Digital Twin', description: 'AMP + Fractal Engine reconcile BIM, schedule, and live site telemetry so contractors, GCs, and owners share one model of progress.' },
  { eyebrow: 'Capital', title: 'Verifiable Draw Schedules', description: 'NEOS + OASIS turn each milestone into an auditable signature event lenders and JV partners can underwrite against in real time.' },
  { eyebrow: 'Trust', title: 'Contractual Provenance', description: 'OASIS + NEOS anchor every change order, sub-cert, and inspection in a tamper-evident decision trail that survives the project.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Live 3D site maps overlaid with crane telemetry, drone scans, and BIM clash detection — replacing the daily PDF markup cycle GCs still run on.' },
  { title: 'NEOS Governance', description: 'Programmable change-order approval flows, sub-cert workflows, and JV voting rights tied directly to milestone completion on the twin.' },
  { title: 'OASIS Identity', description: 'Persistent identity for every trade, inspector, and asset class, so a welder&rsquo;s qualification or a beam&rsquo;s mill cert travels with the work, not the binder.' },
  { title: 'Fractal Engine', description: 'Predictive cost-to-complete and schedule-risk modeling that surfaces budget blowout 6+ months before a quantity surveyor would catch it.' },
];

const useCase = {
  title: 'Owner-Controlled Megaproject Coordination',
  description: 'A public infrastructure owner replaces a 40-tool capex stack with one PrimusNeo workspace that links design, 50+ sub-contractors, and quarterly draw cycles. Every RFI, change order, and inspection lands on the twin and triggers governed payments — turning the program into an auditable, live financial instrument.',
  outcomes: [
    'Single twin replaces fragmented BIM / ERP / PM stack',
    'NEOS-governed draw releases tied to verified progress',
    'Predictive cost-to-complete cuts contingency draw',
    'Auditable ESG and labor provenance for green-bond reporting',
  ],
};

const sources = [
  { org: 'McKinsey', year: '2024', title: 'The construction productivity imperative', href: 'https://www.mckinsey.com/capabilities/operations/our-insights/the-construction-productivity-imperative' },
  { org: 'McKinsey MGI', year: '2017', title: 'Reinventing construction through a productivity revolution', href: 'https://www.mckinsey.com/capabilities/operations/our-insights/reinventing-construction-through-a-productivity-revolution' },
  { org: 'McKinsey', year: '2020', title: 'The next normal in construction (executive summary)', href: 'https://www.mckinsey.com/~/media/mckinsey/industries/capital%20projects%20and%20infrastructure/our%20insights/the%20next%20normal%20in%20construction/executive-summary_the-next-normal-in-construction.pdf' },
  { org: 'Next Move Strategy', year: '2024', title: 'Global Construction Market 2024', href: 'https://www.nextmsc.com/news/construction-market' },
  { org: 'ENR', year: '2024', title: 'Top 400 Contractors: firms feel pinch for profitability', href: 'https://www.enr.com/articles/58690-enrs-2024-top-400-contractors-firms-feel-pinch-for-profitability' },
  { org: 'Flyvbjerg (Oxford / SSRN)', year: '2016', title: 'The Iron Law of Megaprojects — 9 of 10 over budget', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2742088' },
  { org: 'Flyvbjerg (Oxford / arXiv)', year: '2014', title: 'Megaproject management: strategic misrepresentation', href: 'https://arxiv.org/pdf/1409.0003' },
  { org: 'Construction Industry Institute', year: 'ongoing', title: 'Successful Delivery of Mega-Projects (RT-315)', href: 'https://www.construction-institute.org/successful-delivery-of-mega-projects' },
];

export default function ConstructionIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Construction & Built Environment"
      title="The coordination layer for the world&rsquo;s largest, most fragmented industry."
      description="Replace the 200-tool capex stack with one governed twin. Reconcile owners, GCs, and subs against a single live model — and finally underwrite progress in real time."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to capital projects"
    >
      <ContrarianInsight attribution="PrimusNeo — Construction Brief">
        The next decade&rsquo;s winning contractors won&rsquo;t out-build their rivals — they&rsquo;ll out-instrument them. The $12T construction industry is about to be re-priced by whichever capital pool can underwrite progress in real time instead of trusting monthly PDFs.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
