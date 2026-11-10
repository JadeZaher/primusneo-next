import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';
import { PartnerNote, PARTNERS } from '../../_components/IndustryExtras';

export const metadata = {
  title: 'Government & Public Sector',
  description: 'Enhance public trust and operational efficiency through governed transparency. Tools for civic engagement, public infrastructure management, and accountable governance.',
};

const PublicGovernancePage = () => {
  const stats = [
    { value: '~27%', label: 'Efficiency gap in spending (IMF)' },
    { value: '40%', label: 'Potential value-for-money gain (IMF)' },
    { value: '1/3', label: 'Uncollected global waste (World Bank)' },
    { value: '64%', label: 'Public trust median (OECD)' }
  ];

  const challenges = [
    {
      title: 'The Efficiency Gap',
      description: 'The IMF figure used here is an efficiency gap of about 27%. Rigid budgets and missing records are the part a coordination layer can actually touch.',
      metric: '~27%',
      metricLabel: 'efficiency gap [IMF]'
    },
    {
      title: 'Value for Money Crisis',
      description: 'Adopting best-in-class technical optimization and transparent decision-making could unlock up to 40% more value from existing public resources.',
      metric: '40%',
      metricLabel: 'Potential value gain [IMF]'
    },
    {
      title: 'Erosion of Trust',
      description: 'With median confidence in national governments hovering at 64%, there is an urgent need for verifiable transparency and citizen-led participation in resource allocation.',
      metric: '64%',
      metricLabel: 'Median confidence level [OECD]'
    }
  ];

  const features = [
    {
      eyebrow: 'Accountability',
      title: 'Programmatic Budgeting',
      description: 'Replace rigid, opaque budget structures with NEOS-backed programmatic allocations that ensure funds are directed exactly where they are needed, with verifiable trails.'
    },
    {
      eyebrow: 'Participation',
      title: 'Citizen-Led Governance',
      description: 'Empower communities with direct participation in local resource allocation through secure, governed voting and proposal systems.'
    },
    {
      eyebrow: 'Optimization',
      title: 'Frontier Efficiency Analytics',
      description: 'Use the Fractal Engine to map "efficiency frontiers" and identify where public services can be technically optimized to achieve better outcomes.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'Visualize public assets and community needs in real-time, providing a unified spatial layer for municipal coordination.'
    },
    {
      title: 'NEOS Governance',
      description: 'The foundation for transparent public administration, defining the rules for role-based access and programmatic oversight.'
    },
    {
      title: 'AZOA Identity',
      description: 'Secure, privacy-preserving digital identity for citizens and public servants to ensure integrity in governance processes.'
    },
    {
      title: 'Fractal Engine',
      description: 'Advanced analytics for public service optimization, from waste management routing to predictive health resource allocation.'
    }
  ];

  const useCase = {
    title: 'Governed Participatory Budgeting',
    description: 'A mid-sized city uses PrimusNeo to manage its infrastructure renewal budget, allowing 50,000+ citizens to propose and vote on projects with 100% transparency.',
    outcomes: [
      'Fraud-resistant fund allocation via spatial verification',
      'Direct citizen-to-project feedback loops through AMP',
      'Programmatic fund distribution to verified local contractors',
      'Publicly auditable budget trails powered by NEOS'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Public Governance"
      title="Trust is a filing problem."
      description="The IMF efficiency gap is about 27%. The work is a record of allocation someone outside the meeting can open."
      stats={stats}
      challenges={challenges}
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Consult on Governance"
    >
      <PartnerNote partners={[PARTNERS.elevateImpact]} />
    </SolutionTemplate>
  );
};

export default PublicGovernancePage;
