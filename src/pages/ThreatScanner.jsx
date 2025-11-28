import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Search, Mail, AlertTriangle, CheckCircle, Shield, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ThreatScanner = () => {
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [urlResult, setUrlResult] = useState(null);
  const [emailResult, setEmailResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const scanUrl = () => {
    setIsScanning(true);

    setTimeout(() => {
      const threats = [];
      const isSuspicious = urlInput.includes("phishing") ||
                          urlInput.includes("malware") ||
                          urlInput.length > 80 ||
                          (urlInput.match(/\./g) || []).length > 3;

      if (isSuspicious) {
        threats.push("Suspicious URL structure detected");
        threats.push("Domain reputation check");
      }

      setUrlResult({
        url: urlInput,
        safe: !isSuspicious,
        threats: threats,
        riskLevel: isSuspicious ? "HIGH" : "LOW"
      });
      setIsScanning(false);
    }, 1500);
  };

  const scanEmail = () => {
    setIsScanning(true);

    setTimeout(() => {
      const threats = [];
      const keywords = ["urgent", "verify", "suspended", "click here", "act now", "prize", "congratulations"];
      const hasSuspiciousKeywords = keywords.some(k => emailInput.toLowerCase().includes(k));
      const hasLinks = /(http|https):\/\//.test(emailInput);

      if (hasSuspiciousKeywords) threats.push("Phishing keywords detected");
      if (hasLinks) threats.push("Contains external links");
      if (emailInput.toLowerCase().includes("password")) threats.push("Requests sensitive information");

      const isThreat = threats.length > 0;

      setEmailResult({
        safe: !isThreat,
        threats: threats,
        riskLevel: isThreat ? (threats.length > 2 ? "CRITICAL" : "MEDIUM") : "LOW"
      });
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Search className="w-10 h-10 text-primary" />
              Threat Scanner
            </h1>
            <p className="text-muted-foreground">
              Analyze URLs and emails for phishing attempts and security threats
            </p>
          </div>

          <Tabs defaultValue="url" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url">URL Scanner</TabsTrigger>
              <TabsTrigger value="email">Email Scanner</TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="space-y-6">
              <Card className="p-6 bg-card/50 border-border/50">
                <Label htmlFor="url" className="text-lg mb-3 block">
                  Enter URL to Scan
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="url"
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com"
                    className="flex-1 bg-input border-border/50 focus:border-primary"
                  />
                  <Button
                    onClick={scanUrl}
                    disabled={!urlInput || isScanning}
                    className="bg-primary hover:bg-primary/90 cyber-glow"
                  >
                    {isScanning ? "Scanning..." : "Scan URL"}
                  </Button>
                </div>
              </Card>

              {urlResult && (
                <Card className={`p-6 border-2 ${urlResult.safe ? "border-success/50 bg-success/5" : "border-destructive/50 bg-destructive/5"}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${urlResult.safe ? "bg-success/20" : "bg-destructive/20"}`}>
                      {urlResult.safe ? (
                        <CheckCircle className="w-8 h-8 text-success" />
                      ) : (
                        <XCircle className="w-8 h-8 text-destructive" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">
                          {urlResult.safe ? "Safe URL" : "Threat Detected"}
                        </h3>
                        <Badge variant={urlResult.safe ? "default" : "destructive"}>
                          {urlResult.riskLevel} RISK
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 break-all">
                        {urlResult.url}
                      </p>

                      {urlResult.threats.length > 0 && (
                        <div className="space-y-2">
                          <p className="font-medium flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Detected Threats:
                          </p>
                          <ul className="space-y-1 ml-6">
                            {urlResult.threats.map((threat, i) => (
                              <li key={i} className="text-sm flex items-center gap-2">
                                <span className="text-destructive">•</span>
                                {threat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="email" className="space-y-6">
              <Card className="p-6 bg-card/50 border-border/50">
                <Label htmlFor="email" className="text-lg mb-3 block">
                  Paste Email Content
                </Label>
                <Textarea
                  id="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Paste the email subject and body here..."
                  className="min-h-[200px] bg-input border-border/50 focus:border-primary mb-3"
                />
                <Button
                  onClick={scanEmail}
                  disabled={!emailInput || isScanning}
                  className="bg-primary hover:bg-primary/90 cyber-glow"
                >
                  {isScanning ? "Analyzing..." : "Analyze Email"}
                </Button>
              </Card>

              {emailResult && (
                <Card className={`p-6 border-2 ${emailResult.safe ? "border-success/50 bg-success/5" : "border-destructive/50 bg-destructive/5"}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${emailResult.safe ? "bg-success/20" : "bg-destructive/20"}`}>
                      {emailResult.safe ? (
                        <Shield className="w-8 h-8 text-success" />
                      ) : (
                        <Mail className="w-8 h-8 text-destructive" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">
                          {emailResult.safe ? "Email Appears Safe" : "Phishing Detected"}
                        </h3>
                        <Badge variant={emailResult.safe ? "default" : "destructive"}>
                          {emailResult.riskLevel} RISK
                        </Badge>
                      </div>

                      {emailResult.threats.length > 0 ? (
                        <div className="space-y-2">
                          <p className="font-medium flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Warning Signs:
                          </p>
                          <ul className="space-y-1 ml-6">
                            {emailResult.threats.map((threat, i) => (
                              <li key={i} className="text-sm flex items-center gap-2">
                                <span className="text-destructive">•</span>
                                {threat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          No obvious phishing indicators detected in this email.
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ThreatScanner;