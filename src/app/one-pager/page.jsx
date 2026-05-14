"use client";
import { useState } from 'react';
import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { ecosystemPartners, platformLayers } from '../_data/ecosystem';

const productOfferings = [
  {
    title: 'Operational Digital Twin Infrastructure',
    content: 'Deploy infrastructure visualization, telemetry systems, operational dashboards, machine interfaces, remote controls, and local AI operational environments.',
  },
  {
    title: 'AI-Assisted Coordination Environment',
    content: 'Provides contributor coordination, agreement memory, scoped permissions, operational routing, organizational continuity, and deployment governance tooling.',
  },
  {
    title: 'Builder Ecosystem + Charter Framework',
    content: 'Enables federated builder networks, interoperable working groups, deployment charters, contributor ecosystems, and project federation.',
  },
  {
    title: 'Analytics + Infrastructure Intelligence',
    content: 'Fractal-style operational intelligence including forecasting, infrastructure analysis, investment intelligence, operational warehousing, and digital twin reporting.',
  },
  {
    title: 'Crypto Incentive Systems',
    content: 'Oasis provides token incentives, contribution coordination, operational staking, cryptographic rewards, and ecosystem participation systems.',
  },
];

const marketFocus = [
  {
    title: 'Phase 1',
    body: 'Regenerative campuses, land projects, eco-villages, retreat centers, cooperative developments, infrastructure pilots, smart campuses, off-grid environments, builder collectives.',
  },
  {
    title: 'Phase 2',
    body: 'Industrial facilities, municipalities, utilities, emergency response systems, logistics campuses, infrastructure operators.',
  },
  {
    title: 'Phase 3',
    body: 'Enterprise operational infrastructure, distributed manufacturing, smart city coordination, large-scale infrastructure ecosystems.',
  },
];

const OnePager = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Executive Summary</div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
                Federated Operational Infrastructure for Real-World Systems
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
                PrimusNeo is an AI-assisted builder ecosystem coordinating interoperable operational infrastructure for real-world environments. We create one operational source of truth with many interoperable interfaces and deployment pathways.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <GradientButton href="/governance-platform">Governance platform</GradientButton>
                <GradientButton href="/fractionalization" variant="secondary">Fractionalization model</GradientButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">The Problem</div>
              <p className="text-lg leading-8 text-gray-200">
                Most real-world infrastructure systems fail because operational data is fragmented, governance is disconnected from operations, contributors lack coordination, and institutional memory is lost.
              </p>
              <div className="mt-7">
                <PillList items={['Monolithic SaaS lock-in', 'Fragmented IoT systems', 'Disconnected analytics', 'Centralized cloud dependence', 'Unclear contributor coordination']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="The Solution" title="A Federated Operational Ecosystem Architecture">
            Instead of creating one monolithic platform, PrimusNeo coordinates specialized systems through shared interfaces, schemas, file formats, and permissions.
          </SectionHeader>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
             <div className="space-y-4">
              {platformLayers.map((layer, index) => (
                <div key={layer.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-white/[0.05]"
                  >
                    <div>
                      <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{layer.eyebrow}</div>
                      <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">{layer.partner}</p>
                    </div>
                    <span className={`text-3xl text-emerald-200 transition ${activeAccordion === index ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`${activeAccordion === index ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
                    <p className="border-t border-white/10 p-6 leading-8 text-gray-300">{layer.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">Competitive Advantage</h3>
                <p className="mb-6 leading-8 text-gray-300">
                  The advantage is not one application. The advantage is federated interoperability. Most competitors either centralize everything or fragment everything. PrimusNeo coordinates specialization without fragmentation.
                </p>
                <ul className="space-y-3">
                  {['Local-first architecture', 'Peer-to-peer operational systems', 'Modular specialization', 'AI-assisted organizational memory', 'Agreement-based coordination', 'Interoperable digital twins', 'Operational provenance', 'Permission-aware ecosystems'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Core Product Offerings" title="What PrimusNeo Enables">
            The ecosystem separates concerns into interoperable layers, creating modular deployments and enterprise flexibility.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productOfferings.map((offering) => (
              <InsightCard key={offering.title} title={offering.title}>{offering.content}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Market Focus" title="Scaling from Communities to Cities">
            PrimusNeo evolves toward a scalable coordination architecture for real-world civilization infrastructure.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            {marketFocus.map((phase) => (
              <InsightCard key={phase.title} title={phase.title}>{phase.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Builders Commons</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                The First Operational Pilot
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Builders Commons serves as the first operational proving ground. It demonstrates real-world operational coordination using the full ecosystem stack to validate architecture, interoperability, digital twin systems, and governance coordination.
              </p>
              <div className="mt-8">
                  <GradientButton href="/contact">Join the Federation</GradientButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Revenue Model</div>
              <p className="text-lg leading-8 text-gray-200">
                A sustainable ecosystem built on enterprise deployments, infrastructure licensing, coordination subscriptions, integration contracts, and analytics services. Secondary streams include training, certification, and marketplace integrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePager;
