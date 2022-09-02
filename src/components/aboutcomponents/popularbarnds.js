import React from "react";

const PopularBarnds = () => {
  return (
    <div className="popular-brands-section ptb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/*~~ Start Brands Carousel ~~*/}
            <div className="brands-carousel owl-carousel">
              <div className="brands-link">
                <img src="assets/images/brand/2/1.png" alt="logo" />
              </div>
              <div className="brands-link">
                <img src="assets/images/brand/2/2.png" alt="logo" />
              </div>
              <div className="brands-link">
                <img src="assets/images/brand/2/3.png" alt="logo" />
              </div>
              <div className="brands-link">
                <img src="assets/images/brand/2/4.png" alt="logo" />
              </div>
            </div>
            {/*~./ end brands carousel ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBarnds;
