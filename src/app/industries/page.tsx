import React from 'react';
import { SectionHeader, GradientButton, DreadShape, ChallengeCard } from '../_components/marketing';

export const metadata = {
  title: 'Industries — Sector-by-Sector Implementation',
  description: 'Ten industry implementations of the PrimusNeo stack — from construction and manufacturing to robotics, energy, healthcare, and capital markets. Sourced stats, real use cases, deployable today.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries | PrimusNeo Sector Implementations',
    description: 'Ten industries, one coordination layer. AMP, NEOS, OASIS Web4, and Fractal Engine deployed sector by sector.',
    url: '/industries',
    type: 'website',
  },
};

const industries = [
  {
    id: 'construction',
    title: 'Construction & Built Environment',
    description: 'Replace the 200-tool capex stack with one governed twin. Reconcile owners, GCs, and subs against a single live model.',
    metric: '80%',
    metricLabel: 'Megaproject Budget Overrun [McKinsey]',
    href: '/industries/construction',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Production',
    description: '70% of Industry 4.0 pilots never scale. PrimusNeo gives you the contextualized IT/OT layer that ties OEE, ESG, and capex into one model.',
    metric: '70%',
    metricLabel: 'Pilots Stuck in Purgatory [McKinsey]',
    href: '/industries/manufacturing',
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Food Systems',
    description: 'Close the $170B smallholder credit gap, cut post-harvest loss, and ship EUDR-compliant provenance from one field-to-fork twin.',
    metric: '$12T',
    metricLabel: 'Hidden Cost of Global Agrifood [FAO]',
    href: '/industries/agriculture',
  },
  {
    id: 'robotics',
    title: 'Robotics & Autonomous Systems',
    description: 'The coordination protocol for every robot that shares physical space — multi-vendor fleets, signed decisions, programmable right-of-way.',
    metric: '$74.6B→$130B',
    metricLabel: 'Robotics Integration 2024-2030 [Grand View]',
    href: '/industries/robotics',
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'The operating system for grid-edge coordination and verified green. Twin every asset, every electron, every claim.',
    metric: '3,000GW',
    metricLabel: 'Renewables Stuck in Queue [IEA]',
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
    metricLabel: 'RWA Opportunity by 2030 [BCG]',
    href: '/industries/finance',
  },
  {
    id: 'technology',
    title: 'Technology & Software',
    description: 'The governed coordination plane for AI-native organizations. Unify services, models, datasets, and contributors into one accountable layer.',
    metric: '<10%',
    metricLabel: 'Scaled AI in Any Function [Stanford HAI]',
    href: '/industries/technology',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    description: 'Portable identity, real-time care, outcome-based capital. Collapse the gap between care, consent, and capital onto one clinical twin.',
    metric: '$528B',
    metricLabel: 'US Excess Admin Cost [Health Affairs]',
    href: '/industries/healthcare',
  },
  {
    id: 'logistics',
    title: 'Logistics & Mobility',
    description: 'One coordinated twin for every shipment, fleet, port, and customs lane. Write finance, customs, and ESG against the same evidence.',
    metric: '$1.3T',
    metricLabel: 'Annual Supply Chain Loss [Industry]',
    href: '/industries/logistics',
  },
];

const crossCuttingChallenges = [
  {
    title: 'The Coordination Tax',
    description: 'Every industry pays a hidden tax for missing coordination layers — wasted developer hours, blown budgets, stalled pilots, lost trust.',
    metric: '70%',
    metricLabel: 'Industry 4.0 Pilots Fail to Scale [McKinsey]',
  },
  {
    title: 'The Provenance Gap',
    description: 'Regulators want CBAM, EUDR, AI Act, and CSRD. Industries still issue PDFs. The gap between claim and proof has become existential.',
    metric: '$12T',
    metricLabel: 'Hidden Agrifood Costs [FAO SOFA 2024]',
  },
  {
    title: 'The Identity Vacuum',
    description: 'Workers, devices, models, and assets have no portable identity that survives organizational boundaries — so every venue duplicates KYC and audit.',
    metric: '$528B',
    metricLabel: 'US Healthcare Admin Waste [Health Affairs]',
  },
  {
    title: 'The Capital-Real Disconnect',
    description: 'Markets price securities; they don’t price the underlying real-world asset live. The next $16T of RWAs needs plumbing that closes this loop.',
    metric: '$16T',
    metricLabel: 'RWA Tokenization by 2030 [BCG]',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5 px-4 py-32 md:py-64">
        <DreadShape volume={5} id="02" className="absolute left-[5%] top-[18%] opacity-15 rotate-12" size={120} />
        <DreadShape volume={1} id="08" className="absolute right-[8%] bottom-[18%] opacity-10 -rotate-12" size={100} />

        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-700" />
        </div>

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-8">
            Sector-by-Sector Implementation
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-glow-white">
            ONE STACK. <br />
            <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">TEN INDUSTRIES.</span>
            <br />
            <span className="text-white">DEPLOYED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            From construction sites to capital markets, hospital floors to grid edges — PrimusNeo is the coordination layer where every industry’s most expensive failures get solved at the seams.
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
            We surveyed ten sectors with $30T+ in combined annual spend. The names of the failures change. The shape does not.
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
            Ten sectors. Same four-layer stack — AMP, NEOS, OASIS Web4, Fractal Engine — deployed against the failure modes that actually move the P&amp;L.
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
            Every industry implementation composes the same four layers in different proportions — AMP for spatial coordination, NEOS for governance, OASIS Web4 for identity, Fractal Engine for analytics.
          </SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { tag: 'AMP', title: 'Spatial OS', desc: 'Digital twin runtime, telemetry, site coordination.', href: '/amp' },
              { tag: 'NEOS', title: 'Governance', desc: 'Programmable voting, contribution accounting, decision trails.', href: '/governance-platform' },
              { tag: 'OASIS', title: 'Web4 Fabric', desc: 'Identity, ownership records, cross-network state.', href: '/oasis' },
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
