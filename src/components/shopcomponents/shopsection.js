import React from "react";

const ShopSection = () => {
  return (
    <div className="shop-page-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search-filter-options mb-60">
              <div className="row align-items-end">
                <div className="col-lg-3 col-md-6">
                  <div className="result-show-by-cat">
                    <p>
                      <strong>Women</strong> Showing 24 results
                    </p>
                  </div>
                  {/*~./ result-show-by-cat ~*/}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="products-ordering-list">
                    <span>Sort</span>
                    <select className="option-form-input custom-select sort">
                      <option value={1}>Default</option>
                      <option value={2}>Best Selling</option>
                      <option value={3}>Price Ascending</option>
                      <option value={4}>Price Descending</option>
                      <option value={5}>Date Ascending</option>
                      <option value={6}>Date Descending</option>
                      <option value={7}>Name Ascending</option>
                      <option value={8}>Name Descending</option>
                    </select>
                  </div>
                  {/*~./ products-ordering-list ~*/}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="show-products-category">
                    <span>category</span>
                    <select className="option-form-input custom-select category">
                      <option>Man</option>
                      <option>Woman</option>
                      <option>Automotive</option>
                      <option>Travels</option>
                    </select>
                  </div>
                  {/*~./ show-products-category ~*/}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="filter-by-grid-list">
                    <span>View As</span>
                    <div className="filter-tab-area">
                      <ul className="nav nav-tabs" role="tablist">
                        <li>
                          <a
                            className="active"
                            data-toggle="tab"
                            href="#product_grid"
                            role="tab"
                          >
                            <i className="fa fa-th-large" />
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#product_list" role="tab">
                            <i className="fa fa-bars" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*~./ end filter tab area ~*/}
                  </div>
                  {/*~./ filter-by-grid-list ~*/}
                </div>
              </div>
            </div>
            {/*~./ search-filter-options ~*/}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content filter-tab-content">
              {/*~~~~~ Start Tab Pane ~~~~~*/}
              <div
                className="tab-pane fade show active"
                id="product_grid"
                role="tabpanel"
              >
                <div className="row">
                  {/*~~~~~ Start Shop Item ~~~~~*/}
                  <div className="col-lg-3 col-md-6">
                    <div className="shop-item">
                      <div className="entry-product-thumbnail">
                        <figure className="thumb-wrap">
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/1.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/2.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/3.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/4.jpg"
                              alt="Shop item"
                            />
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
                  {/*~~~~~ Start Shop Item ~~~~~*/}
                  <div className="col-lg-3 col-md-6">
                    <div className="shop-item">
                      <div className="entry-product-thumbnail">
                        <figure className="thumb-wrap">
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/5.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/6.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/7.jpg"
                              alt="Shop item"
                            />
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
                          <a href="single-shop.html">
                            <img
                              src="assets/images/product/8.jpg"
                              alt="Shop item"
                            />
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
              {/*~./ end tab pane ~*/}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/*~~~~~ Start Paging Navigation ~~~~~*/}
            <nav className="navigation paging-navigation pagination-center">
              <ul className="nav-links">
                <li className="nav-previous">
                  {" "}
                  {/* disabled class add when no pagination */}
                  <a href="#">Previous</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#" className="page-numbers">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="page-numbers">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="page-numbers">
                    4
                  </a>
                </li>
                <li className="nav-next">
                  <a href="#">Next</a>
                </li>
              </ul>
            </nav>
            {/*~./ end paging navigation ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
