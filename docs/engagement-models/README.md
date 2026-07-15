# PrimusNeo Engagement Models — Document Set Index

> **Status:** Draft v0.1 — 2026-05-23
> **Scope:** Internal commercial engagement framework for the PrimusNeo federated coordination stack.

This directory contains the complete engagement-model documentation set for
PrimusNeo's commercial work. It is the source-of-truth a deal team uses to
build, defend, and close any quote.

---

## How to read this

If you are new, read in this order:

1. **[00-overview.md](./00-overview.md)** — Why this exists, the four layers, the
   licensing posture, the engagement-model matrix, the five service classes,
   and the role of Tie Town [TX] as the reference architecture.
2. **[01-pricing-model.md](./01-pricing-model.md)** — The value-based pricing
   formula (Friction Cost × Value Share × Cost Floor), per-layer pricing
   anchors at Small/Mid/Large scale, bundle discounts, and the worked quote
   methodology.
3. **[02-licensing-model.md](./02-licensing-model.md)** — Licensing tracks
   (CC-NC + PCL for NEOS + Fractal Engine; closed-core PEL for AMP;
   Apache-2.0 engine + managed-service PEL for AZOA), steward royalty
   schedule, bundle licensing, fork policy.
4. **[03-services-catalog.md](./03-services-catalog.md)** — The five service
   classes (Customization, Integration, Deployment, Sustained Upkeep, Infra),
   day rates, deployment SKUs (Atom / Molecule / Hex / Lattice / Tessellation),
   SLA tiers, margin targets.
5. **[04-community-pilot-pricing.md](./04-community-pilot-pricing.md)** — The
   entry-pricing on-ramp: community tiers (Community Edition / Cloud / Pilot)
   and the paid-pilot ladder (Proof Pilot, Production Pilot) with flat
   published prices, credit-forward conversion, and the community flywheel.

Then drill into your specific lane:

- **[layers/](./layers/)** — One file per layer with its engagement model,
  pricing tiers, services mix, bundle interactions, and worked examples.
- **[industries/](./industries/)** — One file per vertical with the
  industry-specific friction anchors, per-tier worked bundle quotes,
  procurement signals, regulatory overlay, and rejection mitigations.
- **[research/](./research/)** — The market-research briefs underlying every
  number in the engagement models. Cite these in customer conversations to
  defend a quote.

---

## File map

```
docs/engagement-models/
├── README.md                          ← you are here
├── 00-overview.md                     ← start here
├── 01-pricing-model.md                ← value-based formula + layer anchors
├── 02-licensing-model.md              ← CC-NC + PCL + PEL mechanics
├── 03-services-catalog.md             ← service SKUs + day rates + SLA tiers
├── 04-community-pilot-pricing.md      ← entry on-ramp: community tiers + paid pilots
├── build_pdf.py                       ← assembles entire set into a single PDF
│
├── layers/
│   ├── amp.md                         ← AMP (Spatial OS) engagement
│   ├── neos.md                        ← NEOS (Governance) engagement
│   ├── azoa.md                        ← AZOA (Federation Rails) engagement
│   └── fractal-engine.md              ← Fractal Engine (Intelligence) engagement
│
├── industries/
│   ├── agriculture.md
│   ├── construction.md
│   ├── energy.md
│   ├── finance.md
│   ├── governance.md
│   ├── healthcare.md
│   ├── logistics.md
│   ├── manufacturing.md
│   ├── robotics.md
│   └── technology.md
│
└── research/
    ├── layer-comparables.md           ← cross-cutting pricing benchmarks
    ├── agriculture.md
    ├── construction.md
    ├── energy.md
    ├── finance.md
    ├── governance.md
    ├── healthcare.md
    ├── logistics.md
    ├── manufacturing.md
    ├── robotics.md
    └── technology.md
```

---

## Build the PDF

The whole document set assembles into a single styled PDF via WeasyPrint:

```sh
pip install markdown weasyprint
python docs/engagement-models/build_pdf.py
# → docs/engagement-models/PrimusNeo-Engagement-Models.pdf
```

The build is deterministic — the same inputs always produce the same PDF —
and the script will refuse to run with a clear error message if any expected
file is missing, so you can use it as a completion check.

---

## Naming conventions (per `AGENTS.md`)

- **AMP** — Spatial OS (steward: PLAN Systems)
- **NEOS** — Governance (steward: OmniOne / Green Earth Vision)
- **AZOA** — Autonomous Zones of Action: identity & consent, durable quest
  workflows, and settlement rails across chain and fiat (steward: the AZOA
  project; formerly the OASIS layer). The legacy names "OASIS" / "OAS" are
  not used in PrimusNeo deliverables. ("GSA OASIS+", the unrelated federal
  contract vehicle, keeps its name in market-research citations.)
- **Fractal Engine** — Intelligence / Organizational Memory (steward:
  Escherbridge)
- **Tie Town [TX]** — The first active operational deployment, in McDade,
  Texas. Cited as the living proof-of-capability for the federated coordination
  layer.

---

## Maintenance

This set is versioned in-tree alongside the rest of the PrimusNeo Next.js
repo. Update any number, anchor, or worked example here first; downstream
deal documents derive from these sources. Each file carries its own revision
table.

When a research source or pricing benchmark moves, update the relevant
research brief first, then update any engagement model that cited that
specific number. The PDF rebuilds in seconds — re-render after substantive
edits before circulating externally.
