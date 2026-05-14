import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { ecosystemPartners, outcomePillars, platformLayers } from '../_data/ecosystem';

const governanceFlows = [
  {
    title: 'Council formation',
    body: 'Define the people, roles, domains, decision rights, escalation paths, and stewardship responsibilities that keep a project from becoming founder-dependent chaos.',
  },
  {
    title: 'NEOS backend governance',
    body: 'Use OmniOne’s governance ecosystem as the backend pattern for holonic organization, E.T.H.O.S. alignment, contribution structures, collective accountability, and operational records.',
  },
  {
    title: 'Asset and data governance',
    body: 'Connect proposals, assets, digital twin evidence, field updates, documents, APIs, permissions, privacy rules, and ownership metadata into one inspectable model.',
  },
  {
    title: 'Delivery governance',
    body: 'Coordinate Escherbridge architecture, product roadmaps, engineering milestones, technical debt, partner integrations, release processes, and measurable outcomes.',
  },
];

const operatingSystem = [
  'AMP spatial channels and offline-capable community workflows',
  'Project charters and decision logs',
  'Council roles and responsibility maps',
  'Contribution, reputation, and reward accounting',
  'Legal and compliance data rooms',
  'Digital twin and asset evidence records',
  'OASIS identity, holons, APIs, and provider routing',
  'Fractal Engine analytics and intelligence'
];

const GovernancePlatformPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute left-0 top-0 -z-10 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Governance platform</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
              A governance operating system for software solutions.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              PrimusNeo uses AMP spatial context, AMP peer-to-peer community tooling, OmniOne’s NEOS governance ecosystem, OASIS Web4 interoperability, Escherbridge delivery, and Fractal Engine intelligence to help ambitious projects become governable, fundable, and shippable.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/one-pager">Read the one-pager</GradientButton>
              <GradientButton href="/fractionalization" variant="secondary">Fractionalization model</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Platform scope</div>
            <p className="text-lg leading-8 text-gray-200">
              Governance is the connective layer between strategy, software, communities, capital, and real-world assets. PrimusNeo makes that layer visible enough to manage and modular enough to integrate.
            </p>
            <div className="mt-7">
              <PillList items={outcomePillars} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Governance workbench" title="What the platform governs">
            The goal is not bureaucracy. The goal is clear authority, transparent contribution, practical accountability, and shared context across the people and systems doing the work.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {governanceFlows.map((flow) => (
              <InsightCard key={flow.title} title={flow.title}>{flow.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Layer model</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Governance is backed by systems, not slide decks
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Each layer has a job. Together they let partners, contributors, investors, and operators see how decisions connect to software, assets, spatial context, and outcomes.
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

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.15),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Operating system contents</div>
              <h2 className="text-4xl font-bold text-white text-glow md:text-5xl">
                The artifacts that make governance real
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                A governed ecosystem needs persistent artifacts: records, permissions, assets, policies, contribution logs, interfaces, evidence, and APIs. These are the pieces PrimusNeo brings into one operating model.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {operatingSystem.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/35 p-4 text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Partner roles" title="Who powers the governance ecosystem">
            PrimusNeo’s updated story makes partner responsibility explicit instead of hiding it behind generic technology claims.
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
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 md:p-12">
          <SectionHeader eyebrow="Launch sequence" title="How PrimusNeo takes a project from vision to governed delivery" className="mb-10">
            Every project can start small and grow into deeper governance, fractionalization, spatial intelligence, and interoperability as it proves traction.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="Discover">Map stakeholders, assets, incentives, risks, and technical constraints.</NumberedCard>
            <NumberedCard number="02" title="Constitute">Define councils, NEOS governance structures, policies, contribution rules, and disclosures.</NumberedCard>
            <NumberedCard number="03" title="Integrate">Connect AMP, OASIS, Escherbridge, Fractal Engine, realtime intelligence, identity, APIs, and existing tools.</NumberedCard>
            <NumberedCard number="04" title="Operate">Measure outcomes, build community, work with presence and insight using digital twins, govern proposals, and compound trust.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernancePlatformPage;
