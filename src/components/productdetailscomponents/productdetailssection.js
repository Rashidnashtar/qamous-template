import React from "react";

const ProductDetailsSection = () => {
  return (
    <div className="products-details-area">
      {/*~~~~~ Start Single Products Details ~~~~~*/}
      <div className="single-products-details ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="single-slider-item">
                <ul className="product-detail-slide owl-carousel">
                  <li className="item">
                    <img
                      src="assets/images/product/single/single.jpg"
                      alt="img"
                    />
                  </li>
                  <li className="item">
                    <img
                      src="assets/images/product/single/single.jpg"
                      alt="img"
                    />
                  </li>
                  <li className="item">
                    <img
                      src="assets/images/product/single/single.jpg"
                      alt="img"
                    />
                  </li>
                </ul>
                <ul className="thumbnails-wrapper">
                  <li className="thumbnails">
                    <a href="#">
                      <img src="assets/images/product/single/1.jpg" alt="img" />
                    </a>
                  </li>
                  <li className="thumbnails">
                    <a href="#">
                      <img src="assets/images/product/single/2.jpg" alt="img" />
                    </a>
                  </li>
                  <li className="thumbnails">
                    <a href="#">
                      <img src="assets/images/product/single/3.jpg" alt="img" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-item-info">
                <h3 className="product-title">Blue Berry Jacket</h3>
                <div className="product-meta">
                  <div className="product-price-and-rating">
                    <div className="product-price">$77.00</div>
                    <div className="product-rating">
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
                  <div className="product-status">Available In Stocks</div>
                </div>
                <div className="description">
                  <p>
                    You think water moves fast, You should see ice. It moves
                    like it has ande mind Like it knows it killed the world once
                    and got a taste for murdering. After the avalanche near
                    stores.
                  </p>
                </div>
                <form action="#">
                  <div className="product-size-color">
                    <div className="item-size">
                      <h5 className="small-title">Select Size</h5>
                      <div className="size-content">
                        <input
                          type="radio"
                          name="size"
                          id="s1"
                          defaultValue="s"
                        />
                        <label htmlFor="s1">
                          <span>s</span>
                        </label>
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="size"
                          id="m1"
                          defaultValue="m"
                        />
                        <label htmlFor="m1">
                          <span>m</span>
                        </label>
                        <input
                          type="radio"
                          name="size"
                          id="l1"
                          defaultValue="l"
                        />
                        <label htmlFor="l1">
                          <span>l</span>
                        </label>
                        <input
                          type="radio"
                          name="size"
                          id="xl1"
                          defaultValue="xl"
                        />
                        <label htmlFor="xl1">
                          <span>xl</span>
                        </label>
                        <input
                          type="radio"
                          name="size"
                          id="xll1"
                          defaultValue="xll"
                        />
                        <label htmlFor="xll1">
                          <span>xll</span>
                        </label>
                      </div>
                    </div>
                    <div className="item-color">
                      <h5 className="small-title">Select Color</h5>
                      <div className="colors-content">
                        <input type="checkbox" name="color" id="color1" />
                        <label htmlFor="color1" className="color1" />
                        <input type="checkbox" name="color" id="color2" />
                        <label htmlFor="color2" className="color2" />
                        <input type="checkbox" name="color" id="color3" />
                        <label htmlFor="color3" className="color3" />
                        <input
                          type="checkbox"
                          defaultChecked=""
                          name="color"
                          id="color4"
                        />
                        <label htmlFor="color4" className="color4" />
                        <input type="checkbox" name="color" id="color5" />
                        <label htmlFor="color5" className="color5" />
                      </div>
                    </div>
                  </div>
                  <div className="product-detail-bottom">
                    <div className="input-spinner number">
                      <a href="javascript:void(0)" className="minus">
                        -
                      </a>
                      <input id="product-number" type="text" defaultValue={1} />
                      <a href="javascript:void(0)" className="plus">
                        +
                      </a>
                    </div>
                    {/*/.input-spinner*/}
                    <div className="remove-cart">
                      <button className="btn btn-default">
                        <span>-</span> Remove from Cart
                      </button>
                    </div>
                    <div className="share-and-whishlist">
                      <a className="add-to-whishlist" href="#">
                        <span className="icon-heart" />
                      </a>
                      {/*~./ add-to-whishlist ~*/}
                      <div className="product-share">
                        <div className="share-link">
                          <a href="#">
                            <span className="fa fa-share-alt" />
                          </a>
                          <ul className="share-list">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*~./ end single products details ~*/}
      {/*~~~~~ Start Products Details Tab Area ~~~~~*/}
      <div className="products-details-tab-area ptb-100 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter-tab-area style-three">
                <ul className="nav nav-tabs" role="tablist">
                  <li>
                    <a
                      className="active"
                      data-toggle="tab"
                      href="#product_description"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#product_details" role="tab">
                      Details
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#product_reviews" role="tab">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              {/*~./ end filter tab area ~*/}
              <div className="tab-content filter-tab-content">
                {/*~~~~~ Start Tab Pane ~~~~~*/}
                <div
                  className="tab-pane fade show active product-description"
                  id="product_description"
                  role="tabpanel"
                >
                  <p>
                    The lysine contingency - it's intended to prevent the spread
                    of the animals is case they ever got off the island. Dr. Wu
                    inserted a gene that makes a single faulty enzyme in protein
                    metabolism. The animals can't manufacture the amino acid
                    lysine. Unless they're continually supplied with lysine by
                    us, they'll slip into a coma and die.
                  </p>
                </div>
                {/*~./ end tab pane ~*/}
                {/*~~~~~ Start Tab Pane ~~~~~*/}
                <div
                  className="tab-pane fade"
                  id="product_details"
                  role="tabpanel"
                >
                  <div className="product-desc">
                    <span className="item-number">
                      <b>Product Number :</b> #41121120
                    </span>
                    <span className="item-cat">
                      <b>Category :</b> Men's Suits
                    </span>
                    <span className="item-tag">
                      <b>Tags :</b> elegant, men, shirt, clean
                    </span>
                  </div>
                </div>
                {/*~./ end tab pane ~*/}
                {/*~~~~~ Start Tab Pane ~~~~~*/}
                <div
                  className="tab-pane fade"
                  id="product_reviews"
                  role="tabpanel"
                >
                  <div className="product-review-list">
                    <div className="product-review">
                      <div className="rating-riview">
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* rating */}
                        <div className="d-block">
                          <span className="review-comment">
                            Very very good work and fast delivery
                          </span>
                        </div>
                        {/* review */}
                      </div>
                      <div className="review-user">
                        <p className="review-user-name">John Doe</p>
                        <p className="review-meta">
                          28<sup>th</sup> july 2019, New York
                        </p>
                      </div>
                    </div>
                    {/*product-review */}
                    <div className="product-review">
                      <div className="rating-riview">
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* rating */}
                        <div className="d-block">
                          <span className="review-comment">
                            Very very good work and fast delivery
                          </span>
                        </div>
                        {/* review */}
                      </div>
                      <div className="review-user">
                        <p className="review-user-name">John Doe</p>
                        <p className="review-meta">
                          28<sup>th</sup> july 2019, New York
                        </p>
                      </div>
                    </div>
                    {/*product-review */}
                    <div className="product-review">
                      <div className="rating-riview">
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* rating */}
                        <div className="d-block">
                          <span className="review-comment">
                            Very very good work and fast delivery
                          </span>
                        </div>
                        {/* review */}
                      </div>
                      <div className="review-user">
                        <p className="review-user-name">John Doe</p>
                        <p className="review-meta">
                          28<sup>th</sup> july 2019, New York
                        </p>
                      </div>
                    </div>
                    {/*product-review */}
                    {/* see all review start */}
                    <div className="d-block">
                      <a href="#" className="btn btn-default">
                        See all reviews
                      </a>
                    </div>
                    {/* see all review end */}
                  </div>
                </div>
                {/*~./ end tab pane ~*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*~./ end products details tab area ~*/}
    </div>
  );
};

export default ProductDetailsSection;
