import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { partnerLogos } from '../_data/ecosystem';

const capabilities = [
  {
    title: 'Spatial OS',
    body: 'A full operating system for spatial collaboration: PLAN 3D interfaces, maps, data channels, community workspaces, and offline-capable peer-to-peer networking.',
  },
  {
    title: 'Peer-to-peer community tooling',
    body: 'Swarm file sharing, private storage, p2p services, identity, and group coordination that works without always needing a central server or cloud dependency.',
  },
  {
    title: 'Privacy-first architecture',
    body: 'Encrypted storage, local-first data, user-controlled sharing, and off-grid capability make Plan Systems suitable for communities, cooperatives, and sensitive operational contexts.',
  },
  {
    title: 'Accessible 2D/3D interfaces',
    body: 'Both browser-based and native 3D environments for spatial navigation, asset inspection, field data collection, training, and collaborative review.',
  },
];

const workflows = [
  'Community mapping and land use planning',
  'Field data collection with offline sync',
  'Swarm file sharing for project documents',
  'PLAN 3D spatial model review',
  'Channel-based team coordination',
  'Privacy-gated data rooms and archives',
];

const PlanSystemsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute left-0 top-0 -z-10 h-[560px] w-[640px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Plan Systems</div>
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white text-glow md:text-7xl">
              A mature spatial OS for peer-to-peer community coordination.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              Plan Systems has been building privacy-first, offline-capable spatial collaboration tools for years. Its PLAN 3D interface, data channels, swarm file sharing, and community OS workflows give PrimusNeo a proven foundation for spatial governance.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/oasis">OASIS Web4 integration</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Full stack</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Maturity</div>
            <p className="text-lg leading-8 text-gray-200">
              Plan Systems is not a concept. It is a working spatial operating system with deployed community networks, field-tested peer-to-peer infrastructure, and years of development behind its architecture.
            </p>
            <div className="mt-7">
              <PillList items={['Spatial OS', 'P2P networking', 'Offline-first', 'PLAN 3D', 'Data channels', 'Community governance']} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="What Plan Systems brings to PrimusNeo">
            Plan Systems is the most mature spatial collaboration layer in the stack. Its capabilities are proven across community networks, field operations, and privacy-sensitive deployments.
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2">
              <img
                src={partnerLogos.planArchitecture}
                loading="lazy"
                alt="Plan Systems architecture diagram"
                className="rounded-[1.25rem] shadow-2xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Proven architecture</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                Privacy-first, offline-capable, community-owned
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Plan Systems contributes more than technology. It contributes a design philosophy: communities should own their spatial data, collaborate without cloud dependency, and interact through both 2D and 3D interfaces that respect local context.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {workflows.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="Integration pattern" title="Where Plan Systems fits in the stack" className="mb-10">
            Plan Systems provides the spatial OS layer that OASIS and NEOS services connect into.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="Plan Systems">Spatial OS, PLAN 3D, channels, maps, p2p storage, community workspaces, and offline-first coordination.</NumberedCard>
            <NumberedCard number="02" title="OASIS">Identity, providers, holons, APIs, blockchain services, and cross-system interoperability.</NumberedCard>
            <NumberedCard number="03" title="NEOS + PrimusNeo">Governance records, councils, contribution flows, policies, and organizational state.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanSystemsPage;