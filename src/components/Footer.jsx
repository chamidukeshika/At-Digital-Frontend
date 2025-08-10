import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import logo from '../assets/images/at-digital-logo.png';

const Footer = () => {
    const footerStyles = {
        backgroundColor: '#4F46E5',
        '--logo-height-mobile': '32px',
        '--logo-height-tablet': '36px',
        '--logo-height-desktop-small': '40px',
        '--logo-height-desktop-large': '45px',
        '--heading-size-mobile': '1.25rem',
        '--heading-size-tablet': '1.375rem',
        '--heading-size-desktop-small': '1.5rem',
        '--heading-size-desktop-large': '1.75rem',
        '--text-size-mobile': '0.875rem',
        '--text-size-tablet': '0.9375rem',
        '--text-size-desktop-small': '1rem',
        '--text-size-desktop-large': '1.125rem',
        '--company-title-mobile': '1.375rem',
        '--company-title-tablet': '1.5rem',
        '--company-title-desktop-small': '1.625rem',
        '--company-title-desktop-large': '1.875rem',
        '--spacing-mobile': '1rem',
        '--spacing-tablet': '1.25rem',
        '--spacing-desktop-small': '1.5rem',
        '--spacing-desktop-large': '2rem'
    };

    return (
        <footer className="footer-responsive text-white py-4 py-md-5" style={footerStyles}>
            <div className="container">
                {/* Mobile Layout */}
                <div className="d-block d-lg-none">
                    <div className="section-spacing">
                        <div className="d-flex align-items-center mb-3 logo-container">
                            <img src={logo} alt="AT Digital" className="me-2 logo-img" />
                        </div>
                        <p className="mb-0 lh-base footer-description">
                            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                        </p>
                    </div>
                    <div className="section-spacing">
                        <h4 className="mb-3 fw-normal section-heading">Our Technologies</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="item-spacing"><span>ReactJS</span></li>
                            <li className="item-spacing"><span>Gatsby</span></li>
                            <li className="item-spacing"><span>NextJS</span></li>
                            <li className="mb-0"><span>NodeJS</span></li>
                        </ul>
                    </div>
                    <div className="section-spacing">
                        <h4 className="mb-3 fw-normal section-heading">Our Services</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="item-spacing"><span>Social Media Marketing</span></li>
                            <li className="item-spacing"><span>Web & Mobile App Development</span></li>
                            <li className="mb-0"><span>Data & Analytics</span></li>
                        </ul>
                    </div>
                    <div className="footer-border-top pt-3">
                        <div className="d-flex justify-content-center footer-links">
                            <a href="#" className="text-white footer-link me-3 me-md-4">Privacy Policy</a>
                            <span className="text-white me-3 me-md-4 footer-separator">|</span>
                            <a href="#" className="text-white footer-link">Terms & Conditions</a>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="d-none d-lg-block">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center mb-3 logo-container">
                                <img src={logo} alt="AT Digital" className="me-3 logo-img" />
                            </div>
                            <p className="mb-0 lh-base pe-4 footer-description">
                                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h4 className="mb-4 fw-normal section-heading">Our Technologies</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="item-spacing"><span>ReactJS</span></li>
                                <li className="item-spacing"><span>Gatsby</span></li>
                                <li className="item-spacing"><span>NextJS</span></li>
                                <li className="mb-0"><span>NodeJS</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4 className="mb-4 fw-normal section-heading">Our Services</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="item-spacing"><span>Social Media Marketing</span></li>
                                <li className="item-spacing"><span>Web & Mobile App Development</span></li>
                                <li className="mb-0"><span>Data & Analytics</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4 mt-xl-5">
                        <div className="col-12">
                            <div className="footer-border-top pt-4">
                                <div className="text-center footer-links">
                                    <a href="#" className="text-white footer-link me-4">Privacy Policy</a>
                                    <span className="text-white me-4 footer-separator">|</span>
                                    <a href="#" className="text-white footer-link">Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
