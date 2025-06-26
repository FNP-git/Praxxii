import React from 'react';
import './BrandCard.css';
import { Link } from 'react-router-dom';

const BrandCard = ({ image, name }) => {
  return (<>
            <Link to="/engine" style={{ textDecoration: 'none' }}>
    <div className="brand-card">
      <img src={image} alt={name} loading="lazy" className="brand-logo" />
      <p className="brand-name">{name.toUpperCase()}</p>
    </div>
    </Link>
    </>
  );
};
export default BrandCard;
