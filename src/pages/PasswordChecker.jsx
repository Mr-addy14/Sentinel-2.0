import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, AlertTriangle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const calculateStrength = (pwd) => {
    let score = 0;
    if (!pwd) return { score: 0, label: "None", color: "text-muted-foreground" };

    // Length check
    if (pwd.length >= 8) score += 20;
    if (pwd.length >= 12) score += 10;
    if (pwd.length >= 16) score += 10;

    // Character variety
    if (/[a-z]/.test(pwd)) score += 15;
    if (/[A-Z]/.test(pwd)) score += 15;
    if (/[0-9]/.test(pwd)) score += 15;
    if (/[^a-zA-Z0-9]/.test(pwd)) score += 15;

    if (score <= 30) return { score, label: "Weak", color: "text-destructive" };
    if (score <= 60) return { score, label: "Fair", color: "text-warning" };
    if (score <= 80) return { score, label: "Good", color: "text-primary" };
    return { score, label: "Strong", color: "text-success" };
  };

  const strength = calculateStrength(password);

  const checks = [
    { test: password.length >= 8, label: "At least 8 characters" },
    { test: /[a-z]/.test(password), label: "Contains lowercase letter" },
    { test: /[A-Z]/.test(password), label: "Contains uppercase letter" },
    { test: /[0-9]/.test(password), label: "Contains number" },
    { test: /[^a-zA-Z0-9]/.test(password), label: "Contains special character" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Lock className="w-10 h-10 text-primary" />
              Password Strength Checker
            </h1>
            <p className="text-muted-foreground">
              Analyze your password security and get real-time recommendations
            </p>
          </div>

          <Card className="p-8 mb-8 bg-card/50 border-border/50 cyber-glow">
            <Label htmlFor="password" className="text-lg mb-4 block">
              Enter Password to Analyze
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password here..."
                className="pr-12 text-lg h-14 bg-input border-border/50 focus:border-primary"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>

            {password && (
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Strength Score</span>
                    <Badge className={cn("font-bold", strength.color)}>
                      {strength.label}
                    </Badge>
                  </div>
                  <Progress value={strength.score} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {strength.score}% strength
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security Checks
              </h3>
              <div className="space-y-3">
                {checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {check.test ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className={check.test ? "text-foreground" : "text-muted-foreground"}>
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Security Tips
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Use a unique password for each account
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Avoid common words and patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Consider using a password manager
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Enable two-factor authentication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Change passwords regularly
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordChecker;