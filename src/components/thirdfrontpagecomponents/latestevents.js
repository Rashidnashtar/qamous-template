import React from "react";

const LatestEvents = () => {
  return (
    <section className="latest-events-section ptb-100">
      <div className="container">
        <div className="row">
          {/*~~~~~ Start Section Header ~~~~~*/}
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">
                Latest <span>Events</span>
              </h2>
              <p>Our Hot Events</p>
              <div className="divider">
                <img src="assets/images/icon/divider.png" alt="icon" />
              </div>
            </div>
          </div>
          {/*./ section-header */}
        </div>
        <div className="row">
          {/*~~~~~ Start Single Event ~~~~~*/}
          <div className="col-lg-4 col-md-6">
            <article className="post hentry single-event">
              <div className="entry-thumb">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/post/grid/1.jpg" alt="post" />
                  </a>
                </figure>
                {/*./ thumb-wrap */}
                <div className="post-type">
                  <a href="post-details.html">
                    <span className="icon-video2" />
                  </a>
                </div>
                {/*./ post-type */}
                <div className="read-more-wrap">
                  <a href="post-details.html" className="read-more">
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/*./ entry-thumb */}
              <div className="content-entry-wrap">
                <div className="entry-meta-content">
                  <div className="entry-date">
                    <span>In 25 December 2019</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-time">
                    <span>2.00 PM</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-city">
                    <a href="#">Paris</a>
                  </div>
                  {/*./ entry-date */}
                </div>
                {/*./ thumb-wrap */}
                <div className="entry-content">
                  <h3 className="entry-title">
                    <a href="post-details.html">
                      the love of power is the demon of men &amp; women
                    </a>
                  </h3>
                  {/*./ entry-title */}
                </div>
                {/*./ entry-content */}
              </div>
              {/*./ content-entry-wrap */}
            </article>
          </div>
          {/*~./ end single event ~*/}
          {/*~~~~~ Start Single Event ~~~~~*/}
          <div className="col-lg-4 col-md-6">
            <article className="post hentry single-event">
              <div className="entry-thumb">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/post/grid/2.jpg" alt="post" />
                  </a>
                </figure>
                {/*./ thumb-wrap */}
                <div className="read-more-wrap">
                  <a href="post-details.html" className="read-more">
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/*./ entry-thumb */}
              <div className="content-entry-wrap">
                <div className="entry-meta-content">
                  <div className="entry-date">
                    <span>In 25 December 2019</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-time">
                    <span>2.00 PM</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-city">
                    <a href="#">Paris</a>
                  </div>
                  {/*./ entry-date */}
                </div>
                {/*./ thumb-wrap */}
                <div className="entry-content">
                  <h3 className="entry-title">
                    <a href="post-details.html">
                      Life is hard, and a lot of people come home tired from
                      work
                    </a>
                  </h3>
                  {/*./ entry-title */}
                </div>
                {/*./ entry-content */}
              </div>
              {/*./ content-entry-wrap */}
            </article>
          </div>
          {/*~./ end single event ~*/}
          {/*~~~~~ Start Single Event ~~~~~*/}
          <div className="col-lg-4 col-md-6">
            <article className="post hentry single-event">
              <div className="entry-thumb">
                <figure className="thumb-wrap">
                  <a href="post-details.html">
                    <img src="assets/images/post/grid/3.jpg" alt="post" />
                  </a>
                </figure>
                {/*./ thumb-wrap */}
                <div className="post-type">
                  <a href="post-details.html">
                    <span className="icon-camera2" />
                  </a>
                </div>
                {/*./ post-type */}
                <div className="read-more-wrap">
                  <a href="post-details.html" className="read-more">
                    LEARN MORE
                  </a>
                </div>
              </div>
              {/*./ entry-thumb */}
              <div className="content-entry-wrap">
                <div className="entry-meta-content">
                  <div className="entry-date">
                    <span>In 25 December 2019</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-time">
                    <span>2.00 PM</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-city">
                    <a href="#">Paris</a>
                  </div>
                  {/*./ entry-date */}
                </div>
                {/*./ thumb-wrap */}
                <div className="entry-content">
                  <h3 className="entry-title">
                    <a href="post-details.html">
                      The PC has improved the world in just about every area
                    </a>
                  </h3>
                  {/*./ entry-title */}
                </div>
                {/*./ entry-content */}
              </div>
              {/*./ content-entry-wrap */}
            </article>
          </div>
          {/*~./ end single event ~*/}
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
