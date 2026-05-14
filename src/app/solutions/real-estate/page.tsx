import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Real Estate & Property Development Solutions | PrimusNeo',
  description: 'Transform property development with digital twins, spatial intelligence, and governed asset management. Coordinate construction, operations, and fractional ownership on one platform.',
};

const RealEstatePage = () => {
  const features = [
    {
      title: 'Digital Twin Operations',
      description: 'Connect live telemetry, BIM data, and spatial maps into a unified operational dashboard for property managers and developers.'
    },
    {
      title: 'Fractionalized Capital',
      description: 'Unlock liquidity and attract a global pool of participants through governed, asset-backed fractionalization models.'
    },
    {
      title: 'Lifecycle Governance',
      description: 'Manage decisions from acquisition through construction and long-term stewardship with transparent, NEOS-backed decision trails.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Field-ready 3D maps and coordination channels for construction sites and community management.'
    },
    {
      title: 'NEOS Governance',
      description: 'Define roles, voting rights, and distribution policies for project-level stakeholders.'
    },
    {
      title: 'OASIS Smart Assets',
      description: 'Secure, interoperable identity and ownership records for property-backed units.'
    },
    {
      title: 'Fractal Engine',
      description: 'Predictive analytics for occupancy, maintenance, and asset performance trends.'
    }
  ];

  const useCase = {
    title: 'Urban Mixed-Use Development',
    description: 'A developer uses PrimusNeo to manage a multi-phase project, coordinating 50+ contractors while offering fractional participation to the local community.',
    outcomes: [
      '30% reduction in operational fragmentation',
      'Community-led governance for local amenities',
      'Real-time transparency for project investors',
      'Automated maintenance alerts via digital twin signals'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Real Estate"
      title="The operating system for modern property development."
      description="From spatial intelligence to governed ownership, PrimusNeo provides the connective tissue for high-impact real-world assets."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Explore Real Estate Solutions"
    />
  );
};

export default RealEstatePage;
