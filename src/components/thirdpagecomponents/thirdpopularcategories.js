import React from "react";

import SectionHeader from "./../assetscomponents/sectionHeader";
const ThirdPopularCategories = () => {
  return (
    <div className="popular-categories-section popular-categories-style-two ptb-100">
      <div className="container">
        <SectionHeader
          header="What Are You"
          boldHeader="Interested In"
          paragrah="Poular Categories"
        />

        <div id="masonry" className="row">
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/1/1.jpg" alt="Thmubnail" />
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
                <img src="assets/images/cat/1/2.jpg" alt="Thmubnail" />
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
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/1/3.jpg" alt="Thmubnail" />
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
                <img src="assets/images/cat/1/6.jpg" alt="Thmubnail" />
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
                <img src="assets/images/cat/1/4.jpg" alt="Thmubnail" />
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
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-4 grid-item">
            <a href="#" className="single-cat text-white">
              <figure className="cat-thumb">
                <img src="assets/images/cat/1/5.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-wrench" />
                  </div>
                  <h3 className="title">Automotive</h3>
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
                <img src="assets/images/cat/1/7.jpg" alt="Thmubnail" />
              </figure>
              {/*./ cat-thumb */}
              <div className="cat-content">
                <div className="cat-content-inner">
                  <div className="icon">
                    <span className="icon-shopping-cart" />
                  </div>
                  <h3 className="title">Shopping</h3>
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

export default ThirdPopularCategories;
