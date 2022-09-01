import React from "react";

const FourthListingThumbnail = () => {
  return (
    <div className="listing-todo-thumbnail-area style-four">
      <div className="listing-todo-thumbnail-carousel carousel-nav-dots owl-carousel">
        <div className="item">
          <img src="assets/images/todo/single/4/1.jpg" alt="thumb" />
        </div>
        <div className="item">
          <img src="assets/images/todo/single/4/2.jpg" alt="thumb" />
        </div>
        <div className="item">
          <img src="assets/images/todo/single/4/3.jpg" alt="thumb" />
        </div>
        <div className="item">
          <img src="assets/images/todo/single/4/1.jpg" alt="thumb" />
        </div>
        <div className="item">
          <img src="assets/images/todo/single/4/2.jpg" alt="thumb" />
        </div>
        <div className="item">
          <img src="assets/images/todo/single/4/3.jpg" alt="thumb" />
        </div>
      </div>
      {/*~./ listing todo thumbnail carousel ~*/}
      <div className="listing-todo-header mt-60">
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
                    <div className="todo-location">
                      <span className="icon-location" />
                      Sagrada Familia, ES
                    </div>
                    {/*./ todo-location */}
                  </div>
                </div>
                {/*./ content-left */}
                <div className="content-right">
                  <div className="listing-todo-feature-list">
                    <a href="#" className="single-list">
                      <span className="text">Get Direction</span>
                      <span className="icon-map2" />
                    </a>
                    <a href="#" className="single-list">
                      <span className="text">Share</span>
                      <span className="icon-share1" />
                    </a>
                    <a href="#" className="single-list">
                      <span className="text">Submit Review</span>
                      <span className=" icon-comment" />
                    </a>
                    <a href="#" className="single-list">
                      <span className="text">Save</span>
                      <span className="icon-bookmark1" />
                    </a>
                    <a href="#" className="single-list">
                      <span className="text">Report</span>
                      <span className="icon-flag1" />
                    </a>
                    <a href="#" className="single-list">
                      <span className="text">Send E-mail</span>
                      <span className="icon-email-1" />
                    </a>
                  </div>
                  {/*~~./ listing-todo-feature-list ~~*/}
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

export default FourthListingThumbnail;
