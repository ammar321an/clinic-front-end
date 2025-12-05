"use client";
  
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="location-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center location-wrap">
            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="location-item">
                <i className="icofont-location-pin"></i>
                <h3>Location</h3>
                <p>
                  Suite 24, Level 1, KPJ Kajang Specialist Hospital, Lot 32726, Batu 14, Jalan Cheras 43000 Kajang, Selangor Darul Ehsan
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="location-item">
                <i className="icofont-ui-message"></i>
                <h3>Email</h3>
                <p>support@drasyrafazizan.com</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-6">
              <div className="location-item">
                <i className="icofont-ui-call"></i>
                <h3>Phone</h3>
                <p>+03 8769 9520</p>
                <p>+03 8769 2999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
