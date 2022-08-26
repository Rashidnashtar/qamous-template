import SectionHeader from "./sectionHeader";
const FeaturedLocations = () => (
  <div className="featured-locations-area featured-location-style-one ptb-100">
    <div className="container">
      <SectionHeader />
      <div className="row">
        <div className="col-12">
          <div className="featured-locations-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-12">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/1.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="featured-type featured">
                        TOP <br />
                        FEATURED
                      </div>
                      <div className="location-content">
                        <h3 className="name">Boston</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/2.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="location-content">
                        <h3 className="name">Philadelphia</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/3.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="location-content">
                        <h3 className="name">Washington</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/4.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="location-content">
                        <h3 className="name">Chicago</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-lg-6 col-md-6">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/5.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="location-content">
                        <h3 className="name">Los Angeles</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                  {/*~~~~~ Start Location Card Item ~~~~~*/}
                  <div className="col-12">
                    <a href="#" className="location-card-item">
                      <figure className="location-thumb">
                        <img
                          src="/assets/images/featured/1/6.jpg"
                          alt="Thmubnail"
                        />
                      </figure>
                      {/*./ featured-media */}
                      <div className="featured-type trending">
                        <span className="fa fa-bolt" />
                      </div>
                      <div className="location-content">
                        <h3 className="name">New York</h3>
                        {/*./ name */}
                      </div>
                      {/*./ location-content */}
                    </a>
                  </div>
                  {/*~./ end location card item ~*/}
                </div>
              </div>
            </div>
          </div>
          {/*./ featured-locations-content */}
        </div>
      </div>
    </div>
  </div>
);
export default FeaturedLocations;
