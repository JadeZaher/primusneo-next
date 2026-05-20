import React from 'react';
import { SectionHeader, GradientButton, InsightCard, MetricCard, DreadShape, ChallengeCard } from '../_components/marketing';

export const metadata = {
  title: 'Solutions — Federated Operational Infrastructure',
  description: 'Proof over promises. PrimusNeo is the coordination layer for real-world operational ecosystems, resolving structural fragmentation across ten critical sectors.',
};

const solutions = [
  {
    id: 'real-estate',
    title: 'Real Estate & Property',
    description: 'Resolve the $1.8T data crisis in construction with spatial digital twins and governed ownership.',
    metric: '$1.85T',
    metricLabel: 'Annual Data Cost [Construction Week]',
    href: '/solutions/real-estate'
  },
  {
    id: 'smart-infrastructure',
    title: 'Smart Infrastructure',
    description: 'Bridge the $15T global investment gap with predictive resource optimization and public-private coordination.',
    metric: '$15T',
    metricLabel: 'Investment Gap [WEF]',
    href: '/solutions/smart-infrastructure'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    description: 'Solve the 94% visibility gap with real-time spatial tracking and governed multi-party logic.',
    metric: '94%',
    metricLabel: 'Visibility Gap [GEP]',
    href: '/solutions/supply-chain'
  },
  {
    id: 'public-governance',
    title: 'Public Governance',
    description: 'Close the 31% efficiency gap in public spending with transparent, citizen-led resource allocation.',
    metric: '31%',
    metricLabel: 'Efficiency Gap [IMF]',
    href: '/solutions/public-governance'
  },
  {
    id: 'web3-governance',
    title: 'Web3 & DAO Governance',
    description: 'Mitigate whale dominance and voter apathy with quadratic logic and delegated accountability.',
    metric: '17%',
    metricLabel: 'Avg. Participation [Snapshot]',
    href: '/solutions/web3-governance'
  },
  {
    id: 'ai-intelligence',
    title: 'AI & Spatial Intelligence',
    description: 'Break through $1B training barriers and data silos with distributed physical AI simulations.',
    metric: '68%',
    metricLabel: 'Silo Concern [World Labs]',
    href: '/solutions/ai-intelligence'
  },
  {
    id: 'community-coops',
    title: 'Community & Cooperatives',
    description: 'Platforming next-generation technologies through creator-centric operational infrastructure.',
    metric: 'ACTIVE',
    metricLabel: 'Deployment: Tie Town [TX]',
    href: '/solutions/community-coops'
  },
  {
    id: 'impact-investing',
    title: 'Impact Investing',
    description: 'Verify real-world outcomes with immutable spatial trails and automated ESG reporting.',
    metric: 'VERIFIED',
    metricLabel: 'Proof Standard',
    href: '/solutions/impact-investing'
  },
  {
    id: 'institutional-investment',
    title: 'Institutional Capital',
    description: 'Access high-fidelity data and governed liquidity for large-scale real-world asset portfolios.',
    metric: 'LIQUID',
    metricLabel: 'Asset Framework',
    href: '/solutions/institutional-investment'
  },
  {
    id: 'developer-ecosystems',
    title: 'Developer Ecosystems',
    description: 'Build high-scale coordination apps with the modular PrimusNeo stack: AMP, NEOS, and OASIS.',
    metric: 'MODULAR',
    metricLabel: 'Architecture',
    href: '/solutions/developer-ecosystems'
  }
];

const industryChallenges = [
  {
    title: 'The Data Crisis',
    description: 'Bad data and fragmented systems cost the construction and real estate industry trillions. Digital twins remain disconnected from actual operations.',
    metric: '$1.85T',
    metricLabel: 'Annual Cost [Construction Week]'
  },
  {
    title: 'The Investment Gap',
    description: 'Global infrastructure faces a massive funding deficit. Capital stays on the sidelines because operational transparency is insufficient.',
    metric: '$15T',
    metricLabel: 'Funding Deficit [WEF]'
  },
  {
    title: 'The Visibility Gap',
    description: 'Most supply chains lack real-time visibility into multi-party operations, leading to systemic fragility and waste.',
    metric: '94%',
    metricLabel: 'Visibility Gap [GEP]'
  },
  {
    title: 'The Governance Gap',
    description: 'Public and private governance systems are failing to adapt to complex, high-speed operational requirements.',
    metric: '31%',
    metricLabel: 'Efficiency Gap [IMF]'
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* Hero Section: Visionary Hook */}
      <section className="relative isolate overflow-hidden px-4 py-32 md:py-64 border-b border-white/5">
        <DreadShape volume={1} id="01" className="absolute left-[5%] top-[20%] opacity-15 rotate-12" size={120} />
        <DreadShape volume={5} id="04" className="absolute right-[10%] bottom-[20%] opacity-10 -rotate-12" size={100} />

        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-700" />
        </div>

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Operational Reality Check
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-glow-white">
            THE ERA OF <br />
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] uppercase">Promises</span> <br />
            <span className="text-white">IS OVER.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Fragmented systems and disconnected governance are no longer sustainable. PrimusNeo provides the coordination layer for real-world operational ecosystems.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="#challenges">View the Challenges</GradientButton>
            <GradientButton href="/contact" variant="secondary">Partner With Us</GradientButton>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="px-4 py-32 relative overflow-hidden border-b border-white/5">
        <DreadShape volume={1} id="05" className="absolute -left-10 top-0 opacity-10 rotate-45" size={140} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader 
            eyebrow="The Problem" 
            title="Structural Fragmentation"
            className="text-left mx-0 mb-20"
          >
            Before we talk about solutions, we must address the systemic failures in current infrastructure management.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryChallenges.map((challenge) => (
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

      {/* Solutions Grid */}
      <section id="verticals" className="px-4 py-32 relative overflow-hidden">
        <DreadShape volume={5} id="10" className="absolute -left-10 top-1/4 opacity-10" size={140} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader 
            eyebrow="The Sectors" 
            title="Industry-Specific Implementation"
            className="text-left mx-0 mb-20"
          >
            We deploy the full stack—AMP, NEOS, OASIS, and Fractal Engine—to solve high-stakes coordination problems in these core industries.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {solutions.map((solution) => (
              <a 
                key={solution.id} 
                href={solution.href}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-500/30 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="text-4xl md:text-6xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500 tracking-tighter mb-4">
                      {solution.metric}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/60">
                      {solution.metricLabel}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
                    {solution.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 group-hover:underline">View Strategy</span>
                    <div className="h-px flex-grow bg-white/10 group-hover:bg-emerald-500/20 transition-colors" />
                  </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[64px] group-hover:bg-emerald-500/10 transition-colors duration-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section: Case Studies/Efficacy */}
      <section className="px-4 py-20 relative overflow-hidden">
        <DreadShape volume={1} id="12" className="absolute -right-20 top-1/2 opacity-5" size={250} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader eyebrow="The Proof" title="Real-World Coordination at Scale">
            PrimusNeo is currently being deployed across specialized builder pilots, validating the interoperability of our core stack.
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Active Pilot</h4>
              <h3 className="text-2xl font-bold mb-4">Builders Commons</h3>
              <p className="text-gray-400 leading-relaxed">The flagship proving ground for federated spatial OS and NEOS governance logic in a high-growth builder environment.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Infrastructure</h4>
              <h3 className="text-2xl font-bold mb-4">Regenerative Campuses</h3>
              <p className="text-gray-400 leading-relaxed">Coordinating off-grid energy, water, and community assets through shared digital twin telemetry and local-first AI.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">Capital</h4>
              <h3 className="text-2xl font-bold mb-4">Fractal Portfolios</h3>
              <p className="text-gray-400 leading-relaxed">Enabling institutional-grade transparency for distributed physical assets through governed historical archives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-32 bg-emerald-500/5 relative overflow-hidden">
        <DreadShape volume={5} id="18" className="absolute left-0 top-0 opacity-10" size={200} />
        <DreadShape volume={1} id="15" className="absolute right-0 bottom-0 opacity-10" size={250} />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-glow-white">
            DEPLOY THE <span className="text-emerald-400">STACK</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are building a smart city, a decentralized supply chain, or a regenerative community, PrimusNeo provides the coordination backbone you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="/contact">Request Integration</GradientButton>
            <GradientButton href="/one-pager" variant="secondary">Download Specs</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}