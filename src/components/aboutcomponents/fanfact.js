import React from "react";

const FanFact = () => {
  return (
    <div
      className="fanfact-section bg-image bg-overlay bg-fixed ptb-100"
      style={{ backgroundImage: 'url("assets/images/bg/fanfact-bg.jpg")' }}
    >
      <div className="container">
        <div className="row" id="counter">
          {/*~~ Start Fanfact Item ~~*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fanfact-item text-white">
              <h3 className="counter-no">
                <span className="counter-value" data-count={60}>
                  1
                </span>
                k
              </h3>
              <p>Happy Customers</p>
            </div>
          </div>
          {/*~./ end fanfact item ~*/}
          {/*~~ Start Fanfact Item ~~*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fanfact-item text-white">
              <h3 className="counter-no">
                <span className="counter-value" data-count={100}>
                  2
                </span>
                k
              </h3>
              <p>Customer Reviews</p>
            </div>
          </div>
          {/*~./ end fanfact item ~*/}
          {/*~~ Start Fanfact Item ~~*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fanfact-item text-white">
              <h3 className="counter-no">
                <span className="counter-value" data-count={200}>
                  4
                </span>
                +
              </h3>
              <p>New Places Every Day</p>
            </div>
          </div>
          {/*~./ end fanfact item ~*/}
          {/*~~ Start Fanfact Item ~~*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="fanfact-item text-white">
              <h3 className="counter-no">
                <span className="counter-value" data-count={100}>
                  2
                </span>
                %
              </h3>
              <p>Satisfied Customers</p>
            </div>
          </div>
          {/*~./ end fanfact item ~*/}
        </div>
      </div>
    </div>
  );
};

export default FanFact;
