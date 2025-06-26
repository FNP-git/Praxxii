import React from 'react';
import './TransCheck.css';
import Ttype from '../assets/ttype.png';
import starIcon from '../assets/star.png';
import bbbBadge from '../assets/bbb-badge.png';
import trustpilotBadge from '../assets/Trustpilot.png';
import transCheckImage from '../assets/transchk.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';
import mileage from '../assets/mileage.png';
import vinno from '../assets/vinno.png';
import wd from '../assets/wd.png';
import vyeng from '../assets/vyeng.png';
import tcode from '../assets/tcode.png';
import Transmission from '../assets/transmission.png';
import note from '../assets/note.png';
import arrowIcon from '../assets/arrow-down.svg';




import warranty from '../assets/warranty.png';


const checklistItems = [
  {
    title: 'Gearbox Type (Automatic vs. Manual)',
    icon: Ttype,
    points: [
      'Determine whether your vehicle operates with an automatic or manual gearbox.',
      'CVT or dual-clutch systems may also be relevant for newer vehicles.',
    ],
  },
  {
    title: 'Vehicle Year, Brand, Model & Motor Size',
    icon: vyeng,
    points: [
      'Even slight variations in trim levels or motor specifications can impact gearbox compatibility.',
    ],
  },
  {
    title: 'Gearbox Code / Identification',
    icon: tcode,
    points: [
      'Located on a label or metal plate attached to the gearbox.',
      'Assists in matching the proper internal parts and gear ratios.',
    ],
  },
  {
    title: '2WD or 4WD Configuration?',
    icon: wd,
    points: [
      'Gearboxes are engineered specifically for two-wheel or four-wheel drive configurations.',
    ],
  },
  {
    title: 'VIN Number (Highly Recommended)',
    icon: vinno,
    points: [
      'Providing your VIN guarantees 100% fitment verification when placing an order.',
    ],
  },
  {
    title: 'Mileage & Overall Condition',
    icon: mileage,
    points: [
      'Inquire about the mileage and overall condition of the pre-owned gearbox.',
    ],
  },
  {
    title: 'Coverage Terms',
    icon: warranty,
    points: [
      'Always verify return policies and coverage protection.',
      'We provide standard coverage and optional extended plans.',
    ],
  },
];

const TransCheck = () => {
  return (
    <div className="trans-check-container">

      <section className="transmission-check-image" style={{ backgroundImage: `url(${transCheckImage})` }}>
        <div className="overlay">
          <h1>TRANSMISSION INSPECTION AFTER PURCHASE</h1>
        </div>
      </section>

      <section className="checklist-section">
        {checklistItems.map((item, idx) => (
          <div className="check-item" key={idx}>
            <img src={item.icon} alt={`${item.title} Icon`} className="check-icon" />
            <div>
              <h4>{item.title}</h4>
              <ul className="check-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <hr id='hrt' />
            </div>
          </div>
        ))}
      </section>
      <div id="compat">
      <h3 className="highlight-text">GEARBOX IDENTIFICATION AND FITMENT</h3>
      <h2 className="transub-heading">Gearbox Compatibility Requires Precision. The Gearbox Code Guarantees Perfect Matching</h2>
        <div id='trans-main'>
            <div id="compat-left">
            <img id="trns" src={Transmission} alt="Transmission image" />
            </div>
            <div id="compat-right">
                <div id="pnt">
                    <h1 id='tr-hd'>1. Locating the Gearbox Code:</h1>
                    <ul>
                        <li>On a sticker or tag fixed to the gearbox (typically stamped on the casing)</li>
                        <li>You can also contact your dealer with your VIN to request the proper code</li>
                    </ul>
                    <h1 id='tr-hd'>2. Why it's important:</h1>
                    <ul>
                        <li>Even among two vehicles of identical model/year, the gearbox code may vary due to motor size, drivetrain, or regional specifications.</li>
                    </ul>
                    <h1 id='bl-hd'> <img id='note' src={note} alt="" />Expert advice:</h1>
                    <ul>
                        <li id='bl'>Simply provide us your VIN, we interpret it and select the proper gearbox from our stock, eliminating any uncertainty</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 id="srcal">
          Need Help? Contact us at +15082296373 Our Specialists Will Help You If Something
          Doesn't Align. <br />
          Or
        </h3>
        <div id="cldv">
  <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
    <button id="clbtn">Schedule a Call</button>
  </a>
</div>

        <div id="choose-us">
          <h3 className="highlight-text">WHY SELECT US FOR YOUR GEARBOX REQUIREMENTS</h3>
          <div id="points">
            <h3 id="vinh2">
              Quality Verification -{' '}
              <span id="vn">
                Every pre-owned gearbox undergoes comprehensive examination and performance validation, guaranteeing
                you receive a dependable product
              </span>
            </h3>
            <h3 id="vinh2">
              Affordable Rates -{' '}
              <span id="vn">
                 Receive exceptional value with budget-friendly pricing on pre-owned gearboxes for all
                vehicle manufacturers.
              </span>
            </h3>
            <h3 id="vinh2">
              Extensive Inventory -{' '}
              <span id="vn">
                We maintain a comprehensive collection of pre-owned gearboxes for virtually every brand and model, ensuring you can
                locate precisely what you require.
              </span>
            </h3>
            <h3 id="vinh2">
              Rapid Delivery -{' '}
              <span id="vn">
                Receive your pre-owned gearbox shipped promptly and reliably to get your vehicle operational
                sooner.
              </span>
            </h3>
            <h3 id="vinh2">
              Protection Plan -{' '}
              <span id="vn">
                We provide coverage on our pre-owned gearboxes, offering you confidence and security with your
                investment.
              </span>
            </h3>
          </div>
        </div>
      </div>

      <section className="faq-section">
      <h3 className="highlight-text1">Frequently Asked Questions</h3>
  {[
    {
      q: 'Q1: Is it possible to replace a manual with an automatic (or opposite)?',
      a: 'While technically feasible, it requires significant modifications. We suggest maintaining your vehicle original configuration.',
    },
    {
      q: 'Q2: What components are included with a pre-owned gearbox purchase?',
      a: 'Pre-owned gearboxes arrive installation-ready and are verified for compatibility with your vehicle brand and model.',
    },
    {
      q: 'Q3: Is gearbox reprogramming necessary?',
      a: 'For contemporary vehicles, yes. Most automatic gearboxes require "flashing" or reprogramming by a technician to sync with your ECU.',
    },
    {
      q: 'Q4: What is the delivery timeframe?',
      a: 'Typically 3–7 business days based on your location. Express shipping options are available.',
    },
    {
      q: 'Q5: How do I ensure I am purchasing the correct component?',
      a: 'Provide us your VIN, and we will handle the verification for you — no concerns about compatibility issues.',
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="faq-item"
      onClick={() => {
        const content = document.getElementById(`faq-content-${idx}`);
        const arrow = document.getElementById(`faq-arrow-${idx}`);
        content.classList.toggle('open');
        arrow.classList.toggle('rotated');
      }}
    >
      <div className="faq-question">
        <span>{item.q}</span>
        <img
  src={arrowIcon}
  alt="Toggle"
  className="arrow"
  id={`faq-arrow-${idx}`}
/>

      </div>
      <div className="faq-answer" id={`faq-content-${idx}`}>
        {item.a}
      </div>
    </div>
  ))}
</section>

    </div>
  );
};

export default TransCheck;