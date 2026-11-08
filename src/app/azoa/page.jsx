import { DreadShape, GradientButton, InsightCard, NumberedCard, PillList, SectionHeader } from '../_components/marketing';
import { partnerLogos } from '../_data/ecosystem';

export const metadata = {
  title: 'AZOA — Autonomous Zones of Action',
  description: 'AZOA is an open-source engine for financial workflows that are highly dynamic but strictly structured — self-sovereign identity, durable quests, and settlement rails across blockchain and fiat.',
  alternates: { canonical: '/azoa' },
  openGraph: {
    title: 'AZOA | PrimusNeo',
    description: 'Federation rails: identity and consent, durable quest workflows, and chain + fiat settlement behind one structured seam.',
    url: '/azoa',
    type: 'website',
  },
};

const capabilities = [
  {
    title: 'Durable quests',
    body: 'A quest is a graph of steps — gates, transfers, swaps, grants, external calls — that survives restarts, reconciles against real-world truth before acting again, and never double-spends. Dynamic where you need it, strictly structured where it counts.',
  },
  {
    title: 'Identity and consent',
    body: 'Self-sovereign avatars that people actually own (wallet-challenge login, ed25519), with a consent model that lets an app act on their behalf only within explicit, revocable permission grants.',
  },
  {
    title: 'Chain and fiat rails',
    body: 'A blockchain and a fiat settlement partner are two kinds of rail behind one uniform interface. On-chain assets move as holons through provider adapters; fiat enters through one idempotent, KYC-gated bridge call after money has cleared.',
  },
  {
    title: 'Dapps (STAR)',
    body: 'A generator that scaffolds and deploys applications on top of the identity and quest layers, so a new product ships on the same plumbing instead of rebuilding it — straight to the marketplace.',
  },
];

const rails = [
  'Algorand', 'Solana', 'Ethereum', 'Wormhole', 'ChainProvider adapters', 'DexAdapter routing',
  'Fiat seam', 'SurrealDB data engine', 'S3-compatible buckets',
  '@azoa/sdk (TypeScript)', '.NET 10 WebAPI', 'ed25519 identity',
  'Visual quest builder', 'Apache-2.0',
];

const AzoaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <section className="relative overflow-hidden px-4 py-20 md:py-28">
        <DreadShape volume={1} id="06" className="absolute left-[5%] top-[10%] opacity-15" size={100} />
        <DreadShape volume={5} id="02" className="absolute right-[5%] bottom-[15%] opacity-10 rotate-12" size={120} />

        <div className="absolute inset-0 -z-10 vite-grid opacity-50" />
        <div className="absolute right-0 top-0 -z-10 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">AZOA — Autonomous Zones of Action</div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-200 text-glow-green md:text-5xl">
              Financial workflows that are dynamic — and strictly structured.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-300">
              AZOA is the open-source engine on PrimusNeo&rsquo;s federation rails. Describe a multi-step process — who acts, what moves, under what conditions, in what order — and AZOA runs it durably to completion, settling value across whichever rails the workflow touches: blockchains, fiat, or both.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GradientButton href="/amp">AMP integration</GradientButton>
              <GradientButton href="/one-pager" variant="secondary">Full stack</GradientButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl relative overflow-hidden">
            <DreadShape volume={1} id="19" className="absolute -right-6 -bottom-6 opacity-20 rotate-45" size={140} />
            <div className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">Pre-launch</div>
            <p className="text-lg leading-8 text-gray-200">
              AZOA is pre-launch (Alpha Gate). Self-sovereign identity and revocable consent are shipped and security-reviewed. Durable quests, a visual quest builder and SurrealDB as the sole data engine are built, with thousands of automated tests written across engine, SDK and interface. Real-value bridges stay off by default until production custody passes review.
            </p>
            <div className="mt-7 relative z-10">
              <PillList items={['Exactly-once by construction', 'Fail closed', 'Reconcile, never guess', 'Escalate to a human']} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 relative">
        <DreadShape volume={5} id="07" className="absolute -left-10 top-0 opacity-10" size={160} />
        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader eyebrow="Capabilities" title="What AZOA brings to PrimusNeo">
            AZOA is the value-motion layer of the stack. Every workflow gets an owner, a consent trail, and a settlement rail — with exactly-once execution, fail-closed security, and reconcile-before-acting discipline built in.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <InsightCard key={capability.title} title={capability.title}>{capability.body}</InsightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 relative overflow-hidden">
        <DreadShape volume={1} id="10" className="absolute -right-20 top-1/2 opacity-5 rotate-12" size={250} />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3">
              <img
                src={partnerLogos.azoa}
                loading="lazy"
                alt="AZOA logo and platform"
                className="rounded-[1.25rem] bg-white/5 p-6 shadow-2xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Rails & runtime</div>
              <h2 className="mt-4 text-4xl font-bold text-white text-glow md:text-5xl">
                One structured seam across chain and fiat
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Algorand, Solana and Ethereum providers plug in via the ChainProvider interface, DEXes via DexAdapter, and fiat through an idempotent, KYC-gated bridge seam. SurrealDB is the sole data engine — real-world state is the source of truth, so balances are read, never stored — with S3-compatible buckets as the only other storage surface. Because the engine is Apache-2.0, nodes can be self-hosted, including on-prem hardware through infrastructure partner <a href="https://opqpwr.com" target="_blank" rel="noreferrer" className="text-emerald-300 underline-offset-4 hover:underline">OPQPWR</a>; that partnership is a starting point, not a running deployment.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {rails.map((rail) => (
                  <span key={rail} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300">
                    {rail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.15),transparent_35%),rgba(255,255,255,0.045)] p-8 md:p-12 relative overflow-hidden">
          <DreadShape volume={1} id="15" className="absolute right-0 top-0 opacity-10" size={180} />
          <SectionHeader eyebrow="Integration pattern" title="Where AZOA fits in the stack" className="mb-10">
            AZOA is the workflow-and-settlement layer that connects the stack — governance, spatial operations, assets, and identity — through structured, durable quests.
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            <NumberedCard number="01" title="AMP">Spatial OS interfaces that use AZOA for identity, consent, and value-bearing workflows.</NumberedCard>
            <NumberedCard number="02" title="NEOS">Governance decisions become quest gates: councils authorize, AZOA executes and settles.</NumberedCard>
            <NumberedCard number="03" title="AZOA">Identity, quests, holons, swaps, STAR dapps, and settlement bridges — the federation rails.</NumberedCard>
            <NumberedCard number="04" title="Fractal Engine">Intelligence layer that reads quest telemetry and settlement history into auditable insight.</NumberedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AzoaPage;
