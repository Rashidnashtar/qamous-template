import React from "react";

const SecondFrontBannar = () => {
  return (
    <div
      className="frontpage-banner-section frontpage-banner-style-two bg-overlay bg-parallax bg-image pt-100"
      style={{ backgroundImage: 'url("assets/images/bg/banner/2.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-10">
            <div className="frontpage-banner-content text-center text-white">
              <h1 className="banner-title">Explore your place easy with us.</h1>
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
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Start Featured Locations Area
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="featured-locations-area featured-location-style-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="featured-location-carousel style-one owl-carousel carousel-nav-dots">
                {/*~~~~~ Start Location Card Item ~~~~~*/}
                <a href="#" className="location-card-item">
                  <figure className="location-thumb">
                    <img src="assets/images/featured/2/1.jpg" alt="Thmubnail" />
                  </figure>
                  {/*./ featured-media */}
                  <div className="location-content">
                    <h3 className="name">France</h3>
                    {/*./ name */}
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
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
                    <p className="listing-no">79 Listing</p>
                  </div>
                  {/*./ location-content */}
                </a>
                {/*~./ end location card item ~*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*~./End featured locations area ~*/}
      <div
        className="angle-shape-bottom bg-image"
        style={{
          backgroundImage: 'url("assets/images/bg/pattern/waves.png")',
        }}
      />
    </div>
  );
  {
    /*~./ end frontpage banner Section ~*/
  }
};

export default SecondFrontBannar;
