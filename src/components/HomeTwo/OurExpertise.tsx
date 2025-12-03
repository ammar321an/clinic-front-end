"use client";

import React from "react";
import Image from "next/image";

const OurExpertise: React.FC = () => {
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <span>Speciality</span>
                  <h2>Our Expertise</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0" style={{ rowGap: '20px' }}>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Certified Doctors</h3>
                        <p>
                          Doktor bertauliah dengan kepakaran tinggi dalam memberikan rawatan terbaik kepada pesakit.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>More Stuff</h3>
                        <p>
                          Pasukan perubatan dan sokongan yang berpengalaman bagi memastikan layanan terbaik kepada setiap pesakit.                        
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Enough Lab</h3>
                        <p>
                          Doktor bertugas sepanjang masa bagi memastikan rawatan segera dan berterusan untuk pesakit.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>24 Hour Doctor</h3>
                        <p>
                          Perkhidmatan doktor sepanjang masa bagi memastikan rawatan diterima tanpa kelewatan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div
                className="speciality-item speciality-right"
                style={{ backgroundImage: `url(/images/about4.jpg)` }}
              >
                <Image
                  src="/images/about4.jpg"
                  alt="Speciality"
                  width={845}
                  height={850}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Emergency Call</h3>
                  <p>+03 8769 9520</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
