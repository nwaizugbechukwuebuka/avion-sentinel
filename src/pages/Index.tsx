import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Methodology from "@/components/Methodology";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <Methodology />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
