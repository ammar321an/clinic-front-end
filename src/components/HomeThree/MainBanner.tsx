"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-item">
                <h1>Your Healthy Life is Our First Priority</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.{" "}
                </p>

                <div className="common-btn-two">
                  <Link href="/appointment">Get Appointment</Link>
                  <Link href="/about" className="cmn-btn-right-two">
                    Learn More
                  </Link>
                </div>

                <div className="banner-right">
                  <Image
                    src="/images/home-three/home-three-banner1.png"
                    alt="Banner"
                    width={648}
                    height={640}
                  />
                  <Image
                    src="/images/home-three/home-three-banner-shape2.png"
                    alt="Banner"
                    width={648}
                    height={640}
                  />
                  <Image
                    src="/images/home-three/home-three-banner-shape2.png"
                    alt="Banner"
                    width={648}
                    height={640}
                  />
                  <Image
                    src="/images/about-shape1.png"
                    alt="Banner"
                    width={556}
                    height={712}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heart-shape">
          <Image
            src="/images/heart-graph.png"
            alt="Banner"
            width={694}
            height={194}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
