"use client";

import React from "react";
import Link from "next/link";
import { BlogDetailData } from "@/data/dummy/blogPosts";
import { getContentComponent } from "./contentMapper";

interface BlogDetailsWrapperProps {
  blogDetail: BlogDetailData;
}

const BlogDetailsWrapper: React.FC<BlogDetailsWrapperProps> = ({ blogDetail }) => {
  const ContentComponent = getContentComponent(blogDetail.contentComponent);

  return (
    <div className="blog-details-area pt-100">
      <div className="container">
        <div className="row">
          <div>
            <div className="blog-details-item">
              <div className="blog-details-img">
                {/* Metadata section */}
                <ul>
                  <li>
                    <Link href="/blog">
                      <i className="icofont-businessman"></i> {blogDetail.author || "-"}
                    </Link>
                  </li>
                  <li>
                    <i className="icofont-calendar"></i>
                    {new Date(blogDetail.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </li>
                  {blogDetail.category && (
                    <li>
                      <i className="icofont-tag"></i> {blogDetail.category}
                    </li>
                  )}
                </ul>

                {/* Render dynamic content component */}
                {ContentComponent ? (
                  <ContentComponent images={blogDetail.images} />
                ) : (
                  <p>Content not found</p>
                )}
              </div>

              {/* Tags section */}
              {blogDetail.tags && blogDetail.tags.length > 0 && (
                <div className="blog-details-tags mt-4">
                  <h5>Tags:</h5>
                  <div className="flex gap-2 flex-wrap">
                    {blogDetail.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-primary text-white px-3 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Previous/Next navigation */}
              <div className="blog-details-previous mt-5">
                <div className="prev-next">
                  <ul>
                    <li>
                      <a href="#">Previous</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsWrapper;