import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Smart Infrastructure & IoT Solutions | PrimusNeo',
  description: 'Connect physical assets with digital intelligence. Manage smart cities, industrial IoT, and decentralized infrastructure with real-time spatial OS and digital twins.',
};

const SmartInfrastructurePage = () => {
  const stats = [
    { value: '$15T', label: 'Investment gap by 2040 (WEF)' },
    { value: '$1T', label: 'Annual efficiency savings (World Bank)' },
    { value: '3.5%', label: 'Global GDP required (Allianz)' },
    { value: '50%+', label: 'Energy cost potential (ITU)' }
  ];

  const challenges = [
    {
      title: 'The $15 Trillion Funding Gap',
      description: 'Current projections estimate a massive global shortfall in infrastructure investment, requiring a 3.5% allocation of global GDP annually to meet sustainability goals.',
      metric: '$15T',
      metricLabel: 'Projected shortfall by 2040 [WEF]'
    },
    {
      title: 'Operational Inefficiency',
      description: 'Aging systems and disconnected management lead to significant resource waste. Improving efficiency could save the global economy over $1 trillion per year.',
      metric: '$1T',
      metricLabel: 'Potential annual savings [World Bank]'
    },
    {
      title: 'Aging Asset Management',
      description: 'Municipalities struggle to extend the life of aging infrastructure due to a lack of predictive data, leading to reactive and costly maintenance cycles.',
      metric: '50%+',
      metricLabel: 'Energy cost potential [ITU]'
    }
  ];

  const features = [
    {
      eyebrow: 'Efficiency',
      title: 'Predictive Resource Optimization',
      description: 'Leverage IoT telemetry and digital twins to reduce municipal energy consumption and water loss through automated, data-driven management.'
    },
    {
      eyebrow: 'Capital',
      title: 'Public-Private Coordination',
      description: 'Bridge the funding gap by enabling transparent, governed private investment into public infrastructure projects with programmatic distribution models.'
    },
    {
      eyebrow: 'Stewardship',
      title: 'Automated Asset Lifecycle',
      description: 'Use the Fractal Engine to predict failures before they happen, extending the life of physical assets and reducing long-term maintenance costs.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Real-time monitoring of utility grids, transportation networks, and urban environments via high-fidelity 3D maps.'
    },
    {
      title: 'NEOS Governance',
      description: 'Define transparent rules for public-private partnerships, usage fees, and maintenance fund allocations.'
    },
    {
      title: 'OASIS Identity',
      description: 'Secure identity and access management for critical infrastructure operators and maintenance teams.'
    },
    {
      title: 'Fractal Engine',
      description: 'Advanced analytics for predicting resource demand and optimizing city-wide infrastructure performance.'
    }
  ];

  const useCase = {
    title: 'Smart Utility Grid Coordination',
    description: 'A municipality integrates its water and energy grids into PrimusNeo to manage leak detection and peak-load balancing while coordinating private maintenance contractors.',
    outcomes: [
      'Reduced non-revenue water loss via AMP-integrated IoT sensors',
      'Milestone-based contractor payments automated via NEOS',
      'End-to-end transparency for public-private capital partners',
      'Predictive maintenance cycles managed by the Fractal Engine'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Smart Infrastructure"
      title="Bridging the $15 trillion global investment gap."
      description="Modernize aging infrastructure and optimize urban resources with a unified platform for spatial intelligence and governed coordination."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Infrastructure"
    />
  );
};

export default SmartInfrastructurePage;
