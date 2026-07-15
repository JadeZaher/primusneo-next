# PrimusNeo Licensing Model

> **Status:** Draft v0.1 — needs legal review before any external commitment.
> **Scope:** Defines the legal and commercial licensing posture for all four
> layers and the federated stack as a whole.

---

## 1. The two-track licensing structure

PrimusNeo runs a **two-track licensing model** that mirrors successful
open-core precedents (Elastic SSPL, MongoDB SSPL, HashiCorp BSL, Grafana AGPL,
Sentry FSL) while honoring the federated steward arrangement.

| Track | Layers | Default license | Commercial trigger |
|-------|--------|-----------------|--------------------|
| **Open / CC-NC track** | NEOS, Fractal Engine | Creative Commons BY-NC-SA 4.0 (or CC-BY-NC 4.0 where derivative concerns apply) | Any *commercial use*, redistribution, or hosted-as-a-service offering |
| **Closed-core track** | AMP | Closed-source enterprise license; community runtime / SDK selectively open-sourced under Apache-2.0 or MIT | Any production deployment beyond community / non-commercial pilot scope |
| **Open-source + managed track** | AZOA | Entire engine **Apache-2.0** — self-hosting is free and unrestricted | PrimusNeo-managed nodes, enterprise federation gateway, certified rail adapters, SLA-backed support |

The whole stack composes into commercial PrimusNeo **Engagement Bundles**
(see [`01-pricing-model.md`](./01-pricing-model.md)) — and the bundle license
is what enterprise buyers actually sign.

---

## 2. Track A — Creative Commons with Commercial Restrictions

### 2.1 Layers under this track

- **NEOS** (steward: OmniOne / Green Earth Vision)
- **Fractal Engine** (steward: Escherbridge)

### 2.2 The license

**Primary:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0
International (**CC-BY-NC-SA 4.0**) for NEOS source, schemas, and reference
implementations. **CC-BY-NC 4.0** for Fractal Engine (no ShareAlike on
derivative models because training data may carry separate licenses).

**What this permits without payment:**

- Personal, academic, and research use.
- Non-profit community deployments (cooperatives, neighborhoods, civic
  associations) where the deploying entity has *no revenue from the
  deployment*.
- DAOs and protocols below a treasury threshold (see §2.4).
- Forks, modifications, and republication — provided attribution and the
  same CC-BY-NC-(SA) license terms are preserved.

**What this prohibits without a commercial license:**

- Hosting the software as a paid service (SaaS, managed service, RaaS).
- Embedding in any commercial product or platform.
- Use by for-profit entities above the de-minimis thresholds (§2.4).
- Use by government or public-sector entities that procure it through a
  paid procurement vehicle (those buy under the commercial license).

### 2.3 The commercial-license tier

Any of the above prohibited uses are unlocked by a **PrimusNeo Commercial
License** (PCL) for that layer. The PCL:

- Removes the NC restriction for the specified scope (entity, sites,
  user count, treasury size).
- Adds standard commercial protections: warranty disclaimers fit for
  enterprise procurement, IP indemnity capped per [`01-pricing-model.md`
  §6](./01-pricing-model.md), data-processing addendum.
- Routes a **royalty share** to the layer steward (OmniOne for NEOS,
  Escherbridge for Fractal Engine) per the **Steward Royalty Schedule**
  in §4 below.

### 2.4 De-minimis thresholds (no PCL required)

A commercial entity may use the CC-NC track without a PCL only if **all** of
the following hold:

| Threshold | Limit |
|-----------|-------|
| Annual gross revenue | ≤ $1M USD |
| Headcount | ≤ 10 FTE |
| Connected users / members | ≤ 250 |
| Treasury (for DAO / protocol) | ≤ $5M USD equivalent |
| No resale or service-bureau hosting | required |

Above any threshold, a PCL is required. This pattern mirrors the Sentry FSL
free-tier-for-small-teams approach and avoids weaponizing the license against
the legitimate cooperative / startup ecosystem the layers are intended to
serve.

---

## 3. Track B — Closed-core / Partial-OSS

### 3.1 Layers under this track

- **AMP** (steward: PLAN Systems) — closed-core / partial-OSS
- **AZOA** (steward: AZOA) — open-source engine (Apache-2.0) with a
  commercial managed tier

### 3.2 What's open

- **AMP**: PLAN core runtime (Hexon file standard v1.0.0), client SDKs,
  WASM extension interface, reference 3D viewer scaffold — typically
  **Apache-2.0** to maximize adoption in spatial-computing toolchains.
- **AZOA**: The **entire engine** — identity & consent, quests, holons,
  swaps, STAR dapp generation, settlement bridges — plus the `@azoa/sdk`
  TypeScript SDK, all **Apache-2.0**. AZOA is designed to be self-hosted and
  extended: new chains plug in via `ChainProvider`, DEXes via `DexAdapter`,
  and new settlement rails behind the same bridge seam.

### 3.3 What's closed

- **AMP**: Enterprise spatial-collaboration server, multi-tenant federation,
  privacy-preserving mesh routing, premium PLAN 3D interface components.
- **AZOA**: Nothing in the engine is closed. The commercial surface is
  **operational**: PrimusNeo-managed AZOA nodes (hosted, multi-tenant,
  SLA-bearing), the enterprise federation gateway service, certified
  settlement-rail adapters that carry commercial partner cost, and
  enterprise support.

### 3.4 The commercial license

Closed-core components ship under a **PrimusNeo Enterprise License (PEL)**,
which is a traditional commercial license:

- Per-named-user, per-site, per-API-call, or enterprise commit (mechanic
  varies by layer — see layer files in [`layers/`](./layers/)).
- Source available under NDA to enterprise tier customers above a threshold
  (typically $250K ARR).
- IP indemnity and warranty per [`01-pricing-model.md` §6](./01-pricing-model.md).

---

## 4. Steward royalty schedule

To preserve the federated four-org arrangement and avoid the
single-entity-captures-the-stack failure mode that has killed every prior
attempt at this kind of stack, every PrimusNeo commercial engagement pays a
**Steward Royalty** into a transparent treasury distributed quarterly.

| Steward | Layer | Default royalty share of net license revenue |
|---------|-------|----------------------------------------------|
| OmniOne / Green Earth Vision | NEOS | **18%** of NEOS line-item license rev |
| Escherbridge | Fractal Engine | **18%** of Fractal Engine line-item license rev |
| PLAN Systems | AMP | **15%** of AMP line-item license rev |
| AZOA | AZOA | **15%** of AZOA line-item license rev |
| PrimusNeo (integrator) | Stack-wide | Residual (~34%) plus 100% of services margin |

Services revenue (customization, integration, deployment, upkeep) does **not**
carry a steward royalty unless the work is performed by the steward
themselves on subcontract, in which case it is invoiced through normally.

Infra pass-through and mgmt fee carry no royalty.

**Quarterly reporting**: PrimusNeo publishes (under NDA to stewards) a deal
ledger reconciling royalties and pays out within 45 days of quarter close.

---

## 5. Bundle licensing

Most enterprise engagements adopt **two or more layers** as a bundle. The
bundle ships under a single **PrimusNeo Federated Engagement License (PFEL)**
that:

- References the underlying PCL / PEL for each layer (so the steward
  royalties flow automatically).
- Gives the buyer a single signature surface and a single counter-party
  (PrimusNeo) for procurement, support, and indemnity.
- Specifies the **deployment scope** (entity, named subsidiaries,
  geographies, named user count, named site count) as a schedule that can be
  expanded under a Change Order without re-papering the entire contract.

The PFEL is the document procurement actually negotiates against. The
underlying single-layer licenses are referenced exhibits.

---

## 6. Forking and derivatives

This is the part that determines whether the open-source ecosystem survives
commercial scale-up, so it is spelled out explicitly:

- **NEOS and Fractal Engine forks** are explicitly permitted and
  encouraged. They must retain the CC-BY-NC-(SA) license, attribute the
  original stewards, and may not represent themselves as "PrimusNeo
  NEOS / Fractal" (trademark restriction, not license restriction).
- **Commercial use of a fork** requires a PCL with the steward of the
  original layer, not the forker. (This is the Elastic SSPL pattern: forks
  exist; commercial hosted forks pay.)
- **Derivative Fractal Engine models** trained on a customer's data
  remain the customer's IP. Models trained on Escherbridge's public corpus
  remain Escherbridge IP and are licensed back to the customer under the
  PCL scope.
- **AMP forks** are constrained by the closed-core boundary. The open SDKs
  are forkable under Apache-2.0; the closed components are not. This is the
  standard open-core pattern (cf. GitLab CE/EE, Sentry, HashiCorp).
- **AZOA forks** are unrestricted under Apache-2.0. The commercial moat is
  the managed service, the certified rail adapters, and the trademark — not
  the source.

---

## 7. Trademark

"PrimusNeo," "AMP," "NEOS," "AZOA," "Fractal Engine," and "Tie Town" are
trademarks of their respective stewards. The license grant does **not**
include trademark rights. Compliant use of marks in compatibility statements
("works with PrimusNeo NEOS") is permitted under standard nominative-use
fair-use principles; product naming and badging is not.

---

## 8. Open questions for legal

1. CC-BY-NC-SA vs. a custom **Functional Source License (FSL)** with a
   2-year-delayed Apache-2.0 conversion (Sentry's playbook). FSL gives a
   stronger commercial moat at the cost of slightly more legal friction.
   **Recommendation:** stay on CC-BY-NC for v0.1 (it's a known quantity to
   the cooperative/research audience these layers serve); revisit FSL at
   v1.0 if commercial poaching becomes a real problem.
2. Whether to define "commercial use" by **revenue** (clean, easily
   verified) or by **purpose** (closer to the CC NC spirit, but ambiguous).
   **Recommendation:** revenue + headcount + connected-users, per §2.4.
3. Whether enterprise customers can request **escrow** of closed-core
   AMP source for business-continuity purposes. **Recommendation:**
   yes, above $500K ARR threshold, through a standard third-party escrow
   agent (e.g., Iron Mountain). AZOA needs no escrow — the engine is
   Apache-2.0.
4. Whether DAO treasuries denominated in volatile assets are valued at
   acquisition cost or marked-to-market for the §2.4 threshold.
   **Recommendation:** trailing-90-day VWAP; documented in the PCL itself.

---

## 9. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial dual-track structure |
| 0.2 | 2026-07-15 | Founding team | OASIS → AZOA rename; AZOA moved to an Apache-2.0 open-source + managed-service track |
