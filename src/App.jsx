// Converted from TypeScript to JavaScript — automatic best-effort. Please review.
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import PasswordChecker from "./pages/PasswordChecker";
import ThreatScanner from "./pages/ThreatScanner";
import Quiz from "./pages/Quiz";
import Learning from "./pages/Learning";
import SecurityTools from "./pages/SecurityTools";
import Leaderboard from "./pages/Leaderboard";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        {/* Toast systems */}
        <ShadcnToaster />
        <SonnerToaster />

        {/* Route system */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Tools */}
          <Route path="/tools/password" element={<PasswordChecker />} />
          <Route path="/tools/scanner" element={<ThreatScanner />} />
          <Route path="/tools" element={<SecurityTools />} />

          {/* Others */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/assistant" element={<AIAssistant />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
