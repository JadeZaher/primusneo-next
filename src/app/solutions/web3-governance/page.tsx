import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Decentralized Governance Solutions | PrimusNeo',
  description: 'Scale your DAO or Web3 organization with NEOS-backed decision trails, holonic team structures, and contribution accounting. Governance that works for the real world.',
};

const Web3GovernancePage = () => {
  const features = [
    {
      title: 'Real-World Decision Trails',
      description: 'Move beyond simple snapshot voting. Implement multi-layered governance with role-based authority and append-only decision logs.'
    },
    {
      title: 'Contribution Accounting',
      description: 'Track and reward value creation across developers, community managers, and advisors with transparent, on-chain records.'
    },
    {
      title: 'Holonic Organization',
      description: 'Scale complex ecosystems with nested governance structures (holons) that maintain autonomy while staying aligned with the core mission.'
    }
  ];

  const layers = [
    {
      title: 'NEOS Framework',
      description: 'The core engine for policies, councils, and decision-making logic tailored for decentralized entities.'
    },
    {
      title: 'OASIS Identity',
      description: 'Universal interoperability for cross-chain identity, reputation, and participation rights.'
    },
    {
      title: 'AMP Coordination',
      description: 'Privacy-first, p2p communication channels and collaborative workspaces for distributed teams.'
    },
    {
      title: 'Fractal Engine',
      description: 'Analyze governance health, voting participation, and organizational velocity with deep intelligence.'
    }
  ];

  const useCase = {
    title: 'Global Protocol Ecosystem',
    description: 'A major Web3 protocol uses PrimusNeo to manage its treasury allocation and contributor workstreams across three continents.',
    outcomes: [
      'Elimination of governance bottlenecks',
      'Automated contributor reward distributions',
      'Immutable audit trail for community transparency',
      'Seamless coordination between core devs and community councils'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Governance"
      title="The infrastructure for sovereign coordination."
      description="PrimusNeo connects decentralized decision-making with operational delivery, enabling DAOs to govern real-world impact."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Build Your Governance Model"
    />
  );
};

export default Web3GovernancePage;
