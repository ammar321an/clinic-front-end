"use client";
  
import React from "react";
import Link from "next/link";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center" style={{ rowGap: '30px' }}>
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <Link href="/services/details" className="service-front">
                  <i className="icofont-doctor"></i>
                  <h3>Doktor Pakar</h3>
                  <p>
                    Pakar Sakit Puan & Bidan | Pakar Pembedahan Invasif Minimum dan pembedahan kompleks
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-surgeon-alt"></i>
                      <h3>Pembedahan invasive minima</h3>
                    <p>
                      Rawatan moden dengan luka kecil, pemulihan lebih cepat dan kurang kesakitan
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-surgeon"></i>
                      <h3>Pembedahan kompleks</h3>
                    <p>
                      Pembedahan khusus untuk kes ginekologi yang rumit dengan kepakaran tinggi dan teliti
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-medical-sign"></i>
                      <h3>Antenatal dan Ultrasound bayi</h3>
                    <p>
                      Pemantauan kehamilan menyeluruh untuk ibu dan bayi yang sihat sepanjang perjalanan kehamilan
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-medical-sign"></i>
                      <h3>Ultrasound gynae</h3>
                    <p>
                      Pemeriksaan ultrasound untuk menilai rahim, ovari dan organ reproduktif wanita dengan tepat
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-heart-beat-alt"></i>
                      <h3>Saringan ketumbuhan dan kanser</h3>
                    <p>
                      Pengesanan awal ketumbuhan dan kanser wanita bagi rawatan lebih berkesan dan selamat
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-drug"></i>
                      <h3>Perubatan</h3>
                    <p>
                      Rawatan perubatan hormon dan ubat untuk keseimbangan kesihatan wanita secara menyeluruh
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <Link href="/services/details" className="service-front">
                    <i className="icofont-dna-alt-1"></i>
                      <h3>Prolaps/kejatuhan rahim</h3>
                    <p>
                      Rawatan untuk memulihkan rahim yang jatuh agar fungsi dan keselesaan kembali normal
                    </p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
