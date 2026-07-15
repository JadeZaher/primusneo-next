# Technology Vertical — Market Research Brief

**PrimusNeo:** AMP (Spatial OS) · NEOS (Governance) · AZOA (Interop Fabric) · Fractal Engine (Intelligence)
**Date:** 2026-05-23

---

## 1. Comparable Vendor Pricing

### Platform Engineering / IDP

Managed IDP pricing has converged at **$22–$78/developer/month**:

| Vendor | Pricing |
|--------|---------|
| Roadie (managed Backstage) | ~$22/developer/month — entry anchor for managed OSS portals |
| Port | Standard ~$40/seat/mo; Enterprise ~$60–$78/seat/mo |
| OpsLevel | ~$39/user/mo base; Startup ~$30/dev/mo |
| Cortex | ~$65–$69/user/mo at scale (community-reported) |
| Humanitec Platform Orchestrator | From ~$1,979/mo (5 users); orchestration layer above portals; enterprise custom |
| **Backstage (self-hosted)** | $0 license. Effective TCO: 3–5 senior platform engineers @ $250K loaded = **$750K–$1.25M/yr** carrying cost + $12K–$24K/yr infra. **3-yr TCO typically exceeds $2M** before productivity gains |

### Federation / Multi-Org Coordination

- **Open Policy Agent (OPA):** Free, CNCF-graduated. Implementation engagements $150–$300/hr
- **Styra (OPA commercial wrapper):** $100K–$500K ACV typical
- **GitOps (Flux/ArgoCD):** OSS; integration services at standard platform-eng rates

### Data Fabrics / Data Mesh

- **Snowflake:** ~$2–$4/credit; mid-market monthly $10K–$80K; large enterprise **$100K–$500K+/month**
- **Databricks:** ~$0.22–$0.55/DBU-hour SQL/ETL + cloud VM costs; typically 20–40% cheaper than Snowflake at scale but requires FinOps maturity
- **Starburst (Trino federated):** Cost-offload from Snowflake; enterprise custom
- **Dremio:** ~$75K–$250K ACV estimated from community reports

### AI Gateways / Agent Infrastructure

| Vendor | Pricing |
|--------|---------|
| LangSmith (LangChain) | Free (1 seat, 5K traces/mo); Plus $39/user/mo; traces $2.50/1K (14-day), $5.00/1K (400-day); enterprise custom |
| Weights & Biases | ~$50/seat/mo (CoreWeave-acquired March 2025); enterprise custom |
| Modal (serverless GPU) | A10G ~$1.10/hr; L40S ~$1.95/hr; H100 **~$3.95/hr** |
| Replicate | H100 ~$5.49/hr; overall 1.4–2.9x higher than Modal/Fal for custom models |
| LlamaIndex | OSS framework; commercial Cloud tier custom |

### Spatial / 3D Dev Platforms

- **NVIDIA Omniverse Enterprise:** **$4,500/GPU/year** subscription; enterprise contracts vary by GPU count
- **Niantic Lightship Spatial SDK:** $0.80–$1.00/MAU beyond 100 MAU; shared AR sessions billed separately per multiplayer session
- **Unity Industry / Pro:** Pro ~$2,040/seat/yr; Unity Enterprise custom; industrial twin modules add-on
- **Unreal Engine / MetaHuman:** Free for games <$1M revenue; enterprise licensing/support **$50K–$500K/yr** for industrial deployment

### Web3 Infrastructure

| Vendor | Pricing |
|--------|---------|
| Alchemy | 30M CUs/mo free; pay-as-you-go $0.40–$0.45/1M CUs; **1 eth_call = 26 CUs** so effective per-call ~$10.40–$11.70/1M calls |
| QuickNode | Flat-rate RPS from $799/mo (75 RPS EVM chains); per-call ~$3.27–$12.25/1M calls |
| Infura | 55M credits add-on $200/mo; **1 eth_call = 80 units** → higher effective per-call cost than Alchemy |
| Chainstack | Pro $199/mo (80M req, 400 RPS); Business $499/mo (200M req, 600 RPS, 20 nodes); enterprise custom |

---

## 2. Engagement Scale Tiers — 3-Year TCO

| Tier | Profile | IDP (3yr) | Agent Infra (3yr) | Spatial Collab (3yr) | **Comparable Market TCO (3yr)** |
|------|---------|-----------|-------------------|----------------------|--------------------------------|
| **Small** | <50 engineers, single-product startup | $80K–$200K (IDP SaaS, no build) | $30K–$80K (LangSmith Plus + Modal spot GPU) | $20K–$60K (Unity Pro + basic Omniverse) | **$130K–$340K** |
| **Mid** | 50–500 engineers, scale-up | $350K–$900K (Port/Cortex enterprise + 1–2 platform engineers) | $120K–$400K (W&B + LangSmith enterprise + Modal committed) | $80K–$200K (Omniverse 5–20 GPUs/yr) | **$550K–$1.5M** |
| **Large** | 500+ engineers, FAANG/MAANG, telco, hyperscaler | $1.5M–$4M (Humanitec + self-hosted portals + 5–8 platform engineers) | $500K–$2M+ (enterprise W&B/LangSmith + dedicated GPU fleet) | $300K–$1M+ (Omniverse 100+ GPU/yr, Unity Enterprise) | **$2.3M–$7M+** |

Large-tier telcos and hyperscalers often embed these costs inside cloud committed-use agreements (EDP/CUD) at **20–40% effective discount off list**.

---

## 3. Services Rates — SI / Boutiques

| Firm | Positioning | Typical Rate |
|------|-------------|--------------|
| IBM Consulting | End-to-end; proprietary AI/cloud (watsonx); regulated industries | $200–$350/hr onshore; $80–$120/hr offshore |
| Accenture | Global scale; $3.6B AI bookings; multi-vendor transformation | $220–$400/hr onshore; $70–$130/hr offshore blend |
| Capgemini | Strong in European enterprise, telco, mfg; GPAI-focused 2025 | $180–$320/hr onshore; $60–$110/hr offshore |
| Globant | LatAm nearshore specialist; Agile Pods ~$20K/mo | $50–$99/hr (nearshore mix); pods from $20K/mo |
| EPAM | Engineering-heavy; Eastern Europe; platform/AI focus | $75–$150/hr nearshore; $150–$200/hr onshore leads |
| ThoughtWorks | Modern eng practices, Lean architecture, DevEx | $200–$350/hr onshore; advisory-then-delivery model |
| Boutique platform-eng (Syntasso, Kosli, Configure8) | Backstage/IDP specialization; faster ramp | $150–$250/hr; fixed-scope workshops $30K–$80K |

---

## 4. Pricing Mechanics Norms

- **Per-developer/seat:** $15–$100/dev/mo established IDP norm. $22 (Roadie) low end; $65–$78 (Cortex, Port Enterprise) high end. >500-engineer orgs prefer enterprise commits
- **Per-API-call / per-compute-unit:** AI inference (LangSmith $2.50–$5/1K traces) + Web3 RPC (Alchemy, QuickNode, Chainstack). Compute-unit obfuscation common — effective per-call costs 10–200x advertised unit rate
- **Per-compute-hour (GPU):** $1.10–$5.49/hr managed (Modal → Replicate) vs $2–$4/hr raw cloud. Serverless premiums 1.4–2.9x raw. Reserved/committed instances reduce 30–50%
- **Per-GB (storage/egress):** Snowflake, Databricks. Egress $0.08–$0.12/GB routinely surprises eng teams — common TCO underestimate
- **% of platform spend:** Less common in devtools; FinOps SaaS (Apptio, Harness Cloud Cost) typically **1–3% of monitored spend ACV**
- **Enterprise commit / MAP:** >$500K/year orgs get 12–36 month multi-year commits at 15–30% discounts + private pricing. Hyperscaler EDPs bundle IDP-adjacent tooling at 20–40% below public list
- **Usage-based + seat hybrid:** Emerging norm (LangSmith, Humanitec) — base seat for governance + usage overage for compute/traces

---

## 5. Regulatory Overlay

| Framework | Applicability | Cost |
|-----------|---------------|------|
| **SOC 2 Type II** | Mandatory for SaaS to US enterprise / gov-adjacent | $35K–$150K first year; $20K–$50K/yr ongoing (with automation) |
| **ISO 27001** | EU enterprise + telco + regulated-sector clients | $25K–$80K initial cert; $15K–$30K/yr surveillance |
| **FedRAMP (Mod/High)** | US federal agency sales; govtech-adjacent SaaS | **$500K–$2M+** to achieve; 12–18 months (post-2025 "20x" acceleration <5 weeks once package complete) |
| **EU AI Act** | Full application Aug 2026; high-risk (Annex III) potentially deferred to Dec 2027 | Conformity assessment $20K–$80K/high-risk system; GPAI docs + transparency ongoing |
| **EU Data Act / DSA / DMA** | Interop fabrics (AZOA), platform gateways, data portability | Legal/compliance advisory $50K–$200K/jurisdiction initial posture |
| **US AI EOs** | Dual-use foundation model disclosure (above compute thresholds); federal procurement AI risk | Internal governance program $100K–$500K+ |

**73% of enterprise AI initiatives cite compliance posture as top-three vendor selection criterion** (BCG 2026), up from 41% in 2024. CAIO roles exist in **61% of large enterprises** — compliance champion is now a named buyer.

---

## 6. Procurement Signals

**Buyer personas and triggers:**

- **CTO:** Platform strategy; build-vs-buy for IDP + agent infra. Responds to architecture credibility, standards alignment (OpenUSD, OpenTelemetry, CNCF), federated multi-org deployment proof. Entry via conf talks, technical whitepapers, OSS presence
- **VP Platform Engineering / Head of DevEx:** Owns IDP budget + dev productivity KPIs (DORA metrics, deploy frequency, change failure rate). Responds to ROI on dev time saved — typically modeled at **$150–$250K/engineer-year fully loaded**. Entry via community (PlatformCon, KubeCon), peer referral
- **Chief AI Officer:** Owns agent infra + LLMOps stack. Evaluates observability (LangSmith, W&B), governance (audit trails, policy enforcement), data residency. Entry via analyst relations + AI governance working groups
- **Head of Developer Experience:** Onboarding speed, cognitive load, golden path adoption rates. Responds to PLG trials — hands-on before budget conversations

**Motion patterns:**

- **PLG to enterprise:** Dominant dev-tool pattern. Free OSS/SDK inbound (Backstage plugin, AZOA connector, Fractal community tier) → team adoption → VP Platform/CTO expansion. Cursor reached $2B ARR by Feb 2026. PLG companies see **~9% free-to-paid conversion; top quartile reaches 25–30%** with PQL-triggered outbound
- **OSS to paid tier upsell:** Backstage (free) → Roadie/Port/Cortex ($22–$78/seat/mo). OPA (free) → Styra (enterprise). AZOA open SDK → AZOA federation engine (closed-core). Standard playbook for infrastructure OSS
- **Partner-led (SI channel):** For large/MAANG/telco, Accenture or IBM Consulting frames the engagement; PrimusNeo enters as tech layer inside broader transformation. **SI takes 20–40% impl margin; platform vendor takes license/commit**

---

## 7. Rejection Reasons

- **Build-vs-buy / NIH syndrome:** Engineering-led orgs (esp FAANG) default to "our requirements are unique." Counter: top-performing orgs use **hybrid buy+extend models**, not full builds. Humanitec 2023 DevOps Benchmarking: top performers build IDP from OSS + vendor, not from scratch
- **Vendor lock-in:** Federating four layers across four steward orgs raises legitimate portability concerns. Counter: open SDK + CC licensing on NEOS/Fractal; data export guarantees in AZOA; OpenUSD/open standards alignment in AMP
- **Open-source competition:** Backstage, Crossplane, Flux, ArgoCD, OPA, MLflow, LangFuse — every commercial layer has credible OSS alt. Counter is TCO (Backstage = $2M+ over 3 yrs for large teams), time-to-value, enterprise support SLA
- **Integration with existing devtools:** GitHub Enterprise, Jira, PagerDuty, Datadog, Slack/Teams — deep integrations required. First 90 days of any engagement must demonstrate connector coverage
- **Governance / data residency:** EU-based tech (telcos, post-GDPR scale-ups) require in-region data. AI Act readiness + multi-region AZOA deployment must be demonstrable
- **Procurement cycle length:** MAANG/telco enterprise procurement averages 6–18 months from first meeting to signed contract. PLG inbound shortens — product usage data substitutes for RFP at team level, escalating to procurement only after internal champions exist

---

## Summary

Technology vertical has highest density of comparable vendor benchmarks + sharpest build-vs-buy instinct of any PrimusNeo target. IDP seat pricing clusters at $22–$78/dev/mo, with self-hosted Backstage carrying hidden $2M+ 3-yr TCO that commercial portals undercut on value. AI agent infra: $39–$50/seat/mo for observability + $1–$5/GPU-hour for inference. Spatial platforms (Omniverse, Unity Industrial): $4,500/GPU/yr and up. 3-yr stack TCO: $130K (50-engineer startup) → $7M+ (hyperscaler). SI rates: $50–$400/hr. Compliance (SOC 2, ISO 27001, EU AI Act) now top-3 vendor selection criterion for 73% of enterprises. Primary rejection vectors: NIH syndrome, open-source competition, data-residency. PrimusNeo's strongest entry motion: OSS/SDK inbound (PLG) escalating through VP Platform Engineering + CAO champions.

---

## Sources

- [Platform Engineering Tools Compared — Encore Cloud](https://encore.cloud/resources/platform-engineering-tools) · [Navigating IDPs in 2025 — Infisical](https://infisical.com/blog/navigating-internal-developer-platforms)
- [Top Backstage Alternatives 2026 — Port](https://www.port.io/blog/top-backstage-alternatives) · [7 Best Developer Portals — Roadie](https://roadie.io/blog/7-best-developer-portals-for-enterprise-engineering-teams/) · [Humanitec Pricing](https://humanitec.com/pricing)
- [LangSmith vs W&B 2026 — Respan](https://www.respan.ai/market-map/compare/langsmith-vs-weights-and-biases) · [W&B Alternatives — Braintrust](https://www.braintrust.dev/articles/best-weights-and-biases-alternatives-2026)
- [Modal Pricing](https://modal.com/pricing) · [Replicate Pricing](https://replicate.com/pricing) · [Serverless GPU Pricing Matrix 2026](https://techbytes.app/posts/serverless-gpu-pricing-matrix-modal-replicate-lambda-2026/)
- [NVIDIA Omniverse Enterprise](https://www.nvidia.com/en-us/omniverse/enterprise/) · [Niantic Spatial Pricing](https://www.nianticspatial.com/resources/pricing)
- [Alchemy vs Infura vs QuickNode vs Chainnodes](https://www.chainnodes.org/blog/alchemy-vs-infura-vs-quicknode-vs-chainnodes-ethereum-rpc-provider-pricing-comparison/) · [RPC Providers 2026 — 5hz.io](https://www.5hz.io/blog/how-to-choose-rpc-provider-2025) · [Chainstack Pricing](https://chainstack.com/pricing/)
- [Snowflake Pricing Options](https://www.snowflake.com/en/pricing-options/) · [Snowflake vs Databricks — Keebo](https://keebo.ai/2025/03/07/snowflake-vs-databricks/) · [Starburst Snowflake Catalog](https://www.starburst.io/blog/introducing-snowflake-catalog-metastore/)
- [Open Policy Agent — CNCF](https://www.openpolicyagent.org/) · [Build vs Buy IDP — Spacelift](https://spacelift.io/blog/internal-developer-platform-idp-build-or-buy) · [IDP Buyer Guide — CIOPages](https://www.ciopages.com/buyer-guides/internal-developer-platform)
- [Globant Pricing](https://www.hireinsouth.com/post/globant-pricing) · [IBM TX Rate Card 2022](https://www.ibm.com/downloads/cas/LNQ2A4Z9) · [Accenture Loaded Labor Rates](https://www.accenture.com/content/dam/accenture/final/a-com-migration/manual/r3/pdf/Accenture-Loaded-Labor-Rates.pdf)
- [EU AI Act — Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · [EU AI Act 2026 Updates — LegalNodes](https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks)
- [SOC 2 for AI — Comp AI](https://trycomp.ai/soc-2-for-ai-companies) · [PLG 2026 — SaaSMag](https://www.saasmag.com/product-led-growth-next-chapter-saas-2026/)
- [Enterprise AI Procurement CTO Logic 2026](https://digidai.github.io/2026/01/20/enterprise-ai-procurement-cto-decision-logic-technology-investment/) · [Top 6 Agent Observability — Laminar](https://laminar.sh/article/2026-04-23-top-6-agent-observability-platforms)
