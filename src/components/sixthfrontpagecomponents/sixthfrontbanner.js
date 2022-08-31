import React from "react";

const SixthFrontBanner = () => {
  return (
    <>
      {" "}
      <div
        className="frontpage-banner-section frontpage-banner-style-six bg-overlay bg-parallax bg-image ptb-110"
        style={{ backgroundImage: 'url("assets/images/bg/banner/5.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className="frontpage-banner-content text-center text-white">
                <h1 className="banner-title">
                  Explore your place easy with us.
                </h1>
                <p className="banner-desc">
                  Explore top rated attractions, activities &amp; more things
                </p>
                <form action="#" className="hero-search-form style-two">
                  <div className="inner-form">
                    <div className="hero-form-input search">
                      <input
                        id="search"
                        type="text"
                        placeholder="What are you looking for?"
                      />
                    </div>
                    {/*~./ search ~*/}
                    <select className="hero-form-input custom-select location">
                      <option>Location </option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Washington</option>
                      <option>New Jersey</option>
                      <option>Los Angeles</option>
                      <option>Florida</option>
                    </select>
                    {/*~./ location ~*/}
                    <select className="hero-form-input custom-select category">
                      <option>Category</option>
                      <option>Beauty</option>
                      <option>Nightlife</option>
                      <option>Hotels</option>
                      <option>Automotive</option>
                      <option>Travels</option>
                      <option>Real Estates</option>
                      <option>Shopping</option>
                    </select>
                    {/*~./ location ~*/}
                    <div className="hero-form-input submitbtn">
                      <button className="btn btn-default" type="button">
                        explore now
                      </button>
                    </div>
                    {/*~./ location ~*/}
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
Start Features Cat List Area
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="features-cat-list-area features-cat-list-style-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="features-cat-carousel2 owl-carousel">
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
          </div>
        </div>
        {/*~~~~~ Start Social Profile~~~~~*/}
        <div className="social-profile">
          <ul className="social-share-two">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        {/*./ social-profile */}
      </div>
    </>
  );
};

export default SixthFrontBanner;
