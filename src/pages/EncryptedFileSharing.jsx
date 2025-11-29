import FeaturePlaceholder from "./FeaturePlaceholder";
import { FileKey } from "lucide-react";

export const EncryptedFileSharing = () => {
  return (
    <FeaturePlaceholder
      icon={FileKey}
      title="Encrypted File Sharing"
      description="Secure end-to-end encrypted file transfer"
      features={[
        "AES-256 encryption",
        "End-to-end encryption",
        "Secure link generation",
        "Access control and permissions",
        "File expiration settings",
        "Activity logging and audit trail"
      ]}
      apiEndpoint="/api/files/share"
      requiredModels={["Encryption Engine", "Key Management System"]}
    />
  );
};