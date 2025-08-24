import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import DepartmentsCard from "../../components/Departments/DepartmentsCard";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Departments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Departments"
        bgImage="/images/page-banner4.jpg"
      />

      <DepartmentsCard />

      <Footer />
    </>
  );
}
