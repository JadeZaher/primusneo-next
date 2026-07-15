# PrimusNeo Entry Pricing — Community Tiers & Paid Pilots

> **Status:** Draft v0.1
> **Dependencies:** [`00-overview.md`](./00-overview.md), [`01-pricing-model.md`](./01-pricing-model.md), [`02-licensing-model.md`](./02-licensing-model.md), [`03-services-catalog.md`](./03-services-catalog.md)

---

## 1. The gap this closes

The core model ([`01-pricing-model.md`](./01-pricing-model.md)) prices Small/Mid/Large
enterprise engagements. The cheapest commercial path through it today is
roughly **$75K–$170K in year one** (Small-tier license + Discovery sprint +
Atom deployment). That is correct for enterprise — and a wall for everyone
else:

- **Community organizations** (cooperatives, civic associations, DAOs) that
  the CC-NC track exists to serve, who need hosting and guidance, not a PFEL.
- **SMBs above the de-minimis thresholds** ([`02` §2.4](./02-licensing-model.md))
  but nowhere near a six-figure Y1.
- **Enterprise champions** who need a sub-procurement-threshold paid pilot to
  manufacture the internal evidence before a committee will convene.

This document defines the **on-ramp**: published, flat, value-anchored entry
tiers that ladder into the standard anchors — and a paid-pilot motion designed
to kill pilot purgatory rather than feed it.

---

## 2. The on-ramp at a glance

| Rung | Name | Who it's for | Price | Duration | Converts to |
|------|------|--------------|-------|----------|-------------|
| 0 | **Community Edition** (self-host) | Anyone under de-minimis (02 §2.4) | **$0** | — | Community Cloud |
| 1 | **Community Cloud** (hosted) | Co-ops, civic orgs, DAOs under de-minimis | **$149–$399/mo** | Monthly, cancel anytime | Small-tier PCL on graduation |
| 2 | **Community Pilot** | Community orgs wanting a guided launch | **$4K–$9K** fixed | 6 weeks | Community Cloud (100% credit) |
| 3 | **Proof Pilot** | Commercial SMB / enterprise champion | **$18K–$45K** fixed | 6–10 weeks | Small-tier engagement (100% credit) |
| 4 | **Production Pilot** | Regulated / complex verticals | **$60K–$120K** fixed | 10–14 weeks | Small/Mid engagement (100% credit) |

Above Rung 4, the standard model applies: Discovery sprint → PFEL bundle per
[`01` §4](./01-pricing-model.md) and [`03`](./03-services-catalog.md).

---

## 3. The six rules

1. **Every pilot is paid.** Payment is the commitment signal; unpaid POCs are
   how the McKinsey 70% die. The free experience is Community Edition
   self-hosting — never a free pilot.
2. **Entry prices are published and flat.** No negotiation, no discount ladder
   ([`01` §7](./01-pricing-model.md) does not apply below Small tier). Flat
   list price is what makes the entry cheap to sell and easy to buy.
3. **Still value-based.** The flat tiers are pre-clamped outputs of the same
   formula: a pilot fee targets **1–2% of the vertical's annualized
   friction-cost anchor** at the buyer's scale, clamped to the rung band.
   Community Cloud is priced at cost floor + thin margin on pooled infra.
4. **The pilot manufactures the evidence.** Every commercial pilot includes
   Fractal Engine baseline instrumentation. The pilot's output — the **Value
   Evidence Report** — becomes the `FRICTION_COST` input to the full quote.
   The pilot doesn't precede the value-based sale; it *is* the measurement
   phase of it.
5. **Credit-forward, services-first.** 100% of the pilot fee credits against
   the Y1 engagement if signed within 90 days of pilot end. Credit applies to
   the Y1 **services** line first, then license — protecting the steward
   royalty base ([`02` §4](./02-licensing-model.md)).
6. **COST_FLOOR still binds.** Thin entry margins come from the standardized
   **Pilot Kit** (the Tie Town reference architecture in a box: pre-built
   vertical templates, library connectors only, pooled reference infra) —
   never from waiving the floor.

---

## 4. Rung detail

### 4.0 Community Edition (self-host) — $0

What already exists under the licensing model, named as a product tier:
NEOS + Fractal Engine community builds under CC-NC (within the de-minimis
thresholds of [`02` §2.4](./02-licensing-model.md)), plus the open AMP
community runtime and AZOA SDK/connectors (Apache-2.0/MIT). Community forum
support only. This is the top of the funnel and the health of the ecosystem —
it is never crippled to force upgrades.

### 4.1 Community Cloud — $149–$399/mo

Hosted NEOS + Fractal community stack on **pooled multi-tenant reference
infrastructure** (which is what lets the price clear COST_FLOOR — a dedicated
Cloud-reference-small runs $800–$1,500/mo per [`03` §2.5](./03-services-catalog.md)).

| Plan | Members | Price | Includes |
|------|---------|-------|----------|
| Seed | ≤ 50 | **$149/mo** | 1 council, community dashboard, 30-day Fractal retention |
| Grove | 51–250 | **$349/mo** | Multi-council, 12-month retention, AMP community space |
| +Add-on | any | **+$50/mo** | Custom domain + data-export automation |

- Eligibility = the de-minimis thresholds. Crossing them triggers graduation
  (§7), not a cutoff.
- Support: community forum + best-effort email (below Bronze; no SLA).
- Consideration: opt-in public reference listing earns **2 free months/yr**.
- Annual prepay = 2 months free (matches the 5%+ prepay norm, simpler math).

### 4.2 Community Pilot — $4K–$9K fixed, 6 weeks

A guided community launch for co-ops, civic orgs, and DAOs that want hands-on
help: NEOS charter workshop (ETHOS-lite), one council live with real members,
Fractal community dashboard, three facilitated sessions, launch checklist.

- Delivered from the Pilot Kit in 3–5 trainer/governance-designer days.
- **100% of the fee credits** to 12 months of Community Cloud or to any
  commercial engagement signed within 90 days.
- Capped at 4 per quarter delivered internally until Community Partners (§7)
  are certified to deliver at wholesale.

### 4.3 Proof Pilot — $18K–$45K fixed, 6–10 weeks

The commercial entry rung. Single site, **1–2 layers**, ≤25 users, at most one
**library** connector (no bespoke integration), pooled reference infra or the
buyer's cloud.

Includes, always:

1. **Success-criteria contract** — 3–5 metrics fixed in week 1, signed by a
   named executive sponsor.
2. **Baseline instrumentation** — Fractal Engine measures the friction being
   displaced from day one. This satisfies the 60-day instrumentation phase
   required for the outcome-based addendum ([`01` §8](./01-pricing-model.md)),
   so a converted engagement is gainshare-ready immediately.
3. **Value Evidence Report** — the measured friction cost, sourced and
   presented in the buyer's numbers, delivered whether or not they convert.
4. **Pre-priced conversion quote** — built with the [`01` §1](./01-pricing-model.md)
   formula from the measured baseline, delivered by ~week 6 so the buyer knows
   the full price *before* the pilot ends.

Fee heuristic: `clamp(1.5% × measured-or-estimated annual friction, $18K, $45K)`.
The band deliberately sits under single-budget-holder signature authority in
most mid-market orgs.

### 4.4 Production Pilot — $60K–$120K fixed, 10–14 weeks

For verticals where compliance scope makes a Proof Pilot impossible
(healthcare, energy, finance, public governance). Everything in the Proof
Pilot, plus: one full catalog connector ([`03` §2.2](./03-services-catalog.md)),
a compliance documentation pack (HIPAA/HITRUST, NERC CIP, SOC 2 evidence as
applicable), Gold-grade support during the pilot term, and limited-production
scope under the Pilot License Rider (§5).

Positioning: a Production Pilot is the **Discovery sprint + Atom deployment
fused** into one fixed-fee, value-instrumented package ($60–$120K vs.
$75–$170K bought separately) — with the credit-forward mechanic on top.

### Per-vertical entry defaults

| Vertical | Default entry rung | Typical pilot fee |
|----------|--------------------|-------------------|
| Manufacturing | Proof Pilot | $25K–$45K |
| Logistics | Proof Pilot | $25K–$45K |
| Robotics | Proof Pilot | $30K–$45K |
| Construction | Proof Pilot | $25K–$40K |
| Agriculture | Proof Pilot (co-ops: Community Pilot first) | $18K–$28K |
| Technology | Proof Pilot | $18K–$35K |
| Healthcare | Production Pilot | $90K–$120K |
| Energy | Production Pilot | $80K–$120K |
| Finance | Production Pilot | $70K–$110K |
| Governance | Public sector: Production $60K–$100K · DAO: Community/Proof | $6K–$30K (DAO) |

---

## 5. Pilot mechanics

**SOW skeleton (Proof Pilot, 8 weeks):**

| Week | Milestone |
|------|-----------|
| 0 | Kickoff; success criteria signed; **conversion decision meeting calendar-blocked for week 9** |
| 1–2 | Pilot Kit deployment; baseline instrumentation live |
| 3–5 | Layer(s) in daily use by pilot cohort; weekly metric readout |
| 6 | Value Evidence Report (interim) + pre-priced conversion quote delivered |
| 7–8 | Hardening, final measurement window |
| 9 | Conversion decision meeting: convert, stop, or extend |

**Anti-purgatory guardrails:**

- No pilot without a **named executive sponsor** and a stated conversion
  budget range. No sponsor, no pilot.
- **One extension maximum**: +4 weeks at 25% of the pilot fee. There is no
  second extension — the pilot converts or ends. Data exports in full either
  way (the no-lock-in promise applies at every rung).
- Payment: 50% at signature, 50% at week-4 milestone. Card/ACH accepted at
  Rungs 1–3; no net-30 negotiation below Rung 4.

**Pilot License Rider (PLR):** pilots ship under a time-boxed rider — named
scope, pilot term + 30 days, auto-expiring, non-renewable (Production Pilots
get limited-production scope). For CC-NC layers this simply papers the hosted
service; for AMP/AZOA it grants the closed-core components within the
"non-commercial pilot scope" already contemplated by
[`02` §1](./02-licensing-model.md). Conversion replaces the PLR with the
standard PCL/PEL/PFEL.

---

## 6. Conversion math — worked example

Mid-size precision-machining plant (~$60M revenue, 2 lines). Proof Pilot on
**Fractal Engine + AZOA** (MES library connector), fee
`clamp(1.5% × est. $1.8M friction, 18K, 45K)` = **$27K**, 8 weeks.

Pilot baseline measures **$1.8M/yr** of displaceable friction (unplanned
downtime $1.1M, scrap/rework traceability $0.4M, coordination rework $0.3M).
Conversion quote per the [`01` §1](./01-pricing-model.md) formula:

```
FRICTION_COST:  $1.8M/yr   (measured, not estimated — pilot output)
VALUE_SHARE:    10% → $180K/yr    (clean attribution via pilot baseline)
Quote band:     [max(COST_FLOOR, $90K), $180K]

License:   Fractal Small $75K + AZOA Small $48K = $123K − 10% Duet = ~$111K  ✓ in band
Services:  deployment hardening + 2nd connector $110K − $27K pilot credit = $83K
Upkeep:    Silver 22% × $111K ≈ $24K
Infra:     buyer cloud, pass-through + 12% ≈ $12K
                                    ─────
Y1 TOTAL:  ~$230K   (vs. ~$75K–$170K just to *start* without the on-ramp,
                     and vs. $1.8M/yr measured friction)
```

Even at a conservative 40% friction removal ($720K/yr), the buyer nets ~$490K
in year one — a quote the sponsor defends with *their own plant's numbers*,
because the pilot produced them.

---

## 7. The community flywheel

The community tiers are not a loss leader; they are the **reference network**.
Target: 2–3 community lighthouses per vertical, each playing the Tie Town role
for its niche.

- **Graduation, not eviction.** A community entity crossing the de-minimis
  thresholds gets its first PCL year at **50% of the Small anchor** (one-time),
  then standard rates. Growth is celebrated, never punished — this is what
  keeps the CC-NC ecosystem loyal at commercial scale.
- **Contribution credits.** Accepted contributions (NEOS council templates,
  AZOA community connectors, Fractal schemas) earn **$500–$2,500 in Community
  Cloud credit** per acceptance, subject to steward review. Contributors fund
  their own hosting by making the stack better.
- **Community Partners.** Certified co-op developers and civic-tech shops
  deliver Community Pilots at **70% of list** (wholesale), scaling the motion
  beyond internal capacity and seeding a delivery ecosystem.
- **Reference rights.** Opt-in only, rewarded (§4.1) — never coerced.

---

## 8. Positioning against Discovery and Atom

| Situation | Right motion |
|-----------|--------------|
| Mid/Large enterprise, formal procurement, budget exists | **Discovery sprint** ([`03` §2.1](./03-services-catalog.md)) — do not sell a Proof Pilot; the band under-prices it |
| Regulated vertical, compliance gates entry | **Production Pilot** (Discovery + Atom fused) |
| SMB or enterprise champion pre-committee | **Proof Pilot** |
| Community org under de-minimis | **Community Pilot / Community Cloud** |

The rungs are qualification tiers, not a menu — selling down-rung to a
qualified enterprise buyer destroys value; selling up-rung to an unqualified
one destroys the funnel.

---

## 9. Internal economics & guardrails

| Rung | Target gross margin | Note |
|------|---------------------|------|
| Community Cloud | ≥ 20% over pooled infra | Self-sustaining, not profit center |
| Community Pilot | ≥ 25% | Ecosystem seeding; capacity-capped |
| Proof Pilot | ≥ 40% | Pilot Kit standardization is the margin |
| Production Pilot | ≥ 45% | Aligns with Deployment margins ([`03` §4](./03-services-catalog.md)) |

- **Royalties:** pilot fees are services revenue — no steward royalty per
  [`02` §4](./02-licensing-model.md). Community Cloud's license component
  carries the standard schedule on its NEOS/Fractal split. The services-first
  credit rule (§3, rule 5) exists to protect the royalty base on conversion.
- **Capacity:** per delivery pod per quarter — 6 Proof + 2 Production pilots;
  4 Community Pilots internally (unlimited via Community Partners).
- **Funnel health:** Proof Pilot → paid conversion target **≥ 40%** within
  90 days. Below 25% for two consecutive quarters means the Kit or the
  qualification gate is broken — fix before scaling pilot volume.
- **No discounting:** entry prices are list. The [`01` §7](./01-pricing-model.md)
  discount authority does not extend below Small tier; a request for a pilot
  discount is a qualification failure, not a negotiation.

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-07-15 | Founding team | Initial entry-pricing on-ramp: community tiers + paid-pilot ladder |
