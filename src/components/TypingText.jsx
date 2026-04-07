import React, { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping) {
          setIsTyping(true);
          setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
              setDisplayedText(text.slice(0, index + 1));
              index++;
              if (index === text.length) {
                clearInterval(interval);
              }
            }, speed);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text, speed, delay, isTyping]);

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
      {isTyping && displayedText.length < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default TypingText;