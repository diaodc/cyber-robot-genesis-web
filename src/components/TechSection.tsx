
import { Progress } from "@/components/ui/progress";

const techItems = [
  { 
    name: "Quantum Processing", 
    value: 94,
    description: "Our robots utilize quantum processors for unprecedented computational abilities."
  },
  { 
    name: "Neural Networks", 
    value: 88,
    description: "Advanced neural networks allow for human-like decision making and learning."
  },
  { 
    name: "Nano Robotics", 
    value: 78,
    description: "Microscopic robotic components enable precision at the cellular level."
  },
  { 
    name: "Adaptive AI", 
    value: 92,
    description: "Self-improving artificial intelligence that evolves to meet changing needs."
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
              <span className="text-cyber-blue text-glow">Technology</span>
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
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-square border border-cyber-blue/20 shadow-lg shadow-cyber-blue/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Advanced Robot Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Tech overlay with circuit pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgTCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwgMjQwLCAyNTUsIDAuMTUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
            </div>
            
            {/* Floating tech specs */}
            <div className="absolute top-10 -right-5 bg-black/70 backdrop-blur-md border border-cyber-blue/30 p-4 rounded-lg shadow-lg max-w-[200px] animate-float">
              <div className="text-cyber-blue font-mono text-sm">QUANTUM CORE</div>
              <div className="text-white font-bold">8800 QUBITS</div>
              <div className="text-gray-400 text-sm">Quantum Supremacy</div>
              <div className="h-1 w-full bg-cyan-900 mt-2">
                <div className="h-full w-5/6 bg-cyan-500 animate-pulse"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-10 bg-black/70 backdrop-blur-md border border-cyber-purple/30 p-4 rounded-lg shadow-lg max-w-[220px] animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-cyber-purple font-mono text-sm">NEURAL NETWORK</div>
              <div className="text-white font-bold">128B PARAMETERS</div>
              <div className="text-gray-400 text-sm">Consciousness-level AI</div>
              <div className="h-1 w-full bg-purple-900 mt-2">
                <div className="h-full w-4/5 bg-cyber-purple animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
