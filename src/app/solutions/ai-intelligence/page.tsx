import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'AI & Spatial Intelligence',
  description: 'Break through the $1B training barrier and resolve the data silo crisis. PrimusNeo provides the federated infrastructure for Large World Models and Physical AI.',
};

const AIIntelligencePage = () => {
  const stats = [
    { value: '4,300%', label: 'Training cost surge since 2020 (Visual Capitalist)' },
    { value: '$1B', label: 'Expected 2027 training run (Anthropic)' },
    { value: '68%', label: 'Organizations citing data silos (World Labs)' },
    { value: '$60B', label: 'Geospatial AI Market 2025 (MarketsandMarkets)' }
  ];

  const challenges = [
    {
      title: 'The Training Barrier',
      description: 'AI training costs have skyrocketed by over 4,300% since 2020, creating a massive barrier to entry for all but the largest frontier labs.',
      metric: '4,300%',
      metricLabel: 'Increase in development costs [Visual Capitalist]'
    },
    {
      title: 'The Silo Crisis',
      description: '68% of organizations cite data silos as their top concern. Spatial AI is uniquely fragmented across proprietary Lidar, Satellite, and IoT protocols.',
      metric: '68%',
      metricLabel: 'of orgs blocked by silos [World Labs]'
    },
    {
      title: 'Computational Waste',
      description: 'Centralized cloud dependencies force a massive "Coordination Tax" on data movement, slowing down real-time navigation and 3D reasoning.',
      metric: '56%',
      metricLabel: 'struggle with 1,000+ data sources [Harness]'
    }
  ];

  const features = [
    {
      eyebrow: 'Architecture',
      title: 'Federated World Models',
      description: 'Distribute the training and inference of Large World Models (LWMs) across a federated network of local-first nodes, reducing the $1B cost barrier.'
    },
    {
      eyebrow: 'Intelligence',
      title: 'Physical AI Reasoning',
      description: 'Enable AI to reason about 3D physical space, depth, and movement through the Fractal Engine’s peer-to-peer analytics layer.'
    },
    {
      eyebrow: 'Resiliency',
      title: 'Local-First Spatial Inference',
      description: 'Move intelligence to the edge. Run complex spatial simulations and navigation logic locally, ensuring 100% uptime for autonomous systems.'
    }
  ];

  const layers = [
    {
      title: 'AMP Runtime',
      description: 'The operational foundation for real-time digital twins and high-fidelity 3D spatial environments.'
    },
    {
      title: 'NEOS Agreements',
      description: 'Define the rules for AI agency, data privacy, and permissioned access to sensitive spatial datasets.'
    },
    {
      title: 'OASIS Rewards',
      description: 'Incentivize data contributors and GPU providers through cryptographic participation and verifiable contribution tracking.'
    },
    {
      title: 'Fractal Engine',
      description: 'Cross-deployment organizational memory that allows AI agents to learn from federated real-world states.'
    }
  ];

  const useCase = {
    title: 'Autonomous Industrial Campus',
    description: 'A logistics campus uses PrimusNeo to train a local spatial model for 500+ autonomous robots, coordinating movement without relying on centralized cloud latency.',
    outcomes: [
      'Eliminated "blind spot" data silos via AMP spatial OS',
      '90% reduction in training costs through federated learning',
      'Programmatic safety policies enforced via NEOS rules',
      'Real-time situational awareness persisted in the Fractal Engine'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="AI & Spatial Intelligence"
      title="Moving from words to worlds."
      description="Resolve the data silo crisis and break the $1B barrier with federated infrastructure for the next generation of Physical AI."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Physical AI"
    />
  );
};

export default AIIntelligencePage;
