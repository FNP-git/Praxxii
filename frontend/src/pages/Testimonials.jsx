import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';
import useWorksAnimation from '../hooks/useWorksAnimation';
import person1 from '../assets/john.svg';

const testimonials = [
 {
   text: 'Purchasing a used engine from this company was a game-changer. Excellent quality and installed perfectly without any issues.',
   name: 'Michael Johnson',
   image: person1,
   rating: 5,
 },
 {
   text: 'The transmission I ordered exceeded my expectations. Runs smoothly, operates quietly, and arrived ahead of schedule.',
   name: 'Sarah Wilson',
   image: person1,
   rating: 4,
 },
 {
   text: 'Bought a pre-owned starter motor that works flawlessly. The component was spotless, reliable, and included a warranty period.',
   name: 'James Smith',
   image: person1,
   rating: 5,
 },
 {
   text: 'Finally located a hard-to-find alternator after searching everywhere. The part matched the description perfectly and was well-protected during shipping.',
   name: 'Jennifer Chen',
   image: person1,
   rating: 5,
 },
 {
   text: 'Purchased a used cooling system radiator. Quick delivery, no leakage issues, and cost significantly less than brand new!',
   name: 'Diego Rodriguez',
   image: person1,
   rating: 4,
 },
 {
   text: 'Ideal engine swap for my truck. Their technical team provided excellent guidance on part compatibility verification.',
   name: 'Emily Davis',
   image: person1,
   rating: 5,
 },
 {
   text: 'Running an auto repair shop, I regularly purchase components here — customers are always satisfied with the quality.',
   name: 'David Mitchell',
   image: person1,
   rating: 5,
 },
 {
   text: 'Received a full transmission unit in excellent working condition. Well-maintained, pristine, and came with detailed tracking information.',
   name: 'Lisa Wang',
   image: person1,
   rating: 4,
 },
 {
   text: 'Found a side mirror assembly that fits like original equipment. The pricing was the most competitive I could find online.',
   name: 'Marcus Thompson',
   image: person1,
   rating: 5,
 },
 {
   text: 'Outstanding customer service with authentic automotive parts. Finally found a supplier with knowledgeable staff who understand vehicles!',
   name: 'Olivia Brown',
   image: person1,
   rating: 5,
 },
];

const Testimonials = () => {
  useWorksAnimation(); // re-enable global scroll-based animation

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const switchTestimonial = (newIndex) => {
    const el = cardRef.current;
    if (el) {
      el.classList.remove('animate-slide-fade-in');
      void el.offsetWidth;
      el.classList.add('animate-slide-fade-in');
    }
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    switchTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    switchTestimonial(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimonials-section fade-up-works">
      <div className="testimonials-left slide-left-works">
        <h4 className="testimonial-subtitle">CUSTOMER TESTIMONIALS</h4>
        <h2 className="testimonial-title">See What Our Customers Say About Us</h2>
        <button className="read-more">Read More →</button>
      </div>

      <div className="testimonials-right fade-up-works">
        <div ref={cardRef} className="testimonial-fade-wrapper animate-slide-fade-in">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>
        <div className="testimonial-nav">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
