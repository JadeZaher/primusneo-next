import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Institutional Investment & Finance Solutions | PrimusNeo',
  description: 'Bring transparency and efficiency to institutional finance. Governed fractionalization, real-time asset reporting, and compliance-first capital design.',
};

const InstitutionalInvestmentPage = () => {
  const features = [
    {
      title: 'Governed Fractionalization',
      description: 'Design and deploy asset-backed participation models with clear rights, responsibilities, and distribution logic.'
    },
    {
      title: 'Real-Time Transparency',
      description: 'Provide investors with a live window into asset performance, financial models, and governance decisions.'
    },
    {
      title: 'Compliance-First Rails',
      description: 'Onboard qualified participants through jurisdiction-aware flows and secure, QUSDC-compatible distribution rails.'
    }
  ];

  const layers = [
    {
      title: 'NEOS Governance',
      description: 'Immutable records of capital allocation, council decisions, and performance reporting.'
    },
    {
      title: 'OASIS Smart Contracts',
      description: 'The underlying ledger for ownership, participation rights, and automated distributions.'
    },
    {
      title: 'Fractal Engine',
      description: 'Advanced financial analytics and risk modeling based on real-world operational data.'
    },
    {
      title: 'AMP Documentation',
      description: 'Secure data rooms and spatial evidence for asset due diligence and reporting.'
    }
  ];

  const useCase = {
    title: 'Renewable Energy Fund',
    description: 'An investment fund uses PrimusNeo to fractionalize a portfolio of solar assets, providing 1000+ participants with real-time performance data.',
    outcomes: [
      'Automated quarterly distributions',
      'Increased investor trust through live data',
      'Reduced administrative overhead by 40%',
      'Transparent governance for capital allocation'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Finance"
      title="The future of transparent capital."
      description="PrimusNeo provides the infrastructure for credible, asset-backed participation in a global digital economy."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Discover Institutional Solutions"
    />
  );
};

export default InstitutionalInvestmentPage;
