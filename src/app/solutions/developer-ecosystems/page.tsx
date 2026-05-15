import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Developer Ecosystem Solutions | PrimusNeo',
  description: 'Resolve the coordination tax and API sprawl. PrimusNeo provides the federated infrastructure for building high-scale coordination applications.',
};

const DeveloperEcosystemsPage = () => {
  const stats = [
    { value: '68%', label: 'Time lost to coordination (McKinsey)' },
    { value: '8h', label: 'Weekly productivity leak (Atlassian)' },
    { value: '35%', label: 'API endpoints classified as "zombie"' },
    { value: '25x', label: 'Cost to fix downstream bugs' }
  ];

  const challenges = [
    {
      title: 'The Coordination Tax',
      description: 'Developers spend only 32% of their time actually writing code. The remaining 68% is consumed by manual coordination, administrative toil, and meeting sprawl.',
      metric: '68%',
      metricLabel: 'Coordination overhead [McKinsey]'
    },
    {
      title: 'The Productivity Leak',
      description: '69% of developers lose 8+ hours per week to inefficiencies and fragmented tools, costing large engineering orgs millions in wasted annual productivity.',
      metric: '8h+',
      metricLabel: 'Wasted per week [Atlassian]'
    },
    {
      title: 'Architectural Sprawl',
      description: 'API fragmentation and unmaintained "zombie" endpoints create a scaling failure, where individual speed causes team-wide gridlock and security risks.',
      metric: '35%',
      metricLabel: 'Classification as "zombie" [Boomi]'
    }
  ];

  const features = [
    {
      eyebrow: 'Productivity',
      title: 'Unified Coordination Runtime',
      description: 'Reduce the 68% coordination tax with a federated operating system that automates project alignment and resource discovery for developers.'
    },
    {
      eyebrow: 'Modularity',
      title: 'Interoperable Extension Layer',
      description: 'Build on shared extension interfaces and schemas that eliminate API sprawl, allowing your tools to interoperate by default.'
    },
    {
      eyebrow: 'Intelligence',
      title: 'Agentic Ready Infrastructure',
      description: 'Design APIs for machine and AI consumption via the Fractal Engine, enabling AI agents to "understand" and use your tools without manual mapping.'
    }
  ];

  const layers = [
    {
      title: 'AMP Runtime',
      description: 'A local-first development environment for building real-time, peer-to-peer coordination applications.'
    },
    {
      title: 'NEOS Agreements',
      description: 'Programmable permissions and operational rights that developers can bake directly into their application logic.'
    },
    {
      title: 'OASIS Identity',
      description: 'A unified interoperability layer for cross-chain identity, reputation, and participation rights for builders.'
    },
    {
      title: 'Fractal Engine',
      description: 'Data warehousing and organizational memory that persists research and research research research.'
    }
  ];

  const useCase = {
    title: 'Distributed Builder Network',
    description: 'A global developer collective uses PrimusNeo to coordinate 1,000+ contributors across 50 project workstreams, using shared standards to eliminate redundancy.',
    outcomes: [
      'Eliminated 90% of manual coordination meetings',
      'Automated contributor reward distributions via NEOS',
      'Unified discovery of project research via Fractal Engine',
      'Seamless interoperability between 30+ internal tools'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Developer Ecosystems"
      title="Eliminating the coordination tax."
      description="Resolve the crisis of API sprawl and developer toil with federated infrastructure designed for high-scale architectural coordination."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Dev Architecture"
    />
  );
};

export default DeveloperEcosystemsPage;
