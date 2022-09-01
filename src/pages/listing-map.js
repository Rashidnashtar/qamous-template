import React from "react";
import SiteNavigation from "./../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import MainListingMap from "../components/listingmapcomponents/mainlistingmap";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ListingMap = () => {
  return (
    <>
      <SiteNavigation />

      <div className="site-content">
        <PageTitle isLink backUrl="assets/images/header/2.jpg" />
        <MainListingMap />
      </div>
      <SixthFooter isNotBranded />
      {/*~./ end site content ~*/}
    </>
  );
};

export default ListingMap;
