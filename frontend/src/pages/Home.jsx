import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bbb from '../components/Bbb';
import bbb from '../assets/BBB.png';
import trust from '../assets/Trustpilot.png';
import blucl from '../assets/phn-yellow.svg';
import Form from '../components/Form';
import CardItem from '../components/CardItem';
import delivery from '../assets/delivery.svg';
import payment from '../assets/payment.svg';
import warranty from '../assets/warranty.svg';
import support from '../assets/support.svg';
import Scams from './Scams';
import Services from './Services';
import Works from './Works';
import Guide from './Guide';
import Brands from './Brands';
import Testimonials from './Testimonials';
import Blog from './Blog';
import dmca from '../assets/dmca.png';
import CardRowMobile from '../components/CardRowMobile';
import HamburgerMenu from '../components/HamburgerMenu';
import Loader from '../components/Loader';

const Home = ({ loading }) => {
  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <HamburgerMenu />
      <div id="home" className={loading ? 'hidden-content' : ''}>
        <div id="hm-main">
          <div id="hm-left">
            
            <div id="hm-head">
              <h1 className="hm-hd">DEPENDABLE USED <span id="grn">ENGINES &</span></h1>
              <h1 className="hm-hd"><span id="grn">TRANSMISSIONS</span> FOR EVERY VEHICLE</h1>
            </div>
            <div id="hm-sub">
              <h5 id="hm-sb">Professionally verified auto parts, shipped with integrity.</h5>
            </div>
            <div>
              <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
                <button id="cl-btn">
                  {/* <img id="blucl" src={blucl} alt="call a specialist" /> */}
                  📞 Speak to an Expert
                </button>
              </a>
            </div>
          </div>
          <div id="hm-right">
            <div id="frm">
              <Form />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div id="cplr">
            <div className="card-wrapper">
              <CardItem icon={warranty} title="90 DAY WARRANTY" subtitle="All Of Our Products Are Covered" />
            </div>
            <div className="card-wrapper">
              <CardItem icon={support} title="24/7 SUPPORT" subtitle="Call Us:+1-8888079696" />
            </div>
          </div>
          <div id="cplr">
            <div className="card-wrapper">
              <CardItem icon={delivery} title="FREE SHIPPING" subtitle="Nation-wide free shipping" />
            </div>
            <div className="card-wrapper no-border">
              <CardItem icon={payment} title="SECURE PAYMENTS" subtitle="We Accept Cards And Zelle" />
            </div>
          </div>
        </div>
      </div>
      <CardRowMobile />
      <Scams />
      <Services />
      <Works />
      <Guide />
      <Brands />
      <Testimonials />
      <Blog />
      <Bbb />
      <Footer />
    </>
  );
};

export default Home;
