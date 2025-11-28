import { Shield, Home, Lock, Search, Brain, BookOpen, MessageSquare, Trophy, Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Lock, label: "Password Checker", path: "/tools/password" },
    { icon: Search, label: "Threat Scanner", path: "/tools/scanner" },
    { icon: Brain, label: "Quiz Arena", path: "/quiz" },
    { icon: BookOpen, label: "Learning Hub", path: "/learning" },
    { icon: Wrench, label: "Security Tools", path: "/tools" },
    { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
    { icon: MessageSquare, label: "AI Assistant", path: "/assistant" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border/50 fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-border/50">
        <Link to="/dashboard" className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary animate-pulse-glow" />
          <div>
            <h1 className="text-xl font-bold text-gradient-cyber">SENTINEL</h1>
            <p className="text-xs text-muted-foreground">Cyber Protocol</p>
          </div>
        </Link>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/50 cyber-glow"
                      : "hover:bg-secondary text-foreground/80 hover:text-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50">
        <div className="p-3 bg-secondary/50 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Security Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-success">Protected</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;