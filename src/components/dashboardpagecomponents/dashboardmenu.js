import React from "react";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div className="dashborad-menu-area">
      <div className="btn-close">
        <span className="icon-cross" />
      </div>
      <div className="site-logo-block">
        <a className="navbar-brand site-logo" href="index-2.html">
          <img src="assets/images/logo/logo2.png" alt="logo" />
        </a>
      </div>
      {/*~./ site-logo-block ~*/}
      <div className="dashborad-menu-main tse-scrollable">
        <div className="tse-content">
          <div className="filter-tab-area">
            <ul className="dashborad-menu nav nav-tabs" role="tablist">
              <li>
                <a
                  className="active"
                  data-toggle="tab"
                  href="#dashboard_overview"
                  role="tab"
                >
                  <span className="icon icon-user4" />
                  <span>Overview</span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#dashboard_setting" role="tab">
                  <span className="icon icon-settings-12" />
                  <span>Setting</span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#dashboard_listing" role="tab">
                  <span className="icon icon-medical-history" />
                  <span>My Listing</span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#dashboard_wishlist" role="tab">
                  <span className="icon icon-shopping-cart" />
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <Link to="/">
                  <span className="icon icon-home4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="icon icon-logout-1" />
                  <span>logout</span>
                </a>
              </li>
            </ul>
          </div>
          {/*~./ filter-tab-area ~*/}
        </div>
      </div>
      {/*~./ dashborad-menu-main ~*/}
    </div>
  );
};

export default DashboardMenu;
