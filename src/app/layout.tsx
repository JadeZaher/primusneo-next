// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import { operator } from '@/content/operator';
import { AttributionCapture } from './_components/AttributionCapture';
import NavBar from './_components/navigation/navbar';
import Footer from './_components/navigation/footer';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-archivo-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primusneo.com').replace(/\/$/, '');

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PrimusNeo | Federated Operational Infrastructure',
    template: '%s | PrimusNeo',
  },
  description: 'One source of truth for the real world. PrimusNeo coordinates AMP digital twins, NEOS governance, AZOA interoperability, and Fractal Engine intelligence in one governed, modular stack, with Elevate Impact for research.',
  applicationName: 'PrimusNeo',
  keywords: ['AI', 'Governance', 'Digital Twins', 'Spatial Intelligence', 'Federated Infrastructure', 'Web3', 'Blockchain', 'P2P', 'Real World Assets', 'Coordination Layer'],
  authors: [{ name: 'Escherbridge' }],
  creator: 'Escherbridge',
  publisher: 'Escherbridge',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'PrimusNeo',
    title: 'PrimusNeo | Federated Operational Infrastructure',
    description: 'One source of truth for the real world — digital twins, governance, identity, and analytics coordinated through shared interfaces.',
    images: [
      {
        url: '/images/ampheader.png',
        width: 1200,
        height: 630,
        alt: 'PrimusNeo — Federated Operational Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/ampheader.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

/** Public identity for structured data. Canonical and Open Graph stay on metadataBase. */
const CANONICAL_ORIGIN = 'https://primusneo.com';

const sisterOrganizations = [
  { name: 'NEOS', url: 'https://neos.primusneo.com' },
  { name: 'AZOA', url: 'https://azoa.ardanova.com' },
  { name: 'ArdaNova', url: 'https://ardanova.com' },
  { name: 'Aevani', url: 'https://aevani.com' },
  { name: 'PlantGeo', url: 'https://plantgeo.aevani.com' },
  { name: 'OverseasGenAI', url: 'https://overseasgenai.com' },
  { name: 'Glitxz', url: 'https://glitxz.com' },
].map((site) => ({
  '@type': 'Organization',
  name: site.name,
  url: site.url,
}));

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${CANONICAL_ORIGIN}/#organization`,
      name: 'PrimusNeo',
      url: CANONICAL_ORIGIN,
      email: operator.email,
      logo: {
        '@type': 'ImageObject',
        url: `${CANONICAL_ORIGIN}/images/logo-primus-neo.png`,
      },
      parentOrganization: {
        '@type': 'Organization',
        '@id': 'https://escherbridge.com/#organization',
        name: operator.entity,
        url: 'https://escherbridge.com/',
        email: operator.email,
        subOrganization: [{ '@id': `${CANONICAL_ORIGIN}/#organization` }, ...sisterOrganizations],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'inquiries',
        email: operator.email,
      },
      // NEOS and AZOA are layers of this lab. Sibling projects belong to the operator, not to sameAs.
      subOrganization: sisterOrganizations.filter((site) => site.name === 'NEOS' || site.name === 'AZOA'),
      sameAs: ['https://escherbridge.com/', 'https://plan-systems.org/'],
      description:
        'Federated operational infrastructure for real-world environments — coordinating digital twins, governance, identity, and spatial analytics. Operated by Escherbridge, LLC.',
    },
    {
      '@type': 'WebSite',
      '@id': `${CANONICAL_ORIGIN}/#website`,
      url: CANONICAL_ORIGIN,
      name: 'PrimusNeo',
      publisher: { '@id': `${CANONICAL_ORIGIN}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
      <AttributionCapture />
      <div className="min-h-screen bg-ink text-paper font-archivo">
        <NavBar />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      </body>
    </html>
  );
};

export default RootLayout;