import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import ProcessSection from "../components/howitworkcomponents/processsection";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const HowItWork = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="How It Works"
        path="How It Works"
        backUrl="assets/images/header/1.jpg"
      />

      <div className="site-content">
        <ProcessSection />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default HowItWork;
