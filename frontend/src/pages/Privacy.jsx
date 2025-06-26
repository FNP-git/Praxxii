import React from 'react';
import './Privacy.css';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/HamburgerMenu';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />

      <section className="privacy-section">
        <div className="privacy-overlay">
          <div className="privacy-content">
            <h2 className="privacy-heading">PRIVACY POLICY</h2>
            <h3 className="privacy-subheading">Praxxii Global Privacy Practices</h3>

            <div className="privacy-description">
              <p>Praxxii Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website (www.fnpautoparts.com) and purchase our products.</p>

              <h4>1. Information We Collect</h4>
              <p><strong>a. Personal Information</strong></p>
              <p>When you interact with our website, we may collect:</p>
              <ul>
                <li>Contact Details: Name, email address, phone number, and shipping address.</li>
                <li>Payment Information: Credit/debit card details or other payment details via secure third-party payment providers.</li>
                <li>Account Information: Username, password, and order history if you create an account.</li>
              </ul>

              <p><strong>b. Non-Personal Information</strong></p>
              <ul>
                <li>Device Information: IP address, browser type, operating system, and device type.</li>
                <li>Website Usage Data: Pages visited, time spent on our site, and navigation behavior.</li>
                <li>Cookies & Tracking Technologies: We use cookies and similar technologies to enhance your browsing experience.</li>
              </ul>

              <h4>2. How We Use Your Information</h4>
              <ul>
                <li>Process and fulfill orders.</li>
                <li>Provide customer support.</li>
                <li>Improve our website and services.</li>
                <li>Send promotional offers and updates (if you opt-in).</li>
                <li>Prevent fraudulent transactions and enhance security.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h4>3. Sharing Your Information</h4>
              <p>We do not sell or rent your personal information. However, we may share it with:</p>
              <ul>
                <li>Service Providers: Payment processors, shipping partners, and marketing platforms.</li>
                <li>Legal Authorities: If required by law or to protect our legal rights.</li>
                <li>Business Transfers: In case of a merger, sale, or acquisition of our business.</li>
              </ul>

              <h4>4. Cookies & Tracking Technologies</h4>
              <ul>
                <li>Improve site functionality.</li>
                <li>Analyze visitor behavior.</li>
                <li>Provide targeted advertisements.</li>
              </ul>
              <p>You can manage cookie preferences through your browser settings.</p>

              <h4>5. Data Security</h4>
              <p>We take reasonable security measures to protect your data, including encryption, secure servers, and restricted access. However, no method of transmission over the internet is 100% secure.</p>

              <h4>6. Your Rights & Choices</h4>
              <ul>
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing emails by clicking "unsubscribe."</li>
                <li>Disable cookies via your browser settings.</li>
              </ul>
              <p>To exercise your rights, contact us at [insert email].</p>

              <h4>7. Third-Party Links</h4>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing personal information.</p>

              <h4>8. Changes to This Privacy Policy</h4>
              <p>We may update this policy periodically. Changes will be posted on this page with a revised "Last Updated" date.</p>

              <h4>9. Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, contact us at:</p>
              <p>Praxxii Global</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy;
