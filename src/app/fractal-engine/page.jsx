import Image from 'next/image';
import { DreadShape, GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';

const capabilities = [
  {
    title: 'Spatial Analytics',
    body: 'Deep analysis of spatial data, digital twin telemetry, and real-world operational flows to identify patterns, bottlenecks, and optimization opportunities.',
  },
  {
    title: 'Historical Warehousing',
    body: 'An append-only historical record of operational state. Fractal Engine ingests realtime data from AMP to create durable, auditable archives of ecosystem activity.',
  },
  {
    title: 'Automated Insights',
    body: 'AI-assisted analysis that translates raw telemetry and governance data into actionable intelligence for councils, operators, and builders.',
  },
  {
    title: 'Infrastructure Forecasting',
    body: 'Predictive modeling for resource usage, infrastructure maintenance, and community growth based on historical operational performance.',
  },
];

const features = [
  'Hexon (v1.0.0) archive ingestion',
  'WASM-based intelligence plugins',
  'Cross-platform data warehousing',
  'Signed manifest verification',
  'Real-time analytics pipelines',
  'Spatial situational awareness',
];

const FractalEnginePage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-30" />
        <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        
        <DreadShape volume={5} id="01" className="absolute left-[5%] top-[10%] opacity-20" size={100} />
        <DreadShape volume={1} id="04" className="absolute right-[10%] bottom-[20%] opacity-15 rotate-12" size={120} />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-emerald-400">Fractal Engine</div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white text-glow-green md:text-6xl">
              Intelligence for <span className="text-emerald-300">Federated</span> Infrastructure.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
              Fractal Engine is the analytical backbone for the PrimusNeo stack, turning operational data from AMP and OASIS into historical insights, spatial reporting, and infrastructure intelligence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/amp">Spatial OS (AMP)</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Ecosystem vision</GradientButton>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
            <Image 
              src="/images/newassets/00-hero-transmission.png"
              alt="Fractal Engine Transmission"
              fill
              className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">Live Ingestion Stream: Hexon v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 relative">
        <DreadShape volume={1} id="09" className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-10 -rotate-45" size={150} />
        
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="Turning telemetry into intelligence">
            Fractal Engine specializes in understanding the relationship between spatial environments, governance decisions, and operational performance.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <InsightCard key={capability.title} title={capability.title}>{capability.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-white/[0.02] relative overflow-hidden">
        <DreadShape volume={5} id="07" className="absolute -right-20 top-0 opacity-5 rotate-12" size={250} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader eyebrow="Operational Arc" title="The Intelligence Lifecycle" />
          
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { id: '01', title: 'Crisis', img: 'ep01-crisis-frame.png' },
              { id: '02', title: 'Diagnosis', img: 'ep02-diagnosis-frame.png' },
              { id: '03', title: 'Architecture', img: 'ep03-architecture-frame.png' },
              { id: '04', title: 'Deployment', img: 'ep04-deployment-frame.png' },
              { id: '05', title: 'Sovereignty', img: 'ep05-sovereign-frame.png' },
            ].map((ep) => (
              <div key={ep.id} className="group relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:border-emerald-500/30">
                  <Image 
                    src={`/images/newassets/${ep.img}`}
                    alt={ep.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">Phase {ep.id}</div>
                  <div className="text-lg font-bold text-white tracking-tight">{ep.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
              <DreadShape volume={5} id="12" className="absolute -right-6 -bottom-6 opacity-20" size={150} />
              
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Developer Profile</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Developed by Escherbridge
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Escherbridge leads the development of Fractal Engine and provides integration support for partners building on the PrimusNeo stack. They bridge high-level architecture with production delivery.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-2xl group">
              <video 
                src="/images/newassets/ep01-crisis-veo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                <div className="text-center">
                  <div className="text-xs font-mono uppercase tracking-[0.4em] text-red-500 mb-2 animate-pulse">Simulating: Crisis Event</div>
                  <div className="text-3xl font-black text-white tracking-tighter drop-shadow-2xl">HEXON_DIAGNOSTIC_v1</div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="h-1 w-8 bg-emerald-500/50" />
                <div className="h-1 w-4 bg-emerald-500/20" />
                <div className="h-1 w-12 bg-emerald-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12 relative overflow-hidden">
          <DreadShape volume={1} id="15" className="absolute right-10 top-10 opacity-10" size={200} />
          
          <SectionHeader eyebrow="Integration Pattern" title="Operational Intelligence Flow" className="mb-10">
            Fractal Engine connects the operational layers of the stack to provide a feedback loop for governance and optimization.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            <NumberedCard number="01" title="Ingest">Collects real-time operational telemetry from AMP and identity/provider data from OASIS.</NumberedCard>
            <NumberedCard number="02" title="Warehouse">Stores data in append-only, content-addressed historical archives for auditability and provenance.</NumberedCard>
            <NumberedCard number="03" title="Analyze">Processes data via WASM-based plugins to generate spatial, financial, and operational insights.</NumberedCard>
            <NumberedCard number="04" title="Report">Feeds insights back to PrimusNeo councils and operational dashboards for informed decision-making.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FractalEnginePage;