import React from "react";

const SixthFooter = ({ isNotBranded }) => {
  return (
    <>
      {" "}
      <footer
        className="site-footer footer-default-style footer-style-three bg-image bg-overlay"
        style={{ backgroundImage: 'url("assets/images/bg/footer-bg.jpg")' }}
      >
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Popular brands Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        {!isNotBranded && (
          <div className="popular-brands-section pt-70">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/*~~ Start Brands Carousel ~~*/}
                  <div className="brands-carousel owl-carousel">
                    <div className="brands-link">
                      <img src="assets/images/brand/3/1.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="assets/images/brand/3/2.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="assets/images/brand/3/3.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="assets/images/brand/3/4.png" alt="logo" />
                    </div>
                  </div>
                  {/*~./ end brands carousel ~*/}
                </div>
              </div>
            </div>
          </div>
        )}
        {/*~./ end popular brands section ~*/}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Widget Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="footer-widget-area pt-70 pb-100">
          <div className="container">
            <div className="row">
              {/*~~~~~ Start Widget About Footer ~~~~~*/}
              <div className="col-lg-3">
                <aside className="widget bt-about-footer-widget">
                  <div className="widget-content">
                    <div className="about-logo">
                      <a href="index-2.html">
                        <img
                          src="assets/images/logo/footer-logo2.png"
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <p>
                      Sitting on a working-class comme dows of an easy
                      above-grounding rail line group called Make the art Road
                      New York's busy street
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
                      <p>
                        Subscribe to our mailing list to get the new updates!
                      </p>
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
                {/*~./ end footer bottom right ~*/}
              </div>
            </div>
          </div>
        </div>
        {/*~./ end footer bottom area ~*/}
      </footer>
      {/*~./ end site footer ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start Header Search Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div
        id="header_search_model"
        className="header-search-model modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog header-search-area" role="document">
          <div className="header-search-area-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img src="assets/images/icon/close.png" alt="close" />
              </button>
            </div>
            <div className="search-form modal-content">
              <form action="#">
                <input
                  type="search"
                  placeholder="Baracelo Hotels & Spa Resort"
                />
                <button type="submit">
                  <span className="icon-search32" />
                </button>
              </form>
              <div className="search-by-cat">
                <a href="#" className="single-cat restaurant">
                  <div className="icon">
                    <span className="icon-fast-food" />
                  </div>
                  <div className="text">Restaurants</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat beauty">
                  <div className="icon">
                    <span className="icon-grooming" />
                  </div>
                  <div className="text">Beauty</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat automotive">
                  <div className="icon">
                    <span className="icon-wrench" />
                  </div>
                  <div className="text">Automotive</div>
                </a>
                {/*~./ single-cat ~*/}
                <a href="#" className="single-cat hotel">
                  <div className="icon">
                    <span className="icon-building" />
                  </div>
                  <div className="text">Hotels</div>
                </a>
                {/*~./ single-cat ~*/}
              </div>
            </div>
            {/*~./ search-form ~*/}
          </div>
        </div>
      </div>
      {/*~./ end header search model ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start User Registation Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div
        id="reg_form_model"
        className="user-reg-form-area modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog register-modal-area" role="document">
          <div className="register-modal-area-outer-inner">
            <div className="modal-header">
              <button
                type="button"
                className="close btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img src="assets/images/icon/close.png" alt="close" />
              </button>
            </div>
            <div className="modal-content user-register-area">
              {/*~~~ Start User Signin Area ~~~*/}
              <div className="user-signin-area">
                <div className="user-left-thumb">
                  <img src="assets/images/others/login-thumb.jpg" alt="thumb" />
                </div>
                <div className="form-content">
                  <h3>Login to Account</h3>
                  <form className="default-form signin-form">
                    <div className="form-group">
                      <input
                        id="email"
                        name="email"
                        className="form-controllar"
                        type="email"
                        placeholder="Email Adderss"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="form-group">
                      <input
                        id="pass"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="remember-and-password">
                      <div className="login-form-remember">
                        <label>
                          <input
                            id="remembermesignin"
                            defaultValue=""
                            type="checkbox"
                          />
                          <span>Remember Me</span>
                        </label>
                      </div>
                      <div className="forget-pass">
                        <a className="btn-password" href="#">
                          Forget Password
                        </a>
                      </div>
                    </div>
                    {/*/.remember-and-password*/}
                    <div className="form-btn-group">
                      <button type="submit" className="btn btn-default">
                        sign in
                      </button>
                      <div className="reg-others-midea">
                        <div className="text">Or Login With</div>
                        <div className="midea-icons">
                          <ul className="social-share">
                            <li>
                              <a className="facebook" href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a className="twitter" href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a className="google-plus" href="#">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                              <a className="linkedin" href="#">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="login-form-register-now">
                    Dont have an account?{" "}
                    <a className="btn-register-now" href="#">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
              {/*~./ end user signin area ~*/}
              {/*~~~ Start User Signup Area ~~~*/}
              <div className="user-signup-area">
                <div className="user-left-thumb">
                  <img src="assets/images/others/reg-thumb.jpg" alt="thumb" />
                </div>
                <div className="form-content">
                  <h3>Create an Account</h3>
                  <form
                    id="signup-form"
                    className="default-form signup-form"
                    method="post"
                  >
                    <div className="form-group">
                      <input
                        id="name"
                        name="name"
                        className="form-controllar"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="form-group">
                      <input
                        id="email-up"
                        name="email"
                        className="form-controllar"
                        type="email"
                        placeholder="Email Adderss"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="form-group">
                      <input
                        id="pass-up"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="form-group">
                      <input
                        id="pass-up-confirm"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {/*/.form-group*/}
                    <div className="login-form-remember">
                      <label>
                        <input
                          id="remembermesignup"
                          defaultValue=""
                          type="checkbox"
                        />
                        <span>I Agree to the</span>{" "}
                        <a href="#">Privacy Polciy</a>
                      </label>
                    </div>
                    <div className="form-btn-group">
                      <button type="submit" className="btn btn-default">
                        register
                      </button>
                      <div className="reg-others-midea">
                        <div className="text">Or Connect With</div>
                        <div className="midea-icons">
                          <ul className="social-share">
                            <li>
                              <a className="facebook" href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a className="twitter" href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a className="google-plus" href="#">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                              <a className="linkedin" href="#">
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*~./ end user signup area ~*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixthFooter;
