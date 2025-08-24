"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const DoctorsCard: React.FC = () => {
  return (
    <>
      <div className="doctor-search-area">
        <div className="container">
          <form>
            <div className="row doctor-search-wrap">
              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-doctor-alt"></i>
                    <label>Search</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Doctor Name"
                    />
                  </div>
                  <button type="submit" className="btn doctor-search-btn">
                    <i className="icofont-search-1"></i>
                  </button>
                </div>
              </div>

              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-hospital"></i>
                    <label>Category</label>
                    <select className="form-control">
                      <option>Neurosurgeon</option>
                      <option>Cardiology</option>
                      <option>Pathology</option>
                      <option>Dental Care</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
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
                    <Link href="/doctors/details">Dr. Babatunde</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor2.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Addition Smith</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor3.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Sarah Taylor</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor4.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Mac Smith</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor5.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Alinson Backer</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor6.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Jas Macham</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor7.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. John Micheal</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor8.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Shane Warne</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <Image
                    src="/images/doctors/doctor9.jpg"
                    alt="Doctor"
                    width={364}
                    height={393}
                  />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctors/details">Dr. Luis Moris</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
