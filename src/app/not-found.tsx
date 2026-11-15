import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | PrimusNeo' },
  description: 'That address is not a page on primusneo.com.',
  robots: { index: false, follow: false },
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/industries', label: 'Industries' },
  { href: '/sitemap.xml', label: 'Sitemap' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <main className="bg-ink px-7 pb-24 pt-32 text-paper md:pt-40">
      <div className="mx-auto max-w-[68ch]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">404</p>
        <h1 className="mt-4 max-w-[14ch] text-[clamp(40px,6vw,84px)] font-medium leading-[0.98] tracking-[-0.035em]">
          This page is not here.
        </h1>
        <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-mist">
          The address does not match a page we publish. The front door, the notes, and the sitemap are still where we left them.
        </p>
        <ul className="mt-8 space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
