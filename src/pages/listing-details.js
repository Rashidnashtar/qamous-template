import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import ListingThumbnail from "../components/listingdetailscomponents/listingthumbnail";
import MainListingDetails from "../components/listingdetailscomponents/mainlistingdetails";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ListingDetails = () => {
  return (
    <>
      <SiteNavigation isDark />
      <div className="site-content">
        <ListingThumbnail />
        <MainListingDetails />
      </div>
      <SixthFooter />
    </>
  );
};

export default ListingDetails;
