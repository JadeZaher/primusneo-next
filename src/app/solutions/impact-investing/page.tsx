import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Impact Investing',
  description: 'Verify real-world outcomes and resolve the greenwashing crisis. PrimusNeo provides the federated infrastructure for transparent, data-driven impact investing.',
};

const ImpactInvestingPage = () => {
  const stats = [
    { value: '$1.57T', label: 'Global Impact Market size (GIIN)' },
    { value: '30%', label: 'Surge in high-severity greenwashing' },
    { value: '68%', label: 'Execs admitting greenwashing tactics' },
    { value: '52%', label: 'Consumers skeptical of ESG claims' }
  ];

  const challenges = [
    {
      title: 'The Greenwashing Paradox',
      description: 'While generic greenwashing cases are dipping, high-severity cases surged by 30% in 2025. 68% of executives admit to using misleading ESG tactics.',
      metric: '+30%',
      metricLabel: 'High-severity greenwashing [GIIN]'
    },
    {
      title: 'The Trust Gap',
      description: '52% of consumers now believe organizations are greenwashing their initiatives, up from 33% in 2023. Impact claims are increasingly dismissed without proof.',
      metric: '52%',
      metricLabel: 'of consumers are skeptical [Woola]'
    },
    {
      title: 'Reporting Fragmentation',
      description: 'Investors struggle with standardized benchmarking as impact data remains fragmented across proprietary systems and inconsistent materiality frameworks.',
      metric: '80%',
      metricLabel: 'Investors demand climate data [RepRisk]'
    }
  ];

  const features = [
    {
      eyebrow: 'Verification',
      title: 'Immutable Impact Trails',
      description: 'Replace "self-reported" claims with verifiable operational data anchored in the Fractal Engine, ensuring that every impact outcome is provable.'
    },
    {
      eyebrow: 'Transparency',
      title: 'Real-Time ESG Telemetry',
      description: 'Stream live environmental and social data from the field via AMP, providing investors with a continuous view of asset performance.'
    },
    {
      eyebrow: 'Accountability',
      title: 'Programmatic Impact Logic',
      description: 'Automate dividend distributions and capital calls based on verified impact milestones through the NEOS governance layer.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Real-time monitoring of physical impact projects, from reforestation sites to solar farms, within a 3D coordination layer.'
    },
    {
      title: 'NEOS Governance',
      description: 'Define transparent impact criteria and automated accountability rules for portfolio companies and fund managers.'
    },
    {
      title: 'OASIS Identity',
      description: 'Verifiable credentials for impact auditors and third-party verifiers to ensure the integrity of reporting.'
    },
    {
      title: 'Fractal Engine',
      description: 'Predictive analytics for impact performance, allowing investors to benchmark outcomes against global SDG goals.'
    }
  ];

  const useCase = {
    title: 'Verifiable Carbon Sequestration',
    description: 'An impact fund uses PrimusNeo to track a large-scale reforestation project, using Lidar telemetry and p2p data to verify carbon capture in real-time.',
    outcomes: [
      'Eliminated greenwashing risk via direct sensor proof',
      'Automated carbon credit issuance upon verified growth',
      'Real-time ESG dashboard for institutional LPs',
      'Immutable audit trail for regulatory compliance'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Impact Investing"
      title="Restoring value through verifiable impact."
      description="Resolve the $1.5 trillion trust crisis in impact investing with federated infrastructure that turns promises into provable operational intelligence."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Impact Models"
    />
  );
};

export default ImpactInvestingPage;
