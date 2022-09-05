import React from "react";

const PricingSection = () => {
  return (
    <div className="pricing-subscription-section pricing-style-two ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter-pricing-tab">
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <a
                    className="active"
                    data-toggle="tab"
                    href="#user_pricing"
                    role="tab"
                  >
                    I'm User
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#business_pricing" role="tab">
                    I'm Business
                  </a>
                </li>
              </ul>
            </div>
            {/*~./ end filter pricing tab ~*/}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content filter-pricing-tab-content">
              {/*~~~~~ Start Tab Pane ~~~~~*/}
              <div
                className="tab-pane fade active show"
                id="user_pricing"
                role="tabpanel"
              >
                <div className="row pricing-table-list">
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Standard</p>
                        </div>
                        <div className="package-price">
                          <h2>Free</h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box active">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Silver</p>
                        </div>
                        <div className="package-price">
                          <h2>
                            60.00 <sub>$</sub>
                          </h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Golden</p>
                        </div>
                        <div className="package-price">
                          <h2>
                            60.00 <sub>$</sub>
                          </h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                </div>
              </div>
              {/*~./ end tab pane ~*/}
              {/*~~~~~ Start Tab Pane ~~~~~*/}
              <div
                className="tab-pane fade"
                id="business_pricing"
                role="tabpanel"
              >
                <div className="row pricing-table-list">
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Standard</p>
                        </div>
                        <div className="package-price">
                          <h2>Free</h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Silver</p>
                        </div>
                        <div className="package-price">
                          <h2>
                            60.00 <sub>$</sub>
                          </h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                  {/*~~~~~ Start Pricing Box ~~~~~*/}
                  <div className="col-lg-4 col-md-6">
                    <div className="pricing-box active">
                      <div className="pricing-header">
                        <div className="package-type">
                          <p>Golden</p>
                        </div>
                        <div className="package-price">
                          <h2>
                            60.00 <sub>$</sub>
                          </h2>
                          Per month
                        </div>
                      </div>
                      <div className="pricing-content">
                        <ul className="list">
                          <li>
                            Location Listings: <span>5</span>
                          </li>
                          <li>
                            Duration: <span>3 months</span>
                          </li>
                          <li>Business Planning</li>
                          <li>
                            Online Booking: <span>Yes</span>
                          </li>
                          <li>
                            Sponsored Listings: <span>No</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <a href="#" className="btn btn-plan">
                          GET NOW
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*~./ end pricing box ~*/}
                </div>
              </div>
              {/*~./ end tab pane ~*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
