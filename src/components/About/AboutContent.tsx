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

                <h2>About Our Hospital</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
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
