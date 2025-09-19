import { Shield, Plane, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aviation-cyber.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Aircraft cockpit with cybersecurity elements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-blue/90 via-aviation-blue/70 to-aviation-light/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Plane className="w-12 h-12 text-white" />
          <Shield className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Secure Aircraft</span>
          <span className="block text-warning-amber">Communications</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Penetration Testing & Hardening of Aviation Communication Systems
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Lock className="w-5 h-5" />
            <span>Controlled Lab Environment</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Search className="w-5 h-5" />
            <span>Penetration Testing</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
            <Shield className="w-5 h-5" />
            <span>Secure Engineering</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/20 backdrop-blur-sm transition-all duration-300"
          >
            View Project Details
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-aviation-blue transition-all duration-300"
          >
            Technical Report
          </Button>
        </div>
        
        {/* Warning Banner */}
        <div className="mt-12 p-4 bg-warning-amber/20 backdrop-blur-sm rounded-lg border border-warning-amber/30 max-w-2xl mx-auto">
          <p className="text-white/90 text-sm">
            <strong>⚠ Ethical Note:</strong> All simulations conducted in controlled lab environments. 
            No real aircraft systems or production infrastructure were targeted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;