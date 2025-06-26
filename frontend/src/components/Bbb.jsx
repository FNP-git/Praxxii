import React from 'react';
import './Bbb.css';
import bbb from '../assets/BBB.png';

const Bbb = () => {
  return (
    <div className="bbb-section">
      <a
        href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img id="bbb" src={bbb} alt="BBB Accredited Business" />
      </a>
    </div>
  );
};

export default Bbb;
