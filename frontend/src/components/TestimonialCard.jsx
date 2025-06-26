import React from 'react';
import './TestimonialCard.css';
import girlImg from '../assets/girl.svg'; // the illustrated image

const TestimonialCard = ({ testimonial }) => {
  const { text, name, image, rating } = testimonial;

  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>

      <div className="testimonial-footer">
        <img src={image} alt={name} className="testimonial-user" />
        <span className="testimonial-name">{name}</span>
      </div>

      <div className="testimonial-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? '★' : '☆'}</span>
        ))}
      </div>

      <img src={girlImg} alt="girl" className="girl-overlay" />
    </div>
  );
};

export default TestimonialCard;
