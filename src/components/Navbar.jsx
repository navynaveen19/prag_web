import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import appLogo from '../assets/app_logo.svg';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={appLogo} alt="Prag Logo" className="logo-img" />
          <span className="logo-text">Prag</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/portfolio" 
              className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="nav-cta">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
