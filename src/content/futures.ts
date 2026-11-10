/**
 * Futures: speculation, labeled as such. Tie each piece to a layer.
 * No fake dates, no fake statistics. See CONTENT.md.
 */

export type FuturePiece = {
  slug: string;
  title: string;
  /** When the piece was written, not when the future arrives. */
  date: string;
  /** Plain range, for example "5–20 years". */
  horizon: string;
  layer: string;
  layerHref: string;
  excerpt: string;
  paragraphs: string[];
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
    paragraphs: [
      'This is speculation. Agents will get better at finishing tasks. That sentence is the easy one. The interesting sentence is what a person can point at afterward.',
      'Right now a demo can call a tool and return with a tone of competence. The permission is often a checkbox from signup, and the log is often the vendor’s. Public rules are already walking in this direction without our help. The EU AI Act’s record-keeping article asks high-risk systems to be able to log what they did. NIST’s AI Risk Management Framework keeps asking who owns the outcome. Neither of those is a product requirement we get to waive because the demo was charming.',
      'The shape we are actually building is smaller than the speculation, and that is the point. AZOA is at Alpha Gate. Identity and a revocable consent grant are in. A claimed member can keep working under their own grant. Wallets are not minted into claimed accounts. Real-value settlement stays off until custody review. NEOS is the agreements side: who may decide what, written down, with authority that expires. An agent that can draft is not an agent that can approve. The grant is the difference.',
      'Over five to twenty years, the ordinary case may be a person who never sees the model and still needs the receipt. Who allowed the tool. What it covered. Whether it was revoked while the task was running. A co-op, a clinic, or a site will care about that more than about the model’s name. If we do this well, the speculative part will feel dull: the demo and the permission will be different objects, and only one of them will move anything that matters. We are not there. The alpha gate is the honest version of the first step.',
    ],
  },
];

export function getFuture(slug: string): FuturePiece | undefined {
  return futures.find((piece) => piece.slug === slug);
}
