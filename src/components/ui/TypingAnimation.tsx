import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  className = '',
  speed = 100,
  delay = 0,
  cursor = true,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [displayText, text, speed, isTyping, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={cn('inline-block', className)}>
      {displayText}
      {cursor && (
        <span
          className={cn(
            'inline-block w-[3px] h-[1em] ml-1 bg-current align-middle transition-opacity duration-100',
            showCursor ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </span>
  );
};

export default TypingAnimation;