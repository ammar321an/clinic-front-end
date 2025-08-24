"use client";

import React from "react";
import Image from "next/image";

const SymptomsCovid19: React.FC = () => {
  return (
    <>
      <div className="symptoms-area pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <Image
                  src="/images/symptoms.jpg"
                  alt="Symptoms"
                  width={600}
                  height={700}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="symptoms-content">
                <div className="section-title-two">
                  <span>Symptoms</span>
                  <h2>Symptoms Of Covid-19</h2>
                </div>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum
                </p>

                <ul>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Cough
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Headache
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Tiredness
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Fever
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Breath Shortness
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="icofont-caret-right"></i>
                      Muscle Pain
                    </span>
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

export default SymptomsCovid19;
