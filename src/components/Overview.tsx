import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Search, AlertTriangle, Users, Database } from "lucide-react";

const Overview = () => {
  const objectives = [
    {
      icon: Target,
      title: "Simulate Attacker Techniques",
      description: "Recreate real-world cyber threats against aircraft-like communication platforms in controlled environments."
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Identify security gaps in cockpit-to-ground messages, maintenance portals, and CI/CD update systems."
    },
    {
      icon: Shield,
      title: "Secure Engineering",
      description: "Apply MFA, digital signing, reproducible builds, and failover mechanisms to harden systems."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Build SIEM detections and aviation-specific incident response playbooks for cyber events."
    },
    {
      icon: Users,
      title: "Research & Innovation",
      description: "Explore emerging risks like GPS spoofing and misinformation in flight operations."
    }
  ];

  const threats = [
    {
      icon: Users,
      title: "Credential Compromise",
      description: "Phishing attacks targeting crew and maintenance staff credentials"
    },
    {
      icon: Database,
      title: "Communication Tampering",
      description: "Replay and injection attacks on cockpit-ground data streams"
    },
    {
      icon: Shield,
      title: "Supply Chain Attacks",
      description: "Malicious dependency injection in flight software CI/CD pipelines"
    },
    {
      icon: AlertTriangle,
      title: "Service Disruption",
      description: "DoS/DDoS attempts against ground communication servers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Overview Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aviation-blue mb-6">
            Project Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This project demonstrates comprehensive cybersecurity assessment and hardening of aircraft 
            communication systems through controlled laboratory simulations, secure software craftsmanship, 
            and curiosity-driven research into emerging aviation cyber threats.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-aviation-blue mb-10 text-center">
            🎯 Key Objectives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="h-full border-aviation-lighter/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-aviation-lighter/20 rounded-lg">
                      <objective.icon className="w-6 h-6 text-aviation-blue" />
                    </div>
                    <CardTitle className="text-lg text-aviation-blue">
                      {objective.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Threat Scenario */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-aviation-blue mb-6 text-center">
            🔍 Simulated Threat Scenarios
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            Modern aircraft rely on SaaS-style platforms for communication, scheduling, and maintenance. 
            These systems present attractive targets for various threat actors:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className="text-center border-threat-red/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-threat-red/10 rounded-full">
                      <threat.icon className="w-6 h-6 text-threat-red" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-threat-red">
                    {threat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {threat.description}
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

export default Overview;