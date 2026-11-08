import Image from 'next/image';
import { DreadShape, GradientButton, InsightCard, NumberedCard, SectionHeader } from '../_components/marketing';

export const metadata = {
  title: 'Elevate Impact — Research Enablement for the PrimusNeo Stack',
  description: 'Elevate Impact brings the people affected into the research, prepares it with expert-checked designs, and keeps the learning. Live with the sickle cell community.',
  alternates: { canonical: '/elevate-impact' },
  openGraph: {
    title: 'Elevate Impact | PrimusNeo',
    description: 'A collaboration intelligence platform that prioritises trust. Patients join as co-designers, never as subjects.',
    url: '/elevate-impact',
    type: 'website',
  },
};

const whatItDoes = [
  { title: 'Brings people in', body: 'The people affected join the work as co-designers, never as subjects.' },
  { title: 'Makes knowledge usable', body: 'Courses and lessons written with clinicians and advocates, in the languages communities use.' },
  { title: 'Prepares the research', body: 'The question, the measures, the responsibilities and the review steps are settled before anything runs.' },
  { title: 'Keeps the learning', body: 'What the work teaches stays on the platform, with a consent register and an audit trail.' },
];

const modules = [
  { n: '01', title: 'Discussion & Collaboration', body: 'Where patients, clinicians, advocates and researchers shape the question together.' },
  { n: '02', title: 'Learning & Development', body: 'Courses and lessons that make clinical and research knowledge usable by the people it affects.' },
  { n: '03', title: 'AI & Data', body: 'Turns questions into finished, expert-checked study designs. AI assists; it does not approve research.' },
  { n: '04', title: 'Analytics, Compliance & Process', body: 'A 6-stage lifecycle with 5 gates, a consent register and an audit trail.' },
];

const proof = [
  { value: '7', label: 'courses written with clinicians and advocates' },
  { value: '80', label: 'lessons, in 3 languages' },
  { value: '1,185', label: 'clinical trials analysed' },
  { value: '3,696', label: 'care and research centres mapped' },
  { value: '7,374', label: 'rare diseases catalogued' },
  { value: '390+', label: 'API operations across 121 data models' },
];

const flow = [
  { n: '01', title: 'AMP brings the field in', body: 'Designed to bring sites, people and context into the shared operational picture.' },
  { n: '02', title: 'Fractal Engine measures', body: 'Designed to measure outcomes against the research question.' },
  { n: '03', title: 'NEOS records the decision', body: 'Designed to record who approved what, and why, in the agreement record.' },
  { n: '04', title: 'AZOA settles the value', body: 'Designed to settle value with the people who did the work, under their consent.' },
];

const ElevateImpactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <DreadShape volume={5} id="01" className="absolute left-[5%] top-[10%] opacity-20" size={100} />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">Elevate Impact</div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white text-glow-green md:text-6xl">
              Research that the people <span className="text-emerald-300">affected</span> help design.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
              Elevate Impact is the research-enablement module of the PrimusNeo stack: a collaboration intelligence platform that prioritises trust. Design lives on the platform. Execution does not.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="https://elevateimpact.com/">Visit Elevate Impact</GradientButton>
              <GradientButton href="/contact" variant="secondary">Talk to us</GradientButton>
            </div>
          </div>

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
            <Image
              src="/images/stack/elevate-impact.svg"
              alt="Elevate Impact emblem"
              width={320}
              height={320}
              className="h-2/3 w-2/3 object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="What it does" title="From a question to a study design people trust">
            It does not run clinical trials or replace research teams. It prepares the work so the team can build the evidence.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whatItDoes.map((item) => (
              <InsightCard key={item.title} title={item.title}>{item.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Platform" title="Four modules on one substrate" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <NumberedCard key={m.n} number={m.n} title={m.title}>{m.body}</NumberedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Lifecycle" title="Six stages, five gates">
            Every study moves through a 6-stage lifecycle with 5 gates. A consent register and an audit trail record who agreed to what, and when. Experts review; AI does not approve.
          </SectionHeader>
        </div>
      </section>

      <section className="bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Live proof" title="In production with the sickle cell community">
            Platform figures, September 2026. Minority Business Enterprise certified.
          </SectionHeader>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {proof.map((p) => (
              <div key={p.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                <div className="text-4xl font-bold text-white text-glow">{p.value}</div>
                <div className="mt-2 text-base leading-7 text-gray-300">{p.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-300">
            In the lab: PrimusNeo brings the team and technology together. Elevate Impact helps the team build the evidence.
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="In build" title="How it connects to the stack" className="mb-10">
            Integration with AMP, NEOS, AZOA and Fractal Engine is in build. This is the planned flow, not a live one.
          </SectionHeader>
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {flow.map((f) => (
              <NumberedCard key={f.n} number={f.n} title={f.title}>{f.body}</NumberedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-emerald-400/10 bg-emerald-400/5 px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">Bring the people affected into the research.</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="https://elevateimpact.com/">Visit Elevate Impact</GradientButton>
            <GradientButton href="/contact" variant="secondary">Talk to PrimusNeo</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElevateImpactPage;
