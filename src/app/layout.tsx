// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';
import Script from 'next/script';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
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
  description: 'One source of truth for the real world. PrimusNeo coordinates AMP digital twins, NEOS governance, AZOA interoperability, and Fractal Engine intelligence in one governed, modular stack.',
  applicationName: 'PrimusNeo',
  keywords: ['AI', 'Governance', 'Digital Twins', 'Spatial Intelligence', 'Federated Infrastructure', 'Web3', 'Blockchain', 'P2P', 'Real World Assets', 'Coordination Layer'],
  authors: [{ name: 'PrimusNeo' }],
  creator: 'PrimusNeo',
  publisher: 'PrimusNeo',
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
    title: 'PrimusNeo | Federated Operational Infrastructure',
    description: 'Federated operational infrastructure for real-world environments — AMP, NEOS, AZOA, and Fractal Engine in one stack.',
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'PrimusNeo',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-primus-neo.png`,
      },
      sameAs: [
        'https://escherbridge.com/',
        'https://plan-systems.org/',
      ],
      description: 'Federated operational infrastructure for real-world environments — coordinating digital twins, governance, identity, and spatial analytics.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'PrimusNeo',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
      <div className="min-h-screen bg-ink text-paper font-archivo">
        <NavBar />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </div>
      <Script
        id="ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      </body>
    </html>
  );
};

export default RootLayout;