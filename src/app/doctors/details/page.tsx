import React from "react";
import TopHeader from "../../../components/Layouts/TopHeader";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import AppointmentFormTwo from "../../../components/Common/AppointmentFormTwo";
import Footer from "../../../components/Layouts/Footer";
import DetailsContent from "@/components/Doctors/DetailsContent";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Dr. Sarah Taylor (Neurosurgeon)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctor Details"
        bgImage="/images/page-banner4.jpg"
      />

      <DetailsContent />

      <div className="pb-100">
        <AppointmentFormTwo />
      </div>

      <Footer />
    </>
  );
}
