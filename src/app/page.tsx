import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroScene from './_components/3d/HeroScene';
import { JsonLd } from './_components/JsonLd';
import Reveal from './_components/Reveal';
import LayerShowcase from './_components/LayerShowcase';
import Ticker from './_components/Ticker';
import { ecosystemPartners, layerShowcase, stackIndex } from './_data/ecosystem';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';
import { pageMeta } from '@/lib/seo';

const homeTitle = 'PrimusNeo · Many timelines, one line';
const homeDescription =
  'PrimusNeo is the technology innovation lab that helps organizations structure themselves for success, remove the friction between teams, turn their own work into insight, and keep oversight in plain view. Live with Tie Town [TX].';

const homeItems = [
  { name: 'AMP', path: '/amp' },
  { name: 'NEOS', path: '/governance-platform' },
  { name: 'AZOA', path: '/azoa' },
  { name: 'Fractal Engine', path: '/fractal-engine' },
  { name: 'Elevate Impact', path: '/elevate-impact' },
  { name: 'Industries', path: '/industries' },
  { name: 'Guides', path: '/guides' },
  { name: 'Blog', path: '/blog' },
  { name: 'Newsroom', path: '/newsroom' },
  { name: 'Papers', path: '/papers' },
  { name: 'Contact', path: '/contact' },
];

export const metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  ...pageMeta({ title: homeTitle, description: homeDescription, path: '/', rss: true }),
};

const tickerItems =
  'CLEAR DECISION RIGHTS · FEWER HANDOFF FAILURES · INSIGHT FROM EVERYDAY WORK · OVERSIGHT WITHOUT MICROMANAGING · DECISIONS THAT SURVIVE TURNOVER · TOOLS THAT FIT WHAT YOU ALREADY USE · RESEARCH WITH THE PEOPLE AFFECTED ·';

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
    body: 'Existing tools where they fit. New ones where they do not. The first version is allowed to say which is which.',
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
  'A live picture of your sites, your assets and the work happening in them',
  'A fair record of who contributed what',
  'Governance that fits an open community or a private company',
  'Tools that work with the systems you already pay for',
  'Insight tied to real places, for construction, land, logistics and community work',
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
      <JsonLd
        data={graph(
          collectionNode({
            name: 'PrimusNeo',
            description: homeDescription,
            path: '/',
            items: homeItems,
          }),
          breadcrumbList([{ name: 'Home', path: '/' }]),
        )}
      />
      {/* Hero — WebGL timeline collapse over a digital-twin ground grid */}
      <section className="relative h-svh min-h-[680px] overflow-hidden bg-ink">
        <HeroScene className="absolute inset-0 h-full w-full" />

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end px-7 pb-12">
          <div className="mb-6 font-mono text-[11px] tracking-[0.24em] text-mist">
            THE TECHNOLOGY INNOVATION LAB · TIE TOWN [TX]
          </div>
          <h1 className="max-w-[15ch] text-balance text-[clamp(48px,7.4vw,124px)] font-medium leading-[0.98] tracking-[-0.035em]">
            Many timelines. One line.
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[56ch] text-[17px] leading-relaxed text-mist">
              Every organization is living out several futures at once: the one in the plan, the one the team is quietly
              working toward, and the one the budget can actually pay for. We help owners, operators and boards pull
              them into one line by setting up who decides what, clearing the friction between teams, turning everyday
              work into insight, and keeping oversight where the people responsible can see it. Tie Town, Texas, is
              where we test that, and it is already running.
            </p>
            <div className="pointer-events-auto flex flex-wrap gap-3">
              <PrimaryCta href="/contact">TALK TO US</PrimaryCta>
              <SecondaryCta href="/one-pager">SEE HOW WE WORK</SecondaryCta>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-7 top-24 font-mono text-[10px] tracking-[0.2em] text-faint">
          MANY TIMELINES → ONE LINE
        </div>
        <div className="pointer-events-none absolute right-7 top-24 font-mono text-[10px] tracking-[0.2em] text-faint">
          TIE TOWN [TX] // LIVE
        </div>
      </section>

      {/* Ticker */}
      <Ticker items={tickerItems} />

      {/* 01 — Thesis */}
      <section className="bg-ink px-7 py-32 md:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-[minmax(120px,1fr)_minmax(0,4fr)]">
          <MonoLabel>01 — Thesis</MonoLabel>
          <div>
            <Reveal>
              <h2 className="max-w-[24ch] text-balance text-[clamp(32px,4.2vw,72px)] font-medium leading-[1.08] tracking-[-0.03em]">
                Plans rarely fail in the boardroom. They fail in the handoff after it.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-10 max-w-[58ch] text-[17px] leading-relaxed text-mist">
                A decision leaves the room, passes through three teams, two budgets and a vendor, and arrives at the
                people doing the work with nobody quite sure who made it or why. A land trust meant to last 99 years
                can forget within five why its council made a rule. We work on that gap: who owns which decision, where
                work stalls between teams, what the organization can actually learn about itself, and how the people
                responsible keep watch without sitting in every meeting.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — Architecture */}
      <section className="bg-ink px-7 pb-32 md:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <MonoLabel>02 — What we do</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              Four jobs every organization has, and a research partner.
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
            <MonoLabel>03 — The tour</MonoLabel>
            <h2 className="text-[clamp(28px,3vw,48px)] font-medium tracking-[-0.03em]">
              Walk through each part.
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
                PrimusNeo connects the people with the vision, the people doing the work, the money behind it and the
                results on the ground, so the whole effort is easier to run, to fund, to deliver, to measure and to
                explain to a board.
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
                  TIE TOWN [TX] · SITE VIEW
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
            <PrimaryCta href="/contact">TALK TO US</PrimaryCta>
            <SecondaryCta href="/one-pager">SEE HOW IT FITS TOGETHER</SecondaryCta>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            <Link href="/demos/paid-twice" className="hover:text-accent">
              See how a payment gets paid twice
            </Link>
            <Link href="/guides" className="hover:text-accent">
              Field guides
            </Link>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/papers/why-good-work-goes-unbuilt" className="hover:text-accent">
              White paper: Why good work goes unbuilt
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
