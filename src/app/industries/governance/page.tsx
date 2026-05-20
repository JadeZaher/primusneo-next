import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Governance & Public Sector — Industries',
  description: 'Half of citizens perceive widespread corruption. PrimusNeo gives governments tamper-evident procurement, portable citizen identity, and programmable participation — at city, regional, and national scale.',
  alternates: { canonical: '/industries/governance' },
  openGraph: {
    title: 'Governance & Public Sector | PrimusNeo',
    description: 'Restore trust with verifiable spend, identity, and participation.',
    url: '/industries/governance',
    type: 'website',
  },
};

const stats = [
  { value: '44%', label: 'Low or no trust in national government [OECD]' },
  { value: '54%', label: 'Perceive widespread corruption [OECD]' },
  { value: '38%', label: 'Lobbying safeguards in place [OECD]' },
  { value: '22% vs 69%', label: 'Trust gap if citizens feel unheard [OECD]' },
];

const challenges = [
  {
    title: 'Agency & Data Fragmentation',
    description: 'Citizen identity, benefits, permits, and records are scattered across hundreds of departmental systems; service experience is the #1 trust driver and the #1 failure point.',
    metric: '44%',
    metricLabel: 'low/no trust [OECD]',
  },
  {
    title: 'Procurement & Decision Opacity',
    description: '38% of lobbying safeguards are in place; capital projects, grants, and regulatory decisions lack tamper-evident provenance.',
    metric: '54%',
    metricLabel: 'perceive widespread corruption [OECD]',
  },
  {
    title: 'Participation Gap',
    description: 'Citizens who feel unheard trust government at 22% vs 69% who feel heard; consultation tools remain post-hoc and unverifiable.',
    metric: '22% vs 69%',
    metricLabel: 'voice-driven trust gap [OECD]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Whole-of-Government Service Twin', description: 'AMP + Fractal unify the spatial and service layers — from permits to public works — into a single citizen-facing model.' },
  { eyebrow: 'Capital', title: 'Auditable Public Spend', description: 'NEOS + OASIS sign every procurement decision, milestone payment, and grant disbursement against verifiable outcomes.' },
  { eyebrow: 'Trust', title: 'Verifiable Participation', description: 'NEOS deploys programmable consultation, participatory budgeting, and digital voting backed by OASIS identity.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Whole-of-city / whole-of-region twin tying assets, permits, transit, and emergency services into one operational picture.' },
  { title: 'NEOS Governance', description: 'Programmable procurement, grant, and citizen-vote workflows with tamper-evident decision trails — auditor-ready by design.' },
  { title: 'OASIS Identity', description: 'Citizen-owned, portable digital identity that works across agencies without giving any one of them a central honeypot.' },
  { title: 'Fractal Engine', description: 'Outcome analytics (service delivery, equity, ESG) tied directly to spending and policy decisions — closing the policy-to-evidence loop.' },
];

const useCase = {
  title: 'Verifiable Public Spend & Participation',
  description: 'A regional government routes all infrastructure procurement and citizen consultation through PrimusNeo. Every decision is signed in NEOS, every citizen identity lives in OASIS, every project milestone reconciles to AMP — turning the budget cycle into an audit-ready, participatory ledger.',
  outcomes: [
    'Procurement trails auditor- and ombudsman-ready',
    'Citizen identity portable across all agencies',
    'Participatory budgeting with verifiable counts',
    'Outcomes tied to spend in one analytics layer',
  ],
};

const sources = [
  { org: 'OECD', year: '2024', title: 'Survey on Drivers of Trust in Public Institutions 2024', href: 'https://www.oecd.org/en/publications/oecd-survey-on-drivers-of-trust-in-public-institutions-2024-results_9a20554b-en.html' },
  { org: 'OECD', year: '2024', title: 'Society at a Glance 2024 — Trust in public institutions', href: 'https://www.oecd.org/en/publications/society-at-a-glance-2024_918d8db3-en/full-report/trust-in-public-institutions_f4af755c.html' },
  { org: 'OECD', year: '2025', title: 'Government at a Glance 2025', href: 'https://www.oecd.org/en/publications/2025/06/government-at-a-glance-2025_70e14c6c/full-report/drivers-of-trust-in-public-institutions_fe2b7742.html' },
  { org: 'OECD', year: '2024', title: 'Public Integrity Indicators', href: 'https://oecd-public-integrity-indicators.org/' },
  { org: 'WEF', year: '2024', title: 'Can Digital Public Infrastructure help guide the transformation?', href: 'https://www.weforum.org/stories/2024/12/can-digital-public-infrastructure-help-guide-the-transformation/' },
  { org: 'Audrey Tang (Oxford DPIR)', year: '2024', title: 'Taiwan&rsquo;s digital democracy — vTaiwan & verifiable participation', href: 'https://www.politics.ox.ac.uk/event/frontier-democracy-audrey-tang-taiwans-digital-democracy-collaborative-civic-technologies-and' },
  { org: 'World Bank ID4D', year: 'ongoing', title: 'Inclusive digital identity for 550M+ people', href: 'https://id4d.worldbank.org/' },
  { org: 'Flyvbjerg (Oxford / arXiv)', year: '2014', title: 'Strategic misrepresentation in public capital projects', href: 'https://arxiv.org/pdf/1409.0003' },
];

export default function GovernanceIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Governance & Public Sector"
      title="Restore trust with verifiable spend, identity, and participation."
      description="Half of citizens perceive widespread corruption. PrimusNeo gives governments tamper-evident procurement, portable citizen identity, and programmable participation — at city, regional, and national scale."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Brief our public team"
    >
      <ContrarianInsight attribution="PrimusNeo — Public Sector Brief">
        Public trust isn&rsquo;t restored by communications strategy — it&rsquo;s restored by <em>verifiable receipts</em>. Governments that can prove every dollar and decision in real time will pull ahead of those still issuing PDF transparency reports.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
