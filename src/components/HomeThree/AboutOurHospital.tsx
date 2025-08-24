"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const AboutOurHospital: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="hospital-area pb-70">
        <div className="container-fluid p-0">
          <div className="hospital-shape">
            <Image
              src="/images/home-three/home-three-hart.png"
              alt="Shape"
              width={377}
              height={333}
            />
          </div>

          <div className="row m-0 align-items-center">
            <div className="col-lg-6 p-0">
              <div className="hospital-item">
                <div
                  onClick={() => setToggler(!toggler)}
                  className="hospital-play-btn"
                >
                  <i className="icofont-ui-play"></i>
                </div>

                <div className="row m-0">
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-one">
                      <Image
                        src="/images/home-three/home3-about1.jpg"
                        alt="About"
                        width={412}
                        height={563}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-0">
                    <div className="hospital-left-two">
                      <Image
                        src="/images/home-three/home3-about2.jpg"
                        alt="About"
                        width={422}
                        height={556}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hospital-item hospital-right">
                <h2>About Our Hospital</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Browse our Website
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Choose Service
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Choose Service
                  </li>
                </ul>

                <Link href="/about" className="hospital-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurHospital;
