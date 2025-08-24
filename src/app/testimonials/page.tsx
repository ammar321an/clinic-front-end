import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import OurExpertise from "../../components/HomeOne/OurExpertise";
import TestimonialSlider from "../../components/Common/TestimonialSlider";
import OurDoctors from "../../components/Common/OurDoctors";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImage="/images/page-banner3.jpg"
      />

      <div className="pt-100">
        <OurExpertise />
      </div>

      <TestimonialSlider />

      <OurDoctors />

      <Footer />
    </>
  );
}
