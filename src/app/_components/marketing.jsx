const Pill = ({ children }) => (
  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_24px_rgba(74,222,128,0.08)]">
    {children}
  </span>
);

export const SectionHeader = ({ eyebrow, title, children, className = "" }) => (
  <div className={`mx-auto mb-12 max-w-3xl text-center ${className}`}>
    {eyebrow ? (
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
        {eyebrow}
      </div>
    ) : null}
    <h2 className="text-4xl font-bold tracking-tight text-white text-glow md:text-5xl">
      {title}
    </h2>
    {children ? (
      <p className="mt-5 text-lg leading-8 text-gray-300">{children}</p>
    ) : null}
  </div>
);

export const GradientButton = ({ href, children, variant = "primary" }) => {
  const className =
    variant === "secondary"
      ? "inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/10"
      : "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 via-lime-300 to-cyan-300 px-6 py-3 text-sm font-bold text-black shadow-[0_0_32px_rgba(74,222,128,0.22)] transition hover:scale-[1.02] hover:opacity-95";

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export const InsightCard = ({ eyebrow, title, children }) => (
  <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
    {eyebrow ? (
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
        {eyebrow}
      </div>
    ) : null}
    <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
    <div className="text-base leading-7 text-gray-300">{children}</div>
  </div>
);

export const NumberedCard = ({ number, title, children }) => (
  <div className="rounded-3xl border border-white/10 bg-black/35 p-7">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-lg font-bold text-emerald-200 ring-1 ring-emerald-300/30">
      {number}
    </div>
    <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
    <p className="leading-7 text-gray-300">{children}</p>
  </div>
);

export const PillList = ({ items }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item) => (
      <Pill key={item}>{item}</Pill>
    ))}
  </div>
);

export default Pill;
