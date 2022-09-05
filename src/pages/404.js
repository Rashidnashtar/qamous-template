import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import SixthFooter from "./../components/sixthfrontpagecomponents/sixthfooter";
const ErrorPage = () => {
  return (
    <>
      <SiteNavigation isDark />
      {/**********************************************************/}
      {/********************** SITE CONTENT **********************/}
      {/**********************************************************/}
      <div className="site-content">
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Error Page Section
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <section className="error-page-section bg-gray2 ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="error-page-content">
                  <h2>This page not be found</h2>
                  <p>
                    We are really sorry, but the page you requested is missing..
                    Perhaps searching again can help. Or back to{" "}
                    <a href="index-2.html">home page</a>
                  </p>
                  <div className="search-form-area">
                    <form className="search-form" action="#" method="get">
                      <div className="input-group">
                        <input
                          type="search"
                          name="s"
                          className="form-controllar"
                          placeholder="What are you looking for?"
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-default"
                            type="submit"
                            id="submit-btn"
                          >
                            search now
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                {/*/.error-page-content*/}
              </div>
              {/*/.col-lg-6*/}
              <div className="col-lg-6">
                <div className="error-thumbnail text-center">
                  <img src="assets/images/404.png" alt="Error" />
                </div>
                {/*/.error-thumbnail*/}
              </div>
            </div>
            {/*/.row*/}
          </div>
        </section>
        {/*~./ end error page section ~*/}
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default ErrorPage;
