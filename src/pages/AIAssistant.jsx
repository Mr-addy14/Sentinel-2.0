import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react";

// --- API Configuration ---
// Note: In a production app, you should load this from an environment variable (e.g., process.env.NEXT_PUBLIC_OPENROUTER_KEY)
// For demonstration, I'm inserting it directly.
const OPENROUTER_API_KEY = "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";
const OPENROUTER_MODEL = "openai/gpt-3.5-turbo"; // A commonly used model on OpenRouter
// --- End API Configuration ---


const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello I'm your Sentinel AI Assistant. I'm here to help you with cybersecurity questions, guide you through security tools, and provide recommendations. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => { // Made function asynchronous
    if (!input.trim() || isLoading) return;

    // 1. Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      // 2. Prepare API payload
      const payload = {
        model: OPENROUTER_MODEL,
        messages: [
          // Add a system message to guide the AI's persona
          { role: "system", content: "You are Sentinel AI Assistant, a helpful expert in cybersecurity. Keep your responses concise and focused on the topic." },
          ...messages.slice(1), // Use previous conversation history (excluding the initial welcome message)
          userMessage // Add the current user message
        ],
      };

      // 3. Call OpenRouter API
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponseContent = data.choices[0].message.content;

      // 4. Add AI response
      const aiMessage = {
        role: "assistant",
        content: aiResponseContent
      };
      setMessages(prev => [...prev, aiMessage]);

    } catch (err) {
      console.error("OpenRouter API Error:", err);
      setError("An error occurred while fetching the AI response. Please try again.");
      
      // Optionally, add an error message to the chat
      setMessages(prev => [...prev, { role: "assistant", content: "I encountered an error. Please check the console for details or try a different question." }]);
    } finally {
      setIsLoading(false);
    }
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

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="max-w-[80%] p-4 rounded-lg bg-secondary ml-3">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && !isLoading && (
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
            
            {/* Error message display */}
            {error && (
                <div className="mb-3 text-sm text-red-500 p-2 border border-red-500 rounded-lg bg-red-500/10">
                    Error: {error}
                </div>
            )}

            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about cybersecurity..."
                className="flex-1 bg-input border-border/50 focus:border-primary"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 cyber-glow"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </Button>
            </div>
          </Card>

          <Card className="mt-4 p-4 bg-warning/10 border-warning/30">
            <p className="text-sm text-warning-foreground flex items-start gap-2">
              <MessageSquare className="w-4 h-4 mt-0.5" />
              <span>
                <strong>Note:</strong> This assistant is now using the **OpenRouter API** with a real AI model. Remember to use environment variables for your API key in a production environment.
              </span>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AIAssistant;
