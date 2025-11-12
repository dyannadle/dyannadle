import React, { useEffect, useRef, useState } from 'react';

interface InteractiveElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: { x: number; y: number };
}

interface InteractiveBackgroundProps {
  className?: string;
  elementCount?: number;
  colors?: string[];
  sizeRange?: { min: number; max: number };
  speedRange?: { min: number; max: number };
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
  className = '',
  elementCount = 15,
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
  sizeRange = { min: 20, max: 80 },
  speedRange = { min: 0.5, max: 2 }
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const elementsRef = useRef<InteractiveElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Initialize elements
    elementsRef.current = Array.from({ length: elementCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * (speedRange.max - speedRange.min) + speedRange.min,
      direction: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      }
    }));

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw elements
      elementsRef.current.forEach(element => {
        // Mouse interaction
        const dx = mouseRef.current.x - element.x;
        const dy = mouseRef.current.y - element.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          element.direction.x += (dx / distance) * force * 0.01;
          element.direction.y += (dy / distance) * force * 0.01;
        }

        // Update position
        element.x += element.direction.x * element.speed;
        element.y += element.direction.y * element.speed;

        // Bounce off walls
        if (element.x <= 0 || element.x >= dimensions.width) {
          element.direction.x *= -1;
        }
        if (element.y <= 0 || element.y >= dimensions.height) {
          element.direction.y *= -1;
        }

        // Keep within bounds
        element.x = Math.max(0, Math.min(dimensions.width, element.x));
        element.y = Math.max(0, Math.min(dimensions.height, element.y));

        // Draw element
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = element.color + '20'; // Add transparency
        ctx.fill();

        // Draw glow effect
        ctx.shadowBlur = element.size / 2;
        ctx.shadowColor = element.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, elementCount, colors, sizeRange, speedRange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className={`absolute inset-0 ${className}`}
      onMouseMove={handleMouseMove}
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default InteractiveBackground;
