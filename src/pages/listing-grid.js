import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import MainWrapper from "../components/listinggirdpagecomponents/mainwrapper";
import SixthFooter from "./../components/sixthfrontpagecomponents/sixthfooter";
const ListingGrid = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Food & Drinks"
        path="listing"
        backUrl="assets/images/header/2.jpg"
      />
      <div className="site-content">
        <MainWrapper />
        <SixthFooter isNotBranded />
      </div>
    </>
  );
};

export default ListingGrid;
