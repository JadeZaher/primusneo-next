import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Developer Ecosystem & Open Source Solutions | PrimusNeo',
  description: 'Build and govern sustainable developer ecosystems. Integrated tooling for contribution accounting, interoperable APIs, and modular infrastructure.',
};

const DeveloperEcosystemsPage = () => {
  const features = [
    {
      title: 'Interoperable Fabric',
      description: 'Connect disparate tools and systems through OASIS, creating a unified developer experience across Web2 and Web3.'
    },
    {
      title: 'Contribution Stewardship',
      description: 'Implement transparent reward models and decision-making trails for open-source contributors and core teams.'
    },
    {
      title: 'Modular Architecture',
      description: 'Leverage the Fractal Engine and AMP to build reactive, spatial-aware applications with ease.'
    }
  ];

  const layers = [
    {
      title: 'OASIS Web4 Fabric',
      description: 'The universal connective layer for identity, data, and cross-system interoperability.'
    },
    {
      title: 'Fractal Engine SDK',
      description: 'Developer tools for building intelligence-driven applications and spatial analytics.'
    },
    {
      title: 'AMP Components',
      description: 'Reusable 2D and 3D UI primitives for spatial collaboration and p2p networking.'
    },
    {
      title: 'NEOS API',
      description: 'Programmatically manage governance roles, policies, and contribution flows.'
    }
  ];

  const useCase = {
    title: 'Open Source Infrastructure Project',
    description: 'A developer collective uses PrimusNeo to manage their core protocol development and community-led grant program.',
    outcomes: [
      'Typesafe coordination across 10+ teams',
      'Transparent grant allocation and tracking',
      'Seamless integration with existing CI/CD',
      'Sustained contributor growth and retention'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Developers"
      title="Built by builders, for builders."
      description="PrimusNeo provides the modular building blocks for the next generation of sovereign, interoperable software."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Start Building with PrimusNeo"
    />
  );
};

export default DeveloperEcosystemsPage;
