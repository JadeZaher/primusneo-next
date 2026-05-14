// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';
import NavBar from './_components/navigation/navbar';
import Footer from './_components/navigation/footer';
export const metadata = {
  title: {
    default: 'PrimusNeo | Federated Operational Infrastructure',
    template: '%s | PrimusNeo',
  },
  description: 'An AI-assisted builder ecosystem for real-world environments. Coordinating specialized systems through shared interfaces for governance, spatial intelligence, and digital twins.',
  keywords: ['AI', 'Governance', 'Digital Twins', 'Spatial Intelligence', 'Federated Infrastructure', 'Web3', 'Blockchain', 'P2P'],
  authors: [{ name: 'PrimusNeo' }],
  creator: 'PrimusNeo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://primusneo.com',
    siteName: 'PrimusNeo',
    title: 'PrimusNeo | Federated Operational Infrastructure',
    description: 'An AI-assisted builder ecosystem for real-world environments.',
    images: [
      {
        url: '/images/ampheader.png',
        width: 1200,
        height: 630,
        alt: 'PrimusNeo Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimusNeo | Federated Operational Infrastructure',
    description: 'An AI-assisted builder ecosystem for real-world environments.',
    images: ['/images/ampheader.png'],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <div className="min-h-screen bg-black text-white font-switzer">
        <NavBar />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  );
};

export default RootLayout;