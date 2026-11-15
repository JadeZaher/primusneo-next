import Link from 'next/link';

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 ? (
            <span className="px-2" aria-hidden="true">
              /
            </span>
          ) : null}
          {item.href ? (
            <Link href={item.href} className="hover:text-paper">
              {item.label}
            </Link>
          ) : (
            <span className="text-mist">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
