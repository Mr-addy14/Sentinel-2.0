import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "CyberGuardian", xp: 15240, badge: "Elite Defender", avatar: "🛡️" },
    { rank: 2, name: "SecurityPro", xp: 14980, badge: "Master Hacker", avatar: "💻" },
    { rank: 3, name: "DataProtector", xp: 12960, badge: "Threat Hunter", avatar: "🔍" },
    { rank: 4, name: "FirewallKing", xp: 11230, badge: "Network Sentinel", avatar: "🔥" },
    { rank: 5, name: "EncryptionQueen", xp: 10540, badge: "Crypto Expert", avatar: "🔐" },
  ];

  const userStats = {
    rank: 48,
    xp: 2340,
    quizzesCompleted: 12,
    accuracy: 78
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="w-10 h-10 text-warning" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground">
              Top cyber defenders ranked by XP and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 p-6 bg-card/50 border-border/50">
              <h2 className="text-2xl font-bold mb-6">Top Defenders</h2>
              <div className="space-y-3">
                {topUsers.map((user) => (
                  <div
                    key={user.rank}
                    className={`p-4 rounded-lg border transition-all ${
                      user.rank <= 3
                        ? "bg-gradient-to-r from-warning/20 to-card border-warning/50 cyber-glow"
                        : "bg-secondary/30 border-border/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        {user.rank === 1 && <Trophy className="w-6 h-6 text-warning" />}
                        {user.rank === 2 && <Medal className="w-6 h-6 text-muted-foreground" />}
                        {user.rank === 3 && <Award className="w-6 h-6 text-accent" />}
                        {user.rank > 3 && (
                          <span className="text-2xl font-bold text-muted-foreground w-6 text-center">
                            {user.rank}
                          </span>
                        )}
                      </div>

                      <div className="text-3xl">{user.avatar}</div>

                      <div className="flex-1">
                        <h3 className="font-bold">{user.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {user.badge}
                        </Badge>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{user.xp.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">XP</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-cyber border-primary/50 cyber-glow">
                <h3 className="text-xl font-bold mb-4">Your Rank</h3>
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">#{userStats.rank}</p>
                  <p className="text-sm text-foreground/80">out of 1,247 users</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Total XP</span>
                    <span className="font-bold">{userStats.xp.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Quizzes</span>
                    <span className="font-bold">{userStats.quizzesCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Accuracy</span>
                    <span className="font-bold text-success">{userStats.accuracy}%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 border-border/50">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Weekly Challenge
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete 10 quizzes this week to earn bonus XP
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-bold">3/10</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[30%]" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;