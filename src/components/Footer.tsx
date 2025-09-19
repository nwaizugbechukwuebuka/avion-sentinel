import { Shield, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-aviation-blue text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Secure Aviation</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional cybersecurity portfolio demonstrating expertise in aviation 
              communication security, penetration testing, and secure software craftsmanship.
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Project Components</h4>
            <ul className="space-y-2 text-white/80">
              <li>• Penetration Testing Lab</li>
              <li>• CI/CD Security Hardening</li>
              <li>• SIEM Rules & Dashboards</li>
              <li>• Incident Response Playbooks</li>
              <li>• GPS Spoofing Research</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Professional Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Github className="w-5 h-5" />
                <span>GitHub Portfolio</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5" />
                <span>Professional Inquiries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            <strong>Ethical Disclaimer:</strong> All penetration testing and simulations conducted in controlled laboratory environments. 
            No real aircraft systems or production infrastructure were accessed or targeted.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Professional Cybersecurity Portfolio • Aviation Communication Security Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;