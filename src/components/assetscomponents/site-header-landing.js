import { Link } from "react-router-dom";
import HeaderCartList from "./header-cart-list";
const SiteNavigation = () => {
  return (
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
                              <Link to="/">Home one</Link>
                            </li>
                            <li>
                              <Link to="/second">Home two </Link>
                            </li>
                            <li>
                              <Link to="/third">Home Three </Link>
                            </li>
                            <li>
                              <Link to="/fourth">Home four </Link>
                            </li>
                            <li>
                              <Link to="/fifth">Home five </Link>
                            </li>
                            <li>
                              <a href="index06.html">Home Six </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-trigger mega-menu">
                          <a href="#">
                            Explore <span className="menu-label new">new</span>
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
                              <a href="listing-map-one.html">Listing map one</a>
                            </li>
                            <li>
                              <a href="listing-map-two.html">Listing map two</a>
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
                              <Link to="/dashboard">dashboard</Link>
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
                    <HeaderCartList />
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
    </>
  );
};
export default SiteNavigation;
