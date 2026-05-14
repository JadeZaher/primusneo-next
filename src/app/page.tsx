import React from 'react';
import SplineScene from './_components/3d/SplineScene';
import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from './_components/marketing';
import { ecosystemPartners, outcomePillars, platformLayers } from './_data/ecosystem';

const outcomes = [
  'Decision trails that survive team turnover',
  'Digital twins that connect assets, spaces, and analytics',
  'Fractional ownership and contribution accounting models',
  'Open and closed source project governance patterns',
  'Interoperable APIs for existing enterprise and community tools',
  'Spatial AI context for construction, land, logistics, and community systems',
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-20 min-h-[760px] vite-grid hero-glow opacity-80">
          <SplineScene className="h-full w-full" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl pt-10">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              Federated Operational Infrastructure
            </div>
            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight text-gray-200 text-glow-green md:text-5xl">
              An AI-assisted builder ecosystem for real-world environments.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-200 md:text-2xl">
              PrimusNeo coordinates specialized systems through shared interfaces. We connect real-time operational infrastructure, digital twins, agreement-based coordination, AI-assisted memory, crypto incentives, and peer-to-peer analytics into a modular deployment architecture.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/governance-platform">Governance platform</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Explore the stack</GradientButton>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 text-sm uppercase tracking-[0.28em] text-emerald-300">The thesis</div>
            <p className="text-lg leading-8 text-gray-200">
              Most real-world infrastructure systems fail because data is fragmented and governance is disconnected. Instead of creating one monolithic platform, PrimusNeo creates one operational source of truth with many interoperable interfaces and deployment pathways.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
              {['Digital twins', 'P2P analytics', 'Agreement coordination', 'AI organizational memory', 'Modular interoperability', 'Federated governance'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Mission" title="A council for software, sovereignty, and spatial intelligence">
            PrimusNeo exists to make high-impact technology easier to steward. We focus on the human systems around software as much as the code itself: who decides, who contributes, who owns, who benefits, and how the system improves over time.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            <InsightCard title="Governance before scale">
              With OmniOne and NEOS, we can define authority, review loops, contributor roles, holonic team structures, funding logic, and long-term stewardship before projects become too complex to manage.
            </InsightCard>
            <InsightCard title="Tools that create context">
              The stack layers spatial interfaces, peer-to-peer data, digital twin analytics, and interoperable APIs so AI and people can act on shared situational awareness.
            </InsightCard>
            <InsightCard title="Ecosystems over silos">
              AMP, OASIS, and NEOS let PrimusNeo coordinate companies, nonprofits, cooperatives, local communities, developers, and asset owners without forcing one business model.
            </InsightCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Architecture</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Four modular layers for federated infrastructure
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The platform frames PrimusNeo around operational delivery plus governance: AMP contributes spatial OS workflows; NEOS powers backend governance; OASIS provides universal interoperability; and Fractal Engine adds intelligence.
              </p>
            </div>
            <div className="grid gap-5">
              {platformLayers.map((layer) => (
                <InsightCard key={layer.title} eyebrow={layer.eyebrow} title={layer.title}>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">{layer.partner}</p>
                  {layer.body}
                </InsightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Removed Fractal Engine spotlight section */}

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Operating model" title="From idea to governed ecosystem">
            PrimusNeo supports the full arc of federated infrastructure: concept framing, NEOS-backed governance, modular architecture, community coordination, fractionalization strategy, and ongoing analytics.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="Map the vision">
              Convert an ambitious thesis into layers, stakeholders, requirements, and measurable outcomes.
            </NumberedCard>
            <NumberedCard number="02" title="Design governance">
              Define councils, holons, and contribution rules with NEOS logic.
            </NumberedCard>
            <NumberedCard number="03" title="Build the tooling">
              Integrate AMP, OASIS, dashboards, and existing software into usable workflows.
            </NumberedCard>
            <NumberedCard number="04" title="Operate and evolve">
              Track performance and community signals as a living intelligence layer.
            </NumberedCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2">
              <img
                src="/images/howwework.png"
                loading="lazy"
                alt="Collaborative governance workspace"
                className="rounded-[1.25rem] shadow-2xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">What this enables</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Better flow, clearer ownership, stronger delivery efficacy
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The goal is not only to describe an exciting technology stack. It is to make the work easier to govern, fund, ship, evaluate, and explain. PrimusNeo becomes the connective layer between vision, capital, contributors, software, and real-world outcomes.
              </p>
              <div className="mt-8">
                <PillList items={outcomes} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Partners and channels" title="A growing network for regenerative technology delivery">
            PrimusNeo collaborates with aligned builders across governance, software architecture, Web4 interoperability, spatial computing, peer-to-peer infrastructure, and community development.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemPartners.map((partner) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35 p-3">
                  <img src={partner.image} alt={`${partner.name} logo`} className="max-h-14 max-w-full rounded-xl object-contain" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{partner.role}</div>
                <h3 className="mb-3 text-2xl font-bold text-white">{partner.name}</h3>
                <p className="text-sm leading-6 text-gray-300">{partner.body}</p>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <PillList items={outcomePillars} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
