import React from 'react';
import './CardRowMobile.css';
import CardItem from './CardItem';
import delivery from '../assets/delivery.svg';
import payment from '../assets/payment.svg';
import warranty from '../assets/warranty.svg';
import support from '../assets/support.svg';

const CardRowMobile = () => {
  return (
    <div className="mobile-card-container">
      <div className="mobile-card">
        <CardItem
          icon={warranty}
          title="90 DAY WARRANTY"
          subtitle="All Of Our Products Are Covered"
        />
      </div>
      <div className="mobile-card">
        <CardItem icon={support} title="24/7 SUPPORT" subtitle="Call Us:+1-5082296373" />
      </div>
      <div className="mobile-card">
        <CardItem icon={delivery} title="FREE SHIPPING" subtitle="Nation-wide free shipping" />
      </div>
      <div className="mobile-card no-border">
        <CardItem icon={payment} title="SECURE PAYMENTS" subtitle="We Accept Cards And Zelle" />
      </div>
    </div>
  );
};

export default CardRowMobile;
