import React from "react";
import PageTitle from "../components/assetscomponents/pagetitle";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import BlogListWrapper from "../components/bloglistcomponents/bloglistwrapper";
import SixthFooter from "../components/sixthfrontpagecomponents/sixthfooter";
const BlogList = () => {
  return (
    <>
      <SiteNavigation />
      <PageTitle
        title="Tips & Articles"
        path="Tips & Articles"
        backUrl="assets/images/header/1.jpg"
      />
      <BlogListWrapper />
      <div className="site-content"></div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default BlogList;
