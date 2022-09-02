import React from "react";

const PostThumbnail = () => {
  return (
    <div className="single-post-thumbnail-area">
      <div
        className="post-thumb bg-image bg-overlay"
        style={{ backgroundImage: "url(assets/images/post/single/1.jpg)" }}
      />
      <div className="post-header single-post-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="content-entry-wrap">
                <div className="entry-meta-content">
                  <div className="entry-date">
                    in
                    <span>25 December 2019</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-views">
                    <span>3 Min Read</span>
                  </div>
                  {/*./ entry-date */}
                  <div className="entry-viewed">
                    <span>11K Viewed </span>
                  </div>
                  {/*./ entry-category */}
                  <div className="entry-comment">
                    <span>64 Comments</span>
                  </div>
                  {/*./ entry-comment */}
                </div>
                {/*./ entry-meta-content */}
                <h3 className="entry-title">
                  Serena Williams can 'absolutely' break Court's Grand Slam
                  record
                </h3>
                {/*./ entry-title */}
              </div>
              {/*./ content-entry-wrap */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostThumbnail;
