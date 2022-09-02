import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "./../components/assetscomponents/pagetitle";
import ShopSection from "../components/shopcomponents/shopsection";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Shop = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Products"
        path="Shop"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <ShopSection />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Shop;
