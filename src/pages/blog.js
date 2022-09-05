import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PageTitle from "../components/assetscomponents/pagetitle";
import BlogMainWrapper from "../components/blogcomponents/blogmainwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const Blog = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Tips & Articles"
        path="Tips & Articles"
        backUrl="assets/images/header/1.jpg"
      />
      <div className="site-content">
        <BlogMainWrapper />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default Blog;
