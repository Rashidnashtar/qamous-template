import React from "react";

const OverviewTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="dashboard_overview"
      role="tabpanel"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="default-form-area">
              <h3 className="headline">Net Sales</h3>
              <div className="row">
                <div className="col-xl-4">
                  <h6>This Week</h6>
                  <h4 className="color-primary">$5500.00</h4>
                </div>
                <div className="col-xl-4">
                  <h6>Previous Week</h6>
                  <h4 className="color-primary">$6550.00</h4>
                </div>
              </div>
              <div
                id="simple-line-chart"
                className="ct-chart ct-golden-section"
              />
            </div>
            {/*~./ end default form area ~*/}
          </div>
          <div className="col-lg-3">
            <div className="default-form-area">
              <h3 className="headline">tickets</h3>
              <div className="tickets text-center">
                <div className="position-relative d-inline-block">
                  <div id="circle" />
                  <div className="seat-content">
                    <h2>90</h2>
                    <span>Sold Seats</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6>Total Seats</h6>
                    <h4 className="color-primary">$5500.00</h4>
                  </div>
                  <div className="col-6">
                    <h6>Sold Seats</h6>
                    <h4 className="color-primary">$6550.00</h4>
                  </div>
                </div>
              </div>
              {/*~./ end tickets ~*/}
            </div>
            {/*~./ end default form area ~*/}
          </div>
          <div className="col-lg-3">
            <div className="default-form-area">
              <h3 className="headline">upcoming events</h3>
              <div className="upcoming-events">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          Event Name
                          <a href="#">
                            <span className="icon-location" /> Location
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          Event Name
                          <a href="#">
                            <span className="icon-location" /> Location
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          Event Name
                          <a href="#">
                            <span className="icon-location" /> Location
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          Event Name
                          <a href="#">
                            <span className="icon-location" /> Location
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*~./ end upcoming events ~*/}
            </div>
            {/*~./ end default form area ~*/}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="default-form-area">
              <h3 className="headline">Recent Sells</h3>
              <div className="upcoming-events">
                <div className="row">
                  <div className="col-xl-4">
                    <h6>This Week</h6>
                    <h4 className="color-primary">$5500.00</h4>
                  </div>
                  <div className="col-xl-4">
                    <h6>Previous Week</h6>
                    <h4 className="color-primary">$6550.00</h4>
                  </div>
                </div>
                <div className="table-responsive mt-15">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          John Doe
                          <a href="#"> Event Name Here</a>
                        </td>
                        <td>X1</td>
                        <td>165</td>
                        <td>
                          <div className="dropdown custom-dropdown">
                            <div data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-ellipsis-v" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          John Doe
                          <a href="#"> Event Name Here</a>
                        </td>
                        <td>X1</td>
                        <td>165</td>
                        <td>
                          <div className="dropdown custom-dropdown">
                            <div data-toggle="dropdown">
                              <i className="fa fa-ellipsis-v" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          John Doe
                          <a href="#"> Event Name Here</a>
                        </td>
                        <td>X1</td>
                        <td>165</td>
                        <td>
                          <div className="dropdown custom-dropdown">
                            <div data-toggle="dropdown">
                              <i className="fa fa-ellipsis-v" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/comments/user.png" alt="" />
                        </td>
                        <td>
                          John Doe
                          <a href="#"> Event Name Here</a>
                        </td>
                        <td>X1</td>
                        <td>165</td>
                        <td>
                          <div className="dropdown custom-dropdown">
                            <div data-toggle="dropdown">
                              <i className="fa fa-ellipsis-v" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/*~./ end upcoming events ~*/}
            </div>
            {/*~./ end default form area ~*/}
          </div>
          <div className="col-lg-3">
            <div className="default-form-area">
              <h3 className="headline">Total Seats</h3>
              <div className="total-seats text-center">
                <div className="position-relative d-inline-block">
                  <div id="circle1" />
                  <div className="seat-content">
                    <h2>350</h2>
                    <span>Total Sells</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6>Total Seats</h6>
                    <h4 className="color-primary">$5500.00</h4>
                  </div>
                  <div className="col-6">
                    <h6>Sold Seats</h6>
                    <h4 className="color-primary">$6550.00</h4>
                  </div>
                </div>
              </div>
              {/*~./ end total seats ~*/}
              <h5 className="m-t-30 m-b-15">
                Sold Seats <span className="pull-right">95</span>
              </h5>
              <div className="progress">
                <div
                  className="progress-bar bg-danger wow animated progress-animated"
                  style={{ width: "85%", height: 4 }}
                  role="progressbar"
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              {/*~./ end progress ~*/}
            </div>
            {/*~./ end default form area ~*/}
          </div>
          <div className="col-lg-3">
            <div className="default-form-area">
              <h3 className="headline">Online Sells</h3>
              <div className="row">
                <div className="col">
                  <h6>Rough Cost</h6>
                  <h4 className="color-primary">$5500.00</h4>
                </div>
              </div>
              <div
                id="simple-line-chart2"
                className="ct-chart ct-golden-section"
              />
            </div>
            {/*~./ end default form area ~*/}
            <div className="default-form-area">
              <h3 className="headline">Email Compaing</h3>
              <div className="campaign-progress">
                <p>
                  Send Emails <span className="pull-right">+165</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger wow animated progress-animated"
                    style={{ width: "85%", height: 4 }}
                    role="progressbar"
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
                <p>
                  Clicks <span className="pull-right">+355</span>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger wow animated progress-animated"
                    style={{ width: "85%", height: 4 }}
                    role="progressbar"
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              {/*~./ end campaign progress ~*/}
            </div>
            {/*~./ end default form area ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
