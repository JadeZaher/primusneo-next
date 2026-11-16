import Link from 'next/link';

const Pill = ({ children }) => (
  <span className="border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
    {children}
  </span>
);

export const SectionHeader = ({ eyebrow, title, children, className = '' }) => (
  <div className={`mb-12 max-w-[1600px] ${className}`}>
    {eyebrow ? (
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">{eyebrow}</div>
    ) : null}
    <h2 className="max-w-[22ch] text-balance text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em] text-paper">
      {title}
    </h2>
    {children ? (
      <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-mist">{children}</p>
    ) : null}
  </div>
);

export const GradientButton = ({ href, children, variant = 'primary' }) => {
  const className =
    variant === 'secondary'
      ? 'inline-flex items-center justify-center border border-white/25 px-7 py-[15px] font-mono text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:border-accent hover:text-accent'
      : 'inline-flex items-center justify-center bg-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white';

  if (typeof href === 'string' && href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export const InsightCard = ({ eyebrow, title, children }) => (
  <div className="h-full border border-white/10 bg-ink px-6 py-7 transition-colors duration-300 hover:bg-white/[0.03]">
    {eyebrow ? (
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
    ) : null}
    <h3 className="mb-3 text-[22px] font-medium tracking-[-0.02em] text-paper">{title}</h3>
    <div className="text-sm leading-relaxed text-mist">{children}</div>
  </div>
);

export const ChallengeCard = ({ title, description, metric, metricLabel }) => (
  <div className="flex h-full flex-col border border-white/10 bg-ink-deep px-6 py-7">
    <h3 className="mb-3 text-xl font-medium tracking-[-0.02em] text-paper">{title}</h3>
    <p className="mb-8 text-sm leading-relaxed text-mist">{description}</p>
    {metric ? (
      <div className="mt-auto border-t border-white/10 pt-5">
        <div className="text-[clamp(28px,3vw,40px)] font-medium tracking-[-0.03em] text-paper">{metric}</div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{metricLabel}</div>
      </div>
    ) : null}
  </div>
);

export const MetricCard = ({ value, label }) => (
  <div>
    <div className="text-[clamp(36px,4vw,56px)] font-medium leading-none tracking-[-0.04em] text-paper">{value}</div>
    <div className="mt-3 font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-faint">{label}</div>
  </div>
);

export const NumberedCard = ({ number, title, children }) => (
  <div className="h-full border-t border-white/10 px-1 py-7">
    <div className="font-mono text-[11px] tracking-[0.2em] text-accent">{number}</div>
    <h3 className="mb-3 mt-4 text-xl font-medium tracking-[-0.02em] text-paper">{title}</h3>
    <p className="text-sm leading-relaxed text-mist">{children}</p>
  </div>
);

export const DreadShape = ({ volume = 1, id = '01', className = '', size = 80 }) => {
  const volPath = volume === 5 ? 'Dread Shapes Vol 5' : 'Dread Shapes Vol 1';
  const filePrefix = volume === 5 ? 'DSV5-' : 'DSV-';
  const src = `/images/newassets/${volPath}/${filePrefix}${id}.png`;

  return (
    <div
      className={`pointer-events-none absolute -z-10 select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img src={src} alt="" role="presentation" className="h-full w-full object-contain opacity-20" />
    </div>
  );
};

export const PillList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <Pill key={item}>{item}</Pill>
    ))}
  </div>
);

export const RelatedWriting = ({ href, title, kicker = 'From the notes' }) => (
  <section className="border-t border-white/10 bg-ink px-7 py-16">
    <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-8">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">{kicker}</div>
        <Link
          href={href}
          className="mt-3 block max-w-[24ch] text-[clamp(28px,3vw,48px)] font-medium leading-[1.05] tracking-[-0.03em] text-paper transition-colors hover:text-accent"
        >
          {title}
        </Link>
      </div>
      <Link href="/blog" className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist hover:text-paper">
        All notes →
      </Link>
    </div>
  </section>
);

export default Pill;
