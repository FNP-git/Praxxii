import React from 'react';
import './Navbar.css';
import logo from '../assets/hdr_logo.svg';
import phn_y from '../assets/phn-yellow.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="nav">
      <div>
        <Link to="/">
          <img  id="lgo" src={logo} alt=" logo" />
        </Link>
      </div>

      <div id="menu">
        <Link to="/" className="mnu">HOME</Link>
        <Link to="/engine" className="mnu">SHOP ENGINE</Link>
        <Link to="/transmission" className="mnu">SHOP TRANSMISSION</Link>
        <Link to="/blog" className="mnu">BLOG POSTS</Link>
        <Link to="/about" className="mnu">ABOUT US</Link>
        <Link to="/contact" className="mnu">CONTACT US</Link>
      </div>

      <div id="call-btn">
        <a href="tel:+15082296373" style={{ textDecoration: 'none' }}>
          <button id="nav-btn">
            {/* <img id="phn" src={phn_y} alt="call icon" />  */}
           📞 +15082296373
          </button>
        </a>
      </div>
    </div>
    </>
  );
};

export default Navbar;
