import React from 'react';
import { SolutionTemplate } from '../../_components/SolutionTemplate';

export const metadata = {
  title: 'Smart Infrastructure & IoT Solutions | PrimusNeo',
  description: 'Connect physical assets with digital intelligence. Manage smart cities, industrial IoT, and decentralized infrastructure with real-time spatial OS and digital twins.',
};

const SmartInfrastructurePage = () => {
  const features = [
    {
      title: 'Real-Time Telemetry',
      description: 'Ingest and visualize data from thousands of IoT sensors within a high-fidelity 3D spatial environment.'
    },
    {
      title: 'Automated Operations',
      description: 'Trigger maintenance workflows and emergency responses based on real-time signals and AI-assisted logic.'
    },
    {
      title: 'Interoperable Standards',
      description: 'Connect legacy industrial systems with modern Web3 infrastructure through OASIS and Fractal Engine.'
    }
  ];

  const layers = [
    {
      title: 'AMP Spatial OS',
      description: 'The operating system for physical spaces, enabling real-time mapping and p2p data distribution.'
    },
    {
      title: 'Fractal Engine',
      description: 'Intelligence layer that processes sensor data for predictive maintenance and operational insights.'
    },
    {
      title: 'OASIS Providers',
      description: 'Seamless integration with existing IoT gateways and enterprise data sources.'
    },
    {
      title: 'NEOS Policies',
      description: 'Governed access control and decision logic for critical infrastructure systems.'
    }
  ];

  const useCase = {
    title: 'Smart Industrial Park',
    description: 'An industrial operator uses PrimusNeo to monitor energy consumption and equipment health across a 500-acre facility.',
    outcomes: [
      '15% reduction in energy waste',
      'Zero downtime for critical machinery',
      'Unified spatial view of all facility assets',
      'Secure, role-gated access for maintenance crews'
    ]
  };

  return (
    <SolutionTemplate 
      eyebrow="Infrastructure"
      title="Intelligence for the built environment."
      description="PrimusNeo bridges the gap between physical sensors and digital governance, making infrastructure smarter and more resilient."
      features={features}
      layers={layers}
      useCase={useCase}
      primaryCtaText="Optimize Your Infrastructure"
    />
  );
};

export default SmartInfrastructurePage;
