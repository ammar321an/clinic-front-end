import React from "react";
import TopHeader from "../../../components/Layouts/TopHeader";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import LatestBlogPost from "../../../components/Blog/LatestBlogPost";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImage="/images/page-banner4.jpg"
      />

      <BlogDetailsContent />

      <LatestBlogPost />

      <Footer />
    </>
  );
}
