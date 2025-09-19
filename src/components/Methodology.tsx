import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Search, 
  Shield, 
  Eye, 
  Brain,
  Target,
  Lock,
  AlertTriangle,
  Database,
  Zap
} from "lucide-react";

const Methodology = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Threat Modeling",
      icon: Target,
      color: "bg-aviation-blue",
      items: [
        "Defined attacker personas: state-sponsored APT vs hacktivist groups",
        "Identified critical assets: crew authentication, communication data integrity, software updates",
        "Mapped attack vectors and entry points in aviation communication systems"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Penetration Testing",
      icon: Search,
      color: "bg-threat-red",
      items: [
        "API & web application fuzzing for maintenance portal vulnerabilities",
        "Replay attacks against cockpit-ground data streams and communication protocols",
        "Malicious dependency injection in vulnerable CI/CD pipeline simulation",
        "Stress-tested communication servers with simulated DoS attacks in Dockerized lab"
      ]
    },
    {
      phase: "Phase 3",
      title: "Secure Software Craftsmanship", 
      icon: Shield,
      color: "bg-cyber-green",
      items: [
        "Enforced end-to-end encryption + digital signing for all cockpit messages",
        "Hardened CI/CD pipelines with artifact signing, dependency pinning, reproducible builds",
        "Applied RBAC + MFA for crew and ground staff authentication systems",
        "Implemented graceful failover mechanisms for communication outages"
      ]
    },
    {
      phase: "Phase 4",
      title: "Detection & Response",
      icon: Eye,
      color: "bg-warning-amber",
      items: [
        "Built SIEM rules for abnormal communication traffic and repeated failed crew logins",
        "Designed aviation cyber incident playbooks for compromised maintenance portals",
        "Created detection mechanisms for CI/CD pipeline anomalies and communication tampering",
        "Established response procedures for various aviation cybersecurity scenarios"
      ]
    },
    {
      phase: "Phase 5",
      title: "Curiosity & Research",
      icon: Brain,
      color: "bg-aviation-light",
      items: [
        "Explored GPS spoofing techniques in safe, simulated environments",
        "Researched misinformation injection methods into communication channels",
        "Mapped discovered threats to MITRE ATT&CK framework for ICS/aviation",
        "Documented emerging threat vectors and potential countermeasures"
      ]
    }
  ];

  const deliverables = [
    { icon: Search, title: "Penetration Test Report", desc: "Comprehensive vulnerability assessment with business risk analysis" },
    { icon: Lock, title: "Hardened CI/CD Configurations", desc: "Before/after comparison of security implementations" },
    { icon: AlertTriangle, title: "Incident Response Playbooks", desc: "Aviation-specific crisis management procedures" },
    { icon: Database, title: "SIEM Rules & Dashboards", desc: "Real-time monitoring for aircraft communication systems" },
    { icon: Brain, title: "Research Appendix", desc: "GPS spoofing and misinformation threat analysis" },
    { icon: Zap, title: "Lab Evidence", desc: "Screenshots and logs from attack/defense demonstrations" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Methodology Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aviation-blue mb-6">
            ⚙ Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic five-phase approach to assess, test, and harden aircraft communication systems
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-8 mb-20">
          {phases.map((phase, index) => (
            <Card key={index} className="overflow-hidden border-aviation-lighter/20 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${phase.color}`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 border-aviation-blue/30 text-aviation-blue">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-2xl text-aviation-blue">
                      {phase.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-aviation-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Deliverables */}
        <div>
          <h3 className="text-3xl font-bold text-aviation-blue mb-10 text-center">
            📂 Key Deliverables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="text-center border-aviation-lighter/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-aviation-lighter/20 rounded-full">
                      <deliverable.icon className="w-6 h-6 text-aviation-blue" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-aviation-blue">
                    {deliverable.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {deliverable.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;