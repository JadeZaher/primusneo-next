import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Robotics & Autonomous Systems — Industries',
  description: 'The coordination protocol for every robot that shares physical space — multi-vendor fleets, signed decisions, programmable right-of-way. PrimusNeo is the spatial layer above ROS, Isaac, and every OEM stack.',
  alternates: { canonical: '/industries/robotics' },
  openGraph: {
    title: 'Robotics & Autonomous Systems | PrimusNeo',
    description: 'The coordination protocol for every robot that shares physical space.',
    url: '/industries/robotics',
    type: 'website',
  },
};

const stats = [
  { value: '0', label: 'Universal interoperability standard [EU JRC]' },
  { value: '91%', label: 'Waymo crash reduction vs human [Waymo Safety Impact]' },
  { value: '71M+', label: 'Rider-only autonomous miles logged [Waymo]' },
  { value: '$74.6B→$130B', label: 'Robotics integration market 2024-2030 [Grand View]' },
];

const challenges = [
  {
    title: 'Protocol Fragmentation',
    description: 'Every major OEM (ABB, Kuka, Comau, Fanuc) runs proprietary languages and stacks; multi-vendor fleets can&rsquo;t coordinate without expensive bespoke integration.',
    metric: '0',
    metricLabel: 'universal interop standard [EU JRC]',
  },
  {
    title: 'Spatial Coordination Gap',
    description: 'Autonomous fleets in warehouses, sites, and cities have no shared map of static infrastructure, dynamic agents, or right-of-way rules — leading to deadlocks and recall events.',
    metric: '71M+',
    metricLabel: 'miles, still gated by jurisdiction',
  },
  {
    title: 'Accountability & Trust Gap',
    description: 'When a robot fails, no tamper-evident record links cause, decision, software version, and operator — slowing insurance, regulation, and public trust.',
    metric: '$74.6B→$130B',
    metricLabel: 'integration market 2024-2030 [Grand View]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Vendor-Neutral Fleet Coordination', description: 'AMP + Fractal give multi-OEM fleets a shared spatial layer above ROS, NVIDIA Isaac, and proprietary stacks.' },
  { eyebrow: 'Capital', title: 'Insurable Autonomy', description: 'NEOS + OASIS produce signed decision trails that underwriters, regulators, and operators can read post-incident.' },
  { eyebrow: 'Trust', title: 'Right-of-Way Governance', description: 'NEOS programs shared rules of the road (warehouse aisle, hospital corridor, sidewalk) that every vendor&rsquo;s robot must respect.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Vendor-neutral 3D map of every aisle, dock, and corridor that ABB arms, AMRs, drones, and autonomous trucks coordinate against in real time.' },
  { title: 'NEOS Governance', description: 'Programmable right-of-way and priority rules (e.g., human-first, emergency-yield) that cross every fleet on a site.' },
  { title: 'OASIS Identity', description: 'Each robot, model, and firmware version carries a verifiable identity — so liability, recall, and audit trace to the exact agent that acted.' },
  { title: 'Fractal Engine', description: 'Behavioral prediction and incident simulation across mixed-autonomy fleets, including failure-mode analysis for insurance and regulators.' },
];

const useCase = {
  title: 'Mixed-Fleet Site Operating System',
  description: 'A warehouse operator running AMRs from three vendors, ABB arms, and Boston Dynamics quadrupeds unifies them on PrimusNeo&rsquo;s spatial OS. NEOS enforces right-of-way; OASIS signs every decision; Fractal predicts deadlocks before they happen.',
  outcomes: [
    'Vendor lock-in eliminated across robot fleet',
    'Insurable, signed decision trail per agent',
    'Programmable site rules (safety, priority, zones)',
    'Faster onboarding of new robot SKUs',
  ],
};

const sources = [
  { org: 'EU JRC', year: '2024', title: 'Robotics & Autonomous Systems — Rolling Plan 2024', href: 'https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/robotics-and-autonomous-systems-rp-2024' },
  { org: 'Waymo', year: '2025', title: 'Safety Impact (71M+ rider-only miles)', href: 'https://waymo.com/safety/impact/' },
  { org: 'eWeek', year: '2025', title: 'Waymo&rsquo;s Driverless Cars Cut Serious Crashes by 91%', href: 'https://www.eweek.com/news/waymo-driverless-cars-serious-crashes/' },
  { org: 'Grand View Research', year: '2024', title: 'Robotics System Integration Market — $74.6B (2024) → $130.4B (2030)', href: 'https://www.grandviewresearch.com/industry-analysis/robotics-system-integration-market-report' },
  { org: 'Rodney Brooks (MIT / Rethink)', year: '2017', title: 'Seven Deadly Sins of Predicting the Future of AI', href: 'https://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/' },
  { org: 'Missy Cummings (IEEE Spectrum)', year: '2024', title: 'On autonomy safety and governance', href: 'https://spectrum.ieee.org/self-driving-cars/missy-cummings' },
  { org: 'Bradford (Columbia / GovAI)', year: '2024', title: 'The Brussels Effect & AI regulation', href: 'https://www.governance.ai/research-paper/brussels-effect-ai' },
];

export default function RoboticsIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Robotics & Autonomous Systems"
      title="The coordination protocol for every robot that shares physical space."
      description="Multi-vendor fleets, signed decisions, programmable right-of-way. PrimusNeo is the spatial layer above ROS, Isaac, and every OEM stack."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Coordinate a fleet"
    >
      <ContrarianInsight attribution="PrimusNeo — Robotics Brief">
        The robotics industry is repeating PC-era format wars while shipping into shared physical space. The winner won&rsquo;t be a robot maker — it&rsquo;ll be whoever owns the coordination layer between them, the same way TCP/IP ate the proprietary networks.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
