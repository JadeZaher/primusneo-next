import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Impact Investing & ReFi Solutions | PrimusNeo',
  description: 'Direct capital toward regenerative outcomes with transparent impact tracking and governed asset management. Tools for ReFi, impact funds, and community-led development.',
};

const ImpactInvestingPage = () => {
  const features = [
    {
      title: 'Transparent Impact Metrics',
      description: 'Track and verify regenerative outcomes—from carbon sequestration to social health—with spatial evidence and immutable logs.'
    },
    {
      title: 'Regenerative Capital Flows',
      description: 'Design and deploy funding models that reward long-term stewardship and sustainable asset development.'
    },
    {
      title: 'Community-Led Stewardship',
      description: 'Empower local stakeholders to participate in the governance and ownership of the assets that impact their environments.'
    }
  ];

  const layers = [
    {
      title: 'NEOS Governance',
      description: 'Configure stewardship policies, contribution rewards, and transparent reporting for impact-led projects.'
    },
    {
      title: 'AMP Spatial OS',
      description: 'Collect field-level data and spatial evidence to verify impact milestones and environmental health.'
    },
    {
      title: 'OASIS Interoperability',
      description: 'Connect with global ReFi protocols and impact-tracking standards through a unified fabric.'
    },
    {
      title: 'Fractal Engine',
      description: 'Long-term analytics and trend modeling for environmental and social impact outcomes.'
    }
  ];

  const useCase = {
    title: 'Reforestation & Carbon Credit Program',
    description: 'An impact fund uses PrimusNeo to manage a multi-site reforestation project, providing investors with real-time spatial evidence of growth.',
    outcomes: [
      'Verified environmental impact records',
      'Transparent distribution of carbon rewards',
      'High investor confidence via spatial evidence',
      'Collaborative stewardship with local land owners'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Impact & ReFi"
      title="Investing in a regenerative future."
      description="PrimusNeo connects impact capital with real-world outcomes through transparent governance and spatial evidence."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Launch Your Impact Strategy"
    />
  );
};

export default ImpactInvestingPage;
