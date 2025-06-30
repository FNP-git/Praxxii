import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import bbbIcon from '../assets/BBB.png';
import autoLogo from '../assets/autoLogo.png';
import Works from '../pages/Works';
import Testimonials from './Testimonials';
import Scams from './Scams';
import redarw from '../assets/redarw.svg';
import blucl from '../assets/blucall.svg';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Bbb from '../components/Bbb';
import HamburgerMenu from '../components/HamburgerMenu';


const About = () => {
  return (
    <>
    <Navbar />
    <HamburgerMenu />
    <section className="about-section">
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-heading">ABOUT US</h2>
          <div className="about-icon">
            <img src={autoLogo} alt="Auto Logo" />
          </div>
          <h3 className="about-subheading">Driven by Purpose. Trusted by Thousands.</h3>
          <p className="about-description">
            Praxxii Global started with one goal — helping people fix their cars without getting ripped off. <br />
            What began in a small garage quickly turned into a trusted nationwide service, with thousands of engines and transmissions delivered to happy customers across the country. <br />
            We’re not a faceless reseller — we’re car lovers, mechanics, and everyday people who believe in doing things the right way.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Parts Shipped</p>
            </div>
            {/* <div className="stat-box">
              <img src={bbbIcon} alt="BBB Icon" className="stat-icon" />
              <p>Accredited Business</p>
            </div> */}
            <div className="stat-box">
              <h3>100%</h3>
              <p>Compatibility Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Works />
    <Testimonials />
    <div id="choose-us">
          <h3 className="highlight-text">WHY CHOOSE US FOR YOUR CAR NEEDS</h3>
          <div id="points">
            <h3 id="vinh2">
              -Quality Assurance -{' '}
              <span id="vn">
                All our used parts are thoroughly inspected and tested for performance, ensuring
                you get a reliable product
              </span>
            </h3>
            <h3 id="vinh2">
              -Competitive Pricing -{' '}
              <span id="vn">
                 Get the best value for your money with affordable prices on used parts for all
                car brands.
              </span>
            </h3>
            <h3 id="vinh2">
              -Wide Selection -{' '}
              <span id="vn">
                We offer a vast range of used parts for nearly every make and model, so you can
                find exactly what you need.
              </span>
            </h3>
            <h3 id="vinh2">
              -Fast Shipping -{' '}
              <span id="vn">
                Get your used parts delivered quickly and efficiently to get your car back on the
                road faster.
              </span>
            </h3>
            <h3 id="vinh2">
              -Warranty Coverage -{' '}
              <span id="vn">
                We offer warranties on our used parts, giving you peace of mind with your
                purchase.
              </span>
            </h3>
          </div>
        </div>
        <Scams />
        <div id="transmission1">
        <div id="transmission-left">
          <div id="transmission-head">
            <h1 className="transmission-hd">
              <span id="ylw">YOU'RE READY TO BOOK YOUR PART!</span>
            </h1>
          </div>
          <div id="transmission-sub">
            <h5 id="transmission-sb">Fill in your details and let us find the perfect part match - <br />delivered to your door, with compatibility guaranteed.</h5>
            <h5 id="thr">You're almost there <img id='redarw' src={redarw} alt="" /></h5>
          </div>
          <div>
          <a href="tel:+15082296373" style={{ textDecoration: 'none' }}>
  <button id="transmission-btn">
    
    <img id="blucl" src={blucl} alt="call a specialist" />
    CALL US
  </button>
</a>

          </div>
        </div>
        <div id="transmission-right">
          <div id="frm">
            <Form />
          </div>
        </div>
      </div>
      <Bbb />
      <Footer />
    </>
  );
};

export default About;
