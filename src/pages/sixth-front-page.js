import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import SixthFrontBanner from "../components/sixthfrontpagecomponents/sixthfrontbanner";
import SixthPopularCategories from "../components/sixthfrontpagecomponents/sixthpopularcategories";
import Process from "./../components/frontpagecomponents/process";
import ThirdPopularTodos from "../components/thirdfrontpagecomponents/thirdpopulartodos";
import SecondPromoVid from "../components/secondfrontpageconponents/secondpromovid";
import TipsAndAritcle from "../components/sixthfrontpagecomponents/tipsandaritcle";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const SixthFrontPage = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <SixthFrontBanner />
        <SixthPopularCategories />
        <Process />
        <ThirdPopularTodos />
        <SecondPromoVid />
        <TipsAndAritcle />
        <SixthFooter />
      </div>
    </>
  );
};

export default SixthFrontPage;
