
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-cyber-blue transition-colors duration-300">Features</a>
            <a href="#robots" className="text-white hover:text-cyber-blue transition-colors duration-300">Our Robots</a>
            <a href="#technology" className="text-white hover:text-cyber-blue transition-colors duration-300">Technology</a>
            <a href="#about" className="text-white hover:text-cyber-blue transition-colors duration-300">About Us</a>
            <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 animate-accordion-down">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-white hover:text-cyber-blue transition-colors duration-300">Features</a>
              <a href="#robots" className="text-white hover:text-cyber-blue transition-colors duration-300">Our Robots</a>
              <a href="#technology" className="text-white hover:text-cyber-blue transition-colors duration-300">Technology</a>
              <a href="#about" className="text-white hover:text-cyber-blue transition-colors duration-300">About Us</a>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
