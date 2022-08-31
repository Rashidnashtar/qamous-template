import React from "react";

const SixthPopularCategories = () => {
  return (
    <div className="popular-categories-section popular-categories-style-three ptb-100">
      <div className="container">
        <div className="row">
          {/*~~~~~ Start Section Header ~~~~~*/}
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">
                Popular <span>Categories</span>
              </h2>
              <p>What do you want to do today</p>
              <div className="divider">
                <img src="assets/images/icon/divider.png" alt="icon" />
              </div>
            </div>
          </div>
          {/*./ section-header */}
        </div>
        <div id="masonry" className="row">
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/2/2.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-cafe" />
                  </div>
                  <h3 className="title">Night Life</h3>
                  {/*./ name */}
                  <p className="listing-no">79 Listing</p>
                </div>
              </div>
              {/*./ cat-content */}
            </a>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-8 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/2/1.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-fast-food" />
                  </div>
                  <h3 className="title">Restaurants</h3>
                  {/*./ name */}
                  <p className="listing-no">30 Listing</p>
                </div>
              </div>
              {/*./ cat-content */}
            </a>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/2/3.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-building" />
                  </div>
                  <h3 className="title">Hotels</h3>
                  {/*./ name */}
                  <p className="listing-no">79 Listing</p>
                </div>
              </div>
              {/*./ cat-content */}
            </a>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/2/4.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-vynil" />
                  </div>
                  <h3 className="title">Outdoor Activities</h3>
                  {/*./ name */}
                  <p className="listing-no">79 Listing</p>
                </div>
              </div>
              {/*./ cat-content */}
            </a>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/2/5.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-accessibility" />
                  </div>
                  <h3 className="title">Gym &amp; Fitness</h3>
                  {/*./ name */}
                  <p className="listing-no">79 Listing</p>
                </div>
              </div>
              {/*./ cat-content */}
            </a>
          </div>
          {/*~./ end single cat ~*/}
        </div>
      </div>
    </div>
  );
};

export default SixthPopularCategories;
