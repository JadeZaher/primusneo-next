"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '../navigation/navigation-menu';
import { Button } from '../ui/button';
import { cn } from '../../../lib/utils';

const platformItems = [
  { href: '/amp', label: 'AMP', desc: 'Art and Media Platform' },
  { href: '/governance-platform', label: 'Governance Platform', desc: 'Councils, NEOS, decision rights, and contribution accounting' },
  { href: '/azoa', label: 'AZOA', desc: 'Universal interoperability fabric' },
  { href: '/fractal-engine', label: 'Fractal Engine', desc: 'Analytics and spatial intelligence' },
  { href: '/one-pager', label: 'Stack Overview', desc: 'The complete platform at a glance' },
];

const capitalItems = [
  { href: '/fractionalization', label: 'Fractionalization', desc: 'Asset-backed ownership and participation' },
  { href: '/ico-marketing', label: 'ICO Refit', desc: 'Compliance-first capital design' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-ink/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-7">
        <Link
          href="/"
          className="flex-shrink-0 text-sm font-semibold tracking-[0.14em] text-paper"
        >
          PRIMUS—NEO<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Platform Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition hover:text-paper">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 border border-white/10 bg-ink p-4">
                    {platformItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 transition hover:bg-white/[0.05]"
                          >
                            <div className="text-sm font-medium text-paper">{item.label}</div>
                            <p className="text-xs text-mist">{item.desc}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Capital Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition hover:text-paper">
                  Capital
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 border border-white/10 bg-ink p-4">
                    {capitalItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 transition hover:bg-white/[0.05]"
                          >
                            <div className="text-sm font-medium text-paper">{item.label}</div>
                            <p className="text-xs text-mist">{item.desc}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries (single link, not a dropdown) */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    href="/industries"
                    className="bg-transparent font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition hover:text-paper"
                  >
                    Industries
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition hover:text-paper">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 border border-white/10 bg-ink p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/" className="block px-4 py-3 transition hover:bg-white/[0.05]">
                          <div className="text-sm font-semibold text-white">Home</div>
                          <p className="text-xs text-gray-400">Platform overview and mission</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog" className="block px-4 py-3 transition hover:bg-white/[0.05]">
                          <div className="text-sm font-semibold text-white">Blog</div>
                          <p className="text-xs text-gray-400">Updates and deep dives</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/contact" className="block px-4 py-3 transition hover:bg-white/[0.05]">
                          <div className="text-sm font-semibold text-white">Contact</div>
                          <p className="text-xs text-gray-400">Get in touch with the team</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/contact"
            className="bg-paper px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "border-t border-white/10 bg-ink/95 backdrop-blur-2xl md:hidden transition-all duration-300 overflow-hidden",
        isMenuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="px-4 py-4 space-y-5">
          {/* Platform group */}
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Platform</div>
            <div className="space-y-1">
              <MobileLink href="/amp" onClick={closeMenu}>AMP</MobileLink>
              <MobileLink href="/governance-platform" onClick={closeMenu}>Governance Platform</MobileLink>
              <MobileLink href="/azoa" onClick={closeMenu}>AZOA</MobileLink>
              <MobileLink href="/fractal-engine" onClick={closeMenu}>Fractal Engine</MobileLink>
            </div>
          </div>

          {/* Capital group */}
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Capital</div>
            <div className="space-y-1">
              <MobileLink href="/fractionalization" onClick={closeMenu}>Fractionalization</MobileLink>
              <MobileLink href="/ico-marketing" onClick={closeMenu}>ICO Refit</MobileLink>
            </div>
          </div>

          {/* Industries (single link) */}
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Sectors</div>
            <div className="space-y-1">
              <MobileLink href="/industries" onClick={closeMenu}>Industries</MobileLink>
              <MobileLink href="/solutions" onClick={closeMenu}>Solutions</MobileLink>
            </div>
          </div>

          {/* About group */}
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">About</div>
            <div className="space-y-1">
              <MobileLink href="/" onClick={closeMenu}>Home</MobileLink>
              <MobileLink href="/one-pager" onClick={closeMenu}>Stack Overview</MobileLink>
              <MobileLink href="/blog" onClick={closeMenu}>Blog</MobileLink>
              <MobileLink href="/contact" onClick={closeMenu}>Contact</MobileLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileLink = ({ href, onClick, children }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-sm font-medium text-mist transition hover:bg-white/[0.05] hover:text-paper"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;