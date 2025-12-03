"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stethoscope, Loader2 } from "lucide-react";

const AppointmentFormTwo: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <div className="appointment-area-three">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div
                className="appointment-item appointment-item-two"
                style={{
                  backgroundImage: `url(/images/home-two/home-2-hart-shape.jpg)`,
                }}
              >
                <h2>Book your appointment</h2><br />

                <div className="appointment-form">
                  <div className="appointment-description">
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                      Tempah temujanji anda dengan Klinik Dr. Asyraf hari ini. Kami menyediakan perkhidmatan ginekologi dan obstetrik yang komprehensif untuk kesihatan dan kesejahteraan anda.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                      Klik butang di bawah untuk membuat temujanji. Kami akan mengesahkan temujanji anda dalam masa 2 jam semasa waktu pejabat.
                    </p>
                  </div>

                  {/* Get Appointment Button */}
                  <div className="text-center">
                    <Link href="/appointment">
                      <Button 
                        className="bg-[#0046c0] text-white hover:bg-[#003a9e] transition-all duration-300 hover:scale-105"
                        style={{ padding: '12px 32px', fontSize: '16px' }}
                        onClick={() => setIsLoading(true)}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Loading...
                          </>
                        ) : (
                          <>
                            <Stethoscope className="mr-2 h-4 w-4" />
                            Get Appointment
                          </>
                        )}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div
                className="speciality-item speciality-right speciality-right-two speciality-right-three"
                style={{ backgroundImage: `url(/images/appointment1.jpg)` }}
              >
                <Image
                  src="/images/doctors/doctor4.jpg"
                  alt="Doctor"
                  width={364}
                  height={393}
                />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Emergency Call</h3>
                  <p>+03 8769 9520</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentFormTwo;