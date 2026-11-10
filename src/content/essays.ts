/**
 * Code-backed op-eds. Sanity remains the CMS for anything edited in Studio;
 * these render alongside it so the writing ships with the site.
 */

export type Inline = string | { t: string; href: string };

export type EssayBlock =
  | { kind: 'p'; inlines: Inline[] }
  | { kind: 'h2'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'cta'; layer: string; layerHref: string; inlines: Inline[] };

export type EssaySource = { label: string; href: string };

export type Essay = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  kicker: string;
  blocks: EssayBlock[];
  sources: EssaySource[];
};

const a = (t: string, href: string): Inline => ({ t, href });

export const essays: Essay[] = [
  {
    slug: 'digital-twin-shouldnt-live-in-someone-elses-cloud',
    title: "A digital twin shouldn't live in someone else's cloud",
    kicker: 'Digital twins',
    publishedAt: '2026-10-16',
    excerpt:
      "A twin that only exists inside one vendor's account is a model of your building with the keys in someone else's pocket.",
    description:
      "Vendor-specific digital-twin platforms make the model hard to move and harder to run at the edge. Notes from KTWIN, Twin2Clouds, NIST IR 8356, and McKinsey, and what a local-first spatial OS changes.",
    sources: [
      {
        label: 'Pimentel et al., KTWIN — arXiv:2408.01635',
        href: 'https://arxiv.org/abs/2408.01635',
      },
      {
        label: 'Twin2Clouds — MODELS Companion 2025, DOI 10.1109/MODELS-C68889.2025.00045',
        href: 'https://doi.org/10.1109/models-c68889.2025.00045',
      },
      {
        label: 'NIST IR 8356, Security and Trust Considerations for Digital Twin Technology (February 2025)',
        href: 'https://doi.org/10.6028/NIST.IR.8356',
      },
      {
        label: 'McKinsey, Digital twins: When and why to use one',
        href: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/digital-twins-when-and-why-to-use-one',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'A digital twin is supposed to be a working model of a place you can stand in. A surprising number of them are a login. The building is yours. The account is not. When the contract ends, or the region blips, or the price card changes, the twin stays where the invoice goes.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'That is not a metaphor about “the cloud.” It is a portability problem with a street address.',
        ],
      },
      {
        kind: 'h2',
        text: 'The platforms admit the shape of the trap',
      },
      {
        kind: 'p',
        inlines: [
          'The KTWIN paper, a serverless Kubernetes design for digital twins, puts the complaint in plain language: existing platforms are ',
          'mostly vendor-specific',
          ', and moving a solution to another stack takes “a considerable amount of rework.” The same paper notes that because the offerings live mostly in the cloud, there is not enough room to move services to the edge, closer to the thing being twinned. Their proposed answer is dull in the useful way: open standards, containers, and a cluster you can run on-prem, at the edge, or in a cloud you picked. ',
          a('Read KTWIN', 'https://arxiv.org/html/2408.01635v3'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Twin2Clouds, a 2025 cost model for twins spread across providers, says the quiet part at the start: putting the whole twin inside one provider “further risks vendor lock-in, constraining flexibility and negotiation power.” The authors’ own scenarios — a large smart building down to a smart home — are where they report lower monthly cost against single-cloud baselines. The number belongs to their evaluation, not to a brochure. The structural point does not need their percentage: a single provider is a pricing conversation you can only have with one party. ',
          a('DOI record', 'https://doi.org/10.1109/models-c68889.2025.00045'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'Security people are not asking for a prettier dashboard',
      },
      {
        kind: 'p',
        inlines: [
          'NIST IR 8356 (February 2025) treats a digital twin as a system with ordinary security problems and a few new ones: confidentiality, integrity, availability, and the chance that an operator is looking at a facsimile while the controls are being lied to. The report’s advice is not “buy the suite.” It says any serious effort should follow the NIST Risk Management Framework, the Cybersecurity Framework, and the Privacy Framework, and it warns that proprietary encryption “can be weak and lack thorough vetting.” Hashes and error detection, it adds, still have a job even when the encryption is real — including on the path from devices to “the central digital twin definition repository.” A twin with one repository and one vendor’s crypto is a trust decision, whether or not the sales deck called it one. ',
          a('NIST IR 8356', 'https://doi.org/10.6028/NIST.IR.8356'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'McKinsey’s note on when a twin is worth having is similarly unromantic. The prerequisites it names are a viable business case, high-quality data, and ongoing operational demand. Miss those and the model does not become wise. It becomes stale, which is a polite word for wrong. ',
          a('McKinsey Tech Forward', 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/tech-forward/digital-twins-when-and-why-to-use-one'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'What “someone else’s cloud” actually costs',
      },
      {
        kind: 'ul',
        items: [
          'Moving the twin means rework, not an export button. KTWIN’s survey of PaaS offerings is explicit about that.',
          'The edge is where the site is. A cloud-only twin is a long way from a feeder, a floor, or a field that has lost its uplink.',
          'The security boundary includes the vendor’s repository, the vendor’s crypto, and whoever can edit the facsimile the operator trusts.',
          'Price is a feature of the lock-in. Twin2Clouds exists because single-provider pricing is hard to argue with from inside the account.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'None of this says “never use a cloud.” It says the twin should still be yours when the cloud is a bad day, a bad contract, or a region you are not allowed to use. Ground truth with a receipt is more than most digital twins can say. A receipt you cannot take with you is a screenshot.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is pilot purgatory with a cloud login. A twin gets stood up for a demo, the data never quite leaves the vendor account, and the “pilot” becomes the product because moving it would mean rebuilding it. That is not a moral failure. It is what you get when the export path was never part of the design. The better path is dull: a model you can run beside the site, a hash for every blob, and a contract that assumes you will leave. The cloud can still do the heavy rendering. It should not be the only place the building exists.',
        ],
      },
      {
        kind: 'cta',
        layer: 'AMP, the spatial OS',
        layerHref: '/amp',
        inlines: [
          'AMP is the operational runtime: PLAN 3D, data channels, swarm file sharing, and peer-to-peer networking that is built to work offline, not as a demo mode. It is running at Tie Town in McDade, Texas — a creator house, not a slogan. Scenes move as Hexon archives: content-addressed blobs (BLAKE3), signed manifests, and a path into Fractal Engine when you want the history, not just the live view. For sites that want the machines on their own floor, OPQPWR is the on-prem infrastructure partner. That partnership is a start, not a claim that a utility substation is already on the rack. If the twin has to survive a vendor, start with ',
          a('AMP', '/amp'),
          ' and ',
          a('tell us the site', '/contact'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'the-queue-is-not-a-plan',
    title: 'The queue is not a plan',
    kicker: 'Grid strain',
    publishedAt: '2026-10-23',
    excerpt:
      'Data centers want more electricity than the wires were introduced to. Renewables are waiting in the same line. A connection date is not resilience.',
    description:
      'IEA figures on data-center electricity, connection queues, and non-firm access, plus NERC’s 2025 large-load alert. Local coordination is the unglamorous half of the energy story.',
    sources: [
      {
        label: 'IEA, Energy and AI — Energy demand from AI',
        href: 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai',
      },
      {
        label: 'IEA news, 10 April 2025 — data-centre electricity demand',
        href: 'https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works',
      },
      {
        label: 'IEA, Powering Artificial Intelligence — executive summary',
        href: 'https://www.iea.org/reports/powering-artificial-intelligence/executive-summary',
      },
      {
        label: 'IEA chart, renewable projects in connection queues, 2024',
        href: 'https://www.iea.org/data-and-statistics/charts/capacity-of-renewable-energy-projects-in-connection-queues-2024',
      },
      {
        label: 'NERC Level 2 Alert, Large Load Interconnection (9 September 2025)',
        href: 'https://www.nerc.com/globalassets/programs/bpsa/alerts/2025/nerc-alert-level-2--large-loads.pdf',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'The grid story of the last two years is usually told as a generation story. Build more. The awkward part is the line to plug in, and the other line, of loads that show up bigger than the neighborhood was designed for.',
        ],
      },
      {
        kind: 'h2',
        text: 'The demand is no longer a rounding error',
      },
      {
        kind: 'p',
        inlines: [
          'The IEA’s Energy and AI report puts electricity use from data centers at about 415 terawatt-hours in 2024, roughly 1.5% of global electricity, after growing about 12% a year for five years. In the same report’s base case, that reaches around 945 TWh by 2030, just under 3% of global electricity, growing around 15% a year — more than four times the growth rate of electricity use everywhere else. ',
          a('IEA, Energy demand from AI', 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The IEA’s accompanying news note translates the 2030 figure: slightly more than the electricity consumption of Japan today, with AI-focused data centers the main driver. In the United States, data-center power consumption is on course to account for almost half of electricity-demand growth between now and 2030. In advanced economies more broadly, data centers are projected to drive more than 20% of demand growth over that stretch. ',
          a('IEA news release', 'https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'Queues contain wishes',
      },
      {
        kind: 'p',
        inlines: [
          'The IEA’s Powering Artificial Intelligence summary describes connection queues, in places such as Texas, Virginia, Finland, and the United Kingdom, whose cumulative capacity is larger than today’s peak demand. It also says the quiet part planners already know: queues contain duplicative and speculative projects. Overestimate, and you build wires for ghosts. Underestimate, and the real projects wait. The same note says non-firm connections — access you can curtail when the system is tight — could enable an additional 750 to 900 gigawatts of grid hosting capacity globally, on the IEA’s analysis, because system stress is a handful of hours, not a lifestyle. ',
          a('Executive summary', 'https://www.iea.org/reports/powering-artificial-intelligence/executive-summary'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Renewables are in a queue of their own. The IEA’s 2024 chart of renewable projects waiting on a connection is the figure cited on our energy page: on the order of 3,000 GW. A project with a 2030 date is not a power plant. It is a calendar entry. ',
          a('IEA queue chart', 'https://www.iea.org/data-and-statistics/charts/capacity-of-renewable-energy-projects-in-connection-queues-2024'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'Large loads do not sit still',
      },
      {
        kind: 'p',
        inlines: [
          'NERC’s Level 2 alert of 9 September 2025 is about behavior, not branding. The alert describes bulk-power-system disturbances in which large loads dropped more than 1,000 MW without being asked, most of the events in 2024 or 2025. NERC’s definition of a large load includes data centers, crypto mines, hydrogen electrolyzers, manufacturing, and arc furnaces — anything whose size or habits can move the system. The recommendations are procedural and physical: interconnection requirements, modeling data, high-speed disturbance recorders. A slide that says “flexible demand” does not satisfy a transmission planner. A record of what the load did, when the voltage moved, does. ',
          a('NERC alert (PDF)', 'https://www.nerc.com/globalassets/programs/bpsa/alerts/2025/nerc-alert-level-2--large-loads.pdf'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Local resilience is the unfashionable conclusion. If the interconnect is conditional, the site still has to know what it is drawing, what it can shed, and who is allowed to say so. That is coordination between a feeder, a building, and a person. It is not a second power plant.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is treating a queue position as a plan. A date in 2030 does not cool a building, and a speculative application does not train a model. The constructive version is smaller and more useful: publish which projects are real, connect what the wires can actually hold, and give each site a record of its own load — what it draws, what it can pause, and who is allowed to say so. Generation still matters. It is just not the part that is stuck.',
        ],
      },
      {
        kind: 'cta',
        layer: 'AMP and Fractal Engine',
        layerHref: '/industries/energy',
        inlines: [
          'On the energy page, AMP is the spatial layer for substations, feeders, and distributed resources, and Fractal Engine is the place that history goes so an operator is not reconstructing last Tuesday from a group chat. OPQPWR is the partner for field racks of power and compute where the cloud is thin — a starting partnership, not a claim that we dispatch a balancing authority. The 3,000 GW figure and the IEA investment numbers stay on ',
          a('the energy page', '/industries/energy'),
          ', with their links. If your problem is a site and a feeder rather than a keynote, ',
          a('start there', '/contact'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'shared-ownership-unshared-minutes',
    title: 'Shared ownership, unshared minutes',
    kicker: 'Co-ops and housing',
    publishedAt: '2026-10-30',
    excerpt:
      'The United States has hundreds of thousands of cooperative homes and a very thin public record of how they decide things. Trust is a filing problem.',
    description:
      'San Francisco Fed counts of housing cooperatives and community land trusts, HUD Section 213, and the cooperative principle of member control — and why the minutes matter as much as the mortgage.',
    sources: [
      {
        label: 'Federal Reserve Bank of San Francisco, Homeownership beyond single-family (November 2024)',
        href: 'https://www.frbsf.org/research-and-insights/publications/community-development-research-briefs/2024/11/homeownership-opportunities-beyond-single-family/',
      },
      {
        label: 'Cooperative Development Foundation, Cooperative Housing and HUD Section 213 (fact sheet)',
        href: 'https://www.cdf.coop/_files/ugd/98a0e1_a69990fa600e4466892290d37ad326a6.pdf',
      },
      {
        label: 'International Cooperative Alliance, Cooperative identity and principles',
        href: 'https://ica.coop/en/cooperatives/cooperative-identity',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'A housing cooperative is a simple idea with a lot of paperwork. People own shares in a corporation that owns the building. They elect a board. In a limited-equity co-op, the resale price is a formula, so the apartment does not become a lottery ticket. Community land trusts do a cousin of the same trick: the land stays in a shared holder, the home can sell, the price stays tied to the purpose.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The idea is older than the software that pretends to have invented community. The record of who decided the roof, the reserve, and the exception is often younger than the argument about it.',
        ],
      },
      {
        kind: 'h2',
        text: 'The stock is real, and small',
      },
      {
        kind: 'p',
        inlines: [
          'The San Francisco Fed’s November 2024 brief estimates at least 614,000 housing-cooperative units in the United States, about 0.7% of owner-occupied homes, and a bit over 15,000 community-land-trust or similar shared-equity homes nationally (more than 3,200 of them in the western states the brief studies closely). These are estimates, and the authors are frank that the categories are under-counted. They are still the right order of magnitude: shared ownership is a real tenure, not a vibe, and it is a thin slice of the housing stock. ',
          a('SF Fed brief', 'https://www.frbsf.org/research-and-insights/publications/community-development-research-briefs/2024/11/homeownership-opportunities-beyond-single-family/'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The federal tool aimed only at this tenure is also thin. The Cooperative Development Foundation’s fact sheet on HUD Section 213 describes it as the only federal program solely dedicated to developing cooperative housing: FHA mortgage insurance for new construction, rehabilitation, or conversion, including limited-equity projects. Insurance is not governance. It is a way for a lender to say yes. The board still has to run the building after closing. ',
          a('CDF fact sheet (PDF)', 'https://www.cdf.coop/_files/ugd/98a0e1_a69990fa600e4466892290d37ad326a6.pdf'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'Member control is a principle. Minutes are the proof.',
      },
      {
        kind: 'p',
        inlines: [
          'The International Cooperative Alliance’s statement of identity still says the useful thing: a co-op is owned by the people who use it, and they control it democratically. That sentence does not specify where the vote lives, how a new member learns the resale formula, or what happens when the treasurer is also the person who “remembers how we did it last time.” ',
          a('ICA cooperative identity', 'https://ica.coop/en/cooperatives/cooperative-identity'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Trust fails in the gap. A limited-equity formula nobody can recompute is a rumor. A reserve study that lives in one laptop is a succession plan for that laptop. A workday credit that cannot be shown to the member who did the work is a favor. Housing co-ops and creator co-ops have the same disease at different scales: shared ownership, unshared minutes.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Tie Town, in McDade, Texas, is our first live deployment. It is a media and creator house, not a housing authority and not a claim about the 614,000. It is the reference for what we mean by a governed workplace: one operational record, roles that are written down, and a stack that does not require the founder to narrate the building.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is institutional memory that lives in one person. It feels like trust, and it works until that person is on a trip. The better path is the unglamorous one co-ops already claim to want: the resale formula written so a new member can recompute it, the reserve decision in a record rather than a thread, and work credit that can be shown to the person who did the work. Shared ownership does not need a new ideology. It needs minutes that survive the people who took them.',
        ],
      },
      {
        kind: 'cta',
        layer: 'NEOS, with AZOA for identity',
        layerHref: '/governance-platform',
        inlines: [
          'NEOS is the governance layer: councils, decision rights, contribution accounting, and records a new member can read without a guided tour. AZOA is the identity and consent layer — who may act, on what, until they revoke it — and it is pre-launch. Real-value settlement stays off until custody review; the consent model does not have to wait for a token to be useful. The creator-house writeup is ',
          a('community and cooperatives', '/solutions/community-coops'),
          '. The governance platform is ',
          a('here', '/governance-platform'),
          '. If the minutes are the product you are missing, ',
          a('say so', '/contact'),
          '.',
        ],
      },
    ],
  },
  {
    slug: 'otherwise-its-a-group-chat-with-a-bank-account',
    title: "Otherwise it's a group chat with a bank account",
    kicker: 'Treasuries',
    publishedAt: '2026-11-03',
    excerpt:
      'A vote almost nobody attends, over a treasury made of the token the vote dilutes, is not a constitution. It is a chat with a treasury.',
    description:
      'Coinbase Institutional’s November 2024 note on onchain governance: participation under 0.1%, treasuries held in the protocol’s own token, and quorum rules a small desk can meet.',
    sources: [
      {
        label: 'Coinbase Institutional, Monthly Outlook: Onchain Governance in Theory and Practice (November 2024)',
        href: 'https://www.coinbase.com/institutional/research-insights/research/monthly-outlook/monthly-outlook-november-2024',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'Governance theater is easy to spot and rude to name. There is a forum. There is a vote. There is a number that clears a threshold. There is a treasury. And there is a group of people small enough to fit in a bad restaurant who actually decide. The chain makes the vote visible. It does not make the decision representative. Otherwise it is a group chat with a bank account.',
        ],
      },
      {
        kind: 'h2',
        text: 'The turnout is the feature',
      },
      {
        kind: 'p',
        inlines: [
          'Coinbase Institutional’s November 2024 outlook on onchain governance is unusually specific, and it describes a practice rather than a villain. For large protocols, it says, only a small portion of governance-token holders — often less than 0.1% — regularly participate in votes. Forum activity, in the protocols they looked at, sat with a few hundred people or fewer. In one worked example, quorum was 320,000 tokens in favor of the winning option, about 2% of a 14.9 million circulating supply. Quorum is tokens, not people. A small, capitalized desk can meet a threshold that sounds like a constitution. ',
          a('Coinbase Institutional, November 2024', 'https://www.coinbase.com/institutional/research-insights/research/monthly-outlook/monthly-outlook-november-2024'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Our web3 page cites a separate Snapshot turnout figure and other third-party tallies. Those stay there, with their labels. This note uses Coinbase’s published reading because it separates “tokens voting” from “people showing up,” which is the whole trick.',
        ],
      },
      {
        kind: 'h2',
        text: 'The treasury is often the token',
      },
      {
        kind: 'p',
        inlines: [
          'The same note looks at what the treasury actually holds. Across the protocols in its chart, a treasury is often mostly the governance token itself — from about half, in one case, to 99.9% in another. Grants are frequently written in dollars and paid in that asset, which the recipient then has to sell or hedge. Coinbase’s phrase is dry enough to keep: a large part of treasury “spending” is closer to dilutive issuance than to spending a cash reserve. A community that thinks it is allocating a war chest may be minting attention and calling it a budget. The names are in their note. The habit is the point.',
        ],
      },
      {
        kind: 'ul',
        items: [
          'Participation under a tenth of a percent means the “token holder vote” is a delegation story, whether or not the interface says so.',
          'A quorum defined in tokens is a capital test. It is not evidence that the people affected were in the room.',
          'A treasury denominated in the asset the vote can inflate is not the same object as a reserve account.',
          'A forum post is not a decision record. A transaction hash is not an explanation.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'None of this is a case against chains, or against any one project. It is a case against pretending that a public vote, sparsely attended, over a self-referential treasury, has done the work of an institution.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is governance theater: a forum, a threshold, and a story that the holders decided. The better path is older than the interface. Write down who may decide what, make the authority expire, and keep a record a newcomer can read without asking the group chat. If the treasury is mostly the token the vote can dilute, say that in the same place as the proposal. Sunlight is not a personality. It is a filing system.',
        ],
      },
      {
        kind: 'cta',
        layer: 'NEOS',
        layerHref: '/governance-platform',
        inlines: [
          'NEOS is agreements and permissions: councils, holons, decision rights, contribution accounting, and a record that still makes sense after the people who were in the thread have left. It is meant to sit next to spatial evidence from AMP and identity from AZOA, not to replace a securities lawyer. If the treasury question is the one you actually have, the ',
          a('governance platform', '/governance-platform'),
          ' and the ',
          a('web3 governance', '/solutions/web3-governance'),
          ' page are the two doors. ',
          a('Contact', '/contact'),
          ' if you want them in the same conversation as a real cap table.',
        ],
      },
    ],
  },
  {
    slug: 'an-agent-without-a-permission',
    title: 'An agent without a permission',
    kicker: 'Agents and consent',
    publishedAt: '2026-11-06',
    excerpt:
      'An agent that can act, spend, or read, without a revocable grant and a log a person can open, is a very fast intern with no manager.',
    description:
      'What the EU AI Act’s record-keeping rule and the NIST AI Risk Management Framework actually ask for, and why a consent checkbox is not a trail.',
    sources: [
      {
        label: 'Regulation (EU) 2024/1689, the Artificial Intelligence Act (EUR-Lex)',
        href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj',
      },
      {
        label: 'NIST AI Risk Management Framework',
        href: 'https://www.nist.gov/itl/ai-risk-management-framework',
      },
      {
        label: 'NIST AI RMF Playbook',
        href: 'https://airc.nist.gov/docs/AI_RMF_Playbook.pdf',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'The current agent demo has a plot. The model gets a goal, calls some tools, and returns with a result and a tone of competence. The missing scene is the boring one: who allowed the tool, what the grant covered, whether it can be revoked while the agent is mid-task, and where a person reads that back on a Tuesday.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Without that scene, “autonomous” is a synonym for “we will reconstruct it from logs if something expensive happens.”',
        ],
      },
      {
        kind: 'h2',
        text: 'The regulation is about the log, not the vibe',
      },
      {
        kind: 'p',
        inlines: [
          'Article 12 of the EU Artificial Intelligence Act, Regulation (EU) 2024/1689, is the record-keeping article for high-risk systems. It requires those systems to technically allow automatic recording of events over the lifetime of the system, at a level that supports tracing what the system did. It is not a suggestion that a vendor keep some debug output somewhere. It is a design requirement, aimed at systems whose failures are not aesthetic. The rest of the Act still sorts systems by risk, and a chatbot that recommends a lunch is not a high-risk credit model. The useful idea travels anyway: if the system can take an action that matters, the action should be reconstructable. ',
          a('EUR-Lex, Regulation (EU) 2024/1689', 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'NIST’s AI Risk Management Framework, published in 2023 and widely used as a voluntary map, sorts the work into Govern, Map, Measure, and Manage. Govern is the unfashionable function: roles, accountability, and the policy that says who owns an outcome. The playbook’s Govern material keeps returning to the same demand — name the human roles, and do not leave oversight as an atmosphere. A framework is not a fine. It is a way to notice that an agent with tools and no named owner is an accountability hole you have scheduled for later. ',
          a('NIST AI RMF', 'https://www.nist.gov/itl/ai-risk-management-framework'),
          ', ',
          a('Playbook (PDF)', 'https://airc.nist.gov/docs/AI_RMF_Playbook.pdf'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'Consent is a grant, or it is a checkbox',
      },
      {
        kind: 'ul',
        items: [
          'A terms-of-service click does not say which tool the agent may call, against whose data, until when.',
          'A chat transcript is not an authorization. It is evidence that a conversation happened.',
          'A vendor debug log that the subject cannot see is a log for the vendor.',
          'Revocation that takes effect “on the next deploy” is not revocation. It is a queue.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The practical test is small. Can a person point at the grant, narrow it, or kill it, and can a second person see that this happened without asking the model to recall? If the answer is no, the agent is acting on manners. Manners are not a control.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is demo-ware: an agent that finishes the task in the video and cannot show the permission in the log. The constructive fix is to separate the draft from the act. Let the model propose. Let a grant, with a named person and an expiry, be what allows the tool to run. On our own engine this is not a slogan. In October 2026 the tenant work landed a plain rule: a claimed member keeps working under their own grant (',
          a('ffde102', 'https://github.com/JadeZaher/azoa-autonomous-zones-of-action/commit/ffde102'),
          '), and the follow-up refuses to mint wallets into claimed accounts or to describe consent as broader than it is (',
          a('da1a4b6', 'https://github.com/JadeZaher/azoa-autonomous-zones-of-action/commit/da1a4b6'),
          '). Real-value settlement is still switched off. The permission is not. That is the order we want the industry to copy.',
        ],
      },
      {
        kind: 'cta',
        layer: 'AZOA',
        layerHref: '/azoa',
        inlines: [
          'AZOA is the identity, consent, and settlement layer. Self-sovereign identity and revocable consent grants are shipped and security-reviewed. Durable quests — a graph of steps that reconciles before it acts again, and does not double-spend — are built. The engine is pre-launch: real-value bridges stay off until production custody passes review. SurrealDB is the data engine, Apache-2.0, so the record is not a proprietary sidecar. Fractal Engine is where operational history is warehoused after the fact; AZOA is where the permission has to exist before the fact. Read ',
          a('AZOA', '/azoa'),
          ' and the ',
          a('AI and spatial intelligence', '/solutions/ai-intelligence'),
          ' page. ',
          a('Contact', '/contact'),
          ' if an agent in your stack can already touch something a person would miss.',
        ],
      },
    ],
  },
  {
    slug: 'the-plugin-was-already-inside',
    title: 'The plugin was already inside',
    kicker: 'Supply chain',
    publishedAt: '2026-11-08',
    excerpt:
      'XZ Utils did not look like an attack. It looked like a compression library. Plugin systems that run whatever arrives have the same plot.',
    description:
      'CISA’s alert on CVE-2024-3094, NIST’s secure-development and CI/CD supply-chain guidance, and SLSA provenance — applied to plugins that execute, not just packages that install.',
    sources: [
      {
        label: 'CISA alert, XZ Utils supply-chain compromise, CVE-2024-3094 (29 March 2024)',
        href: 'https://www.cisa.gov/news-events/alerts/2024/03/29/reported-supply-chain-compromise-affecting-xz-utils-data-compression-library-cve-2024-3094',
      },
      {
        label: 'NIST SP 800-218, Secure Software Development Framework',
        href: 'https://csrc.nist.gov/pubs/sp/800/218/final',
      },
      {
        label: 'NIST SP 800-204D, software supply-chain security in DevSecOps CI/CD',
        href: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-204D.pdf',
      },
      {
        label: 'SLSA v1.0 specification',
        href: 'https://slsa.dev/spec/v1.0/',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'In late March 2024, a compression library became a security incident. XZ Utils versions 5.6.0 and 5.6.1 shipped with malicious code. CISA’s alert is short, which is part of the point: the library “may be present in Linux distributions,” the code “may allow unauthorized access,” and the recommendation was to move back to a known-good release such as 5.4.6, then go looking. Most of the machines that had the library had not chosen an attacker. They had chosen a tarball, or a distro that had chosen a tarball. ',
          a('CISA alert', 'https://www.cisa.gov/news-events/alerts/2024/03/29/reported-supply-chain-compromise-affecting-xz-utils-data-compression-library-cve-2024-3094'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'The dependency was the product',
      },
      {
        kind: 'p',
        inlines: [
          'NIST’s Secure Software Development Framework, SP 800-218, is the unglamorous list: know what you build, know what you take in, protect the build, and be able to say which version a customer is running. SP 800-204D takes that list into CI/CD pipelines for cloud-native applications, where the supply chain is the pipeline itself — source, dependencies, build, package, deploy — and a poisoned step looks like a successful build. The documents do not promise that a framework stops a patient maintainer. They say the artifact should be identifiable, the build should be attestable, and a compromised online key should not be the key everyone ultimately trusts. ',
          a('SP 800-218', 'https://csrc.nist.gov/pubs/sp/800/218/final'),
          ', ',
          a('SP 800-204D (PDF)', 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-204D.pdf'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'SLSA, the supply-chain levels spec, is the public vocabulary for the same idea: provenance that says which source, which builder, and which parameters produced an artifact, and verification before the artifact runs. Version 1.0 is the one to cite if you are tired of “we take security seriously” as a build log. ',
          a('SLSA v1.0', 'https://slsa.dev/spec/v1.0/'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'A plugin is a supply chain that executes',
      },
      {
        kind: 'p',
        inlines: [
          'A package that sits on disk is one problem. A plugin that a runtime loads, because a registry said it was fine, is the same problem with a shorter delay. The questions are old. Who signed the manifest. What the plugin is allowed to touch. Whether a failed check means the plugin does not run, or means someone gets an email. Role-gated and sandboxed are adjectives. They count when the default is refusal.',
        ],
      },
      {
        kind: 'ul',
        items: [
          'XZ was not a phishing email. It was a maintained project. Social trust was the vulnerability.',
          'A hash of the artifact is not a judgment about the artifact. It is how you notice the artifact changed.',
          'Admission after execution is an incident report. Admission before execution is a policy.',
          'A plugin marketplace without signatures is a directory of strangers with your process ID.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The habit is an unaudited plugin supply chain: whatever the registry served, the process runs, and the review happens in the postmortem. The better path is admission before execution. A signature, a sandbox, a role, and a default of no. We hold ourselves to the same sentence. Fractal Engine is alpha, and the plugin host is documented as failing closed — it does not load packages just because they are nearby. The signature field on older log rows is not there yet. That gap gets its own note, with the commits, because a critique that skips our own tree is just a mood. ',
          a('Read it', '/blog/alpha-is-a-status-not-a-compliment'),
          '.',
        ],
      },
      {
        kind: 'cta',
        layer: 'Fractal Engine, with the shared plugin layer',
        layerHref: '/fractal-engine',
        inlines: [
          'Fractal Engine is the organizational-memory layer, and it is alpha. The public README is specific: Rhai and WASM plugins sit in sandboxes, the desktop starts the plugin host, and it loads no packages automatically — admission fails closed. Assets are content-addressed with BLAKE3 and move as .hexon files. That is the path. It is not a finished castle. The op-log signature field on older rows is still a placeholder, which we would rather say here than in a footnote nobody opens. See ',
          a('Fractal Engine', '/fractal-engine'),
          ', the ',
          a('alpha note', '/blog/alpha-is-a-status-not-a-compliment'),
          ', and ',
          a('developer ecosystems', '/solutions/developer-ecosystems'),
          '. ',
          a('Contact', '/contact'),
          ' if your current plugin policy is hope.',
        ],
      },
    ],
  },
  {
    slug: 'alpha-is-a-status-not-a-compliment',
    title: 'Alpha is a status, not a compliment',
    kicker: 'Building in the open',
    publishedAt: '2026-11-09',
    excerpt:
      'Fractal Engine refuses to load a plugin it did not admit. It also still stores placeholder signatures on older log rows. Both sentences belong on the same page.',
    description:
      'An honest look at Fractal Engine in alpha: fail-closed plugin admission, BLAKE3 content addressing, and the op-log signature field that is not a signature yet, with links to the commits.',
    sources: [
      {
        label: 'FractalEngine README — status, plugin host, known limitation',
        href: 'https://github.com/Escherbridge/fractalengine/blob/main/README.md',
      },
      {
        label: 'Commit 0b579b6 — extension platform merged, 9 Nov 2026',
        href: 'https://github.com/Escherbridge/fractalengine/commit/0b579b6',
      },
      {
        label: 'Commit f2adc8f — portal surface merged, 9 Nov 2026',
        href: 'https://github.com/Escherbridge/fractalengine/commit/f2adc8f',
      },
      {
        label: 'FractalEngine SECURITY.md',
        href: 'https://github.com/Escherbridge/fractalengine/blob/main/SECURITY.md',
      },
      {
        label: 'FractalEngine PURPOSE.md — a mirror, never a copy',
        href: 'https://github.com/Escherbridge/fractalengine/blob/main/PURPOSE.md',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'Alpha is a useful word that marketing departments keep trying to improve. It does not mean “almost done,” and it does not mean the applause is included. It means the thing runs, the edges are labeled, and anyone who pretends otherwise is writing fiction. This note is about our own tree.',
        ],
      },
      {
        kind: 'h2',
        text: 'What already refuses',
      },
      {
        kind: 'p',
        inlines: [
          'Fractal Engine is a spatial analytics engine: a Bevy editor, an embedded SurrealDB, peer-to-peer replication over iroh, and a way to hand a query to DuckDB, GeoParquet, or Power BI without a connector SDK. Assets are content-addressed with BLAKE3. Maps and scenes travel as .hexon files. The plugin host runs Rhai and WASM in sandboxes against a stable API. The README’s status line is the one we are willing to repeat in public: the desktop starts that host and loads no plugin packages automatically. Admission fails closed. The relay binary does not host plugins at all. ',
          a('README', 'https://github.com/Escherbridge/fractalengine/blob/main/README.md'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'That is the design decision worth keeping. A plugin is code that executes inside the record of a place. The safe default is not “try it and see.” The safe default is silence until someone with a role admits the package. On 9 November 2026 the extension-platform work merged to main (',
          a('0b579b6', 'https://github.com/Escherbridge/fractalengine/commit/0b579b6'),
          '), and the web-bundle portal surface followed it (',
          a('f2adc8f', 'https://github.com/Escherbridge/fractalengine/commit/f2adc8f'),
          '). The same week, the README’s “planned” list still mentioned that work. A status block that lags a merge is annoying. It is also a better problem than a status block that runs ahead of the code.',
        ],
      },
      {
        kind: 'h2',
        text: 'What we will not pretend',
      },
      {
        kind: 'p',
        inlines: [
          'The same README, and SECURITY.md, say the awkward part out loud. Operation-log entries have an ed25519 signature field. On the legacy write paths that field is a placeholder of zeros. Signed operations belong to the canonical log. Do not treat the op-log as an integrity guarantee yet. A field named signature that contains zeros is not a signature. It is a reservation. We would rather publish that than let a buyer discover it in a review they had to request. ',
          a('SECURITY.md', 'https://github.com/Escherbridge/fractalengine/blob/main/SECURITY.md'),
          '.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'PURPOSE.md makes the same kind of admission in a different register: the engine is a mirror, never a copy. A coordinate is rounded. A tile is sampled. A forecast is a guess with a confidence attached. Organizational memory that forgets it is a likeness becomes a very confident rumor. ',
          a('PURPOSE.md', 'https://github.com/Escherbridge/fractalengine/blob/main/PURPOSE.md'),
          '.',
        ],
      },
      {
        kind: 'h2',
        text: 'The habit, and a better one',
      },
      {
        kind: 'p',
        inlines: [
          'The industry habit is demo-ware with the serial numbers filed off: a pilot that cannot name what is gated, a plugin that runs because it was nearby, a log that looks signed because the column exists. The better path is a short list. Say what runs. Say what fails closed. Say which field is still zeros. Ship the refusal before you ship the marketplace. Alpha is allowed to be unfinished. It is not allowed to be vague.',
        ],
      },
      {
        kind: 'ul',
        items: [
          'Fail-closed admission is a feature you can point at. A zeroed signature is a bug you can point at. Both get a sentence.',
          'A README that trails the merge by a day is a documentation lag. A README that claims the merge early is a different product.',
          'Pre-1.0 builds are unsigned, and there is no macOS build. That is a distribution fact, not a teaser.',
          'AZOA is in the same family of honesty: identity and revocable consent are in, real-value bridges stay off, and two governance actions remain in the not-enabled list until their reviews close.',
        ],
      },
      {
        kind: 'cta',
        layer: 'Fractal Engine',
        layerHref: '/fractal-engine',
        inlines: [
          'If you want the layer, it is ',
          a('Fractal Engine', '/fractal-engine'),
          ': organizational memory, alpha, local-first, with the limits written down. AMP is the operational runtime it sits beside. The plugin habit, from the outside, is in ',
          a('the previous note', '/blog/the-plugin-was-already-inside'),
          '. ',
          a('Contact', '/contact'),
          ' if you would like the limits read to you before the demo, which is the only order that makes any sense.',
        ],
      },
    ],
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((essay) => essay.slug === slug);
}
