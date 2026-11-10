import Link from 'next/link';

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/guides', label: 'Guides' },
  { href: '/papers', label: 'Papers' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/futures', label: 'Futures' },
  { href: '/feed.xml', label: 'RSS' },
];

export const WritingNav = ({ current }) => (
  <nav aria-label="Writing" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
    {links.map((link) => {
      const active = link.href === current;
      return (
        <Link
          key={link.href}
          href={link.href}
          aria-current={active ? 'page' : undefined}
          className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
            active ? 'text-accent' : 'text-faint hover:text-paper'
          }`}
        >
          {link.label}
        </Link>
      );
    })}
  </nav>
);

export default WritingNav;
