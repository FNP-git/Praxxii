import React from 'react';
import './GuideCard.css'; // Specific CSS for the card

const GuideCard = ({ title, subtitle, buttonLabel = 'Shop', image }) => {
  return (
    <div className="guide-card">
      <div className="guide-card-content">
        <h4 className="guide-card-title">{title}</h4>
        <p className="guide-card-subtitle">{subtitle}</p>
        <button className="guide-card-button">{buttonLabel}</button>
      </div>
      <div className="guide-card-image-container">
        <img src={image} alt={title} className="guide-card-image" />
      </div>
    </div>
  );
};

export default GuideCard;
