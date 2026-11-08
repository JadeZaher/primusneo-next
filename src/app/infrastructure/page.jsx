import Image from 'next/image';
import { DreadShape, GradientButton, InsightCard, NumberedCard, SectionHeader } from '../_components/marketing';

export const metadata = {
  title: 'OPQPWR — Physical Infrastructure for the PrimusNeo Stack',
  description: 'OPQPWR builds modular, field-deployable racks for power, AI compute, storage, cooling, protection and communications. The physical layer for a self-service, on-prem, bare-metal PrimusNeo stack. Partnership starting.',
  alternates: { canonical: '/infrastructure' },
  openGraph: {
    title: 'OPQPWR | PrimusNeo',
    description: 'The physical layer of the stack: field-deployable, on-prem, bare-metal racks. Partnership starting.',
    url: '/infrastructure',
    type: 'website',
  },
};

const provides = [
  { title: 'Modular racks', body: 'Field-deployable racks that combine power, AI compute, storage, cooling, protection and communications.' },
  { title: 'Compute where it is hard to get', body: 'Useful compute in places where infrastructure is limited, contested, or unavailable.' },
  { title: 'Solar In a Box', body: 'A factory-built solar plant, offered by OPQPWR alongside the racks.' },
];

const whyOnPrem = [
  { n: '01', title: 'AMP is offline-first', body: 'The operational runtime is designed to keep working without a connection, so it needs a place to run on the ground.' },
  { n: '02', title: 'AZOA is built to self-host', body: 'AZOA is designed to run as nodes you host yourself, on hardware you own.' },
  { n: '03', title: 'Tie Town [TX] plans an edge node', body: 'The first deployment plans an edge node. OPQPWR is the path to the hardware for it.' },
];

const InfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <DreadShape volume={5} id="01" className="absolute left-[5%] top-[10%] opacity-20" size={100} />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">OPQPWR · Layer 00</div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white text-glow-green md:text-6xl">
              The ground the stack <span className="text-emerald-300">runs on</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
              OPQPWR (Opaque Power) is the physical layer of the PrimusNeo stack: field-deployable racks for a self-service, on-prem, bare-metal deployment. The partnership is starting.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="https://opqpwr.com/" target="_blank" rel="noopener noreferrer">Visit OPQPWR</GradientButton>
              <GradientButton href="/contact" variant="secondary">Talk to us</GradientButton>
            </div>
          </div>

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
            <Image
              src="/images/stack/physical-infrastructure.svg"
              alt="OPQPWR emblem: a rack elevation on a ground line with a power bus"
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
          <SectionHeader eyebrow="What OPQPWR provides" title="A Mission Infrastructure Platform">
            Deploy useful compute where infrastructure is limited, contested, or unavailable.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            {provides.map((item) => (
              <InsightCard key={item.title} title={item.title}>{item.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white/[0.02] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why on-prem" title="Why bare metal matters for this stack">
            The layers above are designed to run on hardware you own. This is a design property, not a live deployment.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-3">
            {whyOnPrem.map((item) => (
              <NumberedCard key={item.n} number={item.n} title={item.title}>{item.body}</NumberedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-white/[0.045] p-8 md:p-12">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Status</div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Partnership starting</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Nothing runs on OPQPWR hardware yet. OPQPWR is the starting partner on the path to running the stack on owned, bare-metal hardware.
          </p>
        </div>
      </section>

      <section className="border-t border-emerald-400/10 bg-emerald-400/5 px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">Start from the ground.</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="https://opqpwr.com/" target="_blank" rel="noopener noreferrer">Visit OPQPWR</GradientButton>
            <GradientButton href="/contact" variant="secondary">Talk to PrimusNeo</GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
