import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css'; // Page specific styling

import usedEngineIcon from '../assets/used-engine.svg';
import usedTransmissionIcon from '../assets/used-transmission.svg';
import deliveryIcon from '../assets/nationwide-delivery.svg';
import warrantyIcon from '../assets/warranty-coverage.svg';
import vinIcon from '../assets/vin-compatibility.svg';
import supportIcon from '../assets/expert-support.svg';
import womanImage from '../assets/woman-holding-box.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();

  return (
   <div id="services-section">
     {/* Animate the header */}
     <div className="fade-up-on-scroll services-header">
       <h3 className="services-subtitle">WHAT WE OFFER</h3>
       <h2 className="services-main-title">Premium Parts. Reliable Process. Countrywide Coverage.</h2>
       <p className="services-description">
         At Praxxii Global, we focus on delivering superior, Used automotive engines and
         transmissions that are thoroughly tested, examined, and prepared for optimal performance. Whether you're a workshop
         owner, technician, or automotive enthusiast, our solutions are designed to reduce your time, costs, and
         hassle.
       </p>
     </div>

     <div className="services-content">
        {/* Woman image sliding from left */}
        <div className="slide-left-on-scroll services-image-area">
         <img
           src={womanImage}
           alt="Woman holding a package"
           className="services-woman-image"
           loading="lazy"
         />
       </div>
       <div className="services-cards">
         {/* Alternating slide animations */}
         <div className="slide-left-on-scroll">
           <ServiceCard
             icon={usedEngineIcon}
             title="Used Engines"
             points={[
               'Thoroughly examined and pressure tested.',
               'Compatible with most vehicle brands and models.',
               'Minimal-mileage alternatives available.',
             ]}
           />
         </div>
         <div className="slide-right-on-scroll">
           <ServiceCard
             icon={usedTransmissionIcon}
             title="Used Transmissions"
             points={[
               'Completely evaluated and performance tested.',
               'Suitable for various makes and models.',
               'Reduced-mileage choices available.',
             ]}
           />
         </div>
         <div className="slide-left-on-scroll">
           <ServiceCard
             icon={deliveryIcon}
             title="Countrywide Shipping"
             points={[
               'Fast and secure shipping nationwide.',
               'Real-time tracking and delivery updates.',
               'Professional packaging for safe transport.',
             ]}
           />
         </div>
         <div className="slide-right-on-scroll">
           <ServiceCard
             icon={warrantyIcon}
             title="Guarantee Protection"
             points={[
               'Comprehensive warranty on all parts.',
               'Peace of mind with every purchase.',
               'Hassle-free replacement if issues arise.',
             ]}
           />
         </div>
         <div className="slide-left-on-scroll">
           <ServiceCard
             icon={vinIcon}
             title="VIN/Fitment Assistance"
             points={[
               'Expert guidance on part compatibility.',
               'VIN verification for accurate matching.',
               'Technical support for proper installation.',
             ]}
           />
         </div>
         <div className="slide-right-on-scroll">
           <ServiceCard
             icon={supportIcon}
             title="Round-the-Clock Expert Help"
             points={[
               'Professional technicians available 24/7.',
               'Immediate assistance for urgent needs.',
               'Knowledgeable support for all inquiries.',
             ]}
           />
         </div>
       </div>

      
     </div>
   </div>
 );
};

export default Services;
