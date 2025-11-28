// Converted from TypeScript to JavaScript — automatic best-effort. Please review.
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import sentinelLogo from "@/assets/sentinel-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-8 relative">
              <img src={sentinelLogo} alt="Sentinel Logo" className="w-32 h-32 animate-float" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            </div>

            <h1 className="text-6xl md-7xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient-cyber">SENTINEL</span>
            </h1>

            <p className="text-xl md-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Cybersecurity Awareness & Protection Platform for SMEs
            </p>

            <p className="text-lg text-foreground/80 mb-12 max-w-3xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Detect threats, assess risks, and train employees with our lightweight, user-friendly cybersecurity tool. 
              Implement AI-assisted phishing detection and security monitoring dashboards.
            </p>

            <div className="flex flex-col sm-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Link to="/auth">
                <Button size="lg" className="bg-primary hover-primary/90 text-primary-foreground cyber-glow-strong text-lg px-8 group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-primary/50 hover-primary/10 text-lg px-8">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Comprehensive Security Suite</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enterprise-grade security tools designed for small and medium enterprises
          </p>

          <div className="grid grid-cols-1 md-cols-2 lg-cols-3 gap-8">
            {[
              {
                icon,
                title: "Threat Detection",
                description: "Real-time monitoring and AI-powered threat detection to protect your business",
                color: "text-primary"
              },
              {
                icon,
                title: "Encrypted Security",
                description: "End-to-end encryption for file sharing and secure communications",
                color: "text-success"
              },
              {
                icon,
                title: "Privacy Analysis",
                description: "Detect and prevent privacy leaks with advanced scanning technology",
                color: "text-warning"
              },
              {
                icon,
                title: "AI Firewall",
                description: "Intelligent firewall that learns and adapts to emerging threats",
                color: "text-primary"
              },
              {
                icon,
                title: "Training & Awareness",
                description: "Gamified learning platform with quizzes and certifications",
                color: "text-accent"
              },
              {
                icon,
                title: "Compliance Ready",
                description: "Meet industry standards with automated security reports",
                color: "text-success"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-card border border-border/50 hover-primary/50 hover-glow transition-all duration-300"
              >
                <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-cyber opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of SMEs protecting their digital assets with Sentinel
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow-strong text-lg px-12 group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold">SENTINEL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Sentinel. Protect & Fortify Your Digital World.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
