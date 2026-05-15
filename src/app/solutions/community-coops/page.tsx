import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Community & Cooperative Solutions | PrimusNeo',
  description: 'Empower localized coordination and resolve governance resilience issues. PrimusNeo provides the federated infrastructure for sustainable communities and cooperatives.',
};

const CommunityCoopsPage = () => {
  const stats = [
    { value: '01', label: 'Active Operational Deployment (Tie Town)' },
    { value: '42%', label: 'Skills lost during contributor attrition' },
    { value: '$830B', label: 'Annual loss to governance breakdowns' },
    { value: '200h', label: 'Average time to replace key contributors' }
  ];

  const challenges = [
    {
      title: 'Institutional Amnesia',
      description: 'Up to 42% of specific skills and tacit knowledge disappear when key contributors leave without a formal transfer process, stalling project continuity.',
      metric: '42%',
      metricLabel: 'Skills lost at exit [Fullscale]'
    },
    {
      title: 'Coordination Friction',
      description: 'Media houses and creator collectives struggle to coordinate high-scale technical deployments without a unified operational layer, leading to lost velocity.',
      metric: '68%',
      metricLabel: 'Coordination Tax [McKinsey]'
    },
    {
      title: 'The Succession Gap',
      description: 'Lack of awareness and poor documentation make succession the #1 barrier to community coordination, with onboarding costs exceeding 200 hours per hire.',
      metric: '200h',
      metricLabel: 'Onboarding proficiency cost [USask]'
    }
  ];

  const features = [
    {
      eyebrow: 'Architecture',
      title: 'Creator-Centric Infrastructure',
      description: 'Empower media houses and creator collectives with local-first operational tools that prioritize platforming next-generation technologies.'
    },
    {
      eyebrow: 'Memory',
      title: 'Operational Continuity',
      description: 'Capture institutional knowledge and creator memory through the Fractal Engine, ensuring project velocity is maintained through contributor cycles.'
    },
    {
      eyebrow: 'Platforming',
      title: 'Unified Technology Stack',
      description: 'Coordinate complex technical deployments across distributed builder networks using the shared standards of the PrimusNeo federation.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Real-time coordination for physical creator houses and decentralized media environments.'
    },
    {
      title: 'NEOS Agreements',
      description: 'Programmatic rules for role-based access, content rights, and community-led resource distribution.'
    },
    {
      title: 'OASIS Identity',
      description: 'Verifiable credentials for creators and builders, ensuring privacy and integrity in the media ecosystem.'
    },
    {
      title: 'Fractal Engine',
      description: 'The organizational memory layer that persists technical research and operational history.'
    }
  ];

  const useCase = {
    title: 'Tie Town: Media & Creator House',
    description: 'Based in McDade, Texas, Tie Town uses PrimusNeo as its operational foundation to platform next-generation technologies and coordinate creator workstreams.',
    outcomes: [
      'Active operational deployment in McDade, Texas',
      'Unified coordination for high-scale media production',
      'Verifiable contributor memory via Fractal Engine',
      'Programmatic access control for creator facilities'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Community & Cooperatives"
      title="Platforming the next generation."
      description="From creator houses to decentralized media, PrimusNeo provides the federated infrastructure to coordinate high-impact technical ecosystems."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Creator Models"
    />
  );
};

export default CommunityCoopsPage;
