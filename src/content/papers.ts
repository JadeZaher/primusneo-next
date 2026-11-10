/**
 * White papers. The landing page summarizes; the PDF is the paper.
 * Download is a direct file link. Do not put a form in front of it.
 * See CONTENT.md before adding one.
 */

export type PaperLink = {
  label: string;
  href: string;
  /** Why this page is listed. Optional. */
  note?: string;
};

export type PaperCover = {
  /** Path under public/, used on the page and as the Open Graph image. */
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Paper = {
  slug: string;
  /** Short label, for example "White paper no. 1". */
  kicker: string;
  title: string;
  /** Subtitle. The paper’s own line, including any attribution it already carries. */
  dek: string;
  /** The paragraph on the landing page. */
  summary: string;
  /** SEO description. A shortening of the summary, not a new claim. */
  description: string;
  /** YYYY-MM-DD. File date or the day it went on the site. */
  publishedAt: string;
  /** Printed date when the paper names a month rather than a day. */
  dateLabel?: string;
  pages: number;
  /** For example "US Letter". Omit if the file does not say. */
  format?: string;
  cover: PaperCover;
  /** Path under public/. The button links here. Nothing is required first. */
  pdf: string;
  /** Section titles from the PDF. Do not turn them into new claims. */
  inside: string[];
  /**
   * Stack pages this paper actually discusses, including roadmap sections.
   * Omit the field and the block does not render.
   */
  layers?: PaperLink[];
  /**
   * Essays or other notes that share the subject. Omit the field and the block does not render.
   */
  related?: PaperLink[];
};

export const papers: Paper[] = [
  {
    slug: "why-good-work-goes-unbuilt",
    kicker: "White paper no. 1",
    title: "Why good work goes unbuilt",
    dek: "The most expensive projects are the ones that never happened. On paper, they cost nothing. About 70% of manufacturers were stuck in “pilot purgatory” (McKinsey, 2018), and 91.5% of big projects run over budget, over schedule, or both (Flyvbjerg). White paper #1: write the test before you build, then let the evidence decide. Proof over promises.",
    summary:
      "Good work rarely dies because someone lacked the invention. It dies in three quieter ways: pilots that work and then go nowhere, projects that do happen at a price nobody agreed to, and the people with a problem, the people with the tools, and a place to test an answer simply never meeting. This paper walks through the research on each, from McKinsey’s “pilot purgatory” and Gartner’s abandoned AI proofs of concept to Bent Flyvbjerg’s “iron law of megaprojects” and the end of the TradeLens shipping platform. It finds one shared flaw: the test was never agreed, so the evidence could never decide. It then sets out a different order of operations, the PrimusNeo clearing house plus innovation lab, where the measures are set before anything is built and “stop” counts as an allowed result. It describes the underlying stack in plain words and uses Tie Town [TX], one co-op site in McDade, Texas, as a small, honest example. It ends with four questions to answer before building anything.",
    description:
      "Good work rarely dies because someone lacked the invention. It dies in three quieter ways: pilots that work and then go nowhere, projects that do happen at a price nobody agreed to, and the people with a problem, the people with the tools, and a place to test an answer simply never meeting.",
    publishedAt: "2026-11-10",
    dateLabel: "November 2026",
    pages: 10,
    format: "US Letter",
    cover: {
      src: "/papers/why-good-work-goes-unbuilt.png",
      width: 425,
      height: 550,
      alt: "Cover of white paper no. 1, November 2026. Title: Why good work goes unbuilt. Black field, a thin white curve, and a short blue arc labeled The gap. Actual size.",
    },
    pdf: "/papers/why-good-work-goes-unbuilt.pdf",
    inside: [
      "The loss nobody counts",
      "Pilot purgatory",
      "The overrun",
      "The missed meeting",
      "A different order of operations",
      "The plumbing, briefly",
      "Tie Town [TX]",
      "Before you build",
      "Sources & notes",
    ],
    layers: [
      {
        label: "AMP",
        href: "/amp",
        note: "Operational runtime. The spatial OS, live at Tie Town [TX].",
      },
      {
        label: "NEOS",
        href: "/governance-platform",
        note: "Agreements and permissions.",
      },
      {
        label: "AZOA",
        href: "/azoa",
        note: "Identity, consent, and settlement.",
      },
      {
        label: "Fractal Engine",
        href: "/fractal-engine",
        note: "Organizational memory.",
      },
      {
        label: "Elevate Impact",
        href: "/elevate-impact",
        note: "Research enablement. The paper’s plumbing section names it.",
      },
      {
        label: "AMP on the roadmap",
        href: "/roadmap/amp",
        note: "Shipped. The runtime people can point at is Tie Town.",
      },
      {
        label: "NEOS on the roadmap",
        href: "/roadmap/neos",
        note: "Shipped. Councils at Tie Town. Not every skill is claimed as in use.",
      },
      {
        label: "AZOA on the roadmap",
        href: "/roadmap/azoa",
        note: "In alpha. Consent is in. Real-value bridges stay off.",
      },
      {
        label: "Fractal Engine on the roadmap",
        href: "/roadmap/fractal-engine",
        note: "In alpha. The limits are part of the description.",
      },
      {
        label: "Elevate Impact on the roadmap",
        href: "/roadmap/elevate-impact",
        note: "Live as research. The join to the four layers is in build.",
      },
      {
        label: "Roadmap",
        href: "/roadmap",
        note: "The whole list. Shipped, in alpha, building, or exploring. No dates.",
      },
    ],
    related: [
      {
        label: "A digital twin shouldn’t live in someone else’s cloud",
        href: "/blog/digital-twin-shouldnt-live-in-someone-elses-cloud",
        note: "The pilot that becomes the product because leaving was never part of the design.",
      },
      {
        label: "Shared ownership, unshared minutes",
        href: "/blog/shared-ownership-unshared-minutes",
        note: "A co-op needs a record that outlives the people who were in the room. The paper’s example is one site of that kind.",
      },
      {
        label: "Alpha is a status, not a compliment",
        href: "/blog/alpha-is-a-status-not-a-compliment",
        note: "What “not finished” looks like when it is written down. The paper does the same for the stack.",
      },
    ],
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((paper) => paper.slug === slug);
}
