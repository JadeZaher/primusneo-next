import React from 'react';
import { DreadShape, SectionHeader } from './marketing';

/**
 * Pull-quote "Contrarian / Futurist" insight section.
 * Renders inside an IndustryTemplate child slot.
 */
export const ContrarianInsight = ({ children, attribution = 'PrimusNeo Industry Brief' }) => (
  <section className="relative isolate overflow-hidden border-t border-white/5 bg-gradient-to-b from-emerald-500/[0.04] to-transparent px-4 py-24">
    <DreadShape volume={5} id="07" className="absolute -left-10 top-10 opacity-10" size={140} />
    <DreadShape volume={1} id="11" className="absolute -right-10 bottom-10 opacity-10" size={140} />
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-emerald-200">
        Contrarian Insight
      </div>
      <blockquote className="text-2xl font-medium leading-relaxed text-white md:text-4xl md:leading-[1.2]">
        <span className="text-emerald-400">&ldquo;</span>
        {children}
        <span className="text-emerald-400">&rdquo;</span>
      </blockquote>
      <div className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-emerald-300/70">
        — {attribution}
      </div>
    </div>
  </section>
);

/**
 * Sources / backlinks panel. Renders a list of cited URLs so visitors and
 * LLM crawlers can verify every stat on the page.
 */
export const IndustrySources = ({ sources = [] }) => {
  if (!sources.length) return null;
  return (
    <section className="px-4 py-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Verifiable Sources"
          title="Every stat on this page is cited."
          className="text-left mx-0 mb-12 max-w-3xl"
        >
          We back our positioning with primary sources from McKinsey, the IEA, FAO, OECD, UNCTAD, Stanford HAI, the World Economic Forum, and government data portals. Click any link to verify.
        </SectionHeader>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sources.map((s, i) => (
            <li key={i} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-emerald-400/30 hover:bg-white/[0.04]">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300/80 group-hover:text-emerald-200">
                    {s.org}
                  </span>
                  <span className="text-xs text-gray-500 shrink-0">{s.year}</span>
                </div>
                <div className="text-base font-semibold leading-snug text-white group-hover:text-emerald-100">
                  {s.title}
                </div>
                <div className="truncate text-xs text-gray-500 group-hover:text-gray-400">
                  {s.href}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContrarianInsight;
