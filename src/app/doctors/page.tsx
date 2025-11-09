import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import DoctorsCard from "@/components/Doctors/DoctorsCard";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Meet Our Qualified Doctors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors"
        bgImage="/images/page-banner4.jpg"
      />

      <DoctorsCard />

      <Footer />
    </>
  );
}
