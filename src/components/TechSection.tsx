
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "./ImageCarousel";

const techItems = [
  { 
    name: "Quantum Processing", 
    value: 94,
    description: "Our robots utilize quantum processors for unprecedented computational abilities.",
    metrics: {
      cores: "128 qubits",
      speed: "8.7 million TOPS",
      efficiency: "94.2%"
    }
  },
  { 
    name: "Neural Networks", 
    value: 88,
    description: "Advanced neural networks allow for human-like decision making and learning.",
    metrics: {
      layers: "256 layers",
      neurons: "1.8 trillion",
      efficiency: "88.5%"
    }
  },
  { 
    name: "Nano Robotics", 
    value: 78,
    description: "Microscopic robotic components enable precision at the cellular level.",
    metrics: {
      size: "0.8 nanometers",
      units: "50 billion",
      efficiency: "78.3%"
    }
  },
  { 
    name: "Adaptive AI", 
    value: 92,
    description: "Self-improving artificial intelligence that evolves to meet changing needs.",
    metrics: {
      learning: "5.2 TB/hr",
      adaptation: "98.7ms",
      efficiency: "92.4%"
    }
  },
  { 
    name: "Molecular Fabrication", 
    value: 85,
    description: "Assembly of structures at molecular level for self-healing materials.",
    metrics: {
      precision: "0.001 angstroms",
      speed: "10⁹ atoms/sec",
      efficiency: "85.1%"
    }
  },
];

const TechSection = () => {
  return (
    <section id="technology" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-block bg-muted/50 px-3 py-1 rounded-full">
              <span className="text-cyber-blue text-sm">ADVANCED TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-white">Future-Proof </span>
              <span className="text-cyber-blue">Technology</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Our robots are built on revolutionary technology platforms that stay ahead of industry trends. We invest heavily in research and development to ensure our systems remain at the cutting edge of what's possible.
            </p>
            
            <div className="space-y-8">
              {techItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-cyber-blue font-bold">{item.value}%</div>
                  </div>
                  <Progress value={item.value} className="h-2 bg-muted/30">
                    <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"></div>
                  </Progress>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  
                  <div className="bg-muted/20 rounded-md p-2 grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(item.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-gray-500 capitalize mb-1">{key}</div>
                        <div className="text-white font-mono">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <ImageCarousel 
              className="rounded-xl overflow-hidden h-[600px] border border-cyber-blue/20 shadow-lg shadow-cyber-blue/10" 
              interval={7000}
            />
            
            {/* Additional tech data overlay */}
            <div className="absolute -top-5 -right-5 bg-black/70 backdrop-blur-md border border-cyber-blue/30 p-5 rounded-lg shadow-lg animate-float">
              <div className="text-cyber-blue font-mono text-sm mb-2">RESEARCH METRICS</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-xs">Annual R&D Budget</div>
                  <div className="text-white font-bold text-lg">$4.2B</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Patents Filed</div>
                  <div className="text-white font-bold text-lg">1,285</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">PhD Researchers</div>
                  <div className="text-white font-bold text-lg">328</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Labs Worldwide</div>
                  <div className="text-white font-bold text-lg">42</div>
                </div>
              </div>
              
              <Separator className="my-3 bg-cyber-blue/30" />
              
              <div className="text-cyber-blue font-mono text-sm mb-2">BREAKTHROUGH TECH</div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Quantum Memory:</span>
                  <span className="text-white">8.7 EB</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Neural Density:</span>
                  <span className="text-white">12.4 T/cm³</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Energy Efficiency:</span>
                  <span className="text-white">0.03 watts/TFLOP</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-5 bg-black/70 backdrop-blur-md border border-cyber-purple/30 p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-cyber-purple font-mono text-sm mb-1">AI EVOLUTION TIMELINE</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-blue mr-2"></div>
                  <span className="text-gray-400">2025:</span>
                  <span className="text-white ml-2">Quantum Neural Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-purple mr-2"></div>
                  <span className="text-gray-400">2027:</span>
                  <span className="text-white ml-2">Sentience Protocol v1</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-blue mr-2"></div>
                  <span className="text-gray-400">2029:</span>
                  <span className="text-white ml-2">Molecular Computation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-purple mr-2"></div>
                  <span className="text-gray-400">2032:</span>
                  <span className="text-white ml-2">Human-AI Symbiosis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
