import { useState } from "react";
import { Shield, Home, Lock, Search, Brain, BookOpen, MessageSquare, Trophy, Wrench, ChevronLeft, ChevronRight, Eye, FileKey, Network, Users, Bot } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Lock, label: "Password Checker", path: "/tools/password" },
    { icon: Search, label: "Threat Scanner", path: "/tools/scanner" },
    { icon: Shield, label: "Threat Detector", path: "/tools/threat-detector", badge: "New" },
    { icon: Eye, label: "Privacy Leak Analyzer", path: "/tools/privacy-analyzer", badge: "New" },
    { icon: FileKey, label: "Encrypted File Sharing", path: "/tools/file-sharing", badge: "New" },
    { icon: Network, label: "AI Firewall", path: "/tools/ai-firewall", badge: "New" },
    { icon: Shield, label: "Honeypot Simulation", path: "/tools/honeypot", badge: "New" },
    { icon: Users, label: "Deepfake Detector", path: "/tools/deepfake", badge: "New" },
    { icon: MessageSquare, label: "Social Engineering Detector", path: "/tools/social-engineering", badge: "New" },
    { icon: Users, label: "Anonymous Chat", path: "/chat", badge: "New" },
    { icon: Brain, label: "Quiz Arena", path: "/quiz" },
    { icon: BookOpen, label: "Learning Hub", path: "/learning" },
    { icon: Wrench, label: "Security Tools", path: "/tools" },
    { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
    { icon: Bot, label: "AI Assistant", path: "/assistant" },
  ];

  const shouldShow = isCollapsed ? isHovered : true;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 min-h-screen bg-card border-r border-border/50 transition-all duration-300 ease-in-out",
        isCollapsed && !isHovered ? "w-16" : "w-64",
        "hover:shadow-2xl hover:shadow-primary/20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="p-6 border-b border-border/50 relative">
        <Link to="/dashboard" className="flex items-center gap-3 transition-all duration-300">
          <div className="relative">
            <Shield className="w-8 h-8 text-primary animate-pulse-glow" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
          </div>
          {shouldShow && (
            <div className="animate-fade-in">
              <h1 className="text-xl font-bold text-gradient-cyber">SENTINEL</h1>
              <p className="text-xs text-muted-foreground">Cyber Protocol</p>
            </div>
          )}
        </Link>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 h-6 w-6 rounded-full border border-border bg-card hover:bg-primary/20 transition-all duration-300"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 overflow-y-auto h-[calc(100vh-200px)] custom-scrollbar">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative group",
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/50 cyber-glow scale-105"
                      : "hover:bg-secondary text-foreground/80 hover:text-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    "group-hover:scale-110 group-hover:rotate-3"
                  )} />
                  {shouldShow && (
                    <span className="font-medium animate-fade-in flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="text-[10px] bg-primary/30 text-primary px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Status */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className={cn(
          "p-3 bg-secondary/50 rounded-lg transition-all duration-300",
          isCollapsed && !isHovered ? "flex justify-center" : ""
        )}>
          {shouldShow ? (
            <>
              <p className="text-xs text-muted-foreground mb-1">Security Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-success">Protected</span>
              </div>
            </>
          ) : (
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.5);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;