import React from "react";

const FifthBanner = () => {
  return (
    <>
      <div
        className="frontpage-banner-section frontpage-banner-style-five frontpage-banner-style-five bg-overlay bg-parallax bg-image ptb-110"
        style={{ backgroundImage: 'url("assets/images/bg/banner/4.jpg")' }}
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
      <div className="features-cat-list-area">
        <div className="container">
          <div className="row">
            {/*~~~~~ Start Cat List Item ~~~~~*/}
            <div className="col-lg-3 col-md-6">
              <div className="cat-list-item">
                <div className="cat-title">
                  <div className="icon">
                    <span className="icon-fast-food" />
                  </div>
                  <div className="cat-name">Beauty &amp; Health</div>
                </div>
                <ul className="list">
                  <li>
                    Clinic<span>4</span>
                  </li>
                  <li>
                    Fitness<span>6</span>
                  </li>
                  <li>
                    Spa &amp; Yoga<span>7</span>
                  </li>
                  <li>
                    Salon<span>10</span>
                  </li>
                  <li>
                    Skin Care<span>5</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*./ cat-list-item */}
            {/*~~~~~ Start Cat List Item ~~~~~*/}
            <div className="col-lg-3 col-md-6">
              <div className="cat-list-item">
                <div className="cat-title">
                  <div className="icon">
                    <span className="icon-fast-food" />
                  </div>
                  <div className="cat-name">Food &amp; Drinks</div>
                </div>
                <ul className="list">
                  <li>
                    Healthy Foods<span>4</span>
                  </li>
                  <li>
                    Take Away<span>6</span>
                  </li>
                  <li>
                    Fast Foods<span>7</span>
                  </li>
                  <li>
                    Desert<span>10</span>
                  </li>
                  <li>
                    Ice Cream<span>5</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*./ cat-list-item */}
            {/*~~~~~ Start Cat List Item ~~~~~*/}
            <div className="col-lg-3 col-md-6">
              <div className="cat-list-item">
                <div className="cat-title">
                  <div className="icon">
                    <span className="icon-cafe" />
                  </div>
                  <div className="cat-name">Entertainments</div>
                </div>
                <ul className="list">
                  <li>
                    Night Life<span>4</span>
                  </li>
                  <li>
                    Cinema<span>6</span>
                  </li>
                  <li>
                    Theatre<span>7</span>
                  </li>
                  <li>
                    Stadium<span>10</span>
                  </li>
                  <li>
                    Art &amp; Design<span>5</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*./ cat-list-item */}
            {/*~~~~~ Start Cat List Item ~~~~~*/}
            <div className="col-lg-3 col-md-6">
              <div className="cat-list-item">
                <div className="cat-title">
                  <div className="icon">
                    <span className="icon-bag-1" />
                  </div>
                  <div className="cat-name">Shopping</div>
                </div>
                <ul className="list">
                  <li>
                    Men<span>4</span>
                  </li>
                  <li>
                    Women<span>6</span>
                  </li>
                  <li>
                    Kids<span>7</span>
                  </li>
                  <li>
                    Furniture<span>10</span>
                  </li>
                  <li>
                    Jewellery<span>5</span>
                  </li>
                </ul>
              </div>
            </div>
            {/*./ cat-list-item */}
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

export default FifthBanner;
