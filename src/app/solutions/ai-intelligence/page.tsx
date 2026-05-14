import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'AI & Organizational Intelligence Solutions | PrimusNeo',
  description: 'Scale your organization with AI-assisted memory and intelligence. Connect real-time operational data with powerful LLMs through the Fractal Engine and NEOS governance.',
};

const AiIntelligencePage = () => {
  const features = [
    {
      title: 'Organizational Memory',
      description: 'Capture and index every decision, document, and operational signal into a searchable, AI-ready intelligence layer.'
    },
    {
      title: 'Governed AI Agents',
      description: 'Deploy AI agents with role-based authority and clear policy boundaries defined within the NEOS framework.'
    },
    {
      title: 'Spatial Intelligence',
      description: 'Ingest 3D data and environmental telemetry to provide AI with the spatial context needed for real-world operations.'
    }
  ];

  const layers = [
    {
      title: 'Fractal Engine',
      description: 'The intelligence core that ingests, indexes, and analyzes multi-modal operational data.'
    },
    {
      title: 'NEOS Policies',
      description: 'Governed guardrails for AI behavior, data access, and decision-making authority.'
    },
    {
      title: 'AMP Data Channels',
      description: 'Real-time p2p data streams that feed the Fractal Engine for continuous learning.'
    },
    {
      title: 'OASIS API Fabric',
      description: 'Connect with various LLMs and external intelligence services through a unified, secure fabric.'
    }
  ];

  const useCase = {
    title: 'Self-Improving Operational Hub',
    description: 'A logistics company uses PrimusNeo to create an "institutional brain" that analyzes decade-long decision trails to optimize current routes.',
    outcomes: [
      'Zero loss of institutional knowledge',
      '25% faster decision-making cycles',
      'AI-assisted risk identification in real-time',
      'Governed access to sensitive operational memory'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="AI Intelligence"
      title="The brain for your operations."
      description="PrimusNeo provides the infrastructure for AI that understands your organization, your history, and your physical context."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Build Your Organizational Brain"
    />
  );
};

export default AiIntelligencePage;
