import Sidebar from "@/components/Sidebar";
import { AlertTriangle, CheckCircle, TrendingUp, Activity, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-64 p-8 container mx-auto">
        {/* Global Threat Level */}
        <Card className="p-8 mb-8 gradient-cyber border-border/50 cyber-glow-strong">
          <div className="text-center">
            <h2 className="text-lg text-foreground/80 mb-4">GLOBAL THREAT LEVEL</h2>
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full border-4 border-destructive flex items-center justify-center mb-4 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-destructive">4.7</div>
                  <div className="text-xs text-destructive-foreground">/ 5.0</div>
                </div>
              </div>
            </div>
            <Badge variant="destructive" className="text-lg px-4 py-1">CRITICAL</Badge>
          </div>
        </Card>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Total Threats</h3>
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div className="text-3xl font-bold text-warning">127</div>
            <p className="text-xs text-muted-foreground mt-2">+12 from last scan</p>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Blocked Attacks</h3>
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-success">1,543</div>
            <p className="text-xs text-muted-foreground mt-2">This month</p>
          </Card>

          <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Security Score</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">85%</div>
            <Progress value={85} className="mt-2 h-2" />
          </Card>

          <Card className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">48</div>
            <p className="text-xs text-muted-foreground mt-2">Online now</p>
          </Card>
        </div>

        {/* Daily Missions */}
        <Card className="p-6 mb-8 bg-card/50 border-border/50">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Daily Missions
          </h3>
          <div className="space-y-3">
            {[
              { task: "Scan Network", xp: "+150 XP", completed: true },
              { task: "Complete Phishing Quiz", xp: "+750 XP", completed: false },
              { task: "Update Firewall", xp: "+100 XP", completed: false },
            ].map((mission, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/30 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    mission.completed ? "bg-success border-success" : "border-muted-foreground"
                  }`}>
                    {mission.completed && <CheckCircle className="w-4 h-4 text-success-foreground" />}
                  </div>
                  <span className={mission.completed ? "line-through text-muted-foreground" : ""}>
                    {mission.task}
                  </span>
                </div>
                <Badge variant="outline" className="border-primary/50">
                  {mission.xp}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Feed */}
        <Card className="p-6 bg-card/50 border-border/50">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { type: "success", msg: "Malicious Packet Blocked", xp: "+150 XP", time: "2 min ago" },
              { type: "info", msg: "User 'ByteMaster' completed Encryption Challenge", xp: "+330 XP", time: "5 min ago" },
              { type: "warning", msg: "Anomaly Detected in Sector 7G", xp: "+330 XP", time: "12 min ago" },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/20"
              >
                <div className="flex-1">
                  <p className="text-sm">{activity.msg}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <Badge variant="outline" className="border-primary/30 text-xs">
                  {activity.xp}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;