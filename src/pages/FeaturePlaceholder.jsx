// src/pages/FeaturePlaceholder.jsx
// Reusable template for feature placeholders

import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle, Code, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturePlaceholder = ({ 
  icon: Icon = Shield, 
  title, 
  description, 
  features = [],
  apiEndpoint,
  requiredModels = []
}) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-16 lg:ml-64 p-8 transition-all duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative group">
                <Icon className="w-12 h-12 text-primary animate-pulse-glow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold">{title}</h1>
                  <Badge className="bg-warning/20 text-warning border-warning/50">Coming Soon</Badge>
                </div>
                <p className="text-muted-foreground mt-1">{description}</p>
              </div>
            </div>
          </div>

          {/* Main Placeholder Card */}
          <Card className="p-8 bg-gradient-cyber border-primary/50 cyber-glow-strong mb-6 animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Shield className="w-24 h-24 text-primary animate-float" />
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Feature Under Development</h2>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                This advanced security feature is currently being developed. 
                The infrastructure is ready for integration with your ML models and backend services.
              </p>
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Code className="w-3 h-3 mr-1" />
                Integration Ready
              </Badge>
            </div>
          </Card>

          {/* Feature Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Planned Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-success" />
                Integration Details
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">API Endpoint:</p>
                  <code className="text-xs bg-secondary px-2 py-1 rounded">
                    {apiEndpoint || '/api/feature/endpoint'}
                  </code>
                </div>
                {requiredModels.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Required Models:</p>
                    <div className="flex flex-wrap gap-2">
                      {requiredModels.map((model, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Integration Instructions */}
          <Card className="p-6 bg-warning/10 border-warning/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-warning mb-2">For Developers</h4>
                <p className="text-sm text-warning-foreground/80 mb-3">
                  This page is ready for your model integration. Follow these steps:
                </p>
                <ol className="text-sm text-warning-foreground/80 space-y-1 list-decimal list-inside">
                  <li>Add your ML model to the <code className="bg-warning/20 px-1 rounded">models/</code> directory</li>
                  <li>Update the API service in <code className="bg-warning/20 px-1 rounded">src/services/api.js</code></li>
                  <li>Connect your backend endpoint</li>
                  <li>Test the integration and remove this placeholder</li>
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FeaturePlaceholder;