import React from "react";

const ThirdPopularTodos = () => {
  return (
    <section className="popular-todos-section ptb-100">
      <div className="container">
        <div className="row">
          {/*~~~~~ Start Section Header ~~~~~*/}
          <div className="col-lg-6">
            <div className="section-header">
              <h2 className="section-title">
                Best Thing to Do in The <span>City</span>
              </h2>
              <p>What are you interested</p>
              <div className="divider">
                <img src="assets/images/icon/divider.png" alt="icon" />
              </div>
            </div>
          </div>
          {/*./ section-header */}
          <div className="col-lg-6">
            <div className="filter-tab-area">
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <a
                    className="active"
                    data-toggle="tab"
                    href="#todo_latest"
                    role="tab"
                  >
                    <i className="fa fa-clock-o" />
                    Latest
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#todo_top_rated" role="tab">
                    <i className="fa fa-fire" />
                    Top Rated
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#todo_featured" role="tab">
                    <i className="fa fa-bolt" />
                    Featured
                  </a>
                </li>
              </ul>
            </div>
            {/*~./ end filter tab area ~*/}
          </div>
        </div>
      </div>
      <div className="tab-content filter-tab-content">
        {/*~~~~~ Start Tab Pane ~~~~~*/}
        <div
          className="tab-pane fade show active"
          id="todo_latest"
          role="tabpanel"
        >
          <div className="todo-items-carousel owl-carousel carousel-nav-text">
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/1.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type rated">top rated</h4>
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
                  <a href="listing-details.html">Marriott JW Classic Dinner</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
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
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/2.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">Barcelo Aqua Blue Hotel </a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-hotel">
                  <span className="icon-building" />
                  Hotels
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/3.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type offer">hot offer</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-fitness">
                  <span className="icon-accessibility" />
                  Fitness
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/4.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">New Year Eve Party</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-nightlife">
                  <span className="icon-dress" />
                  Nightlife
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/5.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type sale">sale</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-automotive">
                  <span className="icon-wrench" />
                  Automotive
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
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
                      <i className="fa fa-image" />3 photos
                    </a>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              {/*./ todo-overlay-info */}
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-beauty">
                  <span className="icon-grooming" />
                  Beauty
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
          </div>
        </div>
        {/*~./ end tab pane ~*/}
        {/*~~~~~ Start Tab Pane ~~~~~*/}
        <div className="tab-pane fade" id="todo_top_rated" role="tabpanel">
          <div className="todo-items-carousel owl-carousel carousel-nav-text">
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/2.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">Barcelo Aqua Blue Hotel </a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-hotel">
                  <span className="icon-building" />
                  Hotels
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/3.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type offer">hot offer</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-fitness">
                  <span className="icon-accessibility" />
                  Fitness
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/1.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type rated">top rated</h4>
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
                  <a href="listing-details.html">Marriott JW Classic Dinner</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
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
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/4.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">New Year Eve Party</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-nightlife">
                  <span className="icon-dress" />
                  Nightlife
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/5.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type sale">sale</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-automotive">
                  <span className="icon-wrench" />
                  Automotive
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
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
                      <i className="fa fa-image" />3 photos
                    </a>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              {/*./ todo-overlay-info */}
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-beauty">
                  <span className="icon-grooming" />
                  Beauty
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
          </div>
        </div>
        {/*~./ end tab pane ~*/}
        {/*~~~~~ Start Tab Pane ~~~~~*/}
        <div className="tab-pane fade" id="todo_featured" role="tabpanel">
          <div className="todo-items-carousel owl-carousel carousel-nav-text">
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/4.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">New Year Eve Party</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-nightlife">
                  <span className="icon-dress" />
                  Nightlife
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/5.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type sale">sale</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-automotive">
                  <span className="icon-wrench" />
                  Automotive
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
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
                      <i className="fa fa-image" />3 photos
                    </a>
                  </div>
                </div>
                {/*./ section-header */}
              </div>
              {/*./ todo-overlay-info */}
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-beauty">
                  <span className="icon-grooming" />
                  Beauty
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/1.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type rated">top rated</h4>
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
                  <a href="listing-details.html">Marriott JW Classic Dinner</a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
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
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item status-closed">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/2.jpg" alt="Thmubnail" />
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
                  <a href="listing-details.html">Barcelo Aqua Blue Hotel </a>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-hotel">
                  <span className="icon-building" />
                  Hotels
                </a>
                <a href="listing-details.html" className="todo-status">
                  Closed
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
            {/*~~~~~ Start Popular Todo Item ~~~~~*/}
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/3.jpg" alt="Thmubnail" />
                </figure>
                {/*./ item-thumb */}
                <div className="todo-overlay-info">
                  <h4 className="todo-type offer">hot offer</h4>
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
                    The path of the righteous man is beset on all sides by the
                    iniquities.
                  </p>
                </div>
              </div>
              {/*./ todo-content */}
              <div className="todo-footer">
                <a href="#" className="todo-cat todo-cat-fitness">
                  <span className="icon-accessibility" />
                  Fitness
                </a>
                <a href="listing-details.html" className="todo-status">
                  Open Now
                </a>
              </div>
              {/*./ todo-footer */}
            </div>
            {/*~./ end popular todo item ~*/}
          </div>
        </div>
        {/*~./ end tab pane ~*/}
      </div>
      {/*~./ end filter tab content area ~*/}
    </section>
  );
};

export default ThirdPopularTodos;
