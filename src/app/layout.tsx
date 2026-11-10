// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';
import localFont from 'next/font/local';
import { operator, operatorPostalAddress } from '@/content/operator';
import { AttributionCapture } from './_components/AttributionCapture';
import NavBar from './_components/navigation/navbar';
import Footer from './_components/navigation/footer';

// Self-hosted OFL files so the build does not fetch fonts.googleapis.com.
// Archivo is one variable file; 400–600 is the previous weight list.
// The unicode-range is the Google Fonts latin subset.
const archivo = localFont({
  src: '../fonts/Archivo-latin.woff2',
  weight: '400 600',
  style: 'normal',
  display: 'swap',
  variable: '--font-archivo-sans',
  adjustFontFallback: 'Arial',
  declarations: [
    { prop: 'font-family', value: 'Archivo' },
    { prop: 'font-stretch', value: '100%' },
    {
      prop: 'unicode-range',
      value:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
});

const plexMono = localFont({
  src: [
    {
      path: '../fonts/IBMPlexMono-Regular-latin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/IBMPlexMono-Medium-latin.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-plex-mono',
  adjustFontFallback: 'Arial',
  declarations: [
    { prop: 'font-family', value: 'IBM Plex Mono' },
    {
      prop: 'unicode-range',
      value:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
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
  manifest: '/manifest.json',
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
      address: operatorPostalAddress,
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
        address: operatorPostalAddress,
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