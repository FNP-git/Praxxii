import React from 'react';
import './Warranty.css';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';

const Warranty = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />

      <section className="warranty-section">
        <div className="warranty-overlay">
          <div className="warranty-content">
            <h2 className="warranty-heading">WARRANTY POLICY</h2>
            <h3 className="warranty-subheading">Praxxii Global Engine & Transmission Warranty Terms</h3>

            <div className="warranty-description">
              <h4>Used Engine Warranty –</h4>
              <p>This warranty applies to the engine cylinder head and block assembly. Our warranty excludes the coverage of the following accessories: fuel injection components, carburettor, intake and exhaust manifolds, distributor, alternator, emission control devices, smog pump and components, seals, timing belt (and any related tensioner, tensioner adjusters, and/or idler bearings), timing cover, thermostat, water pump, flywheel or flex plate, pulleys, valve cover, sensors, switches, oil pan and oil pickup tube, turbocharger, and intercooler (where applicable). The above parts must be replaced or swapped from your old original engine. Please note that labor costs are not covered under warranty.</p>
              <p>Warranty covers only its performance not the appearance or cosmetic damages, there may be rust, scratches or dents on the appearance.</p>
              <p>Praxxii Global is not responsible for damage caused by a broken or stripped timing belt.</p>
              <p>Customer is responsible for changing oils, filters, sensors, all gaskets and all seals before installation and heat tabs shall not be removed or tampered with or this could void the warranty.</p>

              <p><strong>For your warranty to be valid of the Engine, you must complete the following steps before/during installation –</strong></p>
              <ul>
                <li>Drain and replace engine oil to manufacturer suggested levels.</li>
                <li>Replace Oil, air and fuel filters.</li>
                <li>Replace valve cover & all gasket</li>
                <li>Replace oil pan gasket & rear main seal</li>
                <li>If needed, replace timing gears, chains, or belts & gaskets.</li>
                <li>Replace thermostat & all gaskets</li>
                <li>Water and oil sending units or pumps</li>
                <li>Flush cooling system and refilled the proper level.</li>
                <li>Install new spark plugs & wires.</li>
                <li>Install new belts and hoses.</li>
                <li>Replace Front and rear seals and camshaft (s) seals</li>
              </ul>

              <p>The above-mentioned parts must be replaced or swapped from the old original engine to validate the engine warranty and the supported documents must be in the form of invoice from a store (No hand written slips will be accepted).</p>
              <p>Please note Praxxii Global warrants all parts under the standard warranty of 30 days unless otherwise stated in writing.</p>
              <p>Failure to provide proof any of these steps were not taken will void the warranty.</p>

              <p><strong>Warranty is void if:</strong></p>
              <ul>
                <li>The engine was not properly installed by the mechanic or workshop.</li>
                <li>The engine was installed by the customer himself under no guidance.</li>
                <li>The engine was used for racing.</li>
                <li>The vehicles modified in any way outside manufacturer’s specifications.</li>
                <li>The engine was used without proper lubrication or cooling regardless of the reason.</li>
                <li>Any tune ups and adjustments in belts, hoses, filters, emission-control devices, sparkplugs.</li>
              </ul>

              <p>Warranty may be void if in inspection Praxxii Global finds that above mentioned parts were not replaced at the time of installation.</p>

              <h4>Used Transmission Warranty –</h4>
              <p>We guarantee that it will shift properly, gears and bearings to be in good working condition.</p>
              <p>Please note that labor costs are not covered under warranty.</p>

              <p><strong>For your warranty to be valid of the Transmission, you must complete the following steps before/during installation –</strong></p>
              <ul>
                <li>Replace all seals.</li>
                <li>Install new filter kit.</li>
                <li>Flush and inspect cooling lines.</li>
                <li>Align and engage the torque converter into the front pump.</li>
                <li>Fill transmission with manufacturer specified fluid.</li>
                <li>Clear all transmission computer codes prior to starting or operating the vehicle.</li>
                <li>Adjust throttle position sensor cables.</li>
                <li>Replace coolers and/or radiator if required by OEM.</li>
                <li>Ensure the torque converter is fully seated. Broken front pumps are not warranted by the seller.</li>
                <li>Torque Converter Seal and all Axle Seals must be replaced. OIL LEAKS ARE ALSO NOT COVERED.</li>
              </ul>

              <p>Failure to provide proof any of these steps were not taken, will void the warranty.</p>

              <p><strong>Warranty is void if:</strong></p>
              <ul>
                <li>The transmission was not properly installed by the mechanic or workshop.</li>
                <li>The transmission was used for racing.</li>
                <li>The vehicles modified in any way outside manufacturer’s specifications.</li>
                <li>The transmission was used without proper lubrication or cooling regardless of the reason.</li>
                <li>Any tune ups and adjustments in belts, hoses, filters, emission-control devices, spark plugs.</li>
              </ul>

              <h4>General Terms & Conditions –</h4>
              <p>If return or replacement was authorized by Praxxii Global, the part needs to be received in the same condition as it was originally shipped to the customer.</p>
              <p>If the part is not received in the same condition there will be absolutely NO REFUND under any circumstances.</p>
              <p>Refunds are only authorized if replacement is not available. If the engine was disassembled or altered in any way without Praxxii Global written authorization then the warranty will be void. (No Questions Asked)</p>
              <p>In case of a total breakdown of an engine, the buyer's obligation is limited to replacing broken covered components. It is the buyer's decision to replace the engine or to replace transmission that is covered under the warranty.</p>
              <p>If replacement of an engine/transmission is required and a replacement part is not available we reserve the right to pay the cost of replacement part's value.</p>
              <p>If the engine/transmission needs to be replaced under the coverage of the warranty, Praxxii Global has the option to replace the said engine/transmission with another used assembly of similar kind of quality.</p>
              <p>Praxxii Global will not be responsible for any freight cost incurred. Replacement of an engine/transmission will be done only once under this warranty.</p>

              <h4>Shipping Terms –</h4>
              <p>We offer free shipping only on a business or commercial address.</p>
              <p>Please note the address is considered as a business address as a location with following:</p>
              <ul>
                <li>Accessible to a 16/18-wheeler truck & in a business district.</li>
                <li>Availability of a cherry picker/forklift.</li>
                <li>No delivery appointment requirement during business hours.</li>
              </ul>
              <p>In cases, if your address is classified as Residential or Limited access by the carrier. There may be additional cost charged by the carrier and the same shall be billed to your card on actual.</p>
              <p>Before signing the delivery, please check any physical damages on the used engine and used transmission. If you catch any damage, put it in notes under the delivery receipt and contact us immediately.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Warranty;
