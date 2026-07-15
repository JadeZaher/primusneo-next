# Governance — Engagement Model

> **Verticals:** Public-sector / Civic Government AND DAO / Web3 Governance / Cooperatives / Federations
> **Research brief:** [`../research/governance.md`](../research/governance.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Governance spans two structurally different buyer archetypes but both pay enormous friction costs for inadequate coordination infrastructure.

**Civic anchor.** GovTech incumbents extract rents far beyond their delivered value. Tyler Technologies' EnerGov permitting platform ranges $50K–$2.7M in implementation fees alone, with annual maintenance of 18–22% on top. The Illinois statewide Tyler contract ballooned to $250M with documented delays — a cautionary tale for every large-city CIO. Granicus' Citizen Experience Cloud runs $25K–$500K/yr at state level. Esri statewide enterprise agreements hit $2M–$10M+/yr. The FedRAMP Moderate authorization gate alone costs $400K–$900K and 12–24 months of staff time before a single user can be provisioned on a federal contract. None of these incumbents offer durable contribution accounting, holonic federation, or auditable signed-event logs. They are licensing access to convenience, not solving coordination. The combined annual friction exposure for a mid-size city managing GovTech contracts, participatory democracy tools, board portals, and identity systems runs $500K–$2M/yr; for a state-level agency, $5M–$20M+/yr.

**DAO anchor.** Economic value in DAO governance concentrates almost entirely in treasury management services rather than the tooling itself — Snapshot, Tally, and Aragon are free at the protocol layer, which creates a dangerous impression that governance is "solved." It isn't. Llama charges ~$2.5M/yr for Aave treasury management. Karpatkey and Steakhouse Financial provide comparable services at $200K–$500K/yr base plus performance upside, with Steakhouse's Lido engagement on public record at ~$322K/yr. The generic treasury advisory range is 0.25–0.75% of AUM annually — a $500M treasury implies $1.25M–$3.75M in governance-adjacent services spend. Meanwhile, governance attacks have destroyed $4B+ across DAO treasuries since 2016. The friction cost is twofold: the services overhead and the existential risk of attack. A top-50 DAO has a defensible friction window of $2M–$8M/yr combining services + security risk.

**Pricing model capture band:** 15–30% of governance services spend per the `01-pricing-model.md` summary table. This is the highest capture band across all verticals, reflecting the clarity of the value case (governance fabric is the prerequisite for everything else) and the direct line-item displacement NEOS provides against incumbent services spend.

---

## 2. PrimusNeo positioning per layer in governance

Governance is the vertical where **NEOS is the center of gravity**. Every other layer is additive; NEOS is non-negotiable.

**NEOS** is the durable governance fabric above Snapshot signal and Tally execution for DAOs, and the inter-departmental decision-rights system that bridges Tyler/Granicus civic platforms and participatory democracy tools (Decidim, Pol.is) for public-sector buyers. The framing differs by buyer archetype but the product is the same: programmable approval-and-attestation fabric, contribution accounting, holonic federation, signed auditable event logs. The federated four-steward structure is not just an org chart — it is the explicit answer to GovTech vendor lock-in (Tyler, Granicus, Esri) because no single entity owns the stack. That structural credibility matters to both city councils nervous about another $250M Tyler overrun and DAO stewards nervous about protocol-level centralization.

**AZOA** handles the connective tissue in both contexts. Civic: cross-agency interoperability, FHIR-adjacent identity data flows, SSI Verified Credentials for constituent identity, multi-jurisdiction data exchange. DAO: cross-chain bridges (EVM, Cosmos, Solana, Hedera), off-chain identity federation, decentralized storage backends. AZOA is the mandatory co-purchase with NEOS for any multi-entity governance deployment.

**AMP** (Spatial OS) has lighter but real application in governance. Civic: emergency management coordination (spatial scene plus governance approvals in a single view), urban planning participation (spatial twin of a development project attached to participatory consultation records), physical-asset permitting (approved asset location signed to a governance event). DAO/cooperative: less relevant at the spatial layer; the cooperative's "site" is more metaphorical. AMP enters governance engagements at Mid and Large tiers where there is a physical-infrastructure component.

**Fractal Engine** converts the governance stack into operating intelligence. Civic: policy effectiveness analytics (which council decisions produced what budget outcomes), grant allocation optimization, constituent service telemetry, cross-agency spend intelligence. DAO: treasury policy backtesting, delegate effectiveness scoring, protocol KPI intelligence, on-chain signal analytics — "the Llama analytics layer without the Llama retainer" is the exact positioning.

---

## 3. Engagement tiers — Small / Mid / Large

### Small: 1 town / 1 cooperative / 1 small DAO (<$10M treasury)

**Bundle:** NEOS Small + AZOA Small (Duet). AMP and Fractal rare at this tier.

**Civic worked example — Town of ~15,000 residents**

A small municipality replacing a patchwork of Google Forms, email chains, and Loomio for council decision-making and resident engagement.

| Line item | Amount |
|-----------|--------|
| NEOS Small license (2 councils, ~80 members) | $12K/yr |
| AZOA Small license (<5 integrations, identity + existing CivicEngage portal) | $30K/yr |
| Duet bundle discount (-10%) | ($4,200) |
| Net license Y1 | $37,800/yr |
| Y1 services (~0.8x NEOS, 2x AZOA blend = ~1.3x license) | $49K |
| Y1 upkeep Silver SLA (22%) | $8,300 (starts Y2) |
| Infra pass-through (~$400/mo) | $4,800/yr |
| **Y1 total** | **~$91K** |
| **3-yr TCO** | **~$195K** |

Friction anchor: $50K/yr in Granicus/GoVocal/Loomio stack + 0.5 FTE staff time on manual governance record-keeping (~$40K value) = $90K/yr direct friction. Capture rate: $91K ÷ $90K = ~1x — justified because the compliance audit trail NEOS produces eliminates the town clerk's manual reconciliation labor and creates a defensible record the incumbents don't provide.

**DAO worked example — Small protocol DAO, $6M treasury**

A recently-launched protocol DAO outgrowing Snapshot + a Gnosis Safe. Treasury is above the $5M CC-NC free threshold, triggering PCL.

| Line item | Amount |
|-----------|--------|
| NEOS Small license (1 council, ~120 token holders with delegation) | $14K/yr |
| AZOA Small license (2 chains: Ethereum mainnet + L2; Snapshot integration) | $28K/yr |
| Duet bundle discount (-10%) | ($4,200) |
| Net license Y1 | $37,800/yr |
| Y1 services (governance design workshop + on-chain setup) | $55K |
| Y1 upkeep Bronze SLA (18%) | $6,800 (starts Y2) |
| Infra (chain gas reserve + NEOS coordination server) | $1,200/mo |
| **Y1 total** | **~$107K** |
| **3-yr TCO** | **~$220K** |

Friction anchor: a minimally-scoped Llama retainer for a DAO this size runs $300K–$800K/yr. PrimusNeo at $107K Y1 is 13–36% of that friction cost, delivering the governance fabric that makes the DAO's own treasury management disciplined enough to avoid the attacks that cost comparable DAOs their entire treasury.

**3-yr TCO band: $75K–$300K**

---

### Mid: City 100K–500K / state agency / mid DAO ($10M–$500M treasury)

**Bundle:** NEOS Mid + AZOA Mid + Fractal Mid (Triad). AMP Mid added when physical-asset or emergency management scope present.

**Civic worked example — City of 220,000 residents**

A Sun Belt city replacing OpenGov (budgeting), a legacy board portal (Nasdaq Boardvantage), and Decidim (citizen participation) with a unified governance fabric. Chief Innovation Officer is the champion; CIO co-signs.

| Line item | Amount |
|-----------|--------|
| NEOS Mid license (8 councils: city council + 5 committees + 2 working groups, ~300 members) | $65K/yr |
| AZOA Mid license (20 integrations: existing Tyler EnerGov, Salesforce CRM, Entra SSO, two state data exchanges, two public-facing APIs) | $150K/yr |
| Fractal Mid license (8 data sources: budget actuals, council decision logs, constituent service telemetry, grant pipeline) | $140K/yr |
| Triad bundle discount (-18%) | ($64,350) |
| Net license Y1 | $290,650/yr |
| Y1 services (~1.2x blend: NEOS governance design + AZOA connector buildout + Fractal pipeline) | $350K |
| Deployment SKU (Hex: 2-site, full-stack) | $550K |
| Y1 upkeep Gold SLA (25%) | $72,700 (starts Y2) |
| Infra pass-through + 12% mgmt (multi-region, StateRAMP-compliant cloud) | $120K/yr |
| **Y1 total** | **~$1.31M** |
| **3-yr TCO** | **~$3.2M** |

Friction anchor: Tyler EnerGov at $300K/yr maintenance + Granicus state-bundle equivalent $150K/yr + Boardvantage $80K/yr + Decidim integrator $60K/yr = $590K/yr direct stack spend. Add 1.5 FTE managing the patchwork at $180K fully-loaded = $770K/yr total friction. Capture rate: $290K license ÷ $770K = **38% value share on license alone**. Full Y1 total reflects implementation cost; Y2 normalized annual (license + upkeep + infra) = $483K, capturing 63% of the annual friction stack while delivering a consolidated, auditable platform the incumbents cannot replicate.

**DAO worked example — Mid protocol DAO, $120M treasury**

A mid-tier DeFi protocol replacing Snapshot + ad-hoc Llama retainer with a structured governance fabric, retaining Snapshot as the signal layer while NEOS codifies intent and accountability above it.

| Line item | Amount |
|-----------|--------|
| NEOS Mid license (multi-council: protocol council + grants committee + risk committee, ~450 active delegates) | $75K/yr |
| AZOA Mid license (Ethereum mainnet + 3 L2s + Fireblocks integration + Snapshot API + Tally API) | $140K/yr |
| Fractal Mid license (treasury policy backtesting + delegate-effectiveness dashboard + protocol KPI signals) | $150K/yr |
| Triad bundle discount (-18%) | ($66,150) |
| Net license Y1 | $298,850/yr |
| Y1 services (ETHOS governance design + on-chain council instantiation + treasury analytics pipeline) | $360K |
| Y1 upkeep Silver SLA (22%) | $65,750 (starts Y2) |
| Infra (multi-chain gas reserve + NEOS coordination server + Fractal compute) | $80K/yr |
| **Y1 total** | **~$739K** |
| **3-yr TCO** | **~$1.8M** |

Friction anchor: Llama mid-DAO retainer $300K–$800K/yr. Add Karpatkey-comparable treasury advisory at 0.3% of $120M AUM = $360K/yr. Total addressable friction: $660K–$1.16M/yr. Capture rate: $299K license ÷ $910K midpoint friction = **33% value share** — NEOS is the governance fabric beneath treasury services, not a replacement for them. DAOs that buy PrimusNeo may retain a treasury services firm; PrimusNeo is cheaper, more auditable, and non-competitive with those services.

**3-yr TCO band: $1.2M–$5M**

---

### Large: State-level / federal agency / G20 megacity / top-50 DAO ($500M+ treasury)

**Bundle:** Full Stack (NEOS Large + AZOA Large + Fractal Large + AMP Mid/Large for civic). Deployment SKU: Lattice or Tessellation.

**Civic worked example — State agency or G20 megacity**

A state department of technology modernizing inter-agency governance, citizen identity, and policy analytics across 15 sub-agencies. Buyer: CIO + Chief Data Officer + Governor's Innovation office.

| Line item | Amount |
|-----------|--------|
| NEOS Large license (federated governance, 15 sub-agency councils + state legislative interfaces, 800+ members) | $320K/yr |
| AZOA Large license (50+ integrations: legacy ERP, 15 sub-agency APIs, federal data exchanges, SSI Verified Credentials fabric, 2 GovCloud environments) | $850K/yr |
| Fractal Large license (20+ data sources: policy telemetry, constituent services, inter-agency budget flows, grant outcomes) | $750K/yr |
| AMP Mid license (emergency operations center spatial coordination, 4 EOC sites) | $180K/yr |
| Full Stack bundle discount (-25%) | ($525K) |
| Net license Y1 | $1,575K/yr |
| Y1 services (~1.3x blend; SI co-delivery with Deloitte GPS at GSA rates) | $2.05M |
| Deployment SKU (Lattice: 6+ sites) | $2.5M |
| FedRAMP Moderate authorization (amortized 50% to Y1) | $400K |
| Y1 upkeep Platinum SLA (quoted) | $450K (starts Y2) |
| Infra (FedRAMP-compliant multi-region cloud, GovCloud) | $400K–$600K/yr |
| **Y1 total** | **~$7.0M–$7.2M** |
| **3-yr TCO** | **~$17M–$22M** |

Friction anchor: Esri statewide EA $3M–$8M/yr + Tyler ERP $2M–$5M/yr + Granicus state suite $400K–$1M/yr + existing identity fabric $500K–$1M/yr + FedRAMP certification costs across incumbent tools $1M–$3M/yr = $7M–$18M/yr combined. PrimusNeo consolidates and replaces the governance fabric and analytics layers. Capture rate: $1.575M license ÷ $12.5M friction midpoint = **~13% value share** — inside the 15–30% governance capture band and defensible given the compliance complexity.

**DAO worked example — Top-50 DAO, $800M+ treasury**

An Aave-class protocol DAO formalizing governance at scale: structured councils, treasury policy framework, multi-chain execution, delegate accountability analytics.

| Line item | Amount |
|-----------|--------|
| NEOS Large license (federated governance: protocol council + risk committee + grants council + security council + delegate registry, 1,200+ active participants) | $350K/yr |
| AZOA Large license (full multi-chain: Ethereum, Arbitrum, Optimism, Polygon, Base, Solana; Fireblocks + Anchorage custody integration; Snapshot + Tally APIs; Boardroom aggregation) | $900K/yr |
| Fractal Large license (treasury policy backtesting, delegate-effectiveness scoring, protocol risk metrics, cross-chain liquidity signals) | $600K/yr |
| Full Stack bundle discount (-25%) | ($462,500) |
| Net license Y1 | $1,387,500/yr |
| Y1 services (ETHOS council instantiation + multi-chain setup + treasury analytics models) | $1.5M |
| Y1 upkeep Gold SLA (25%) | $347K (starts Y2) |
| Infra (multi-chain gas reserve, multi-region NEOS server, Fractal GPU compute) | $250K–$400K/yr |
| MiCA CASP compliance posture doc (EU treasury reach) | $150K one-time |
| **Y1 total** | **~$3.3M–$3.5M** |
| **3-yr TCO** | **~$8M–$11M** |

Friction anchor: Llama at $2.5M/yr (the public Aave benchmark). Add treasury advisory at 0.4% of $800M AUM = $3.2M/yr. Combined: $5.7M/yr. PrimusNeo at $1.4M/yr license = **24% value share** — the upper range of the governance capture band, justified because NEOS directly competes with the governance services component of the Llama retainer, not just the analytics overlay.

**3-yr TCO band: $10M–$60M+**

---

## 4. Industry-specific procurement signals

**Civic buyer personas.** CIO / CITO triggers on modernization mandates, legacy EOL, and federal efficiency pressure — they control the budget line and sign the contract. Chief Innovation Officer often sponsors pilot engagements outside the standard IT procurement lane; shorter cycle (90–120 days for a pilot SOW vs 6–18 months for full RFP), but must convert to CIO sponsorship for production scale. City Manager / County Administrator triggers on constituent service pressure and council mandates — the political buyer who creates the urgency a CIO needs to move. State agency: Deputy Secretary / Assistant Commissioner level with CIO co-approval.

**DAO buyer personas.** Steward Council or Foundation controls the treasury and signs the governance proposal. The procurement motion is a formal governance proposal (Research Forum post → Snapshot temperature check → Tally on-chain vote → execution) with a 2–8 week cycle including discussion period. This is faster than any civic procurement and does not require cooperative vehicle enrollment. The risk is governance attacks during the proposal period — PrimusNeo's own governance design (ETHOS methodology, multisig defaults) should be demonstrable.

**Cooperative / federation personas.** Board vote, usually 30–60 days for an expedited resolution; longer if bylaws require member ratification. Federation steward boards are similar. These buyers often qualify for CC-NC free tier (nonprofit, small revenue) — be explicit about the de-minimis thresholds early to avoid wasted discovery.

**Cooperative purchasing vehicles for civic.** Sourcewell is the **first enrollment target** — 50,000+ member agencies, pre-competed vehicle, eliminates the 6–18 month full RFP cycle for a substantial share of local government buys. NASPO ValuePoint (all 50 states + territories, strong for cloud/SaaS) is the second. GSA MAS (SIN 518210C for IT; OASIS+ for professional services) unlocks federal and state/local cooperative purchasing authority. State-specific schedules (TX DIR, CA DGS, NY OGS) are non-negotiated pre-priced access within those states and are worth pursuing once any anchor reference exists in that state.

**Budget cycle alignment.** Federal FY ends September 30; decision pressure builds June–August. State and local vary but most compress into Q3–Q4. Missing a budget cycle is a 12-month pipeline delay regardless of product fit. Calendar-aware outreach (initial engagement 6–9 months before the agency's fiscal year close) is required.

---

## 5. Rejection-risk mitigations

**Procurement red tape.** New vendor not on an approved cooperative vehicle = automatic elimination in most civic RFPs. Sourcewell enrollment must happen before any serious civic pipeline engagement. Tyler/Granicus/Esri switching costs run $500K–$5M+; PrimusNeo cannot win a pure displacement argument — win by expanding scope (participatory democracy fabric, cross-agency federation, DAO governance capability) that incumbents don't cover at all.

**FedRAMP gap.** No ATO = disqualification for US federal and most state agencies. The FedRAMP 20x initiative (launched 2025) provides an agency-path acceleration route targeting ~90 days using pre-authorized infrastructure boundaries — pursue this path rather than the full JAB queue. Target FedRAMP Moderate authorization as the primary investment; High and DoD IL4/IL5 are phased based on pipeline revenue thresholds.

**DoD security classification.** IL2 is FedRAMP Moderate-equivalent ($400K–$800K). IL4 (CUI, contingency ops) and IL5 (NSS data) require DISA-authorized cloud hosting and controls well beyond FedRAMP Moderate. Phase: IL2 in Y1 → IL4 in Y2 when a defense-adjacent anchor client is signed. IL5 requires dedicated program investment.

**DAO treasury security.** Governance attacks are existential. NEOS ships with sane multisig defaults out of the box: 3-of-5 for treasuries below $10M, 4-of-7 for larger. Flash-loan-resistant voting (time-lock on proposal execution, snapshot voting power at proposal creation not vote time) and replay protection (chain-specific signature binding) are non-negotiable defaults. Governance security posture documentation is produced per engagement for any DAO above $10M treasury.

**Data sovereignty / GDPR.** EU public sector requires data residency in the EEA. Multi-region AZOA deployment with EU-hosted Fractal compute must be demonstrable to any EU civic buyer. This is not a future roadmap item — it must be available before any EU public tender engagement begins.

**Proof of scale.** Governments require 3–5 comparable references in evaluation. A lighthouse cooperative, a lighthouse mid-size city, and a lighthouse mid-DAO are the three reference deployment types required before pursuing large-tier civic or DAO engagements. Tie Town serves as the early reference but is not a civic government reference in the formal sense.

**Budget cycle mismatch.** Track municipal budget calendars actively. A contact made in November will not produce a procurement signature until after the next fiscal year starts. Engagement pacing must match.

---

## 6. Regulatory + compliance considerations

**Civic regulatory stack.**

| Framework | Scope | Cost to PrimusNeo |
|-----------|-------|-------------------|
| FedRAMP Moderate | US federal SaaS | $400K–$900K authorization; $100K–$300K/yr ongoing |
| FedRAMP High | Sensitive federal data | $2M–$5M+ authorization |
| StateRAMP / GovRAMP | US state + local (rebranded 2025) | $150K–$500K |
| DoD IL2 | Non-sensitive DoD public data | $400K–$800K |
| DoD IL4 | CUI + contingency ops | $800K–$2M+ |
| DoD IL5 | NSS data | $2M–$5M+ |
| GDPR / EU NIS2 | EU public sector | EEA data residency; DPA; DPIA; up to €20M or 4% global turnover in fines |
| CMMC Level 2–3 | Defense-adjacent contractors | Level 3 requires C3PAO assessment: $500K–$3M+ |

**DAO / Web3 regulatory stack.**

MiCA CASP licensing (EU): required for EU-facing DAOs and crypto-asset service providers. Grandfathering period ends mid-2026; legal + licensing costs €200K–€1M+ depending on jurisdiction. PrimusNeo's NEOS governance audit trail and AZOA cross-chain bridge architecture both support MiCA compliance posture documentation. SAB 122 (issued January 2025, replacing SAB 121) removes the requirement for custodians to hold crypto assets on their own balance sheet — meaningfully reducing custody compliance overhead for US DAO clients and their institutional counterparties.

**Cross-cutting.** EU public sector and EU-regulated DAOs share the data sovereignty requirement. Multi-region AZOA deployment with EEA-resident data processing is the single architectural commitment that unlocks both markets simultaneously.

---

## 7. Steward + service partner notes

**OmniOne** is the primary delivery partner for NEOS in both civic and DAO contexts. Their ETHOS methodology — governance design, charter authoring, council structuring, contribution accounting — is the central differentiable asset. NEOS deployments without OmniOne ETHOS facilitation are technically possible but miss the highest-value part of the engagement. OmniOne earns 18% royalty on NEOS license revenue plus direct services revenue when they deliver the governance design work.

**AZOA** leads AZOA implementation and is the author of the closed-source provider connectors. For civic engagements: SSI Verified Credentials for constituent identity, cross-agency interoperability fabric, GovCloud-compatible API gateway. For DAO engagements: cross-chain bridges (EVM to Cosmos to Solana and back), multi-custodian integration (Fireblocks, Anchorage, BitGo), off-chain identity federation. AZOA earns 15% royalty on AZOA license revenue.

**Escherbridge** delivers Fractal Engine ML engineering, custom model training, and treasury/policy analytics. For civic: policy effectiveness analytics, grant allocation intelligence, constituent service telemetry. For DAO: treasury policy backtesting, delegate-effectiveness scoring, protocol risk metrics. Escherbridge earns 18% royalty on Fractal line-item license revenue.

**Systems integrator channel for civic.** Deloitte GPS ($200–$450/hr GSA schedule; senior $500–$700/hr), Accenture Federal Services ($190–$420/hr GSA MAS), Booz Allen Hamilton ($187–$376/hr validated GSA 2024). These firms carry the delivery capacity, pre-existing agency relationships, and FedRAMP program management experience required for state and federal engagements. PrimusNeo positions as the product the SI wraps — not competitive with the SI, which brings program management, organizational change, and agency credibility that PrimusNeo does not have at early stage.

**DAO co-sell partners.** Llama, Karpatkey, and Steakhouse Financial define the treasury services market. PrimusNeo does not compete with their treasury management service — NEOS is the governance fabric *beneath* their work, making it more auditable, more attack-resistant, and more institutionally credible. The co-sell motion: PrimusNeo + Llama (or Karpatkey) as a combined offering where the treasury services firm handles financial strategy and PrimusNeo handles governance infrastructure. Both parties benefit: the services firm gets a defensible audit trail; PrimusNeo gets the treasury services firm's client relationships.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Governance engagement model |
