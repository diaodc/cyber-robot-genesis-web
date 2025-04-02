
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|';

  useEffect(() => {
    // Create a glitch effect on hover only
    const intervalId = setInterval(() => {
      const shouldGlitch = Math.random() < 0.05; // 5% chance of glitching
      
      if (shouldGlitch) {
        // Create a glitched version
        const glitchedText = text.split('').map((char, index) => {
          // 30% chance to replace each character
          return Math.random() < 0.3 
            ? characters.charAt(Math.floor(Math.random() * characters.length))
            : char;
        }).join('');
        
        setDisplayText(glitchedText);
        
        // Reset after a short delay
        setTimeout(() => {
          setDisplayText(text);
        }, 100);
      }
    }, 200);
    
    return () => clearInterval(intervalId);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

export default GlitchText;
