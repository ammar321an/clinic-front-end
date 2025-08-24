import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomeFour/MainBanner";
import Stats from "../../components/HomeFour/Stats";
import AboutCovid19 from "../../components/HomeFour/AboutCovid-19";
import Services from "../../components/HomeFour/Services";
import OurExpertise from "../../components/HomeFour/OurExpertise";
import SymptomsCovid19 from "../../components/HomeFour/SymptomsCovid19";
import VideoIntro from "../../components/Common/VideoIntro";
import OurDoctors from "../../components/Common/OurDoctors";
import FaqSection from "../../components/Common/FaqSection";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import NewsletterForm from "../../components/Common/NewsletterForm";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <MainBanner />

      <Stats />

      <AboutCovid19 />

      <Services />

      <OurExpertise />

      <SymptomsCovid19 />

      <VideoIntro />

      <OurDoctors />

      <FaqSection />

      <LatestBlogPost />

      <NewsletterForm />

      <Footer />
    </>
  );
}
