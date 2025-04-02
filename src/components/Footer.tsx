
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import GlitchText from "./GlitchText";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 relative mr-2">
                <div className="absolute inset-0 border-2 border-cyber-blue rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyber-blue font-bold text-xl">C</span>
                </div>
              </div>
              <span className="text-white font-bold text-xl">
                <GlitchText text="CYBER ROBOT" />
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Pushing the boundaries of what's possible in robotics and artificial intelligence. Our mission is to create the future of intelligent machines.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-cyber-blue transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-cyber-blue transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-cyber-blue transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-cyber-blue transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-white hover:bg-cyber-blue transition-colors duration-300">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Industrial Robots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Companion AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Scientific Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Military Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Healthcare Robots</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyber-blue">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2023 Cyber Robot Genesis. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cyber-blue">Terms</a>
            <a href="#" className="text-gray-500 hover:text-cyber-blue">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-cyber-blue">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
