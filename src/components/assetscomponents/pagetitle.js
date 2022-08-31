import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title, path, isLink }) => {
  return (
    <div
      className="page-title-area text-white bg-image bg-overlay"
      style={{ backgroundImage: "url(assets/images/header/2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-header-content">
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
              <div className="breadcrumb-content-area">
                <div className="page-header-caption">
                  <h1>{title}</h1>
                </div>
                {!isLink && (
                  <div className="breadcrumb-area">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        aria-current="page"
                        className="breadcrumb-item active"
                      >
                        {path}
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
            {/*~~./ page-header-content ~~*/}
          </div>
        </div>
      </div>
      {/*~~./ end container ~~*/}
    </div>
  );
};

export default PageTitle;
