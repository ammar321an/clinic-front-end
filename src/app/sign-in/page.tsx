import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SignInForm from "../../components/Authentication/SignInForm";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        bgImage="/images/page-banner3.jpg"
      />

      <SignInForm />

      <Footer />
    </>
  );
}
