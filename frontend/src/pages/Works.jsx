import React from 'react';
import WorkCard from '../components/WorkCard';
import './Works.css';
import { useNavigate } from 'react-router-dom';
import truckLeft from '../assets/truck-left.svg';
import lineCenter from '../assets/line-center.svg';
import houseRight from '../assets/house-right.svg';
import useWorksAnimation from '../hooks/useWorksAnimation'; // custom hook
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Works = () => {
 useWorksAnimation(); // initialize animations
 const navigate = useNavigate();
 return (
   <div id="works-section">
     <div className="works-header fade-up-works">
       <h3 className="works-subtitle">OUR PROCESS</h3>
       <h2 className="works-main-title">Zero Complications. No Uncertainty. Just 4 Easy Steps.</h2>
     </div>

     <div className="works-cards">
       <div className="slide-left-works" style={{ animationDelay: '0s' }}>
         <WorkCard
           step="1"
           stepDesc="Completed in under 30 seconds."
           title="Share Your Requirements"
           desc="Provide your Vehicle Year, Brand, Model, and Component Type (engine or transmission). Add your VIN for precise compatibility."
         />
       </div>
       <div className="slide-left-works" style={{ animationDelay: '0.4s' }}>
         <WorkCard
           step="2"
           stepDesc="Exclusively verified, premium components — zero surprises."
           title="We Locate Your Component"
           desc="Our Specialist Team verifies inventory from reliable sources nationwide."
         />
       </div>
       <div className="slide-left-works" style={{ animationDelay: '0.8s' }}>
         <WorkCard
           step="3"
           stepDesc="Estimates are quick, complimentary, and obligation-free."
           title="Receive Your Estimate"
           desc="You'll get a customized estimate including cost, mileage details, and coverage information. Zero additional charges."
         />
       </div>
       <div className="slide-left-works" style={{ animationDelay: '1.2s' }}>
         <WorkCard
           step="4"
           stepDesc="Monitoring and assistance throughout the entire process."
           title="Quick Delivery to Your Location"
           desc="After confirmation, we transport your component safely and reliably — directly to your garage or residence."
         />
       </div>
     </div>

     <div className="works-footer fade-up-works">
       <h3 className="works-footer-title">Ready to begin?</h3>
       <div className="works-buttons">
         
           <a
  href="tel:+15084920300"
  className="works-btn call"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  📞 Contact Us
</a>

         <Link to="/contact">
           <button className="works-btn register">Sign Up</button>
         </Link>
       </div>
     </div>

     {/* Bottom Images */}
     <div className="works-bottom-images">
       <img src={truckLeft} alt="Truck with packages" className="truck-left" />
       <img src={lineCenter} alt="Connecting line" className="line-center" />
       <img src={houseRight} alt="House delivery" className="house-right" />
     </div>
   </div>
 );
};

export default Works;