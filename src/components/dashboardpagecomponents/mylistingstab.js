import React from "react";

const MylistingsTab = () => {
  return (
    <div className="tab-pane fade" id="dashboard_listing" role="tabpanel">
      <div className="container-fluid">
        <div className="row">
          {/*~~~~~ Start Popular Todo Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
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
          </div>
          {/*~./ end popular todo item ~*/}
          {/*~~~~~ Start Popular Todo Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <div className="popular-todo-item">
              <div className="todo-thumbnail-area">
                <figure className="item-thumb">
                  <img src="assets/images/todo/1/5.jpg" alt="Thmubnail" />
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
          </div>
          {/*~./ end popular todo item ~*/}
          {/*~~~~~ Start Popular Todo Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
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
          </div>
          {/*~./ end popular todo item ~*/}
          {/*~~~~~ Start Popular Todo Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
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
          </div>
          {/*~./ end popular todo item ~*/}
        </div>
      </div>
    </div>
  );
};

export default MylistingsTab;
