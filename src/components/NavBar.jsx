import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import logo from '../assets/images/at-digital-logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="AT Digital" />
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="custom-nav-link" href="#">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#">CONTACT US</a>
              </li>
              <li className="nav-item">
                <a className="custom-nav-link" href="#">CAREERS</a>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="custom-navbar-toggler"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={closeMenu}>
            ×
          </button>
        </div>
        <div className="mobile-menu-items">
          <a className="mobile-menu-link" href="#" onClick={closeMenu}>HOME</a>
          <a className="mobile-menu-link" href="#" onClick={closeMenu}>SERVICES</a>
          <a className="mobile-menu-link" href="#" onClick={closeMenu}>ABOUT US</a>
          <a className="mobile-menu-link" href="#" onClick={closeMenu}>CONTACT US</a>
          <a className="mobile-menu-link" href="#" onClick={closeMenu}>CAREERS</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
