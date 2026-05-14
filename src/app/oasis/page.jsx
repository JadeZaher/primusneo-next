import { GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { partnerLogos } from '../_data/ecosystem';

const capabilities = [
  {
    title: 'Universal API',
    body: 'One API that abstracts across providers, blockchain networks, storage systems, identity frameworks, and Web2/Web3 services. No vendor lock-in, no provider-specific integrations.',
  },
  {
    title: 'Identity and avatars',
    body: 'Self-sovereign identity, reputation, holons, and avatar systems that work across applications. Users carry their identity, data, and relationships instead of recreating them in every silo.',
  },
  {
    title: 'Multi-chain and cross-provider',
    body: 'Solana, Algorand, Ethereum, Polygon, Radix, and more — plus AWS, Azure, Google Cloud, IPFS, Arweave, and Holochain. OASIS routes requests intelligently across providers with fallback and failover.',
  },
  {
    title: 'Web4/Web5 interoperability',
    body: 'Designed for the next internet generation: semantic data, decentralized storage, verifiable credentials, data pods, p2p messaging, and application-agnostic service composition.',
  },
];

const providers = [
  'Solana', 'Algorand', 'Ethereum', 'Polygon', 'Arbitrum', 'Base',
  'Avalanche', 'Radix', 'BNB Chain', 'Optimism', 'Fantom',
  'AWS', 'Azure', 'Google Cloud', 'MongoDB', 'IPFS', 'Arweave',
  'Holochain', 'ThreeFold', 'Solid',
];

const OasisPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute right-0 top-0 -z-10 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">OASIS Web4</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
              The universal interoperability fabric for Web4/Web5.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              OASIS is a mature, production-grade universal API that spans blockchain networks, cloud providers, storage systems, identity frameworks, and Web2/Web3 services. It gives PrimusNeo the interoperability backbone that makes multi-chain governance and cross-provider workflows practical.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/plan-systems">Plan Systems integration</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Full stack</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Production ready</div>
            <p className="text-lg leading-8 text-gray-200">
              OASIS is already deployed with a live API, ecosystem of supported providers, identity system, holon architecture, and real-world integrations. It is the most mature interoperability layer in the PrimusNeo stack.
            </p>
            <div className="mt-7">
              <PillList items={['Universal API', 'Multi-chain', 'Self-sovereign ID', 'Holons', 'Provider routing', 'Failover']} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="What OASIS brings to PrimusNeo">
            OASIS provides the most mature and production-ready piece of the stack. It has been operating as a live service with real provider integrations and a growing developer ecosystem.
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3">
              <img
                src={partnerLogos.oasis}
                loading="lazy"
                alt="OASIS Web4 logo and platform"
                className="rounded-[1.25rem] bg-white/5 p-6 shadow-2xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Supported providers</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                One API across dozens of networks and services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                OASIS abstracts away the complexity of individual provider integrations. Applications built on OASIS can switch between chains, storage backends, and cloud providers without rewriting code — and get intelligent routing, failover, and data replication for free.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {providers.map((provider) => (
                  <span key={provider} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300">
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.15),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12">
          <SectionHeader eyebrow="Integration pattern" title="Where OASIS fits in the stack" className="mb-10">
            OASIS is the interoperability layer that connects every other piece — governance, spatial data, assets, identity, and applications — through a unified API.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <NumberedCard number="01" title="OASIS">Universal API, identity, providers, holons, storage, blockchain, and Web4 services.</NumberedCard>
            <NumberedCard number="02" title="NEOS">Governance records, councils, contribution flows, and organizational state connected via OASIS.</NumberedCard>
            <NumberedCard number="03" title="Plan Systems">Spatial OS interfaces that use OASIS for identity, storage, and cross-system communication.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OasisPage;