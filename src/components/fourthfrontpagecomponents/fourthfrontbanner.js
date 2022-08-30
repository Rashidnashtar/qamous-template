import React from "react";

const FourthFrontBanner = () => {
  return (
    <>
      <div
        className="frontpage-banner-section frontpage-banner-style-four bg-parallax bg-overlay bg-image ptb-110"
        style={{ backgroundImage: 'url("assets/images/bg/banner/3.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="frontpage-banner-content text-white">
                <h1 className="banner-title">
                  Discover, Choose &amp; Have Fun
                </h1>
                <div className="features-cat-area">
                  <div className="features-cat-carousel owl-carousel">
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-fast-food" />
                      </div>
                      <div className="cat-name">Food &amp; Drinks</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-building" />
                      </div>
                      <div className="cat-name">Hotels</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-wrench" />
                      </div>
                      <div className="cat-name">Automotive</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-dress" />
                      </div>
                      <div className="cat-name">Nightlife</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-shopping-cart" />
                      </div>
                      <div className="cat-name">Shopping</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-sunbed" />
                      </div>
                      <div className="cat-name">Travels</div>
                    </a>
                    {/*./ cat-item */}
                    <a href="listing-grid.html" className="cat-item">
                      <div className="icon">
                        <span className="icon-house" />
                      </div>
                      <div className="cat-name">Real Estates</div>
                    </a>
                    {/*./ cat-item */}
                  </div>
                </div>
                {/*./ features-cat-area */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-search-form-area">
                <form action="#" className="hero-search-form style-three">
                  <div className="inner-form">
                    <h3 className="title">Quick &amp; Easy Search</h3>
                    <div className="hero-form-input-area search-field">
                      <span>Looking for ?</span>
                      <div className="hero-form-input search">
                        <input
                          id="search"
                          type="text"
                          placeholder="Barcelo Hotels"
                        />
                      </div>
                    </div>
                    {/*~./ hero-form-input-area ~*/}
                    <div className="hero-form-input-area location-field">
                      <span>Location</span>
                      <select className="hero-form-input custom-select location">
                        <option>Barcelona, Es</option>
                        <option>New York</option>
                        <option>California</option>
                        <option>Washington</option>
                        <option>New Jersey</option>
                        <option>Los Angeles</option>
                        <option>Florida</option>
                      </select>
                      {/*~./ hero-form-input ~*/}
                    </div>
                    {/*~./ hero-form-input-area ~*/}
                    <div className="hero-form-input-area category-field">
                      <span>Category</span>
                      <select className="hero-form-input custom-select category">
                        <option>Hotels &amp; Resorts</option>
                        <option>Beauty</option>
                        <option>Nightlife</option>
                        <option>Hotels</option>
                        <option>Automotive</option>
                        <option>Travels</option>
                        <option>Real Estates</option>
                        <option>Shopping</option>
                      </select>
                      {/*~./ hero-form-input ~*/}
                    </div>
                    {/*~./ hero-form-input-area ~*/}
                    <div className="hero-form-input submitbtn">
                      <button className="btn btn-default" type="button">
                        Discover Now
                      </button>
                    </div>
                    {/*~./ hero-form-input ~*/}
                  </div>
                </form>
                {/*./ hero-search-form */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*~./ end frontpage banner Section ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Start Popular brands Section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="popular-brands-section bg-gray ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*~~ Start Brands Carousel ~~*/}
              <div className="brands-carousel owl-carousel">
                <div className="brands-link">
                  <img src="assets/images/brand/4/1.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="assets/images/brand/4/2.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="assets/images/brand/4/3.png" alt="logo" />
                </div>
                <div className="brands-link">
                  <img src="assets/images/brand/4/4.png" alt="logo" />
                </div>
              </div>
              {/*~./ end brands carousel ~*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthFrontBanner;
