import React from "react";

const ListingThumbnail = () => {
  return (
    <div className="listing-todo-thumbnail-area">
      <div
        className="todo-thumb bg-image bg-overlay"
        style={{
          backgroundImage: "url(assets/images/todo/single/1/1.jpg)",
        }}
      />
      <div className="listing-todo-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="listing-todo-content text-white text-center">
                <div className="todo-brand-logo">
                  <img src="assets/images/todo/single/1/logo.png" alt="logo" />
                </div>
                <h3 className="title">The Backyard Cafe</h3>
                <h4 className="sub-title">Farm Fresh Butt Nuggests</h4>
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
              {/*./ listing-todo-content */}
            </div>
          </div>
        </div>
        <div className="listing-todo-feature">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="listing-todo-feature-list">
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
      </div>
      {/*./ listing-todo-header */}
    </div>
  );
};

export default ListingThumbnail;
