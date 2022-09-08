import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, setUserState } from "../redux/user/user-actions";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpCred, setSignUpCred] = useState({
    name: "",
    email: "",
    password: "",
    confrimPassword: "",
    agree: "",
  });
  const handleAgree = (event) => {
    setSignUpCred({ ...signUpCred, agree: !signUpCred.agree });
  };
  const handleChange = (event) => {
    setSignUpCred({ ...signUpCred, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const { password, confrimPassword } = signUpCred;
    if (password !== confrimPassword) alert("not matched password ");
    dispatch(setUserState("client"));
    dispatch(setCurrentUser(signUpCred));
    navigate("/confirmation");
  };
  return (
    <div
      className="user-reg-form-area modal fade show"
      style={{ display: "block" }}
    >
      <button
        type="button"
        className="close p-3 btn-close"
        onClick={() => navigate("/")}
      >
        <img src="/assets/images/icon/close.png" alt="close" />
      </button>
      <div className="modal-dialog register-modal-area">
        <div className="register-modal-area-outer-inner">
          <div className="modal-header z-index-master" />
          <div className="modal-content user-register-area">
            <div className="user-signup-area show">
              <div className="user-left-thumb">
                <img src="/assets/images/others/reg-thumb.jpg" alt="thumb" />
              </div>
              <div className="form-content">
                <h3>Create an Account</h3>
                <form
                  onSubmit={handleSubmit}
                  className="default-form signup-form"
                >
                  <div className="form-group">
                    <input
                      required
                      id="name"
                      name="name"
                      className="form-controllar"
                      type="text"
                      value={signUpCred.name}
                      onChange={handleChange}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      id="email-up"
                      name="email"
                      className="form-controllar"
                      type="email"
                      value={signUpCred.email}
                      onChange={handleChange}
                      placeholder="Email Adderss"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      id="pass-up"
                      name="password"
                      className="form-controllar"
                      type="password"
                      value={signUpCred.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      id="pass-up-confirm"
                      name="confrimPassword"
                      className="form-controllar"
                      type="password"
                      value={signUpCred.confrimPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="login-form-remember">
                    <label>
                      <input
                        required
                        name="agree"
                        onChange={handleAgree}
                        type="checkbox"
                        checked={signUpCred.agree}
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
  );
};

export default SignUp;
