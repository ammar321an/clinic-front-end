"use client";
  
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href="tel:+60194565039">
                        <i className="icofont-ui-call"></i>
                        Call : +60 19 456 5039
                      </a>
                    </li>
                    <li>
                      <a href="mailto:dr.m.asyraf@gmail.com">
                        <i className="icofont-ui-message"></i>
                        dr.m.asyraf@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      24-25, Aras 1, Klinik Pakar Hospital Pakar KPJ Kajang, 43000 Kajang
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/ashralf.azizan" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/muhammad-asyraf-azizan-2271731b9/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@ashralf86" target="_blank">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
