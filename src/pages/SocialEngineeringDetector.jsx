import FeaturePlaceholder from "./FeaturePlaceholder";
import { Users } from "lucide-react";

export const SocialEngineeringDetector = () => {
  return (
    <FeaturePlaceholder
      icon={Users}
      title="Social Engineering Detector"
      description="Identify and prevent social engineering attacks"
      features={[
        "Email pretext detection",
        "Psychological manipulation patterns",
        "Urgency and authority tactics identification",
        "Suspicious request flagging",
        "User behavior analysis",
        "Training recommendations"
      ]}
      apiEndpoint="/api/social-engineering/analyze"
      requiredModels={["NLP Sentiment Model", "Manipulation Pattern Detection"]}
    />
  );
};