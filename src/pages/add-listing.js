import React from "react";
import SiteNavigation from "./../components/assetscomponents/site-header-landing";
import PageTitle from "./../components/assetscomponents/pagetitle";
import AddListingSection from "../components/addlistingcomponents/addlistingsection";
import SixthFooter from "./../components/sixthfrontpagecomponents/sixthfooter";
const AddListing = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Adding Listing"
        path="Adding New Listing"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <AddListingSection />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default AddListing;
