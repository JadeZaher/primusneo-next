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
  { href: '/governance-platform', label: 'Governance Platform', desc: 'Councils, NEOS, decision rights, and contribution accounting' },
  { href: '/plan-systems', label: 'Plan Systems', desc: 'Spatial OS and peer-to-peer community tooling' },
  { href: '/oasis', label: 'OASIS Web4', desc: 'Universal interoperability fabric' },
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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <img 
            src="/images/logo-primus-neo.png" 
            loading="lazy" 
            alt="PrimusNeo Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Platform Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-300 transition hover:text-white">
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 p-4 bg-black">
                  {platformItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.07]"
                        >
                          <div className="text-sm font-semibold text-white">{item.label}</div>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Capital Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-300 transition hover:text-white">
                Capital
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-4">
                  {capitalItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.07]"
                        >
                          <div className="text-sm font-semibold text-white">{item.label}</div>
                          <p className="text-xs text-gray-400">{item.desc}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-300 transition hover:text-white">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-1 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.07]">
                        <div className="text-sm font-semibold text-white">Home</div>
                        <p className="text-xs text-gray-400">Platform overview and mission</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/blog" className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.07]">
                        <div className="text-sm font-semibold text-white">Blog</div>
                        <p className="text-xs text-gray-400">Updates and deep dives</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className="block rounded-xl px-4 py-3 transition hover:bg-white/[0.07]">
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
        "border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden transition-all duration-300 overflow-hidden",
        isMenuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="px-4 py-4 space-y-5">
          {/* Platform group */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/60">Platform</div>
            <div className="space-y-1">
              <MobileLink href="/governance-platform" onClick={closeMenu}>Governance Platform</MobileLink>
              <MobileLink href="/plan-systems" onClick={closeMenu}>Plan Systems</MobileLink>
              <MobileLink href="/oasis" onClick={closeMenu}>OASIS Web4</MobileLink>
            </div>
          </div>

          {/* Capital group */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/60">Capital</div>
            <div className="space-y-1">
              <MobileLink href="/fractionalization" onClick={closeMenu}>Fractionalization</MobileLink>
              <MobileLink href="/ico-marketing" onClick={closeMenu}>ICO Refit</MobileLink>
            </div>
          </div>

          {/* About group */}
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/60">About</div>
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
    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;