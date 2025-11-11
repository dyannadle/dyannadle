import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
  size?: { min: number; max: number };
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 50,
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'],
  speed = 0.5,
  size = { min: 2, max: 6 },
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * (size.max - size.min) + size.min,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 1000 + 500
    });

    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push(createParticle());
      }
      setParticles(newParticles);
    };

    const updateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const newParticle = { ...particle };
          newParticle.x += newParticle.vx;
          newParticle.y += newParticle.vy;
          newParticle.life += 1;

          // Wrap around edges
          if (newParticle.x < 0) newParticle.x = canvas.width;
          if (newParticle.x > canvas.width) newParticle.x = 0;
          if (newParticle.y < 0) newParticle.y = canvas.height;
          if (newParticle.y > canvas.height) newParticle.y = 0;

          // Respawn particle if it exceeds max life
          if (newParticle.life > newParticle.maxLife) {
            return createParticle();
          }

          return newParticle;
        })
      );
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        const alpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, colors, speed, size]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ParticleSystem;
