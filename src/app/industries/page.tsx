import React from 'react';
import Link from 'next/link';
import { JsonLd } from '../_components/JsonLd';
import { SectionHeader, GradientButton, DreadShape, ChallengeCard } from '../_components/marketing';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';

export const metadata = {
  title: 'Industries — Sector-by-Sector Implementation',
  description: 'Ten industries, one coordination layer. The figures on these pages are other people’s, with the links left on. We did not invent a market.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries | PrimusNeo',
    description: 'Ten industries, one coordination layer. The figures on these pages are other people’s, with the links left on. We did not invent a market.',
    url: '/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | PrimusNeo',
    description: 'Ten industries, one coordination layer. The figures on these pages are other people’s, with the links left on. We did not invent a market.',
  },
};

const industries = [
  {
    id: 'construction',
    title: 'Construction & Built Environment',
    description: 'Replace the 200-tool capex stack with one governed twin. Reconcile owners, GCs, and subs against a single live model.',
    metric: 'Flat',
    metricLabel: 'Construction productivity for decades [McKinsey, 2015]',
    href: '/industries/construction',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Production',
    description: '70% of Industry 4.0 pilots never scale. PrimusNeo gives you the contextualized IT/OT layer that ties OEE, ESG, and capex into one model.',
    metric: '70%',
    metricLabel: 'Pilots that never scale [McKinsey 2018]',
    href: '/industries/manufacturing',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Food Systems',
    description: 'Close the $170B smallholder credit gap, cut post-harvest loss, and ship EUDR-compliant provenance from one field-to-fork twin.',
    metric: 'About $12T',
    metricLabel: 'Hidden agrifood costs, FAO newsroom on SOFA 2024',
    href: '/industries/agriculture',
  },
  {
    id: 'robotics',
    title: 'Robotics & Autonomous Systems',
    description: 'The coordination protocol for every robot that shares physical space — multi-vendor fleets, signed decisions, programmable right-of-way.',
    metric: '71.1M',
    metricLabel: 'Rider-only miles in Waymo’s safety comparison',
    href: '/industries/robotics',
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'The operating system for grid-edge coordination and verified green. Twin every asset, every electron, every claim.',
    metric: '≥3,000 GW',
    metricLabel: 'Renewables in connection queues, at least, 2023 [IEA]. Data then covered about half of global wind and solar.',
    href: '/industries/energy',
  },
  {
    id: 'governance',
    title: 'Governance & Public Sector',
    description: 'Restore trust with verifiable spend, identity, and participation — at city, regional, and national scale.',
    metric: '54%',
    metricLabel: 'Perceive Widespread Corruption [OECD]',
    href: '/industries/governance',
  },
  {
    id: 'finance',
    title: 'Finance & Investing',
    description: 'Where capital markets meet the real-world asset, live. Issue, govern, and reconcile tokenized assets against their own digital twin.',
    metric: '$16T',
    metricLabel: 'Illiquid-asset tokenization estimate by 2030 [BCG, 2022]',
    href: '/industries/finance',
  },
  {
    id: 'technology',
    title: 'Technology & Software',
    description: 'The governed coordination plane for AI-native organizations. Unify services, models, datasets, and contributors into one accountable layer.',
    metric: '8h+/wk',
    metricLabel: 'Developer time lost to coordination [Atlassian]',
    href: '/industries/technology',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description: 'Portable identity, real-time care, outcome-based capital. Collapse the gap between care, consent, and capital onto one clinical twin.',
    metric: '7.5–15%',
    metricLabel: 'Wasteful US admin share of health spending, or $285–570B in 2019 [Health Affairs]',
    href: '/industries/healthcare',
  },
  {
    id: 'logistics',
    title: 'Logistics & Mobility',
    description: 'One coordinated twin for every shipment, fleet, port, and customs lane. Write finance, customs, and ESG against the same evidence.',
    metric: '12.3B',
    metricLabel: 'Tons of seaborne trade in 2023 [UNCTAD]',
    href: '/industries/logistics',
  },
];

const crossCuttingChallenges = [
  {
    title: 'The Coordination Tax',
    description: 'Every industry pays a hidden tax for missing coordination layers — wasted developer hours, blown budgets, stalled pilots, lost trust.',
    metric: '70%',
    metricLabel: 'Industry 4.0 pilots that never scale [McKinsey 2018]',
  },
  {
    title: 'The Provenance Gap',
    description: 'Regulators want CBAM, EUDR, AI Act, and CSRD. Industries still issue PDFs. The gap between claim and proof has become existential.',
    metric: 'About $12T',
    metricLabel: 'Hidden agrifood costs, FAO on SOFA 2024',
  },
  {
    title: 'The Identity Vacuum',
    description: 'Workers, devices, models, and assets have no portable identity that survives organizational boundaries — so every venue duplicates KYC and audit.',
    metric: '$285–570B',
    metricLabel: 'Wasteful US admin spending in 2019 [Health Affairs]',
  },
  {
    title: 'The Capital-Real Disconnect',
    description: 'Markets price securities; they don’t price the underlying asset live. BCG and ADDX estimated in 2022 that illiquid-asset tokenization could reach $16 trillion by 2030. That is a projection, not a balance sheet.',
    metric: '$16T',
    metricLabel: '2030 illiquid-asset tokenization estimate [BCG]',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <JsonLd
        data={graph(
          collectionNode({
            name: 'Industries',
            description: metadata.description,
            path: '/industries',
            items: industries.map((industry) => ({ name: industry.title, path: industry.href })),
          }),
          breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
          ]),
        )}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5 px-4 py-32 md:py-64">
        <DreadShape volume={5} id="02" className="absolute left-[5%] top-[18%] opacity-15 rotate-12" size={120} />
        <DreadShape volume={1} id="08" className="absolute right-[8%] bottom-[18%] opacity-10 -rotate-12" size={100} />

        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-700" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-left">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <Link href="/" className="hover:text-paper">Home</Link>
            <span className="px-2" aria-hidden="true">/</span>
            <span className="text-mist">Industries</span>
          </nav>
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            Ten industries · one coordination layer
          </div>
          <h1 className="max-w-[12ch] text-[clamp(48px,7vw,104px)] font-medium leading-[0.94] tracking-[-0.04em] text-paper">
            Same failures. Different letterhead.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-mist">
            The figures on these pages are other people’s, with the links left on. We did not invent a market. Operators already buy the pieces. The missing part is the line between them.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="#sectors">Explore the Sectors</GradientButton>
            <GradientButton href="/contact" variant="secondary">Brief Your Team</GradientButton>
          </div>
        </div>
      </section>

      {/* Cross-Cutting Challenges */}
      <section id="challenges" className="px-4 py-32 relative overflow-hidden border-b border-white/5">
        <DreadShape volume={1} id="06" className="absolute -left-10 top-0 opacity-10 rotate-45" size={140} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader
            eyebrow="The Pattern"
            title="Every industry pays a coordination tax."
            className="text-left mx-0 mb-20"
          >
            The names of the failures change. The shape does not. Each figure in the cards is cited on its child page.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crossCuttingChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.title}
                title={challenge.title}
                description={challenge.description}
                metric={challenge.metric}
                metricLabel={challenge.metricLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="sectors" className="px-4 py-32 relative overflow-hidden">
        <DreadShape volume={5} id="09" className="absolute -left-10 top-1/4 opacity-10" size={140} />
        <DreadShape volume={1} id="13" className="absolute -right-10 bottom-1/4 opacity-10" size={140} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader
            eyebrow="The Sectors"
            title="Industry-specific implementation paths"
            className="text-left mx-0 mb-20"
          >
            Ten sectors. The same four layers — AMP, NEOS, AZOA, Fractal Engine — described against the failure modes on the child pages.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={industry.href}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-500/30 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <header className="mb-8">
                    <div className="text-4xl md:text-6xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tighter mb-4">
                      {industry.metric}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/60">
                      {industry.metricLabel}
                    </div>
                  </header>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
                    {industry.description}
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 group-hover:underline">View Implementation</span>
                    <div className="h-px flex-grow bg-white/10 group-hover:bg-emerald-500/20 transition-colors" />
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[64px] group-hover:bg-emerald-500/10 transition-colors duration-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Reminder */}
      <section className="border-y border-white/5 bg-white/[0.015] px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="The Stack" title="Four layers. Ten industries. One operating system.">
            Every industry implementation composes the same four layers in different proportions — AMP for spatial coordination, NEOS for governance, AZOA for identity, Fractal Engine for analytics.
          </SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { tag: 'AMP', title: 'Spatial OS', desc: 'Digital twin runtime, telemetry, site coordination.', href: '/amp' },
              { tag: 'NEOS', title: 'Governance', desc: 'Programmable voting, contribution accounting, decision trails.', href: '/governance-platform' },
              { tag: 'AZOA', title: 'Federation Rails', desc: 'Identity, consent, and value settlement across chain and fiat.', href: '/azoa' },
              { tag: 'Fractal', title: 'Engine', desc: 'Analytics, simulation, ESG and financial signals.', href: '/fractal-engine' },
            ].map((layer) => (
              <a
                key={layer.tag}
                href={layer.href}
                className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.04]"
              >
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-emerald-300/80">{layer.tag}</div>
                <div className="mb-2 text-xl font-bold text-white">{layer.title}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{layer.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-32 bg-emerald-500/5 relative overflow-hidden">
        <DreadShape volume={5} id="18" className="absolute left-0 top-0 opacity-10" size={200} />
        <DreadShape volume={1} id="15" className="absolute right-0 bottom-0 opacity-10" size={250} />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-glow-white">
            DEPLOY THE <span className="text-emerald-400">STACK</span> IN YOUR SECTOR.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you operate a megaproject, a multi-plant network, a smallholder co-op, or a tokenized fund — we will show you a pilot path that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="/contact">Brief Our Team</GradientButton>
            <GradientButton href="/one-pager" variant="secondary">Download the Stack Overview</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
