import React from 'react';
import './CardItem.css';

const CardItem = ({ icon, title, subtitle }) => {
  return (
    <div className="card-item">
      <img src={icon} alt={title} className="card-icon" />
      <div className="card-texts">
        <h4 className="card-title">{title}</h4>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardItem;
