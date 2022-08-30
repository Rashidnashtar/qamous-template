import React from "react";

const ThirdFrontBanner = () => {
  return (
    <div
      className="frontpage-banner-section frontpage-banner-style-three bg-overlay-gradient bg-image"
      style={{ backgroundImage: 'url("assets/images/bg/banner/3.jpg")' }}
    >
      <div className="frontpage-left">
        <div className="frontpage-banner-content text-white">
          <h1 className="banner-title">Explore your place easy with us.</h1>
        </div>
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Featured Locations Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="featured-locations-area featured-location-style-two">
          <div className="featured-location-carousel style-two owl-carousel carousel-nav-align-center">
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/1.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">France</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/2.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">United States</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/3.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Italy</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/4.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Egypt</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/1.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">France</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/2.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">United States</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/3.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Italy</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
            {/*~~~~~ Start Location Card Item ~~~~~*/}
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/4.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Egypt</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
            {/*~./ end location card item ~*/}
          </div>
        </div>
        {/*~./End featured locations area ~*/}
      </div>
      {/*~./ frontpage-banner-content ~*/}
      <div className="frontpage-right">
        <div className="hero-thumbnail bg-overlay-gradient">
          <figure className="thumb">
            <img src="assets/images/others/hero-thumb.jpg" alt="img" />
          </figure>
        </div>
        {/*~./ hero-thumbnail ~*/}
        <div className="hero-search-form-area">
          <form action="#" className="hero-search-form">
            <div className="inner-form">
              <div className="hero-form-input search">
                <input
                  id="search"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </div>
              {/*~./ hero-form-input ~*/}
              <select className="hero-form-input custom-select location">
                <option>Location </option>
                <option>New York</option>
                <option>California</option>
                <option>Washington</option>
                <option>New Jersey</option>
                <option>Los Angeles</option>
                <option>Florida</option>
              </select>
              {/*~./ hero-form-input ~*/}
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
              {/*~./ hero-form-input ~*/}
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
      {/*~./ frontpage-right ~*/}
    </div>
  );
};

export default ThirdFrontBanner;
