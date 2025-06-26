import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    // Observe ALL these animation-triggering classes
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .fade-up-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // triggers when 20% of element visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
