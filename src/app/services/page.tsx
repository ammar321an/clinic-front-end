import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesCard from "../../components/Services/ServicesCard";
import OurExpertise from "../../components/Services/OurExpertise";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        bgImage="/images/page-banner1.jpg"
      />

      <ServicesCard />

      <OurExpertise />

      <Footer />
    </>
  );
}
