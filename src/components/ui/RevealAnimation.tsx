import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'blur-in' | 'zoom-in' | 'flip-in' | 'slide-up' | 'scale-up';
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
  style?: React.CSSProperties;
  stagger?: number;
  distance?: number;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  duration = 600,
  once = true,
  style = {},
  stagger = 0,
  distance = 40,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      transitionDelay: `${delay + stagger}ms`,
    };

    switch (animation) {
      case 'fade-in-up':
      case 'slide-up':
        return { ...base, transform: `translateY(${distance}px)` };
      case 'fade-in-down':
        return { ...base, transform: `translateY(-${distance}px)` };
      case 'fade-in-left':
        return { ...base, transform: `translateX(-${distance}px)` };
      case 'fade-in-right':
        return { ...base, transform: `translateX(${distance}px)` };
      case 'zoom-in':
      case 'scale-up':
        return { ...base, transform: 'scale(0.9)' };
      case 'blur-in':
        return { ...base, filter: 'blur(10px)' };
      case 'flip-in':
        return { ...base, transform: 'perspective(400px) rotateX(90deg)' };
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => {
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) rotateX(0)',
      filter: 'blur(0)',
      transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      transitionDelay: `${delay + stagger}ms`,
    };
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...(isVisible ? getVisibleStyles() : getInitialStyles()),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
