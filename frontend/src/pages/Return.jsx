import React from 'react';
import './Return.css';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';

const Return = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />

      <section className="return-section">
        <div className="return-overlay">
          <div className="return-content">
            <h2 className="return-heading">RETURN AND CANCELLATION POLICY</h2>
            <h3 className="return-subheading">Praxxii Global Return Guidelines & Warranty Claims</h3>

            <div className="return-description">
              <p>No refunds on special ordered parts.</p>
              <p>All returns must be accompanied by an original receipt.</p>
              <p>Praxxii Global does not cover labor charges in any circumstances.</p>
              <p>Abuse, Commercial Use, Industrial Use voids any and all warranties.</p>
              <p>Praxxii Global only guarantees the performance of the part, not the appearance of it since it is a used part.</p>

              <p>Please note that No Labor Warranty was purchased. Purchaser is responsible for 100% of labor and installation costs.</p>
              <p>If any order is cancelled other than performance related issues, then restocking fees of 30% will be applicable.</p>
              <p>If the order is cancelled after shipping, then restocking fees of 30% will be applicable along with the shipping charges.</p>
              <p>If the order refused at the doorstep, then restocking fees of 30% will be applicable along with the shipping charges (to-and-fro)</p>
              <p>All Deposits and Booking Amount are taken in "good faith" and are non-refundable under any circumstances.</p>

              <h4>Warranty Claim Procedure –</h4>
              <p>In the unlikely event of a Head/Block/Transmission being defective, we will require the following to be emailed only to us: (ATTN: Claims or Queries emailed to <a href="mailto:info@praxxiiglobal.com">info@praxxiiglobal.com</a>)</p>
              <p>Praxxii Global provides only a standard replacement warranty of 30 days only on the used parts.</p>
              <p>To activate the warranty, please provide the copy of the Driver's License or any State ID (Photo ID).</p>
              <p>We will require a detailed diagnostic report along with pictures & videos of the described defective part from a Certified Mechanic only.</p>
              <p>A copy of the mechanic’s certification along with their contact information must be provided. We will contact the Certified Mechanic to ensure that the documents are legitimate; the Certified Mechanic may not be the individual who bought the engine from us.</p>
              <p>Once required paperwork will be emailed to us, we will decide on whether we will provide a refund for the damaged engine/transmission to be returned for a replacement.</p>
              <p>The accessories are also not covered under the warranty either they are damaged or missing.</p>
              <p>Shipping charges are also not covered under warranty. You must return the defective part (engine/transmission) completely as received with no parts missing on your cost.</p>
              <p>Make sure all fluids are drained before return.</p>
              <p>If core returns then core also needs to be completely drained. If not then it will result in a $100.00 fee against the core deposit.</p>

              <p>If you have any questions or concerns regarding the warranty or any other type of queries, feel free to contact us via email at <a href="mailto:info@praxxiiglobal.com">info@praxxiiglobal.com</a> or can call us at +1-5084920300</p>

              <p>Praxxii Global reserves all the rights to change or modify the warranty at any time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Return;
