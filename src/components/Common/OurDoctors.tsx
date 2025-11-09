"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurDoctors: React.FC = () => {
  return (
    <>
      <div className="doctors-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor1.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Asyraf</Link>
                  </h3>
                  <span>Pakar Sakit Puan</span>
                </div>
              </div>
            </div>

          </div>
          {/* <div className="doctor-btn">
            <Link href="/doctors">See All</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
