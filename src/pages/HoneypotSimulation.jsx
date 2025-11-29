// src/pages/HoneypotSimulation.jsx

import FeaturePlaceholder from "./FeaturePlaceholder";
import { Network } from "lucide-react";

const HoneypotSimulation = () => {
  return (
    <FeaturePlaceholder
      icon={Network}
      title="Honeypot Simulation"
      description="Deploy decoy systems to detect and analyze cyber attacks"
      features={[
        "Deploy virtual honeypot systems",
        "Monitor attacker behavior in real-time",
        "Collect threat intelligence data",
        "Automated alert system for suspicious activity",
        "Generate detailed attack reports",
        "Integrate with existing security infrastructure"
      ]}
      apiEndpoint="/api/honeypot/simulate"
      requiredModels={[
        "Network Traffic Analyzer",
        "Threat Pattern Recognition",
        "Behavioral Analysis Model"
      ]}
    />
  );
};

export default HoneypotSimulation;