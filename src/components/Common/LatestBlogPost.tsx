"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/dummy/blogPosts";
import { truncateText } from "@/lib/textUtils";

const LatestBlogPost: React.FC = () => {
    const latestPosts = [...blogPosts]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>
          <div className="row justify-content-center">
            {latestPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog-top">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative w-full bg-white flex items-center justify-center" style={{ width: '366px', height: '283px' }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={416}
                          height={283}
                          style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                          className="w-auto h-auto"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog-bottom">
                    <h3>
                      <Link href={`/blog/${post.slug}`}>
                        {truncateText(post.title,50)}
                      </Link>
                    </h3>
                    <p>{truncateText(post.excerpt, 100)}</p>
                    <ul>
                      <li>
                        <Link href={`/blog/${post.slug}`}>
                          Read More <i className="icofont-long-arrow-right"></i>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-calendar"></i>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit'
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-4">
            <div className="doctor-btn">
              <Link href="/blog">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
