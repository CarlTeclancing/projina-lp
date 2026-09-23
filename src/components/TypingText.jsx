import React, { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, speed = 50, delay = 0, loop = false, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    let startTimeout;
    let animationInterval;
    let pauseTimeout;
    let eraseInterval;

    const typeText = () => {
      let index = 0;
      setDisplayedText('');
      animationInterval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));
        if (index === text.length) {
          clearInterval(animationInterval);
          if (loop) {
            pauseTimeout = setTimeout(() => {
              let eraseIndex = text.length;
              eraseInterval = setInterval(() => {
                eraseIndex -= 1;
                setDisplayedText(text.slice(0, eraseIndex));
                if (eraseIndex === 0) {
                  clearInterval(eraseInterval);
                  typeText();
                }
              }, speed / 2);
            }, 2200);
          }
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isActiveRef.current) {
          isActiveRef.current = true;
          setIsActive(true);
          startTimeout = setTimeout(typeText, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      isActiveRef.current = false;
      clearTimeout(startTimeout);
      clearTimeout(pauseTimeout);
      clearInterval(animationInterval);
      clearInterval(eraseInterval);
    };
  }, [text, speed, delay, loop]);

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
      {isActive && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default TypingText;