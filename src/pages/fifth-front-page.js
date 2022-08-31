import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import FifthBanner from "../components/fifthfrontpagecomponents/fifthbanner";
import FifthPopularTodos from "../components/fifthfrontpagecomponents/fifthpopulartodos";
import Process from "../components/frontpagecomponents/process";
import FeaturedLocations from "../components/frontpagecomponents/featured-locations";
import PromoVideo from "../components/frontpagecomponents/promovideo";
import ClientReview from "../components/fourthfrontpagecomponents/clientreview";
import FifthFooter from "../components/fifthfrontpagecomponents/fifthfooter";

const FifthFrontPage = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <FifthBanner />
        <FifthPopularTodos />
        <Process />
        <FeaturedLocations />
        <PromoVideo />
        <ClientReview />
      </div>
      <FifthFooter />
    </>
  );
};

export default FifthFrontPage;
