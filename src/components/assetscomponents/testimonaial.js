import React from "react";

const Testimonaial = () => {
  return (
    <div
      id="testimonials"
      className="testimonial-section bg-fixed bg-overlay-gradient bg-image pt-60 pb-100"
      style={{
        backgroundImage: 'url("/assets/images/bg/testimonial-bg.jpg")',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              id="testimonial-carousel"
              className="owl-carousel carousel-nav-dots"
            >
              {/*~~~~~ Start Single Testimonial ~~~~~*/}
              <div className="single-testimonial text-center">
                <div className="quote-icon">
                  <img src="/assets/images/icon/quote.png" alt="thumb" />
                </div>
                <div className="client-thumb">
                  <img src="/assets/images/testimonail/1.jpg" alt="thumb" />
                </div>
                <div className="info text-white">
                  <p>
                    Imagination… What we can easily see is only a small
                    percentage of what is possible.
                  </p>
                  <h5 className="name">Fatma Hassan</h5>
                </div>
              </div>
              {/*~./ end single testimonail ~*/}
              {/*~~~~~ Start Single Testimonial ~~~~~*/}
              <div className="single-testimonial text-center">
                <div className="quote-icon">
                  <img src="/assets/images/icon/quote.png" alt="thumb" />
                </div>
                <div className="client-thumb">
                  <img src="/assets/images/testimonail/1.jpg" alt="thumb" />
                </div>
                <div className="info text-white">
                  <p>
                    Imagination… What we can easily see is only a small
                    percentage of what is possible.
                  </p>
                  <h5 className="name">Fatma Hassan</h5>
                </div>
              </div>
              {/*~./ end single testimonail ~*/}
              {/*~~~~~ Start Single Testimonial ~~~~~*/}
              <div className="single-testimonial text-center">
                <div className="quote-icon">
                  <img src="/assets/images/icon/quote.png" alt="thumb" />
                </div>
                <div className="client-thumb">
                  <img src="/assets/images/testimonail/1.jpg" alt="thumb" />
                </div>
                <div className="info text-white">
                  <p>
                    Imagination… What we can easily see is only a small
                    percentage of what is possible.
                  </p>
                  <h5 className="name">Fatma Hassan</h5>
                </div>
              </div>
              {/*~./ end single testimonail ~*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonaial;
