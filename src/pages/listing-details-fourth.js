import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import FourthListingThumbnail from "../components/fourthlistingdetailscomponents/fourthlistingthumbnail";
import FourthMainWrapper from "../components/fourthlistingdetailscomponents/fourthmainwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const ListingDetailsFourth = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <FourthListingThumbnail />
        <FourthMainWrapper />
      </div>
      <SixthFooter />
    </>
  );
};

export default ListingDetailsFourth;
