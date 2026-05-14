
const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <h4 className="text-2xl font-bold text-white text-glow">
              PrimusNeo
            </h4>
            <p className="max-w-md text-gray-400">
              A federated operational infrastructure for real-world systems. Connecting AMP,
              NEOS, OASIS, and Fractal Engine into an AI-assisted builder ecosystem.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">Platform</h5>
            <ul className="space-y-2">
              <li><a href="/amp" className="text-gray-400 transition hover:text-white">AMP</a></li>
              <li><a href="/governance-platform" className="text-gray-400 transition hover:text-white">Governance</a></li>
              <li><a href="/fractal-engine" className="text-gray-400 transition hover:text-white">Fractal Engine</a></li>
              <li><a href="/fractionalization" className="text-gray-400 transition hover:text-white">Fractionalization</a></li>
              <li><a href="/one-pager" className="text-gray-400 transition hover:text-white">Stack</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/70">Connect</h5>
            <ul className="space-y-2">
              <li><a href="https://plan-systems.org/" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">AMP</a></li>
              <li><a href="/contact" className="text-gray-400 transition hover:text-white">Contact</a></li>
              <li><a href="https://escherbridge.com/" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">Escherbridge</a></li>
              <li><a href="https://www.greenearthvision.org/omnione-1" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">OmniOne / NEOS</a></li>
              <li><a href="https://oasisweb4.com/" target="_blank" rel="noreferrer" className="text-gray-400 transition hover:text-white">OASIS Web4</a></li>
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
