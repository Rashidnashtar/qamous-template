import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import PricingSection from "../components/pricingcomponents/pricingsection";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Pricing = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Pricing & Packages"
        path="Pricing & Packages"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <PricingSection />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Pricing;
