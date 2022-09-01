import React from "react";
import SiteNavigation from "./../components/assetscomponents/site-header-landing";
import SecondListingThumbnail from "../components/secondlistingdetailscomponents/secondlistingthumnail";
import SecondMainWrapper from "../components/secondlistingdetailscomponents/secondmainwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ListingDetailsSecond = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <SecondListingThumbnail />
        <SecondMainWrapper />
      </div>
      <SixthFooter />
    </>
  );
};

export default ListingDetailsSecond;
