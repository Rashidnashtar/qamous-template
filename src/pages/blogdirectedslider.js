import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import LeftMainWrapper from "./../components/blogdirectedslidercomponents/leftmainwrapper";
import RightMainWrapper from "./../components/blogdirectedslidercomponents/rightmainwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const BlogDirecteSlider = ({ isLeft }) => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Tips & Articles"
        path="Tips & Articles"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        {isLeft ? <LeftMainWrapper /> : <RightMainWrapper />}
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default BlogDirecteSlider;
