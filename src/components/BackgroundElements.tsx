
import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64">
        <div className="absolute w-full h-full rounded-full border border-cyber-blue/20 animate-spin-slow"></div>
        <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border border-cyber-blue/10 animate-reverse-spin"></div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80">
        <div className="absolute w-full h-full rounded-full border border-cyber-blue/15 animate-spin-slow"></div>
        <div className="absolute w-4/5 h-4/5 top-1/10 left-1/10 rounded-full border border-cyber-blue/10 animate-reverse-spin"></div>
      </div>

      {/* Additional decorative circles with purple */}
      <div className="absolute top-2/3 left-1/3 w-96 h-96">
        <div className="absolute w-full h-full rounded-full border border-cyber-purple/10 animate-spin-slow"></div>
        <div className="absolute w-4/5 h-4/5 top-1/10 left-1/10 rounded-full border border-cyber-blue/15 animate-reverse-spin"></div>
        <div className="absolute w-3/5 h-3/5 top-1/5 left-1/5 rounded-full border border-cyber-purple/15 animate-spin-slow"></div>
      </div>
      
      {/* Circuit pattern elements */}
      <div className="absolute top-20 right-40">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 L50,10 L50,50 L90,50 L90,90" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="0.5" className="flow-line" />
          <circle cx="10" cy="10" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="50" cy="10" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="50" cy="50" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="90" cy="50" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="90" cy="90" r="2" fill="rgba(0, 240, 255, 0.2)" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-20">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90,90 L50,90 L50,50 L10,50 L10,10" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="0.5" className="flow-line" />
          <circle cx="90" cy="90" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="50" cy="90" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="50" cy="50" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="10" cy="50" r="2" fill="rgba(0, 240, 255, 0.2)" />
          <circle cx="10" cy="10" r="2" fill="rgba(0, 240, 255, 0.2)" />
        </svg>
      </div>

      {/* New additional circuit pattern with purple */}
      <div className="absolute top-1/3 left-1/4">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 Z" 
                stroke="rgba(155, 135, 245, 0.15)" strokeWidth="0.5" fill="none" strokeDasharray="3,3" className="flow-line" />
          <circle cx="10" cy="50" r="2" fill="rgba(155, 135, 245, 0.2)" />
          <circle cx="50" cy="10" r="2" fill="rgba(155, 135, 245, 0.2)" />
          <circle cx="90" cy="50" r="2" fill="rgba(155, 135, 245, 0.2)" />
          <circle cx="50" cy="90" r="2" fill="rgba(155, 135, 245, 0.2)" />
          <circle cx="50" cy="50" r="4" fill="rgba(155, 135, 245, 0.3)" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/4">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" 
                stroke="rgba(0, 240, 255, 0.1)" strokeWidth="0.5" fill="none" className="flow-line" />
          <circle cx="20" cy="20" r="2" fill="rgba(0, 240, 255, 0.15)" />
          <circle cx="80" cy="20" r="2" fill="rgba(0, 240, 255, 0.15)" />
          <circle cx="80" cy="80" r="2" fill="rgba(0, 240, 255, 0.15)" />
          <circle cx="20" cy="80" r="2" fill="rgba(0, 240, 255, 0.15)" />
        </svg>
      </div>
      
      {/* Small glowing dots - blue and purple mix */}
      {Array.from({ length: 20 }).map((_, index) => {
        const isPurple = index % 3 === 0;
        return (
          <div 
            key={index} 
            className={`absolute rounded-full animate-pulse`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              backgroundColor: isPurple ? 'rgba(155, 135, 245, 0.6)' : 'rgba(0, 240, 255, 0.6)',
              boxShadow: isPurple 
                ? '0 0 8px rgba(155, 135, 245, 0.6)' 
                : '0 0 8px rgba(0, 240, 255, 0.6)'
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundElements;
