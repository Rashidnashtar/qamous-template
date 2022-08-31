import React from "react";

const AppDownload = () => {
  return (
    <section
      className="app-download-section bg-image bg-gray ptb-60"
      style={{ backgroundImage: 'url("assets/images/bg/pattern/1.png")' }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            {/*~~ Start Section Header ~~*/}
            <div className="section-header">
              <h4 className="section-title">
                Find your place by your <span>finger tip</span>
              </h4>
              <div className="section-lead">
                <p>
                  Why money's in that office, right? If she start giving means
                  some bullet about ain't there, and we got to go placing else
                  and get it. Why not can money's in that office, right? If she
                  start giving means some bullshit for about it ain't there.
                </p>
              </div>
            </div>
            {/*~./ end section header ~*/}
            <div className="app-btn-group">
              <a className="btn btn-app" href="#">
                <div className="icon">
                  <img src="assets/images/icon/playstore.png" alt="img" />
                </div>
                <div className="btn-text">
                  Download it from <span>GOOGLE PLAY</span>
                </div>
              </a>
              <a className="btn btn-app" href="#">
                <div className="icon">
                  <img src="assets/images/icon/apple.png" alt="img" />
                </div>
                <div className="btn-text">
                  Download it from <span>app store</span>
                </div>
              </a>
            </div>
            {/*~./ end app btn group ~*/}
          </div>
          <div className="col-lg-6">
            <div className="download-thumb-area">
              <figure className="thumb">
                <img src="assets/images/others/download2.png" alt="img" />
              </figure>
              <figure className="thumb">
                <img src="assets/images/others/download1.png" alt="img" />
              </figure>
            </div>
            {/*~./ end download thumb area ~*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
