"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <Image
                    src="/images/about1.jpg"
                    alt="About"
                    width={626}
                    height={552}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <Image
                  src="/images/about-shape1.png"
                  alt="About"
                  width={556}
                  height={712}
                />

                <h2>About Dr Asyraf Clinic</h2>

                <p>
                  Klinik Pakar Dr. Asyraf beroperasi di Hospital Pakar KPJ Kajang, 
                  menawarkan perkhidmatan obstetrik dan ginekologi yang menyeluruh. 
                  Di bawah kepakaran Dr. Asyraf, klinik ini menyediakan rawatan moden 
                  seperti pembedahan invasif minima, penjagaan kehamilan, rawatan 
                  hormon, dan saringan kesihatan wanita, semuanya dijalankan dengan 
                  pendekatan profesional, selamat dan penuh empati terhadap setiap pesakit.{" "}
                </p>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Browse Our Website
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Choose Service
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Send Messege
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
