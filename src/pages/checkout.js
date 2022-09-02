import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import ShopingCheckout from "../components/checkoutcomponents/shopingcheckout";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Checkout = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Checkout"
        path="Checkout"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <ShopingCheckout />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Checkout;
