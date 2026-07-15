# NEOS — Governance Engagement Model

> **Layer:** 02 — Agreements & Permissions / Governance
> **Steward:** OmniOne / Green Earth Vision
> **License:** **Creative Commons BY-NC-SA 4.0** (non-commercial use free) + PrimusNeo Commercial License (PCL) for any commercial use
> **Reference deployment:** Tie Town [TX] governance councils + Aave/Lido benchmark adjacencies
> **Anchors source:** [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. What NEOS actually is (in the buyer's vocabulary)

NEOS is the **durable coordination + decision-rights layer**. It is where councils form, charters are written, contributions are accounted, holonic organizations nest inside larger federations, and approvals become signed, auditable, replayable events.

In the language enterprises already know:

- A **bank** or **asset manager** to a CRO: NEOS is the programmable approval-and-attestation fabric that produces the immutable governance logs MiCA, OCC Letter 1184, and SAB 122 now make a procurement requirement.
- A **hospital system** to a CCO: NEOS is the consent + IRB + change-control governance layer that satisfies HIPAA, HITRUST i1/r2, and increasingly EHDS.
- A **state agency** to a CIO: NEOS is the inter-departmental decision-rights system that bridges the gap between Tyler/Granicus civic platforms and the participatory democracy world (Decidim, Pol.is).
- A **DAO** to a Steward Council: NEOS is the durable governance layer above Snapshot signal + Tally execution — the part that codifies the *intent* and the *accountability*, not just the vote.
- A **cooperative** to a member board: NEOS is the contribution accounting + holonic structure system that lets a 50-person cooperative federate with 50 others without losing local sovereignty.

NEOS is governance **at the protocol layer**, not at the SaaS-board-portal layer. That difference is what justifies pricing **above Loomio** (which is a discussion tool) and **at parity with Diligent** (which is a board portal but with no on-chain auditability or contribution accounting).

---

## 2. License posture — Creative Commons with Commercial Restrictions

This is the layer that most directly tests the CC-NC + commercial-license model. Per [`../02-licensing-model.md` §2](../02-licensing-model.md):

| Use | License | Cost |
|-----|---------|------|
| Personal / academic / research | CC-BY-NC-SA 4.0 | Free |
| Nonprofit community deployment (co-op, neighborhood association, civic group) with no revenue from the deployment | CC-BY-NC-SA 4.0 | Free |
| DAO / protocol with treasury ≤ $5M USD-equiv | CC-BY-NC-SA 4.0 | Free |
| Small commercial entity meeting **all** de-minimis thresholds (≤$1M revenue, ≤10 FTE, ≤250 connected members, no resale) | CC-BY-NC-SA 4.0 | Free |
| Above any de-minimis threshold | **PrimusNeo Commercial License (PCL)** | See tiered pricing below |
| Hosting NEOS as a paid service / managed service / SaaS | **PCL required** | Tiered |
| Embedding in any commercial product or platform | **PCL required** | Tiered |
| Government / public-sector entity procuring through paid procurement vehicle | **PCL required** | Tiered |

Forks are permitted; forks may not market themselves as "PrimusNeo NEOS" (trademark restriction); commercial use of a fork still requires a PCL with OmniOne / PrimusNeo.

---

## 3. Pricing tiers (annual commercial license, before services)

| Scale | Definition | Annual License | Services Multiplier (Y1) | Typical 3-yr TCO |
|-------|------------|----------------|--------------------------|------------------|
| **Small** | Single org, 1 council, <50 members | **$6K–$18K/yr** | 0.5–1x | $25K–$80K |
| **Mid** | Multi-council, 50–500 members, charter management | **$30K–$90K/yr** | 0.5–1x | $130K–$420K |
| **Large** | Federated governance, 500+ members, multiple orgs | **$120K–$400K/yr** | 0.5–1x | $530K–$1.7M |

**Pricing mechanic options** (default in bold):

- **Per-council license** (default for orgs adopting governance progressively): $1.5K–$8K/council/yr
- Per-member license (for participatory democracy / DAO contexts): $20–$120/member/yr (scales down at volume)
- Per-covered-life (healthcare consent, civic resident contexts): $0.10–$1/covered-life/yr
- **% of treasury** (DAO context, optional addendum): **0.10–0.30% of treasury AUM/yr**, *capped* at the Large-tier license ceiling

The % of treasury option is materially below the Llama/Karpatkey 0.25–0.75% range, on purpose — NEOS is the *governance fabric*, not the treasury management service. The fabric should be cheaper than the service it enables.

---

## 4. Services mix

NEOS services are the **lightest** of the four layers. Most of the work is design (governance design, charter authoring, council structuring) and training rather than integration. Typical Mid-tier SOW:

| Service | Scope | Fixed-fee range |
|---------|-------|-----------------|
| **Governance design workshop** | OmniOne ETHOS methodology, 2-day on-site or 4-half-day virtual | $35K–$60K |
| **Charter authoring** | 3–8 charters per engagement; legal review handoff included | $25K–$80K |
| **Council instantiation** | Council templates, signing key setup, contribution-accounting wiring | $20K–$60K |
| **Identity bridging** | To AZOA identity fabric, IdP integration (Okta/Entra/Auth0/SSI) | $15K–$50K |
| **Operator training** | Council moderators, secretaries, members | $20K–$60K |
| **30-day hypercare** | Post-launch stabilization | Included |

For DAO contexts, add **treasury-policy authoring** ($30K–$120K) and **on-chain governance setup** ($20K–$80K) as separately scoped items.

---

## 5. Sustained upkeep + infra

Annual sustained upkeep = **18–22% of license** (lighter than the other three layers because configuration change rate is lower).

Infra (pass-through + 12% mgmt fee):

- **NEOS coordination server** (per-org hosted): $200–$1,500/mo
- **Chain anchoring gas reserve** (for any deployment that anchors governance events on-chain): variable per chain, typically $50–$500/mo for L2
- **Signature key management** (KMS / HSM options): $300–$2,000/mo depending on tier
- **Optional treasury custody integration overhead** (when bridging to Fireblocks / BitGo / Anchorage): pass-through

---

## 6. Bundle interactions

NEOS composes naturally with every other layer. The two most common bundles:

| Other layer | What you unlock together |
|-------------|--------------------------|
| **+ AZOA** | Identity federation + signed cross-org events. **Required duo for any multi-entity governance deployment** (federations, cross-DAO coordination, multi-state agency cooperation, supply-chain consortia). |
| **+ Fractal Engine** | Governance events become first-class signals. Contribution accounting → workforce intelligence; council decisions → policy-effectiveness analytics. **High-value duo for finance (CRO dashboards), healthcare (CCO dashboards), and large DAOs (treasury policy backtesting).** |
| **+ AMP** | Governance attached to place: "this approval was issued from this location, on this asset, by this signed identity at this moment." **Required duo for regulated operational contexts (manufacturing change control, hospital lockout/tagout, energy NERC CIP-013 attestations).** |

---

## 7. Two worked engagement examples

### 7.1 Mid NEOS+AZOA: 200-person worker cooperative federation (Tier-2 Mid, CC-NC eligible? No — commercial)

- **Buyer:** Federation of 5 worker cooperatives, ~200 total members, $40M combined revenue, planning member equity tokenization and cross-coop work-sharing
- **Scope:** 5 nested councils (one per co-op) + 1 federation council; contribution accounting across coops; identity federation via AZOA
- **De-minimis check:** Combined revenue $40M → above $1M threshold → PCL required
- **Quote:**
  - NEOS Mid: $55K/yr (6 councils × ~$9K/council/yr)
  - AZOA Small: $40K/yr (5–10 integrations, identity-heavy)
  - Duet bundle: -10% → $85K/yr license
  - Y1 services (~0.8x license for NEOS-heavy mix): $68K
  - Y1 upkeep (Silver SLA, 22%): starts Y2 at $19K
  - Infra: $1.2K/mo
- **Y1 total:** ~$170K · **3-yr TCO:** ~$400K
- **Friction-cost anchor:** $200K/yr currently spent across Loomio, Diligent, custom contribution-tracking spreadsheets, lawyer hours formalizing inter-coop agreements, and one painful prior governance failure that cost $300K in dissolved trust
- **Capture rate:** ~$170K ÷ $200K = **85% capture** of *direct* friction — but the bigger value is the federation enablement that wasn't possible at all before, justifying the price above the direct-friction floor

### 7.2 Large NEOS+AZOA+Fractal: G-SIB tokenization program governance (Tier-3 Large)

- **Buyer:** CTO + Head of Digital Assets + Chief Risk Officer at a $1.5T AUM global asset manager launching a tokenized fund product
- **Scope:** NEOS governance fabric for the tokenization program (issuance approval councils, KYC policy councils, transfer-agent attestation flows, regulatory reporting attestations), AZOA for chain + custody integration, Fractal for risk + compliance reporting
- **Quote:**
  - NEOS Large: $280K/yr (multi-entity, regulated FS premium)
  - AZOA Large: $620K/yr (10+ chains + Fireblocks + Anchorage + Snowflake + legacy core integration)
  - Fractal Large: $750K/yr (regulatory + risk analytics + audit trail intelligence)
  - Triad bundle: -18% → $1.35M/yr license
  - Y1 services (~1.4x blend): $1.9M
  - Y1 upkeep (Platinum SLA, custom %): $400K (starts Y2)
  - Infra: $300K–$800K/yr
- **Y1 total:** ~$3.5M–$4.0M · **3-yr TCO:** ~$8M–$11M
- **Friction-cost anchor:** MiCA non-compliance = €15M or 3% of revenue (~$45M for this firm). OCC Letter 1184 attestation premium: per the finance research brief, banks will pay $200K–$500K+/yr per platform that produces attestations on-demand. Custody compliance overhead reduced by SAB 122 but legal + ops cost still $1–2M/yr at this scale. Estimated capture window $5–10M/yr in defensible friction
- **Capture rate:** $1.35M ÷ $7M = **~19% value share** — defensible inside the 10–25% finance capture band

---

## 8. Steward economics

Per [`../02-licensing-model.md` §4](../02-licensing-model.md):

- **OmniOne royalty: 18% of NEOS line-item license revenue**, paid quarterly
- OmniOne is also the primary delivery partner for governance design + ETHOS methodology engagements; services revenue accrues to OmniOne directly when they deliver
- The CC-NC + PCL structure is specifically what protects OmniOne's stewardship from being undercut by cloud-hyperscaler hosting (the MongoDB-vs-AWS-DocumentDB pattern)

---

## 9. Risks specific to NEOS

| Risk | Mitigation |
|------|------------|
| CC-NC ambiguity over "commercial use" | De-minimis thresholds (§2) define commercial use objectively by revenue + headcount + members |
| DAO governance attack vectors | NEOS ships with sane defaults (min 3/5 multisig <$10M treasury, 4/7 above; replay protection; flash-loan-resistant voting). Compliance posture documented per engagement |
| Cloud hyperscaler fork-and-host | SSPL/BSL-style precedent (HashiCorp, MongoDB, Elastic) shows CC-NC + PCL holds up commercially. Trademark also restricts fork branding |
| "We already have Diligent / Aragon / Loomio" | NEOS is a governance protocol, not a portal. Discovery shows the gap: durable contribution accounting, holonic federation, signed event log — none of the incumbents do all three |
| Government / public sector procurement | NASPO / Sourcewell / GSA enrollment plus CC-NC visibility for civic deployments creates a hybrid pipeline that GovTech incumbents (Tyler, Granicus) can't easily match |

---

## 10. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team | Initial NEOS engagement model |
