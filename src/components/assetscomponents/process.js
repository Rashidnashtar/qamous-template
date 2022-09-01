import SectionHeader from "./sectionHeader";
const Process = () => {
  return (
    <section
      id="process"
      className="our-work-process-section bg-image bg-gray ptb-100"
      style={{
        backgroundImage: 'url("/assets/images/bg/buliding-bg.png")',
      }}
    >
      <div className="container">
        <SectionHeader
          header="How Does It"
          boldHeader="Work"
          paragrah="Easy steps in few moments"
        />
        <div className="row">
          <div className="col-12">
            <div className="process-main-content">
              <div
                className="bg-line"
                style={{
                  backgroundImage: 'url("/assets/images/others/linearrow.png")',
                }}
              />
              {/*~./ end bg line ~*/}
              <div className="row process-list">
                {/*~./ Start Single Process ~*/}
                <div className="col-lg-3 col-md-6">
                  <div className="single-process">
                    <h3 className="process-no">1</h3>
                    <div className="single-process-inner">
                      <h2>Choose Location</h2>
                      <div className="icon">
                        <img
                          src="/assets/images/icon/process/1.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*~./ end single process ~*/}
                {/*~./ Start Single Process ~*/}
                <div className="col-lg-3 col-md-6">
                  <div className="single-process">
                    <h3 className="process-no">2</h3>
                    <div className="single-process-inner">
                      <h2>Pick Category</h2>
                      <div className="icon">
                        <img
                          src="/assets/images/icon/process/2.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*~./ end single process ~*/}
                {/*~./ Start Single Process ~*/}
                <div className="col-lg-3 col-md-6">
                  <div className="single-process">
                    <h3 className="process-no">3</h3>
                    <div className="single-process-inner">
                      <h2>Explore Place</h2>
                      <div className="icon">
                        <img
                          src="/assets/images/icon/process/3.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*~./ end single process ~*/}
                {/*~./ Start Single Process ~*/}
                <div className="col-lg-3 col-md-6">
                  <div className="single-process">
                    <h3 className="process-no">4</h3>
                    <div className="single-process-inner">
                      <h2>Enjoy Your Day</h2>
                      <div className="icon">
                        <img
                          src="/assets/images/icon/process/4.png"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*~./ end single process ~*/}
              </div>
            </div>
            {/*~./ end process main content ~*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
