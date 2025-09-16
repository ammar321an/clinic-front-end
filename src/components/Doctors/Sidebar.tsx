"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="doctor-details-item doctor-details-left">
        <Image
          src="/images/doctors/doctor3.jpg"
          alt="Doctor"
          width={364}
          height={393}
        />

        <div className="doctor-details-contact">
          <h3>Contact info</h3>
          <ul>
            <li>
              <i className="icofont-ui-call"></i>
              Call: +60 19 456 5039
            </li>
            <li>
              <i className="icofont-ui-message"></i>
              dr.m.asyraf@gmail.com
            </li>
            <li>
              <i className="icofont-location-pin"></i>
              24-25, Aras 1, Klinik Pakar Hospital Pakar KPJ Kajang, 43000 Kajang
            </li>
          </ul>
        </div>

        <div className="doctor-details-work">
          <h3>Working hours</h3>
          <div className="appointment-item-two-right">
            <div className="appointment-item-content">
              <ul>
                <li>
                  Monday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Tuesday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Wednesday <span>9:00 AM - 8:00 PM</span>
                </li>
                <li>
                  Sunday <span>9:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
