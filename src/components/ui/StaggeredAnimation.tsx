import React, { useEffect, useRef, useState } from 'react';

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animationClass?: string;
  trigger?: 'mount' | 'scroll' | 'hover';
  threshold?: number;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  animationClass = 'animate-fade-in-up',
  trigger = 'scroll',
  threshold = 0.1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(trigger === 'mount');
  const [animatedChildren, setAnimatedChildren] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (trigger === 'mount') {
      animateChildren();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [trigger, threshold]);

  useEffect(() => {
    if (isVisible) {
      animateChildren();
    }
  }, [isVisible, children]);

  const animateChildren = () => {
    const childArray = React.Children.toArray(children);
    const animated = childArray.map((child, index) => (
      <div
        key={index}
        className={`${animationClass} opacity-0`}
        style={{
          animationDelay: `${index * staggerDelay}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {child}
      </div>
    ));
    setAnimatedChildren(animated);
  };

  return (
    <div ref={containerRef} className={className}>
      {animatedChildren.length > 0 ? animatedChildren : children}
    </div>
  );
};

export default StaggeredAnimation;
