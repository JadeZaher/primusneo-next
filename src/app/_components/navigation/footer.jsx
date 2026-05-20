import Link from 'next/link';

const internalNav = {
  platform: [
    { href: '/amp', label: 'AMP' },
    { href: '/governance-platform', label: 'NEOS Governance' },
    { href: '/oasis', label: 'OASIS Web4' },
    { href: '/fractal-engine', label: 'Fractal Engine' },
    { href: '/fractionalization', label: 'Fractionalization' },
    { href: '/one-pager', label: 'Stack Overview' },
  ],
  sectors: [
    { href: '/industries', label: 'Industries' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/blog', label: 'Blog & Updates' },
    { href: '/contact', label: 'Contact' },
  ],
};

const externalConnect = [
  { href: 'https://plan-systems.org/', label: 'PLAN Systems' },
  { href: 'https://escherbridge.com/', label: 'Escherbridge' },
  { href: 'https://www.greenearthvision.org/omnione-1', label: 'OmniOne / NEOS' },
  { href: 'https://oasisweb4.com/', label: 'OASIS Web4' },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <h4 className="text-2xl font-bold text-white text-glow">
              PrimusNeo
            </h4>
            <p className="max-w-md text-gray-400 text-sm leading-relaxed">
              Federated operational infrastructure for real-world environments — AMP, NEOS, OASIS Web4, and Fractal Engine in one coordinated stack.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">Platform</h5>
            <ul className="space-y-2">
              {internalNav.platform.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">Sectors & Updates</h5>
            <ul className="space-y-2">
              {internalNav.sectors.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">Connect</h5>
            <ul className="space-y-2">
              {externalConnect.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          PrimusNeo — governance for the next build cycle.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
