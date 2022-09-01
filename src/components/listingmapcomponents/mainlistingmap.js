import React from "react";

const MainListingMap = () => {
  return (
    <div className="main-wrapper listing-map-wrap listing-map-list">
      <div className="listing-filter-area">
        <div className="title-icon">
          <h3 className="title">
            <span className="icon-search32" />
            Search Listing
          </h3>
        </div>
        {/*~./ title-icon ~*/}
        {/*~~~~ Start Widget Search Filter ~~~~*/}
        <div className="widget bt-widget-search-filter">
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
                  <span className="distance-value">60</span>KM
                </div>
                <div id="search_distance" />
              </div>
              <div className="filter-group">
                <div className="search-search-price">
                  Price: $0 - $<span className="price-value">1000</span>
                </div>
                <div id="search_price" />
              </div>
              <div className="filter-group">
                <strong>Filter By Features</strong>
                <div className="tags-form-group">
                  <div className="form-group">
                    <input name="tag" id="filtertag0" type="checkbox" />
                    <label htmlFor="filtertag0" className="listtag">
                      Coupons
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag1" type="checkbox" />
                    <label htmlFor="filtertag1" className="listtag">
                      {" "}
                      Smoking Allowed
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag2" type="checkbox" />
                    <label htmlFor="filtertag2" className="listtag">
                      Accessories
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag3" type="checkbox" />
                    <label htmlFor="filtertag3" className="listtag">
                      Camping
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag4" type="checkbox" />
                    <label htmlFor="filtertag4" className="listtag">
                      {" "}
                      Field trips
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag5" type="checkbox" />
                    <label htmlFor="filtertag5" className="listtag">
                      Getway
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                  <div className="form-group">
                    <input name="tag" id="filtertag6" type="checkbox" />
                    <label htmlFor="filtertag6" className="listtag">
                      Hot Spots
                    </label>
                  </div>
                  {/*~./ form-group ~*/}
                </div>
                {/*~./ tags-form-group ~*/}
              </div>
              <div className="form-submit">
                <button className="btn btn-default">apply filter</button>
              </div>
            </form>
          </div>
        </div>
        {/*~./ end widget search filter ~*/}
      </div>
      {/*~./ listing-filter-area ~*/}
      <div className="listing-map-content-list">
        <div className="listing-map-content-main bg-gray">
          <div className="search-filter-options">
            <div className="result-show-by-cat">
              <p>
                <strong>Restaurants </strong> Showing 24 results
              </p>
            </div>
            {/*~./ result-show-by-cat ~*/}
            <div className="filter-by-grid-list">
              <span>View As</span>
              <div className="filter-tab-area">
                <ul className="nav nav-tabs">
                  <li>
                    <a className="active" href="listing-map-one.html">
                      <i className="fa fa-th-large" />
                    </a>
                  </li>
                  <li>
                    <a href="listing-map-two.html">
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*~./ end filter tab area ~*/}
            </div>
            {/*~./ filter-by-grid-list ~*/}
          </div>
          {/*~./ search-filter-options ~*/}
          <div className="listing-todo-main tse-scrollable">
            <div className="tse-content">
              {/*~~~~~ Start Popular Todo Item ~~~~~*/}
              <div className="popular-todo-item todo-item-list">
                <div className="todo-thumbnail-area">
                  <figure className="item-thumb">
                    <img src="assets/images/todo/1/1.jpg" alt="Thmubnail" />
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
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
                    <img src="assets/images/todo/1/2.jpg" alt="Thmubnail" />
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
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
                    <img src="assets/images/todo/1/3.jpg" alt="Thmubnail" />
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
                      <a href="listing-details.html">Balance Gym Summer</a>
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
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
                    <img src="assets/images/todo/1/2.jpg" alt="Thmubnail" />
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
                      <a href="listing-details.html">Kris Beauty Carnaval</a>
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
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
                    <img src="assets/images/todo/1/5.jpg" alt="Thmubnail" />
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
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
                    <img src="assets/images/todo/1/6.jpg" alt="Thmubnail" />
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
                      <a href="listing-details.html">Tolip Parc Dull Garden</a>
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
                        The path of the righteous man is beset on all side by
                        the iniquities. Nam in mauris quis libero sod eleifend
                        spectra online.
                      </p>
                    </div>
                  </div>
                  {/*./ todo-content */}
                  <div className="todo-footer">
                    <a href="#" className="todo-cat todo-cat-restaurant">
                      <span className="icon-fast-food" />
                      Restaurants
                    </a>
                    <a href="listing-details.html" className="todo-status">
                      Open Now
                    </a>
                  </div>
                  {/*./ todo-footer */}
                </div>
                {/*./ content-entry-wrap */}
              </div>
              {/*~./ end popular todo item ~*/}
            </div>
          </div>
          {/*~./ listing-todo-main ~*/}
        </div>
        {/*~./ listing-map-content-main ~*/}
        <div className="listing-google-map-content">
          <div id="map_todo_listing" />
        </div>
        {/*~./ listing-google-map-content ~*/}
      </div>
    </div>
  );
};

export default MainListingMap;
