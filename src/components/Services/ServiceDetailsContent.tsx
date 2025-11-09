"use client";

import React from "react";
import Image from "next/image";

const ServiceDetailsContent: React.FC = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <Image
              src="/images/service-details-bg.jpg"
              alt="Service Details"
              width={1920}
              height={1000}
            />

            <h2>Penjagaan Menyeluruh untuk Kesihatan Wanita</h2>
            <p>
              Di klinik kami, kami percaya bahawa setiap wanita berhak menerima
              penjagaan kesihatan yang terbaik, selamat dan penuh empati. Di bawah
              kepakaran <strong>Dr. Asyraf</strong>, kami menawarkan rawatan
              obstetrik dan ginekologi yang lengkap – daripada saringan awal,
              rawatan perubatan, sehinggalah kepada pembedahan invasif minima
              serta pembedahan kompleks. Kami mengutamakan pemahaman pesakit
              terhadap penyakit dan pilihan rawatan yang sesuai, supaya setiap
              keputusan dibuat dengan yakin dan jelas.
            </p>

            <blockquote>
              <i className="icofont-quote-left"></i>
              “Kesihatan wanita bukan sekadar merawat penyakit, tetapi
              membantu mereka memahami tubuh, membuat keputusan tepat dan
              menjalani kehidupan yang sihat serta bermakna.”
            </blockquote>

            <p>
              Pendekatan kami menggabungkan kemajuan teknologi moden dan sentuhan
              manusiawi. Sama ada anda memerlukan saringan rutin, rawatan hormon,
              pemantauan kehamilan, atau pembedahan seperti laparoskopi dan
              histeroskopi, kami memastikan setiap rawatan dijalankan dengan
              penuh ketelitian dan perhatian. Kami sentiasa berusaha memberikan
              pengalaman rawatan yang selamat, selesa, dan berkesan kepada semua
              pesakit kami.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div
                className="service-details-inner-left"
                style={{ backgroundImage: `url(/images/signup-bg.jpg)` }}
              >
                <Image
                  src="/images/signup-bg.jpg"
                  alt="Service"
                  width={1920}
                  height={1200}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Perkhidmatan Kami</h2>
                <p>
                  Kami menawarkan pelbagai jenis rawatan dan pembedahan untuk
                  memenuhi keperluan kesihatan wanita dari pelbagai peringkat umur.
                  Setiap perkhidmatan dijalankan mengikut garis panduan klinikal
                  antarabangsa dengan tumpuan terhadap keselamatan dan kesejahteraan
                  pesakit.
                </p>

                <p className="mt-2">
                  <strong>1. Pembedahan Invasif Minima (MIS)</strong> – Rawatan moden
                  menggunakan lubang kecil seperti laparoskopi dan histeroskopi untuk
                  mengurangkan kesakitan, risiko jangkitan serta mempercepatkan
                  pemulihan.
                </p>

                <p className="mt-2">
                  <strong>2. Pembedahan Kompleks</strong> – Bagi kes seperti
                  ketumbuhan besar, endometriosis teruk, atau pembedahan struktur
                  pelvis, dijalankan dengan ketelitian dan kepakaran tinggi.
                </p>

                <p className="mt-2">
                  <strong>3. Antenatal & Ultrasound Bayi</strong> – Pemantauan kehamilan
                  yang menyeluruh menggunakan ultrasound 2D dan 3D untuk memastikan ibu
                  dan bayi sentiasa sihat sepanjang kandungan.
                </p>

                <p className="mt-2">
                  <strong>4. Ultrasound Gynae</strong> – Pemeriksaan rahim, ovari dan
                  pelvis untuk mengesan fibroid, sista ovari atau masalah kitaran haid
                  tidak normal.
                </p>

                <p className="mt-2">
                  <strong>5. Saringan Ketumbuhan & Kanser</strong> – Pengesanan awal
                  melalui pap smear, ujian HPV dan ultrasound bagi memastikan rawatan
                  lebih berkesan dan selamat.
                </p>

                <p className="mt-2">
                  <strong>6. Perubatan & Hormon</strong> – Rawatan menggunakan pil,
                  suntikan atau implan bagi masalah haid tidak teratur, kesakitan
                  pelvis dan kawalan kehamilan.
                </p>

                <p className="mt-2">
                  <strong>7. Prolaps / Kejatuhan Rahim</strong> – Rawatan konservatif
                  dan pembedahan untuk mengembalikan kedudukan rahim dan keselesaan
                  wanita.
                </p>

                <p className="mt-3">
                  Semua rawatan dimulakan dengan sesi konsultasi bagi memahami sejarah
                  kesihatan dan keperluan pesakit. Kami turut menerangkan setiap
                  langkah rawatan, termasuk risiko, manfaat serta jangkaan hasil,
                  supaya pesakit sentiasa yakin dengan keputusan yang dibuat.
                </p>

                <p className="mt-2">
                  Di bawah bimbingan <strong>Dr. Asyraf</strong>, kami komited
                  menyediakan penjagaan menyeluruh yang menggabungkan kemahiran
                  pembedahan moden, nasihat profesional, dan layanan yang penuh
                  empati. Matlamat kami ialah membantu setiap wanita mencapai
                  kesejahteraan menyeluruh – dari segi fizikal, emosi dan kualiti
                  hidup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
