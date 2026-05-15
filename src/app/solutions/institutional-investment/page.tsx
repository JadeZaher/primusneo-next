import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Institutional Capital Solutions | PrimusNeo',
  description: 'Access high-fidelity real-world asset portfolios and resolve liquidity bottlenecks. PrimusNeo provides the federated infrastructure for institutional tokenization and asset management.',
};

const InstitutionalInvestmentPage = () => {
  const stats = [
    { value: '$1.75T', label: 'Tokenized Asset Market 2025 (RWA.xyz)' },
    { value: '70%', label: 'Capital from institutional players' },
    { value: '63%', label: 'Custodians offering DLT services' },
    { value: '50bp+', label: 'RWA Bid-Ask Liquidity Spread' }
  ];

  const challenges = [
    {
      title: 'The Liquidity Bottleneck',
      description: 'Despite $1.7T in tokenized assets, liquidity remains concentrated. Bid-ask spreads often exceed 50-100 basis points due to fragmented secondary markets.',
      metric: '50-100bp',
      metricLabel: 'RWA Liquidity Spread [RWA.io]'
    },
    {
      title: 'Protocol Fragmentation',
      description: 'Institutional capital is trapped across 140+ different tokenization protocols and siloed blockchains, preventing cross-chain asset mobility.',
      metric: '140+',
      metricLabel: 'Active RWA Protocols [CoinGecko]'
    },
    {
      title: 'Regulated Compliance Gaps',
      description: '76% of firms intend to invest in tokenized assets, yet many are blocked by a lack of standardized, regulated identity and permissioning frameworks.',
      metric: '76%',
      metricLabel: 'Firms awaiting RWA entry [GIIN]'
    }
  ];

  const features = [
    {
      eyebrow: 'Liquidity',
      title: 'Federated Liquidity Pools',
      description: 'Bridge protocol silos with a federated coordination layer that allows institutional capital to move seamlessly across interoperable DLT environments.'
    },
    {
      eyebrow: 'Compliance',
      title: 'Regulated Identity Standards',
      description: 'Implement ERC-3643 and ERC-1400 standards at the protocol level via OASIS, ensuring 100% compliance for institutional participants.'
    },
    {
      eyebrow: 'Data',
      title: 'High-Fidelity RWA Telemetry',
      description: 'Access real-time operational data from tokenized physical assets via AMP, providing institutions with unprecedented depth of due diligence.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Visualize global real-world asset portfolios in a unified spatial layer, from private credit to tokenized real estate.'
    },
    {
      title: 'NEOS Governance',
      description: 'Define the institutional-grade rules for asset custody, distribution policies, and role-based access control.'
    },
    {
      title: 'OASIS Identity',
      description: 'Verifiable credentials for institutions, custodians, and qualified investors, ensuring full regulatory alignment.'
    },
    {
      title: 'Fractal Engine',
      description: 'Advanced portfolio analytics and risk monitoring that persists across fragmented DLT environments.'
    }
  ];

  const useCase = {
    title: 'Cross-Border Real Estate Fund',
    description: 'A global asset manager uses PrimusNeo to manage a $500M tokenized portfolio, coordinating 10+ regional custodians and 1,000+ institutional LPs.',
    outcomes: [
      'Eliminated protocol silos via federated OASIS bridges',
      'Automated NAV reporting via real-time AMP telemetry',
      'Reduced bid-ask spreads through cross-chain liquidity',
      'Verified regulatory compliance for every participant'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Institutional Capital"
      title="Unlocking the $1.7 trillion RWA market."
      description="Resolve the liquidity bottleneck and protocol fragmentation in institutional finance with federated infrastructure for real-world assets."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Institutional Models"
    />
  );
};

export default InstitutionalInvestmentPage;
