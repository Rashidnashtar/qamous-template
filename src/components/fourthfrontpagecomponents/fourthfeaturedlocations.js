import React from "react";

const FourthFeaturedLocations = () => {
  return (
    <div className="featured-locations-area featured-location-style-two ptb-100">
      <div className="container">
        <div className="row">
          {/*~~~~~ Start Section Header ~~~~~*/}
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">
                Top Featured <span>Locations</span>
              </h2>
              <p>Popular cities around the country</p>
              <div className="divider">
                <img src="assets/images/icon/divider.png" alt="icon" />
              </div>
            </div>
          </div>
          {/*./ section-header */}
        </div>
        <div className="row">
          {/*~~~~~ Start Location Card Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/1.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Paris</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
          </div>
          {/*~./ end location card item ~*/}
          {/*~~~~~ Start Location Card Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/2.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Newyork</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
          </div>
          {/*~./ end location card item ~*/}
          {/*~~~~~ Start Location Card Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/3.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Rome</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
          </div>
          {/*~./ end location card item ~*/}
          {/*~~~~~ Start Location Card Item ~~~~~*/}
          <div className="col-lg-3 col-md-6">
            <a href="#" className="location-card-item">
              <figure className="location-thumb">
                <img src="assets/images/featured/2/4.jpg" alt="Thmubnail" />
              </figure>
              {/*./ featured-media */}
              <div className="location-content">
                <h3 className="name">Aswan</h3>
                {/*./ name */}
              </div>
              {/*./ location-content */}
            </a>
          </div>
          {/*~./ end location card item ~*/}
        </div>
      </div>
    </div>
  );
};

export default FourthFeaturedLocations;
