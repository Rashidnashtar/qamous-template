import React from "react";

const MainWrapper = () => {
  return (
    <div className="main-wrapper ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*~~~~~ Start Site Main ~~~~~*/}
            <main className="site-main">
              <div className="row">
                <div className="col-12">
                  <div className="search-filter-options mb-60">
                    <div className="row align-items-end">
                      <div className="col-lg-3 col-md-6">
                        <div className="products-ordering-list">
                          <span>Sort By</span>
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
                        <div className="price-ordering-list">
                          <span>Price</span>
                          <select className="option-form-input custom-select price">
                            <option value={1}>Low to High </option>
                            <option value={2}>High to Low</option>
                            <option value={3}>Price High</option>
                            <option value={4}>Price Low</option>
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
                                  href="#listing_grid"
                                  role="tab"
                                >
                                  <i className="fa fa-th-large" />
                                </a>
                              </li>
                              <li>
                                <a
                                  data-toggle="tab"
                                  href="#listing_list"
                                  role="tab"
                                >
                                  <i className="fa fa-bars" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/*~./ end filter tab area ~*/}
                        </div>
                        {/*~./ filter-by-grid-list ~*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="sort-by-tags">
                          <div className="tags-by">Tags By</div>
                          <div className="tags-form-group">
                            <div className="form-group">
                              <input name="tag" id="listtag0" type="checkbox" />
                              <label htmlFor="listtag0" className="listtag">
                                Burgers
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag1" type="checkbox" />
                              <label htmlFor="listtag1" className="listtag">
                                Fast Foods
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag2" type="checkbox" />
                              <label htmlFor="listtag2" className="listtag">
                                Breakfast
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag3" type="checkbox" />
                              <label htmlFor="listtag3" className="listtag">
                                Launch
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag4" type="checkbox" />
                              <label htmlFor="listtag4" className="listtag">
                                Desert
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag5" type="checkbox" />
                              <label htmlFor="listtag5" className="listtag">
                                diet
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag6" type="checkbox" />
                              <label htmlFor="listtag6" className="listtag">
                                Burgers
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag7" type="checkbox" />
                              <label htmlFor="listtag7" className="listtag">
                                Nutrition
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag8" type="checkbox" />
                              <label htmlFor="listtag8" className="listtag">
                                fitness
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input name="tag" id="listtag9" type="checkbox" />
                              <label htmlFor="listtag9" className="listtag">
                                Cupons
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                          </div>
                          {/*~./ tags-form-group ~*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*~./ search-filter-options ~*/}
                </div>
              </div>
              <div className="tab-content filter-tab-content">
                {/*~~~~~ Start Tab Pane ~~~~~*/}
                <div
                  className="tab-pane fade show active"
                  id="listing_grid"
                  role="tabpanel"
                >
                  <div className="row">
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/1.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type rated">top rated</div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              Marriott JW Classic Dinner
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-restaurant">
                            <span className="icon-fast-food" />
                            Restaurants
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Open Now
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/2.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type trending">
                              <span className="fa fa-bolt" />
                            </div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />6 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              Barcelo Aqua Blue Hotel{" "}
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-hotel">
                            <span className="icon-building" />
                            Hotels
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Closed
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/3.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type offer">hot offer</div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />2 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              Balance Gym Summer
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-fitness">
                            <span className="icon-accessibility" />
                            Fitness
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Open Now
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/4.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type trending">
                              <span className="fa fa-bolt" />
                            </div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />7 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              New Year Eve Party
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-nightlife">
                            <span className="icon-dress" />
                            Nightlife
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Closed
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/5.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type sale">sale</div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />5 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">Used Vollax Car</a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-automotive">
                            <span className="icon-wrench" />
                            Automotive
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Open Now
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/6.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />3 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              Kris Beauty Carnaval
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-beauty">
                            <span className="icon-grooming" />
                            Beauty
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Closed
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/7.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type trending">
                              <span className="fa fa-bolt" />
                            </div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />7 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              New Year Eve Party
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-nightlife">
                            <span className="icon-dress" />
                            Nightlife
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Closed
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/8.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type sale">sale</div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />5 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">Used Vollax Car</a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-automotive">
                            <span className="icon-wrench" />
                            Automotive
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Open Now
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                    {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="popular-todo-item status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/9.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />3 photos
                              </a>
                            </div>
                          </div>
                          {/*./ section-header */}
                        </div>
                        {/*./ todo-overlay-info */}
                        <div className="todo-content">
                          <h3 className="title">
                            <a href="listing-details.html">
                              Kris Beauty Carnaval
                            </a>
                          </h3>
                          <div className="todo-rating">
                            <div className="rating-value">
                              <span>4.8</span>16 Ratings
                            </div>
                            <div className="rating-icon">
                              <ul>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li className="yellow">$</li>
                                <li>$</li>
                              </ul>
                            </div>
                          </div>
                          {/*./ todo-rating */}
                          <div className="todo-meta">
                            <div className="todo-location">
                              <span className="icon-location" />
                              Barcelona, ES
                            </div>
                            <div className="todo-number">
                              <span className="icon-phone" />
                              +34 2 2458752
                            </div>
                          </div>
                          {/*./ todo-meta */}
                          <div className="todo-summary">
                            <p>
                              The path of the righteous man is beset on all
                              sides by the iniquities.
                            </p>
                          </div>
                        </div>
                        {/*./ todo-content */}
                        <div className="todo-footer">
                          <a href="#" className="todo-cat todo-cat-beauty">
                            <span className="icon-grooming" />
                            Beauty
                          </a>
                          <a
                            href="listing-details.html"
                            className="todo-status"
                          >
                            Closed
                          </a>
                        </div>
                        {/*./ todo-footer */}
                      </div>
                    </div>
                    {/*~./ end popular todo item ~*/}
                  </div>
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
                {/*~./ end tab pane ~*/}
                {/*~~~~~ Start Tab Pane ~~~~~*/}
                <div
                  className="tab-pane fade"
                  id="listing_list"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-lg-8">
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/1.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type rated">top rated</div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">
                                Marriott JW Classic Dinner
                              </a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list status-closed">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/2.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">
                                Barcelo Aqua Blue Hotel{" "}
                              </a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/3.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-type trending">
                              <span className="fa fa-bolt" />
                            </div>
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">
                                Balance Gym Summer
                              </a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/2.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">
                                Kris Beauty Carnaval
                              </a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/5.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">Used Vollax Car</a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
                      {/*~~~~~ Start Popular Todo Item ~~~~~*/}
                      <div className="popular-todo-item todo-item-list">
                        <div className="todo-thumbnail-area">
                          <figure className="item-thumb">
                            <img
                              src="assets/images/todo/1/6.jpg"
                              alt="Thmubnail"
                            />
                          </figure>
                          {/*./ item-thumb */}
                          <div className="todo-overlay-info">
                            <div className="todo-meta-bottom">
                              <a href="#" className="save">
                                <i className="fa fa-heart" />
                                save
                              </a>
                              <a href="#" className="photo">
                                <i className="fa fa-image" />4 photos
                              </a>
                            </div>
                          </div>
                          {/*./ todo-overlay-info */}
                        </div>
                        {/*./ todo-thumbnail-area */}
                        <div className="content-entry-wrap">
                          <div className="todo-content">
                            <h3 className="title">
                              <a href="listing-details.html">
                                Tolip Parc Dull Garden
                              </a>
                            </h3>
                            <div className="todo-rating">
                              <div className="rating-value">
                                <span>4.8</span>16 Ratings
                              </div>
                              <div className="rating-icon">
                                <ul>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li className="yellow">$</li>
                                  <li>$</li>
                                </ul>
                              </div>
                            </div>
                            {/*./ todo-rating */}
                            <div className="todo-meta">
                              <div className="todo-location">
                                <span className="icon-location" />
                                Barcelona, ES
                              </div>
                              <div className="todo-number">
                                <span className="icon-phone" />
                                +34 2 2458752
                              </div>
                            </div>
                            {/*./ todo-meta */}
                            <div className="todo-summary">
                              <p>
                                The path of the righteous man is beset on all
                                side by the iniquities. Nam in mauris quis
                                libero sod eleifend spectra online.
                              </p>
                            </div>
                          </div>
                          {/*./ todo-content */}
                          <div className="todo-footer">
                            <a
                              href="#"
                              className="todo-cat todo-cat-restaurant"
                            >
                              <span className="icon-fast-food" />
                              Restaurants
                            </a>
                            <a
                              href="listing-details.html"
                              className="todo-status"
                            >
                              Open Now
                            </a>
                          </div>
                          {/*./ todo-footer */}
                        </div>
                        {/*./ content-entry-wrap */}
                      </div>
                      {/*~./ end popular todo item ~*/}
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
                    {/*~~~~~ Start sidebar ~~~~~*/}
                    <div className="col-lg-4">
                      <div className="sidebar sidebar-two">
                        {/*~~~~ Start Widget Search Filter ~~~~*/}
                        <aside className="widget bt-widget-search-filter">
                          <h4 className="widget-title">
                            <span className="icon-search32" />
                            Search Listing
                          </h4>
                          <div className="widget-content">
                            <form
                              name="searchfilterForm"
                              id="search_filter_form"
                              method="post"
                              action="#"
                              className="search_filter_form"
                            >
                              <div className="filter-group">
                                <input
                                  id="filter_search"
                                  placeholder="What are you looking for?"
                                  type="text"
                                  className="form-controllar"
                                />
                              </div>
                              <div className="filter-group">
                                <select className="custom-select category">
                                  <option>Filter By Category</option>
                                  <option>Beauty</option>
                                  <option>Nightlife</option>
                                  <option>Hotels</option>
                                  <option>Automotive</option>
                                  <option>Travels</option>
                                  <option>Real Estates</option>
                                  <option>Shopping</option>
                                </select>
                                {/*~./ location ~*/}
                              </div>
                              <div className="filter-group">
                                <select className="custom-select country">
                                  <option>Filter By Country</option>
                                  <option>Algeria</option>
                                  <option>Australia</option>
                                  <option>Angola</option>
                                  <option>India</option>
                                  <option>New York</option>
                                  <option>Bangladesh</option>
                                </select>
                                {/*~./ location ~*/}
                              </div>
                              <div className="filter-group">
                                <select className="custom-select country">
                                  <option>Filter By City</option>
                                  <option>City one</option>
                                  <option>City Two</option>
                                  <option>City Three</option>
                                  <option>City Four</option>
                                  <option>City Five</option>
                                  <option>City Six</option>
                                </select>
                                {/*~./ location ~*/}
                              </div>
                              <div className="filter-group filter_location">
                                <input
                                  id="filter_location"
                                  placeholder="Location"
                                  type="text"
                                  className="form-controllar"
                                />
                              </div>
                              <div className="filter-group">
                                <div className="search-distance-value">
                                  Radius:
                                  <span className="distance-value">60</span>
                                  KM
                                </div>
                                <div id="search_distance" />
                              </div>
                              <div className="filter-group">
                                <div className="search-search-price">
                                  Price: $0 - $
                                  <span className="price-value">1000</span>
                                </div>
                                <div id="search_price" />
                              </div>
                              <div className="filter-group">
                                <strong>Filter By Features</strong>
                                <div className="tags-form-group">
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag0"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag0"
                                      className="listtag"
                                    >
                                      Coupons
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag1"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="listtag1"
                                      className="filtertag1"
                                    >
                                      {" "}
                                      Smoking Allowed
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag2"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag2"
                                      className="listtag"
                                    >
                                      Accessories
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag3"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag3"
                                      className="listtag"
                                    >
                                      Camping
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag4"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag4"
                                      className="listtag"
                                    >
                                      {" "}
                                      Field trips
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag5"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag5"
                                      className="listtag"
                                    >
                                      Getway
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                  <div className="form-group">
                                    <input
                                      name="tag"
                                      id="filtertag6"
                                      type="checkbox"
                                    />
                                    <label
                                      htmlFor="filtertag6"
                                      className="listtag"
                                    >
                                      Hot Spots
                                    </label>
                                  </div>
                                  {/*~./ form-group ~*/}
                                </div>
                                {/*~./ tags-form-group ~*/}
                              </div>
                              <div className="form-submit">
                                <button className="btn btn-default">
                                  apply filter
                                </button>
                              </div>
                            </form>
                          </div>
                        </aside>
                        {/*~./ end widget search filter ~*/}
                        {/*~~~~ Start Widget Todo Categories ~~~~*/}
                        <aside className="widget widget-todo-categories">
                          <h4 className="widget-title">
                            <span className="icon-list1" />
                            Top Categories
                          </h4>
                          <div className="widget-content">
                            <ul>
                              <li className="cat-item">
                                <a href="#">
                                  Hotels<span className="count">62</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Food &amp; Drinks
                                  <span className="count">90</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Night Life
                                  <span className="count">20</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Fitness &amp; Spa
                                  <span className="count">23</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Entertianment
                                  <span className="count">101</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Automotive
                                  <span className="count">90</span>
                                </a>
                              </li>
                              <li className="cat-item">
                                <a href="#">
                                  Outdoor Activities
                                  <span className="count">60</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </aside>
                        {/*~./ end widget todo categories ~*/}
                        {/*~~~~ Start Recent View Todo Widget ~~~~*/}
                        <aside className="widget widget-recent-view-todo">
                          <h4 className="widget-title">
                            <span className="icon-eye22" />
                            Recent Viewed Lisitng
                          </h4>
                          <div className="widget-content">
                            {/*~~~~~ Start Todo Item ~~~~~*/}
                            <div className="todo-side-item popular-todo-item">
                              <div className="todo-thumbnail-area">
                                <figure className="item-thumb">
                                  <img
                                    src="assets/images/widget/todo/1.jpg"
                                    alt="Thmubnail"
                                  />
                                </figure>
                                {/*./ item-thumb */}
                              </div>
                              {/*./ todo-thumbnail-area */}
                              <div className="content-entry-wrap">
                                <div className="todo-content">
                                  <h3 className="title">
                                    <a href="listing-details.html">
                                      Used Vollax Car
                                    </a>
                                  </h3>
                                  <div className="todo-rating">
                                    <div className="rating-value">
                                      <span>4.8</span>16 Ratings
                                    </div>
                                  </div>
                                  {/*./ todo-rating */}
                                  <div className="todo-meta">
                                    <div className="todo-location">
                                      <span className="icon-location" />
                                      Barcelona, ES
                                    </div>
                                    <div className="todo-number">
                                      <span className="icon-phone" />
                                      +34 2 2458752
                                    </div>
                                  </div>
                                  {/*./ todo-meta */}
                                </div>
                                {/*./ todo-content */}
                              </div>
                              {/*./ content-entry-wrap */}
                            </div>
                            {/*~./ end todo item ~*/}
                            {/*~~~~~ Start Todo Item ~~~~~*/}
                            <div className="todo-side-item popular-todo-item">
                              <div className="todo-thumbnail-area">
                                <figure className="item-thumb">
                                  <img
                                    src="assets/images/widget/todo/2.jpg"
                                    alt="Thmubnail"
                                  />
                                </figure>
                                {/*./ item-thumb */}
                              </div>
                              {/*./ todo-thumbnail-area */}
                              <div className="content-entry-wrap">
                                <div className="todo-content">
                                  <h3 className="title">
                                    <a href="listing-details.html">
                                      Kris Beauty Carnaval
                                    </a>
                                  </h3>
                                  <div className="todo-rating">
                                    <div className="rating-value">
                                      <span>4.8</span>16 Ratings
                                    </div>
                                  </div>
                                  {/*./ todo-rating */}
                                  <div className="todo-meta">
                                    <div className="todo-location">
                                      <span className="icon-location" />
                                      Barcelona, ES
                                    </div>
                                    <div className="todo-number">
                                      <span className="icon-phone" />
                                      +34 2 2458752
                                    </div>
                                  </div>
                                  {/*./ todo-meta */}
                                </div>
                                {/*./ todo-content */}
                              </div>
                              {/*./ content-entry-wrap */}
                            </div>
                            {/*~./ end todo item ~*/}
                            {/*~~~~~ Start Todo Item ~~~~~*/}
                            <div className="todo-side-item popular-todo-item">
                              <div className="todo-thumbnail-area">
                                <figure className="item-thumb">
                                  <img
                                    src="assets/images/widget/todo/1.jpg"
                                    alt="Thmubnail"
                                  />
                                </figure>
                                {/*./ item-thumb */}
                              </div>
                              {/*./ todo-thumbnail-area */}
                              <div className="content-entry-wrap">
                                <div className="todo-content">
                                  <h3 className="title">
                                    <a href="listing-details.html">
                                      Balance Gym Summer
                                    </a>
                                  </h3>
                                  <div className="todo-rating">
                                    <div className="rating-value">
                                      <span>4.8</span>16 Ratings
                                    </div>
                                  </div>
                                  {/*./ todo-rating */}
                                  <div className="todo-meta">
                                    <div className="todo-location">
                                      <span className="icon-location" />
                                      Barcelona, ES
                                    </div>
                                    <div className="todo-number">
                                      <span className="icon-phone" />
                                      +34 2 2458752
                                    </div>
                                  </div>
                                  {/*./ todo-meta */}
                                </div>
                                {/*./ todo-content */}
                              </div>
                              {/*./ content-entry-wrap */}
                            </div>
                            {/*~./ end todo item ~*/}
                            {/*~~~~~ Start Todo Item ~~~~~*/}
                            <div className="todo-side-item popular-todo-item">
                              <div className="todo-thumbnail-area">
                                <figure className="item-thumb">
                                  <img
                                    src="assets/images/widget/todo/3.jpg"
                                    alt="Thmubnail"
                                  />
                                </figure>
                                {/*./ item-thumb */}
                              </div>
                              {/*./ todo-thumbnail-area */}
                              <div className="content-entry-wrap">
                                <div className="todo-content">
                                  <h3 className="title">
                                    <a href="listing-details.html">
                                      Barcelo Aqua Blue
                                    </a>
                                  </h3>
                                  <div className="todo-rating">
                                    <div className="rating-value">
                                      <span>4.8</span>16 Ratings
                                    </div>
                                  </div>
                                  {/*./ todo-rating */}
                                  <div className="todo-meta">
                                    <div className="todo-location">
                                      <span className="icon-location" />
                                      Barcelona, ES
                                    </div>
                                    <div className="todo-number">
                                      <span className="icon-phone" />
                                      +34 2 2458752
                                    </div>
                                  </div>
                                  {/*./ todo-meta */}
                                </div>
                                {/*./ todo-content */}
                              </div>
                              {/*./ content-entry-wrap */}
                            </div>
                            {/*~./ end todo item ~*/}
                          </div>
                        </aside>
                        {/*~./ end recent view todo widget ~*/}
                      </div>
                    </div>
                    {/*~./ end sidebar ~*/}
                  </div>
                </div>
                {/*~./ end tab pane ~*/}
              </div>
            </main>
            {/*~./ end site main ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
