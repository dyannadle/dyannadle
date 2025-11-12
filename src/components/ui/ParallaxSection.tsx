import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  trigger?: 'scroll' | 'mouse';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  trigger = 'scroll'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    if (trigger === 'scroll') {
      const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offset = rect.top + scrollY;
        const scrolled = scrollY - offset;

        let translateX = 0;
        let translateY = 0;

        switch (direction) {
          case 'up':
            translateY = scrolled * speed;
            break;
          case 'down':
            translateY = -scrolled * speed;
            break;
          case 'left':
            translateX = scrolled * speed;
            break;
          case 'right':
            translateX = -scrolled * speed;
            break;
        }

        setTransform(`translate(${translateX}px, ${translateY}px)`);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call

      return () => window.removeEventListener('scroll', handleScroll);
    } else if (trigger === 'mouse') {
      const handleMouseMove = (e: MouseEvent) => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * speed * 0.1;
        const deltaY = (e.clientY - centerY) * speed * 0.1;

        setTransform(`translate(${deltaX}px, ${deltaY}px)`);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [speed, direction, trigger]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform,
        transition: trigger === 'mouse' ? 'transform 0.1s ease-out' : 'none'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
