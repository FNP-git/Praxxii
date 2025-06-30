import React from 'react';
import './EngCheck.css';
import arrowIcon from '../assets/arrow-down.svg';
import useWorksAnimation from '../hooks/useWorksAnimation';

import starIcon from '../assets/star.png';
import engineCheckImage from '../assets/engine-check.jpeg';
import car1 from '../assets/car-front.svg';
import car2 from '../assets/car-side.svg';
import oilLeak from '../assets/oil-leak.png';
import mileage from '../assets/mileage.png';
import compression from '../assets/compression.png';
import warranty from '../assets/warranty.png';
import seller from '../assets/seller.png';
import engbg2 from '../assets/engbg2.png';

const checklistItems = [
 {
    title: 'Fluid Leaks or Surface Damage',
    icon: oilLeak,
    what: 'Check for any noticeable fluid stains, scratches, or fractures on the motor casing and gaskets.',
    how: 'Upon engine receipt, examine areas around the cylinder head cover, drain pan, and head gasket region. Use proper lighting to identify any concealed leaks or defects.',
  },
  {
    title: 'Motor Mileage',
    icon: mileage,
    what: "Although mileage isn't physically visible, it impacts component wear.",
    how: 'Review the paperwork or label attached to the motor upon arrival for recorded mileage. Ensure it corresponds with the purchase order or delivery documentation.',
  },
  {
    title: 'Maintenance & Care History',
    icon: starIcon,
    what: 'Determine if the motor appears well-maintained and serviced.',
    how: 'Upon arrival, look for evidence of recent maintenance — fresh fluids, undamaged components, replacement filters, or labels showing previous service records.',
  },
  {
    title: 'Cylinder Pressure Testing',
    icon: compression,
    what: 'Verify that all cylinders operate within acceptable performance parameters.',
    how: 'Post-installation, arrange for a technician to conduct cylinder pressure testing to confirm internal condition. This validates functionality prior to operation.',
  },
  {
    title: 'Coverage Validation',
    icon: warranty,
    what: 'Verify your protection plan remains active and uncompromised.',
    how: 'Examine coverage labels or seals on the motor upon delivery. Document with photos before setup and adhere to specified requirements to maintain protection.',
  },
  {
    title: 'Supplier Authentication & Credibility',
    icon: seller,
    what: 'Confirm all received items align with original specifications.',
    how: 'Post-delivery, cross-reference the motor identification/model/serial details with your purchase documentation. Contact support immediately if discrepancies exist.',
  },
];

const faqList = [
  {
    q: 'Q1: How can I verify the motor is compatible with my vehicle?',
    a: `We conduct comprehensive fitment verification using your Vehicle Identification Number and motor specifications. Following your purchase, you'll get detailed instructions to confirm compatibility post-delivery, enabling you to verify motor markings and connections prior to setup.`,
  },
  {
    q: "Q2: What happens if the motor underperforms?",
    a: `Every motor undergoes quality verification before dispatch. Should performance concerns arise, our technical team provides diagnostic assistance. Often, issues stem from setup procedures or sensor compatibility, which we help address following delivery.`,
  },
  {
    q: 'Q3: Is returning merchandise possible?',
    a: `Certainly. We provide a return period (typically 30 days), assuming the motor remains uninstalled and unmodified. You may examine the motor post-delivery and contact us if it fails to meet specifications or compatibility requirements.`,
  },
  {
    q: 'Q4: Do you provide setup assistance?',
    a: `Although we don't perform direct installation, we supply guides and compatibility verification post-delivery. We can also connect you with certified local technicians when required. Always seek professional consultation before installation.`,
  },
  {
    q: 'Q5: Can I rely on a pre-owned motor for longevity?',
    a: `Definitely. Every pre-owned motor undergoes thorough inspection, pressure testing, and performance evaluation. We exclusively offer units with minimal mileage and documented maintenance records, providing dependability at a fraction of new motor costs.`,
  },
];

const EngCheck = () => {
  useWorksAnimation(); // ✅ Activate scroll animations

 return (
    <div className="eng-check-container">

      <section className="engine-check-image fade-up-works" style={{ backgroundImage: `url(${engineCheckImage})` }}>
        <div className="overlay">
          <h1>ENGINE INSPECTION CHECKLIST</h1>
        </div>
      </section>

      <section className="checklist-section">
        {checklistItems.map((item, idx) => (
          <div className="check-item slide-left-works" style={{ animationDelay: `${idx * 0.2}s` }} key={idx}>
            <img src={item.icon} alt={`${item.title} Icon`} className="check-icon" />
            <div>
              <h4>{item.title}</h4>
              <ul className="check-points">
                <li><strong>What to Inspect:</strong> {item.what}</li>
                <li><strong>How to Inspect:</strong> {item.how}</li>
              </ul>
              <hr id="hrt" />
            </div>
          </div>
        ))}
      </section>

      <div id="vin">
        <h3 className="hgh-txt">MOTOR IDENTIFICATION AND FITMENT</h3>
        <h2 className="badges-head">
          Know Your Vehicle Better And Select The Motor That Precisely Fits Your Brand And Model
        </h2>
        <h3 id="vinh">1. Finding Your Vehicle Identification Number:</h3>
        <div id="car">
          <img id="carf" src={car1} alt="" />
          <img id="carf" src={car2} alt="" />
        </div>
        <img id="engbg2" src={engbg2} alt="" />
        <div id="vin2">
          <h3 id="vinh">
            2. Locating Your Motor Code:
            <span id="vnn">
              Motor codes are alphanumeric markers located on the motor assembly or documentation. Each
              code represents a particular motor specification.
            </span>
          </h3>
          <h3 id="vinh">
            3. Pairing Motors with Vehicle Types:
            <span id="vnn">
              Utilize your VIN or motor code to verify fitment with particular years, variants, and manufacturers.
              This can be done easily after delivery by checking tags and physical identifications.
            </span>
          </h3>
        </div>
        <h3 id="srcal">
          Need Help? Contact us at <a href="tel:+15082296373" style={{ textDecoration: 'underline', color: '#000' }}>+15082296373</a> Our Specialists Will Help You If Something
          Doesn't Align. <br />
          Or
        </h3>
        <div id="cldv" className="fade-up-works">
          <a href="tel:+15082296373" style={{ textDecoration: 'none' }}>
            <button id="clbtn">Schedule a Call</button>
          </a>
        </div>

        <div id="choose-us" className="fade-up-works">
          <h3 className="engine-highlight-text">WHY SELECT US FOR YOUR MOTOR REQUIREMENTS</h3>
          <div id="points">
            <h3 id="vinh2">
              Quality Verification -{' '}
              <span id="vn">Every pre-owned motor undergoes comprehensive examination and performance validation, guaranteeing you receive a dependable product</span>
            </h3>
            <h3 id="vinh2">
              Affordable Rates -{' '}
              <span id="vn">Receive exceptional value with budget-friendly pricing on pre-owned motors for all vehicle manufacturers.</span>
            </h3>
            <h3 id="vinh2">
              Extensive Inventory -{' '}
              <span id="vn">We maintain a comprehensive collection of pre-owned motors for virtually every brand and model, ensuring you locate precisely what you require.</span>
            </h3>
            <h3 id="vinh2">
              Rapid Delivery -{' '}
              <span id="vn">Receive your pre-owned motor shipped promptly and reliably to get your vehicle operational sooner.</span>
            </h3>
            <h3 id="vinh2">
              Protection Plan -{' '}
              <span id="vn">We provide coverage on our pre-owned motors, offering you confidence and security with your investment.</span>
            </h3>
          </div>
        </div>

        <section className="faq-section fade-up-works">
          {faqList.map((item, idx) => (
            <div className="faq-item slide-left-works" style={{ animationDelay: `${idx * 0.2}s` }} key={idx}
              onClick={() => {
                const content = document.getElementById(`faq-content-${idx}`);
                const arrow = document.getElementById(`faq-arrow-${idx}`);
                content.classList.toggle('open');
                arrow.classList.toggle('rotated');
              }}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <img src={arrowIcon} alt="Toggle" className="arrow" id={`faq-arrow-${idx}`} />
              </div>
              <div className="faq-answer" id={`faq-content-${idx}`}>
                {item.a}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default EngCheck;
