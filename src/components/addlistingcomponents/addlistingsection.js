import React from "react";

const AddListingSection = () => {
  return (
    <div className="add-listing-page-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="add-listing-tab" className="step-app">
              <ul className="step-steps">
                <li>
                  <a href="#tab_step1">
                    <span className="number" />
                    <span className="step-name">OVERALL INFORMATION</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step2">
                    <span className="number" />
                    <span className="step-name">GALLERY &amp; VIDEO</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step3">
                    <span className="number" />
                    <span className="step-name">Location</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step4">
                    <span className="number" />
                    <span className="step-name">Amenities</span>
                  </a>
                </li>
                <li>
                  <a href="#tab_step5">
                    <span className="number" />
                    <span className="step-name">confirmation</span>
                  </a>
                </li>
              </ul>
              {/*~~./ step-steps ~~*/}
              <div className="step-content">
                <div className="step-tab-panel step-tab-info" id="tab_step1">
                  <div className="tab-from-content">
                    <div className="title-icon">
                      <h3 className="title">
                        <span className="icon-comment" />
                        Overall Information
                      </h3>
                    </div>
                    {/*~~./ title-icon ~~*/}
                    <form
                      className="default-form"
                      id="listinfo"
                      name="listinfo"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-controllar"
                              placeholder="Listing Title"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              className="form-controllar"
                              name="name"
                              placeholder="Keywords should be separated by commas"
                              required=""
                              type="text"
                              id="tag-keyword"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <select className="custom-select category">
                              <option>Category</option>
                              <option>Beauty</option>
                              <option>Nightlife</option>
                              <option>Hotels</option>
                              <option>Automotive</option>
                              <option>Travels</option>
                              <option>Real Estates</option>
                              <option>Shopping</option>
                            </select>
                            {/*~./ category ~*/}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              className="form-controllar"
                              name="name"
                              placeholder="Description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*~~./ default-form ~~*/}
                  </div>
                </div>
                {/*~~./ step-tab-info ~~*/}
                <div className="step-tab-panel step-tab-gallery" id="tab_step2">
                  <div className="tab-from-content">
                    <div className="title-icon">
                      <h3 className="title">
                        <span className="icon-comment" />
                        GALLERY &amp; VIDEO
                      </h3>
                    </div>
                    {/* title-icon */}
                    <form className="default-form" action="#">
                      <div className="row">
                        <div className="col-12">
                          <div className="custom-file">
                            <div className="add-gallery-text">
                              <i className="fa fa-picture-o" />
                              <span> Click here or drop files to upload</span>
                            </div>
                            <input name="photo" type="file" />
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*~~./ default-form ~~*/}
                  </div>
                </div>
                {/*~~./ step-tab-panel ~~*/}
                <div
                  className="step-tab-panel step-tab-location"
                  id="tab_step3"
                >
                  <div className="tab-from-content">
                    <div className="title-icon">
                      <h3 className="title">
                        <span className="icon-location3" />
                        Add Location
                      </h3>
                    </div>
                    {/* title-icon */}
                    <form
                      className="default-form"
                      id="listlocation"
                      name="listlocation"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-controllar"
                              placeholder="Address"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-controllar"
                              placeholder="Temporary Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <select className="custom-select state">
                              <option>State</option>
                              <option>State one</option>
                              <option>State Two</option>
                              <option>State Three</option>
                              <option>State Four</option>
                              <option>State Five</option>
                              <option>State Six</option>
                            </select>
                            {/*~./ State ~*/}
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <select className="custom-select city">
                              <option>City</option>
                              <option>City one</option>
                              <option>City Two</option>
                              <option>City Three</option>
                              <option>City Four</option>
                              <option>City Five</option>
                              <option>City Six</option>
                            </select>
                            {/*~./ city ~*/}
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <select className="custom-select country">
                              <option>Filter By Country</option>
                              <option>Algeria</option>
                              <option>Australia</option>
                              <option>Angola</option>
                              <option>India</option>
                              <option>New York</option>
                              <option>Bangladesh</option>
                            </select>
                            {/*~./ country ~*/}
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-controllar"
                              placeholder="Zip-Code "
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*~~./ default-form ~~*/}
                  </div>
                </div>
                {/*~~./ step-tab-panel ~~*/}
                <div
                  className="step-tab-panel step-tab-amenities"
                  id="tab_step4"
                >
                  <div className="tab-from-content">
                    <div className="title-icon">
                      <h3 className="title">
                        <span className="icon-price-tag3" />
                        Amenities
                      </h3>
                    </div>
                    {/* title-icon */}
                    <form className="default-form" id="listcat" name="listcat">
                      <div className="row">
                        <div className="col-12">
                          <div className="tags-form-group">
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag0"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag0" className="listtag">
                                Coupons
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag1"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag1" className="listtag">
                                {" "}
                                Smoking Allowed
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag2"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag2" className="listtag">
                                Accessories
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag3"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag3" className="listtag">
                                Camping
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag4"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag4" className="listtag">
                                {" "}
                                Field trips
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag5"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag5" className="listtag">
                                Getway
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="filtertag6"
                                type="checkbox"
                              />
                              <label htmlFor="filtertag6" className="listtag">
                                Hot Spots
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                          </div>
                          {/*~./ tags-form-group ~*/}
                        </div>
                      </div>
                    </form>
                    {/*~~./ default-form ~~*/}
                  </div>
                </div>
                {/*~~./ step-tab-panel ~~*/}
                <div className="step-tab-panel" id="tab_step5">
                  <div className="tab-from-content">
                    <div className="title-icon">
                      <h3 className="title">
                        <span className="icon-price-tag3" />
                        Confirmation
                      </h3>
                    </div>
                    {/* title-icon */}
                    <form className="default-form" action="#">
                      <div className="row">
                        <div className="col-12">
                          <div className="add-list-content tags-form-group">
                            <div className="form-group">
                              <input
                                name="tag"
                                id="chickpolicy"
                                type="checkbox"
                              />
                              <label htmlFor="chickpolicy" className="listtag">
                                I Agree to Qamous's{" "}
                                <a href="#">Privacy Policy</a>
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                            <div className="form-group">
                              <input
                                name="tag"
                                id="chickservice"
                                type="checkbox"
                              />
                              <label htmlFor="chickservice" className="listtag">
                                I Agree to Qamous's{" "}
                                <a href="#">Terms of Services</a>
                              </label>
                            </div>
                            {/*~./ form-group ~*/}
                          </div>
                          {/*~./ add-list-content ~*/}
                        </div>
                      </div>
                    </form>
                    {/*~~./ default-form ~~*/}
                  </div>
                </div>
                {/*~~./ step-tab-panel ~~*/}
              </div>
              {/*~~./ step-content ~~*/}
              <div className="step-footer step-tab-pager">
                <button data-direction="prev" className="btn btn-default">
                  PREVIOUS
                </button>
                <button data-direction="next" className="btn btn-default">
                  Next
                </button>
                <button data-direction="finish" className="btn btn-default">
                  Finish
                </button>
              </div>
              {/*~~./ step-footer ~~*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListingSection;
