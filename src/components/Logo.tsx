
import React from 'react';
import GlitchText from './GlitchText';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-3">
        <svg className="w-full h-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main outer circle */}
          <circle cx="25" cy="25" r="24" stroke="url(#gradientStroke)" strokeWidth="1.5" />
          
          {/* Rotating ring */}
          <circle cx="25" cy="25" r="20" stroke="url(#gradientRing)" strokeWidth="0.8" strokeDasharray="4 4" className="animate-rotate-slow" />
          
          {/* Inner hexagon */}
          <path 
            d="M25 10L35 17.5V32.5L25 40L15 32.5V17.5L25 10Z" 
            fill="#090A0F" 
            stroke="url(#gradientHex)" 
            strokeWidth="0.7" 
          />
          
          {/* Tech decorations */}
          <g className="animate-pulse">
            <circle cx="20" cy="17" r="1" fill="#9b30ff" />
            <circle cx="30" cy="17" r="1" fill="#00f0ff" />
            <circle cx="20" cy="33" r="1" fill="#00f0ff" />
            <circle cx="30" cy="33" r="1" fill="#9b30ff" />
          </g>
          
          {/* Central lens */}
          <circle cx="25" cy="25" r="8" fill="#090A0F" stroke="#9b30ff" strokeWidth="0.5" />
          <circle cx="25" cy="25" r="6" fill="#090A0F" stroke="#00f0ff" strokeWidth="0.5" />
          
          {/* Core element */}
          <circle cx="25" cy="25" r="4" fill="url(#coreGradient)" className="animate-pulse" />
          
          {/* Scan line */}
          <line x1="15" y1="25" x2="35" y2="25" stroke="#00f0ff" strokeWidth="0.2" strokeDasharray="1 1" className="animate-pulse" />
          <line x1="25" y1="15" x2="25" y2="35" stroke="#9b30ff" strokeWidth="0.2" strokeDasharray="1 1" className="animate-pulse" />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradientStroke" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#9b30ff" />
            </linearGradient>
            
            <linearGradient id="gradientRing" x1="25" y1="5" x2="25" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9b30ff" />
              <stop offset="100%" stopColor="#00f0ff" />
            </linearGradient>
            
            <linearGradient id="gradientHex" x1="15" y1="10" x2="35" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#9b30ff" />
            </linearGradient>
            
            <radialGradient id="coreGradient" cx="25" cy="25" r="5" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9b30ff" />
              <stop offset="70%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <span className="text-white font-bold text-xl">
        <GlitchText text="NEXUS AI" />
      </span>
    </div>
  );
};

export default Logo;
