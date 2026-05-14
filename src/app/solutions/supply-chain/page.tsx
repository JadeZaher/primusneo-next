import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Supply Chain & Logistics Solutions | PrimusNeo',
  description: 'Optimize global supply chains with real-time tracking, digital twins, and governed coordination. Enhance transparency and reduce fragmentation in complex logistics networks.',
};

const SupplyChainPage = () => {
  const features = [
    {
      title: 'Real-Time Asset Tracking',
      description: 'Monitor the movement and status of assets across global networks with content-addressed data and spatial OS integration.'
    },
    {
      title: 'Digital Twin Logistics',
      description: 'Visualize warehouse operations, shipping routes, and inventory levels within a high-fidelity 3D environment.'
    },
    {
      title: 'Governed Coordination',
      description: 'Streamline interactions between shippers, carriers, and port operators with immutable decision trails and automated agreements.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Coordinate field operations and track assets in real-time with offline-capable p2p networking.'
    },
    {
      title: 'OASIS Interoperability',
      description: 'Bridge disparate logistics platforms and data silos through a unified Web4 fabric.'
    },
    {
      title: 'NEOS Policies',
      description: 'Manage access rights, operational protocols, and compliance records across multiple partners.'
    },
    {
      title: 'Fractal Engine',
      description: 'Analyze supply chain velocity and identify bottlenecks through deep intelligence and historical data.'
    }
  ];

  const useCase = {
    title: 'International Shipping Hub',
    description: 'A major port operator uses PrimusNeo to coordinate vessel docking, cargo handling, and inland logistics across 20+ stakeholders.',
    outcomes: [
      '20% improvement in turnaround time',
      'End-to-end transparency for cargo owners',
      'Reduced document processing overhead',
      'Real-time situational awareness for port staff'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Logistics"
      title="Intelligence for global movement."
      description="PrimusNeo connects physical assets with digital governance to create more resilient and transparent supply chains."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Streamline Your Supply Chain"
    />
  );
};

export default SupplyChainPage;
