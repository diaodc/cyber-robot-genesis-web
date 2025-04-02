
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const robotModels = [
  {
    id: "sentinel",
    name: "Sentinel X9",
    category: "Industrial",
    description: "Heavy-duty industrial robot with advanced precision manufacturing capabilities.",
    specs: ["9-axis movement", "2 ton lifting capacity", "Neural sensory array", "Self-diagnostic repair"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: "nexus",
    name: "Nexus AI-7",
    category: "Companion",
    description: "Intuitive AI companion designed to assist with daily tasks and provide intelligent conversation.",
    specs: ["Natural language processing", "Facial recognition", "Emotion detection", "Adaptive personality"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: "quantum",
    name: "Quantum Droid",
    category: "Scientific",
    description: "Advanced research assistant with quantum computing capabilities for scientific breakthroughs.",
    specs: ["Quantum processor", "Multi-dimensional analysis", "Chemical synthesis", "Autonomous experimentation"],
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
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
            <span className="text-cyber-purple text-glow">Models</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our cutting-edge robot lineup designed for various applications and industries.
          </p>
        </div>

        <Tabs defaultValue="sentinel" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
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
                      <div className="mb-4 inline-block bg-muted/50 px-3 py-1 rounded-full">
                        <span className="text-cyber-purple text-sm">{robot.category.toUpperCase()} MODEL</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">{robot.name}</h3>
                      <p className="text-gray-300 text-lg mb-6">{robot.description}</p>
                      
                      <div className="bg-muted/30 rounded-xl p-6 mb-8 border border-white/10">
                        <div className="text-white font-semibold mb-4">KEY SPECIFICATIONS:</div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {robot.specs.map((spec, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-cyber-purple mr-3"></div>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-4">
                        <Button className="bg-cyber-purple text-white hover:bg-cyber-purple/80 btn-glow-secondary">
                          Technical Details
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                          Request Demo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <div className="relative rounded-xl overflow-hidden h-[400px] border border-cyber-purple/20 shadow-lg shadow-cyber-purple/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-cyber-blue/10"></div>
                        <img 
                          src={robot.image} 
                          alt={robot.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        
                        {/* Tech pattern overlay */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0xIDFoMXYxaC0xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
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
