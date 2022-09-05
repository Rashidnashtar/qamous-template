import React from "react";

const AboutSection = () => {
  return (
    <div className="about-us-section ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-thumb-area">
              <img src="assets/images/others/aboutus.png" alt="thumb" />
              <a
                className="video-btn"
                href="https://www.youtube.com/watch?v=cn7AFhVEI5o&t=4s"
              >
                <div className="icon">
                  <i className="fa fa-play" />
                </div>
              </a>
            </div>
            {/*~./about-thumb-area ~*/}
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h2>
                Success usually comes to those who are busy to be looking for it
              </h2>
              <p>
                Why money's in that office, right? If she start giving means
                some bullet about ain't there, and we got to go placing else and
                get it. Why not can money's in that office, right? If she start
                giving means some bullshit for about it ain't there and we got
                to go placing else and get it. Why not can money's in that
                office.
              </p>
            </div>
            {/*~./about-content ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
