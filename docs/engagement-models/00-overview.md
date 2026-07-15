# PrimusNeo Commercial Engagement Model — Overview

> **Document set:** Engagement Models v0.1 (May 2026)
> **Status:** Draft for internal alignment. Numbers are anchors, not quotes.
> **Audience:** Founding team, partner ecosystem (Escherbridge, OmniOne, PLAN, AZOA), enterprise prospects.

---

## 1. Why this document exists

PrimusNeo is a **federated coordination stack** — not a product, not a SaaS,
not a blockchain. Four sovereign technology layers (built and stewarded by
four sovereign organizations) compose into a single operating fabric for any
group of people, machines, and capital that needs to coordinate at scale.

That structure makes pricing genuinely hard:

- **Four layers** with different licensing postures (two creative-commons,
  two closed/partial).
- **Ten verticals** with wildly different willingness-to-pay, procurement
  norms, and service multipliers (a hospital is not a DAO is not a port).
- **Four classes of service** (customization, integration, deployment,
  sustained upkeep) plus **infra pass-through**.
- A founding commitment to **"Proof Over Promises"** — pricing must be
  defensible against the *actual* friction-cost the buyer is already paying
  (McKinsey, IMF, UNIDO, sector-specific sources).

This document set translates that complexity into a **bounded, value-based
commercial model** that any deal team can use to quote a number, defend it,
and close it without burning the open-source ecosystem that feeds the stack.

---

## 2. The four layers (and their licensing posture)

| Layer | Steward | Function | Licensing | Relative Price |
|-------|---------|----------|-----------|----------------|
| **AMP** | PLAN Systems | Spatial OS · privacy-first 3D collaboration · offline-capable community OS · **Operational Access Management (OAM)** | **Closed-core / partial-OSS** (community runtime open, enterprise spatial + multi-tenant + OAM kernel closed) | **$$$$ — top of stack** (most mature layer; ships two production-grade capabilities — Spatial OS + OAM — in one runtime) |
| **Fractal Engine** | Escherbridge | Intelligence · historical archive · analytics · actionable signals on operational telemetry | **Creative Commons with Commercial Use Restrictions** (CC-BY-NC + commercial license tier) | $$$ |
| **AZOA** | AZOA | Universal interoperability fabric · one API across providers, chains, storage, identity, reputation, avatars | **Closed-core / partial-OSS** (open SDK + connectors, closed federation engine and enterprise gateway) | $$$ |
| **NEOS** | OmniOne | Governance · councils · charters · contribution accounting · holonic orgs | **Creative Commons with Commercial Use Restrictions** (CC-BY-NC-SA + commercial license tier) | $$ |

> **Naming note:** The interoperability layer is **AZOA** in all PrimusNeo
> commercial documents and product copy. The steward organization is **AZOA
> Web4**. Older internal materials sometimes use "AZOAIS" as the layer name —
> that term is reserved for the external standards body and is not used in
> PrimusNeo deliverables.

See [`02-licensing-model.md`](./02-licensing-model.md) for the legal mechanics
of the CC-NC + dual-license arrangement, and the per-layer files in
[`layers/`](./layers/) for engagement-level pricing per layer.

---

## 3. The pricing philosophy in one paragraph

> **Price against the friction we remove, capped by the value we create,
> floored by the cost-to-serve.** Every quote is built up from three numbers:
> (a) the buyer's *current* annualized cost of the coordination friction we
> displace (McKinsey/UNIDO/sector benchmarks), (b) the *defensible value share*
> we can capture (typically 5–25% of friction removed, depending on layer and
> attribution clarity), and (c) the floor cost of infra, support, and
> stewardship payouts to the federated stewards. We quote inside that range.
> We never quote a number we cannot defend with a sourced friction-cost.

That philosophy is operationalized in [`01-pricing-model.md`](./01-pricing-model.md).

---

## 4. The engagement-model matrix

PrimusNeo engagements are quoted on three axes:

```
                    LAYERS (4)
                   ┌───────┬───────┬───────┬───────┐
                   │  AMP  │ NEOS  │  AZOA  │FRACTAL│
                   ├───────┼───────┼───────┼───────┤
INDUSTRIES (10)    │       │       │       │       │
  Agriculture      │   $   │   $$  │   $$  │   $$$ │
  Construction     │   $$$ │   $$  │   $$  │   $$  │
  Energy           │   $$  │   $$  │   $$$ │   $$$ │
  Finance          │   $   │   $$$ │   $$$ │   $$$ │
  Governance       │   $$  │   $$$ │   $$  │   $$  │
  Healthcare       │   $$  │   $$$ │   $$$ │   $$$ │
  Logistics        │   $$  │   $$  │   $$$ │   $$  │
  Manufacturing    │   $$$ │   $$  │   $$  │   $$$ │
  Robotics         │   $$$ │   $$  │   $$  │   $$$ │
  Technology       │   $$  │   $$  │   $$$ │   $$  │
                   └───────┴───────┴───────┴───────┘
                       ×
                  SERVICES (5)
        Customization · Integration · Deployment
              · Sustained Upkeep · Infra
```

Each industry doc in [`industries/`](./industries/) gives the actual dollar
ranges for that vertical at Small / Mid / Large scale per layer, plus the
recommended bundle pricing.

---

## 5. The five service classes

These are priced **separately from license / subscription** and scoped per
engagement. See [`03-services-catalog.md`](./03-services-catalog.md) for full
SKU detail.

| Class | What it covers | Typical pricing mechanic |
|-------|----------------|--------------------------|
| **Customization** | Vertical-specific schemas, council templates, twin extensions, custom Fractal models, WASM extensions | T&M day rate or fixed-fee scope |
| **Integration** | IT/OT bridges, ERP/MES/EHR/CRM/TMS connectors, identity federation, AZOA connector buildouts | Fixed-fee per connector or T&M |
| **Deployment** | Reference architecture rollout, environment provisioning, data migration, cutover, training, change management | Fixed-fee bundle or per-site |
| **Sustained Upkeep** | Tier-1/2/3 support, version upgrades, security patching, AZOA connector maintenance, model retraining cadence | Annual % of license (typically 18–25%) or all-in MSA |
| **Infra (pass-through)** | Cloud (AWS/Azure/GCP), edge compute, storage tiers, observability, chain gas, optional Tie Town reference colo | Pass-through + 10–18% mgmt fee |

---

## 6. Tie Town as the reference architecture

Every engagement is grounded in the **Tie Town [TX]** deployment as living
proof-of-capability. Quote language: *"This is the same stack running the Tie
Town media and creator house in McDade, Texas — extended for your context.
We don't ship slideware; we extend a system that's already in production."*

This collapses the buyer's pilot-purgatory risk (McKinsey: 70% of Industry
4.0 pilots never scale) into a known, working reference — which is the single
biggest enterprise-deal de-risker we have.

---

## 7. How to use this document set

1. **Start with [`01-pricing-model.md`](./01-pricing-model.md)** — the
   value-based pricing formula and the layer/scale anchor grid.
2. **Read [`02-licensing-model.md`](./02-licensing-model.md)** to understand
   the CC-NC + commercial-license dual track for NEOS and Fractal Engine, and
   the closed-core arrangement for AMP and AZOA.
3. **Read [`03-services-catalog.md`](./03-services-catalog.md)** for the
   service SKUs and day rates.
4. **For anything smaller than a Small-tier engagement** — community
   deployments, SMBs, or a first paid pilot inside an enterprise — start from
   [`04-community-pilot-pricing.md`](./04-community-pilot-pricing.md), the
   entry on-ramp that ladders into these anchors.
5. **Pick the relevant industry file in [`industries/`](./industries/)** for
   the vertical you're quoting. Each file gives Small / Mid / Large
   engagement bundles with $-range, mechanics, and the friction-cost anchor
   used to defend the number.
6. **Pick the relevant layer files in [`layers/`](./layers/)** if the buyer
   wants single-layer adoption only (common for AZOA-only data-fabric deals
   and Fractal-only analytics deals).

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial draft |
| 0.2 | 2026-07-15 | Founding team | Added entry-pricing on-ramp ([`04`](./04-community-pilot-pricing.md)) to the reading path |

---

*This document is internal-only. Public-facing pricing pages derive from this
source but never expose the raw anchor numbers.*
