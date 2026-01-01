import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animationClass?: string;
  trigger?: 'mount' | 'scroll' | 'hover';
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  distance?: number;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  animationClass = '',
  trigger = 'scroll',
  threshold = 0.1,
  direction = 'up',
  duration = 500,
  distance = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(trigger === 'mount');

  useEffect(() => {
    if (trigger === 'mount') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [trigger, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'scale': return 'scale(0.9)';
      case 'fade': return 'none';
      default: return `translateY(${distance}px)`;
    }
  };

  const childArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={cn(className)}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className={cn(animationClass)}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) translateX(0) scale(1)' : getInitialTransform(),
            transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredAnimation;
