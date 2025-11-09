import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment"
        bgImage="/images/page-banner2.jpg"
      />

      <AppointmentForm />

      <Footer />
    </>
  );
}
