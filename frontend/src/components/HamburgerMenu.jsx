import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HamburgerMenu.css';
import logo from '../assets/hdr_logo.svg';
import phn_y from '../assets/phn-yellow.svg';
import hamIcon from '../assets/ham-menu.svg';
import crossIcon from '../assets/cross.svg';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 490);
  const location = useLocation();

  // Listen for window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 490);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Do not render on wider screens
  if (!isMobile) return null;

  return (
    <>
      {/* Mobile top bar */}
      <div className="ham-nav">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="fnp logo" className="ham-logo" />
        </Link>

        <a href="tel:+15084920300" style={{ textDecoration: 'none' }}>
          <button className="ham-call-btn">
            <img src={phn_y} alt="call icon" className="ham-call-icon" />
            +15084920300
          </button>
        </a>

        <img
          src={hamIcon}
          alt="menu"
          className="ham-menu-icon"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Fullscreen overlay menu with fade */}
      <div className={`ham-overlay ${isOpen ? 'open' : 'closed'}`}>
        <div className="ham-overlay-header">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="fnp logo" className="ham-menu-logo" />
          </Link>
          <img
            src={crossIcon}
            alt="close"
            className="ham-close-icon"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="ham-links">
          <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <Link to="/engine" onClick={() => setIsOpen(false)} className={location.pathname === '/engine' ? 'active' : ''}>SHOP ENGINE</Link>
          <Link to="/transmission" onClick={() => setIsOpen(false)} className={location.pathname === '/transmission' ? 'active' : ''}>SHOP TRANSMISSION</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={location.pathname === '/blog' ? 'active' : ''}>BLOGS/POSTS</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === '/about' ? 'active' : ''}>ABOUT US</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={location.pathname === '/contact' ? 'active' : ''}>CONTACT US</Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
