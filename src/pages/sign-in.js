import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="site-content">
      <div
        className="user-reg-form-area modal fade show"
        style={{ display: "block" }}
      >
        <button type="button" className="close p-3 btn-close">
          <img
            src="/assets/images/icon/close.png"
            alt="close"
            onClick={() => navigate("/")}
          />
        </button>
        <div className="modal-dialog register-modal-area">
          <div className="register-modal-area-outer-inner">
            <div className="modal-header z-index-master"></div>
            <div className="modal-content user-register-area">
              <div className="user-signin-area">
                <div className="user-left-thumb">
                  <img
                    src="/assets/images/others/login-thumb.jpg"
                    alt="thumb"
                  />
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
                    <div className="form-group">
                      <input
                        id="pass"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="remember-and-password">
                      <div className="login-form-remember">
                        <label>
                          <input
                            id="remembermesignin"
                            type="checkbox"
                            defaultValue=""
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
                    Dont have an account?
                    <Link className="btn-register-now" to="/sign-up">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="user-signup-area">
                <div className="user-left-thumb">
                  <img src="/assets/images/others/reg-thumb.jpg" alt="thumb" />
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
                    <div className="form-group">
                      <input
                        id="email-up"
                        name="email"
                        className="form-controllar"
                        type="email"
                        placeholder="Email Adderss"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="pass-up"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="pass-up-confirm"
                        name="password"
                        className="form-controllar"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="login-form-remember">
                      <label>
                        <input
                          id="remembermesignup"
                          type="checkbox"
                          defaultValue=""
                        />
                        <span>I Agree to the</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
