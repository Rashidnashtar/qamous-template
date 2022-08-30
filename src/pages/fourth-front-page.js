import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import FourthFrontBanner from "../components/fourthfrontpagecomponents/fourthfrontbanner";
import ThirdPopularCategories from "../components/thirdfrontpagecomponents/thirdpopularcategories";
import FourthPopularTodos from "../components/fourthfrontpagecomponents/fourthpopulartodos";
import FourthFeaturedLocations from "../components/fourthfrontpagecomponents/fourthfeaturedlocations";
import ClientReview from "../components/fourthfrontpagecomponents/clientreview";
import Pricing from "../components/fourthfrontpagecomponents/pricing";
import SiteFooter from "./../components/assetscomponents/sitefooter";

const FourthFrontPage = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <FourthFrontBanner />
        <ThirdPopularCategories />
        <FourthPopularTodos />
        <FourthFeaturedLocations />
        <ClientReview />
        <Pricing />
      </div>
      <SiteFooter />
    </>
  );
};

export default FourthFrontPage;
