
import { Cpu, Shield, Zap, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Advanced Neural Network",
    description: "Our robots utilize a cutting-edge neural network with over 100 billion parameters for human-like decision making.",
    icon: Cpu,
    color: "cyber-blue",
  },
  {
    title: "Quantum Security",
    description: "Military-grade encryption and real-time threat detection ensure your data always stays protected.",
    icon: Shield,
    color: "cyber-purple",
  },
  {
    title: "Accelerated Learning",
    description: "Adaptive learning algorithms allow our robots to master new tasks 200% faster than conventional AI.",
    icon: Zap,
    color: "cyber-red",
  },
  {
    title: "Cloud Integration",
    description: "Seamless connection to our secure cloud platform for continuous updates and expanded capabilities.",
    icon: Server,
    color: "cyber-green",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Revolutionary </span>
            <span className="text-cyber-blue text-glow">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our robotics platform integrates cutting-edge technologies to deliver unparalleled performance across all metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-cyber-blue/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardContent>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
