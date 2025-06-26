import React from 'react';
import './Transmission.css';
import Bbb from '../components/Bbb';
import Footer from '../components/Footer';
import bbb from '../assets/BBB.png';
import trust from '../assets/Trustpilot.png';
import blucl from '../assets/blucall.svg';
import Form from '../components/Form';
import dmca from '../assets/dmca.png';
import Navbar from '../components/Navbar';
import CardItem from '../components/CardItem';
import TransCheck from './TransCheck';
import redarw from '../assets/redarw.svg';
import HamburgerMenu from '../components/HamburgerMenu';

const Transmission = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <div id="transmission">
        <div id="transmission-left">
          <div id="transmission-head">
            <h1 className="transmission-hd">WHAT YOU NEED TO KNOW ABOUT YOUR</h1>
            <h1 className="transmission-hd">
              <span id="ylw">USED TRANSMISSION</span>
            </h1>
          </div>
          <div id="transmission-sub">
            <h5 id="transmission-sb">Choose Praxxii, Drive with Confidence.</h5>
          </div>
          <div>
            <button id="transmission-btn">
              <img id="blucl" src={blucl} alt="call a specialist" />
              CALL US
            </button>
          </div>
        </div>
        <div id="transmission-right">
          <div id="frm">
            <Form />
          </div>
        </div>
      </div>
      <Bbb />
      <TransCheck />
      <div id="transmission1">
        <div id="transmission-left">
          <div id="transmission-head">
            <h1 className="transmission-hd">
              <span id="ylw">YOU'RE READY TO BOOK YOUR TRANSMISSION!</span>
            </h1>
          </div>
          <div id="transmission-sub">
            <h5 id="transmission-sbh">Fill in your details and let us find the perfect transmission match - <br />delivered to your door, with compatibility guaranteed.</h5>
            <h5 id="thr">You're almost there <img id='redarw' src={redarw} alt="" /></h5>
          </div>
          <div>
            <button id="transmission-btn">
              <img id="blucl" src={blucl} alt="call a specialist" />
              CALL US
            </button>
          </div>
        </div>
        <div id="transmission-right">
          <div id="frm">
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transmission;
