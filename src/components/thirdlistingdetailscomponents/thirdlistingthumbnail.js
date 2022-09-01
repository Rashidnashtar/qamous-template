import React from "react";

const ThirdListingThumbnail = () => {
  return (
    <div className="listing-todo-thumbnail-area style-three">
      <div
        className="todo-thumb bg-image bg-overlay"
        style={{
          backgroundImage: "url(assets/images/todo/single/3/1.jpg)",
        }}
      />
      <div className="listing-todo-feature">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="listing-todo-feature-list carousel-nav-dots owl-carousel">
                <a href="#" className="single-list">
                  <span className="icon-map2" />
                  <span className="text">Get Direction</span>
                </a>
                <a href="#" className="single-list">
                  <span className="icon-share1" />
                  <span className="text">Share</span>
                </a>
                <a href="#" className="single-list">
                  <span className=" icon-comment" />
                  <span className="text">Submit Review</span>
                </a>
                <a href="#" className="single-list">
                  <span className="icon-bookmark1" />
                  <span className="text">Save</span>
                </a>
                <a href="#" className="single-list">
                  <span className="icon-flag1" />
                  <span className="text">Report</span>
                </a>
                <a href="#" className="single-list">
                  <span className="icon-email-1" />
                  <span className="text">Send E-mail</span>
                </a>
              </div>
              {/*./ listing-todo-feature-list */}
            </div>
          </div>
        </div>
      </div>
      {/*./ listing-todo-feature */}
      <div className="listing-todo-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="listing-todo-content">
                <div className="content-left">
                  <div className="todo-brand-logo">
                    <img
                      src="assets/images/todo/single/2/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="info">
                    <h3 className="title">Pasha Creez Bar</h3>
                    <h4 className="sub-title">There is only one boss</h4>
                  </div>
                </div>
                {/*./ content-left */}
                <div className="content-right">
                  <div className="todo-location">
                    <span className="icon-location" />
                    Sagrada Familia, ES
                  </div>
                  {/*./ todo-location */}
                  <div className="listing-rating">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <a href="#">4 Reviews</a>
                    </span>
                  </div>
                </div>
                {/*./ content-right */}
              </div>
              {/*~~./ listing-todo-content ~~*/}
            </div>
          </div>
        </div>
      </div>
      {/*~~./ listing-todo-header ~~*/}
    </div>
  );
};

export default ThirdListingThumbnail;
