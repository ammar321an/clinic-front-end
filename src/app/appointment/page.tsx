import React, { Suspense } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

// Loading component
function AppointmentFormLoader() {
  return (
    <div className="appointment-area-two ptb-100">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    </div>
  );
}

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

      <Suspense fallback={<AppointmentFormLoader />}>
        <AppointmentForm />
      </Suspense>

      <Footer />
    </>
  );
}
