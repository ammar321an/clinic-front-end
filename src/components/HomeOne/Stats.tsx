"use client";
  
import React from "react";

const Stats: React.FC = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div
            className="row counter-bg"
            style={{ backgroundImage: `url(/images/map-bg.png)` }}
          >

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3><span className="counter">15</span>+</h3>
                <p>Year Experience</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-patient-bed"></i>
                <h3><span className="counter">10000</span>+</h3>
                <p>Pesakit Dirawat</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-operation-theater"></i>
                <h3>
                  <span className="counter">5000</span>+
                </h3>
                <p>Pembedahan</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-hospital"></i>
                <h3><span className="counter">10</span>+</h3>
                <p>Hospital Bekerja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
