import React from "react";

const SettingTab = () => {
  return (
    <div className="tab-pane fade" id="dashboard_setting" role="tabpanel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="overall-info-area default-form-area">
              <form className="default-form" action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="headline">Overall Information</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-controllar"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  {/*~./ col-lg-6 ~*/}
                  <div className="col-lg-6">
                    <h3 className="headline">Location</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-controllar"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  {/*~./ col-lg-6 ~*/}
                  <div className="col-12">
                    <div className="form-submit form-group">
                      <button className="btn btn-default">Save</button>
                      <button className="btn btn-default btn-default2">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/*~./ default-form ~*/}
            </div>
            {/*~./ default-form-area ~*/}
          </div>
          <div className="col-lg-4">
            <div className="overall-info-area default-form-area">
              <form className="default-form" action="#">
                <div className="row">
                  <div className="col-12">
                    <h3 className="headline">Change Password</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-controllar"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-controllar"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-submit form-group">
                      <button className="btn btn-default">
                        Change Password
                      </button>
                    </div>
                  </div>
                  {/*~./ col-lg-6 ~*/}
                </div>
              </form>
              {/*~./ default-form ~*/}
            </div>
            {/*~./ default-form-area ~*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingTab;
