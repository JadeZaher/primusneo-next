import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Community Cooperative & Local Network Solutions | PrimusNeo',
  description: 'Empower local communities and cooperatives with privacy-first coordination tools. Governed ownership, p2p communication, and collaborative asset management.',
};

const CommunityCoopsPage = () => {
  const features = [
    {
      title: 'Privacy-First Coordination',
      description: 'Communicate and coordinate through offline-capable, p2p channels that respect community privacy and data sovereignty.'
    },
    {
      title: 'Governed Shared Ownership',
      description: 'Manage community-owned assets—from land to equipment—with transparent participation rights and fair distribution models.'
    },
    {
      title: 'Collaborative Mapping',
      description: 'Map local resources, requirements, and outcomes in a shared 3D spatial environment that anyone can contribute to.'
    }
  ];

  const layers = [
    {
      title: 'AMP Community OS',
      description: 'The p2p operating system for community coordination, mapping, and private communication.'
    },
    {
      title: 'NEOS Governance',
      description: 'Simple, powerful governance for community councils, roles, and shared resource policies.'
    },
    {
      title: 'OASIS Identity',
      description: 'Sovereign identity for community members, enabling participation without centralized surveillance.'
    },
    {
      title: 'Fractal Engine',
      description: 'Track community health, asset performance, and shared milestones over time.'
    }
  ];

  const useCase = {
    title: 'Local Energy Cooperative',
    description: 'A neighborhood uses PrimusNeo to manage their shared solar grid and coordinate maintenance through private p2p channels.',
    outcomes: [
      '100% community data sovereignty',
      'Transparent tracking of shared energy use',
      'Fair, community-led decision-making',
      'Resilient coordination during internet outages'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Community"
      title="Technology for local sovereignty."
      description="PrimusNeo provides the tools for communities to own their data, govern their assets, and coordinate their futures."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Start Your Community Network"
    />
  );
};

export default CommunityCoopsPage;
