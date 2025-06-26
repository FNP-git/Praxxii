import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, points }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={icon} alt={`${title} Icon`} loading="lazy" />
      </div>
      <div className="service-content">
        <h4 className="service-title">{title}</h4>
        <ul className="service-points">
          {points.map((point, index) => (
            <li key={index} className="service-point">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
