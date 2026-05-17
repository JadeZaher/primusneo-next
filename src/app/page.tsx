import React from 'react';
import Image from 'next/image';
import { DreadShape, GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from './_components/marketing';
import { ecosystemPartners, layerShowcase, outcomePillars, platformLayers } from './_data/ecosystem';
import HeroScene from './_components/3d/HeroScene';
import LayerShowcase from './_components/LayerShowcase';

export const metadata = {
  title: 'Federated Operational Infrastructure',
  description: 'Coordinate specialized systems through shared interfaces. Connect real-time operational infrastructure, digital twins, and AI-assisted memory into a modular deployment architecture.',
};

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
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[500px] w-full md:absolute md:inset-0 md:-z-20 md:h-full vite-grid hero-glow opacity-80">
          <HeroScene className="h-full w-full" />
        </div>

        <div className="relative px-4 py-12 md:py-28">
          <DreadShape volume={5} id="01" className="absolute left-[2%] top-[15%] opacity-10" size={100} />
          <DreadShape volume={1} id="02" className="absolute right-[5%] top-[10%] opacity-10 rotate-12" size={120} />

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
        </div>
      </section>

      <section className="px-4 py-20 relative overflow-hidden">
        <DreadShape volume={1} id="05" className="absolute -right-10 top-1/2 opacity-5" size={200} />
        <div className="mx-auto max-w-7xl relative z-10">
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

      {/* Layer showcase — interactive, linked tour of each layer.
          Distinct from the static architecture cards above: this is a guided,
          one-at-a-time deep dive with direct links into each layer's page. */}
      <section className="px-4 py-20 bg-white/[0.02] relative overflow-hidden border-y border-white/5">
        <DreadShape volume={1} id="01" className="absolute -left-10 top-0 opacity-10 rotate-45" size={180} />
        <DreadShape volume={5} id="03" className="absolute right-[10%] bottom-0 opacity-10 -rotate-12" size={150} />

        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader eyebrow="Guided tour" title="Step into each layer">
            The architecture above maps how the layers fit together. Here you can
            move through them one at a time and jump straight into the dedicated
            page for AMP, NEOS, OASIS, or Fractal Engine.
          </SectionHeader>
          <LayerShowcase layers={layerShowcase} />
        </div>
      </section>

      <section className="px-4 py-20 relative overflow-hidden">
        <DreadShape volume={5} id="10" className="absolute left-[5%] bottom-[10%] opacity-5" size={160} />
        <div className="mx-auto max-w-7xl relative z-10">
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
            <div className="relative aspect-video rounded-3xl border border-white/10 bg-white/[0.04] p-2">
              <Image
                src="/images/howwework.png"
                alt="Collaborative governance workspace"
                fill
                className="rounded-[1.25rem] shadow-2xl object-cover p-2"
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

      <section className="px-4 py-20 relative overflow-hidden">
        <DreadShape volume={1} id="15" className="absolute -right-20 top-0 opacity-5" size={250} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader eyebrow="Partners and channels" title="A growing network for regenerative technology delivery">
            PrimusNeo collaborates with aligned builders across governance, software architecture, Web4 interoperability, spatial computing, peer-to-peer infrastructure, and community development.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemPartners.map((partner) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <div className="relative mb-5 flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35 p-3">
                  <Image 
                    src={partner.image} 
                    alt={`${partner.name} logo`} 
                    fill
                    className="rounded-xl object-contain p-2" 
                  />
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

      <section className="px-4 py-20 bg-emerald-400/5 border-t border-emerald-400/10 relative overflow-hidden">
        <DreadShape volume={5} id="18" className="absolute -left-10 top-0 opacity-10 rotate-12" size={140} />
        <DreadShape volume={5} id="13" className="absolute right-0 bottom-0 opacity-10 -rotate-12" size={160} />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl font-bold text-white md:text-5xl mb-6">Ready to build the future of governed infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-10">Connect with us to learn how PrimusNeo can support your project, community, or asset fractionalization strategy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton href="/contact">Get started today</GradientButton>
            <GradientButton href="/one-pager" variant="secondary">View the stack</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;