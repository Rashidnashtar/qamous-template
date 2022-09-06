import { Link } from "react-router-dom";
import HeaderCartList from "./header-cart-list";
import { selectUserState } from "../../redux/user/user-selectors";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const SiteNavigation = ({ isDark }) => {
  const userState = useSelector(selectUserState);
  const loaction = useLocation();
  const isGuest = userState === "guest";
  console.log(loaction);
  return (
    <>
      {/**********************************************************/}
      {/********************** SITE HEADER ***********************/}
      {/**********************************************************/}
      <header
        className={` site-header header-style-two ${isDark ? "text-dark" : ""}`}
      >
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Site Navigation
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="site-navigation ">
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
                              <Link to="/sixth">Home Six </Link>
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
                              <Link to="listing-grid">Listing Grid</Link>
                            </li>
                            <li>
                              <a href="listing-list.html">Listing List</a>
                            </li>
                            <li>
                              <Link to="/listing-map">Listing map one</Link>
                            </li>
                            <li>
                              <Link to="/listing-map">Listing map two</Link>
                            </li>
                            <li>
                              <Link to="/listing-map">Listing map three</Link>
                            </li>
                            <li>
                              <Link to="/listing-details">
                                Listing details one
                              </Link>
                            </li>
                            <li>
                              <Link to="/listing-details-two">
                                Listing details two
                              </Link>
                            </li>
                            <li>
                              <Link to="/listing-details-three">
                                Listing details three
                              </Link>
                            </li>
                            <li>
                              <Link to="/listing-details-four">
                                Listing details four
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-trigger">
                          <a href="#">
                            Pages <span className="menu-label">Hot</span>
                          </a>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/about">About us</Link>
                            </li>
                            <li>
                              <Link to="/pricing">pricing</Link>
                            </li>
                            <li>
                              <Link to="/dashboard">dashboard</Link>
                            </li>
                            <li>
                              <Link to="/coming-soon">Coming Soon</Link>
                            </li>
                            <li>
                              <Link to="/process">How it work</Link>
                            </li>
                            <li>
                              <Link to="/blog">Blog Grid</Link>
                            </li>
                            <li>
                              <Link to="/blog-list">Blog List</Link>
                            </li>
                            <li>
                              <Link to="/blog-left-sidebar">
                                Blog left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog-right-sidebar">
                                Blog right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/post-details">Post details</Link>
                            </li>
                            <li>
                              <Link to="/single-shop">single product</Link>
                            </li>
                            <li>
                              <Link to="/404">404</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
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
                    {userState === "guest" ? (
                      <div className="add-listing-area">
                        <Link
                          className={`btn btn-default`}
                          to={`${
                            isGuest ? `${loaction.pathname}` : "/add-listing"
                          }`}
                        >
                          + add listing
                        </Link>
                      </div>
                    ) : null}
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
