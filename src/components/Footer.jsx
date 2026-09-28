import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG Icons
  const LocationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Store Location Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              <span className="heading-icon"><LocationIcon /></span>
              Store Location
            </h3>
            <div className="footer-content">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p className="footer-email">
                <span className="icon-small"><EmailIcon /></span>
                info@lustralis.com
              </p>
              <p className="footer-phone">
                <span className="icon-small"><PhoneIcon /></span>
                123-456-7890
              </p>
            </div>
            <div className="footer-social footer-social-left">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              <li><a href="/Dresses">Dresses</a></li>
              <li><a href="/Electronics Accessories">Electronics Accessories</a></li>
              <li><a href="/Jewels">Jewels</a></li>
              <li><a href="/Home Appliances">Home Appliances</a></li>
              <li><a href="/Sandals">Sandals</a></li>
              <li><a href="/Books">Books</a></li>
              <li><a href="/Furniture-items">Furniture-items</a></li>
              <li><a href="/wearable-tech">Wearable Tech</a></li>
              <li><a href="/sale">Sale</a></li>
            </ul>
          </div>

          {/* Customer Support Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Customer Support</h3>
            <ul className="footer-links">
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Policy</h3>
            <ul className="footer-links">
              <li><a href="/shipping-returns">Shipping & Returns</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/payment-methods">Payment Methods</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} LUSTRALIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;