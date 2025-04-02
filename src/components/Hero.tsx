
import { Button } from "@/components/ui/button";
import GlitchText from "./GlitchText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Robot Circuit Lines */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[800px] opacity-20">
          <div className="w-full h-full border-2 border-cyber-blue rounded-full animate-rotate-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-cyber-purple rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white/30 rounded-full animate-rotate-slow"></div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 md:text-left text-center">
            <div className="inline-block bg-muted px-4 py-1.5 rounded-full mb-2">
              <span className="text-cyber-blue text-sm font-medium tracking-wider">NEXT GEN AI ROBOTICS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">The Future of </span>
              <span className="text-cyber-blue text-glow">
                <GlitchText text="Robotic Intelligence" />
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Pioneering the next generation of AI-powered robotics designed for the challenges of tomorrow. Discover how our robots are revolutionizing industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <Button className="bg-cyber-blue text-black hover:bg-cyber-blue/80 btn-glow text-lg py-6 px-8">
                Explore Models
              </Button>
              <Button variant="outline" className="border-cyan-500 text-white hover:bg-muted text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-8 justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-cyber-blue"></div>
                <div className="w-10 h-10 rounded-full bg-cyber-purple"></div>
                <div className="w-10 h-10 rounded-full bg-cyber-green"></div>
              </div>
              <span className="text-gray-400">Trusted by 1000+ global companies</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Robot Image with glowing effects */}
              <div className="w-full aspect-square relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Advanced AI Robot" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Glowing points on the robot */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyber-blue rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyber-purple rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-cyber-blue rounded-full animate-pulse"></div>
              </div>
              
              {/* Specs overlay */}
              <div className="absolute -right-5 -bottom-5 bg-black/70 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="text-cyan-500 font-mono text-sm">MODEL X-1290</div>
                <div className="text-white font-bold">NEURAL PROCESSOR</div>
                <div className="text-gray-400 text-sm">32 TFLOPS • 8 Cores</div>
                <div className="h-1 w-full bg-cyan-900 mt-2">
                  <div className="h-full w-3/4 bg-cyan-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
