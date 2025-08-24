"use client";

import React from "react";
import Image from "next/image";

const HowCovid19Spreads: React.FC = () => {
  return (
    <>
      <div className="spread-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spread-content">
                <div className="section-title-two">
                  <span>Spreads</span>
                  <h2>How Covid-19 Spreads</h2>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  assumenda quisquam accusamus vero minima nemo natus non
                  asperiores, voluptas iste repellat officiis obcaecati possimus
                  quasi. Vitae nesciunt animi magnam nobis!
                </p>

                <ul>
                  <li>
                    <Image
                      src="/images/home-five/spread.png"
                      alt="Spread"
                      width={80}
                      height={80}
                    />
                    <h3>Person To Person</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Impedit delectus sit minima natus.
                    </p>
                  </li>
                  <li>
                    <Image
                      src="/images/home-five/spread.png"
                      alt="Spread"
                      width={80}
                      height={80}
                    />
                    <h3>Infected Person Coughs</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Impedit delectus sit minima natus.
                    </p>
                  </li>
                  <li>
                    <Image
                      src="/images/home-five/spread.png"
                      alt="Spread"
                      width={80}
                      height={80}
                    />
                    <h3>Close Contact Another</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Impedit delectus sit minima natus.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="spread-img">
                <Image
                  src="/images/home-five/spread-main.jpg"
                  alt="Spread"
                  width={600}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowCovid19Spreads;
