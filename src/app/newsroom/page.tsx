import Link from 'next/link';
import { JsonLd } from '../_components/JsonLd';
import { WritingNav } from '../_components/WritingNav';
import { newsItems } from '@/content/news';
import { breadcrumbList, collectionNode, graph } from '@/lib/jsonld';

export const metadata = {
  title: 'Newsroom',
  description:
    'Dated announcements from the PrimusNeo lab: the site, the layers, Tie Town, and Elevate Impact. A short boilerplate and the logo files we actually have.',
  alternates: {
    canonical: '/newsroom',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    title: 'Newsroom | PrimusNeo',
    description: 'Announcements with dates and links. No invented launches.',
    url: '/newsroom',
    type: 'website',
  },
};

const logos = [
  { href: '/images/logo-primus-neo.png', label: 'Wordmark PNG' },
  { href: '/logo512.png', label: 'Mark, 512px' },
];

const items = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

export default function NewsroomPage() {
  return (
    <main className="bg-ink text-paper">
      <JsonLd
        data={graph(
          collectionNode({
            name: 'Newsroom',
            description: 'Announcements with dates and links. No invented launches.',
            path: '/newsroom',
            items: items.map((item) => ({ name: item.title, path: `/newsroom/${item.slug}` })),
          }),
          breadcrumbList([
            { name: 'Home', path: '/' },
            { name: 'Newsroom', path: '/newsroom' },
          ]),
        )}
      />
      <header className="mx-auto max-w-[1600px] px-7 pb-16 pt-32 md:pt-40">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Newsroom</div>
        <h1 className="mt-5 max-w-[12ch] text-balance text-[clamp(48px,7vw,112px)] font-medium leading-[0.94] tracking-[-0.04em]">
          What changed, with the date on it.
        </h1>
        <p className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-mist">
          Announcements drawn from the site and the public repositories. If a sentence needed a launch party to be true, it is not here.
        </p>
        <WritingNav current="/newsroom" />
      </header>

      <section className="mx-auto max-w-[1600px] border-t border-white/10 px-7">
        {items.map((item, index) => (
          <Link
            key={item.slug}
            href={`/newsroom/${item.slug}`}
            className="group grid gap-4 border-b border-white/10 py-9 transition-colors hover:bg-white/[0.02] md:grid-cols-[120px_minmax(0,1.4fr)_minmax(0,1fr)] md:items-baseline md:gap-8 md:px-2"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
              <time dateTime={item.date} className="mt-2 block">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  timeZone: 'UTC',
                })}
              </time>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{item.kicker}</div>
              <h2 className="text-[clamp(26px,3vw,40px)] font-medium leading-tight tracking-[-0.03em] group-hover:text-accent">
                {item.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-mist">{item.excerpt}</p>
          </Link>
        ))}
      </section>

      <section id="press-kit" className="border-t border-white/10 bg-ink-deep px-7 py-24">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Press kit</div>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(32px,4vw,56px)] font-medium leading-[1.05] tracking-[-0.03em]">
              Boilerplate, logos, and the form.
            </h2>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-mist">
              PrimusNeo is the technology innovation lab behind a federated stack: AMP, the operational runtime;{' '}
              <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://neos.primusneo.com">NEOS</a>, agreements and permissions;{' '}
              <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://azoa.ardanova.com">AZOA</a>, identity, consent, and settlement; Fractal Engine, organizational memory. Elevate Impact is the research-enablement module, live with the sickle cell community. Tie Town, in McDade, Texas, is the first live deployment. OVERSEASGENAI is the venture shipyard. OPQPWR is the named on-prem partner. No on-prem deployment of the stack is running.{' '}
              <a className="text-paper underline decoration-white/30 underline-offset-4 hover:text-accent" href="https://ardanova.com">ArdaNova</a> is a designed consumer of the settlement layer, not a live deployment, and it has made no token offering.
            </p>
            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-mist">
              For press, use the contact form and say it is for press. The operator&apos;s email, phone, and mailing address are on that page.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex bg-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-accent hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="border border-white/10 px-7 py-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Logo files</h3>
            <ul className="mt-6 space-y-4">
              {logos.map((logo) => (
                <li key={logo.href} className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-4">
                  <span>{logo.label}</span>
                  <a href={logo.href} className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent" download>
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
