import type { EssaySource, ProseBlock } from './essays';

/**
 * Futures: speculation, labeled as such. Tie each piece to a layer.
 * No fake dates, no fake statistics. See CONTENT.md.
 */

export type FuturePiece = {
  slug: string;
  title: string;
  /** When the piece was written, not when the future arrives. */
  date: string;
  /** Plain range, for example "5–20 years", or a year the piece itself names. */
  horizon: string;
  layer: string;
  layerHref: string;
  excerpt: string;
  /** Plain pieces. Use `blocks` when the draft has headings, links, emphasis, or lists. */
  paragraphs?: string[];
  blocks?: ProseBlock[];
  sources?: EssaySource[];
};

export const futures: FuturePiece[] = [
  {
    slug: 'the-twin-that-outlives-the-account',
    title: 'The twin that outlives the account',
    date: '2026-11-10',
    horizon: '5–20 years',
    layer: 'AMP and Fractal Engine',
    layerHref: '/amp',
    excerpt:
      'A speculation: the useful twin is the one you can still open when the vendor relationship ends. Not a forecast with a year attached.',
    paragraphs: [
      'This is speculation. It is not a roadmap and it is not a promise. The horizon is somewhere between five years and twenty, which is a polite way of saying we do not know, and we are not going to pretend a quarter.',
      'The habit today is a digital twin that lives in someone else’s account. The model of the building is real enough to demo. The exit is a project. Papers on the public record already describe the trap: vendor-specific platforms, a cloud that is hard to leave, and an edge that the suite was not built to reach. Our own engine is a mirror, and the README says so. A coordinate is rounded. A forecast is a guess with a confidence on it.',
      'The version worth wanting is quieter. The site keeps a local record. Peers can sync it without a single host being the building. A query can leave for a spreadsheet or a warehouse the operator already has. When the contract ends, the hashes and the files are still the operator’s. AMP is the runtime that has to keep working beside the place. Fractal Engine is the memory that has to admit it is a likeness. Both are incomplete relative to that picture. AMP’s public kit is a spatial SDK and a live creator house, not a finished export story. Fractal Engine is alpha, with plugin admission that fails closed and signature fields that are still zeros.',
      'If that picture arrives, it will look boring. A town, a feeder, or a floor will have a twin that still opens on a Tuesday after the login does not. The coordination problem will not have been solved by a larger dashboard. It will have been solved by the record surviving the account. We do not have a year for that. We have the direction, and the gaps written down.',
    ],
  },
  {
    slug: 'the-grant-that-outlives-the-demo',
    title: 'The grant that outlives the demo',
    date: '2026-11-10',
    horizon: '5–20 years',
    layer: 'AZOA and NEOS',
    layerHref: '/azoa',
    excerpt:
      'A speculation: agents that can act will be ordinary. The ones worth trusting will be the ones that can show the permission.',
    blocks: [
      {
        kind: 'p',
        inlines: [
          'This is speculation. Agents will get better at finishing tasks. That sentence is the easy one. The interesting sentence is what a person can point at afterward.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Right now a demo can call a tool and return with a tone of competence. The permission is often a checkbox from signup, and the log is often the vendor’s. Public rules are already walking in this direction without our help. The EU AI Act’s record-keeping article asks high-risk systems to be able to log what they did. NIST’s AI Risk Management Framework keeps asking who owns the outcome. Neither of those is a product requirement we get to waive because the demo was charming.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The shape we are actually building is smaller than the speculation, and that is the point. ',
          { t: 'AZOA', href: 'https://azoa.ardanova.com' },
          ' is at Alpha Gate. Identity and a revocable consent grant are in. A claimed member can keep working under their own grant. Wallets are not minted into claimed accounts. Real-value settlement stays off until custody review. ',
          { t: 'NEOS', href: 'https://neos.primusneo.com' },
          ' is the agreements side: who may decide what, written down, with authority that expires. An agent that can draft is not an agent that can approve. The grant is the difference.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Over five to twenty years, the ordinary case may be a person who never sees the model and still needs the receipt. Who allowed the tool. What it covered. Whether it was revoked while the task was running. A co-op, a clinic, or a site will care about that more than about the model’s name. If we do this well, the speculative part will feel dull: the demo and the permission will be different objects, and only one of them will move anything that matters. We are not there. The alpha gate is the honest version of the first step.',
        ],
      },
    ],
  },

  {
    slug: '2035-the-model-lives-next-to-the-site',
    title: '2035: The model lives next to the site',
    date: '2026-11-09',
    horizon: '2035',
    layer: 'AMP',
    layerHref: '/amp',
    excerpt:
      'A speculation, tied to AMP, about what happens when the working model of a place no longer has to leave it — written against what is already true about electricity, queues, and local-first software.',
    sources: [
      {
        label:
          'IEA, Energy and AI, Executive summary (and 10 April 2025 news release)',
        href: 'https://www.iea.org/reports/energy-and-ai/executive-summary',
      },
      {
        label:
          'IEA, “AI is set to drive surging electricity demand from data centres…,” 10 April 2025',
        href: 'https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works',
      },
      {
        label:
          'Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan, “Local-first software: you own your data, in spite of the cloud,” Ink & Switch / Onward! 2019',
        href: 'https://www.inkandswitch.com/essay/local-first/',
      },
      {
        label: 'plan-systems/amp.SDK README',
        href: 'https://github.com/plan-systems/amp.SDK',
      },
      {
        label: 'art-media-platform/amp.SDK (upstream of the named fork)',
        href: 'https://github.com/art-media-platform/amp.SDK',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'This essay is tied to AMP, the operational runtime in the PrimusNeo stack. The first half is current and sourced. The second half is speculation about 2035. It is not a plan, a ship date, or a promise that AMP, or anyone else, will be in that position by then.',
        ],
      },
      {
        kind: 'h2',
        text: 'What is true now',
      },
      {
        kind: 'p',
        inlines: [
          "Data centres already use a measurable share of the world's electricity, and that share is growing faster than the grids that serve them. In its Energy and AI work, the International Energy Agency reported that data centres accounted for about 415 terawatt-hours in 2024, around 1.5 percent of global electricity consumption. The same assessment expects that figure to more than double to around 945 TWh by 2030, \"slightly more than Japan's total electricity consumption today.\" In the IEA's Base Case, consumption reaches almost 1,200 TWh by 2035.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          'The constraint is not only generation. It is connection. The IEA reported that around 20 percent of planned data centre projects already face possible delays in commissioning because of long waits for grid connections, and that if grid and supply risks are not addressed, 20 percent of expected new data centre capacity from 2025 to 2030 could be delayed. It currently takes four to eight years, the agency said, to build new transmission infrastructure in advanced economies. A model that has to live in a distant hall is, more and more often, a model that has to wait in a queue.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'A separate and older argument is about ownership rather than watts. In 2019, Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and Mark McGranaghan set out a case for "local-first software": software that keeps collaboration without making a remote server the home of the work. Their opening is still the clearest version of the problem. Cloud apps make it easy to work from several devices, but "by centralizing data storage on servers, cloud apps also take away ownership and agency from users. If a service shuts down, the software stops functioning, and data created with that software is lost." Among their ideals are that the network is optional, that work should survive in the long term, and that the people who made the work "retain ultimate ownership and control."',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'AMP, as it exists today, is a spatial and media runtime, not a completed answer to either of those pressures. The repository named in PrimusNeo materials, ',
          {
            t: 'plan-systems/amp.SDK',
            href: 'https://github.com/plan-systems/amp.SDK',
          },
          ', is a public Go SDK for a 3D, geospatial, and media platform, with Unity and Unreal hooks through amp.lib. Its README states that the planet-scale runtime, amp.planet, is "not public." The named repository is a fork of ',
          {
            t: 'art-media-platform/amp.SDK',
            href: 'https://github.com/art-media-platform/amp.SDK',
          },
          ". As of 9 November 2026, the fork's last commit was 29 July 2025; the upstream project was still tagging releases in November 2026. The public repositories do not show AMP running at a particular site, and marketing copy is not a substitute. What the public code supports is narrower: a toolkit for putting a spatial model on a machine, and a planet-scale piece that is explicitly not in the open.",
        ],
      },
      {
        kind: 'h2',
        text: 'What follows is speculation',
      },
      {
        kind: 'p',
        inlines: [
          'Suppose, in 2035, those two facts have not been repealed. Electricity for large, remote compute is still expensive or late. People who build and maintain places still do not want the working model of those places to vanish if a vendor changes its terms. Then the reasonable place for a living model is next to the work it describes.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          "Not a metaphor. A machine on the site, or in a building the site's owners can walk into, holding the current geometry, the sensor feeds that still fit on local storage, and the edits made that morning. Collaboration can still happen. Copies can still travel. But the authoritative model does not have to ride a wide-area link for every turn of the camera, and it does not have to die with a subscription. Kleppmann and colleagues were writing about documents and design files. The same prior applies to a site: if the network is optional, the model can be useful on a bad day, which is most days in the field.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          'AMP is the layer this guess attaches to because a site-owned model is, first, a runtime problem. Someone has to render the place, attach media and spatial data to it, and let more than one person look at the same object without shipping the whole scene to a distant GPU. A local-first instinct does not make that easy. It only says where the data should sit while you try. The closed amp.planet runtime is a reminder that some of the interesting machinery is not inspectable today. A 2035 in which "the model lives next to the site" would require the operable parts of that runtime to be in the hands of the people who own the site.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'This is also where the energy numbers stop being a backdrop. If a fifth of planned data centre capacity can be delayed by interconnection, then putting every digital twin in a hyperscale region is not only a question of preference. It is a question of whether the power and the wires will be there when the model is needed. Edge compute will have its own appetite, and a rack beside a job site is not a free lunch. The speculation is only that some of the work — the model you steer a day with, not the archive you query once a year — will have been pulled closer, because waiting four to eight years for a transmission line is not a project plan.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          "I do not know that AMP will be the runtime in that picture. I do not know that PrimusNeo's connected workflow, which the public materials still describe as in build, will be finished, or that a particular town will be running a site-owned model. Those would be promises. This is a directional bet: if the IEA's queues remain real, and if the local-first diagnosis remains right, then the architecture that works is the one that can keep a place's working model on a machine the place can touch. Everything else is a render farm with a better brochure.",
        ],
      },
    ],
  },
  {
    slug: '2035-the-towns-computer-is-a-rack',
    title: "2035: The town's computer is a rack",
    date: '2026-11-09',
    horizon: '2035',
    layer: 'OPQPWR',
    layerHref: '/roadmap/opqpwr',
    excerpt:
      'A speculation, tied to OPQPWR, about putting power and computation in a box a community can own — written against what is already true about data-centre electricity and portable microgrids, and without inventing a product we could not inspect.',
    sources: [
      {
        label: 'IEA, Energy and AI, Executive summary',
        href: 'https://www.iea.org/reports/energy-and-ai/executive-summary',
      },
      {
        label:
          'IEA, “AI is set to drive surging electricity demand from data centres…,” 10 April 2025',
        href: 'https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works',
      },
      {
        label:
          'Idaho National Laboratory, “Microgrid in a Box opening new possibilities in defense, utilities, disaster relief”',
        href: 'https://inl.gov/integrated-energy/microgrid-in-a-box-opening-new-possibilities-in-defense-utilities-disaster-relief/',
      },
    ],
    blocks: [
      {
        kind: 'p',
        inlines: [
          'This essay is tied to OPQPWR, the physical layer in the PrimusNeo stack. The first half is current and sourced. The second half is speculation about 2035. It is not a product roadmap, a deployment claim, or a description of hardware I have not opened.',
        ],
      },
      {
        kind: 'h2',
        text: 'What is true now',
      },
      {
        kind: 'p',
        inlines: [
          "The International Energy Agency's Energy and AI assessment puts data-centre electricity use at about 415 terawatt-hours in 2024, around 1.5 percent of global consumption, and expects that figure to more than double to around 945 TWh by 2030. In the IEA Base Case, consumption reaches almost 1,200 TWh by 2035. Around 20 percent of planned data centre projects, the agency reported, already face possible delays because of long waits for grid connections; if grid and supply risks are not addressed, 20 percent of expected new capacity from 2025 to 2030 could be delayed. New transmission in advanced economies currently takes four to eight years to build.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Those are numbers about large halls in particular places, waiting on wires. They are also a reason to look at smaller, movable power.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'Idaho National Laboratory describes a portable system it calls Microgrid in a Box: a collection of mobile trailers and containers that is "a fully functional microgrid." The published description includes 320 kilowatt-hours of battery storage. The system can tie into a modern grid and coordinate electricity for a small village, a military base, or, in a disaster, a hospital or other critical building. INL says it can manage about 250 kilowatts, can work with both U.S. and U.K. electrical standards, and can coordinate generation from several sources, including solar, wind, nuclear, or a diesel generator. An early version, the laboratory wrote, has already been deployed for military use in Kuwait. Researchers there argue that because the system can be disassembled and moved, it "sidesteps the need for construction." I am repeating INL\'s own account, not certifying the hardware.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'This is a crowded field, not a unique invention. National laboratories, vendors, and utilities have been putting generation, storage, and controls into containers for years. What matters for this essay is the pattern, which is public and repeatable: a unit of power that can arrive without a new substation, serve a defined load, and leave.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          'OPQPWR itself is thinner in the public record. PrimusNeo materials describe it as a partnership that is starting, and as field-deployable racks, and they state that no on-premises deployment is running yet. I found no public GitHub repository under that name, and I did not reach an official OPQPWR website. I am therefore not repeating secondary product claims, and I am not treating a partnership announcement as a specification. What can be said is that the physical layer is intended, not demonstrated. Any future tense has to start there.',
        ],
      },
      {
        kind: 'h2',
        text: 'What follows is speculation',
      },
      {
        kind: 'p',
        inlines: [
          "Suppose, in 2035, the IEA's direction is roughly right: more computation, more electricity, and grids that do not appear on demand. Suppose also that portable microgrids have continued down the path INL is already on — not as a curiosity for a test range, but as a normal way to put a few hundred kilowatts and a buffer of storage in a place that cannot wait for a transmission line.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          "Then a small community's interesting computer may not be an account in someone else's region. It may be a rack. Power on one side, computation on the other, sitting on land the community already has, sized for the work of that place: a model of a site, a records system that should survive a cut cable, the quiet jobs that do not need a training cluster. Self-sufficiency is a slogan. Locality is a constraint. If the large halls are delayed, the work that cannot be delayed will have to run closer to a generator someone can see.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          'I am not claiming that OPQPWR will be that rack, or that it can now do any of this. A partnership starting, with no public repository and no running on-premises deployment, is not a product you can write a 2035 brochure from. The speculation is about the job, not the vendor. The job is: a unit a town, a co-op, or a small municipality could own, move, and turn off; power and compute specified together, because a computer without a feeder is a paperweight, and a feeder without a workload is a very expensive shed.',
        ],
      },
      {
        kind: 'p',
        inlines: [
          "There are obvious failure modes, and they should stay in the picture. A rack can be poorly maintained. A container can become another object nobody on site knows how to run. Fuel, if it is in the mix, has its own logistics; INL's own description includes diesel as one of the sources the microgrid can coordinate, alongside cleaner ones. Local compute can be just as extractive as remote compute if the data still leaves and the keys do not stay. The 2035 version that is worth wanting is the one where ownership is literal: the hardware is on a property, the accounts are the community's, and the system can be inspected without calling a vendor.",
        ],
      },
      {
        kind: 'p',
        inlines: [
          "If that picture arrives, OPQPWR is the layer it would attach to — the physical side of a stack that otherwise lives in software. Until there is a public artifact to read, and a deployment to look at, that attachment is a hope about fit, not a report about progress. The facts we have are the IEA's queues, INL's portable microgrid, and a partnership that has not yet put a rack on a site. The rest is a guess, written down and not dated.",
        ],
      },
    ],
  },
];

export function getFuture(slug: string): FuturePiece | undefined {
  return futures.find((piece) => piece.slug === slug);
}
