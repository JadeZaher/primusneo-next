import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Supply Chain & Logistics',
  description: 'Optimize global supply chains with real-time tracking, digital twins, and governed coordination. Enhance transparency and reduce fragmentation in complex logistics networks.',
};

const SupplyChainPage = () => {
  const stats = [
    { value: '6%', label: 'Full visibility rate (GEP)' },
    { value: '8%', label: 'Revenue lost to disruption (World Bank)' },
    { value: '$1T', label: 'Annual food waste toll (UNEP)' },
    { value: '20%+', label: 'Inefficiency overhead (LogiNext)' }
  ];

  const challenges = [
    {
      title: 'The Visibility Gap',
      description: 'Only 6% of businesses report having full end-to-end visibility into their supply chains, leading to massive blind spots and uncoordinated logistics.',
      metric: '94%',
      metricLabel: 'lack end-to-end visibility [GEP]'
    },
    {
      title: 'Fragmentation & Waste',
      description: 'Disruptions and poor coordination cost companies 8% of their annual revenue, contributing to a $1 trillion global food waste crisis.',
      metric: '8%',
      metricLabel: 'Avg. revenue loss [World Bank]'
    },
    {
      title: 'Infrastructure Overhead',
      description: 'In developing markets, logistics inefficiencies increase the final cost of goods by up to 20%, burdening both producers and consumers.',
      metric: '15-20%',
      metricLabel: 'Added cost of goods [LogiNext]'
    }
  ];

  const features = [
    {
      eyebrow: 'Visibility',
      title: 'Spatial Logistics Tracking',
      description: 'Bridge the visibility gap by tracking assets in high-fidelity 3D environments, ensuring real-time coordination across every node of the chain.'
    },
    {
      eyebrow: 'Coordination',
      title: 'Governed Multi-Party Logic',
      description: 'Automate handoffs and payments between independent logistics providers using NEOS-backed rules that reduce friction and fraud.'
    },
    {
      eyebrow: 'Impact',
      title: 'Waste Reduction Analytics',
      description: 'Use the Fractal Engine to identify bottlenecks and spoilage risks, directly addressing the $1 trillion food waste crisis.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'The foundation for real-time asset tracking and spatial coordination across global transit networks.'
    },
    {
      title: 'NEOS Governance',
      description: 'Programmatic contracts for multi-stakeholder logistics, from customs clearing to final mile delivery.'
    },
    {
      title: 'OASIS Identity',
      description: 'Verifiable credentials for carriers, drivers, and facility operators to ensure chain-of-custody integrity.'
    },
    {
      title: 'Fractal Engine',
      description: 'Predictive analytics for inventory optimization and identifying structural logistics bottlenecks.'
    }
  ];

  const useCase = {
    title: 'Governed Cold Chain Management',
    description: 'A global food distributor uses PrimusNeo to track temperature-sensitive assets across 12 countries, coordinating 30+ independent carriers.',
    outcomes: [
      'Replaced manual paperwork with immutable spatial trails',
      'Real-time spoilage risk mitigation via Fractal Engine alerts',
      'Verified chain-of-custody across all independent carriers',
      'Automated settlement upon verified delivery signals'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Supply Chain & Logistics"
      title="Resolving the global visibility crisis."
      description="Turn fragmented supply chains into coordinated networks with a unified layer for spatial tracking and governed multi-party logistics."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Optimize Your Chain"
    />
  );
};

export default SupplyChainPage;
