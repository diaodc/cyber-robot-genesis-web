
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20"></div>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgTCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative p-8 md:p-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to <span className="text-cyber-blue text-glow">Transform</span> Your Future?
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Join thousands of forward-thinking companies already using our robotic solutions to revolutionize their operations and stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-cyber-blue text-black hover:bg-cyber-blue/80 btn-glow text-lg px-8 py-6">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 text-lg px-8 py-6">
                  View Case Studies
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyber-blue">98%</div>
                  <div className="text-gray-400">Efficiency Increase</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyber-blue">24/7</div>
                  <div className="text-gray-400">Continuous Operation</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyber-blue">500+</div>
                  <div className="text-gray-400">Global Deployments</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-cyber-blue">88%</div>
                  <div className="text-gray-400">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
