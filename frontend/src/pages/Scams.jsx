import React from 'react';
import './Scams.css';
import ScamCard from '../components/ScamCard';

import scamCross from '../assets/cross.png';
import scamTick from '../assets/tick.png';
import leftImg from '../assets/scam-right.svg';
import rightImg from '../assets/scam-left.svg';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Updated custom hook

const Scams = () => {
  useScrollAnimation(); // Activates scroll animation when elements enter viewport

 const redFlags = [
   'No legitimate business address or online footprint.',
   'Generic customer service email contacts.',
   'Suspiciously low pricing without any guarantees.',
   'Missing shipment tracking or delivery confirmation.',
   'Fraudulent sites lacking genuine contact details.',
 ];

 const trustedBenefits = [
  'Round-the-clock assistance from certified technicians.',
   'Authenticated business location with responsive staff.',
   'Protected payment processing with shipment monitoring.',
   'Authentic customer feedback including product images.',
   'Comprehensive warranty coverage on all components.',
 ];

  return (
    <div id="scm">
      <div id="top-part" className="fade-up-on-scroll">
        <h3 className="scam-warning">BEWARE OF AUTO PARTS SCAMS</h3>
        <h2 className="scam-main-heading">
          “Don’t Get Scammed. Here’s What To Watch Out For — And How Praxxii Global Protects You.”
        </h2>
        <p className="scam-description">
          The auto parts industry has seen a rise in fraudulent sellers offering{' '}
          <span className="highlight">“too good to be true”</span> deals on used engines and
          transmissions. These scammers often disappear after taking your money — with no parts ever
          shipped.
        </p>
      </div>

      <div className="scam-page">
        <div className="scam-box fade-up-on-scroll">
          <img
            src={rightImg}
            alt="Scam Warning Left"
            className="slide-left-on-scroll scam-side-img1"
          />
          <ScamCard icon={scamCross} title="Red Flags to Watch For" points={redFlags} />
        </div>

        <div className="scam-box fade-up-on-scroll">
          <ScamCard
            icon={scamTick}
            title="Why You Can Trust Praxxii Global?"
            points={trustedBenefits}
          />
          <img
            src={leftImg}
            alt="Trust Badge Right"
            className="slide-right-on-scroll scam-side-img2"
          />
        </div>
      </div>

      <div className="scam-footer fade-up-on-scroll">
  <p>
    <strong>“Have questions or think you’ve seen a scam? Call us at </strong>
    <a className="scam-highlight-phone" href="tel:15084920300">📞 +15084920300</a>
    <strong> — we’ll help you avoid it.”</strong>
  </p>
</div>

    </div>
  );
};

export default Scams;
