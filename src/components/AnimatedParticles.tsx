import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const AnimatedParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{
          top: '10%',
          left: '10%',
          animation: 'pulse-glow 8s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        style={{
          bottom: '20%',
          right: '15%',
          animation: 'pulse-glow 10s ease-in-out infinite reverse',
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{
          top: '50%',
          right: '30%',
          animation: 'pulse-glow 12s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default AnimatedParticles;
