import React from 'react';
import './ScamCard.css';

const ScamCard = ({ icon, title, points }) => {
  return (
    <div className="scam-card">
      <div className="scam-content">
        <h3 className="scam-title">
          <img src={icon} alt="icon" className="title-icon" />
          {title}
        </h3>
        <hr className="scam-divider" />
        <ul className="scam-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScamCard;
