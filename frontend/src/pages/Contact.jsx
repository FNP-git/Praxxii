import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import contactImage from '../assets/contbg.jpeg'; // Add your image path here
import Bbb from '../components/Bbb';
import Footer from '../components/Footer';
import locIcon from '../assets/loc.svg';
import cllIcon from '../assets/cll.svg';
import mailIcon from '../assets/mail.svg';
import timeIcon from '../assets/time.svg';
import bbbBadge from '../assets/BBB.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';
import HamburgerMenu from '../components/HamburgerMenu';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

import Form from '../components/Form';

const Contact = () => {
  return (
  <>
    <Navbar />
    <HamburgerMenu />
    <div className="contact-section">
      <div className="contact-overlay">
        <div className="contact-text">
          <h2 className="contact-title">CONTACT US</h2>
          <h3 className="contact-subheading1">Have Questions? Let’s Get You the Right Part</h3>
          <p className="contact-desc">
            Whether you need help with compatibility, shipping, or order status — our team is here
          </p>
        </div>
      </div>
    </div>
    <div className="contact-cards-wrapper">
      <div className="contact-card">
        <img src={locIcon} alt="Location" className="contact-icon" />
        <h4>Address</h4>
        <p>Praxxii Global LLC St Suite RSheridan, WY 82801</p>
      </div>

      

      <a href="tel:+15084920300" className="contact-card link-card">
        <img src={cllIcon} alt="Call" className="contact-icon" />
        <h4>Call Us</h4>
        <p>+15084920300</p>
      </a>

      <a href="mailto:info@praxxiiglobal.com" className="contact-card link-card">
        <img src={mailIcon} alt="Email" className="contact-icon" />
        <h4>Send us a Mail</h4>
        <p>info@praxxiiglobal.com</p>
      </a>

      <div className="contact-card">
        <img src={timeIcon} alt="Time" className="contact-icon" />
        <h4>Opening Time</h4>
        <p>Monday–Saturday<br />10:00am – 7:00pm</p>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <div className="contact-left">
        <h3 className="contact-heading">CONTACT US</h3>
        <h4 className="contact-sub-alt">Have Questions? Let’s Get You the Right Part</h4>

        <div className="badge-grid">
          {/* <a href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062" target="_blank" rel="noreferrer">
            <img src={bbbBadge} alt="BBB Badge" />
          </a> */}
          {/* <a href="https://www.trustpilot.com/review/fnpautoparts.com" target="_blank" rel="noreferrer">
            <img src={trustpilotBadge} alt="Trustpilot Badge" />
          </a>
          <a href="#" target="https://verify.authorize.net/anetseal/?pid=a3a5c06e-7d73-4d8e-bc10-689e99e27bf0&rurl=https://www.fnpautoparts.com" rel="noreferrer">
            <img src={authcert} alt="Authorize.net Badge" />
          </a>
          <a href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://www.fnpautoparts.com/" target="_blank" rel="noreferrer">
            <img src={dmca} alt="DMCA Badge" />
          </a> */}
        </div>

        <p className="follow-label">Follow us ➔</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      <div className="contact-form-card">
        <Form />
      </div>
    </div>
    <Bbb />
    <Footer />
    </>
  );
};

export default Contact;
