import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Technology & Software — Industries',
  description: '78% of orgs ship AI; under 10% scale it. PrimusNeo unifies your services, models, datasets, and contributors into one accountable operating layer.',
  alternates: { canonical: '/industries/technology' },
  openGraph: {
    title: 'Technology & Software | PrimusNeo',
    description: 'The governed coordination plane for AI-native software organizations.',
    url: '/industries/technology',
    type: 'website',
  },
};

const stats = [
  { value: '78%', label: 'Organizations now using AI [Stanford HAI]' },
  { value: '<10%', label: 'Have fully scaled AI in any function [Stanford HAI]' },
  { value: '$252B', label: 'Global private AI investment 2024 [Stanford HAI]' },
  { value: '8h+/wk', label: 'Developer time lost to coordination [Atlassian DX]' },
];

const challenges = [
  {
    title: 'Ecosystem Fragmentation',
    description: '78% of orgs use AI but <10% have scaled it in any function; model, data, and tool stacks splinter faster than coordination layers can keep up.',
    metric: '<10%',
    metricLabel: 'scaled in any function [Stanford HAI]',
  },
  {
    title: 'Developer Coordination Drag',
    description: '69% of developers lose 8+ hours/week to environment, doc, and tool friction — the largest hidden cost in modern software orgs.',
    metric: '8h+/wk',
    metricLabel: 'lost to coordination [Atlassian]',
  },
  {
    title: 'Trust, Provenance & Attribution Gap',
    description: 'Training data, model lineage, and contributor attribution have no verifiable layer — blocking enterprise adoption, EU AI Act compliance, and creator economics.',
    metric: '$252B',
    metricLabel: 'AI investment exposed to provenance risk [Stanford HAI]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Coordination Plane for AI + Devs', description: 'AMP + Fractal give platform teams one map of services, agents, and data flows beneath the LLM and IDE layer.' },
  { eyebrow: 'Capital', title: 'Attributable Contribution Accounting', description: 'NEOS + OASIS record who contributed what (code, data, agent run) and route value accordingly.' },
  { eyebrow: 'Trust', title: 'Verifiable Model & Data Lineage', description: 'OASIS + Fractal sign training-set composition, model versions, and inference events for EU AI Act and customer audits.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Architecture twin: services, agents, data pipelines, and infra rendered as one coordinated map — the &ldquo;platform engineering&rdquo; missing layer.' },
  { title: 'NEOS Governance', description: 'Programmable release gates, contribution accounting, and revenue/credit splits for code, datasets, and agent runs.' },
  { title: 'OASIS Identity', description: 'Verifiable identity for every contributor, model, dataset, and agent — solving attribution, AI Act lineage, and supply-chain attestation in one move.' },
  { title: 'Fractal Engine', description: 'Cost, latency, quality, and reliability analytics across multi-model, multi-cloud, multi-team deployments.' },
];

const useCase = {
  title: 'Governed AI & Developer Platform',
  description: 'A scale-up running 30+ services across multiple clouds and model providers unifies them on PrimusNeo. NEOS gates releases and routes contribution credit; OASIS signs every model, dataset, and contributor; Fractal surfaces real cost and quality across the stack — turning platform engineering into a governed asset.',
  outcomes: [
    'AI Act-ready model and data lineage by default',
    'Contributor attribution and credit at code/data granularity',
    'Real cost/quality view across multi-cloud, multi-model',
    '8h/dev/week reclaimed from coordination friction',
  ],
};

const sources = [
  { org: 'Stanford HAI', year: '2025', title: 'AI Index Report 2025', href: 'https://hai.stanford.edu/ai-index' },
  { org: 'Atlassian / DX (primary)', year: '2024', title: 'State of Developer Experience 2024 (n=2,100+)', href: 'https://www.atlassian.com/blog/developer/developer-experience-report-2024' },
  { org: 'Varoufakis', year: '2023', title: 'Technofeudalism: What Killed Capitalism (overview)', href: 'https://chrishedges.substack.com/p/technofeudalism-what-killed-capitalism' },
  { org: 'Carlota Perez', year: 'ongoing', title: 'Technological Revolutions and Financial Capital — installation vs deployment', href: 'https://carlotaperez.org/publications/' },
  { org: 'Weyl, Ohlhaver & Buterin', year: '2022', title: 'Decentralized Society: Soulbound Tokens (DeSoc)', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763' },
  { org: 'VentureBeat', year: '2025', title: 'Stanford&rsquo;s AI Index: 5 critical insights', href: 'https://venturebeat.com/ai/stanfords-ai-index-5-critical-insights-reshaping-enterprise-tech-strategy' },
];

export default function TechnologyIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Technology & Software"
      title="The governed coordination plane for AI-native software organizations."
      description="78% of orgs ship AI; under 10% scale it. PrimusNeo unifies your services, models, datasets, and contributors into one accountable operating layer."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Brief our platform team"
    >
      <ContrarianInsight attribution="PrimusNeo — Tech Industry Brief">
        The bottleneck in software stopped being compute and stopped being talent — it&rsquo;s now <em>coordination</em>. The companies that ship will be those that treat their architecture, their contributors, and their AI agents as governed first-class citizens of one operating system.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
