"use client";
import { useState } from 'react';
import Image from 'next/image';
import { DreadShape, GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { ecosystemPartners, platformLayers } from '../_data/ecosystem';

const productOfferings = [
  {
    title: 'See the whole site',
    content: 'A live picture of your sites, equipment and work, with dashboards the people running the place can actually use, on computers you control.',
  },
  {
    title: 'Structure that survives turnover',
    content: 'Who is responsible for what, what was agreed, and who is allowed to do which job, kept in one place so the organization doesn\'t reset every time someone leaves.',
  },
  {
    title: 'Partners working from one charter',
    content: 'Working groups, contractors and partner organizations can work from one written charter, so handoffs between them stop being where projects go missing.',
  },
  {
    title: 'Insight from your own work',
    content: 'Forecasts, site analysis and reports built from the record of what actually happened, rather than from what the plan assumed.',
  },
  {
    title: 'Approvals a board can check',
    content: 'AZOA walks work through its approval steps and records who consented to what. Anything involving real money stays switched off until it has been reviewed. Pre-launch.',
  },
  {
    title: 'Research Enablement',
    content: 'Elevate Impact, PrimusNeo\'s research partner, turns questions into finished, expert-checked study designs. It is live in production with the sickle cell community; its connection to the other four parts is still being built.',
  },
];

const marketFocus = [
  {
    title: 'Phase 1',
    body: 'Land projects, campuses, eco-villages, retreat centers, co-op developments, off-grid sites and builder collectives, where a small group runs a real place and needs the decisions to hold.',
  },
  {
    title: 'Phase 2',
    body: 'Industrial sites, municipalities, utilities, emergency services, logistics campuses and other operators who answer to a council or a board.',
  },
  {
    title: 'Phase 3',
    body: 'Large companies, manufacturers spread over many sites, and cities coordinating many departments at once.',
  },
];

const OnePager = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <DreadShape volume={5} id="05" className="absolute left-[5%] top-[10%] opacity-10" size={100} />
        <DreadShape volume={1} id="08" className="absolute right-[5%] bottom-[10%] opacity-10 rotate-12" size={120} />

        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">On one page</div>
              <h1 className="max-w-[14ch] text-[clamp(40px,5vw,72px)] font-medium leading-[0.98] tracking-[-0.035em] text-paper">
                Many timelines. One line.
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-mist">
                Every organization runs on several timelines at once: the plan, the work that is actually happening, and what the budget can carry. PrimusNeo is the technology innovation lab that pulls them into one line. The clearing house finds the people who live with the problem, and the lab runs the test. Four parts handle structure, friction, insight and oversight, Elevate Impact handles research, and no single company owns all of it. Tie Town [TX] is where it already runs.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <GradientButton href="/governance-platform">How decisions get made</GradientButton>
                <GradientButton href="/contact" variant="secondary">Talk to us</GradientButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl relative overflow-hidden">
              <DreadShape volume={5} id="12" className="absolute -right-4 -top-4 opacity-20" size={80} />
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">The Problem</div>
              <p className="text-lg leading-8 text-gray-200">
                Most real-world projects don't fail for lack of a good idea. They fail because the information is scattered across tools, decisions get made in one room and carried out in another, contributors can't tell who is doing what, and the reasons behind past decisions leave with whoever made them.
              </p>
              <div className="mt-7">
                <PillList items={['Locked in to one vendor', 'Equipment and tools that don\'t talk to each other', 'Reports nobody connects', 'Everything on someone else\'s servers', 'Nobody sure who is doing what']} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image 
            src="/images/newassets/intro_card.png"
            alt="PrimusNeo Introduction"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>

      <section className="px-4 py-20 relative">
        <DreadShape volume={1} id="11" className="absolute -left-10 top-1/2 opacity-5 -rotate-45" size={180} />
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="How it fits together" title="Specialists that work together, not one system that does everything">
            Instead of selling you one giant platform, PrimusNeo gets a few specialized parts to work together through shared agreements, shared records and clear permissions. Each part can be replaced or audited on its own, which is more than most giant platforms can say.
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
                  <div className={`${activeAccordion === index ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
                    <div className="border-t border-white/10 p-6 leading-8 text-gray-300">
                      <p>{layer.body}</p>
                      {layer.sites?.map((site) => (
                        <a key={site.href} href={site.href} className="mt-3 block text-emerald-300 underline-offset-4 hover:underline">
                          {site.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 relative overflow-hidden">
                <DreadShape volume={5} id="15" className="absolute -right-10 -bottom-10 opacity-10" size={200} />
                <h3 className="mb-4 text-2xl font-bold text-white">Why it holds up</h3>
                <p className="mb-6 leading-8 text-gray-300">
                  The advantage isn't one application. Most options either put everything in one vendor's hands or scatter it across a dozen tools nobody connects. PrimusNeo lets each part do its own job while the organization keeps one record of who decided what and why.
                </p>
                <ul className="space-y-3 relative z-10">
                  {['Your records stay on your own computers', 'Keeps working when the internet doesn\'t', 'Parts you can swap without starting over', 'Decisions that survive team turnover', 'Work organized around written agreements', 'A live picture of your sites and assets', 'A trail showing where every number came from', 'Clear permissions for who can do what'].map((item) => (
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

      <section className="px-4 py-20 bg-white/[0.02] relative overflow-hidden">
        <DreadShape volume={1} id="03" className="absolute right-0 top-0 opacity-5" size={160} />
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="What you can do with it" title="Four jobs, and research">
            Each part does one job well, so an organization can start with the job that hurts most and add the rest when it is ready.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productOfferings.map((offering) => (
              <InsightCard key={offering.title} title={offering.title}>{offering.content}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 relative">
        <DreadShape volume={5} id="09" className="absolute left-0 bottom-0 opacity-10" size={180} />
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Who it is for" title="Starting with communities, and growing from there">
            We start where the stakes are real and the organization is small enough to learn from, then take what works to larger operators. These are the kinds of organizations we have in mind, not a client list.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            {marketFocus.map((phase) => (
              <InsightCard key={phase.title} title={phase.title}>{phase.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12 relative overflow-hidden">
          <DreadShape volume={1} id="20" className="absolute right-0 top-0 opacity-10 rotate-12" size={140} />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center relative z-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Tie Town [TX]</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                The first place it runs
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Tie Town [TX], a media and creator house in McDade, Texas, is where PrimusNeo runs first. It is where we find out whether the decision rights hold, whether the handoffs got easier, and whether the record tells the people running it anything useful, before we suggest any of it to someone else.
              </p>
              <div className="mt-8">
                  <GradientButton href="/contact">Talk to us</GradientButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">How we are paid</div>
              <p className="text-lg leading-8 text-gray-200">
                Organizations pay us to set it up at their sites, to license the software, for an ongoing subscription, for the work of connecting it to the systems they already use, and for analysis. Training and certification come later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Partners" title="Who builds with PrimusNeo" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {ecosystemPartners.map((partner, i) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className={`group rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] ${i < 4 ? 'lg:col-span-3' : 'lg:col-span-4'} ${i === ecosystemPartners.length - 1 && ecosystemPartners.length % 2 === 1 ? 'md:col-span-2 lg:col-span-4' : ''}`}>
                <div className="relative mb-5 flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/35 p-3">
                  {partner.image ? (
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      fill
                      className="rounded-xl object-contain p-2"
                    />
                  ) : (
                    <span className="font-mono text-sm uppercase tracking-[0.22em] text-white/80">{partner.name}</span>
                  )}
                </div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{partner.role}</div>
                <h3 className="mb-3 text-2xl font-bold text-white">{partner.name}</h3>
                <p className="text-sm leading-6 text-gray-300">{partner.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
          <Image 
            src="/images/newassets/closing_card.png"
            alt="PrimusNeo Closing"
            fill
            className="object-cover opacity-70 transition-opacity group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default OnePager;