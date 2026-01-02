import React from 'react';

const LiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Dark gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-0" />

      {/* --- Ambient Orbs --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[100px] mix-blend-screen animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-orange-600/10 blur-[90px] mix-blend-screen animate-float" style={{ animationDelay: '2s' }} />

      {/* --- GEOMETRIC SHAPES (Reference Match - MASSIVE SIZES) --- */}

      {/* 1. Cyan Wireframe Sphere (Top Left) - HUGE */}
      <div className="absolute left-[-10%] top-[5%] opacity-60 animate-spin-slow">
        <svg width="800" height="800" viewBox="0 0 200 200" className="w-[70vw] h-[70vw] md:w-[800px] md:h-[800px]">
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g stroke="url(#cyanGrad)" strokeWidth="1" fill="none">
            <circle cx="100" cy="100" r="90" opacity="0.3" strokeDasharray="5 5" />
            <path d="M100 10 L150 50 L180 100 L150 150 L100 190 L50 150 L20 100 L50 50 Z" />
            <path d="M100 10 L50 50 L100 90 L150 50 Z" />
            <path d="M100 190 L150 150 L100 110 L50 150 Z" />
            <path d="M20 100 L50 50 L100 90 L100 110 L50 150 Z" />
            <path d="M180 100 L150 50 L100 90 L100 110 L150 150 Z" />
          </g>
        </svg>
      </div>

      {/* 2. Cyan Wireframe Sphere (Bottom Center/Right) - HUGE */}
      <div className="absolute right-[-5%] bottom-[-10%] opacity-50 animate-spin-slow-reverse">
        <svg width="600" height="600" viewBox="0 0 200 200" className="w-[60vw] h-[60vw] md:w-[600px] md:h-[600px]">
          <g stroke="url(#cyanGrad)" strokeWidth="1" fill="none">
            <circle cx="100" cy="100" r="90" opacity="0.3" />
            <path d="M100 10 L178 55 L178 145 L100 190 L22 145 L22 55 Z" />
            <line x1="22" y1="55" x2="178" y2="145" />
            <line x1="178" y1="55" x2="22" y2="145" />
            <line x1="100" y1="10" x2="100" y2="190" />
          </g>
        </svg>
      </div>

      {/* 3. Large Orange Ring (Tilted) - Center Left - MASSIVE */}
      <div className="absolute left-[15%] top-[30%] opacity-60 mix-blend-screen animate-float-slow">
        <div className="w-[900px] h-[180px] rounded-[100%] border-2 border-orange-500/60 shadow-[0_0_15px_rgba(249,115,22,0.4)] transform -rotate-[30deg]" />
      </div>

      {/* 4. Orange Ring (Smaller, Tilted) - Right - LARGE */}
      <div className="absolute right-[5%] top-[15%] opacity-50 mix-blend-screen animate-float">
        <div className="w-[600px] h-[120px] rounded-[100%] border border-orange-400/50 transform rotate-[15deg]" />
      </div>

      {/* 5. Orange Polyhedron (Small, decorative) */}
      <div className="absolute right-[10%] top-[50%] opacity-40 animate-spin-slow">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="#f97316" strokeWidth="1" transform="rotate(45 50 50)" />
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
