import React from 'react';
import './WorkCard.css'; // Add this import for card-specific styling

const WorkCard = ({ step, stepDesc, title, desc }) => {
  return (
    <div className="work-card">
      <h4 className="work-step">Step {step}</h4>
      <p className="work-step-desc">"{stepDesc}"</p>
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-desc">{desc}</p>
    </div>
  );
};

export default WorkCard;
