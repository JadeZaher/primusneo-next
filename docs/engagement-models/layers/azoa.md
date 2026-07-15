# AZOA — Federation Rails Engagement Model

> **Layer:** 03 — Autonomous Zones of Action (workflows, identity, settlement; formerly the OASIS layer)
> **Steward:** AZOA project
> **License:** Open-source engine (**Apache-2.0**, self-hostable end to end); commercial tier = PrimusNeo-managed nodes, enterprise federation gateway, certified rail adapters, SLA-backed support
> **Reference deployment:** Tie Town [TX] cross-system fabric
> **Anchors source:** [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. What AZOA actually is (in the buyer's vocabulary)

AZOA is an **engine for financial workflows that are highly dynamic but strictly structured**. You describe a multi-step process — who acts, what moves, under what conditions, in what order — and AZOA runs it durably to completion, settling value across whichever rails the workflow touches: blockchains, fiat, or both. Three composable layers make that work:

- **Identity** — self-sovereign avatars a person actually owns (wallet-challenge login, ed25519), with consent grants that let an app act on their behalf only within explicit, revocable permission.
- **Quests** — durable workflow graphs (gates, transfers, swaps, grants, external calls) that survive restarts, reconcile against real-world truth before acting again, and never double-spend.
- **Dapps (STAR)** — a generator that scaffolds and deploys applications on the identity and quest layers, so a new product doesn't rebuild the plumbing.

It still absorbs the integration tax the old interoperability pitch targeted — one structured seam instead of MuleSoft + chain-interop (Chainlink CCIP, LayerZero, Wormhole) + identity orchestration (Okta, Entra, Auth0, SSI Verified Credentials) point solutions — but the differentiated surface is **workflow settlement**: the same quest can move on-chain value (holons via `ChainProvider` adapters) and fiat-originated value (an idempotent, KYC-gated bridge call after money clears) in one run, with exactly-once execution, fail-closed security, and reconcile-before-acting discipline.

The pitch in one sentence: **"What Temporal is to durable code and MuleSoft is to integration, AZOA is to money in motion — durable, auditable, consent-gated workflows that settle across chain and fiat."**

In the language enterprises already know:

- A **healthcare CIO**: AZOA is the consent-gated identity and settlement seam that makes patient-owned records and payer settlement run on one auditable workflow.
- A **CSCO at a global 3PL**: AZOA signs and settles milestones (loaded, sailed, cleared, delivered) so trade finance, insurance, and customs execute on the same evidence — without a TradeLens-shaped operator owning the network.
- A **utility CIO**: AZOA is the settlement rail under flexibility dispatch — verified identity per asset, quest-gated payouts per MWh.
- A **bank Head of Digital Assets**: AZOA is the multi-chain + fiat + legacy-core workflow engine where exactly-once and fail-closed are architectural guarantees, not middleware promises.
- A **DAO Steward Council**: AZOA is how the DAO acts in the world — consent-delegated execution, structured treasury workflows, and rails to both chains and fiat partners.

AZOA is the layer that makes the federated four-layer stack **a stack** — the value-motion seam through which the other layers act on the world. SurrealDB is its sole data engine; real-world state (chain confirmations, settlement callbacks) is the source of truth, so balances are read, never stored.

---

## 2. License posture

**Open-source engine + commercial managed tier.** The entire AZOA engine — identity & consent, quests, holons, swaps, STAR, settlement bridges, the `@azoa/sdk` TypeScript SDK — is **Apache-2.0** and self-hostable end to end. What we charge for is operational:

| Component | Commercial posture |
|-----------|--------------------|
| AZOA engine (.NET 10 WebAPI, all protocol layers) | **Apache-2.0** — free to self-host, fork, extend |
| `@azoa/sdk` (TypeScript), `ChainProvider` / `DexAdapter` interfaces | **Apache-2.0** |
| **PrimusNeo-managed AZOA nodes** (hosted WebAPI + SurrealDB, ops, upgrades) | **Commercial (PEL)** |
| **Enterprise federation gateway** (multi-tenant, multi-node, SLA-bearing) | **Commercial (PEL)** |
| **Certified settlement-rail adapters** (fiat partners, premium chain relationships carrying commercial cost) | **Commercial (PEL)** |
| Enterprise support, SLAs, compliance evidence packs | **Commercial (PEL)** |

See [`../02-licensing-model.md` §3](../02-licensing-model.md). Self-hosting is genuinely free — the moat is the managed service, certified rails, and trademark, not the source.

---

## 3. Pricing tiers (annual managed-tier license, before services)

| Scale | Definition | Annual License | Services Multiplier (Y1) | Typical 3-yr TCO |
|-------|------------|----------------|--------------------------|------------------|
| **Small** | <10 rails/integrations, single node, <1M API calls/month | **$24K–$60K/yr** | 2–3x | $200K–$550K |
| **Mid** | 10–50 rails/integrations, multi-chain + fiat, 1M–50M calls/month | **$80K–$250K/yr** | 2–3x | $620K–$2.0M |
| **Large** | 50+ rails/integrations, federation gateway, >50M API calls/month, cross-org | **$350K–$1.5M/yr** | 2–3x | $2.7M–$12M |

**Pricing mechanic options** (default in bold):

- **Per-rail + base platform fee** (default; most predictable): base $24K–$200K/yr + $3K–$15K/rail-or-connector/yr beyond the included count (5/15/50 for Small/Mid/Large)
- Per-API-call / per-quest-run metered overage: $0.001–$0.05/call beyond included tier volume (1M / 50M / unlimited+)
- Per-vCore equivalent (MuleSoft-style, for buyers used to that mechanic): $1,000–$1,400/vCore/month
- Per-entity-enrolled (federation deployments): $2K–$15K/entity/yr for governance-fabric pricing

**Gas/chain fees** (for on-chain settlement) are **always pass-through at cost + 12% management fee**, never bundled into the platform license. Fiat settlement-partner fees stay with the settlement tenant — AZOA never runs the checkout or owns the payout.

---

## 4. Services mix

AZOA is the **highest services multiplier** of the four layers (2–3x Y1) because rail and connector buildout is real engineering work. Typical Mid-tier SOW:

| Service | Scope | Fixed-fee range |
|---------|-------|-----------------|
| **Integration audit + discovery** | Inventory of buyer's existing integrations and settlement flows, prioritization | $40K–$80K |
| **ERP/MES/EHR/TMS/CRM connectors** | Per-connector fixed-fee (see [`../03-services-catalog.md` §2.2](../03-services-catalog.md) connector class table) | $20K–$400K/connector |
| **Chain rails** | Per-chain via `ChainProvider` (Solana + Wormhole routes shipped; EVM et al. via the adapter interface) | $20K–$75K/chain |
| **Fiat settlement seams** | Per settlement tenant: KYC-gated bridge integration, idempotency + reconciliation wiring | $30K–$120K/partner |
| **Quest design + workflow buildout** | Durable workflow graphs, gate/consent design, visual-builder templates | $25K–$150K |
| **SurrealDB provisioning + tuning** | Schema, G1 durability config, optional S3-compatible bucket offload | $15K–$40K |
| **Identity federation buildout** | IdP integration + SSI Verified Credentials wiring + NEOS identity bridging | $50K–$200K |
| **Federation gateway deployment** (Large only) | Multi-tenant gateway + cross-org node federation setup | $200K–$800K one-time |
| **30-day hypercare** | Stabilization + rail tuning | Included |

PrimusNeo retains the right to harden, generalize, and redistribute any non-bespoke adapter through the AZOA adapter library (a Y2+ revenue tailwind for both the AZOA project and PrimusNeo).

---

## 5. Sustained upkeep + infra

Annual sustained upkeep = **20–25% of license** (above the all-layer 18% floor because rails need active maintenance against upstream chain and partner API changes).

Infra (pass-through + 12% mgmt fee):

- **Managed node / federation gateway hosting** (regional or multi-region): $2,000–$15,000/mo by tier
- **API gateway + observability**: $500–$5,000/mo by call volume
- **Chain gas reserve**: highly variable by chain + usage; quoted per engagement
- **SurrealDB storage** (RocksDB-backed, G1 durability): sized per node; **optional S3-compatible bucket offload** at $0.012–$0.025/GB-month — SurrealDB is the sole data engine; there are no other storage backends to operate
- **Identity provider pass-through**: at provider rates (Okta/Entra/Auth0 seat costs flow through)

---

## 6. Bundle interactions

AZOA is the **value-motion seam** that makes every other bundle composition viable. It is almost never sold alone above the Small tier — buyers who pick it always end up wanting the layers it federates.

| Other layer | What you unlock together |
|-------------|--------------------------|
| **+ NEOS** | Governance decisions become quest gates: councils authorize, AZOA executes and settles, and the signed decision trail flows across orgs. **Required duo for any multi-org or regulated engagement.** |
| **+ Fractal Engine** | Quest telemetry and settlement history become first-class signals; Fractal reads the workflow ledger into auditable intelligence. **Common duo for finance regulatory reporting, manufacturing IT/OT, healthcare settlement.** |
| **+ AMP** | External system state and value events surface into the AMP spatial scene (settlement milestones become asset-attached, alerts become room-attached). **Required for any operational-twin engagement at scale.** |
| **Full Stack** | AZOA as the connective settlement tissue is what makes the federated stack actually federated. |

---

## 7. Two worked engagement examples

### 7.1 Mid AZOA-only: 4-plant mid-cap manufacturer wanting an IT/OT bridge (Tier-2 Mid)

- **Buyer:** CIO + VP Operations at a $400M revenue mid-cap discrete manufacturer with 4 plants in NA. Existing stack: SAP S/4HANA, Rockwell FactoryTalk MES, GE Proficy historian, mixed PLC fleet
- **Scope:** AZOA as the IT/OT integration and workflow fabric, replacing 3 brittle in-house Python ETL pipelines and 1 legacy MuleSoft instance the team wants to retire; supplier-payment quests gated on verified receipt events
- **Quote:**
  - AZOA Mid: $130K/yr (15 rails/integrations: 4 plants × 3 systems + 3 cross-plant)
  - No bundle (single-layer)
  - Y1 services (~2.5x license): $325K (connector buildouts: SAP $120K + Rockwell $180K + Proficy $80K, with bundle discounts)
  - Y1 upkeep (Silver SLA, 22%): starts Y2 at $29K
  - Infra: $4K/mo
- **Y1 total:** ~$500K · **3-yr TCO:** ~$1.0M
- **Friction-cost anchor:** MuleSoft existing spend $180K/yr + 2 FTE Python engineers maintaining ETL at $300K/yr fully loaded + integration-debt-driven IT/OT incidents costing ~$400K/yr in downtime → $880K/yr direct friction
- **Capture rate:** $500K ÷ $880K = **57% capture** of *direct* friction in Y1 (high because AZOA is genuinely displacing line items, not just adding value)
- **Y2 expansion path:** Add Fractal Engine for IT/OT signal intelligence (a likely $200K/yr addition)

### 7.2 Large AZOA+NEOS: National port-operator network (Tier-3 Large)

- **Buyer:** CSCO + CIO at a national port operator running 8 terminals + coordination with 5 ocean carriers, 3 rail carriers, customs authority
- **Scope:** AZOA as the cross-party data-and-settlement fabric (Navis N4 connectors, customs single-window integration, carrier APIs, IoT in-transit visibility ingest, milestone-gated settlement quests); NEOS as the governance-neutral consortium fabric that explicitly solves the TradeLens-shaped failure mode
- **Quote:**
  - AZOA Large: $720K/yr (50+ rails/integrations, multi-org federation gateway on)
  - NEOS Large: $220K/yr (cross-org councils for SLA + data-sharing + dispute resolution)
  - Duet bundle: -10% → $846K/yr license
  - Y1 services (~2.2x blend): $1.86M
  - Y1 upkeep (Gold SLA, 25%): $212K (starts Y2)
  - Infra: $250K–$600K/yr
- **Y1 total:** ~$3.0M–$3.5M · **3-yr TCO:** ~$6.5M–$8M
- **Friction-cost anchor:** TradeLens precedent: $1B+ collectively spent and lost across the prior consortium attempt. Per the logistics research brief, project44/FourKites $300K+/yr standing visibility cost displaced or augmented. EU CBAM compliance starting Jan 2026 adds $500K–$2M/yr at this scale. Combined friction window: $3M–$8M/yr
- **Capture rate:** $846K ÷ $5M = **~17% value share** — defensible inside the 10–20% logistics capture band

---

## 8. Steward economics

Per [`../02-licensing-model.md` §4](../02-licensing-model.md):

- **AZOA steward royalty: 15% of AZOA line-item license revenue** (managed-tier), paid quarterly
- The AZOA project also leads rail-adapter development for certified settlement partners; per-adapter services revenue is often delivered by their authors
- Adapter reuse (where PrimusNeo hardens and redistributes a non-bespoke adapter) accrues royalty to the AZOA steward on the redistributed license revenue, not the original engagement

---

## 9. Risks specific to AZOA

| Risk | Mitigation |
|------|------------|
| TradeLens-shaped consortium failure | NEOS governance-neutrality (no single party owns the network) is the explicit answer. Charter every multi-party deployment with this principle from day 1 |
| MuleSoft / Boomi incumbent displacement resistance | Position AZOA as the **workflow + settlement fabric** the incumbents don't cover (durable quests, chain + fiat rails, consent-gated identity), not as a pure Web2 iPaaS replacement |
| Rail maintenance cost cliff | Active maintenance baked into 20–25% sustained upkeep; adapter library reuse amortizes cost across customers |
| Self-host cannibalization of the managed tier | The engine is deliberately Apache-2.0 — the funnel. Managed nodes win on ops burden (durability config, guardian sets, reconciliation runbooks are operator responsibilities self-hosters must own), certified rails, and SLAs |
| Cloud-hyperscaler hosted fork | No license defense by design; compete on certified settlement partners, compliance evidence packs, federation gateway, and the PrimusNeo stack integration (Temporal/Grafana precedent: the managed+ecosystem moat holds) |
| Chain/gas cost volatility | Always pass-through; never bundled. Customer signs the gas reserve estimate and gets monthly reconciliation |
| Real-value routes still gated (`RealValueEnabled=false` pre-launch safety switch on chain-value routes) | Scope early engagements to workflows + identity + fiat-seam settlement; chain-value routes activate per the AZOA roadmap gate, and quotes flag this explicitly |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial OAS engagement model |
| 0.2 | 2026-07-15 | Founding team | Rewritten for AZOA: Apache-2.0 engine + managed tier, quest/identity/rails architecture, SurrealDB-only storage |
