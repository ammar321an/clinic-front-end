"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HeroSlider: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <Image
                        src="/images/home-one/home-slider1.png"
                        alt="Shape"
                        width={730}
                        height={600}
                      />
                    </div>

                    <h1>Dr. Asyraf</h1>
                    <h2 className="text-white"><strong>Pakar Sakit Puan & Perbidanan | Pakar Pembedahan<br /> Invasif Minimum dan Pembedahan Kompleks</strong></h2>
                    <p>
                      Dr. Asyraf merupakan seorang pakar sakit puan dan bidan yang berpengalaman luas dalam bidang 
                      obstetrik dan ginekologi. Beliau telah menjalani latihan intensif serta berkhidmat di beberapa 
                      hospital utama di Malaysia termasuk Hospital Kuala Lumpur, Pusat Perubatan Universiti Malaya, 
                      Hospital Duchess of Kent Sabah, Hospital Sultan Ismail Johor Bahru, dan Hospital Serdang.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two">
                      <Image
                        src="/images/home-one/home-slider2.png"
                        alt="Shape"
                        width={730}
                        height={500}
                      />
                    </div>
                    <h1>Penjagaan Kesihatan Wanita yang Unggul dan Terbaik</h1>
                    <p>
                      Kami menyediakan rawatan terkini yang berasaskan garis panduan dan praktis klinikal antarabangsa, 
                      demi memastikan kualiti penjagaan kesihatan wanita yang terbaik.
                      <br /><br />
                      Pembedahan invasif minima merupakan pendekatan utama dalam rawatan kami.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-three">
                      <Image
                        src="/images/home-one/home-slider3.png"
                        alt="Shape"
                        width={730}
                        height={500}
                      />
                    </div>
                    <h1>Rawatan & Prosedur Pakar</h1>
                    <p>
                      Kami menyediakan pelbagai perkhidmatan perubatan dan pembedahan 
                      seperti diagnosis melalui ultrasound 2D dan 3D, rawatan moden seperti 
                      pembedahan invasif minima (laparoskopi & histeroskopi), penjagaan ibu 
                      mengandung termasuk kelahiran bayi, pencegahan kelahiran pramatang, 
                      rawatan untuk masalah rahim jatuh, kesuburan, serta saringan awal kanser. 
                      <br /><br />
                      Kami juga mengendalikan kes keguguran, kehamilan luar rahim, dan pilihan 
                      rawatan perubatan seperti pil hormon, implan, dan suntikan hormon bagi 
                      mengatasi masalah kesihatan wanita dengan lebih selamat dan berkesan.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>

                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
