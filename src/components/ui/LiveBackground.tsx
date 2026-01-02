import React from 'react';

const LiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0" />

      {/* --- Primary Glowing Orbs (Background Ambiance) --- */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen animate-float"
        style={{ animationDuration: '15s' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-orange-600/10 blur-[100px] mix-blend-screen animate-float"
        style={{ animationDuration: '18s', animationDelay: '2s', animationDirection: 'reverse' }}
      />

      {/* --- Wireless Globe (Cyan/Blue) - Right Side --- */}
      <div className="absolute right-[-10%] top-[10%] opacity-30 md:opacity-40 animate-spin-slow-reverse">
        <svg width="600" height="600" viewBox="0 0 500 500" className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px]">
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" /> { /* Cyan-500 */}
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" /> { /* Blue-500 */}
            </linearGradient>
          </defs>

          {/* Outer Sphere Ring */}
          <circle cx="250" cy="250" r="240" fill="none" stroke="url(#cyanGrad)" strokeWidth="1.5" strokeDasharray="10 10" opacity="0.5" />

          {/* Inner Rotating Rings (Latitude/Longitude simulation) */}
          <g className="origin-center animate-spin-slow">
            <ellipse cx="250" cy="250" rx="240" ry="80" fill="none" stroke="url(#cyanGrad)" strokeWidth="1" opacity="0.6" transform="rotate(0 250 250)" />
            <ellipse cx="250" cy="250" rx="240" ry="80" fill="none" stroke="url(#cyanGrad)" strokeWidth="1" opacity="0.6" transform="rotate(45 250 250)" />
            <ellipse cx="250" cy="250" rx="240" ry="80" fill="none" stroke="url(#cyanGrad)" strokeWidth="1.5" opacity="0.8" transform="rotate(90 250 250)" />
            <ellipse cx="250" cy="250" rx="240" ry="80" fill="none" stroke="url(#cyanGrad)" strokeWidth="1" opacity="0.6" transform="rotate(135 250 250)" />
          </g>

          {/* Core */}
          <circle cx="250" cy="250" r="10" fill="#06b6d4" className="animate-pulse" />
        </svg>
      </div>

      {/* --- Wireframe Polyhedron (Orange/Gold) - Left Side --- */}
      <div className="absolute left-[-5%] bottom-[15%] opacity-20 md:opacity-30 animate-float-slow">
        <svg width="500" height="500" viewBox="0 0 400 400" className="w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] animate-spin-slow">
          <defs>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" /> { /* Orange-500 */}
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.2" /> { /* Yellow-500 */}
            </linearGradient>
          </defs>

          {/* Icosahedron-like structure */}
          <g stroke="url(#orangeGrad)" strokeWidth="1.5" fill="none" strokeLinejoin="round">
            {/* Outer Hexagon */}
            <polygon points="200,50 330,125 330,275 200,350 70,275 70,125" />

            {/* Inner Triangles / Connections */}
            <line x1="200" y1="50" x2="200" y2="200" />
            <line x1="330" y1="125" x2="200" y2="200" />
            <line x1="330" y1="275" x2="200" y2="200" />
            <line x1="200" y1="350" x2="200" y2="200" />
            <line x1="70" y1="275" x2="200" y2="200" />
            <line x1="70" y1="125" x2="200" y2="200" />

            {/* Connecting outer points to form triangles */}
            <line x1="200" y1="50" x2="330" y2="125" />
            {/* (Already part of polygon, but adding cross connects for density) */}
            <polygon points="135,162.5 265,162.5 200,275" opacity="0.3" fill="url(#orangeGrad)" stroke="none" />
          </g>

          {/* Floating Particles around it */}
          <circle cx="50" cy="100" r="4" fill="#f97316" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="350" cy="300" r="3" fill="#eab308" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />

        </svg>
      </div>

      <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 30s linear infinite;
                }
                 .animate-float-slow {
                    animation: float 10s ease-in-out infinite;
                }
            `}</style>
    </div>
  );
};

export default LiveBackground;
