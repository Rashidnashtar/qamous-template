import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import ThirdListingThumbnail from "../components/thirdlistingdetailscomponents/thirdlistingthumbnail";
import ThirdMainWrapper from "../components/thirdlistingdetailscomponents/thirdmainwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ListingDetailsThird = () => {
  return (
    <>
      <SiteNavigation />
      {/*~./End site header ~*/}
      {/**********************************************************/}
      {/********************** SITE CONTENT **********************/}
      {/**********************************************************/}
      <div className="site-content">
        <ThirdListingThumbnail />
        <ThirdMainWrapper />
      </div>
      <SixthFooter />
    </>
  );
};

export default ListingDetailsThird;
