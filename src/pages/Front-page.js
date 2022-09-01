import SiteNavigation from "../components/assetscomponents/site-header-landing";
import FrontBanner from "../components/frontpagecomponents/frontpage-banner";
import FeaturedLocations from "../components/frontpagecomponents/featured-locations";
import PromoVideo from "../components/frontpagecomponents/promovideo";
import PopularTodos from "../components/frontpagecomponents/populartodos";
import Process from "../components/assetscomponents/process";
import Testimonaial from "../components/assetscomponents/testimonaial";
import SiteFooter from "../components/assetscomponents/sitefooter";
import HeaderSearchModel from "../components/frontpagecomponents/headersearchmodel";

const FrontPage = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <FrontBanner />
        <FeaturedLocations />
        <PromoVideo />
        <PopularTodos />
        <Process />
        <Testimonaial />
        <SiteFooter />
        <HeaderSearchModel />
      </div>
    </>
  );
};
export default FrontPage;
