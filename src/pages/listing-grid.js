import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/listinggirdpagecomponents/pagetitle";
import MainWrapper from "../components/listinggirdpagecomponents/mainwrapper";
import SixthFooter from "./../components/sixthfrontpagecomponents/sixthfooter";
const ListingGrid = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle />
      <div className="site-content">
        <MainWrapper />
        <SixthFooter />
      </div>
    </>
  );
};

export default ListingGrid;
