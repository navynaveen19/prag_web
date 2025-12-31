import { Link } from 'react-router-dom';
import appLogo from '../assets/app_logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={appLogo} alt="Prag Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Prag</span>
            </div>
            <p className="footer-description">
              Delivering innovative AI/ML and software solutions for real-time clients worldwide. 
              We transform ideas into powerful intelligent digital products.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
              <a href="#" className="social-link" aria-label="GitHub">GitHub</a>
              <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">AI/ML Solutions</Link></li>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">hello@prag.com</span>
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">123 Innovation Street<br />San Francisco, CA 94105</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prag. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
