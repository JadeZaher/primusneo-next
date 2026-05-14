import React from 'react';
import { GradientButton, InsightCard, NumberedCard, SectionHeader } from './marketing';

export const SolutionTemplate = ({ 
  eyebrow, 
  title, 
  description, 
  features = [], 
  layers = [], 
  useCase,
  ctaTitle = "Ready to transform your operations?",
  ctaDesc = "Connect with our team to see how PrimusNeo can be tailored to your specific needs.",
  primaryCtaText = "Request a Consultation",
  primaryCtaHref = "/contact"
}) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 -z-10 vite-grid opacity-40" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              {eyebrow}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white text-glow md:text-6xl">
              {title}
            </h1>
            <p className="mt-8 text-xl leading-9 text-gray-300 md:text-2xl">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton href={primaryCtaHref}>{primaryCtaText}</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Explore the stack</GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Insights Section */}
      {features.length > 0 && (
        <section className="px-4 py-20 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Strategic Advantages" title="Why PrimusNeo for this sector" />
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, idx) => (
                <InsightCard key={idx} title={feature.title}>
                  {feature.description}
                </InsightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Layers Integration Section */}
      {layers.length > 0 && (
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Infrastructure" title="Platform layers tailored for you" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer, idx) => (
                <NumberedCard key={idx} number={`0${idx + 1}`} title={layer.title}>
                  {layer.description}
                </NumberedCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Case Section */}
      {useCase && (
        <section className="px-4 py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Case Study / Concept</div>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{useCase.title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">{useCase.description}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-xl font-bold mb-4 text-emerald-200">Key Outcomes</h3>
                <ul className="space-y-4">
                  {useCase.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-emerald-400 font-bold">→</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="px-4 py-24 bg-emerald-400/5 border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl mb-6">{ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-10">{ctaDesc}</p>
          <div className="flex justify-center">
            <GradientButton href={primaryCtaHref}>{primaryCtaText}</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};
