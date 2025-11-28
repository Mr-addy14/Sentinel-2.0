import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { BookOpen, Play, Shield, Lock, AlertTriangle, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Learning = () => {
  const videos = [
    {
      title: "What is Phishing? How to Spot and Avoid Phishing Attacks",
      category: "Phishing",
      duration: "12:45",
      icon: AlertTriangle,
      url: "https://www.youtube.com/watch?v=GxLWWLjgE4c",
      description: "Learn how to identify and protect yourself from phishing attempts"
    },
    {
      title: "Password Security Best Practices",
      category: "Passwords",
      duration: "8:30",
      icon: Lock,
      url: "https://www.youtube.com/watch?v=0RCsHJfHL_4",
      description: "Essential tips for creating and managing secure passwords"
    },
    {
      title: "Understanding Malware and How It Works",
      category: "Malware",
      duration: "15:20",
      icon: Shield,
      url: "https://www.youtube.com/watch?v=n8mbzU0X2nQ",
      description: "Deep dive into different types of malware and protection strategies"
    },
    {
      title: "Social Engineering Attacks Explained",
      category: "Social Engineering",
      duration: "10:15",
      icon: Eye,
      url: "https://www.youtube.com/watch?v=lc7scxvKQOo",
      description: "How attackers manipulate people and how to defend against it"
    },
    {
      title: "Two-Factor Authentication: Why You Need It",
      category: "Authentication",
      duration: "6:40",
      icon: Shield,
      url: "https://www.youtube.com/watch?v=0mvCeNsTa1g",
      description: "Understanding the importance of 2FA and how to set it up"
    },
    {
      title: "Ransomware: Prevention and Response",
      category: "Ransomware",
      duration: "14:25",
      icon: AlertTriangle,
      url: "https://www.youtube.com/watch?v=KYwz1aZc9BQ",
      description: "What ransomware is and how to protect your organization"
    }
  ];

  const topics = [
    {
      title: "Network Security",
      description: "Firewalls, VPNs, and secure network architecture",
      lessons: 12,
      color: "text-primary"
    },
    {
      title: "Data Protection",
      description: "Encryption, backups, and data loss prevention",
      lessons: 8,
      color: "text-success"
    },
    {
      title: "Incident Response",
      description: "Handling security breaches and recovery procedures",
      lessons: 10,
      color: "text-warning"
    },
    {
      title: "Compliance",
      description: "GDPR, HIPAA, and other regulatory requirements",
      lessons: 6,
      color: "text-accent"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-primary" />
              Learning Hub
            </h1>
            <p className="text-muted-foreground">
              Educational resources and tutorials to enhance your cybersecurity knowledge
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Video Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => {
                const Icon = video.icon;
                return (
                  <a
                    key={i}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="p-6 bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-glow transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {video.category}
                          </Badge>
                          <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Play className="w-3 h-3" />
                          {video.duration}
                        </span>
                        <span className="text-xs text-primary group-hover:font-bold">
                          Watch on YouTube →
                        </span>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic, i) => (
                <Card key={i} className="p-6 bg-card/50 border-border/50 hover:shadow-glow transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-bold ${topic.color}`}>{topic.title}</h3>
                    <Badge variant="outline">{topic.lessons} lessons</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <Card className="mt-12 p-8 bg-gradient-cyber border-border/50 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Cybersecurity threats evolve constantly. Keep learning and stay informed about the latest security trends and best practices.
            </p>
            <Badge variant="outline" className="border-primary/50 text-primary">
              New content added weekly
            </Badge>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Learning;