"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestBlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog1.jpg"
                      alt="Blog"
                      width={366}
                      height={283}
                    />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog/details">
                      In this hospital there are special surgeon.
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et....
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog/details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="Blog"
                      width={366}
                      height={283}
                    />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog/details">
                      World AIDS Day, designated on 1 December
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et....
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog/details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="Blog"
                      width={366}
                      height={283}
                    />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog/details">
                      More than 80 clinical trials launch to test coronavirus
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et....
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog/details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
