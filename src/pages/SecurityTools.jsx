import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Wrench, FileCheck, FileKey, Network, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityTools = () => {
  const tools = [
    {
      icon: Lock,
      title: "Password Checker",
      description: "Analyze password strength and get security recommendations",
      path: "/tools/password",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Threat Scanner",
      description: "Scan URLs and emails for phishing and malware",
      path: "/tools/scanner",
      color: "text-destructive"
    },
    {
      icon: FileKey,
      title: "File Encryption",
      description: "Encrypt and decrypt files with military-grade encryption",
      path: "/tools/encryption",
      color: "text-success",
      comingSoon: true
    },
    {
      icon: FileCheck,
      title: "File Integrity Checker",
      description: "Verify file integrity and detect unauthorized modifications",
      path: "/tools/integrity",
      color: "text-warning",
      comingSoon: true
    },
    {
      icon: Network,
      title: "Network Monitor",
      description: "Monitor network traffic and detect suspicious activity",
      path: "/tools/network",
      color: "text-accent",
      comingSoon: true
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Wrench className="w-10 h-10 text-primary" />
              Security Tools
            </h1>
            <p className="text-muted-foreground">
              Comprehensive security utilities to protect your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              const content = (
                <Card className={`p-6 bg-card/50 border-border/50 ${!tool.comingSoon ? 'hover:border-primary/50 hover:shadow-glow cursor-pointer' : 'opacity-60'} transition-all relative`}>
                  {tool.comingSoon && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-lg bg-opacity-20 flex items-center justify-center mb-4" style={{ backgroundColor: `var(--color-${tool.color})20` }}>
                    <Icon className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </Card>
              );

              return tool.comingSoon ? (
                <div key={i}>{content}</div>
              ) : (
                <Link key={i} to={tool.path}>
                  {content}
                </Link>
              );
            })}
          </div>

          <Card className="mt-12 p-6 bg-card/50 border-border/50">
            <h3 className="text-xl font-bold mb-4">User Tools Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-primary">Available Now</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Password strength analysis</li>
                  <li>• URL phishing detection</li>
                  <li>• Email threat scanning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-warning">Coming Soon</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• File encryption/decryption</li>
                  <li>• File integrity verification</li>
                  <li>• Network traffic monitoring</li>
                  <li>• Privacy leak analyzer</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SecurityTools;