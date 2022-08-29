import React from "react";

const SecondPromoVid = () => {
  return (
    <div
      className="promo-video-section promo-video-style-two bg-image bg-fixed bg-overlay ptb-100"
      style={{ backgroundImage: 'url("assets/images/bg/promo-bg.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="promo-video-thumb">
              <img src="assets/images/promo-video/2.png" alt="thumb" />
              <a
                className="video-btn"
                href="https://www.youtube.com/watch?v=cn7AFhVEI5o&t=4s"
              >
                <div className="icon">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            {/*./ promo-video-thumb */}
          </div>
          <div className="col-lg-6">
            <div className="promo-video-content text-white">
              <h2>
                We are not in an information age, we're an entertainment age
              </h2>
              <a className="btn btn-default" href="#">
                EXPLORE OUR LISTING
              </a>
            </div>
            {/*./ promo-video-conten */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPromoVid;
