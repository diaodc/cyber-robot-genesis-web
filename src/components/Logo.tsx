
import React from 'react';
import GlitchText from './GlitchText';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-2">
        <svg className="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L35 30H5L20 5Z" fill="#00f0ff" />
          <circle cx="20" cy="20" r="8" fill="#1A1F2C" />
          <circle cx="20" cy="20" r="5" fill="#9b30ff" stroke="#00f0ff" strokeWidth="1" />
          <path d="M14 16L26 24" stroke="#00f0ff" strokeWidth="1" />
          <path d="M26 16L14 24" stroke="#00f0ff" strokeWidth="1" />
        </svg>
      </div>
      <span className="text-white font-bold text-xl">
        <GlitchText text="CYBER AI" />
      </span>
    </div>
  );
};

export default Logo;
