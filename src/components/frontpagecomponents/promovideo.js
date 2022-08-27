const PromoVideo = () => (
  <div className="promo-video-section promo-video-style-one bg-gradient pt-20">
    <div
      className="bg-image bg-map-image"
      style={{ backgroundImage: 'url("/assets/images/bg/map-bg.png")' }}
    />
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="promo-video-content text-white ptb-100">
            <a
              className="video-btn"
              href="https://www.youtube.com/watch?v=cn7AFhVEI5o&t=4s"
            >
              <div className="icon">
                <i className="fa fa-play" />
              </div>
            </a>
            <h2>Promote your business with us &amp; Get off 45%</h2>
            <a className="btn btn-default" href="#">
              submit today
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="promo-video-thumb text-right">
            <img src="/assets/images/promo-video/1.png" alt="thumb" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PromoVideo;
