import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Zap, Cpu, Server } from 'lucide-react';

interface FloatingElement {
  id: number;
  icon: React.ReactNode;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  color: string;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 15,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const animationRef = useRef<number>();

  const icons = [Code, Database, Globe, Zap, Cpu, Server];
  const colors = [
    'text-blue-500',
    'text-purple-500',
    'text-green-500',
    'text-orange-500',
    'text-pink-500',
    'text-indigo-500',
    'text-teal-500',
    'text-cyan-500',
    'text-emerald-500',
    'text-lime-500'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createElement = (id: number): FloatingElement => {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)];
      return {
        id,
        icon: <IconComponent size={Math.random() * 20 + 15} />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    const initElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < count; i++) {
        newElements.push(createElement(i));
      }
      setElements(newElements);
    };

    const updateElements = () => {
      setElements(prevElements =>
        prevElements.map(element => {
          let newX = element.x + element.vx;
          let newY = element.y + element.vy;
          let newVx = element.vx;
          let newVy = element.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= container.offsetWidth) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(container.offsetWidth, newX));
          }
          if (newY <= 0 || newY >= container.offsetHeight) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(container.offsetHeight, newY));
          }

          return {
            ...element,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: element.rotation + element.rotationSpeed
          };
        })
      );
    };

    const animate = () => {
      updateElements();
      animationRef.current = requestAnimationFrame(animate);
    };

    initElements();
    animate();

    const handleResize = () => {
      initElements();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {elements.map(element => (
        <div
          key={element.id}
          className={`absolute transition-all duration-1000 ease-out ${element.color}`}
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            transform: `scale(${element.size}) rotate(${element.rotation}deg)`,
            opacity: element.opacity,
            filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.1))'
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
