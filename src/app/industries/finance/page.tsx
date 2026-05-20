import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { ContrarianInsight, IndustrySources } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Finance & Investing — Industries',
  description: '$16T of real-world assets are waiting for plumbing that ties the security to the asset. PrimusNeo issues, governs, and reconciles tokenized assets against their own digital twin.',
  alternates: { canonical: '/industries/finance' },
  openGraph: {
    title: 'Finance & Investing | PrimusNeo',
    description: 'Where capital markets meet the real-world asset, live.',
    url: '/industries/finance',
    type: 'website',
  },
};

const stats = [
  { value: '$16T', label: 'RWA tokenization opportunity by 2030 [BCG]' },
  { value: '$600B', label: 'Tokenized fund AUM by 2030 [BCG]' },
  { value: '$100B', label: 'Annual mutual-fund return uplift via tokenization [BCG]' },
  { value: '~10%', label: 'Of global GDP tokenized by 2030 [BCG]' },
];

const challenges = [
  {
    title: 'Asset & Settlement Fragmentation',
    description: 'Capital markets still settle across siloed registries, custodians, and reconciliations; private credit and alternatives remain illiquid and opaque.',
    metric: '$16T',
    metricLabel: 'RWA opportunity locked behind plumbing [BCG]',
  },
  {
    title: 'Cost-of-Capital Friction',
    description: 'Issuance, custody, and distribution drag is ~$100B/yr of avoidable mutual-fund cost alone.',
    metric: '$100B',
    metricLabel: 'fund cost recoverable [BCG]',
  },
  {
    title: 'Identity & Compliance Trust Gap',
    description: 'KYC/AML, accredited-investor checks, and reporting are duplicated across every venue with no portable, verifiable identity.',
    metric: '$600B',
    metricLabel: 'tokenized fund AUM blocked by ID gap [BCG]',
  },
];

const features = [
  { eyebrow: 'Operations', title: 'Asset-Aware Capital Markets', description: 'AMP + Fractal link tokenized claims to the underlying real-world asset (building, plant, plot) and its live performance.' },
  { eyebrow: 'Capital', title: 'Programmable Distributions & Covenants', description: 'NEOS + OASIS execute waterfall, covenant, and dividend rules directly against on-twin performance signals.' },
  { eyebrow: 'Trust', title: 'Portable Investor Identity', description: 'OASIS gives accredited investors and institutions a single, re-usable, cryptographically verifiable KYC.' },
];

const layers = [
  { title: 'AMP Spatial OS', description: 'Real-world asset twin — a building&rsquo;s occupancy, a wind farm&rsquo;s output, a port&rsquo;s throughput — directly readable by the security backing it.' },
  { title: 'NEOS Governance', description: 'Programmable cap tables, covenants, waterfalls, and LP voting that execute on verified asset performance, not quarterly PDFs.' },
  { title: 'OASIS Identity', description: 'Portable investor, issuer, and counterparty identity — one KYC, every venue, with selective disclosure.' },
  { title: 'Fractal Engine', description: 'Cross-asset risk, NAV, and ESG analytics drawn from spatial + financial data — for allocators, auditors, and regulators.' },
];

const useCase = {
  title: 'Institutional RWA Issuance & Servicing',
  description: 'An asset manager issues a tokenized infrastructure fund on PrimusNeo. Each underlying asset has a live twin; NEOS automates distributions on verified performance; OASIS handles investor identity once across all venues — collapsing operational cost into the same model that issues the security.',
  outcomes: [
    'Distribution waterfalls execute on verified twin signals',
    'One KYC across global investor base',
    'Real-time NAV tied to actual asset performance',
    'Audit-ready covenant and ESG reporting',
  ],
};

const sources = [
  { org: 'BCG / ADDX (primary)', year: '2022', title: 'On-Chain Asset Tokenization — primary BCG PDF', href: 'https://web-assets.bcg.com/1e/a2/5b5f2b7e42dfad2cb3113a291222/on-chain-asset-tokenization.pdf' },
  { org: 'BCG / Aptos / Invesco', year: '2025', title: 'Tokenization in Asset Management (via Ledger Insights)', href: 'https://www.ledgerinsights.com/bcg-estimates-tokenization-could-improve-mutual-fund-returns-by-100-billion/' },
  { org: 'Bank for International Settlements', year: '2023', title: 'Annual Economic Report 2023 ch. III: Blueprint for the future monetary system', href: 'https://www.bis.org/publ/arpdf/ar2023e3.htm' },
  { org: 'Minsky / Levy Economics Institute', year: '1992', title: 'The Financial Instability Hypothesis (WP 74)', href: 'https://www.levyinstitute.org/pubs/wp74.pdf' },
  { org: 'Christophers (via Jacobin)', year: '2023', title: 'Our Lives in Their Portfolios — asset-manager society', href: 'https://jacobin.com/2023/05/our-lives-in-their-portfolios-brett-christophers-book-review-asset-manager-society-social-reproduction' },
  { org: 'Statista', year: '2024', title: 'Asset tokenization market size worldwide — 2030 outlook', href: 'https://www.statista.com/statistics/1469146/tokenization-market-size-worldwide/' },
];

export default function FinanceIndustryPage() {
  return (
    <SolutionTemplate
      eyebrow="Finance & Investing"
      title="Where capital markets meet the real-world asset, live."
      description="$16T of RWAs are waiting for plumbing that ties the security to the asset. PrimusNeo issues, governs, and reconciles tokenized assets against their own digital twin."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Talk to capital markets"
    >
      <ContrarianInsight attribution="PrimusNeo — Capital Markets Brief">
        The &ldquo;tokenization&rdquo; thesis isn&rsquo;t about putting old assets on new rails — it&rsquo;s about putting <em>real-world signals</em> directly inside the security. Funds that can underwrite a building or a wind farm against its live twin will out-allocate funds still reading quarterly statements.
      </ContrarianInsight>
      <IndustrySources sources={sources} />
    </SolutionTemplate>
  );
}
