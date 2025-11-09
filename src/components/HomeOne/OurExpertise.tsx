"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurExpertise: React.FC = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row" style={{ rowGap: '20px' }}>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <Link href="/" className="expertise-link">
                        <i className="icofont-doctor-alt"></i>
                        <h3>Certified Doctors</h3>
                        <p>
                          Doktor bertauliah dengan kepakaran tinggi dalam memberikan rawatan terbaik kepada pesakit.
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <Link href="/" className="expertise-link">
                        <i className="icofont-stretcher"></i>
                        <h3>
                          Emergency
                        </h3>
                        <p>
                          Perkhidmatan kecemasan yang pantas dan bersedia 24 jam untuk sebarang situasi kritikal.
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <Link href="/" className="expertise-link">
                        <i className="icofont-network"></i>
                        <h3>
                          Technology
                        </h3>
                        <p>
                          Dilengkapi teknologi perubatan moden bagi memastikan diagnosis dan rawatan lebih tepat.
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <Link href="/" className="expertise-link">
                        <i className="icofont-ambulance-cross"></i>
                        <h3>
                          Ambulance
                        </h3>
                        <p>
                          Perkhidmatan ambulans yang efisien bagi membantu pesakit mendapatkan rawatan segera.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <Image
                    className="mt-8 rounded-xl"
                    src="/images/about4.jpg"
                    alt="Expertise"
                    width={845}
                    height={850}
                  />
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
