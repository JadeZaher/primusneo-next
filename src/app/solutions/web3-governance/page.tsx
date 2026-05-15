import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Decentralized Governance Solutions | PrimusNeo',
  description: 'Scale your DAO or Web3 organization with NEOS-backed decision trails, holonic team structures, and contribution accounting. Governance that works for the real world.',
};

const Web3GovernancePage = () => {
  const stats = [
    { value: '17%', label: 'Avg. voter turnout (Snapshot)' },
    { value: '1%', label: 'Hold 90% of power (CoinLaw)' },
    { value: '$90M', label: 'Losses to vulnerabilities (Immunefi)' },
    { value: '13k+', label: 'Total global DAOs (DeepDAO)' }
  ];

  const challenges = [
    {
      title: 'The Participation Gap',
      description: 'Decentralized governance suffers from chronic voter apathy, with turnout averaging just 17%. Low engagement leaves systems vulnerable to capture and stagnation.',
      metric: '17%',
      metricLabel: 'Average DAO participation [Snapshot]'
    },
    {
      title: 'Governance Concentration',
      description: 'In many major DAOs, less than 1% of token holders control 90% of the voting power, leading to "whale dominance" and a lack of true community representation.',
      metric: '1%',
      metricLabel: 'Control 90% of power [CoinLaw]'
    },
    {
      title: 'Security Vulnerabilities',
      description: 'Smart contract logic errors and governance manipulation led to over $90 million in losses in 2025, highlighting the need for layered security and delayed execution.',
      metric: '$90M',
      metricLabel: 'Lost to vulnerabilities [Immunefi]'
    }
  ];

  const features = [
    {
      eyebrow: 'Engagement',
      title: 'Quadratic & Delegated Voting',
      description: 'Mitigate whale dominance with built-in quadratic voting and boost efficiency by up to 50% through secure, governed delegation models.'
    },
    {
      eyebrow: 'Security',
      title: 'Layered Governance Safeguards',
      description: 'Protect treasuries with delayed execution, flash-loan protection, and multi-signature policies that are programmatically enforced at the protocol level.'
    },
    {
      eyebrow: 'Intelligence',
      title: 'AI-Assisted Risk Monitoring',
      description: 'Leverage the Fractal Engine to monitor governance health, detect malicious proposals in real-time, and assist in treasury allocation strategies.'
    }
  ];

  const layers = [
    {
      title: 'NEOS Framework',
      description: 'The core engine for defining complex voting rules, role-based permissions, and programmatic execution logic.'
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
      description: 'Deep analytics for monitoring governance participation trends, voting concentration, and treasury performance.'
    }
  ];

  const useCase = {
    title: 'High-Scale Protocol Governance',
    description: 'A top-tier DeFi protocol uses PrimusNeo to transition to a more resilient governance model, implementing quadratic voting and automated risk monitoring.',
    outcomes: [
      'Mitigated whale dominance through NEOS-native quadratic logic',
      'Automated detection of governance manipulation signals',
      'Secure delegation frameworks with programmatic accountability',
      'Real-time treasury health analytics via Fractal Engine'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Web3 & DAO Governance"
      title="The operating system for resilient decentralization."
      description="Resolve the 17% participation crisis and mitigate governance concentration with a unified platform for secure, transparent, and delegated coordination."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Secure Your DAO"
    />
  );
};

export default Web3GovernancePage;
