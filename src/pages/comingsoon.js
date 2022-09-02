import React from "react";

const ComingSoon = () => {
  return (
    <div className="site-content">
      <section
        className="coming-soon-section ptb-180 bg-image bg-overlay-gradient"
        style={{ backgroundImage: 'url("assets/images/bg/banner/1.jpg")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="coming-soon-content text-center">
                <div className="site-logo">
                  <a href="index-2.html">
                    <img src="assets/images/logo/coming-logo.png" alt="logo" />
                  </a>
                </div>
                {/*~~./ site-logo ~~*/}
                <h3 className="title">
                  We are glad to see you, But please be patient, This page is
                  under construcion.
                </h3>
                <div className="countdown-area">
                  <div className="countdown text-white">
                    <div className="clock-item clock-days countdown-time-value">
                      <div className="wrap">
                        <div className="inner">
                          <div id="canvas-days" className="clock-canvas" />
                          <div className="text">
                            <p className="val">0</p>
                            <p className="type-days type-time">DAY</p>
                          </div>
                          {/* /.text */}
                        </div>
                        {/* /.inner */}
                      </div>
                      {/* /.wrap */}
                    </div>
                    {/* /.clock-item */}
                    <div className="clock-item clock-hours countdown-time-value">
                      <div className="wrap">
                        <div className="inner">
                          <div id="canvas-hours" className="clock-canvas" />
                          <div className="text">
                            <p className="val">0</p>
                            <p className="type-hours type-time">HOUR</p>
                          </div>
                          {/* /.text */}
                        </div>
                        {/* /.inner */}
                      </div>
                      {/* /.wrap */}
                    </div>
                    {/* /.clock-item */}
                    <div className="clock-item clock-minutes countdown-time-value">
                      <div className="wrap">
                        <div className="inner">
                          <div id="canvas-minutes" className="clock-canvas" />
                          <div className="text">
                            <p className="val">0</p>
                            <p className="type-minutes type-time">MINUTE</p>
                          </div>
                          {/* /.text */}
                        </div>
                        {/* /.inner */}
                      </div>
                      {/* /.wrap */}
                    </div>
                    {/* /.clock-item */}
                    <div className="clock-item clock-seconds countdown-time-value">
                      <div className="wrap">
                        <div className="inner">
                          <div id="canvas-seconds" className="clock-canvas" />
                          <div className="text">
                            <p className="val">0</p>
                            <p className="type-seconds type-time">SECOND</p>
                          </div>
                          {/* /.text */}
                        </div>
                        {/* /.inner */}
                      </div>
                      {/* /.wrap */}
                    </div>
                    {/* /.clock-item */}
                  </div>
                </div>
                {/*~./ countdown-area ~*/}
                <div className="social-media-area">
                  <h4 className="title">Or Follow Us on</h4>
                  <ul className="social-share-two">
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
                  {/*~./ social-share ~*/}
                </div>
              </div>
              {/*~./ end coming soon content ~*/}
            </div>
          </div>
        </div>
      </section>
      {/*~~./ end coming soon section ~~*/}
    </div>
  );
};

export default ComingSoon;
