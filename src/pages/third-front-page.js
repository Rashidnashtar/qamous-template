import React from "react";
import SiteNavigation from "./../components/assetscomponents/site-header-landing";
import ThirdFrontBanner from "../components/thirdfrontpagecomponents/thirdfrontbanner";
import ThirdPopularCategories from "./../components/thirdfrontpagecomponents/thirdpopularcategories";
import Process from "../components/assetscomponents/process";
import ThirdPopularTodos from "../components/thirdfrontpagecomponents/thirdpopulartodos";
import AppDownload from "../components/thirdfrontpagecomponents/appdownload";
import LatestEvents from "../components/thirdfrontpagecomponents/latestevents";
import Testimonaial from "../components/assetscomponents/testimonaial";
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
