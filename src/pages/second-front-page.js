import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import SecondFrontBannar from "../components/secondfrontpageconponents/secondfront-bannar";
import PopularCategories from "../components/secondfrontpageconponents/popularcategories";
import SecondPopularTodos from "../components/secondfrontpageconponents/secondfrontpopulartodos";
import SecondPromoVid from "../components/secondfrontpageconponents/secondpromovid";
import FeaturedLocations from "./../components/frontpagecomponents/featured-locations";
import SiteFooter from "./../components/assetscomponents/sitefooter";
import Process from "../components/assetscomponents/process";
import Testimonaial from "../components/assetscomponents/testimonaial";
const SecondFrontPage = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <SecondFrontBannar />
        <PopularCategories />
        <SecondPopularTodos />
        <Process />
        <SecondPromoVid />
        <FeaturedLocations />
        <Testimonaial />
        <SiteFooter />
      </div>
    </>
  );
};

export default SecondFrontPage;
