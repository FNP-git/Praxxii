import React from 'react';
import './Brands.css';
import BrandCard from '../components/BrandCard';
import useWorksAnimation from '../hooks/useWorksAnimation';

import acura from '../assets/acura.png';
import alfaromeo from '../assets/alfaromeo.png';
import audi from '../assets/audi.png';
import lexus from '../assets/lexus.png';
import scion from '../assets/scion.png';
import saturn from '../assets/saturn.png';
import nissan from '../assets/nissan.png';
import chrysler from '../assets/Chrysler.jpg';
import daihatsu from '../assets/daihatsu.png';
import datsun from '../assets/datsun.png';
import deawoo from '../assets/deawoo.png';
import dodge from '../assets/Dodge.png';
import ford from '../assets/Ford.png';
import geo from '../assets/geo.png';
import gmc from '../assets/GMC.png';
import honda from '../assets/honda.png';
import hummer from '../assets/Hummer.png';
import hyundai from '../assets/hyundai.png';
import infinit from '../assets/infinit.png';
import jaguar from '../assets/jaguar.png';
import jeep from '../assets/Jeep.png';
import kia from '../assets/kia.png';
import landrover from '../assets/landrover.png';
import bmw from '../assets/bmw.png';
import buick from '../assets/buick.png';
import chevy from '../assets/Chevy.png';
import mazda from '../assets/mazda.png';
import mercedes from '../assets/mercedes.png';
import mini from '../assets/mini.png';
import mitsubishi from '../assets/mitsubishi.png';
import porsche from '../assets/porsche.png';
import subaru from '../assets/sabura.png';
import toyota from '../assets/toyota.png';
import volvo from '../assets/volvo.png';

const brandData = [
  { name: 'acura', image: acura },
  { name: 'alfaromeo', image: alfaromeo },
  { name: 'audi', image: audi },
  { name: 'lexus', image: lexus },
  { name: 'scion', image: scion },
  { name: 'saturn', image: saturn },
  { name: 'nissan', image: nissan },
  { name: 'chrysler', image: chrysler },
  { name: 'daihatsu', image: daihatsu },
  { name: 'datsun', image: datsun },
  { name: 'deawoo', image: deawoo },
  { name: 'dodge', image: dodge },
  { name: 'ford', image: ford },
  { name: 'geo', image: geo },
  { name: 'gmc', image: gmc },
  { name: 'honda', image: honda },
  { name: 'hummer', image: hummer },
  { name: 'hyundai', image: hyundai },
  { name: 'infinit', image: infinit },
  { name: 'jaguar', image: jaguar },
  { name: 'jeep', image: jeep },
  { name: 'kia', image: kia },
  { name: 'landrover', image: landrover },
  { name: 'bmw', image: bmw },
  { name: 'buick', image: buick },
  { name: 'chevy', image: chevy },
  { name: 'mazda', image: mazda },
  { name: 'mercedes', image: mercedes },
  { name: 'mini', image: mini },
  { name: 'mitsubishi', image: mitsubishi },
  { name: 'porsche', image: porsche },
  { name: 'subaru', image: subaru },
  { name: 'toyota', image: toyota },
  { name: 'volvo', image: volvo },
];

const Brands = () => {
  useWorksAnimation();

  const topSlider = brandData.slice(0, 18);
  const bottomSlider = brandData.slice(18);

  return (
    <section className="brands-section fade-up-works">
      <h2 className="brands-title slide-left-works">VEHICLE BRANDS WE SUPPORT</h2>

      <div className="slider slider-left fade-up-works">
        <div className="slide-track">
          {[...topSlider, ...topSlider, ...topSlider].map((brand, i) => (
            <BrandCard key={`top-${i}`} {...brand} />
          ))}
          {[...topSlider, ...topSlider, ...topSlider].map((brand, i) => (
            <BrandCard key={`top-${i}`} {...brand} />
          ))}
        </div>
      </div>

      <div className="slider slider-right fade-up-works">
        <div className="slide-track">
          {[...bottomSlider, ...bottomSlider, ...bottomSlider].map((brand, i) => (
            <BrandCard key={`bottom-${i}`} {...brand} />
          ))}
          {[...bottomSlider, ...bottomSlider, ...bottomSlider].map((brand, i) => (
            <BrandCard key={`bottom-${i}`} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
