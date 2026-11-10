import Link from 'next/link';

const columns = [
  {
    heading: 'PLATFORM',
    links: [
      { href: '/amp', label: 'AMP' },
      { href: '/governance-platform', label: 'NEOS Governance' },
      { href: '/azoa', label: 'AZOA' },
      { href: '/fractal-engine', label: 'Fractal Engine' },
      { href: '/elevate-impact', label: 'Elevate Impact' },
      { href: '/one-pager', label: 'Stack Overview' },
    ],
  },
  {
    heading: 'CAPITAL & SECTORS',
    links: [
      { href: '/fractionalization', label: 'Fractionalization' },
      { href: '/ico-marketing', label: 'Capital Design' },
      { href: '/industries', label: 'Industries' },
      { href: '/solutions', label: 'Solutions' },
    ],
  },
  {
    heading: 'WRITING',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/guides', label: 'Guides' },
      { href: '/papers', label: 'Papers' },
      { href: '/newsroom', label: 'Newsroom' },
      { href: '/roadmap', label: 'Roadmap' },
      { href: '/futures', label: 'Futures' },
      { href: '/feed.xml', label: 'RSS' },
    ],
  },
  {
    heading: 'NETWORK',
    links: [
      { href: 'https://plan-systems.org/', label: 'PLAN Systems ↗', external: true },
      { href: 'https://www.greenearthvision.org/omnione-1', label: 'OmniOne / NEOS ↗', external: true },
      { href: 'https://escherbridge.com/', label: 'Escherbridge ↗', external: true },
      { href: 'https://elevateimpact.com/', label: 'Elevate Impact ↗', external: true },
      { href: 'https://overseasgenai.com/', label: 'OVERSEASGENAI ↗', external: true },
      { href: 'https://opqpwr.com/', label: 'OPQPWR ↗', external: true },
      { href: '/contact', label: 'Contact ↗' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
];

const escherbridgeProjects = [
  { href: 'https://primusneo.com', label: 'PrimusNeo, the lab' },
  { href: 'https://neos.primusneo.com', label: 'NEOS, agreements and permissions' },
  { href: 'https://azoa.ardanova.com', label: 'AZOA, identity, consent, and settlement' },
  { href: 'https://ardanova.com', label: 'ArdaNova, a designed consumer, not a live deployment' },
  { href: 'https://aevani.com', label: 'Aevani, for growers and makers' },
  { href: 'https://plantgeo.aevani.com', label: 'PlantGeo, a 3D geospatial platform' },
  { href: 'https://overseasgenai.com', label: 'OVERSEASGENAI, the venture shipyard' },
  { href: 'https://glitxz.com', label: 'Glitxz, for work that is not finished yet' },
];

const FooterLink = ({ href, label, external }) =>
  external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-mist transition hover:text-paper"
    >
      {label}
    </a>
  ) : (
    <Link href={href} className="text-sm text-mist transition hover:text-paper">
      {label}
    </Link>
  );

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-ink-deep px-7 pb-7 pt-20 text-paper">
      <div className="mx-auto grid max-w-[1600px] gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="text-sm font-semibold tracking-[0.14em]">
            PRIMUS—NEO<span className="text-accent">.</span>
          </div>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-mist">
            Federated operational infrastructure for real-world environments —
            AMP, NEOS, AZOA, and Fractal Engine in one governed stack, with
            Elevate Impact for research.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.heading} className="flex flex-col gap-3">
            <div className="mb-1.5 font-mono text-[11px] tracking-[0.22em] text-faint">
              {column.heading}
            </div>
            {column.links.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </nav>
        ))}
      </div>
      <nav aria-label="An Escherbridge project" className="mx-auto mt-16 max-w-[1600px] border-t border-white/[0.08] pt-8">
        <div className="font-mono text-[11px] tracking-[0.22em] text-faint">An Escherbridge project</div>
        <ul className="mt-4 flex max-w-[88ch] flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {escherbridgeProjects.map((project) => (
            <li key={project.href}>
              <a href={project.href} className="text-sm text-mist transition hover:text-paper">
                {project.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-auto mt-16 max-w-[1600px] overflow-hidden" aria-hidden="true">
        <div className="select-none whitespace-nowrap text-[clamp(64px,11.5vw,208px)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#15171B]">
          PRIMUSNEO
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-[1600px] flex-wrap justify-between gap-3 border-t border-white/[0.08] pt-5 font-mono text-[11px] tracking-[0.16em] text-faint">
        <span>© {new Date().getFullYear()} PRIMUSNEO</span>
        <span>PROOF OVER PROMISES</span>
        <span>TIE TOWN [TX] · 30.28°N / 97.24°W</span>
      </div>
    </footer>
  );
};

export default Footer;
