import type { ReactNode } from 'react';
import Link from 'next/link';
import { GradientButton } from '@/app/_components/marketing';
import type { Inline, ProseBlock } from '@/content/essays';

function emphasis(part: Exclude<Inline, string>) {
  let node: ReactNode = part.t;
  if (part.em) node = <em>{node}</em>;
  if (part.strong) node = <strong>{node}</strong>;
  return node;
}

export function Inlines({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === 'string') return <span key={i}>{part}</span>;
        const inner = emphasis(part);
        if (!part.href) return <span key={i}>{inner}</span>;
        const className =
          'text-paper underline decoration-white/30 underline-offset-4 hover:text-accent hover:decoration-accent';
        return part.href.startsWith('/') ? (
          <Link key={i} href={part.href} className={className}>
            {inner}
          </Link>
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {inner}
          </a>
        );
      })}
    </>
  );
}

export function ProseBlockView({ block }: { block: ProseBlock }) {
  if (block.kind === 'h2') {
    return (
      <h2 className="text-paper mt-14 mb-4 text-[clamp(26px,3vw,40px)] leading-tight font-medium tracking-[-0.03em]">
        {block.text}
      </h2>
    );
  }
  if (block.kind === 'ul') {
    return (
      <ul className="text-paper mb-8 space-y-3 border-l border-white/15 pl-5">
        {block.items.map((item, index) => (
          <li key={index}>
            {typeof item === 'string' ? item : <Inlines parts={item} />}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="mb-6">
      <Inlines parts={block.inlines} />
    </p>
  );
}

export function PieceClose({
  layer,
  layerHref,
  eyebrow = 'Where the stack fits',
  title,
  note,
  primaryHref = '/demos/paid-twice',
  primaryLabel = 'Run Paid-Twice simulator',
  secondaryHref = '/guides',
  secondaryLabel = 'Explore field guides',
}: {
  layer?: string;
  layerHref?: string;
  eyebrow?: string;
  title?: string;
  note?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <aside className="bg-ink-deep text-paper mt-16 max-w-[68ch] border border-white/15 px-7 py-8">
      <div className="text-accent font-mono text-[11px] tracking-[0.22em] uppercase">
        {eyebrow}
      </div>
      {layer && layerHref ? (
        <h2 className="mt-3 text-[clamp(28px,3vw,44px)] leading-tight font-medium tracking-[-0.03em]">
          <Link href={layerHref} className="hover:text-accent">
            {layer}
          </Link>
        </h2>
      ) : title ? (
        <h2 className="mt-3 text-[clamp(26px,3vw,40px)] leading-tight font-medium tracking-[-0.03em]">
          {title}
        </h2>
      ) : null}
      {note ? (
        <p className="text-mist mt-4 max-w-[56ch] text-[16px] leading-relaxed">
          {note}
        </p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <GradientButton href={primaryHref}>{primaryLabel}</GradientButton>
        <GradientButton href={secondaryHref} variant="secondary">
          {secondaryLabel}
        </GradientButton>
      </div>
      <div className="text-faint mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 font-mono text-[11px] tracking-[0.16em] uppercase">
        <Link href="/papers/why-good-work-goes-unbuilt" className="hover:text-paper">
          White Paper #1
        </Link>
        <Link href="/contact" className="hover:text-paper">
          Contact engineering
        </Link>
        <Link href="/feed.xml" className="hover:text-paper">
          RSS
        </Link>
      </div>
    </aside>
  );
}
