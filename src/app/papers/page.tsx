import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../_components/JsonLd";
import { WritingNav } from "../_components/WritingNav";
import { papers } from "@/content/papers";
import { breadcrumbList, collectionNode, graph } from "@/lib/jsonld";

const listed = [...papers].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
const lead = listed[0];

export const metadata = {
  title: "Papers",
  description:
    "White papers from the PrimusNeo lab. The page is the summary and the contents. The PDF downloads directly, with no form in front of it.",
  alternates: {
    canonical: "/papers",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    title: "Papers | PrimusNeo",
    description:
      "The long version, with the page count on it. The file does not ask for an email.",
    url: "/papers",
    type: "website",
    images: lead
      ? [
          {
            url: lead.cover.src,
            width: lead.cover.width,
            height: lead.cover.height,
            alt: lead.cover.alt,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Papers | PrimusNeo",
    description:
      "The long version, with the page count on it. The file does not ask for an email.",
    images: lead ? [lead.cover.src] : undefined,
  },
};

export default function PapersPage() {
  return (
    <main className="bg-ink text-paper">
      <JsonLd
        data={graph(
          collectionNode({
            name: "Papers",
            description:
              "The long version, with the page count on it. The file does not ask for an email.",
            path: "/papers",
            items: listed.map((paper) => ({
              name: paper.title,
              path: `/papers/${paper.slug}`,
            })),
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Papers", path: "/papers" },
          ]),
        )}
      />
      <header className="mx-auto max-w-[1600px] px-7 pt-32 pb-16 md:pt-40">
        <div className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
          Papers
        </div>
        <h1 className="mt-5 max-w-[14ch] text-[clamp(48px,7vw,112px)] leading-[0.94] font-medium tracking-[-0.04em] text-balance">
          The long version, with the page count.
        </h1>
        <p className="text-mist mt-8 max-w-[54ch] text-[17px] leading-relaxed">
          The summary stays on the page. The PDF is the paper, and it downloads
          directly. There is no address field in front of the file.
        </p>
        <WritingNav current="/papers" />
      </header>

      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {listed.map((paper, index) => (
          <article
            key={paper.slug}
            className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[180px_minmax(0,1.4fr)_minmax(0,1fr)] md:items-start md:gap-8"
          >
            <Link
              href={`/papers/${paper.slug}`}
              className="block max-w-[180px]"
            >
              <Image
                src={paper.cover.src}
                alt={paper.cover.alt}
                width={paper.cover.width}
                height={paper.cover.height}
                className="h-auto w-full border border-white/10"
              />
            </Link>
            <div>
              <div className="text-faint font-mono text-[11px] tracking-[0.16em] uppercase">
                <span className="text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block">
                  {paper.dateLabel ?? paper.publishedAt}
                </span>
              </div>
              <h2 className="mt-4 text-[clamp(28px,3vw,44px)] leading-tight font-medium tracking-[-0.03em]">
                <Link
                  href={`/papers/${paper.slug}`}
                  className="hover:text-accent"
                >
                  {paper.title}
                </Link>
              </h2>
              <p className="text-mist mt-4 max-w-[58ch] text-sm leading-relaxed">
                {paper.dek}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:pt-8">
              <p className="text-faint font-mono text-[11px] tracking-[0.16em] uppercase">
                {paper.pages} pages{paper.format ? ` · ${paper.format}` : ""}
              </p>
              <Link
                href={`/papers/${paper.slug}`}
                className="text-accent font-mono text-[11px] tracking-[0.14em] uppercase"
              >
                Read the summary
              </Link>
              <a
                href={paper.pdf}
                download
                className="text-paper hover:text-accent font-mono text-[11px] tracking-[0.14em] uppercase underline decoration-white/25 underline-offset-4"
              >
                Download PDF
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
