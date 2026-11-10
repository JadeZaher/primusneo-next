import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/_components/JsonLd";
import { WritingNav } from "@/app/_components/WritingNav";
import { getPaper, papers, type PaperLink } from "@/content/papers";
import { absoluteUrl, articleNode, breadcrumbList, graph } from "@/lib/jsonld";

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper)
    return { title: "Not found", robots: { index: false, follow: false } };
  const image = {
    url: paper.cover.src,
    width: paper.cover.width,
    height: paper.cover.height,
    alt: paper.cover.alt,
  };
  return {
    title: paper.title,
    description: paper.description,
    alternates: { canonical: `/papers/${slug}` },
    openGraph: {
      title: `${paper.title} | PrimusNeo`,
      description: paper.description,
      type: "article",
      url: `/papers/${slug}`,
      publishedTime: paper.publishedAt,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: paper.title,
      description: paper.description,
      images: [paper.cover.src],
    },
  };
}

function RefList({ items }: { items: PaperLink[] }) {
  return (
    <ul className="mt-6 border-t border-white/10">
      {items.map((item) => {
        const className =
          "group grid gap-2 py-5 transition-colors hover:bg-white/[0.02] md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-baseline md:px-2";
        const body = (
          <>
            <span className="group-hover:text-accent text-[20px] leading-snug font-medium tracking-[-0.02em]">
              {item.label}
            </span>
            {item.note ? (
              <span className="text-mist text-sm leading-relaxed">
                {item.note}
              </span>
            ) : (
              <span />
            )}
          </>
        );
        return (
          <li key={item.href} className="border-b border-white/10">
            {item.href.startsWith("/") ? (
              <Link href={item.href} className={className}>
                {body}
              </Link>
            ) : (
              <a
                href={item.href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
              >
                {body}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  const when = paper.dateLabel ?? paper.publishedAt;
  const stack = (paper.layers ?? []).filter(
    (item) => !item.href.startsWith("/roadmap"),
  );
  const roadmap = (paper.layers ?? []).filter((item) =>
    item.href.startsWith("/roadmap"),
  );
  const showRelated =
    stack.length > 0 || roadmap.length > 0 || (paper.related?.length ?? 0) > 0;

  return (
    <main className="bg-ink text-paper">
      <JsonLd
        data={graph(
          articleNode({
            headline: paper.title,
            description: paper.description,
            path: `/papers/${paper.slug}`,
            datePublished: paper.publishedAt,
            image: absoluteUrl(paper.cover.src),
          }),
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Papers", path: "/papers" },
            { name: paper.title, path: `/papers/${paper.slug}` },
          ]),
        )}
      />

      <header className="mx-auto max-w-[1600px] px-7 pt-32 pb-12 md:pt-40">
        <Link
          href="/papers"
          className="text-faint hover:text-paper font-mono text-[11px] tracking-[0.18em] uppercase transition-colors"
        >
          ← Papers
        </Link>
        <div className="text-accent mt-8 font-mono text-[11px] tracking-[0.22em] uppercase">
          {paper.kicker}
        </div>
        <h1 className="mt-4 max-w-[12ch] text-[clamp(48px,7vw,104px)] leading-[0.94] font-medium tracking-[-0.04em] text-balance">
          {paper.title}
        </h1>
        <p className="text-mist mt-8 max-w-[62ch] text-[17px] leading-relaxed">
          {paper.dek}
        </p>
        <p className="text-faint mt-6 font-mono text-[11px] tracking-[0.16em] uppercase">
          {when}
          {" · "}
          {paper.pages} pages
          {paper.format ? ` · ${paper.format}` : ""}
        </p>
        <WritingNav current="/papers" />
      </header>

      <section className="mx-auto grid max-w-[1600px] gap-12 border-t border-white/10 px-7 py-16 lg:grid-cols-[minmax(0,425px)_minmax(0,1fr)] lg:gap-20">
        <figure className="max-w-[425px]">
          <Image
            src={paper.cover.src}
            alt={paper.cover.alt}
            width={paper.cover.width}
            height={paper.cover.height}
            priority
            className="h-auto w-full border border-white/10"
          />
        </figure>
        <div>
          <h2 className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
            Summary
          </h2>
          <p className="text-mist mt-4 max-w-[68ch] text-[18px] leading-[1.65]">
            {paper.summary}
          </p>

          <h2 className="text-faint mt-12 font-mono text-[11px] tracking-[0.22em] uppercase">
            What’s inside
          </h2>
          <ul className="mt-4 max-w-[52ch] space-y-2 text-[17px] leading-relaxed">
            {paper.inside.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-faint mt-10 font-mono text-[11px] tracking-[0.16em] uppercase">
            {paper.pages} pages{paper.format ? ` · ${paper.format}` : ""}
          </p>
          <a
            href={paper.pdf}
            download
            className="bg-paper text-ink hover:bg-accent mt-5 inline-flex px-7 py-4 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white"
          >
            Download PDF
          </a>
          <p className="text-mist mt-4 max-w-[46ch] text-sm leading-relaxed">
            Direct file. Nothing to fill in, and nothing is stored because you
            clicked it.
          </p>
        </div>
      </section>

      <section className="bg-ink-deep border-t border-white/10 px-7 py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-faint font-mono text-[11px] tracking-[0.22em] uppercase">
            Next
          </div>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(32px,4vw,64px)] leading-[1.02] font-medium tracking-[-0.03em]">
            Talk to us.
          </h2>
          <p className="text-mist mt-6 max-w-[58ch] text-[17px] leading-relaxed">
            The paper ends with four questions. If they already have answers,
            you may not need this. If they do not, the contact page is the same
            form the rest of the site uses.
          </p>
          <Link
            href="/contact"
            className="bg-paper text-ink hover:bg-accent mt-8 inline-flex px-7 py-4 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:text-white"
          >
            Talk to us
          </Link>
          <p className="text-mist mt-6 max-w-[52ch] text-sm leading-relaxed">
            Prefer the notes to a form?{" "}
            <Link
              href="/feed.xml"
              className="text-paper hover:text-accent underline decoration-white/25 underline-offset-4"
            >
              The feed
            </Link>{" "}
            carries the blog, the newsroom, and these papers.
          </p>
        </div>
      </section>

      {showRelated ? (
        <section className="border-t border-white/10 px-7 py-20">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="text-[clamp(32px,4vw,56px)] font-medium tracking-[-0.03em]">
              Related
            </h2>
            <p className="text-mist mt-4 max-w-[62ch] text-[17px] leading-relaxed">
              The paper describes the stack in plain words. These are the pages
              where the site describes the same layers, including the roadmap,
              where the status is written down.
            </p>
            {stack.length > 0 ? (
              <div className="mt-12">
                <h3 className="text-faint font-mono text-[11px] tracking-[0.18em] uppercase">
                  The stack
                </h3>
                <RefList items={stack} />
              </div>
            ) : null}
            {roadmap.length > 0 ? (
              <div className="mt-12">
                <h3 className="text-faint font-mono text-[11px] tracking-[0.18em] uppercase">
                  Roadmap
                </h3>
                <RefList items={roadmap} />
              </div>
            ) : null}
            {paper.related && paper.related.length > 0 ? (
              <div className="mt-12">
                <h3 className="text-faint font-mono text-[11px] tracking-[0.18em] uppercase">
                  Notes
                </h3>
                <RefList items={paper.related} />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}
