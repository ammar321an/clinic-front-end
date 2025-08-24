import React from "react";
import TopHeader from "../../components/Layouts/TopHeader";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/HomeThree/MainBanner";
import AboutOurHospital from "../../components/HomeThree/AboutOurHospital";
import OurExpertise from "../../components/HomeThree/OurExpertise";
import Services from "../../components/HomeThree/Services";
import AboutUs from "../../components/HomeThree/AboutUs";
import VideoIntro from "../../components/Common/VideoIntro";
import OurDoctors from "../../components/Common/OurDoctors";
import Stats from "../../components/HomeThree/Stats";
import FeedbackSlider from "../../components/HomeThree/FeedbackSlider";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import NewsletterForm from "../../components/Common/NewsletterForm";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <MainBanner />

      <AboutOurHospital />

      <OurExpertise />

      <Services />

      <AboutUs />

      <VideoIntro />

      <OurDoctors />

      <div className="pb-100">
        <Stats />
      </div>

      <FeedbackSlider />

      <LatestBlogPost />

      <NewsletterForm />

      <Footer />
    </>
  );
}
