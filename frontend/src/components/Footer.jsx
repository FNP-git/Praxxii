import React from 'react';
import './Footer.css';
import auth from '../assets/authcert.png';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/engine">Engines</Link>
          <Link to="/transmission">Transmission</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blogs/Post</Link>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <Link to="/warranty">Warranty Terms and conditions</Link>
          <Link to="/return">Return and Cancellation Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <p>• Praxxii Global LLC St Suite RSheridan, WY 82801</p>
          <p>• 3rd Floor,Skymark Building,F-01, F Block, Sector 6, Noida, UP 201301</p>
        </div>

        <div className="footer-section social">
          <h4>Social Media :</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://x.com/s">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>
          {/* <div id="authcert">
            <a
              href="https://verify.authorize.net/anetseal/?pid=a3a5c06e-7d73-4d8e-bc10-689e99e27bf0&rurl=https://www.fnpautoparts.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="authc" src={auth} alt="Authorize.net certificate" />
            </a>
          </div> */}
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2019 Praxxii Global. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
