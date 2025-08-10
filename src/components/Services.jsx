import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Services.css'; 
import web from '../assets/images/web-development-icon.png';
import digital from '../assets/images/digital-strategy-icon.png';

const ServicesComponent = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="row">
          {/* Web & Mobile App Development Card */}
          <div className="col-12">
            <div className="service-card">
              <div className="decorative-elements">
                <div className="floating-square"></div>
                <div className="floating-square"></div>
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 text-center">
                  <div className="service-icon">
                    <img
                      src={web}
                      alt="Web Development Icon"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <h3 className="service-title">
                    Web & Mobile App Development
                  </h3>
                  <p className="service-description">
                    Your web and mobile Apps are pieces of the puzzle to grow your
                    business. We use frameworks which tailor content and engagement
                    methods to respond to different intents shown by your potential
                    customers who interact with your business online.
                  </p>
                  <div>
                    <button className="learn-more-btn" type="button">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Strategy Consulting Card */}
          <div className="col-12">
            <div className="service-card">
              <div className="decorative-elements">
                <div className="floating-square"></div>
                <div className="floating-square"></div>
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 order-lg-2 text-center">
                  <div className="service-icon">
                    <img
                      src={digital}
                      alt="Digital Strategy Icon"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 order-lg-1">
                  <h3 className="service-title">
                    Digital Strategy Consulting
                  </h3>
                  <p className="service-description">
                    Your digital strategy should complement the overall marketing strategy
                    of the company. In online marketing, each component will never work in
                    isolation and every business needs a different mix. We provide a clear
                    concept and strategic overview to find the most efficient model for
                    your business.
                  </p>
                  <div>
                    <button className="learn-more-btn" type="button">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
