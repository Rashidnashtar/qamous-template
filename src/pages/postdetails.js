import React from "react";
import SiteNavigation from "../components/assetscomponents/site-header-landing";
import PostThumbnail from "../components/postdetailscomponents/postthumbnail";
import PostMainWrapper from "../components/postdetailscomponents/postmainwrapper";
import SixthFooter from "./../components/sixthfrontpagecomponents/sixthfooter";

const PostDetails = () => {
  return (
    <>
      <SiteNavigation />
      <div className="site-content">
        <PostThumbnail />
        <PostMainWrapper />
      </div>
      <SixthFooter isNotBranded />
    </>
  );
};

export default PostDetails;
