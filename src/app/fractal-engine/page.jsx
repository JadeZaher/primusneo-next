import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';

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
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute right-0 top-0 -z-10 h-[560px] w-[640px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Fractal Engine</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
              Intelligence and analytics for federated infrastructure.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              Fractal Engine is the intelligence layer developed by Escherbridge. It provides the analytical backbone for the PrimusNeo stack, turning operational data from AMP and OASIS into historical insights, spatial reporting, and infrastructure intelligence.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/amp">Spatial OS (AMP)</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Ecosystem vision</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Intelligence Role</div>
            <p className="text-lg leading-8 text-gray-200">
              While AMP handles real-time operations, Fractal Engine handles the "memory" and "intelligence" of the system, ensuring that data is not just collected, but understood.
            </p>
            <div className="mt-7">
              <PillList items={['Intelligence Layer', 'Data Warehousing', 'Spatial Analytics', 'Hexon v1.0.0', 'WASM Plugins', 'Forecasting']} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
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

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Developer Profile</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Developed by Escherbridge
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Escherbridge leads the development of Fractal Engine and provides integration support for partners building on the PrimusNeo stack. They bridge high-level architecture with production delivery, ensuring the intelligence layer integrates seamlessly with operational spatial data.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">The Hexon Standard</h3>
              <p className="mb-6 leading-8 text-gray-300">
                Fractal Engine utilizes the Hexon (v1.0.0) standard to share interoperable operational data with AMP. This ensures that intelligence logic can be built once and deployed across any Hexon-compliant spatial environment.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-bold text-emerald-300">Interoperable Archives</h4>
                  <p className="text-sm text-gray-400">Bundled spatial scenes, manifests, and content-addressed assets verified via BLAKE3 hashes.</p>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-emerald-300">WASM Extension Ecosystem</h4>
                  <p className="text-sm text-gray-400">Reactive scene hooks and intelligence logic using the WASM Component Model and Rhai-based scripting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="Integration Pattern" title="Operational Intelligence Flow" className="mb-10">
            Fractal Engine connects the operational layers of the stack to provide a feedback loop for governance and optimization.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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