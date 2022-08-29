import React from "react";
import SectionHeader from "./../assetscomponents/sectionHeader";
const PopularCategories = () => {
  return (
    <section className="popular-categories-section popular-categories-style-one ptb-100">
      <div className="container">
        <SectionHeader />
        <div className="row categories-list">
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-grooming" />
              </div>
              <h3 className="title">
                <a href="#">Beauty</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-fast-food" />
              </div>
              <h3 className="title">
                <a href="#">Food &amp; Drinks</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-dress" />
              </div>
              <h3 className="title">
                <a href="#">Nightlife</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-building" />
              </div>
              <h3 className="title">
                <a href="#">Hotels</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-wrench" />
              </div>
              <h3 className="title">
                <a href="#">Automotive</a>
              </h3>
            </div>
          </div>
          {/*~./ end single foot cat ~*/}
          {/*~~~~ Start Single Foot Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-sunbed" />
              </div>
              <h3 className="title">
                <a href="#">Travels</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-house" />
              </div>
              <h3 className="title">
                <a href="#">Real Estates</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
          {/*~~~~ Start Single Cat ~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="single-cat">
              <div className="icon">
                <span className="icon-shopping-cart" />
              </div>
              <h3 className="title">
                <a href="#">Shopping</a>
              </h3>
            </div>
          </div>
          {/*~./ end single cat ~*/}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
