import SiteNavigation from "../components/site-header-landing";
import FrontBanner from "../components/frontpage-banner";
import FeaturedLocations from "../components/featured-locations";
import PromoVideo from "../components/promovideo";
import PopularTodos from "../components/populartodos";
import Process from "../components/process";
import Testimonaial from "../components/testimonaial";
import SiteFooter from "../components/sitefooter";
import HeaderSearchModel from "../components/headersearchmodel";
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

      {/*~./ end site footer ~*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Start Header Search Model
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
    </>
  );
};
export default FrontPage;
