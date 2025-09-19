import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle,
  Award,
  Lightbulb,
  Settings,
  Eye,
  Brain,
  Lock,
  Search
} from "lucide-react";

const Impact = () => {
  const businessImpacts = [
    {
      icon: Shield,
      title: "Enhanced Safety & Trust",
      description: "Strengthens confidence in aircraft communication platforms through proven security measures"
    },
    {
      icon: TrendingUp,
      title: "Operational Resilience", 
      description: "Prevents disruptions caused by compromised updates or malicious instructions"
    },
    {
      icon: Users,
      title: "Enterprise Communication Security",
      description: "Builds resilience applicable to SaaS-style aviation and enterprise systems"
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Strengthens security posture for safety-critical industry regulations"
    }
  ];

  const keyLearnings = [
    "Safety-critical systems require integrity and authenticity above all other considerations",
    "Secure CI/CD pipelines with signed artifacts are non-negotiable in aviation environments", 
    "SIEM monitoring and incident playbooks significantly reduce detection and response cycles",
    "Curiosity-driven research (GPS spoofing, misinformation) adds forward-looking security value"
  ];

  const skills = [
    { category: "Penetration Testing", tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Custom Scripts"], color: "threat-red" },
    { category: "Secure Development", tools: ["MFA Implementation", "RBAC", "Artifact Signing", "CI/CD Hardening"], color: "cyber-green" },
    { category: "Threat Intelligence", tools: ["MITRE ATT&CK", "Aviation ICS Mapping", "Threat Modeling"], color: "aviation-blue" },
    { category: "SIEM Engineering", tools: ["ELK Stack", "Splunk Rules", "Custom Dashboards"], color: "warning-amber" },
    { category: "Research & Innovation", tools: ["GPS Spoofing Analysis", "Misinformation Detection", "Emerging Threats"], color: "aviation-light" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Business Impact */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-aviation-blue mb-6">
              📈 Business Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstrable value in aviation cybersecurity and enterprise communication security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {businessImpacts.map((impact, index) => (
              <Card key={index} className="border-aviation-lighter/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-aviation-lighter/20 rounded-lg">
                      <impact.icon className="w-6 h-6 text-aviation-blue" />
                    </div>
                    <CardTitle className="text-xl text-aviation-blue">
                      {impact.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-aviation-blue mb-10 text-center">
            🧾 Critical Insights
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-cyber-green/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {keyLearnings.map((learning, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-1 bg-cyber-green/20 rounded-full mt-1">
                        <Lightbulb className="w-4 h-4 text-cyber-green" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {learning}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Demonstrated */}
        <div>
          <h3 className="text-3xl font-bold text-aviation-blue mb-10 text-center">
            🛠 Technical Expertise Demonstrated
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-aviation-lighter/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg`} style={{ backgroundColor: `hsl(var(--${skill.color}) / 0.2)` }}>
                      {skill.category === "Penetration Testing" && <Search className="w-6 h-6" style={{ color: `hsl(var(--${skill.color}))` }} />}
                      {skill.category === "Secure Development" && <Lock className="w-6 h-6" style={{ color: `hsl(var(--${skill.color}))` }} />}
                      {skill.category === "Threat Intelligence" && <Eye className="w-6 h-6" style={{ color: `hsl(var(--${skill.color}))` }} />}
                      {skill.category === "SIEM Engineering" && <Settings className="w-6 h-6" style={{ color: `hsl(var(--${skill.color}))` }} />}
                      {skill.category === "Research & Innovation" && <Brain className="w-6 h-6" style={{ color: `hsl(var(--${skill.color}))` }} />}
                    </div>
                    <CardTitle className="text-xl" style={{ color: `hsl(var(--${skill.color}))` }}>
                      {skill.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="outline" 
                        className="text-sm"
                        style={{ 
                          borderColor: `hsl(var(--${skill.color}) / 0.3)`,
                          color: `hsl(var(--${skill.color}))`
                        }}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;