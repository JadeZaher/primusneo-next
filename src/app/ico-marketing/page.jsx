"use client";
import { useState } from 'react';
import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';

const participationTracks = [
  {
    title: 'Community Access',
    range: 'Entry-level participation',
    content: `• Access to project updates, learning materials, and public portfolio reports
• Participation in community surveys and improvement polls
• Early education around asset-backed ownership, QUSDC rails, and governance expectations
• Optional invitations to virtual briefings, webinars, and public development reviews`,
  },
  {
    title: 'Fractional Contributor',
    range: 'Small ownership or contribution stake',
    content: `• All Community Access benefits
• Fractional exposure to specific asset pools or software revenue pools where legally available
• Dashboard access for contribution, ownership, distribution, and performance tracking
• Eligibility for contribution credits, referrals, and service discounts within participating projects`,
  },
  {
    title: 'Asset Partner',
    range: 'Qualified project-level participation',
    content: `• All Fractional Contributor benefits
• Priority access to new asset-backed offerings and governed project rounds
• Design input on community amenities, digital twin requirements, and operational dashboards
• Enhanced reporting on asset performance, risks, milestones, and governance decisions
• Potential QUSDC-denominated distributions where supported by compliant structures`,
  },
  {
    title: 'Development Steward',
    range: 'Strategic stakeholder role',
    content: `• All Asset Partner benefits
• Advisory sessions with project operators, Escherbridge architecture, and PrimusNeo governance leads
• First-look access to co-development opportunities, pilots, and real-world asset deployments
• Governance participation for major acquisitions, platform improvements, and capital allocation policies
• Expanded analytics across spatial, financial, operational, and community health metrics`,
  },
  {
    title: 'Ecosystem Anchor',
    range: 'Institutional, partner, or major contributor role',
    content: `• All Development Steward benefits
• Custom governance, reporting, and data-room workflows for a portfolio or community
• Co-designed NEOS, OASIS, AMP, Escherbridge, and Fractal Engine integrations
• Strategic support for capital design, legal coordination, partner onboarding, and operating agreements
• Recognition as a long-term ecosystem participant where appropriate and compliant`,
  },
];

const allocationModel = [
  { title: 'Asset acquisition and development', percentage: '35%', note: 'Land, buildings, equipment, improvements, feasibility, and project reserves.' },
  { title: 'Technology infrastructure', percentage: '20%', note: 'AMP, OASIS, Escherbridge, Fractal Engine, dashboards, APIs, hosting, data rooms, and automation.' },
  { title: 'Governance and legal', percentage: '15%', note: 'NEOS configuration, operating agreements, disclosure, compliance, counsel, and risk controls.' },
  { title: 'Operations and stewardship', percentage: '15%', note: 'Property management, maintenance, community operations, training, and field coordination.' },
  { title: 'Liquidity and reserves', percentage: '10%', note: 'Stabilization reserves, redemption design where appropriate, and contingency planning.' },
  { title: 'Ecosystem growth', percentage: '5%', note: 'Partner enablement, education, marketing, community onboarding, and pilot expansion.' },
];

const universalBenefits = [
  {
    title: 'Governance utility',
    features: [
      'NEOS-backed decision records, councils, roles, and policy workflows',
      'Contribution accounting for developers, operators, community members, and advisors',
      'Transparent proposal review, milestone tracking, and stewardship reporting',
      'Governance participation scaled by legal structure, role, qualification, and project rules',
    ],
  },
  {
    title: 'Technology integration',
    features: [
      'AMP spatial OS workflows for maps, channels, training, and field coordination',
      'OASIS Web4 interoperability for identity, APIs, providers, avatars, holons, and Web2/Web3 bridges',
      'Escherbridge implementation support for cloud, web, data, blockchain, and enterprise integrations',
      'Fractal Engine analytics, data warehousing, and intelligence solution for spatial and operational data',
    ],
  },
  {
    title: 'Asset-backed transparency',
    features: [
      'Data rooms for asset documents, project plans, risk registers, and financial models',
      'Performance dashboards for revenue, cost, occupancy, utilization, and environmental signals',
      'Digital twin evidence for what exists, what changed, and what needs attention',
      'Clear distinction between participation, ownership, rewards, distributions, and governance rights',
    ],
  },
  {
    title: 'Responsible participation',
    features: [
      'Compliance-first language instead of speculative token-sale framing',
      'Jurisdiction-aware onboarding, investor qualification, and disclosure flows',
      'Exit, transfer, and redemption pathways designed with counsel where applicable',
      'Seasonal bonuses, loyalty rewards, and performance incentives only where project economics support them',
    ],
  },
];

const IcoMarketing = () => {
  const [activeAccordion, setActiveAccordion] = useState('track-0');

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute right-0 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">ICO page refit</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
              From token marketing to asset-backed fractionalization.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              This page no longer positions PrimusNeo as a speculative ICO. It reframes the prior tier model into compliant fractional ownership, contribution accounting, QUSDC-compatible distribution rails, and governed participation around real-world assets, software ecosystems, and regenerative infrastructure.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/fractionalization">Fractionalization model</GradientButton>
              <GradientButton href="/governance-platform" variant="secondary">Governance platform</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Model shift</div>
            <p className="text-lg leading-8 text-gray-200">
              Each opportunity should describe the underlying asset, rights, governance, compliance requirements, distribution logic, digital twin data, and operating responsibilities. Tokens become rails or records, not the headline promise.
            </p>
            <div className="mt-7">
              <PillList items={['Asset-backed stakes', 'QUSDC rails', 'Digital twin data', 'NEOS governance', 'OASIS smart contracts', 'Compliance-first']} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capital design" title="A clearer allocation story">
            The old token pool breakdown is now presented as a use-of-funds model for governed real-world asset and software ecosystem development.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allocationModel.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mb-3 text-4xl font-black text-emerald-200 text-glow">{item.percentage}</p>
                <p className="leading-7 text-gray-300">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Participation levels</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                From community access to ecosystem anchors
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                These are not final securities terms. They are product and governance language for how PrimusNeo can explain different levels of asset-backed participation once legal, jurisdictional, and project-specific details are defined.
              </p>
            </div>
            <div className="space-y-4">
              {participationTracks.map((tier, index) => {
                const key = `track-${index}`;
                return (
                  <div key={tier.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                    <button onClick={() => toggleAccordion(key)} className="flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-white/[0.05]">
                      <div>
                        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{tier.range}</div>
                        <h3 className="text-2xl font-bold text-white">{tier.title}</h3>
                      </div>
                      <span className={`text-3xl text-emerald-200 transition ${activeAccordion === key ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <div className={`${activeAccordion === key ? 'max-h-[460px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
                      <p className="whitespace-pre-line border-t border-white/10 p-6 leading-8 text-gray-300">{tier.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Universal benefits" title="The platform behind each offering">
            Fractionalization becomes more credible when ownership, governance, spatial evidence, and interoperability are part of the same operating system.
          </SectionHeader>
          <div className="grid gap-8 md:grid-cols-2">
            {universalBenefits.map((benefit) => (
              <InsightCard key={benefit.title} title={benefit.title}>
                <ul className="space-y-3">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
              </InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="Implementation path" title="How a fractionalized ecosystem gets launched" className="mb-10">
            The strongest version combines legal design, governance setup, digital twin evidence, interoperable infrastructure, and partner-led delivery.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="Structure">Define the asset, entity, rights, disclosures, roles, and participation requirements.</NumberedCard>
            <NumberedCard number="02" title="Instrument">Configure NEOS governance, OASIS interoperability, dashboards, QUSDC rails, and reporting flows.</NumberedCard>
            <NumberedCard number="03" title="Twin">AMP to connect spatial context, documents, media, telemetry, and field updates.</NumberedCard>
            <NumberedCard number="04" title="Operate">Track performance, proposals, distributions, maintenance, risks, and community decisions over time.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcoMarketing;
