import React from "react";
import SiteNavigation from "./../components/assetscomponents/site-header-landing";
import ThirdFrontBanner from "../components/thirdpagecomponents/thirdfrontbanner";
import ThirdPopularCategories from "./../components/thirdpagecomponents/thirdpopularcategories";
import Process from "./../components/frontpagecomponents/process";
import ThirdPopularTodos from "../components/thirdpagecomponents/thirdpopulartodos";
import AppDownload from "../components/thirdpagecomponents/appdownload";
import LatestEvents from "../components/thirdpagecomponents/latestevents";
import Testimonaial from "./../components/frontpagecomponents/testimonaial";
import SiteFooter from "./../components/assetscomponents/sitefooter";

const ThirdFrontPage = () => {
  return (
    <>
      <SiteNavigation />

      <div className="site-content">
        <ThirdFrontBanner />
        <ThirdPopularCategories />
        <Process />
        <ThirdPopularTodos />
        <AppDownload />
        <LatestEvents />
        <Testimonaial />
      </div>
      <SiteFooter />
    </>
  );
};

export default ThirdFrontPage;
