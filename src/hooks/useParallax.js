import { useEffect } from 'react';

const useParallax = (speed = 0.5) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const distance = scrolled - elementTop;
        const yPos = -(distance * speed);

        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
};

export default useParallax;