# PrimusNeo Value-Based Pricing Model

> **Status:** Draft v0.1
> **Dependencies:** [`00-overview.md`](./00-overview.md), [`02-licensing-model.md`](./02-licensing-model.md), [`03-services-catalog.md`](./03-services-catalog.md), [`research/layer-comparables.md`](./research/layer-comparables.md)

---

## 1. The pricing formula

Every PrimusNeo quote is built from three numbers:

```
                  ┌───────────────────────────────┐
                  │  FRICTION_COST  (anchor)      │   ← sourced from McKinsey, UNIDO, IMF,
                  │  =  buyer's current annualized│      sector research per industry doc
                  │     cost of the coordination  │
                  │     problem we displace       │
                  └────────────┬──────────────────┘
                               │
                  ┌────────────▼──────────────────┐
                  │  VALUE_SHARE   (capture)      │   ← 5–25% of friction removed,
                  │  =  what PrimusNeo can        │      adjusted for attribution clarity
                  │     defensibly capture        │      and layer mix (see §3)
                  └────────────┬──────────────────┘
                               │
                  ┌────────────▼──────────────────┐
                  │  COST_FLOOR   (must clear)    │   ← infra + steward royalty +
                  │  =  cost-to-serve including   │      service delivery cost +
                  │     steward royalties         │      target gross margin
                  └────────────┬──────────────────┘
                               │
                       Final quote sits in
                  [ max(COST_FLOOR, 0.5 × VALUE_SHARE),
                          1.0 × VALUE_SHARE ]
```

**We never quote below `COST_FLOOR`.** We rarely quote above `VALUE_SHARE`.
The defensible quote band is the intersection.

**Entry engagements** — community deployments, paid pilots, anything below
the Small anchors in §3 — are priced by
[`04-community-pilot-pricing.md`](./04-community-pilot-pricing.md): the same
formula, pre-clamped into published flat tiers so there is nothing to
negotiate at the low end.

---

## 2. Why value-based, not cost-plus

Cost-plus pricing under-prices the federated stack. The four-layer architecture replaces between 4 and 12 point solutions in a typical enterprise stack, with friction-cost displacement that runs 5–50x our delivery cost. Cost-plus would leave 80%+ of the captured value on the buyer's table — which is fine for commodity infrastructure but the wrong default for coordination infrastructure that takes years to build and has no clean substitute.

Value-based pricing also forces us to do the work of grounding every quote in a sourced friction-cost (per industry doc). That discipline is what makes the quote *defensible* in front of a procurement committee that has read McKinsey too.

---

## 3. Layer pricing anchors

These are the per-layer anchor ranges derived from [`research/layer-comparables.md`](./research/layer-comparables.md). They are the **starting position** for any quote and the upper bound on what we charge without a documented friction-cost override.

### 3.1 AMP — Spatial OS

**AMP is the top-priced layer in the PrimusNeo stack** because it is the most mature layer (years of PLAN Systems hardening + live Tie Town deployment) AND it delivers two production-grade capabilities in one runtime: **Spatial OS + Operational Access Management (OAM)**. The OAM kernel is what justifies AMP sitting above Fractal Engine on the price ladder; without it, AMP would be a Unity-Industrial competitor priced at $4,950/seat/yr. With it, AMP also displaces Okta/CyberArk/BeyondTrust-class operational IAM/PAM spend.

| Scale | Definition | Annual License Anchor | Services Multiplier (Y1) |
|-------|------------|-----------------------|--------------------------|
| Small | 1–3 sites, <50 concurrent spatial users, <200 OAM identities | **$30K–$75K/yr** | 1.5–2.5x |
| Mid | 4–15 sites, 50–500 concurrent, 200–2,500 OAM identities | **$150K–$450K/yr** | 1.5–2.5x |
| Large | 15+ sites, multi-org federation, 500+ concurrent, 2,500+ OAM identities | **$600K–$2.5M/yr** | 1.5–2.5x |

Comparable anchors (combined surface area AMP displaces): NVIDIA Omniverse Enterprise ($4,500/GPU/yr) + Unity Industry ($4,950/seat/yr) + Unreal Enterprise ($1,850/seat/yr) on the spatial side; Okta Workforce Identity ($5–$15/user/mo + add-ons), CyberArk PAM ($50–$150/user/yr), BeyondTrust Privileged Remote Access (similar) on the operational access side.

**OAM-only entry SKU** available at 70% of the Spatial-OS line-item for buyers (regulated FS, defense-adjacent, NERC CIP-driven utilities) where the access-management value lands before the spatial twin value.

### 3.2 NEOS — Governance

| Scale | Definition | Annual License Anchor | Services Multiplier (Y1) |
|-------|------------|-----------------------|--------------------------|
| Small | Single org, 1 council, <50 members | **$6K–$18K/yr** | 0.5–1x |
| Mid | Multi-council, 50–500 members | **$30K–$90K/yr** | 0.5–1x |
| Large | Federated governance, 500+ members, multiple orgs | **$120K–$400K/yr** | 0.5–1x |

Comparable anchors: Diligent ($12K–$60K+/yr), Microsoft Viva Suite ($144/seat/yr), Loomio ($1.2K–$7.2K/yr), Aragon/Snapshot/Tally (free). **CC-NC dual-license**: free for non-commercial; commercial use at these rates.

### 3.3 AZOA — Interoperability Fabric

| Scale | Definition | Annual License Anchor | Services Multiplier (Y1) |
|-------|------------|-----------------------|--------------------------|
| Small | <10 integrations, single domain, <1M API calls/mo | **$24K–$60K/yr** | 2–3x |
| Mid | 10–50 integrations, multi-chain/cloud, 1M–50M calls/mo | **$80K–$250K/yr** | 2–3x |
| Large | 50+ integrations, full federation engine, >50M calls/mo, cross-org | **$350K–$1.5M/yr** | 2–3x |

Comparable anchors: MuleSoft ($1,250/vCore/month → $80K–$2M+/yr), Boomi ($6.6K–six-figure), Workato (20–30% below MuleSoft). Gas/chain fees pass-through at cost + 12% mgmt fee.

### 3.4 Fractal Engine — Intelligence

| Scale | Definition | Annual License Anchor | Services Multiplier (Y1) |
|-------|------------|-----------------------|--------------------------|
| Small | <5 data sources, departmental analytics, <1TB managed | **$30K–$75K/yr** | 1–2x |
| Mid | 5–20 data sources, operational telemetry + historical archive, 1–20TB | **$100K–$350K/yr** | 1–2x |
| Large | 20+ sources, cross-org intelligence, real-time + archive, >20TB | **$500K–$2M+/yr** | 1–2x |

Comparable anchors: Palantir Foundry ($250K–$10M+/yr commercial), Snowflake ($25K–$10M+/yr), Databricks (DBU + cloud compute), Splunk ($30K–$60K/month at mid-scale). **CC-NC dual-license**: research/nonprofit free; commercial production at these rates.

---

## 4. Bundle pricing (the deal you actually sign)

Most engagements adopt **2–4 layers** as a bundle. Bundles are quoted as a single PFEL line item (see [`02-licensing-model.md` §5](./02-licensing-model.md)) with a small bundle premium and a clear bundle discount that nets favorably to the buyer relative to single-layer sum.

| Bundle | Composition | Discount vs single-layer sum | Premium for federation |
|--------|-------------|------------------------------|------------------------|
| **Duet** | Any 2 layers | 10% off | +5% for federation engine |
| **Triad** | Any 3 layers | 18% off | +5% |
| **Full Stack** | All 4 layers | 25% off | +0% (federation is the value) |

Worked example: a Mid-tier full-stack engagement totals roughly:

```
AMP   Mid:  $300K  (midpoint of $150K–$450K — spatial OS + OAM)
NEOS  Mid:   $60K  (midpoint of $30K–$90K)
AZOA   Mid:  $160K  (midpoint of $80K–$250K)
Fract Mid:  $220K  (midpoint of $100K–$350K)
                ─────
Subtotal:   $740K
Bundle:     -25% → $555K
Services Y1 (~2x license blend): $1.11M
Sustained Upkeep Y1+ (22% of license, Silver SLA): $122K
Infra (pass-through + 12% mgmt fee): $60K–$180K
                ─────
Y1 TOTAL:   $1.85M–$2.0M
3-yr TOTAL: $3.4M–$4.0M  (Y2–Y3 mostly license + upkeep, services taper)
```

This lands inside the **Mid-tier 3-yr TCO bands** for nearly every vertical (logistics $900K–$2.7M, manufacturing $1.5M–$8M, healthcare $8M–$25M at the high end, agriculture $1.2M–$6M, energy $2.5M–$10M). Where it lands at the high end of a band (manufacturing, energy, healthcare-mid), the friction-cost anchor justifies the position — especially given AMP's dual Spatial-OS + OAM displacement. Where it lands at the low end (logistics, agriculture), bundle discount + outcome-based component keeps the buyer engaged.

---

## 5. Modulating the quote by vertical

The same Mid-tier quote modulates **±30%** based on three vertical-specific signals:

| Modulator | Increase quote | Decrease quote |
|-----------|---------------|----------------|
| **Regulatory tailwind** | Energy (NERC CIP, CSRD, CBAM), Healthcare (HITRUST, EHDS), Finance (MiCA, SAB 122) | Construction (mostly voluntary ESG today) |
| **Procurement maturity** | Finance, Energy, Public Governance (formal RFP + Big-4 benchmarking) | Cooperatives, DAOs, early-stage startups |
| **Friction-cost density per $1 of buyer revenue** | Manufacturing (70% pilot purgatory, $50B downtime), Healthcare ($50M–$500M EHR integration tax) | Technology buyers (will build it themselves; lower friction relative to their internal eng capacity) |

Adjust by ±10% per modulator that fires, capped at ±30% in either direction.

---

## 6. Standard commercial terms

These are the default contract terms. Negotiable but defensible:

| Term | Default | Notes |
|------|---------|-------|
| **Initial term** | 3 years | Mirrors enterprise software norm; aligns with sustained upkeep math |
| **Auto-renewal** | 1-year auto-renew with 90-day notice | Standard |
| **Annual escalator** | CPI + 3% (capped at 7%) | Below the ServiceNow 5–10% renewal-uplift norm we'll be benchmarked against |
| **Payment terms** | Net 30; quarterly invoicing | Annual prepay = 5% discount |
| **Bundle discount** | 10/18/25% per §4 | Hard floor — no further discount on bundle without VP+ sign-off |
| **Multi-year discount** | 5% / yr (Y2 = -5%, Y3 = -10%) | Stacks with bundle discount |
| **Steward royalty** | Internal — see [`02-licensing-model.md` §4](./02-licensing-model.md) | Invisible to buyer; affects our COGS, not the quote |
| **IP indemnity** | Capped at 2× annual fees for the affected layer | Industry standard for enterprise software |
| **Liability cap** | 2× annual fees, excluding gross negligence + IP indemnity | Standard |
| **Data export** | Customer data exportable in machine-readable form at any time | Non-negotiable; preserves no-lock-in promise |
| **Source escrow** | Available for closed-core (AMP, AZOA) at >$500K ARR via Iron Mountain | Pass-through escrow agent fee |
| **Termination for convenience** | After Y1, with 90-day notice, no refund of prepaid amounts | Aligned with comparable enterprise software |

---

## 7. Discounting authority

| Approver | Max additional discount | Notes |
|----------|-------------------------|-------|
| Account Executive | 5% (against bundle-discounted price) | Standard concession |
| Sales VP | 10% | Plus a strategic-account flag for the deal review |
| Co-founder / CEO | 15% | Steward orgs must be notified — affects their royalty share |
| Steward Council vote | Above 15% | Required for any deal where bundle discount + multi-year + concession exceeds 35% net off list |

**No deal closes below COST_FLOOR.** A losing deal at COST_FLOOR is better than a winning deal that bleeds money for three years.

---

## 8. Outcome-based / gainshare addenda

For verticals where attribution is feasible (manufacturing OEE, energy VPP, logistics on-time delivery, finance straight-through processing), we can offer an **outcome-based addendum** on top of the base license:

- Base license priced at **80% of standard anchor** (the buyer takes some discount up front).
- Performance fee of **15–30% of documented annualized savings** above an agreed baseline.
- Baseline established by Fractal Engine measurement in a 60-day instrumentation phase before the contract goes hot.
- Performance fee billed quarterly in arrears.
- Cap on performance fee at **2× foregone base license** in any year (so worst case the buyer ends up paying ~140% of standard, only when we've delivered 4–7x that in savings).

This addendum is **opt-in** for the buyer and is the right structure for CFO-led conversations where the buyer is willing to pay more *only* if we deliver. It is **not** offered into highly regulated rate-recovery contexts (energy utility rate cases) because the regulatory cost-allocation math becomes too tangled.

---

## 9. Worked friction-cost anchors per vertical (summary)

The full math per industry lives in [`industries/*.md`](./industries/). Headline anchors:

| Vertical | Friction anchor | Source | Typical PrimusNeo capture |
|----------|----------------|--------|---------------------------|
| Manufacturing | $50B/yr global unplanned downtime; 70% pilot purgatory | McKinsey, Siemens | 5–15% of plant-level capture |
| Healthcare | $50M–$500M EHR integration tax; $200K/yr HITRUST gate | Becker's, HITRUST | 8–20% of integration spend |
| Finance | $200K–$500K/yr/bank attestation premium; MiCA non-compliance €15M/3% revenue | OCC, MiCA | 10–25% of attestation premium |
| Energy | $13.2M/yr industry-wide NERC CIP-015-1 alone; $5M–$50M IOU ADMS | NERC, DOE | 5–15% of CIP + governance spend |
| Logistics | TradeLens-pattern wasted $1B+; $300K+/yr existing visibility spend | Industry analysis | 10–20% of consolidated platform spend |
| Construction | 0.1–0.3% of ACV typical PM spend; 1–2% capex on digital programs | McKinsey, Procore | 5–15% of program tech budget |
| Agriculture | 60% of profits on FSMA compliance at SMB scale; $84.9M → $36.1M MRV market | USDA, GMInsights | 8–18% of compliance + MRV spend |
| Robotics | $50K–$200K+ ISO 10218 cert per cell; pilots fail 70% | ISO, McKinsey | 10–20% of fleet coordination spend |
| Governance | $400K–$900K FedRAMP Mod; Llama at $2.5M/yr for Aave alone | FedRAMP, public DAO governance | 15–30% of governance services spend |
| Technology | $2M+ 3-yr TCO on self-hosted Backstage at scale | Roadie, Humanitec benchmarks | 8–18% of platform-eng spend |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial value-based formula |
| 0.2 | 2026-07-15 | Founding team | Cross-referenced entry-pricing on-ramp ([`04`](./04-community-pilot-pricing.md)) |
