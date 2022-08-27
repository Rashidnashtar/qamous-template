import React from "react";

const SiteFooter = () => {
  return (
    <footer className="site-footer footer-default-style">
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Widget Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="footer-widget-area ptb-100">
        <div className="container">
          <div className="row">
            {/*~~~~~ Start Widget About Footer ~~~~~*/}
            <div className="col-lg-3">
              <aside className="widget bt-about-footer-widget">
                <div className="widget-content">
                  <div className="about-logo">
                    <a href="index-2.html">
                      <img
                        src="/assets/images/logo/footer-logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <p>
                    Sitting on a working-class comme dows of an easy
                    above-grounding rail line group called Make the art Road New
                    York's busy street
                  </p>
                  <ul className="social-share">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="google-plus" href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="youtube" href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*~./ end about footer widget ~*/}
            {/*~~~~~ Start Widget List ~~~~~*/}
            <div className="col-lg-4">
              <aside className="widget widget-list style-two">
                <h2 className="widget-title">Featured Cities</h2>
                <div className="widget-content">
                  <ul>
                    <li>
                      <a href="#">Alaska</a>
                    </li>
                    <li>
                      <a href="#">Mississippi</a>
                    </li>
                    <li>
                      <a href="#">California</a>
                    </li>
                    <li>
                      <a href="#">New Jersey</a>
                    </li>
                    <li>
                      <a href="#">Colorado</a>
                    </li>
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">Florida</a>
                    </li>
                    <li>
                      <a href="#">Oklahoma</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*~./ end widget list ~*/}
            {/*~~~~~ Start Widget List ~~~~~*/}
            <div className="col-lg-2">
              <aside className="widget widget-list">
                <h2 className="widget-title">Help</h2>
                <div className="widget-content">
                  <ul>
                    <li>
                      <a href="#">How It Works</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Pricing Packages</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            {/*~./ end widget list ~*/}
            {/*~~~~~ Start Subscribe Widget~~~~~*/}
            <div className="col-lg-3">
              <aside className="widget tb-subscribe-widget">
                <h4 className="widget-title">Subscribe With Us</h4>
                <div className="widget-content">
                  <div className="subscribe-box">
                    <p>Subscribe to our mailing list to get the new updates!</p>
                    <div className="subscribe-form">
                      {/* Subscribe form */}
                      <form className="dv-form" id="mc-form">
                        <div className="form-group">
                          <input
                            id="mc-email"
                            name="EMAIL"
                            placeholder="Enter Your Email Address"
                            type="email"
                          />
                          <button
                            className="btn btn-default"
                            name="Subscribe"
                            id="subscribe-btn"
                            type="submit"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*~./ end subscribe widget ~*/}
          </div>
        </div>
      </div>
      {/*~./ end footer widgets area ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Popular brands Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="popular-brands-section bg-black ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*~~ Start Brands Carousel ~~*/}
              <div className="brands-carousel owl-carousel">
                <div className="brands-link">
                  <img src="/assets/images/brand/3/1.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="/assets/images/brand/3/2.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="/assets/images/brand/3/3.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="/assets/images/brand/3/4.png" alt="logo" />
                </div>
              </div>
              {/*~./ end brands carousel ~*/}
            </div>
          </div>
        </div>
      </div>
      {/*~./ end popular brands section ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Bottom Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>© Copyright 2019 Qamous. All Rights Reserved</p>
              </div>
            </div>
            {/*~./ end copyright ~*/}
            <div className="col-lg-6 col-md-6">
              <div className="footer-bottom-right">
                <p>
                  Made <i className="fa fa-heart" /> With{" "}
                  <a href="#">RadiuzZ</a>
                </p>
              </div>
              {/*~./ end footer menu ~*/}
            </div>
          </div>
        </div>
      </div>
      {/*~./ end footer bottom area ~*/}
    </footer>
  );
};

export default SiteFooter;
