
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import RobotModels from "@/components/RobotModels";
import TechSection from "@/components/TechSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <BackgroundElements />
      <Navbar />
      <Hero />
      <FeatureSection />
      <RobotModels />
      <TechSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
