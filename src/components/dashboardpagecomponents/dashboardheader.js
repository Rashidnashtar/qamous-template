import React from "react";

const DashboardHeader = () => {
  return (
    <header className="dashborad-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="header-search-form">
              <form className="search-form" action="#" method="get">
                <div className="input-group">
                  <input
                    name="s"
                    className="form-controllar"
                    placeholder="Type in to search..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            {/*~~./ header-search-form ~~*/}
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header-right">
              <div className="user-registration-area dropdown">
                <a className="user-reg-btn" href="#">
                  <div className="user-thumb">
                    <img src="assets/images/comments/user.png" alt="img" />
                  </div>
                  <div className="user-name">
                    <span>Welcome</span> Mohamed Arafa
                  </div>
                </a>
              </div>
              {/*~~./ user-registration-area ~~*/}
              <div className="user-tools-right">
                <ul className="list">
                  <li>
                    <a href="#">
                      <span className="icon-settings4" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-coin-euro" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-worlwide2" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*~~./ user-tools-right ~~*/}
            </div>
            {/*~~./ header-right ~~*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
