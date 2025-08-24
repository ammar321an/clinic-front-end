import React from "react";
import TopHeader from "../../../components/Layouts/TopHeader";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImage="/images/page-banner1.jpg"
      />

      <ServiceDetailsContent />

      <Footer />
    </>
  );
}
