import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import ShoppingCart from "../components/cartcomponents/shoppingcart";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Cart = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Cart"
        path="Cart"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <ShoppingCart />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Cart;
