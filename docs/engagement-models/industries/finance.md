# Finance — Engagement Model

> **Vertical:** Finance (banks, asset managers, insurers, exchanges, tokenization platforms, RWA)
> **Research brief:** [`../research/finance.md`](../research/finance.md)
> **Anchors:** [`../01-pricing-model.md`](../01-pricing-model.md), [`../research/layer-comparables.md`](../research/layer-comparables.md)

---

## 1. The friction-cost anchor

Financial institutions face four compounding friction windows that make the PrimusNeo value case quantifiable before the first meeting.

**Information-layer reference price.** Bloomberg Terminal at $31,980/seat/year (multi-seat negotiated $28,320; enterprise 50+ at $18K–$20K/seat) sets the market expectation for what FIs will pay annually to access structured, auditable, institutional-grade data. This is the anchor for any conversation about what a governance + interop + intelligence fabric is worth per-seat at an asset manager or exchange. Refinitiv Eikon ($22K/seat), FactSet ($12K/seat), and Snowflake/Databricks enterprise ($25K–$40K/yr for 200TB, up to $10M/yr at 500-analyst scale) extend the band.

**Tokenization friction.** Securitize and Tokeny (T-REX) charge $50K–$150K setup plus **0.5%–2.5% of issuance value** for smart-contract deployment and compliance wrapping. A $30M issuance runs $200K–$1M all-in. White-label platform build costs range $50K–$150K upfront with custom development from $150K. Ongoing compliance and transfer-agent retainers layer on top. For a mid-tier asset manager running $500M of tokenized AUM, issuance friction alone is $2.5M–$12.5M over the tokenization program lifecycle.

**Custody cost.** BitGo charges approximately 60 bps/year on AUC (5 bps/month on AUC >$100K). Fireblocks and Anchorage are bilateral-negotiated at $1M+ AUC minimum. Across a $500M–$2B notional portfolio, annual custody cost runs $3M–$12M — costs that AZOA multi-custodian integration directly reduces by eliminating bespoke custodian-by-custodian API build and maintenance.

**Regulatory premium.** MiCA non-compliance fines: €15M or 3% of annual revenue, whichever is higher. For a mid-sized EU-registered CASP with $100M revenue, 3% = €3M at risk annually. OCC Interpretive Letter 1184 (May 2025) means national banks providing crypto custody must demonstrate controls on-demand; banks will pay **$200K–$500K+/year** per platform that produces those attestations. SAB 122 (January 2025) rescinds SAB 121's on-balance-sheet liability treatment, removing the primary accounting disincentive for bank custody — expanding the addressable market for compliant custody infrastructure significantly. FCA implicit compliance tax runs £100K–£500K/year in incremental monitoring and reporting under crypto-asset registration and stablecoin frameworks.

**Per-customer friction windows (worked):**

| Customer tier | Annual friction estimate | Source composition |
|---|---|---|
| Boutique manager / family office <$1B AUM | $200K–$500K | TaaS SaaS + legal/structuring + custody at 60 bps/yr on $100M AUC + KYC/AML ($30K–$90K) + governance software |
| Regional bank / asset mgr $1–50B AUM | $1.5M–$4M | White-label tokenization + issuance legal + Fireblocks/BitGo custody on $500M–$2B notional + Chainalysis ($150K–$300K) + GRC/IRM ($300K–$600K) + data fabric ($150K–$400K) |
| G-SIB / top-20 asset mgr / major exchange | $8M–$25M+ | Custom tokenization + interop fabric ($2M–$5M build) + multi-custodian + Snowflake/Databricks at scale ($2M–$10M/yr) + full Chainalysis + TRM ($400K–$1M/yr) + ServiceNow IRM ($600K–$1.5M/yr) + Big-4 transformation |

The 10–25% capture band on these friction windows yields the PrimusNeo defensible quote range per tier.

---

## 2. PrimusNeo positioning per layer in finance

### AMP — lighter use; deferred or scoped to specific facilities

AMP's primary value proposition in finance is operational and place-anchored: trading floor coordination, secure vault facilities, data center walk-through governance. These are real use cases — particularly for regulated operational control rooms where "this approval was issued from this location by this signed identity at this moment" is a compliance requirement — but they are **not the lead** in a finance engagement. Most finance buyers do not have a spatial-twin problem as their primary friction. AMP is typically deferred to Year 2 or scoped as an add-on for specific facilities within a larger NEOS+AZOA+Fractal deployment. Finance is the one vertical where the Full Stack upsell to include AMP commonly happens in Y2–Y3, not at contract signature.

### NEOS — the primary killer layer for finance

NEOS is the layer that directly solves the compliance, governance, and attestation requirements that have become binary procurement requirements following MiCA, OCC Letter 1184, and SAB 122. In the buyer's vocabulary:

- **To a CRO:** NEOS is the programmable approval-and-attestation fabric that produces the immutable governance logs MiCA, OCC Letter 1184, and SAB 122 now make non-optional.
- **To a Head of Digital Assets:** NEOS is the issuance approval council, KYC policy council, and transfer-agent attestation flow layer that replaces the current patchwork of email chains, legal memos, and manually-assembled audit trails.
- **To a tokenization program lead:** NEOS is the RWA governance layer that gives every tokenized asset a durable, replayable, chain-anchored provenance record — the compliance artifact that Securitize and Tokeny charge 0.5–2.5% of issuance value to produce without a durable governance trail.

NEOS positions above Diligent ($12K–$60K+/yr board portal) and Loomio ($1.2K–$7.2K/yr discussion tool) because it delivers on-chain auditability, contribution accounting, and programmable attestation — none of the governance portals do all three. In the regulated FS context, the on-chain auditability alone is worth the premium; Diligent produces PDFs, NEOS produces cryptographically verifiable event logs.

### AZOA — the other primary killer layer for finance

Finance is the vertical where AZOA's pitch as "what MuleSoft is for Web2 enterprise integration, AZOA is for the Web2+Web3+identity+custody reality" lands with the most force. No incumbent iPaaS covers multi-custodian (Fireblocks, BitGo, Anchorage) + multi-chain (EVM, Solana, Cosmos, Hedera) + legacy core-banking (Temenos, Finastra, Murex, Calypso) + regulatory feed integration in a single certified connector library. MuleSoft starts at $80K–$250K+/year for the enterprise license without finance-specific chain connectors; real large-enterprise MuleSoft runs $500K–$2M+/year before implementation. AZOA covers the Web3+custody+legacy-core surface area MuleSoft doesn't, at parity or below for the Web2 integrations MuleSoft does cover.

For G-SIBs and top-tier asset managers, AZOA's multi-custodian-native federation engine is the explicit answer to the vendor-concentration rejection risk: the federated 4-steward structure IS the multi-vendor answer, and AZOA is the layer that operationalizes it.

### Fractal Engine — regulatory, risk, and AML signal intelligence

Fractal positions against Palantir Foundry (entry $250K–$500K/year commercial, $1M–$10M+/year for large deployments) and Snowflake/Databricks (strong for raw data warehousing but no native governance-event signal types). In finance, the Fractal differentiator is that NEOS governance events and AZOA integration events are **first-class signal types** — meaning the CRO dashboard, the regulatory audit log, and the AML signal model all run on the same fabric that produced the governance events, not on a separately assembled data pipeline.

Chainalysis Reactor runs $40K/year single-seat; enterprise KYT $100K–$500K+/year. Fractal is not a direct AML-chain-intelligence replacement for Chainalysis — it is the layer that aggregates Chainalysis signals, on-chain governance events, and off-chain transaction context into a unified risk model. The combination is more defensible than either alone, and Fractal's pricing is scoped per the data-source and intelligence-model tiers below, not as a per-chain AML overlay.

### The canonical finance bundle: NEOS + AZOA + Fractal (Triad)

The default finance bundle is the Triad: NEOS + AZOA + Fractal Engine. AMP is deferred to Y2. The Triad bundle discount is 18% off single-layer sum per the pricing model. This is the configuration that:

1. Produces the immutable governance logs (NEOS) required by MiCA, OCC 1184, and SAB 122
2. Integrates across custodians, chains, and legacy core-banking (AZOA) without requiring rip-and-replace of Temenos/Finastra/Murex/Calypso
3. Converts governance and integration events into regulatory reporting, risk signals, and AML intelligence (Fractal)

---

## 3. Engagement tiers — Small / Mid / Large

### Tier 1 — Small: Boutique manager / family office (<$1B AUM)

**Profile:** Boutique hedge fund, family office, or early tokenization platform. Primary drivers: basic KYC-council governance for investor onboarding, single-chain or dual-chain tokenization, limited legacy-core integration.

**Bundle recommendation:** NEOS Small + AZOA Small Duet. Fractal deferred to Y2 unless the CRO is driving AML analytics requirements from day one.

**Friction anchor:** $200K–$500K/year in TaaS SaaS ($72K–$180K), legal/structuring ($100K–$250K), custody at 60 bps/year on $100M AUC (~$60K), and KYC/AML ($30K–$90K). OCC Letter 1184 attestation premium: $200K/yr for a compliant platform producing on-demand attestations.

**Worked quote:**
```
NEOS Small:    $12K/yr   (midpoint $6K–$18K; single org, 1–2 councils)
AZOA Small:     $42K/yr   (midpoint $24K–$60K; <10 integrations:
                          2 chain connectors + custody API + KYC/IdP + core banking)
Duet bundle:   -10%  →   $48K/yr license

Y1 services:   ~1.0x NEOS + ~2.5x AZOA blend → $113K
  (NEOS governance design + charter authoring: $60K;
   AZOA connector buildout 4 connectors at avg $18K ea: $72K,
   connector bundle 10% off → $65K; identity bridging: $20K)
Y1 upkeep:     Silver SLA, 22% of license → $11K (starts Y2)
Infra:         $1.5K/mo → $18K/yr
```

**Y1 total: ~$179K**
**3-yr TCO: ~$370K** (Y2–Y3: license $48K + upkeep $11K + infra $18K/yr, services taper to ~$20K/yr)

**Friction anchor check:** $179K Y1 ÷ $300K friction midpoint = **60% capture in Y1**, justified because NEOS displaces legal memo + email-chain governance directly and AZOA displaces manual custodian API maintenance. At Y1=60% capture the buyer is still clearly positive. 3-yr TCO of $370K sits well inside the research brief's $350K–$900K small-tier band.

**Capture rate:** 10–20% of the OCC attestation premium ($200K–$500K/yr) alone = $20K–$100K/yr recurring justification, separate from the integration cost displacement.

---

### Tier 2 — Mid: Regional bank or asset manager ($1–50B AUM)

**Profile:** Regional bank entering digital assets, mid-cap asset manager launching tokenized fund, or specialized exchange. Primary drivers: MiCA compliance, multi-custodian custody integration, KYC policy governance, transfer-agent attestation, regulatory reporting.

**Bundle recommendation:** NEOS Mid + AZOA Mid + Fractal Mid Triad. This is the default finance engagement configuration.

**Friction anchor:** $1.5M–$4M/year — white-label tokenization ($150K–$500K), issuance legal ($200K–$600K), Fireblocks/BitGo custody on $500M–$2B notional, Chainalysis ($150K–$300K), GRC/IRM ($300K–$600K), data fabric ($150K–$400K), Big-4 SI ($500K–$1.5M). MiCA non-compliance at 3% of revenue = $3M/yr at $100M revenue.

**Worked quote:**
```
NEOS Mid:       $60K/yr   (midpoint $30K–$90K; multi-council:
                           issuance approval, KYC policy, transfer-agent attestation)
AZOA Mid:       $165K/yr   (midpoint $80K–$250K; 20+ integrations:
                           Fireblocks + BitGo + 3 chains + Temenos core + KYC/AML feed
                           + regulatory reporting feed + legacy reporting DB)
Fractal Mid:   $225K/yr   (midpoint $100K–$350K; 10–15 data sources:
                           custody events + chain events + governance events +
                           AML signals + risk reporting)
Triad bundle:   -18%  →   $369K/yr license

Y1 services:   ~0.75x NEOS + ~2.5x AZOA + ~1.5x Fractal blend:
               NEOS governance design + charters + council instantiation: $130K
               AZOA connector buildout (8 connectors avg $35K ea, 5+ bundle
               discount 15%): $238K; identity bridging + custody wiring: $80K
               Fractal: ontology mapping + pipelines (10 sources × $40K): $400K;
               regulatory model + audit-trail buildout: $100K
               Total services Y1: ~$948K
Y1 upkeep:     Gold SLA (regulated FS default), 25% of license → $92K (starts Y2)
Infra:         Mid cloud reference $6K/mo + chain gas reserve $1K/mo → $84K/yr
```

**Y1 total: ~$1.4M**
**3-yr TCO: ~$3.0M** (Y2–Y3: license $369K + upkeep $92K + infra $84K/yr, services taper to ~$150K/yr by Y3)

**Friction anchor check:** $1.4M Y1 ÷ $2.75M friction midpoint = **~51% value share in Y1** — this is above the 10–25% ongoing capture band because Y1 includes one-time connector buildout. On a steady-state basis: $369K/yr license ÷ $2.75M friction = **13.4% value share**, squarely inside the 10–25% finance capture band. 3-yr TCO of $3.0M sits at the midpoint of the research brief's $1.5M–$5M mid-tier band.

**Regulatory modulator:** MiCA compliance exposure (+10%), procurement maturity (+10%) = +20% modulator applies, supporting quoting at the upper-mid range rather than the midpoint.

---

### Tier 3 — Large: G-SIB / top-20 asset manager / major exchange

**Profile:** Global systemically important bank, top-20 asset manager with $1T+ AUM, major exchange launching tokenization infrastructure, or RWA platform at institutional scale. The canonical worked example from `layers/neos.md §7.2` is the reference — extended here with the full finance-vertical context.

**Bundle recommendation:** NEOS Large + AZOA Large + Fractal Large Triad, with AMP Large optionally added in Y2 for operational facilities (trading floors, vault/data-center governance). This matches the `neos.md §7.2` example of a $1.5T AUM global asset manager launching a tokenized fund product.

**Friction anchor:** $8M–$25M+/year. Components: custom tokenization + interop fabric build ($2M–$5M); multi-custodian (Fireblocks + Anchorage + BitGo) custody management infrastructure; Snowflake/Databricks at analyst scale ($2M–$10M/yr); full Chainalysis + TRM ($400K–$1M/yr); ServiceNow IRM ($600K–$1.5M/yr). MiCA non-compliance at 3% revenue = $45M+ at a firm this scale. OCC Letter 1184 attestation overhead $500K+/yr. Legal + ops cost of manual compliance workflows $1–2M/yr at this scale. **Combined friction window: $5M–$10M/yr defensible capture surface.**

**Worked quote (canonical, per `neos.md §7.2`):**
```
NEOS Large:     $280K/yr   (multi-entity regulated FS premium;
                            issuance approval councils, KYC policy councils,
                            transfer-agent attestation flows, regulatory
                            reporting attestations)
AZOA Large:      $620K/yr   (10+ chains + Fireblocks + Anchorage + Snowflake +
                            legacy core Temenos/Murex + FIX gateway + regulatory
                            reporting feeds)
Fractal Large:  $750K/yr   (regulatory + risk analytics + audit-trail
                            intelligence; AML signal aggregation; CRO dashboards)
Triad bundle:   -18%  →   $1.35M/yr license

Y1 services:   ~1.4x blend → $1.9M
  (AZOA: federation engine deployment $400K + 10 connector bundle $600K;
   NEOS: governance design $120K + 5 charters $60K + council instantiation $60K
         + operator training $60K;
   Fractal: ontology mapping $100K + regulatory model validation $150K +
            audit-trail attestation buildout $100K + CRO dashboards $80K;
   remaining services to $1.9M blend)
Y1 upkeep:     Platinum SLA, custom % → $400K (starts Y2)
Infra:         $300K–$800K/yr (multi-region, multi-custodian gateway,
               chain gas reserves across 10+ chains)
```

**Y1 total: ~$3.5M–$4.0M**
**3-yr TCO: ~$8M–$11M**

**Friction anchor check:** $1.35M/yr license ÷ $7M friction midpoint = **~19% value share** — defensible inside the 10–25% finance capture band per the pricing model. 3-yr TCO of $8M–$11M sits squarely inside the research brief's $8M–$25M+ large-tier band. The MiCA alone ($45M+ non-compliance exposure) makes this quote defensible at any C-suite table.

**AMP Y2 add-on:** Trading floor, vault operations, and data-center governance scope typically added at $350K–$700K/yr AMP Large (partial deployment) in Y2, bringing the Full Stack annual license to approximately $1.7M–$2.05M/yr at bundle rates.

---

## 4. Industry-specific procurement signals

**Decision makers by tier:**

| Tier | Primary Champion | Tech Sign-off | Compliance Veto | Entry Price for Procurement |
|------|---|---|---|---|
| Small | CIO / COO | CTO | — | >$250K (informal at small) |
| Mid | Head of Digital Assets | CDO / CTO | CRO | >$500K (formal procurement) |
| Large | Head of Digital Assets + C-suite sponsor (typically COO or CFO) | CTO + CDO committee | CRO + Legal + Compliance | >$500K; full RFP process |

At the G-SIB tier, expect a full C-suite committee process with regulatory affairs as a non-optional voice. The Head of Digital Assets is typically the internal champion, but the CRO has explicit veto authority over any platform that cannot produce attestations on the timetable regulators require.

**Sales cycle guidance:**
- Small (<$1B AUM): 2–4 months, informal process
- Mid ($1–50B AUM): 6–12 months; formal RFP likely above $500K
- Large (G-SIB, top-20 AM, major exchange): 12–24 months; multiple RFP stages, security review, legal review, and often a paid pilot (discovery sprint) before substantive RFP

**Gating requirements before any substantive RFP at mid or large:**

1. SOC 2 Type II (US default; mandatory for mid/large)
2. ISO 27001 (EU/APAC; mandatory for MiCA-scope deployments)
3. Annual third-party penetration test (results must be shareable under NDA)
4. BCP/DR documentation
5. GDPR / data residency mapping (for any EU data subject exposure)
6. Reference clients in regulated FS (at least one publicly nameable reference at comparable scale)

Missing SOC 2 Type II or ISO 27001 is an automatic disqualification at mid and large. Both are funded as central PrimusNeo investments, not per-engagement costs.

**Procurement enters at >$500K.** Below this threshold, the Head of Digital Assets or CIO can typically approve without a formal procurement process. Above it, procurement introduces benchmarking requirements — typically against MuleSoft, ServiceNow IRM, and Securitize/Tokeny, which is where the friction-cost anchoring in section 1 becomes the sales tool.

---

## 5. Rejection-risk mitigations

| Rejection reason | Mitigation |
|---|---|
| **Regulatory ambiguity** — Legal/compliance veto until local regulator gives written guidance | Publish multi-jurisdictional compliance posture per layer: MiCA (NEOS attestation logs map to CASP requirements; AZOA cross-border identity portability); OCC Letter 1184 (NEOS + Fractal on-demand attestation architecture); SAB 122 (AZOA multi-custodian integration removes the custody-accounting friction); FCA crypto-asset registration (NEOS governance log architecture). |
| **Custody model mismatch** — Must map to self-custody MPC/HSM, qualified custodian, or bank-grade sub-custodian | AZOA is multi-custodian-native: certified connectors for Fireblocks, BitGo, and Anchorage are first-party; sub-custodian relationships with bank-grade MPC/HSM providers are supported through the AZOA connector library. |
| **Legacy core integration gap** — Temenos / Finastra / Murex / Calypso require certified FIX/API connectors | Publish certified connectors for Temenos T24 / Transact, Finastra Fusion, Murex MX.3, and Calypso as first-class AZOA connector library entries; include FIX 4.2/4.4/5.0 gateway support for exchange and trading-desk integrations. These are AZOA-authored connectors, which is where their connector-engineering depth shines. |
| **Open-source / IP ownership risk** — Unaudited smart contracts, no formal vuln disclosure, no IP indemnity | IP indemnity capped at 2× annual fees for the affected layer per the commercial terms in `01-pricing-model.md §6`. Smart-contract audit is bundled as a deliverable for any issuance-adjacent NEOS deployment. Formal CVE disclosure program. |
| **Vendor concentration / lock-in risk** — Multi-custodian, multi-chain required at G-SIB | The federated 4-steward structure (OmniOne + Escherbridge + PLAN + AZOA) IS the multi-vendor answer. No single entity controls the stack. Data export is non-negotiable per the commercial terms. Source escrow available for AMP/AZOA components above $500K ARR via Iron Mountain. |
| **Missing security certs** — SOC 2 + ISO 27001 non-negotiable at mid/large | SOC 2 Type II + ISO 27001 funded as central PrimusNeo investments. Not a per-engagement cost. The Tie Town [TX] reference deployment provides the operational proving ground for the security posture before any formal audit engagement. |

---

## 6. Regulatory + compliance considerations

**MiCA (EU, fully applicable December 2024).**  NEOS produces the auditable issuance records and governance event logs that CASP licensing requires. AZOA provides the cross-border identity portability architecture that MiCA's cross-member-state CASP passporting requires. Non-compliance fines (€15M or 3% of revenue) make both layers non-optional for any EU-registered CASP. MiCA CASP licensing build-out itself runs €50K–€100K for small operators; capital requirements add €50K–€150K depending on activity class. PrimusNeo's MiCA compliance architecture should be documented per-layer and available as a regulatory briefing before any mid or large engagement progresses to RFP.

**OCC Interpretive Letter 1184 (May 2025).** National banks may now provide crypto custody (fiduciary and non-fiduciary) and use sub-custodians, but must demonstrate controls on-demand. NEOS + Fractal attestation logs are designed to produce these on-demand demonstrations: governance events are cryptographically signed, chain-anchored, and replayable; Fractal aggregates them into the audit-trail intelligence package the OCC examiner reviews. Banks will pay $200K–$500K+/year for platforms that make this attestation production routine rather than a manual legal exercise.

**SEC SAB 122 (January 2025).** Rescinds SAB 121's on-balance-sheet liability treatment for crypto custody. This removes the primary accounting disincentive for bank custody, expanding the addressable market for compliant custody infrastructure. AZOA's multi-custodian integration layer is directly positioned to capture this expanded TAM: as more banks enter crypto custody, the integration complexity between custodians, core banking, and regulatory reporting increases — which is exactly the surface area AZOA addresses.

**FCA + GDPR cross-border.** Any deployment touching UK data subjects requires FCA crypto-asset registration posture and GDPR/UK GDPR data residency mapping. AZOA's regional gateway architecture and NEOS's data-residency-aware signing model support data-residency compliance without architectural rework.

**SOC 2 + ISO 27001 as gating.** Both funded centrally. No mid or large finance engagement can proceed to substantive RFP without these in hand. The Tie Town [TX] reference deployment is the proving ground; certification scope covers the full PrimusNeo stack including all four layers.

**CRA (EU Cyber Resilience Act) / CSRD overlap.** For exchange operators and large asset managers with EU reporting obligations, CSRD (sustainability reporting) and CRA (cybersecurity for connected products) create additional compliance overhead that Fractal's regulatory model layer can address: NEOS governance events become CSRD audit artifacts; AZOA integration events support CSRD data collection pipelines.

---

## 7. Steward + service partner notes

**OmniOne (NEOS steward)** is the primary delivery partner for governance design in regulated financial services. NEOS's ETHOS methodology engagements — issuance approval council design, KYC policy council structuring, transfer-agent attestation flow architecture — are OmniOne's domain. OmniOne earns 18% of NEOS line-item license revenue as steward royalty, and services revenue accrues directly when they deliver governance design work. In finance, expect OmniOne's involvement to be heaviest in the mid/large tier where regulatory attestation design is non-trivial.

**Escherbridge (Fractal steward)** is the primary delivery partner for Fractal regulatory and risk models. In finance, this means: CRO dashboard architecture, regulatory reporting model design, AML signal aggregation ontology, and the audit-trail attestation buildout that OCC Letter 1184 requires. Escherbridge earns 18% of Fractal line-item license revenue. For regulated FS engagements, Escherbridge also contributes to the regulatory model validation scope ($60K–$250K per engagement) that is a separately scoped deliverable for any high-risk Fractal deployment.

**AZOA (AZOA steward)** leads multi-chain and custody connector development — this is where their connector-engineering depth is most directly applied. The Fireblocks, BitGo, Anchorage, Temenos, Finastra, Murex, Calypso, and FIX gateway connectors are AZOA-authored first-party connectors. For finance, AZOA's custody and core-banking connector library is the primary competitive differentiator against MuleSoft and Boomi, neither of which has a certified multi-custodian + multi-chain connector set. AZOA earns 15% of AZOA line-item license revenue and leads connector SOW delivery.

**SI channel — Big-4 engagement sizes and rates.** For mid and large finance engagements, SI partners are typically involved in implementation, change management, and regulatory advisory. Rates from the research brief: Deloitte FSI (GSA) $2K–$3K/day senior consultant, $3K–$5K/day principal/director, $5K–$10K/day partner (digital-asset specialty). EY Blockchain, PwC Digital Assets, KPMG Capital Markets, and Accenture Capital Markets operate in similar bands. Engagement sizes: tokenization readiness assessment $150K–$400K (8–16 weeks); full tokenization program delivery $1M–$5M (6–18 months); MiCA/regulatory compliance implementation $500K–$2M; enterprise data fabric + governance transformation $3M–$12M. At mid tier, SI channel engagement adds $500K–$1.5M to the total program cost alongside PrimusNeo fees. At large tier (G-SIB), $3M–$12M SI engagement is typical — this is a revenue opportunity for PrimusNeo through SI referral and co-sell arrangements, not a competitive threat.

**Tie Town [TX] reference.** The Tie Town deployment provides the operational proof-of-concept for the full stack — governance councils, interop fabric, and intelligence layer — running in a real federated environment. In regulated FS sales cycles, having a live reference deployment that can be demonstrated under NDA is a prerequisite for advancing past the initial security and compliance review. Tie Town is that reference.

---

## 8. Revisions

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 0.1 | 2026-05-23 | Founding team + research squad | Initial Finance engagement model |
