# Technology — Engagement Model

> **Vertical:** Technology (software vendors, platforms, AI/ML companies, infra providers, telcos, gaming/metaverse, devtool ecosystems)
> **Research brief:** [`../research/technology.md`](../research/technology.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Technology buyers are the sharpest cost-aware purchasers in any PrimusNeo vertical — they build the tools that other industries buy. But their internal coordination stack carries real, quantifiable friction:

**IDP / developer platform spend.** Managed IDP pricing has converged at **$22–$78/developer/month** (Roadie $22, Port Enterprise $60–$78, Cortex $65–$69, OpsLevel $39). These look cheap per seat until headcount scales. A 300-engineer scale-up pays $79K–$281K/yr for portal seats alone — before platform engineering salaries. The counter-anchor is self-hosted Backstage, which appears free but carries **3–5 senior platform engineers at $250K fully loaded = $750K–$1.25M/yr in carrying cost plus $12K–$24K/yr infra**. Three-year Backstage TCO regularly exceeds **$2M at scale**, a figure Roadie, Port, and Humanitec all cite in competitive decks.

**AI agent infrastructure.** LLMOps tooling (LangSmith Plus at $39/seat/mo, Weights & Biases at $50/seat/mo) adds $30K–$80K/yr for a 50-engineer org running active AI programs, before compute. GPU inference via managed serverless (Modal A10G $1.10/hr, H100 $3.95/hr; Replicate H100 $5.49/hr) introduces high per-experiment cost and zero commitment visibility. NVIDIA Omniverse Enterprise benchmarks GPU-level infrastructure at **$4,500/GPU/year** — the spatial and metaverse/gaming sub-segment pays this directly.

**Compliance as a selection criterion.** Per BCG 2026: **73% of enterprise AI initiatives cite compliance posture as a top-three vendor selection criterion**, up from 41% in 2024. CAIO roles now exist in **61% of large enterprises**, making compliance a named buyer with budget. SOC 2 Type II runs $35K–$150K in year one; ISO 27001 initial certification $25K–$80K; FedRAMP Moderate/High $500K–$2M+. EU AI Act full application August 2026 (high-risk Annex III potentially deferred to December 2027 under the AI Omnibus) adds conformity-assessment cost ($20K–$80K per high-risk system) for any platform with AI decision-support outputs.

**Compute-per-customer friction.** Multi-tenant SaaS platforms and AI infra companies face a per-customer coordination problem: governance of compute allocation, model versioning, multi-tenant observability, and cross-org federation that neither Backstage nor MuleSoft nor LangSmith was designed to solve in combination. That coordination gap is the technology vertical's primary PrimusNeo friction window.

**Friction-cost anchor summary (3-yr):** $130K–$340K for a 50-engineer startup; $550K–$1.5M for a 50–500-engineer scale-up; $2.3M–$7M+ for 500+ engineer enterprises, telcos, and hyperscalers. Large-tier buyers frequently embed these costs inside cloud EDP/CUD committed-use agreements at **20–40% effective discount off list** — which means the cash friction is lower than the TCO number, but the procurement path is easier (existing cloud commitment absorbs new line items).

**PrimusNeo capture band:** 8–18% of platform engineering spend, per the cross-vertical pricing model.

---

## 2. PrimusNeo positioning per layer in technology

The technology vertical is the sharpest build-vs-buy context PrimusNeo will face. Buyers are themselves platform vendors, infrastructure builders, and developer-tooling companies — they have high tolerance for self-hosting and high skepticism of vendor lock-in. The engagement motion leads with **PLG + OSS inbound**, not with an enterprise RFP response.

**AMP — Spatial OS.** Lighter use in pure-software companies; heavier in metaverse/gaming studios, spatial-product companies, AR/VR platform vendors, telcos running physical network operations, and infra providers with data center and edge site coordination problems. For a pure-software SaaS vendor, AMP is not the primary entry layer. For a gaming company building a metaverse product, a telco managing 50K cell towers, or an AR SDK vendor running multiplayer spatial sessions, AMP is the differentiated operational layer — positioned against NVIDIA Omniverse Enterprise ($4,500/GPU/yr) and Unity Industry ($4,950/seat/yr) on price and against both on offline-first + federated governance characteristics.

**NEOS — Governance.** Highly relevant for telcos with subsidiary structures and post-merger integration challenges, multi-org devtool platforms (plugin ecosystems, marketplace governance), and AI/ML companies managing federated multi-org model governance (regulatory audit trails, cross-team contribution accounting). The CC-NC dual-license makes NEOS free for non-commercial OSS projects and open-source ecosystems — which is also the inbound funnel. Commercial deployment triggers the PCL. Position as the governance protocol layer above Snapshot/Tally (which handle signaling and execution but not durable contribution accounting or holonic federation).

**AZOA — Interoperability Fabric.** The primary entry layer for pure-software technology buyers. AZOA covers what MuleSoft covers for Web2 enterprise integration plus what Chainlink CCIP, LayerZero, Okta, and IPFS cover individually — unified under one contract. For a fintech or AI platform vendor managing integrations across a partner ecosystem, AZOA is the Web2+Web3+identity+reputation fabric that no incumbent iPaaS covers. For a devtool company managing GitHub Enterprise, Jira, PagerDuty, Datadog, and Slack integrations plus emerging chain-based attestations, AZOA is the integration layer that replaces brittle custom glue code and cleans up the engineering debt before it compounds.

**Fractal Engine — Intelligence.** The LLMOps and agent observability layer — Palantir Foundry for federated orgs, without the services-heaviness. Positions below Palantir commercial entry ($250K–$500K/yr) and above commodity Databricks/Snowflake in the operational intelligence tier. For AI/ML companies, Fractal provides the multi-org agent observability, model performance tracking, and governance audit-trail intelligence that neither LangSmith nor W&B provides at the organizational/federated layer. The CC-NC dual-license makes it free for research and academic use, seeding adoption inside the ML engineering community that eventually becomes the enterprise champion.

**Layer interaction for technology.** The dominant bundle for technology buyers is **AZOA + Fractal** (integration fabric + intelligence), escalating to **AZOA + NEOS + Fractal** for multi-org governance programs and telco/hyperscaler deals. AMP enters primarily for gaming/metaverse/telco/spatial-product sub-segments. Full-stack is the right shape for a telco managing physical network operations + subsidiary governance + partner ecosystem integration + AI operations.

---

## 3. Engagement tiers — Small / Mid / Large

### Small: <50-engineer single-product startup ($130K–$340K comparable 3-yr market TCO)

**Profile:** Early-stage SaaS or devtool company with a growing API/integration surface, early AI features, and no dedicated platform team. Spending $22–$39/seat/mo on IDP tooling and ad-hoc on AI observability. May have one Backstage installation abandoned after 60 days.

**Bundle:** AZOA Small + Fractal Small (Duet).

**Worked quote:**
```
AZOA Small:      $40K/yr  (8 integrations: GitHub, Jira, PagerDuty, Datadog, Slack, Okta, 2 custom REST)
Fractal Small:  $45K/yr  (4 data sources: event stream, logs, model traces, deployment telemetry)
Duet bundle:    -10% → $76.5K/yr license
Y1 services     (~2x blend for AZOA-heavy: $153K — connector buildout $80K, ontology mapping $50K, deployment $23K)
Y1 upkeep       (Silver SLA, 22%, starts Y2): $17K/yr
Infra (pass-through + 12%): $18K–$30K/yr
─────────────────────────────────────────
Y1 total:       ~$247K–$259K
3-yr TCO:       ~$390K–$430K
```

**Friction anchor:** $22–$39/dev/mo IDP seats ($13K–$23K/yr) + LangSmith Plus for 5 active AI engineers ($2.3K/yr) + ad-hoc integration debt (estimated 0.5 FTE at $200K loaded = $100K/yr in maintenance engineering time). Direct friction ~$115K–$125K/yr; PrimusNeo 3-yr cost lands inside comparable market band with meaningfully lower integration debt ongoing.

**Capture rate:** $76.5K/yr ÷ $120K/yr friction midpoint = ~64% of direct friction displaced — justified because AZOA eliminates a category of ongoing maintenance engineering work, not just a seat license.

**Cloud EDP note:** At this tier, buyers rarely have cloud EDPs; pricing is straightforward.

---

### Mid: 50–500-engineer scale-up ($550K–$1.5M comparable 3-yr market TCO)

**Profile:** Growth-stage SaaS platform, AI infrastructure company, or devtool scale-up. Has a platform engineering team (2–4 engineers), is running Port or Cortex at $40–$65/seat/mo, and is actively evaluating LangSmith Enterprise or W&B for LLMOps. May have a nascent CAIO function.

**Bundle:** AZOA Mid + Fractal Mid + NEOS Mid (Triad) for multi-org coordination; or AZOA Mid + Fractal Mid (Duet) for single-org.

**Worked quote (Triad, 200-engineer scale-up):**
```
AZOA Mid:        $165K/yr  (25 integrations: GitHub Enterprise, Jira, PagerDuty, Datadog, Slack, Okta, 
                           3 chain connectors for on-chain attestations, 10 partner API connectors, 8 internal)
NEOS Mid:       $55K/yr   (3 councils: engineering guild, partner ecosystem governance, AI model governance)
Fractal Mid:    $200K/yr  (10 data sources: deployment pipeline, model telemetry, SLO/SLA signals, 
                           partner API usage, governance events)
Triad bundle:   -18% → $344K/yr license
Y1 services     (~2.0x blend: $688K — AZOA connectors $320K, Fractal ontology+pipeline $250K, NEOS governance design $118K)
Y1 upkeep       (Silver SLA, 22%, starts Y2): $76K/yr
Infra (pass-through + 12%): $60K–$120K/yr
─────────────────────────────────────────
Y1 total:       ~$1.09M–$1.15M
3-yr TCO:       ~$2.0M–$2.3M
```

**Friction anchor:** Port Enterprise at $65/seat/mo × 200 engineers = $156K/yr + 2 platform engineers at $250K loaded = $500K/yr + W&B at $50/seat/mo × 20 AI engineers = $12K/yr + LangSmith Enterprise custom ~$30K/yr. Estimated direct stack: $698K/yr before custom integration debt. Comparable market 3-yr TCO $550K–$1.5M — PrimusNeo Y1 lands at the high end of comparable 3-yr range, which is defensible only with a clear friction-displacement demonstration in the discovery sprint. The AZOA connector audit should identify at least 2 FTE-equivalent of integration maintenance engineering being displaced (at $200K loaded each = $400K/yr), which repositions the capture to ~49% value share — inside the 8–18% band for pure platform spend but reasonable when engineering time is included.

**Cloud EDP note:** Mid-tier scale-ups often have AWS or GCP EDPs with 20–30% discounts. Frame PrimusNeo as eligible for cloud marketplace procurement to absorb into existing EDP at effective ~20–25% net discount off the above quote.

---

### Large: 500+ engineer FAANG/MAANG/telco/hyperscaler ($2.3M–$7M+ comparable 3-yr market TCO)

**Profile:** MAANG or near-MAANG software company, Tier-1 telco (AT&T, Verizon, Deutsche Telekom, NTT), hyperscaler partner/platform, or major gaming/metaverse company (EA, Activision Blizzard, Roblox-adjacent). Has a full internal platform engineering organization (10–20 engineers), existing Humanitec or custom-built IDP, enterprise W&B + LangSmith or internal tooling, and a growing CAIO function.

**Bundle:** Full-stack (AMP + NEOS + AZOA + Fractal) for telco and metaverse/gaming sub-segments; AZOA + NEOS + Fractal (Triad) for pure-software large enterprise.

**Worked quote (Full-Stack, Tier-1 telco, 2,000-engineer, 800 cell-tower sites):**
```
AMP Large:      $900K/yr  (800 tower sites; physical network ops spatial coordination, per-site ~$1,125/yr)
NEOS Large:     $280K/yr  (federated subsidiary governance: 12 regional councils + partner ecosystem governance)
AZOA Large:      $750K/yr  (60+ integrations: OSS/BSS systems, partner APIs, chain-of-custody attestations,
                           multi-cloud, regulatory reporting endpoints, identity federation across subsidiaries)
Fractal Large:  $800K/yr  (25+ data sources: network telemetry, customer experience signals, governance events,
                           spatial events, LLMOps telemetry, regulatory audit trails)
Full Stack:     -25% → $2.03M/yr license
Y1 services     (~1.8x blend: $3.65M — AZOA connectors $1.2M, AMP site buildout $1.1M,
                 Fractal ontology+models $900K, NEOS governance design $450K)
Y1 upkeep       (Gold SLA, 25%, starts Y2): $508K/yr
Infra (pass-through + 12%): $600K–$1.2M/yr
─────────────────────────────────────────
Y1 total:       ~$6.3M–$6.9M
3-yr TCO:       ~$11M–$14M
```

**Friction anchor:** A Tier-1 telco running a comparable market stack pays $2.3M–$7M+ per year across Humanitec (~$2M/yr IDP for 2,000 engineers at scale), enterprise W&B + LangSmith ($200K+/yr), Omniverse Enterprise for network digital twin ($450K/yr, 100 GPUs), ISO 27001 + SOC 2 compliance overhead ($200K+/yr), and integration engineering maintenance (estimated 8 FTE at $220K loaded = $1.76M/yr). Combined friction window $4.8M–$9.5M/yr; PrimusNeo $2.03M capture = **21–42% value share** — at the high end of defensible, appropriate given full-stack displacement depth.

**Cloud EDP note:** Tier-1 telcos and hyperscalers negotiate cloud EDPs at 30–40% discounts. PrimusNeo on cloud marketplace reduces effective cost to $1.2M–$1.5M/yr equivalent, which repositions the 3-yr TCO to $7M–$9M — firmly inside the $2.3M–$7M comparable band at the high end.

---

## 4. Industry-specific procurement signals

**CTO (build-vs-buy for IDP + agent infra; entry via conference talks + OSS presence).** The CTO or VP Engineering is the primary build-vs-buy authority in technology companies. They respond to architecture credibility, standards alignment (OpenTelemetry, CNCF, OpenUSD, W3C DID/VC), and federated multi-org deployment proof. They will not respond to a traditional enterprise deck — they want a GitHub repo, a runnable demo, and a peer reference from a respected engineering org. Entry via PlatformCon, KubeCon, QCon, or an AI engineering conference; not via analyst relations at this stage. The Humanitec 2023 DevOps Benchmarking finding is the right counter to the NIH objection: top-performing engineering orgs adopt hybrid buy+extend models, not full custom builds.

**VP Platform Engineering / Head of DevEx (IDP budget + DORA metrics; entry via community + peer referral).** This is the operational buyer with the IDP line item. They own DORA metrics: deploy frequency, change failure rate, mean time to restore. They model ROI in engineering time saved, typically at **$150–$250K/engineer-year fully loaded**. A 5% reduction in integration-related incidents across a 200-engineer org at $200K/engineer = $2M/yr in recovered engineering productivity — a number that makes a $344K/yr PrimusNeo license defensible without further math. Entry is through community (PlatformCon, Internal Developer Platform Slack, platform.sh/DORA report influence), not cold outreach.

**Chief AI Officer / Head of AI (agent infra + LLMOps governance + data residency; entry via analyst relations + AI governance working groups).** CAIO roles exist in 61% of large enterprises. This buyer owns the LLMOps stack (LangSmith, W&B), the governance audit trail (EU AI Act compliance), and the data residency posture (EU telcos, GDPR-adjacent scale-ups). Fractal + NEOS is the relevant product pair for this buyer — Fractal for agent observability and model intelligence, NEOS for the governance fabric that produces the signed audit trails the EU AI Act rewards. Entry via AI governance working groups (Partnership on AI, EU AI Office stakeholder engagement), analyst briefings (Gartner CAIO summit), and Escherbridge thought leadership in the LLMOps community.

**Head of Developer Experience / PLG champion (hands-on before budget; entry via free tier + community).** The PLG motion in devtools is well-established: Cursor reached $2B ARR by February 2026 on PLG inbound. OSS inbound (Backstage plugin, AZOA connector SDK, Fractal community tier under CC-NC) drives free team adoption → PQL-triggered outbound → VP Platform/CTO expansion. Baseline PLG free-to-paid conversion is ~9%; top quartile devtool companies reach 25–30% with PQL-triggered outbound (PrimusNeo target). The Head of DevEx is the internal PLG champion — they run the trial, build the proof of value, and bring the budget conversation upward.

---

## 5. Rejection-risk mitigations

**Build-vs-buy / NIH syndrome.** Engineering-led organizations, especially FAANG-adjacent, default to "our requirements are unique." Counter with evidence: the Humanitec 2023 DevOps Benchmarking study found that top-performing engineering organizations use hybrid buy+extend models, not full custom builds. PrimusNeo's open SDK architecture (AZOA connector SDK on MIT/Apache-2.0, AMP community runtime on Apache-2.0, NEOS + Fractal on CC-NC for non-commercial use) is explicitly designed for hybrid buy+extend — buyers can extend any layer without forking the commercial stack.

**Vendor lock-in across four layers / four stewards.** The federated architecture raises legitimate portability questions. Counter: open SDK across all layers (AZOA connector SDK open, AMP Hexon file standard open Apache-2.0, NEOS + Fractal CC-NC for non-commercial), CC-NC dual-licensing on NEOS and Fractal (so the governance schema and intelligence ontology are portable under the open license even if the commercial engine changes), non-negotiable data export guarantees in AZOA (machine-readable export at any time), and OpenUSD / CNCF / W3C DID standards alignment in AMP and AZOA respectively. Source escrow via Iron Mountain is available above $500K ARR for AMP and AZOA closed-core.

**Open-source competition (Backstage, Crossplane, Flux, ArgoCD, OPA, MLflow, LangFuse).** Every commercial PrimusNeo layer has credible OSS alternatives. Counter is not feature competition but TCO and time-to-value. Backstage self-hosted runs $2M+ over 3 years for large teams (3–5 senior platform engineers at $250K loaded). OPA is free but implementation engagements run $150–$300/hr. MLflow and LangFuse lack the federated multi-org governance and operational ontology layer that makes Fractal's agent observability distinct from pure logging. Enterprise support SLA (Gold 24×7, 1-hour P1) is the final differentiator that OSS cannot match at scale.

**Integration with existing devtools.** GitHub Enterprise, Jira, PagerDuty, Datadog, Slack, Okta, and LaunchDarkly are non-negotiable for any technology buyer. The first 90 days of any engagement must demonstrate connector coverage for the buyer's core toolchain. AZOA connector library includes these as standard connectors (CRM at $30K–$80K, Identity/IdP at $25K–$90K, Custom REST/GraphQL at $20K–$120K per the services catalog). Discovery sprint output is a connector coverage matrix showing which integrations are available immediately and which require buildout. Gap commitments go into the SOW with 90-day warranty.

**Governance / data residency (EU telcos, post-GDPR scale-ups, AI Act compliance).** EU-based technology companies — telcos, fintech platforms, AI companies subject to GPAI provisions — require in-region data processing and demonstrable EU AI Act readiness. AZOA supports multi-region deployment with data-residency routing baked into the federation engine. Fractal's model governance and Escherbridge's audit-trail architecture are designed to produce the conformity-assessment documentation that Annex III high-risk systems require. NEOS governance events are immutably signed — the audit trail is the product. Frame these not as compliance checkboxes but as the architecture choices that make EU AI Act conformity a 3-week exercise rather than a 6-month legal program.

**Procurement cycle length.** MAANG and Tier-1 telco enterprise procurement averages 6–18 months from first meeting to signed contract. PLG inbound shortens this: product usage data from the AZOA community SDK or Fractal CC-NC deployment substitutes for an RFP at the team level, escalating to procurement only after internal champions have demonstrated adoption. Target is VP Platform / Head of DevEx as the internal champion who drives usage above the PQL threshold before procurement is formally engaged.

---

## 6. Regulatory + compliance considerations

**SOC 2 Type II** is mandatory for any sale to US enterprise, govtech-adjacent, or financial-services technology company. Cost: $35K–$150K in year one with automation; $20K–$50K/yr ongoing. PrimusNeo SOC 2 Type II is funded as a central investment shared across verticals, not charged per-engagement.

**ISO 27001** is expected by EU enterprise technology buyers and all telco customers. Initial certification $25K–$80K; $15K–$30K/yr surveillance audits. Required for any Capgemini- or Deutsche Telekom-adjacent deal in the EU market. Funded centrally.

**FedRAMP Moderate/High** is relevant for govtech-adjacent technology companies (defense-tech platforms, civic-tech SaaS, government-facing AI infrastructure). Cost: $500K–$2M+ to achieve; typically 12–18 months process. The post-2025 "20x acceleration" brings package completion to under 5 weeks once the authorization package is complete, but the package itself still requires the full investment. Recommended: pursue FedRAMP Moderate by 2027 for the govtech TAM.

**EU AI Act** enters full application August 2026. High-risk systems under Annex III (AI in critical infrastructure, employment, education, essential services) face conformity-assessment requirements potentially deferred to December 2027 under the AI Omnibus proposal. GPAI models above compute thresholds (initially ~10^25 FLOPs) face transparency and systemic-risk documentation requirements effective February 2025. Technology companies building on PrimusNeo's Fractal Engine should document which AI outputs constitute high-risk decision support (Annex III) early — conformity assessment $20K–$80K per high-risk system is scoped as part of the engagement deliverable for any buyer where it applies.

**EU Data Act / DSA / DMA** apply to AZOA-class interoperability fabrics, platform gateways, and data portability mechanisms. Any PrimusNeo AZOA deployment for a platform company with EU operations above DSA/DMA thresholds should include legal review of data portability obligations and interoperability mandates. Initial posture advisory $50K–$200K per jurisdiction.

**US AI EOs and dual-use foundation model disclosure** apply to technology companies building foundation models above compute thresholds. Internal governance program cost $100K–$500K+. Fractal Engine's audit-trail and governance-event architecture is positioned as the technical substrate that makes AI governance reporting tractable.

---

## 7. Steward + service partner notes

**PLAN Systems** (AMP steward, 15% royalty) leads AMP delivery for metaverse/gaming/telco/spatial-product company deployments. PLAN's contribution is lightest in pure-software SaaS deals and heaviest in any engagement involving physical infrastructure (cell towers, data centers, studio sites) or spatial-product development (AR SDK vendors, game studios building shared spatial environments).

**OmniOne** (NEOS steward, 18% royalty) leads NEOS governance design using the ETHOS methodology. Particularly relevant for technology companies managing multi-org governance: telco subsidiaries, plugin/marketplace ecosystems, OSS foundation governance, and AI model governance councils. OmniOne's ETHOS workshops ($35K–$60K for governance design, $25K–$80K for charter authoring) are typically the first named service that NEOS-entry buyers sign.

**AZOA** (AZOA steward, 15% royalty) leads connector development and federation engine deployment. For technology buyers, AZOA is the primary delivery partner for any devtool integration program — GitHub Enterprise, Jira, PagerDuty, Datadog, Okta connectors are built and maintained by the AZOA connector author community. The AZOA connector library reuse model means each new connector built for one technology buyer reduces the marginal cost of the next.

**Escherbridge** (Fractal steward, 18% royalty) leads Fractal ML engineering, custom model development, and agent observability architecture. For AI/ML company buyers, Escherbridge is the primary delivery partner for LLMOps instrumentation, model performance tracking, and multi-org agent observability. Escherbridge's public corpus is the pretrained foundation that reduces custom model training cost by 40–60% relative to training from scratch — a material time-to-value advantage the CAIO buyer will quantify.

**SI channel for technology large deals.** Large technology accounts (telcos, hyperscaler-adjacent) enter through SI partners who frame PrimusNeo inside a broader transformation program:

| Firm | Rate | Technology vertical fit |
|------|------|-------------------------|
| IBM Consulting | $200–$350/hr onshore; $80–$120/hr offshore | Strong in telco (Telco Cloud, network automation), govtech-adjacent |
| Accenture | $220–$400/hr; $3.6B AI bookings | Broadest technology reach; leads CAIO-adjacent AI governance programs |
| Capgemini | $180–$320/hr; strong EU + telco | EU telco and GPAI-focused programs; right fit for Deutsche Telekom/Orange-adjacent deals |
| Globant | $50–$99/hr; Agile Pods ~$20K/mo | Gaming/metaverse delivery; LatAm nearshore for rapid connector buildout |
| EPAM | $75–$200/hr | Engineering-heavy platform delivery; strong devtool and AI platform integration track record |
| ThoughtWorks | $200–$350/hr | Advisory-then-delivery for platform engineering programs; PlatformCon presence |
| Boutique platform-eng (Syntasso, Kosli, Configure8) | $150–$250/hr; workshops $30K–$80K | Backstage/IDP specialization; right entry for Mid-tier VP Platform Engineering deals |

**SI commercial model:** SI partners take 20–40% implementation margin; PrimusNeo takes license/commit. The PLG-to-enterprise motion is the primary technology vertical path and does not require SI involvement at the team/startup tier.

**PLG conversion targets:** 9% free-to-paid baseline; 25–30% top quartile with PQL-triggered outbound once AZOA community SDK or Fractal CC-NC tier installs exceed internal adoption thresholds.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Technology engagement model |
