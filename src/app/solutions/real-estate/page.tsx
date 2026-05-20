import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Real Estate & Property Development',
  description: 'Transform property development with digital twins, spatial intelligence, and governed asset management. Coordinate construction, operations, and fractional ownership on one platform.',
};

const RealEstatePage = () => {
  const stats = [
    { value: '$1.85T', label: 'Annual cost of bad data (Construction Week)' },
    { value: '30%', label: 'Material waste on site (BigRentz)' },
    { value: '40%', label: 'Global CO2 emissions (The NBS)' },
    { value: '97%', label: 'Firms with <10 employees (Eolas)' }
  ];

  const challenges = [
    {
      title: 'Extreme Fragmentation',
      description: 'The industry is composed of millions of small players using disconnected tools. This lack of standardization makes scaling innovation nearly impossible.',
      metric: '97%',
      metricLabel: 'of firms have <10 staff [Eolas]'
    },
    {
      title: 'Resource Inefficiency',
      description: 'Current construction methods result in massive material waste and high carbon impact, with design-to-execution gaps leading to frequent budget overruns.',
      metric: '30%',
      metricLabel: 'of materials are wasted [BigRentz]'
    },
    {
      title: 'The Productivity Gap',
      description: 'While manufacturing productivity has grown by 90% since 2000, construction has remained stagnant at just 10% growth due to data silos.',
      metric: '9x',
      metricLabel: 'Manufacturing vs Construction [McKinsey]'
    }
  ];

  const features = [
    {
      eyebrow: 'Operations',
      title: 'Digital Twin Coordination',
      description: 'Bridge the design-execution gap by connecting BIM data, live telemetry, and spatial maps into a unified operational dashboard.'
    },
    {
      eyebrow: 'Capital',
      title: 'Governed Fractionalization',
      description: 'Unlock liquidity in real-world assets through secure, asset-backed fractionalization models that allow for community-led participation.'
    },
    {
      eyebrow: 'Management',
      title: 'Lifecycle Transparency',
      description: 'Replace manual data entry with automated, NEOS-backed decision trails that ensure accountability from acquisition to long-term stewardship.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'High-fidelity 3D maps and real-time coordination for construction sites and large-scale property management.'
    },
    {
      title: 'NEOS Governance',
      description: 'Programmatic rules for voting, distributions, and role-based access across the entire asset lifecycle.'
    },
    {
      title: 'OASIS Identity',
      description: 'Secure, interoperable ownership records and identity verification for stakeholders and participants.'
    },
    {
      title: 'Fractal Engine',
      description: 'Cross-layer analytics to predict maintenance needs, occupancy trends, and financial performance.'
    }
  ];

  const useCase = {
    title: 'Governed Urban Development',
    description: 'A multi-phase mixed-use project uses PrimusNeo to coordinate 50+ contractors while offering governed fractional ownership to the local community.',
    outcomes: [
      'Unified data layer bridging design and site teams',
      'Programmatic community dividend distributions via NEOS',
      'Eliminated data silos through AMP-native spatial coordination',
      'Verifiable ESG reporting anchored in digital twin signals'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Real Estate & Property"
      title="The operating system for high-impact real-world assets."
      description="Resolve the $1.8 trillion data fragmentation crisis in construction and real estate with a unified layer for spatial coordination and governed ownership."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Contact our RE Team"
    />
  );
};

export default RealEstatePage;
