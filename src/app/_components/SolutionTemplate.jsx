import React from 'react';
import { GradientButton, InsightCard, NumberedCard, SectionHeader, ChallengeCard, MetricCard } from './marketing';

export const SolutionTemplate = ({ 
  eyebrow, 
  title, 
  description, 
  stats = [],
  challenges = [],
  features = [], 
  layers = [], 
  useCase,
  children,
  ctaTitle = "Ready to transform your operations?",
  ctaDesc = "Connect with our team to see how PrimusNeo can be tailored to your specific needs.",
  primaryCtaText = "Request a Consultation",
  primaryCtaHref = "/contact"
}) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-4 py-24 md:py-40">
        <div className="absolute inset-0 -z-10 vite-grid opacity-40" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                {eyebrow}
              </div>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white text-glow md:text-7xl">
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
            
            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-8 lg:gap-12 p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                {stats.map((stat, idx) => (
                  <MetricCard key={idx} value={stat.value} label={stat.label} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <section className="px-4 py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeader 
              eyebrow="Industry Friction" 
              title="The high cost of fragmentation" 
            >
              Current systems in this sector suffer from deep-rooted structural inefficiencies that PrimusNeo is built to resolve.
            </SectionHeader>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge, idx) => (
                <ChallengeCard key={idx} {...challenge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features/Insights Section */}
      {features.length > 0 && (
        <section className="px-4 py-24 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Strategic Advantages" title="Why PrimusNeo for this sector" />
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, idx) => (
                <InsightCard key={idx} title={feature.title} eyebrow={feature.eyebrow}>
                  {feature.description}
                </InsightCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Layers Integration Section */}
      {layers.length > 0 && (
        <section className="px-4 py-24">
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

      {/* Custom Content */}
      {children}

      {/* Use Case Section */}
      {useCase && (
        <section className="px-4 py-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Case Study / Concept</div>
                <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">{useCase.title}</h2>
                <p className="mt-6 text-xl leading-9 text-gray-300">{useCase.description}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
                <h3 className="text-2xl font-bold mb-6 text-emerald-200">Key Outcomes</h3>
                <ul className="space-y-5">
                  {useCase.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-4 text-lg text-gray-300">
                      <span className="text-emerald-400 font-bold shrink-0">→</span>
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
      <section className="px-4 py-32 bg-emerald-400/5 border-t border-emerald-400/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl mb-8">{ctaTitle}</h2>
          <p className="text-2xl text-gray-300 mb-12">{ctaDesc}</p>
          <div className="flex justify-center">
            <GradientButton href={primaryCtaHref}>{primaryCtaText}</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};
