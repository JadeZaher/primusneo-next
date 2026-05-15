import React from 'react';
import { SectionHeader, GradientButton, InsightCard, MetricCard } from '../_components/marketing';

export const metadata = {
  title: 'Industry Solutions | Federated Operational Infrastructure | PrimusNeo',
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

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* Hero Section: Visionary Hook */}
      <section className="relative isolate overflow-hidden px-4 py-32 md:py-64 border-b border-white/5">
        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-700" />
        </div>
        
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Proof Over Promises
          </div>
          <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white md:text-9xl mb-12">
            The Federated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300">Coordination Layer.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-gray-400 md:text-3xl font-light">
            If it is not provable, it has no value. PrimusNeo is the operational fabric 
            restoring truth to real-world infrastructure through federated intelligence.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <GradientButton href="/contact">Initiate Deployment</GradientButton>
            <a href="#problem" className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-emerald-400 transition-colors">
              The Problem Discovery ↓
            </a>
          </div>
        </div>
      </section>

      {/* The Problem: Why Most Systems Fail */}
      <section id="problem" className="px-4 py-32 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
            <div className="sticky top-32">
              <div className="text-sm font-bold uppercase tracking-[0.4em] text-red-500 mb-6">The Crisis</div>
              <h2 className="text-5xl font-bold text-white leading-tight md:text-7xl">
                Most infrastructure <br />
                <span className="text-red-500/80">systems fail.</span>
              </h2>
              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-xl">
                From real estate to public governance, operational data is fragmented, 
                institutional memory is lost, and permissions are opaque. 
                Fragmentation isn't just a hurdle—it's a $1.8T coordination tax.
              </p>
              
              <div className="mt-16 grid grid-cols-2 gap-12">
                <MetricCard value="$1.85T" label="Annual cost of bad data [Construction Week]" />
                <MetricCard value="31%" label="Public spending efficiency gap [IMF]" />
              </div>
            </div>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Fragmented Operational Data</h3>
                <p className="text-gray-400 leading-relaxed">Disconnected IoT systems and siloed analytics create a "blind spot" in real-world operations, making verification impossible.</p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Governance-Operation Gap</h3>
                <p className="text-gray-400 leading-relaxed">Decision-making happens in boardrooms while operations happen in the field. There is no automated bridge between the agreement and the action.</p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Monolithic SaaS Lock-in</h3>
                <p className="text-gray-400 leading-relaxed">Centralized cloud dependencies prevent local-first resiliency and force organizations into rigid, non-interoperable stacks.</p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-red-500/10">
                <h3 className="text-2xl font-bold text-red-400 mb-4">The Result: Stagnation</h3>
                <p className="text-gray-400 leading-relaxed">Infrastructure cannot interoperate. Developers rebuild redundant systems. Real-world state remains difficult to verify.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Federated Architecture */}
      <section className="px-4 py-32 border-y border-white/5">
        <div className="mx-auto max-w-7xl">
          <SectionHeader 
            eyebrow="The Solution" 
            title="Operational Specialty. Unified Coordination."
          >
            PrimusNeo coordinates specialization without fragmentation. 
            One operational source of truth. Many interoperable interfaces.
          </SectionHeader>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-20">
            <div className="group p-8 rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-emerald-500/40">
              <div className="text-3xl font-black text-emerald-500 mb-6">AMP</div>
              <h4 className="text-xl font-bold text-white mb-4">Operational Runtime</h4>
              <p className="text-gray-400">The local-first infrastructure for real-time digital twins and machine coordination.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-emerald-500/40">
              <div className="text-3xl font-black text-emerald-500 mb-6">NEOS</div>
              <h4 className="text-xl font-bold text-white mb-4">Agreements & Permissions</h4>
              <p className="text-gray-400">Programmatic governance that encodes consent and operational rights into every action.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-emerald-500/40">
              <div className="text-3xl font-black text-emerald-500 mb-6">OASIS</div>
              <h4 className="text-xl font-bold text-white mb-4">Incentive Layer</h4>
              <p className="text-gray-400">Cryptographic participation and contribution tracking to align ecosystem stakeholders.</p>
            </div>
            <div className="group p-8 rounded-3xl border border-white/10 bg-black/50 transition-all hover:border-emerald-500/40">
              <div className="text-3xl font-black text-emerald-500 mb-6">FRACTAL</div>
              <h4 className="text-xl font-bold text-white mb-4">P2P Analytics</h4>
              <p className="text-gray-400">Peer-to-peer intelligence and organizational memory that persists across deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Verticals Grid: High Conversion */}
      <section className="px-4 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl font-bold text-white md:text-7xl mb-8">Specialized <br />Deployments.</h2>
            <p className="text-2xl text-gray-400 font-light max-w-3xl">
              PrimusNeo resolves deep-rooted structural friction across ten critical sectors, 
              providing the horizontal operating system for a world that works together.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.id} className="group relative flex flex-col rounded-[2.5rem] border border-white/10 bg-white/[0.01] p-10 transition duration-500 hover:border-emerald-500/40 hover:bg-white/[0.04]">
                <div className="mb-10">
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400/80 mb-3 transition-colors group-hover:text-emerald-300">
                    {item.metricLabel}
                  </div>
                  <div className="text-5xl font-black text-white/25 transition-all duration-700 group-hover:text-emerald-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] origin-left">
                    {item.metric}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
                  {item.description}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={item.href} 
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400 hover:text-white transition-all duration-300"
                  >
                    View Framework 
                    <span className="h-px w-8 bg-emerald-500/50 group-hover:w-12 group-hover:bg-emerald-300 transition-all"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 1: Regenerative Focus */}
      <section className="px-4 py-32 border-t border-white/5 bg-emerald-500/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-6">Market Phase 01</div>
              <h2 className="text-5xl font-bold text-white leading-tight md:text-7xl mb-8">
                The Proving Ground: <br />
                <span className="text-emerald-400">Tie Town [TX].</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                We are validating the PrimusNeo architecture through our first active 
                operational deployment: **Tie Town** in McDade, Texas. As a media 
                and creator house, Tie Town demonstrates the power of federated 
                coordination to platform the next generation of technologies.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl border border-white/5 bg-black/50">
                  <div className="text-4xl font-bold text-white mb-2 text-glow">01</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Pilot</div>
                </div>
                <div className="text-center p-6 rounded-2xl border border-white/5 bg-black/50">
                  <div className="text-4xl font-bold text-white mb-2 text-glow">TX</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Deployment Location</div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] border border-white/10 bg-white/[0.03] p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] -z-10" />
              <h3 className="text-2xl font-bold text-white mb-6">The Reference Architecture</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Verified Operational Intelligence</div>
                    <p className="text-sm text-gray-400 mt-1">Proof of capability through real-world deployment pilots.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Replicable Deployment Templates</div>
                    <p className="text-sm text-gray-400 mt-1">Blueprints for scaling federated coordination to industry levels.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Ecosystem Contributor Network</div>
                    <p className="text-sm text-gray-400 mt-1">Coordinating specialized working groups via shared standards.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Capture: Why PrimusNeo? */}
      <section className="px-4 py-32 border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500 mb-8">The Economic Shift</div>
          <h2 className="text-5xl font-bold text-white md:text-8xl tracking-tight mb-12">
            Sovereign <br />
            <span className="text-emerald-400">Coordination.</span>
          </h2>
          <p className="text-2xl text-gray-300 font-light leading-relaxed mb-16">
            You make all the decisions. We establish just enough structure to 
            ensure your operations are natively interoperable with other ecosystems—scaling 
            impact while maintaining absolute autonomy.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
              <div className="text-lg font-bold text-white mb-2">Setup & Onboarding</div>
              <p className="text-sm text-gray-500">Monetizing deployment origination and strategic alignment.</p>
            </div>
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
              <div className="text-lg font-bold text-white mb-2">Coordination Retainers</div>
              <p className="text-sm text-gray-500">Capturing recurring value from ecosystem maintenance.</p>
            </div>
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
              <div className="text-lg font-bold text-white mb-2">Ecosystem Licensing</div>
              <p className="text-sm text-gray-500">Scaling through federated participation and revenue sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: High Impact */}
      <section className="px-4 py-40 border-t border-white/10 bg-gradient-to-b from-black to-emerald-950/20">
        <div className="mx-auto max-w-7xl relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          </div>
          
          <div className="relative text-center max-w-5xl mx-auto">
            <h2 className="text-6xl font-black text-white md:text-9xl mb-12 leading-[0.9]">
              The era of <br />
              <span className="text-emerald-400 italic">promises</span> is over.
            </h2>
            <p className="text-2xl text-gray-300 mb-20 font-light leading-relaxed">
              Join the federated operational ecosystem. Build infrastructure that is 
              provable, interoperable, and resilient.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <GradientButton href="/contact">Initiate Deployment Consultation</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Examine Reference Architecture</GradientButton>
            </div>
            <p className="mt-16 text-sm font-bold uppercase tracking-[0.4em] text-emerald-500/50">
              Federated operational infrastructure for the 21st century.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
