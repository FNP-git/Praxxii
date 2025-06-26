import { useEffect } from 'react';

const useWorksAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up-works, .slide-left-works');
    const truck = document.querySelector('.truck-left'); // select the truck separately

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // If truck enters, add animation class
            if (entry.target === truck) {
              truck.classList.add('truck-animate');
            }
          }
        });
      },
      {
        threshold: 0.5, // 50% in viewport
      }
    );

    elements.forEach((el) => observer.observe(el));
    if (truck) observer.observe(truck); // observe truck separately

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (truck) observer.unobserve(truck);
    };
  }, []);
};

export default useWorksAnimation;
