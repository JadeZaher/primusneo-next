import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Healthcare & Life Sciences — Industries',
  description: '$528B vanishes annually into US admin waste. PrimusNeo collapses the gap between care, consent, and capital onto one governed clinical twin.',
  alternates: { canonical: '/industries/healthcare' },
  openGraph: {
    title: 'Healthcare & Life Sciences | PrimusNeo',
    description: 'Portable identity, real-time care, outcome-based capital.',
    url: '/industries/healthcare',
    type: 'website',
  },
};

const stats = [
  { value: '$9.8T', label: 'Global health spend, 10.3% of GDP [WEF]' },
  { value: '$30B+', label: 'Annual US loss to data fragmentation [West Health / industry]' },
  { value: '$528B', label: 'US excess admin cost = 1.8% of GDP [Health Affairs]' },
  { value: '~25%', label: 'US healthcare spend is wasteful [PGPF]' },
];

const challenges = [
  {
    title: 'EHR & Device Fragmentation',
    description: 'Patient data, device telemetry, and clinical workflows live in incompatible vaults; the US alone bleeds $30B+/yr to data fragmentation and ~$528B to excess admin.',
    metric: '$30B+',
    metricLabel: 'annual US loss to data fragmentation',
  },
  {
    title: 'Care Coordination Inefficiency',
    description: '~25% of US healthcare spend is wasteful; duplicated tests, missed handoffs, and re-admissions are the leading line items.',
    metric: '$528B',
    metricLabel: 'US excess admin [Health Affairs]',
  },
  {
    title: 'Consent, Trust & Research Gap',
    description: 'Patients can&rsquo;t port their data, researchers can&rsquo;t verify cohort provenance, and pharma trials still rely on closed CRO silos.',
    metric: '$9.8T',
    metricLabel: 'global spend exposed to trust gap [WEF]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Cross-System Care Twin', description: 'AMP + Fractal unify EHR, device telemetry, and care-team location into a single operational picture per patient and per site.' },
  { eyebrow: 'Capital', title: 'Outcome-Tied Reimbursement', description: 'NEOS + Fractal program value-based payment that releases on verified outcomes, not claims forms.' },
  { eyebrow: 'Trust', title: 'Patient-Owned Health Identity', description: 'OASIS gives patients portable, consented, cryptographically verifiable identity across providers and researchers.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Twin of hospital floors, beds, devices, and care teams — combined with the patient journey through the system.' },
  { title: 'NEOS Governance', description: 'Consent workflows, value-based payment rules, IRB approvals, and clinical-trial governance as programmable contracts.' },
  { title: 'OASIS Identity', description: 'Patient-owned health identity portable across providers, payers, and trials — with selective disclosure built in.' },
  { title: 'Fractal Engine', description: 'Population-health, readmission, and outcome analytics drawn from live spatial + clinical signals, not retrospective claims.' },
];

const useCase = {
  title: 'Patient-Owned Health Identity + Value-Based Care',
  description: 'A health system rolls out PrimusNeo to unify EHRs, device telemetry, and patient consent. Patients carry their identity in OASIS; providers operate against a real-time care twin; payers settle value-based contracts in NEOS — attacking the $528B admin tax at its root.',
  outcomes: [
    'Portable patient identity & consent across providers',
    'Real-time care twin replaces fragmented EHR view',
    'Value-based contracts settle on verified outcomes',
    'Audit-ready trial and research data lineage',
  ],
};

const sources = [
  { org: 'World Economic Forum', year: '2024', title: 'Health spending takes up 10% of global GDP', href: 'https://www.weforum.org/stories/2024/08/healthcare-costs-digital-tech/' },
  { org: 'Health Affairs', year: '2023', title: 'The Role of Administrative Waste in Excess US Health Spending', href: 'https://www.healthaffairs.org/content/briefs/role-administrative-waste-excess-us-health-spending' },
  { org: 'Peter G. Peterson Foundation', year: '2024', title: 'Almost 25% of Healthcare Spending is Considered Wasteful', href: 'https://www.pgpf.org/article/almost-25-percent-of-healthcare-spending-is-considered-wasteful-heres-why/' },
  { org: 'Commonwealth Fund', year: '2024', title: 'Mirror, Mirror 2024 — Health System Performance', href: 'https://www.commonwealthfund.org/publications/fund-reports/2024/sep/mirror-mirror-2024' },
  { org: 'West Health Institute (primary)', year: '2013', title: 'The Value of Medical Device Interoperability ($30B+/yr)', href: 'https://www.westhealth.org/press-release/new-analysis-by-west-health-institute-finds-medical-device-interoperability-could-save-more-than-30-billion-a-year/' },
  { org: 'Eric Topol (Scripps Research)', year: '2019', title: 'Deep Medicine — decentralized, patient-owned health data', href: 'https://drerictopol.com/portfolio/deep-medicine/' },
];

export default function HealthcareIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Healthcare & Life Sciences"
      title="Portable identity, real-time care, outcome-based capital."
      description="$528B vanishes annually into US admin waste. PrimusNeo collapses the gap between care, consent, and capital onto one governed clinical twin."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to clinical team"
    >
      <ContrarianInsight attribution="PrimusNeo — Healthcare Brief">
        Healthcare&rsquo;s productivity crisis isn&rsquo;t a clinical problem — it&rsquo;s an <em>identity</em> problem. The system that puts patients in control of their own portable health graph will quietly out-perform every vertically integrated incumbent.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
