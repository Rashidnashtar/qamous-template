const FrontBanner = () => {
  return (
    <div
      className="frontpage-banner-section frontpage-banner-style-one bg-overlay-gradient bg-parallax bg-image ptb-100"
      style={{ backgroundImage: 'url("/assets/images/bg/banner/1.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="frontpage-banner-content text-center text-white">
              <h1 className="banner-title">Explore your place easy with us.</h1>
              <div className="features-cat-area">
                <div className="features-cat-carousel owl-carousel">
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-fast-food" />
                    </div>
                    <div className="cat-name">Food &amp; Drinks</div>{" "}
                  </a>
                  {/*./ cat-item */}
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-building" />
                    </div>
                    <div className="cat-name">Hotels</div>{" "}
                  </a>
                  {/*./ cat-item */}
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-wrench" />
                    </div>
                    <div className="cat-name">Automotive</div>{" "}
                  </a>

                  {/*./ cat-item */}
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-shopping-cart" />
                    </div>
                    <div className="cat-name">Shopping</div>{" "}
                  </a>
                  {/*./ cat-item */}
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-sunbed" />
                    </div>
                    <div className="cat-name">Travels</div>{" "}
                  </a>
                  {/*./ cat-item */}
                  <a href="listing-grid.html" className="cat-item">
                    <div className="icon">
                      <span className="icon-house" />
                    </div>
                    <div className="cat-name">Real Estates</div>{" "}
                  </a>
                  {/*./ cat-item */}
                </div>
              </div>
              {/*./ features-cat-area */}
              <form action="#" className="hero-search-form">
                <div className="inner-form">
                  <div className="hero-form-input search">
                    <input
                      id="search"
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  {/*./ search */}
                  <select className="hero-form-input custom-select location">
                    <option>Location</option>
                    <option>New York</option>
                    <option>California</option>
                    <option>Washington</option>
                    <option>New Jersey</option>
                    <option>Los Angeles</option>
                    <option>Florida</option>
                  </select>
                  {/*./ custom-select */}
                  <div className="hero-form-input submitbtn">
                    <button className="btn btn-default" type="button">
                      explore now
                    </button>
                  </div>
                  {/*./ submitbtn */}
                </div>
              </form>
              {/*./ hero-search-form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontBanner;
