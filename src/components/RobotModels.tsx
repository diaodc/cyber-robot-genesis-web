
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const robotModels = [
  {
    id: "sentinel",
    name: "Sentinel X9",
    category: "Industrial",
    description: "Heavy-duty industrial robot with advanced precision manufacturing capabilities.",
    specs: ["9-axis movement", "2 ton lifting capacity", "Neural sensory array", "Self-diagnostic repair"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    details: {
      weight: "1,850 kg",
      height: "2.4 meters",
      power: "Nuclear fusion cell",
      operatingTime: "10 years continuous",
      processors: "Quantum neural cores",
      learning: "Advanced reinforcement learning",
      applications: ["Aerospace", "Automotive", "Shipbuilding", "Heavy construction"]
    }
  },
  {
    id: "nexus",
    name: "Nexus AI-7",
    category: "Companion",
    description: "Intuitive AI companion designed to assist with daily tasks and provide intelligent conversation.",
    specs: ["Natural language processing", "Facial recognition", "Emotion detection", "Adaptive personality"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    details: {
      weight: "48 kg",
      height: "1.7 meters",
      power: "Quantum battery",
      operatingTime: "30 days per charge",
      processors: "Emotional intelligence core",
      learning: "Human behavior adaptive learning",
      applications: ["Home assistance", "Elderly care", "Education", "Mental health support"]
    }
  },
  {
    id: "quantum",
    name: "Quantum Droid",
    category: "Scientific",
    description: "Advanced research assistant with quantum computing capabilities for scientific breakthroughs.",
    specs: ["Quantum processor", "Multi-dimensional analysis", "Chemical synthesis", "Autonomous experimentation"],
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    details: {
      weight: "320 kg",
      height: "1.9 meters",
      power: "Hydrogen cell array",
      operatingTime: "3 years per core reload",
      processors: "Quantum supercomputing mesh",
      learning: "Scientific method AI framework",
      applications: ["Pharmaceutical research", "Genomics", "Material science", "Theoretical physics"]
    }
  },
  {
    id: "atlas",
    name: "Atlas Defender",
    category: "Security",
    description: "State-of-the-art security robot with advanced threat detection and neutralization capabilities.",
    specs: ["360° surveillance", "Thermal imaging", "Non-lethal defense systems", "Predictive threat analysis"],
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096",
    details: {
      weight: "280 kg",
      height: "2.1 meters",
      power: "Hybrid solar-kinetic cells",
      operatingTime: "5 years continuous",
      processors: "Military-grade tactical AI",
      learning: "Scenario-based threat adaptation",
      applications: ["Government facilities", "Corporate security", "Infrastructure protection", "Disaster response"]
    }
  },
];

const RobotModels = () => {
  const [activeTab, setActiveTab] = useState("sentinel");

  return (
    <section id="robots" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our Robot </span>
            <span className="text-cyber-purple">Models</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our cutting-edge robot lineup designed for various applications and industries.
          </p>
        </div>

        <Tabs defaultValue="sentinel" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <TabsList className="bg-muted/50 backdrop-blur-md p-1">
              {robotModels.map((robot) => (
                <TabsTrigger 
                  key={robot.id}
                  value={robot.id}
                  className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple data-[state=active]:border-b-2 data-[state=active]:border-cyber-purple px-8 py-3"
                >
                  {robot.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {robotModels.map((robot) => (
            <TabsContent key={robot.id} value={robot.id} className="mt-0">
              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="mb-4">
                        <Badge className="bg-cyber-purple text-white mr-2">{robot.category.toUpperCase()}</Badge>
                        <Badge variant="outline" className="border-white/20 text-white">VERSION 2.7</Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">{robot.name}</h3>
                      <p className="text-gray-300 text-lg mb-6">{robot.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-muted/30 rounded-xl p-4 border border-white/10">
                          <div className="text-white font-semibold mb-4">SPECIFICATIONS:</div>
                          <ul className="space-y-3">
                            {robot.specs.map((spec, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <div className="w-2 h-2 rounded-full bg-cyber-purple mr-3"></div>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-muted/30 rounded-xl p-4 border border-white/10">
                          <div className="text-white font-semibold mb-4">TECHNICAL DATA:</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Weight:</span>
                              <span className="text-white">{robot.details.weight}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Height:</span>
                              <span className="text-white">{robot.details.height}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Power Source:</span>
                              <span className="text-white">{robot.details.power}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Operation Time:</span>
                              <span className="text-white">{robot.details.operatingTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Core Processor:</span>
                              <span className="text-white">{robot.details.processors}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <div className="text-white font-semibold mb-3">APPLICATIONS:</div>
                        <div className="flex flex-wrap gap-2">
                          {robot.details.applications.map((app, index) => (
                            <Badge key={index} variant="outline" className="bg-muted/20 text-white border-cyber-blue/30">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button className="bg-cyber-purple text-white hover:bg-cyber-purple/80 btn-glow-secondary py-6 px-8">
                          Technical Details
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 py-6 px-8">
                          Request Demo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <div className="relative rounded-xl overflow-hidden h-[500px] border border-cyber-purple/20 shadow-lg shadow-cyber-purple/10">
                        <img 
                          src={robot.image} 
                          alt={robot.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        
                        {/* Tech pattern overlay */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0xIDFoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
                        
                        {/* Floating tech specs */}
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md p-3 rounded-lg">
                          <div className="text-cyber-blue font-mono text-xs">MODEL ID</div>
                          <div className="text-white font-bold">{robot.id.toUpperCase()}-7200</div>
                        </div>
                        
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-lg">
                          <div className="text-cyber-purple font-mono text-xs">AI LEARNING</div>
                          <div className="text-white font-bold text-sm">{robot.details.learning}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RobotModels;
