import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Shield, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import sentinelLogo from "@/assets/sentinel-logo.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src={sentinelLogo} alt="Sentinel" className="w-20 h-20 animate-float" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gradient-cyber">SENTINEL</h1>
          <p className="text-muted-foreground">Protect & Fortify Your Digital World</p>
        </div>

        <Card className="p-8 backdrop-blur-sm bg-card/50 border-border/50 cyber-glow">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{isLogin ? "Welcome Back" : "Join Sentinel"}</h2>
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Sign in to your account" : "Create your account to get started"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-input border-border/50 focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-input border-border/50 focus:border-primary transition-colors"
                required
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirm" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Confirm Password
                </Label>
                <Input
                  id="confirm"
                  type="password"
                  placeholder="••••••••"
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow group"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;