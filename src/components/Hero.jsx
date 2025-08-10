import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hero.css';
import heroWorkspace from '../assets/images/hero-workspace.png';

const Hero = () => {
    return (
        <>
            {/* Desktop Layout - 1200px and above */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroWorkspace})` }}>
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6">
                            <div className="hero-content">
                                <div className="gradient-text-box">
                                    <div className="gradient-content">
                                        <h1 className="hero-title">
                                            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                                        </h1>
                                        <button className="btn btn-consultation">
                                            Get Free Consultation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile & Tablet Layout - Below 1200px */}
            <div className="hero-image-section" style={{ backgroundImage: `url(${heroWorkspace})` }}></div>

            <div className="hero-text-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="hero-title">
                                We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                            </h1>
                            <button className="btn btn-consultation">
                                Get Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
