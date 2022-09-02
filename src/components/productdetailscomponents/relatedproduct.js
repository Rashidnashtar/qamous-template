import React from "react";
import SectionHeader from "../assetscomponents/sectionHeader";
const RelatedProduct = () => {
  return (
    <div className="related-product-section ptb-100">
      <div className="container">
        <SectionHeader
          header="Might You Like"
          boldHeader="It"
          paragrah="More products"
        />
        <div className="row">
          {/*~~~~~ Start Shop Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="shop-item">
              <div className="entry-product-thumbnail">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/product/1.jpg" alt="Shop item" />
                  </a>
                </figure>
                {/*~./ thumb-wrap ~*/}
                <a className="add-to-whishlist" href="#">
                  <span className="icon-heart" />
                </a>
                {/*~./ add-to-whishlist ~*/}
                <a href="#" className="add-to-cart">
                  <span className="icon-paper-bag" />
                </a>
                {/*~./ add-to-cart ~*/}
              </div>
              {/*~./ entry-product-thumb ~*/}
              <div className="product-item-info">
                <h3 className="product-title">
                  <a href="single-shop.html">Handcut Lisbon</a>
                </h3>
                <div className="product-price-and-rating">
                  <div className="product-price">$38.00</div>
                  <div className="product-rating">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      (7)
                    </span>
                  </div>
                </div>
              </div>
              {/*~./ product-item-info ~*/}
            </div>
          </div>
          {/*~./ end shop item ~*/}
          {/*~~~~~ Start Shop Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="shop-item">
              <div className="entry-product-thumbnail">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/product/2.jpg" alt="Shop item" />
                  </a>
                </figure>
                {/*~./ thumb-wrap ~*/}
                <a className="add-to-whishlist" href="#">
                  <span className="icon-heart" />
                </a>
                {/*~./ add-to-whishlist ~*/}
                <a href="#" className="add-to-cart">
                  <span className="icon-paper-bag" />
                </a>
                {/*~./ add-to-cart ~*/}
              </div>
              {/*~./ entry-product-thumb ~*/}
              <div className="product-item-info">
                <h3 className="product-title">
                  <a href="single-shop.html">Handcut Lisbon</a>
                </h3>
                <div className="product-price-and-rating">
                  <div className="product-price">$38.00</div>
                  <div className="product-rating">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      (7)
                    </span>
                  </div>
                </div>
              </div>
              {/*~./ product-item-info ~*/}
            </div>
          </div>
          {/*~./ end shop item ~*/}
          {/*~~~~~ Start Shop Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="shop-item">
              <div className="entry-product-thumbnail">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/product/3.jpg" alt="Shop item" />
                  </a>
                </figure>
                {/*~./ thumb-wrap ~*/}
                <a className="add-to-whishlist" href="#">
                  <span className="icon-heart" />
                </a>
                {/*~./ add-to-whishlist ~*/}
                <a href="#" className="add-to-cart">
                  <span className="icon-paper-bag" />
                </a>
                {/*~./ add-to-cart ~*/}
              </div>
              {/*~./ entry-product-thumb ~*/}
              <div className="product-item-info">
                <h3 className="product-title">
                  <a href="single-shop.html">Barbour Crer</a>
                </h3>
                <div className="product-price-and-rating">
                  <div className="product-price">$38.00</div>
                  <div className="product-rating">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      (7)
                    </span>
                  </div>
                </div>
              </div>
              {/*~./ product-item-info ~*/}
            </div>
          </div>
          {/*~./ end shop item ~*/}
          {/*~~~~~ Start Shop Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="shop-item">
              <div className="entry-product-thumbnail">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/product/4.jpg" alt="Shop item" />
                  </a>
                </figure>
                {/*~./ thumb-wrap ~*/}
                <a className="add-to-whishlist" href="#">
                  <span className="icon-heart" />
                </a>
                {/*~./ add-to-whishlist ~*/}
                <a href="#" className="add-to-cart">
                  <span className="icon-paper-bag" />
                </a>
                {/*~./ add-to-cart ~*/}
              </div>
              {/*~./ entry-product-thumb ~*/}
              <div className="product-item-info">
                <h3 className="product-title">
                  <a href="single-shop.html">Timberland Grey</a>
                </h3>
                <div className="product-price-and-rating">
                  <div className="product-price">$38.00</div>
                  <div className="product-rating">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      (7)
                    </span>
                  </div>
                </div>
              </div>
              {/*~./ product-item-info ~*/}
            </div>
          </div>
          {/*~./ end shop item ~*/}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
