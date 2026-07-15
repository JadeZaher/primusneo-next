# AZOA — Interoperability Fabric Engagement Model

> **Layer:** 03 — Universal Interoperability Fabric (formerly AZOA)
> **Steward:** AZOA
> **License:** Closed-core / partial-OSS (Connector SDK + public API spec open MIT/Apache-2.0; federation engine + enterprise gateway + closed-source provider connectors closed)
> **Reference deployment:** Tie Town [TX] cross-system fabric
> **Anchors source:** [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. What AZOA actually is (in the buyer's vocabulary)

AZOA is **one API across providers, chains, storage systems, identity, avatars, and reputation** — the modular interoperability backbone that absorbs the integration tax every enterprise pays today across MuleSoft, Boomi, Workato, AND chain-interop layers (Chainlink CCIP, LayerZero, Axelar, Wormhole) AND identity orchestration (Okta, Entra, Auth0, SSI Verified Credentials) AND decentralized storage (Pinata, Filebase, Ceramic).

The pitch in one sentence: **"What MuleSoft is for Web2 enterprise integration, AZOA is for the Web2+Web3 + identity + storage + reputation reality your operation actually runs in."**

In the language enterprises already know:

- A **healthcare CIO**: AZOA is the TEFCA-native FHIR fabric that compresses the multi-million-dollar Epic integration tax.
- A **CSCO at a global 3PL**: AZOA is the carrier-shipper-3PL governance-neutral integration layer that *isn't* the TradeLens shaped failure.
- A **utility CIO**: AZOA is the IT/OT bridge under FERC Order 2222 — the layer that lets the ADMS + DERMS + ETRM stack speak the same language without ripping out any incumbent.
- A **bank Head of Digital Assets**: AZOA is the multi-custodian + multi-chain + legacy-core integration fabric that no incumbent iPaaS covers.
- A **DAO Steward Council**: AZOA is how the DAO actually talks to the world (cross-chain bridges, off-chain identity, storage providers) under one operational contract instead of seven.

AZOA is the layer that makes the federated four-layer stack **a stack** instead of four products. Without AZOA, the others don't compose at the integration layer — and "they don't compose" is the failure mode every prior multi-vendor attempt at this has hit.

---

## 2. License posture

**Closed-core / partial-OSS** — connector SDK + API spec + community connectors are open; federation engine + enterprise gateway + closed provider connectors are commercial.

| Component | License |
|-----------|---------|
| Connector SDK | MIT or Apache-2.0 |
| Public REST/GraphQL API specification | Apache-2.0 |
| Community-maintained open connectors | MIT or Apache-2.0 |
| **Federation engine** (the cross-org orchestration kernel) | **Closed (PEL)** |
| **Enterprise gateway** (multi-tenant, SLA-bearing) | **Closed (PEL)** |
| **Identity / reputation orchestration kernel** | **Closed (PEL)** |
| **Closed-source provider connectors** (those carrying commercial cost — proprietary chain partnerships, premium storage providers) | **Closed (PEL)** |

See [`../02-licensing-model.md` §3](../02-licensing-model.md).

---

## 3. Pricing tiers (annual license, before services)

| Scale | Definition | Annual License | Services Multiplier (Y1) | Typical 3-yr TCO |
|-------|------------|----------------|--------------------------|------------------|
| **Small** | <10 integrations, single domain, <1M API calls/month | **$24K–$60K/yr** | 2–3x | $200K–$550K |
| **Mid** | 10–50 integrations, multi-chain/multi-cloud, 1M–50M calls/month | **$80K–$250K/yr** | 2–3x | $620K–$2.0M |
| **Large** | 50+ integrations, full federation engine, >50M API calls/month, cross-org | **$350K–$1.5M/yr** | 2–3x | $2.7M–$12M |

**Pricing mechanic options** (default in bold):

- **Per-connector + base platform fee** (default; most predictable): base $24K–$200K/yr + $3K–$15K/connector/yr beyond the included count (5/15/50 for Small/Mid/Large)
- Per-API-call / per-event metered overage: $0.001–$0.05/call beyond included tier volume (1M / 50M / unlimited+)
- Per-vCore equivalent (MuleSoft-style, for buyers used to that mechanic): $1,000–$1,400/vCore/month
- Per-entity-enrolled (federation deployments): $2K–$15K/entity/yr for governance-fabric pricing

**Gas/chain fees** (for chain-interop usage) and **storage fees** (for decentralized storage backends) are **always pass-through at cost + 12% management fee**, never bundled into the platform license.

---

## 4. Services mix

AZOA is the **highest services multiplier** of the four layers (2–3x Y1) because connector buildout is real engineering work. Typical Mid-tier SOW:

| Service | Scope | Fixed-fee range |
|---------|-------|-----------------|
| **Connector audit + discovery** | Inventory of buyer's existing integrations, prioritization | $40K–$80K |
| **ERP/MES/EHR/TMS/CRM connectors** | Per-connector fixed-fee (see [`../03-services-catalog.md` §2.2](../03-services-catalog.md) connector class table) | $20K–$400K/connector |
| **Chain connectors** | Per-chain (EVM, Solana, Cosmos, Hedera, etc.) | $20K–$75K/chain |
| **Storage backend connectors** | Per-backend (S3, IPFS, Filecoin, Ceramic, Arweave) | $15K–$50K/backend |
| **Identity federation buildout** | IdP integration + SSI Verified Credentials wiring + NEOS identity bridging | $50K–$200K |
| **Federation engine deployment** (Large only) | Multi-tenant gateway + cross-org orchestration kernel setup | $200K–$800K one-time |
| **30-day hypercare** | Stabilization + connector tuning | Included |

PrimusNeo retains the right to harden, generalize, and redistribute any non-bespoke connector through the AZOA connector library (a Y2+ revenue tailwind for both AZOA and PrimusNeo).

---

## 5. Sustained upkeep + infra

Annual sustained upkeep = **20–25% of license** (above the all-layer 18% floor because connectors need active maintenance against upstream API changes).

Infra (pass-through + 12% mgmt fee):

- **Federation gateway hosting** (regional or multi-region): $2,000–$15,000/mo by tier
- **API gateway + observability**: $500–$5,000/mo by call volume
- **Chain gas reserve**: highly variable by chain + usage; quoted per engagement
- **Storage backend pass-through**: $0.012–$0.025/GB-month for S3-class; native rates for IPFS/Arweave/Filecoin
- **Identity provider pass-through**: at provider rates (Okta/Entra/Auth0 seat costs flow through)

---

## 6. Bundle interactions

AZOA is the **integration glue** that makes every other bundle composition viable. It is almost never sold alone above the Small tier — buyers who pick it always end up wanting the layers it federates.

| Other layer | What you unlock together |
|-------------|--------------------------|
| **+ NEOS** | Signed governance events flow across the federation. **Required duo for any multi-org or regulated engagement.** |
| **+ Fractal Engine** | AZOA becomes the data-in path for Fractal; integration events become first-class signals. **Common duo for finance regulatory reporting, manufacturing IT/OT, healthcare interop.** |
| **+ AMP** | AZOA surfaces external system state into the AMP spatial scene (MES events become asset-attached, EHR alerts become room-attached, etc.). **Required for any operational-twin engagement at scale.** |
| **Full Stack** | AZOA as the connective tissue is what makes the federated stack actually federated. |

---

## 7. Two worked engagement examples

### 7.1 Mid AZOA-only: 4-plant mid-cap manufacturer wanting an IT/OT bridge (Tier-2 Mid)

- **Buyer:** CIO + VP Operations at a $400M revenue mid-cap discrete manufacturer with 4 plants in NA. Existing stack: SAP S/4HANA, Rockwell FactoryTalk MES, GE Proficy historian, mixed PLC fleet
- **Scope:** AZOA as the IT/OT integration fabric, replacing 3 brittle in-house Python ETL pipelines and 1 legacy MuleSoft instance the team wants to retire
- **Quote:**
  - AZOA Mid: $130K/yr (15 integrations: 4 plants × 3 systems + 3 cross-plant)
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
- **Scope:** AZOA as the cross-party data fabric (Navis N4 connectors, customs single-window integration, carrier APIs, IoT in-transit visibility ingest); NEOS as the governance-neutral consortium fabric that explicitly solves the TradeLens-shaped failure mode
- **Quote:**
  - AZOA Large: $720K/yr (50+ integrations, multi-org federation engine on)
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

- **AZOA royalty: 15% of AZOA line-item license revenue**, paid quarterly
- AZOA also leads connector development for the closed-source provider connectors; per-connector services revenue is often delivered by their authors
- Connector reuse (where PrimusNeo hardens and redistributes a non-bespoke connector) accrues royalty to AZOA on the redistributed license revenue, not the original engagement

---

## 9. Risks specific to AZOA

| Risk | Mitigation |
|------|------------|
| TradeLens-shaped consortium failure | NEOS governance-neutrality (no single party owns the network) is the explicit answer. Charter every multi-party deployment with this principle from day 1 |
| MuleSoft / Boomi incumbent displacement resistance | Position AZOA as the **Web2+Web3 unified fabric** the incumbents don't cover, not as a pure Web2 iPaaS replacement. Capture the Web3 + identity + reputation surface area first |
| Connector maintenance cost cliff | Active maintenance baked into 20–25% sustained upkeep; connector library reuse amortizes cost across customers |
| Open SDK + closed federation engine boundary confusion | Public docs clearly mark the boundary; PCL/PEL contracts spell it out; community can build full Small-tier deployments on open SDK alone (which actually helps the OSS funnel) |
| Chain/gas cost volatility | Always pass-through; never bundled. Customer signs the gas reserve estimate and gets monthly reconciliation |
| Cloud-hyperscaler fork of the federation engine | Closed-core boundary holds (Apache-2.0 SDK doesn't expose enough surface area to reconstruct the federation engine). HashiCorp/MongoDB precedent supports this defense |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial AZOA engagement model |
