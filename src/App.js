const App = () => {
  return (
    <>
      <>
        {/**********************************************************/}
        {/********************** SITE HEADER ***********************/}
        {/**********************************************************/}
        <header className="site-header header-style-two">
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Site Navigation
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="site-navigation">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="navbar navbar-expand-lg navigation-area">
                    <div className="mainmenu-area">
                      <nav className="menu">
                        <ul id="nav">
                          <li className="dropdown-trigger">
                            <a href="#">Home</a>
                            <ul className="dropdown-content">
                              <li>
                                <a href="index-2.html">Home one</a>
                              </li>
                              <li>
                                <a href="index02.html">Home two </a>
                              </li>
                              <li>
                                <a href="index03.html">Home Three </a>
                              </li>
                              <li>
                                <a href="index04.html">Home four </a>
                              </li>
                              <li>
                                <a href="index05.html">Home five </a>
                              </li>
                              <li>
                                <a href="index06.html">Home Six </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-trigger mega-menu">
                            <a href="#">
                              Explore{" "}
                              <span className="menu-label new">new</span>
                            </a>
                            <div className="mega-menu-content carousel-nav-dots owl-carousel">
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/1.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Beauty</span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/2.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">
                                  Food &amp; Drinks
                                </span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/3.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Hotels</span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/4.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Automotive</span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/5.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Travels</span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/2.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Shopping</span>
                              </a>
                              <a className="cat-item" href="listing-grid.html">
                                <div className="cat-thumb">
                                  <img
                                    src="/assets/images/cat/menu/3.jpg"
                                    alt="cat"
                                  />
                                </div>
                                <span className="cat-name">Nightlife</span>
                              </a>
                            </div>
                            {/*/.mega-menu-content*/}
                          </li>
                          <li className="dropdown-trigger">
                            <a href="#">Listing</a>
                            <ul className="dropdown-content">
                              <li>
                                <a href="listing-grid.html">Listing Grid</a>
                              </li>
                              <li>
                                <a href="listing-list.html">Listing List</a>
                              </li>
                              <li>
                                <a href="listing-map-one.html">
                                  Listing map one
                                </a>
                              </li>
                              <li>
                                <a href="listing-map-two.html">
                                  Listing map two
                                </a>
                              </li>
                              <li>
                                <a href="listing-map-three.html">
                                  Listing map three
                                </a>
                              </li>
                              <li>
                                <a href="listing-details.html">
                                  Listing details one
                                </a>
                              </li>
                              <li>
                                <a href="listing-details-two.html">
                                  Listing details two
                                </a>
                              </li>
                              <li>
                                <a href="listing-details-three.html">
                                  Listing details three
                                </a>
                              </li>
                              <li>
                                <a href="listing-details-four.html">
                                  Listing details four
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-trigger">
                            <a href="#">
                              Pages <span className="menu-label">Hot</span>
                            </a>
                            <ul className="dropdown-content">
                              <li>
                                <a href="about.html">About us</a>
                              </li>
                              <li>
                                <a href="pricing.html">pricing</a>
                              </li>
                              <li>
                                <a href="dashboard.html">dashboard</a>
                              </li>
                              <li>
                                <a href="coming-soon.html">Coming Soon</a>
                              </li>
                              <li>
                                <a href="howitwork.html">How it work</a>
                              </li>
                              <li>
                                <a href="blog.html">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog-list.html">Blog List</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Blog left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  Blog right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="post-details.html">Post details</a>
                              </li>
                              <li>
                                <a href="single-shop.html">single product</a>
                              </li>
                              <li>
                                <a href="404.html">404</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                      {/*/.menu*/}
                    </div>
                    {/*~./ mainmenu-wrap ~*/}
                    <div className="site-logo-block">
                      <a className="navbar-brand site-logo" href="index-2.html">
                        <img
                          src="/assets/images/logo/logo-white.png"
                          alt="logo"
                        />
                        <img src="/assets/images/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                    {/*~./ site-logo-block ~*/}
                    <div className="header-navigation-right">
                      <div className="header-card-area">
                        <a href="#">
                          <span className="icon-paper-bag" />
                          <sup>2</sup>
                        </a>
                        <div className="cart-list">
                          <div className="cart-item">
                            <div className="product-thumb">
                              <img
                                alt="Single product"
                                src="/assets/images/product/small/1.jpg"
                              />
                            </div>
                            {/*~./ product-thumb ~*/}
                            <div className="product-info">
                              <h4 className="title">Blue Berry Jacket</h4>
                              <div className="price">
                                $15.00 <span>X2</span>
                              </div>
                              <div className="icon-closed">
                                <a href="#">
                                  <i className="fa fa-close" />
                                </a>
                              </div>
                            </div>
                            {/*~./ product-info ~*/}
                          </div>
                          {/*~./ cart-item ~*/}
                          <div className="cart-item">
                            <div className="product-thumb">
                              <img
                                alt="Single product"
                                src="/assets/images/product/small/2.jpg"
                              />
                            </div>
                            {/*~./ product-thumb ~*/}
                            <div className="product-info">
                              <h4 className="title">Back Pack Youth Less</h4>
                              <div className="price">
                                $15.00 <span>X3</span>
                              </div>
                              <div className="icon-closed">
                                <a href="#">
                                  <i className="fa fa-close" />
                                </a>
                              </div>
                            </div>
                            {/*~./ product-info ~*/}
                          </div>
                          {/*~./ cart-item ~*/}
                          <div className="order-total">
                            <h4 className="order">
                              Sub Total<span className="amount">$166</span>
                            </h4>
                          </div>
                          <div className="cart-btn-group">
                            <a
                              href="cart.html"
                              className="btn btn-default btn-default2"
                            >
                              view card
                            </a>
                            <a href="checkout.html" className="btn btn-default">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*~./ site-logo-block ~*/}
                      <div className="search-wrap">
                        <div
                          className="search-btn"
                          data-toggle="modal"
                          data-target="#header_search_model"
                        >
                          <span className="icon icon-search32" />
                          <span className="text">Search</span>
                        </div>
                      </div>
                      {/*~./ search-wrap ~*/}
                      <div className="user-registration-area dropdown">
                        <a
                          className="user-reg-btn"
                          href="#"
                          data-toggle="modal"
                          data-target="#reg_form_model"
                        >
                          <span className="icon icon-user-1" />
                          <span className="text">Register</span>
                        </a>
                      </div>
                      <div className="add-listing-area">
                        <a className="btn btn-default" href="add-listing.html">
                          + add listing
                        </a>
                      </div>
                    </div>
                    {/*~./ header-navigation-right ~*/}
                  </div>
                  {/*~./ navigation-area ~*/}
                </div>
              </div>
            </div>
          </div>
          {/*~./ site-navigation ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Mobile Menu
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="mobile-menu">
            <a className="mobile-logo" href="index-2.html">
              <img src="/assets/images/logo/mobile-logo.png" alt="logo" />
            </a>
          </div>
          {/*~~./ end mobile menu ~~*/}
        </header>
        {/*~~~ Sticky Header ~~~*/}
        <div id="sticky-header" />
        {/*~./End site header ~*/}
        {/**********************************************************/}
        {/********************** SITE CONTENT **********************/}
        {/**********************************************************/}
        <div className="site-content">
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Frontpage Banner Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div
            className="frontpage-banner-section frontpage-banner-style-one bg-overlay-gradient bg-parallax bg-image ptb-100"
            style={{ backgroundImage: 'url("/assets/images/bg/banner/1.jpg")' }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-10">
                  <div className="frontpage-banner-content text-center text-white">
                    <h1 className="banner-title">
                      Explore your place easy with us.
                    </h1>
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
                            <span className="icon-dress" />
                          </div>
                          <div className="cat-name">Nightlife</div>{" "}
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
          {/*~./ end frontpage banner Section ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Featured Locations Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="featured-locations-area featured-location-style-one ptb-100">
            <div className="container">
              <div className="row">
                {/*~~~~~ Start Section Header ~~~~~*/}
                <div className="col-12">
                  <div className="section-header text-center">
                    <h2 className="section-title">
                      Top Featured <span>Locations</span>
                    </h2>
                    <p>What do you want to do today</p>
                    <div className="divider">
                      <img src="/assets/images/icon/divider.png" alt="icon" />
                    </div>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="featured-locations-content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-12">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/1.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="featured-type featured">
                                TOP <br />
                                FEATURED
                              </div>
                              <div className="location-content">
                                <h3 className="name">Boston</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-lg-6 col-md-6">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/2.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="location-content">
                                <h3 className="name">Philadelphia</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-lg-6 col-md-6">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/3.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="location-content">
                                <h3 className="name">Washington</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row">
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-lg-6 col-md-6">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/4.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="location-content">
                                <h3 className="name">Chicago</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-lg-6 col-md-6">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/5.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="location-content">
                                <h3 className="name">Los Angeles</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                          {/*~~~~~ Start Location Card Item ~~~~~*/}
                          <div className="col-12">
                            <a href="#" className="location-card-item">
                              <figure className="location-thumb">
                                <img
                                  src="/assets/images/featured/1/6.jpg"
                                  alt="Thmubnail"
                                />
                              </figure>
                              {/*./ featured-media */}
                              <div className="featured-type trending">
                                <span className="fa fa-bolt" />
                              </div>
                              <div className="location-content">
                                <h3 className="name">New York</h3>
                                {/*./ name */}
                              </div>
                              {/*./ location-content */}
                            </a>
                          </div>
                          {/*~./ end location card item ~*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*./ featured-locations-content */}
                </div>
              </div>
            </div>
          </div>
          {/*~./End featured locations area ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Promo Video Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="promo-video-section promo-video-style-one bg-gradient pt-20">
            <div
              className="bg-image bg-map-image"
              style={{ backgroundImage: 'url("/assets/images/bg/map-bg.png")' }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="promo-video-content text-white ptb-100">
                    <a
                      className="video-btn"
                      href="https://www.youtube.com/watch?v=cn7AFhVEI5o&t=4s"
                    >
                      <div className="icon">
                        <i className="fa fa-play" />
                      </div>
                    </a>
                    <h2>Promote your business with us &amp; Get off 45%</h2>
                    <a className="btn btn-default" href="#">
                      submit today
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="promo-video-thumb text-right">
                    <img src="/assets/images/promo-video/1.png" alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*~./End promo video section ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Popular Todos Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <section className="popular-todos-section popular-todos-style-one ptb-100">
            <div className="container">
              <div className="row">
                {/*~~~~~ Start Section Header ~~~~~*/}
                <div className="col-12">
                  <div className="section-header text-center">
                    <h2 className="section-title">
                      Best Thing to Do in The <span>City</span>
                    </h2>
                    <p>What are you interested</p>
                    <div className="divider">
                      <img src="/assets/images/icon/divider.png" alt="icon" />
                    </div>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              <div className="row">
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/1.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-type rated">top rated</div>
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />4 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">
                          Marriott JW Classic Dinner
                        </a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-restaurant">
                        <span className="icon-fast-food" />
                        Restaurants
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Open Now
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item status-closed">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/2.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-type trending">
                          <span className="fa fa-bolt" />
                        </div>
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />6 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">
                          Barcelo Aqua Blue Hotel{" "}
                        </a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-hotel">
                        <span className="icon-building" />
                        Hotels
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Closed
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/3.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-type offer">hot offer</div>
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />2 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">Balance Gym Summer</a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-fitness">
                        <span className="icon-accessibility" />
                        Fitness
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Open Now
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item status-closed">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/4.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-type trending">
                          <span className="fa fa-bolt" />
                        </div>
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />7 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">New Year Eve Party</a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-nightlife">
                        <span className="icon-dress" />
                        Nightlife
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Closed
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/5.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-type sale">sale</div>
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />5 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">Used Vollax Car</a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-automotive">
                        <span className="icon-wrench" />
                        Automotive
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Open Now
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
                {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                <div className="col-lg-4">
                  <div className="popular-todo-item status-closed">
                    <div className="todo-thumbnail-area">
                      <figure className="item-thumb">
                        <img
                          src="/assets/images/todo/1/6.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ item-thumb */}
                      <div className="todo-overlay-info">
                        <div className="todo-meta-bottom">
                          <a href="#" className="save">
                            <i className="fa fa-heart" />
                            save
                          </a>
                          <a href="#" className="photo">
                            <i className="fa fa-image" />3 photos
                          </a>
                        </div>
                      </div>
                      {/*./ section-header */}
                    </div>
                    {/*./ todo-overlay-info */}
                    <div className="todo-content">
                      <h3 className="title">
                        <a href="listing-details.html">Kris Beauty Carnaval</a>
                      </h3>
                      <div className="todo-rating">
                        <div className="rating-value">
                          <span>4.8</span>16 Ratings
                        </div>
                        <div className="rating-icon">
                          <ul>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li className="yellow">$</li>
                            <li>$</li>
                          </ul>
                        </div>
                      </div>
                      {/*./ todo-rating */}
                      <div className="todo-meta">
                        <div className="todo-location">
                          <span className="icon-location" />
                          Barcelona, ES
                        </div>
                        <div className="todo-number">
                          <span className="icon-phone" />
                          +34 2 2458752
                        </div>
                      </div>
                      {/*./ todo-meta */}
                      <div className="todo-summary">
                        <p>
                          The path of the righteous man is beset on all sides by
                          the iniquities.
                        </p>
                      </div>
                    </div>
                    {/*./ todo-content */}
                    <div className="todo-footer">
                      <a href="#" className="todo-cat todo-cat-beauty">
                        <span className="icon-grooming" />
                        Beauty
                      </a>
                      <a href="listing-details.html" className="todo-status">
                        Closed
                      </a>
                    </div>
                    {/*./ todo-footer */}
                  </div>
                </div>
                {/*~./ end popular todo item ~*/}
              </div>
            </div>
          </section>
          {/*~./End popular todos section ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Process Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <section
            id="process"
            className="our-work-process-section bg-image bg-gray ptb-100"
            style={{
              backgroundImage: 'url("/assets/images/bg/buliding-bg.png")',
            }}
          >
            <div className="container">
              <div className="row">
                {/*~~~~~ Start Section Header ~~~~~*/}
                <div className="col-12">
                  <div className="section-header text-center">
                    <h2 className="section-title">
                      How Does It <span>Work</span>
                    </h2>
                    <p>Easy steps in few moments</p>
                    <div className="divider">
                      <img src="/assets/images/icon/divider.png" alt="icon" />
                    </div>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="process-main-content">
                    <div
                      className="bg-line"
                      style={{
                        backgroundImage:
                          'url("/assets/images/others/linearrow.png")',
                      }}
                    />
                    {/*~./ end bg line ~*/}
                    <div className="row process-list">
                      {/*~./ Start Single Process ~*/}
                      <div className="col-lg-3 col-md-6">
                        <div className="single-process">
                          <h3 className="process-no">1</h3>
                          <div className="single-process-inner">
                            <h2>Choose Location</h2>
                            <div className="icon">
                              <img
                                src="/assets/images/icon/process/1.png"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*~./ end single process ~*/}
                      {/*~./ Start Single Process ~*/}
                      <div className="col-lg-3 col-md-6">
                        <div className="single-process">
                          <h3 className="process-no">2</h3>
                          <div className="single-process-inner">
                            <h2>Pick Category</h2>
                            <div className="icon">
                              <img
                                src="/assets/images/icon/process/2.png"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*~./ end single process ~*/}
                      {/*~./ Start Single Process ~*/}
                      <div className="col-lg-3 col-md-6">
                        <div className="single-process">
                          <h3 className="process-no">3</h3>
                          <div className="single-process-inner">
                            <h2>Explore Place</h2>
                            <div className="icon">
                              <img
                                src="/assets/images/icon/process/3.png"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*~./ end single process ~*/}
                      {/*~./ Start Single Process ~*/}
                      <div className="col-lg-3 col-md-6">
                        <div className="single-process">
                          <h3 className="process-no">4</h3>
                          <div className="single-process-inner">
                            <h2>Enjoy Your Day</h2>
                            <div className="icon">
                              <img
                                src="/assets/images/icon/process/4.png"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*~./ end single process ~*/}
                    </div>
                  </div>
                  {/*~./ end process main content ~*/}
                </div>
              </div>
            </div>
          </section>
          {/*~~./ end process section ~~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Testimonial Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div
            id="testimonials"
            className="testimonial-section bg-fixed bg-overlay-gradient bg-image pt-60 pb-100"
            style={{
              backgroundImage: 'url("/assets/images/bg/testimonial-bg.jpg")',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    id="testimonial-carousel"
                    className="owl-carousel carousel-nav-dots"
                  >
                    {/*~~~~~ Start Single Testimonial ~~~~~*/}
                    <div className="single-testimonial text-center">
                      <div className="quote-icon">
                        <img src="/assets/images/icon/quote.png" alt="thumb" />
                      </div>
                      <div className="client-thumb">
                        <img
                          src="/assets/images/testimonail/1.jpg"
                          alt="thumb"
                        />
                      </div>
                      <div className="info text-white">
                        <p>
                          Imagination… What we can easily see is only a small
                          percentage of what is possible.
                        </p>
                        <h5 className="name">Fatma Hassan</h5>
                      </div>
                    </div>
                    {/*~./ end single testimonail ~*/}
                    {/*~~~~~ Start Single Testimonial ~~~~~*/}
                    <div className="single-testimonial text-center">
                      <div className="quote-icon">
                        <img src="/assets/images/icon/quote.png" alt="thumb" />
                      </div>
                      <div className="client-thumb">
                        <img
                          src="/assets/images/testimonail/1.jpg"
                          alt="thumb"
                        />
                      </div>
                      <div className="info text-white">
                        <p>
                          Imagination… What we can easily see is only a small
                          percentage of what is possible.
                        </p>
                        <h5 className="name">Fatma Hassan</h5>
                      </div>
                    </div>
                    {/*~./ end single testimonail ~*/}
                    {/*~~~~~ Start Single Testimonial ~~~~~*/}
                    <div className="single-testimonial text-center">
                      <div className="quote-icon">
                        <img src="/assets/images/icon/quote.png" alt="thumb" />
                      </div>
                      <div className="client-thumb">
                        <img
                          src="/assets/images/testimonail/1.jpg"
                          alt="thumb"
                        />
                      </div>
                      <div className="info text-white">
                        <p>
                          Imagination… What we can easily see is only a small
                          percentage of what is possible.
                        </p>
                        <h5 className="name">Fatma Hassan</h5>
                      </div>
                    </div>
                    {/*~./ end single testimonail ~*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*~./ end testimonial section ~*/}
        </div>
        {/*~./ end site content ~*/}
        {/**********************************************************/}
        {/*********************** SITE FOOTER **********************/}
        {/**********************************************************/}
        <footer className="site-footer footer-default-style">
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Widget Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="footer-widget-area ptb-100">
            <div className="container">
              <div className="row">
                {/*~~~~~ Start Widget About Footer ~~~~~*/}
                <div className="col-lg-3">
                  <aside className="widget bt-about-footer-widget">
                    <div className="widget-content">
                      <div className="about-logo">
                        <a href="index-2.html">
                          <img
                            src="/assets/images/logo/footer-logo.png"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <p>
                        Sitting on a working-class comme dows of an easy
                        above-grounding rail line group called Make the art Road
                        New York's busy street
                      </p>
                      <ul className="social-share">
                        <li>
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="google-plus" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="youtube" href="#">
                            <i className="fa fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a className="instagram" href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/*~./ end about footer widget ~*/}
                {/*~~~~~ Start Widget List ~~~~~*/}
                <div className="col-lg-4">
                  <aside className="widget widget-list style-two">
                    <h2 className="widget-title">Featured Cities</h2>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="#">Alaska</a>
                        </li>
                        <li>
                          <a href="#">Mississippi</a>
                        </li>
                        <li>
                          <a href="#">California</a>
                        </li>
                        <li>
                          <a href="#">New Jersey</a>
                        </li>
                        <li>
                          <a href="#">Colorado</a>
                        </li>
                        <li>
                          <a href="#">New York</a>
                        </li>
                        <li>
                          <a href="#">Florida</a>
                        </li>
                        <li>
                          <a href="#">Oklahoma</a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/*~./ end widget list ~*/}
                {/*~~~~~ Start Widget List ~~~~~*/}
                <div className="col-lg-2">
                  <aside className="widget widget-list">
                    <h2 className="widget-title">Help</h2>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="#">How It Works</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Customer Service</a>
                        </li>
                        <li>
                          <a href="#">Support Center</a>
                        </li>
                        <li>
                          <a href="#">Pricing Packages</a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
                {/*~./ end widget list ~*/}
                {/*~~~~~ Start Subscribe Widget~~~~~*/}
                <div className="col-lg-3">
                  <aside className="widget tb-subscribe-widget">
                    <h4 className="widget-title">Subscribe With Us</h4>
                    <div className="widget-content">
                      <div className="subscribe-box">
                        <p>
                          Subscribe to our mailing list to get the new updates!
                        </p>
                        <div className="subscribe-form">
                          {/* Subscribe form */}
                          <form className="dv-form" id="mc-form">
                            <div className="form-group">
                              <input
                                id="mc-email"
                                name="EMAIL"
                                placeholder="Enter Your Email Address"
                                type="email"
                              />
                              <button
                                className="btn btn-default"
                                name="Subscribe"
                                id="subscribe-btn"
                                type="submit"
                              >
                                Subscribe Now
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                {/*~./ end subscribe widget ~*/}
              </div>
            </div>
          </div>
          {/*~./ end footer widgets area ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Popular brands Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="popular-brands-section bg-black ptb-50">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/*~~ Start Brands Carousel ~~*/}
                  <div className="brands-carousel owl-carousel">
                    <div className="brands-link">
                      <img src="/assets/images/brand/3/1.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="/assets/images/brand/3/2.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="/assets/images/brand/3/3.png" alt="logo" />
                    </div>
                    <div className="brands-link">
                      <img src="/assets/images/brand/3/4.png" alt="logo" />
                    </div>
                  </div>
                  {/*~./ end brands carousel ~*/}
                </div>
              </div>
            </div>
          </div>
          {/*~./ end popular brands section ~*/}
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Bottom Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright-text">
                    <p>© Copyright 2019 Qamous. All Rights Reserved</p>
                  </div>
                </div>
                {/*~./ end copyright ~*/}
                <div className="col-lg-6 col-md-6">
                  <div className="footer-bottom-right">
                    <p>
                      Made <i className="fa fa-heart" /> With{" "}
                      <a href="#">RadiuzZ</a>
                    </p>
                  </div>
                  {/*~./ end footer menu ~*/}
                </div>
              </div>
            </div>
          </div>
          {/*~./ end footer bottom area ~*/}
        </footer>
        {/*~./ end site footer ~*/}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start Header Search Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div
          id="header_search_model"
          className="header-search-model modal fade"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog header-search-area" role="document">
            <div className="header-search-area-inner">
              <div className="modal-header">
                <button
                  type="button"
                  className="close btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="/assets/images/icon/close.png" alt="close" />
                </button>
              </div>
              <div className="search-form modal-content">
                <form action="#">
                  <input
                    type="search"
                    placeholder="Baracelo Hotels & Spa Resort"
                  />
                  <button type="submit">
                    <span className="icon-search32" />
                  </button>
                </form>
                <div className="search-by-cat">
                  <a href="#" className="single-cat restaurant">
                    <div className="icon">
                      <span className="icon-fast-food" />
                    </div>
                    <div className="text">Restaurants</div>{" "}
                  </a>
                  {/*~./ single-cat ~*/}
                  <a href="#" className="single-cat beauty">
                    <div className="icon">
                      <span className="icon-grooming" />
                    </div>
                    <div className="text">Beauty</div>{" "}
                  </a>
                  {/*~./ single-cat ~*/}
                  <a href="#" className="single-cat automotive">
                    <div className="icon">
                      <span className="icon-wrench" />
                    </div>
                    <div className="text">Automotive</div>{" "}
                  </a>
                  {/*~./ single-cat ~*/}
                  <a href="#" className="single-cat hotel">
                    <div className="icon">
                      <span className="icon-building" />
                    </div>
                    <div className="text">Hotels</div>{" "}
                  </a>
                  {/*~./ single-cat ~*/}
                </div>
              </div>
              {/*~./ search-form ~*/}
            </div>
          </div>
        </div>
        {/*~./ end header search model ~*/}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start User Registation Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div
          id="reg_form_model"
          className="user-reg-form-area modal fade"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog register-modal-area" role="document">
            <div className="register-modal-area-outer-inner">
              <div className="modal-header">
                <button
                  type="button"
                  className="close btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="/assets/images/icon/close.png" alt="close" />
                </button>
              </div>
              <div className="modal-content user-register-area">
                {/*~~~ Start User Signin Area ~~~*/}
                <div className="user-signin-area">
                  <div className="user-left-thumb">
                    <img
                      src="/assets/images/others/login-thumb.jpg"
                      alt="thumb"
                    />
                  </div>
                  <div className="form-content">
                    <h3>Login to Account</h3>
                    <form className="default-form signin-form">
                      <div className="form-group">
                        <input
                          id="email"
                          name="email"
                          className="form-controllar"
                          type="email"
                          placeholder="Email Adderss"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="form-group">
                        <input
                          id="pass"
                          name="password"
                          className="form-controllar"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="remember-and-password">
                        <div className="login-form-remember">
                          <label>
                            <input
                              id="remembermesignin"
                              defaultValue=""
                              type="checkbox"
                            />
                            <span>Remember Me</span>
                          </label>
                        </div>
                        <div className="forget-pass">
                          <a className="btn-password" href="#">
                            Forget Password
                          </a>
                        </div>
                      </div>
                      {/*/.remember-and-password*/}
                      <div className="form-btn-group">
                        <button type="submit" className="btn btn-default">
                          sign in
                        </button>
                        <div className="reg-others-midea">
                          <div className="text">Or Login With</div>
                          <div className="midea-icons">
                            <ul className="social-share">
                              <li>
                                <a className="facebook" href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a className="twitter" href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a className="google-plus" href="#">
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li>
                                <a className="linkedin" href="#">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="login-form-register-now">
                      Dont have an account?
                      <a className="btn-register-now" href="#">
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
                {/*~./ end user signin area ~*/}
                {/*~~~ Start User Signup Area ~~~*/}
                <div className="user-signup-area">
                  <div className="user-left-thumb">
                    <img
                      src="/assets/images/others/reg-thumb.jpg"
                      alt="thumb"
                    />
                  </div>
                  <div className="form-content">
                    <h3>Create an Account</h3>
                    <form
                      id="signup-form"
                      className="default-form signup-form"
                      method="post"
                    >
                      <div className="form-group">
                        <input
                          id="name"
                          name="name"
                          className="form-controllar"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="form-group">
                        <input
                          id="email-up"
                          name="email"
                          className="form-controllar"
                          type="email"
                          placeholder="Email Adderss"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="form-group">
                        <input
                          id="pass-up"
                          name="password"
                          className="form-controllar"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="form-group">
                        <input
                          id="pass-up-confirm"
                          name="password"
                          className="form-controllar"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                      {/*/.form-group*/}
                      <div className="login-form-remember">
                        <label>
                          <input
                            id="remembermesignup"
                            defaultValue=""
                            type="checkbox"
                          />
                          <span>I Agree to the</span>
                          <a href="#">Privacy Polciy</a>
                        </label>
                      </div>
                      <div className="form-btn-group">
                        <button type="submit" className="btn btn-default">
                          register
                        </button>
                        <div className="reg-others-midea">
                          <div className="text">Or Connect With</div>
                          <div className="midea-icons">
                            <ul className="social-share">
                              <li>
                                <a className="facebook" href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                <a className="twitter" href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a className="google-plus" href="#">
                                  <i className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li>
                                <a className="linkedin" href="#">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*~./ end user signup area ~*/}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default App;
