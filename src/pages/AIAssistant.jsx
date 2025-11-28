import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, User } from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello I'm your Sentinel AI Assistant. I'm here to help you with cybersecurity questions, guide you through security tools, and provide recommendations. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question about cybersecurity. Based on your inquiry, I recommend checking our Learning Hub for detailed tutorials on this topic.",
        "Security is our top priority. Let me help you understand this better. Would you like me to guide you to the relevant security tool?",
        "I can help you with that. Here's what you need to know about this security concept...",
        "Excellent question. For hands-on practice, I suggest trying our Quiz Arena to test your knowledge on this topic."
      ];

      const aiMessage = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInput("");
  };

  const suggestedQuestions = [
    "How do I create a strong password?",
    "What is phishing and how can I detect it?",
    "Tell me about two-factor authentication",
    "How do I protect against malware?"
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <MessageSquare className="w-10 h-10 text-primary" />
              AI Assistant
            </h1>
            <p className="text-muted-foreground">
              Get instant help with cybersecurity questions and guidance
            </p>
          </div>

          <Card className="flex-1 p-6 bg-card/50 border-border/50 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="text-left text-sm p-3 rounded-lg bg-secondary/50 border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about cybersecurity..."
                className="flex-1 bg-input border-border/50 focus:border-primary"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-primary hover:bg-primary/90 cyber-glow"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          <Card className="mt-4 p-4 bg-warning/10 border-warning/30">
            <p className="text-sm text-warning-foreground flex items-start gap-2">
              <MessageSquare className="w-4 h-4 mt-0.5" />
              <span>
                <strong>Note:</strong> This is a simulated AI assistant. For full AI capabilities,
                enable Lovable Cloud to connect real AI models.
              </span>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AIAssistant;