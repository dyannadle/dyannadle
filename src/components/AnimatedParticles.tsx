import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  delay: number;
}

const AnimatedParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: ['bg-blue-400/20', 'bg-purple-400/20', 'bg-indigo-400/20', 'bg-pink-400/20', 'bg-teal-400/20'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} blur-xl`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `particle-float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Animated wave lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-pulse" 
           style={{ animation: 'wave-float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-pulse" 
           style={{ animation: 'wave-float 10s ease-in-out infinite reverse' }} />
    </div>
  );
};

export default AnimatedParticles;
