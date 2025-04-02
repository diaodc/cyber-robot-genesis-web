
import React from 'react';

const FlowLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal flow lines */}
        <path
          className="flow-line"
          d="M0,200 C200,180 400,220 600,200 S800,150 1000,200"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          className="flow-line"
          d="M0,400 C200,380 400,420 600,400 S800,380 1000,400"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "2s" }}
        />
        <path
          className="flow-line"
          d="M0,600 C150,650 300,580 500,600 S700,650 1000,600"
          fill="none"
          stroke="#9b30ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "1s" }}
        />
        <path
          className="flow-line"
          d="M0,800 C250,750 400,850 600,800 S800,750 1000,800"
          fill="none"
          stroke="#9b30ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "3s" }}
        />

        {/* Vertical flow lines */}
        <path
          className="flow-line"
          d="M200,0 C180,200 220,400 200,600 S180,800 200,1000"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          className="flow-line"
          d="M500,0 C480,200 520,400 500,600 S480,800 500,1000"
          fill="none"
          stroke="#9b30ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "1.5s" }}
        />
        <path
          className="flow-line"
          d="M800,0 C780,200 820,400 800,600 S780,800 800,1000"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.3"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Diagonal connector lines */}
        <path
          className="flow-line"
          d="M100,100 C300,300 500,500 900,900"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.2"
          style={{ animationDelay: "0.75s" }}
        />
        <path
          className="flow-line"
          d="M900,100 C700,300 500,500 100,900"
          fill="none"
          stroke="#9b30ff"
          strokeWidth="1"
          opacity="0.2"
          style={{ animationDelay: "1.25s" }}
        />
      </svg>
    </div>
  );
};

export default FlowLines;
