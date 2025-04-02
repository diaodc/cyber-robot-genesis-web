
import { Button } from "@/components/ui/button";
import GlitchText from "./GlitchText";
import FlowLines from "./FlowLines";
import ImageCarousel from "./ImageCarousel";

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
      
      {/* Flow Lines Animation */}
      <FlowLines />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 md:text-left text-center">
            <div className="inline-block bg-muted px-4 py-1.5 rounded-full mb-2">
              <span className="text-cyber-blue text-sm font-medium tracking-wider">NEXT GEN AI ROBOTICS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">The Future of </span>
              <span className="text-cyber-blue">
                <GlitchText text="Robotic Intelligence" />
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Pioneering the next generation of AI-powered robotics designed for the challenges of tomorrow. Discover how our robots are revolutionizing industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <Button className="bg-cyber-blue text-black hover:bg-cyber-blue/80 btn-glow text-lg py-7 px-10">
                Explore Models
              </Button>
              <Button variant="outline" className="border-cyan-500 text-white hover:bg-muted text-lg py-7 px-10">
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
              {/* Robot Images Carousel */}
              <ImageCarousel className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-xl shadow-cyan-500/10 aspect-square" />
              
              {/* Specs overlay */}
              <div className="absolute -right-5 -bottom-5 bg-black/70 backdrop-blur-md border border-cyan-500/30 p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="text-cyan-500 font-mono text-sm">MODEL X-1290</div>
                <div className="text-white font-bold">NEURAL PROCESSOR</div>
                <div className="text-gray-400 text-sm">32 TFLOPS • 8 Cores</div>
                <div className="h-1 w-full bg-cyan-900 mt-2">
                  <div className="h-full w-3/4 bg-cyan-500 animate-pulse"></div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -left-5 top-8 bg-black/70 backdrop-blur-md border border-cyber-purple/30 p-3 rounded-lg max-w-[180px] animate-float">
                <div className="text-cyber-purple font-mono text-xs">AI EVOLUTION</div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="text-center">
                    <div className="text-white text-lg font-bold">250+</div>
                    <div className="text-gray-400 text-xs">Models</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-lg font-bold">99.8%</div>
                    <div className="text-gray-400 text-xs">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-lg font-bold">1.2ms</div>
                    <div className="text-gray-400 text-xs">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-lg font-bold">128TB</div>
                    <div className="text-gray-400 text-xs">Memory</div>
                  </div>
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
