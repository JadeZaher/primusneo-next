import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroScene from './_components/3d/HeroScene';
import Reveal from './_components/Reveal';
import LayerShowcase from './_components/LayerShowcase';
import { ecosystemPartners, layerShowcase, stackIndex } from './_data/ecosystem';

export const metadata = {
  title: 'Federated Operational Infrastructure',
  description:
    'The Technology Innovation Lab. Many timelines, one line: AMP, NEOS, AZOA, Fractal Engine, and Elevate Impact. Tie Town [TX] is live.',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

const tickerItems =
  'DIGITAL TWINS · FEDERATED GOVERNANCE · P2P ANALYTICS · AI ORGANIZATIONAL MEMORY · AGREEMENT COORDINATION · MODULAR INTEROPERABILITY · RESEARCH ENABLEMENT · CRYPTO INCENTIVES · ';

const operatingModel = [
  {
    step: '01',
    title: 'Understand the need',
    body: 'The people who live with the problem describe it. A clearing house is a table, not a funnel.',
  },
  {
    step: '02',
    title: 'Form the team',
    body: 'Knowledge, tools, and a delivery partner. Each one named before anyone builds.',
  },
  {
    step: '03',
    title: 'Define the test',
    body: 'The question and its measures, written down before the first version exists.',
  },
  {
    step: '04',
    title: 'Build a first version',
    body: 'Existing tools where they fit. New ones where they do not. Alpha is allowed to say which is which.',
  },
  {
    step: '05',
    title: 'Review the evidence',
    body: 'Against the baseline, in the open. Useful results earn the next step. The others stop.',
  },
  {
    step: '06',
    title: 'Put it to work',
    body: 'A tool, a partnership, a study people can use, or a company. The record stays either way.',
  },
];

const outcomes = [
  'Decision trails that survive team turnover',
  'Digital twins connecting assets, spaces, and analytics',
  'Fractional ownership and contribution accounting',
  'Open and closed source governance patterns',
  'Interoperable APIs for enterprise and community tools',
  'Spatial AI context for construction, land, logistics, and community',
];

const MonoLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
    {children}
  </div>
);

const PrimaryCta = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="bg-paper px-7 py-4 font-mono text-xs tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
  >
    {children}
  </Link>
);

const SecondaryCta = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="border border-white/25 px-7 py-[15px] font-mono text-xs tracking-[0.14em] text-paper transition-colors duration-300 hover:border-accent hover:text-accent"
  >
    {children}
  </Link>
);

const Home = () => {
  return (
    <div className="bg-ink text-paper selection:bg-accent selection:text-white">
      {/* Hero — WebGL timeline collapse over a digital-twin ground grid */}
      <section className="relative h-svh min-h-[680px] overflow-hidden bg-ink">
        <HeroScene className="absolute inset-0 h-full w-full" />

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end px-7 pb-12">
          <div className="mb-6 font-mono text-[11px] tracking-[0.24em] text-mist">
            THE TECHNOLOGY INNOVATION LAB
          </div>
          <h1 className="max-w-[14ch] text-balance text-[clamp(48px,7.4vw,132px)] font-medium leading-[0.98] tracking-[-0.035em]">
            Many timelines. One line.
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[52ch] text-[17px] leading-relaxed text-mist">
              People who live with a problem, tools that might meet it, and a
              place to test. Then the evidence decides. Tie Town [TX] is that
              place, and it is already on.
            </p>
            <div className="pointer-events-auto flex gap-3">
              <PrimaryCta href="/one-pager">EXPLORE THE STACK</PrimaryCta>
              <SecondaryCta href="/contact">TALK TO US</SecondaryCta>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-7 top-24 font-mono text-[10px] tracking-[0.2em] text-faint">
          N_TIMELINES: MANY → 1
        </div>
        <div className="pointer-events-none absolute right-7 top-24 font-mono text-[10px] tracking-[0.2em] text-faint">
          SPATIAL_OS // ONLINE
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-white/[0.08] bg-ink py-3.5">
        <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-[11px] tracking-[0.22em] text-faint">
          <span className="pr-12">{tickerItems}</span>
          <span className="pr-12">{tickerItems}</span>
        </div>
      </div>

      {/* 01 — Thesis */}
      <section className="bg-ink px-7 py-32 md:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-[minmax(120px,1fr)_minmax(0,4fr)]">
          <MonoLabel>01 — Thesis</MonoLabel>
          <div>
            <Reveal>
              <h2 className="max-w-[24ch] text-balance text-[clamp(32px,4.2vw,72px)] font-medium leading-[1.08] tracking-[-0.03em]">
                Infrastructure fails when data fragments and governance
                disconnects.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-[58ch] text-[17px] leading-relaxed text-mist">
                We do not build one monolithic platform. We maintain one
                operational source of truth with many interoperable interfaces
                — and the governance to steward it over decades, not demo
                cycles.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — Architecture */}
      <section className="bg-ink px-7 pb-32 md:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <MonoLabel>02 — Architecture</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              Four coordination layers and a research module.
            </h2>
          </div>
          <div className="border-b border-white/10">
            {stackIndex.map((layer) => (
              <Reveal key={layer.href}>
                <Link
                  href={layer.href}
                  className="group grid grid-cols-[48px_minmax(0,1fr)_32px] items-center gap-x-4 border-t border-white/10 px-3 py-9 transition-all duration-300 hover:bg-white/[0.03] hover:pl-7 md:grid-cols-[80px_minmax(0,2fr)_minmax(0,1fr)_minmax(0,2fr)_48px] md:gap-6"
                >
                  <span className="font-mono text-[11px] text-faint">{layer.index}</span>
                  <span className="flex flex-col gap-2 md:contents">
                    <span className="text-[clamp(26px,2.8vw,44px)] font-medium tracking-[-0.02em]">
                      {layer.name}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
                      {layer.tag}
                    </span>
                    <span className="text-sm leading-normal text-mist">
                      {layer.summary}
                    </span>
                  </span>
                  <span className="justify-self-end text-[22px] text-faint transition-colors group-hover:text-accent">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-[68ch] text-sm leading-relaxed text-mist">
            <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://neos.primusneo.com">NEOS</a>{' '}
            keeps agreements and permissions on its own site.{' '}
            <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://azoa.ardanova.com">AZOA</a>{' '}
            keeps identity, consent, and settlement on its own site.{' '}
            <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://ardanova.com">ArdaNova</a>{' '}
            is designed to consume that settlement layer. It is not a live deployment, and it has made no token offering.
          </p>
        </div>
      </section>

      {/* 03 — Guided tour of the stack */}
      <section className="border-t border-white/[0.06] bg-ink-deep px-7 py-28 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-wrap items-baseline justify-between gap-4">
            <MonoLabel>03 — Field View</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              Step into each layer.
            </h2>
          </div>
          <LayerShowcase layers={layerShowcase} />
        </div>
      </section>

      {/* 04 — Operating model */}
      <section className="bg-ink px-7 py-28 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
            <MonoLabel>04 — Operating Model</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              A clearing house, then a lab.
            </h2>
          </div>
          <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {operatingModel.map((item, i) => (
              <div key={item.step} className="bg-ink">
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full px-7 pb-14 pt-10">
                    <div className="font-mono text-[11px] tracking-[0.2em] text-accent">
                      {item.step}
                    </div>
                    <h3 className="mb-3 mt-5 text-[22px] font-medium tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-mist">{item.body}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — What this enables */}
      <section className="border-t border-white/[0.06] bg-ink-deep px-7 py-32 md:py-36">
        <div className="mx-auto grid max-w-[1600px] items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <MonoLabel>05 — What This Enables</MonoLabel>
            </div>
            <Reveal>
              <h2 className="max-w-[16ch] text-[clamp(32px,3.6vw,60px)] font-medium leading-[1.08] tracking-[-0.03em]">
                Clearer ownership. Stronger delivery.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mb-12 mt-8 max-w-[48ch] leading-relaxed text-mist">
                PrimusNeo is the connective layer between vision, capital,
                contributors, software, and real-world outcomes — easier to
                govern, fund, ship, evaluate, and explain.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10">
                <Image
                  src="/images/howwework.webp"
                  alt="Digital twin still of a governed operational environment"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  FIELD_STILL // DIGITAL TWIN
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col border-b border-white/10 lg:pt-16">
            {outcomes.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-baseline gap-6 border-t border-white/10 py-[26px]">
                  <span className="font-mono text-[11px] text-faint">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-lg leading-normal">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Network */}
      <section className="bg-ink px-7 py-32 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <MonoLabel>06 — Network</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              Built with aligned builders.
            </h2>
          </div>
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-12">
            {/* Seven partners: first four span 3 of 12 columns, last three span 4 — no orphan cell */}
            {ecosystemPartners.map((partner, i) => (
              <div
                key={partner.name}
                className={`bg-ink ${
                  i < 4 ? 'lg:col-span-3' : 'lg:col-span-4'
                } ${i === ecosystemPartners.length - 1 && i % 2 === 0 ? 'sm:col-span-2' : ''}`}
              >
                <Reveal delay={i * 80} className="h-full">
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full min-h-[220px] flex-col gap-3.5 px-7 py-9 transition-colors duration-300 hover:bg-[#101218]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                      {partner.role}
                    </span>
                    <span className="text-2xl font-medium tracking-[-0.01em] text-paper">
                      {partner.name}
                    </span>
                    <span className="text-[13px] leading-relaxed text-mist">
                      {partner.body}
                    </span>
                    <span className="mt-auto text-lg text-accent">↗</span>
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Next */}
      <section className="border-t border-white/[0.06] bg-ink-deep px-7 py-44 text-center">
        <div className="mb-8 flex justify-center">
          <MonoLabel>07 — Next</MonoLabel>
        </div>
        <Reveal>
          <h2 className="mx-auto max-w-[16ch] text-balance text-[clamp(40px,6vw,104px)] font-medium leading-none tracking-[-0.035em]">
            Build on governed ground.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <PrimaryCta href="/contact">GET STARTED</PrimaryCta>
            <SecondaryCta href="/one-pager">VIEW THE STACK</SecondaryCta>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
