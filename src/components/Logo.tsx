
import React from 'react';
import GlitchText from './GlitchText';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-3">
        <svg className="w-full h-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main circle with glow */}
          <circle cx="25" cy="25" r="22" stroke="#00f0ff" strokeWidth="1.5" className="animate-pulse"/>
          
          {/* Inner hexagon */}
          <path d="M25 10L35 17.5V32.5L25 40L15 32.5V17.5L25 10Z" fill="#1A1F2C" stroke="#9b30ff" strokeWidth="0.5" />
          
          {/* Central eye/lens */}
          <circle cx="25" cy="25" r="8" fill="#000000" />
          <circle cx="25" cy="25" r="6" fill="#9b30ff" className="animate-pulse" />
          <circle cx="25" cy="25" r="3" fill="#00f0ff" />
          
          {/* Circuit lines */}
          <path d="M13 20L25 25L37 20" stroke="#00f0ff" strokeWidth="0.5" />
          <path d="M13 30L25 25L37 30" stroke="#00f0ff" strokeWidth="0.5" />
          
          {/* Dots at junctions */}
          <circle cx="13" cy="20" r="1" fill="#00f0ff" />
          <circle cx="37" cy="20" r="1" fill="#00f0ff" />
          <circle cx="13" cy="30" r="1" fill="#00f0ff" />
          <circle cx="37" cy="30" r="1" fill="#00f0ff" />
          
          {/* Decorative elements */}
          <path d="M10 25H15" stroke="#00f0ff" strokeWidth="0.5" />
          <path d="M35 25H40" stroke="#00f0ff" strokeWidth="0.5" />
          <path d="M25 10V15" stroke="#00f0ff" strokeWidth="0.5" />
          <path d="M25 35V40" stroke="#00f0ff" strokeWidth="0.5" />
        </svg>
      </div>
      <span className="text-white font-bold text-xl">
        <GlitchText text="NEXUS AI" />
      </span>
    </div>
  );
};

export default Logo;
