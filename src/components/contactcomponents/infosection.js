import React from "react";

const InfoSection = () => {
  return (
    <div className="contact-info-section pt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-location">
              <img src="assets/images/others/location.jpg" alt="img" />
            </div>
            {/*~./ contact-location ~*/}
          </div>
          <div className="col-lg-6">
            <div className="contact-info-area">
              <h3>Sagrada Familia, Spain</h3>
              <p>Carrer de Mallorca, 401, 08013 Barcelona, Spain</p>
              <div className="contact-info-list">
                <div className="single-info">
                  <span className="icon-call" />
                  02 001 021 258 963
                </div>
                {/*~./ single-info ~*/}
                <div className="single-info">
                  <span className="icon-email" />
                  <a href="mailto:support@backyard.biz">support@backyard.biz</a>
                </div>
                {/*~./ single-info ~*/}
                <div className="single-info">
                  <span className="icon-broken-link" />
                  <a href="#">thebackyard.biz</a>
                </div>
                {/*~./ single-info ~*/}
              </div>
              {/*~./ contact-info-list ~*/}
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
              {/*~./ social-share ~*/}
            </div>
            {/*~./ contact-info-area ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
