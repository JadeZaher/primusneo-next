"use client";
import { useState } from 'react';
import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { ecosystemPartners, platformLayers } from '../_data/ecosystem';

const useCases = [
  {
    title: 'Real-world asset fractionalization',
    content: 'Combine governance records, asset metadata, digital twin context, and compliant participation models so communities can coordinate around land, buildings, equipment, infrastructure, and revenue-producing assets with clearer ownership logic.',
  },
  {
    title: 'Construction and development',
    content: 'Use 3D scenes, asset libraries, field updates, and analytics dashboards to align owners, architects, contractors, inspectors, and operators around one evolving spatial record.',
  },
  {
    title: 'Regenerative communities',
    content: 'Model land, housing, energy, food, water, membership, and governance systems as connected layers. Communities can track decisions, stewardship responsibilities, and ecological outcomes over time.',
  },
  {
    title: 'Supply chain and logistics',
    content: 'Map physical assets, routes, inventory, sensors, and handoffs into a shared environment where teams and AI agents can understand operational context instead of reading disconnected spreadsheets.',
  },
  {
    title: 'Open source ecosystem governance',
    content: 'Give maintainers, contributors, sponsors, and users a shared operating model for roadmaps, bounties, releases, reputation, funding pools, and project stewardship.',
  },
  {
    title: 'AI and digital twin analytics',
    content: 'Provide AI systems with richer spatial and governance context: what an asset is, where it lives, who controls it, what changed, which policies apply, and how performance is trending.',
  },
];

const stackCards = [
  {
    title: 'OmniOne / NEOS anchors governance',
    body: 'OmniOne is the new partner bringing the backend governance ecosystem called NEOS. Its E.T.H.O.S. methodology aligns with PrimusNeo’s council model: holonic organizations, contribution-based coordination, and collective movement from solo hero journeys to shared hero journeys.',
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
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">One pager</div>
              <h1 className="text-5xl font-black leading-tight tracking-tight text-white text-glow md:text-7xl">
                The PrimusNeo stack for governed spatial software ecosystems
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
                PrimusNeo brings governance design, OmniOne's NEOS backend ecosystem, Plan Systems, OASIS, and Escherbridge delivery together so teams can build software that coordinates people, capital, assets, data, and digital twins across real-world environments.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <GradientButton href="/governance-platform">Governance platform</GradientButton>
                <GradientButton href="/fractionalization" variant="secondary">Fractionalization model</GradientButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Stack promise</div>
              <p className="text-lg leading-8 text-gray-200">
                A governance platform for software solutions: open source, closed source, real-world asset, community, and enterprise systems that need durable coordination and a path from idea to operating infrastructure.
              </p>
              <div className="mt-7">
                <PillList items={['NEOS governance', 'P2P 3D assets', 'Digital twins', 'Spatial analytics', 'OASIS APIs', 'Escherbridge delivery']} />
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
            <img
              src="/images/PRIMUS-NEO-TECH-STACK2.png"
              loading="lazy"
              alt="PrimusNeo technology stack"
              className="w-full rounded-[1.35rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Updated stack" title="The stack is now partner-backed and governance-first.">
            The previous partner and networking messaging has been replaced with the current ecosystem: OmniOne / NEOS for backend governance, Plan Systems for spatial OS workflows, OASIS for Web4 interoperability, and Escherbridge for delivery.
          </SectionHeader>
          <div className="grid gap-6 lg:grid-cols-3">
            {stackCards.map((card) => (
              <InsightCard key={card.title} title={card.title}>{card.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Layered architecture</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                The layers make the vision understandable and buildable
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                PrimusNeo should read less like a list of technologies and more like a system of responsibilities. Each layer answers a different question: who governs, what is being modeled, how teams interact with it, how it connects to the rest of the internet, and who delivers the software.
              </p>
            </div>
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
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Partner map" title="A sharper ecosystem story">
            These are the partner roles currently reflected across the site.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecosystemPartners.map((partner) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35 p-3">
                  <img src={partner.image} alt={`${partner.name} logo`} className="max-h-14 max-w-full rounded-xl object-contain" />
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{partner.role}</div>
                <h3 className="mb-3 text-2xl font-bold text-white">{partner.name}</h3>
                <p className="text-sm leading-6 text-gray-300">{partner.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Use cases" title="Where the platform becomes practical">
            The same architecture can support commercial products, community infrastructure, digital twin deployments, and governance-heavy software ecosystems.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <InsightCard key={useCase.title} title={useCase.title}>{useCase.content}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="How to read PrimusNeo" title="A one-page thesis for partners and builders" className="mb-10">
            PrimusNeo is not a single app. It is a governance and integration platform for turning emerging technology into aligned, inspectable, and scalable software ecosystems.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="Govern the work">Create the council, decision rights, contribution model, ownership pattern, and NEOS-aligned backend governance logic.</NumberedCard>
            <NumberedCard number="02" title="Model the world">Represent assets, places, telemetry, and operational data as navigable digital twins.</NumberedCard>
            <NumberedCard number="03" title="Connect the stack">Use OASIS APIs, identity, P2P data, dashboards, and existing tools without locking the ecosystem down.</NumberedCard>
            <NumberedCard number="04" title="Ship with partners">Use Escherbridge and the broader ecosystem to move from architecture to production software.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePager;
