import FeaturePlaceholder from "./FeaturePlaceholder";
import { MessageSquare } from "lucide-react";

export const AnonymousChat = () => {
  return (
    <FeaturePlaceholder
      icon={MessageSquare}
      title="Anonymous Chat"
      description="Secure anonymous chat with random users"
      features={[
        "End-to-end encrypted messaging",
        "Anonymous user matching",
        "No message logging",
        "Auto-destruct messages",
        "Report and moderation system",
        "WebRTC peer-to-peer connection"
      ]}
      apiEndpoint="/api/chat/connect"
      requiredModels={["Content Moderation Model", "Encryption System"]}
    />
  );
};