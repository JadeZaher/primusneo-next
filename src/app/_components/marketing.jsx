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

export const ChallengeCard = ({ title, description, metric, metricLabel }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-red-500/5 p-8 transition duration-300 hover:border-red-400/30 hover:bg-red-500/10">
    <div className="absolute -right-4 -top-4 text-8xl font-black text-red-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-red-500/20">!</div>
    <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
    <p className="mb-6 text-gray-400">{description}</p>
    {metric && (
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="text-3xl font-bold text-red-400">{metric}</div>
        <div className="text-sm uppercase tracking-wider text-gray-500">{metricLabel}</div>
      </div>
    )}
  </div>
);

export const MetricCard = ({ value, label }) => (
  <div className="text-center md:text-left group">
    <div className="text-5xl font-black tracking-tighter text-white mb-2 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">
      {value}
    </div>
    <div className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400/90 leading-tight">
      {label}
    </div>
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
