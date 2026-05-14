import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Government & Public Sector Solutions | PrimusNeo',
  description: 'Enhance public trust and operational efficiency through governed transparency. Tools for civic engagement, public infrastructure management, and accountable governance.',
};

const PublicGovernancePage = () => {
  const features = [
    {
      title: 'Accountable Governance',
      description: 'Implement transparent decision-making processes with append-only logs for public record-keeping and auditing.'
    },
    {
      title: 'Civic Infrastructure Twins',
      description: 'Manage public assets—from parks to transit systems—within a collaborative 3D spatial operating system.'
    },
    {
      title: 'Citizen Engagement',
      description: 'Empower residents to participate in local governance and resource allocation through secure, role-based participation flows.'
    }
  ];

  const layers = [
    {
      title: 'NEOS Framework',
      description: 'The engine for public policy, council roles, and transparent decision-making logic.'
    },
    {
      title: 'AMP Spatial OS',
      description: 'Collaborative mapping and coordination tools for municipal operations and public planning.'
    },
    {
      title: 'OASIS Identity',
      description: 'Secure, privacy-preserving identity for citizen participation and access to public services.'
    },
    {
      title: 'Fractal Engine',
      description: 'Data warehousing and analytics for community health, asset utilization, and service delivery.'
    }
  ];

  const useCase = {
    title: 'Smart Municipality Pilot',
    description: 'A city government uses PrimusNeo to manage its public works department and facilitate community-led budgeting for local improvements.',
    outcomes: [
      'Increased citizen trust and participation',
      'Real-time tracking of public asset maintenance',
      'Transparent audit trail for public spending',
      'Improved coordination between city departments'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Public Sector"
      title="Governing for the common good."
      description="PrimusNeo provides the tools for accountable, efficient, and transparent public governance in a digital age."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Modernize Public Governance"
    />
  );
};

export default PublicGovernancePage;
