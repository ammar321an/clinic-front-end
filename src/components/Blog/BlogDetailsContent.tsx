"use client";

import React from "react";
import Link from "next/link";
import CommentForm from "./CommentForm";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";
import AlertNoticeBar from "../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../ChatBubble/ChatBubble";
import Carousel from "../Carousel/Carousel";

const BlogDetailsContent: React.FC = () => {
  return (
    <>
      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div>
              <div className="blog-details-item">
                <div className="blog-details-img">
                  <Carousel
                    className="mb-5"
                    items={[
                      {
                        src: "/images/blog/blog-details.jpg",
                        alt: "Endometriosis Awareness"
                      }
                    ]}
                    autoPlay={false}
                    showIndicators={false}
                    showControls={false}
                  />
                  <h2>
                    Endometriosis: Kesakitan Senyap, Perjuangan Tersembunyi
                  </h2>

                  <ul>
                    <li>
                      <Link href="/blog">
                        <i className="icofont-businessman"></i> Admin
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>

                  <h5>
                    Pengenalan
                  </h5>
                  <p>
                    <strong>Endometriosis</strong> ialah penyakit ginekologi kronik yang sering disalah 
                    anggap sebagai senggugut biasa. Ia menjejaskan jutaan wanita di seluruh 
                    dunia — tetapi ramai yang <strong>menderita dalam diam</strong> kerana simptomnya sering 
                    diabaikan, dipandang ringan, atau disalah tafsir.
                  </p>
                  <p>
                    Bagi mereka yang mengalaminya, endometriosis bukan sekadar “sakit 
                    perut ketika haid”. Ia adalah satu keadaan kompleks yang boleh 
                    menjejaskan <strong>kesihatan fizikal, mental, emosi, kesuburan,</strong> dan juga 
                    <strong> kualiti hidup harian.</strong>
                  </p>

                  <h5>
                    Apa Itu Endometriosis?
                  </h5>
                  <p>
                    Endometriosis berlaku apabila <strong>tisu yang menyerupai lapisan dalam 
                    rahim (endometrium)</strong> tumbuh di luar rahim — seperti di <strong>ovari, tiub 
                    fallopio, pundi kencing, usus, dan pelvis.</strong>
                  </p>
                  <p>
                    Setiap bulan, tisu ini bertindak balas terhadap hormon haid seperti 
                    biasa — ia menebal, pecah, dan berdarah. Tetapi kerana ia terletak 
                    di luar rahim dan <strong>tidak boleh keluar dari badan</strong>, ia menyebabkan:
                  </p>

                  <ul className="custom-bullet-list">
                    <li>Keradangan</li>
                    <li>Parut (adhesi)</li>
                    <li>Kesakitan yang teruk</li>
                    <li>Masalah kesuburan</li>
                  </ul>
                </div>

                <AlertNoticeBar
                  type="white"
                  title="Nota penting:"
                  message="Tidak semua wanita dengan endometriosis mengalami kesakitan. Ada yang hanya mengetahui setelah sukar untuk hamil."
                  linkText="Hubungi doktor"
                  linkHref="/appointment"
                  showCloseButton={true}
                />

                <div className="blog-details-img">
                  <h5>
                    Mengapa Endometriosis Dianggap “Silent Struggle”?
                  </h5>

                  <ul className="custom-numbered-list">
                    <li>
                      <span className="list-title">Lewat didiagnosis:</span>
                      <span className="list-description">Rata-rata wanita menunggu 6 hingga 10 tahun untuk diagnosis rasmi kerana simptomnya disalah anggap sebagai senggugut biasa.</span>
                    </li>
                    <li>
                      <span className="list-title">Salah faham budaya:</span>
                      <span className="list-description">Ramai yang diberitahu bahawa “senggugut itu normal” atau “sakit itu biasa bagi wanita”.</span>
                    </li>
                    <li>
                      <span className="list-title">Kurang kesedaran:</span>
                      <span className="list-description">Bahkan sesetengah profesional kesihatan tidak mengenali gejala awal, menyebabkan rawatan tertangguh</span>
                    </li>
                    <li>
                      <span className="list-title">Kesan psikologi:</span>
                      <span className="list-description">
                        Hidup dengan kesakitan berpanjangan boleh menyebabkan 
                        <span className="font-semibold"> kemurungan, kebimbangan,</span> dan 
                        <span className="font-semibold"> keletihan mental</span>
                      </span>
                    </li>
                  </ul>

                  <h5>
                    Bagaimana Ia Dikesan?
                  </h5>
                  <p>Tiada ujian darah khusus untuk endometriosis. Diagnosis biasanya melibatkan:</p>
                  <ul className="custom-numbered-list">
                    <li>
                      <span className="list-title">Ubat-ubatan</span>
                      <ul className="custom-bullet-list">
                        <li>Ubat tahan sakit (NSAIDs) untuk mengawal kesakitan</li>
                        <li>Pil perancang atau hormon untuk menghentikan ovulasi dan pendarahan</li>
                        <li>Terapi hormon lain (GnRH analogues) untuk mengecilkan tisu endometriosis</li>
                      </ul>
                    </li>
                    <li>
                      <span className="list-title">Pembedahan</span>
                      <ul className="custom-bullet-list">
                        <li>Laparoskopi untuk membuang tisu endometriosis dan lekatan</li>
                        <li>Dalam kes teruk, <span className="font-semibold">histerektomi</span> (buang rahim) mungkin dicadangkan — tetapi bukan penyelesaian untuk semua</li>
                      </ul> 
                    </li>
                    <li>
                      <span className="list-title">Pengurusan Gaya Hidup</span>
                      <ul className="custom-bullet-list">
                        <li>Diet anti-radang (kurangkan gula, tenusu, gluten, makanan proses)</li>
                        <li>Senaman ringan, yoga, terapi fizikal</li>
                        <li>Terapi emosi atau kaunseling</li>
                        <li>Komuniti sokongan pesakit endometriosis</li>
                      </ul>
                    </li> 
                  </ul>
                  
                  <h5>
                    Endometriosis & Kesuburan
                  </h5>
                  <p>
                    Endometriosis adalah <span className="font-semibold">salah satu punca utama ketidaksuburan 
                    wanita</span>. Tisu yang tumbuh tidak normal boleh menyekat tiub fallopio, 
                    merosakkan ovari, atau mengganggu ovulasi.
                  </p>
                  <p>
                    Namun, <span className="font-semibold">banyak wanita dengan endometriosis masih boleh hamil</span> — sama ada secara semula 
                    jadi atau dengan bantuan rawatan kesuburan seperti IUI atau IVF.
                  </p>

                  <h5>Hidup Dengan Endometriosis: Suara Pesakit</h5>

                  {/* Section Introduction Alert */}
                  <SimpleAlert
                    type="info"
                    title="Suara Pesakit:"
                    message="Berikut adalah pengalaman sebenar dari pesakit yang telah melalui perjalanan endometriosis. Testimoni ini bertujuan untuk berkongsi harapan dan sokongan."
                  />

                  {/* Patient Testimonials */}
                  <div className="space-y-5 mb-4">
                    <ChatBubble
                      name="Nur, 32 tahun"
                      gender="female"
                      message="Saya kerap pengsan semasa haid. Doktor kata itu 'biasa' untuk wanita. 7 tahun kemudian, saya disahkan endometriosis tahap 4."
                      timestamp=""
                      status="Testimonianza verificata"
                      showDropdown={false}
                    />
                    
                    <ChatBubble
                      name="Aisyah, 26 tahun"
                      gender="female"
                      message="Orang kata saya malas, tapi hakikatnya saya tak mampu bangun kerana kesakitan. Saya belajar menyembunyikan penderitaan saya.” "
                      timestamp=""
                      status="Pesakit disahkan"
                      showDropdown={false}
                    />

                    <p><span className="font-semibold">Realitinya:</span> Ramai wanita <span className="font-semibold">dipandang ringan</span> atau <span className="font-semibold">tidak dipercayai</span> apabila berkongsi tentang kesakitan mereka.</p>
                  </div>

                  <h5>
                    Bila Perlu Jumpa Doktor?
                  </h5>
                  <p>Segera berjumpa pakar ginekologi jika anda mengalami:</p>
                  <ul className="custom-bullet-list">
                    <li>Sakit haid yang tidak hilang dengan ubat biasa</li>
                    <li>Sukar hamil selepas 6-12 bulan mencuba</li>
                    <li>Sakit semasa hubungan intim atau buang air besar</li>
                    <li>Perut sentiasa kembung atau rasa penuh</li>
                    <li>Keletihan yang melampau dan tidak dapat dijelaskan</li>
                  </ul>

                  <h5>
                    Kesimpulan
                  </h5>
                  <p>
                    Endometriosis bukan sekadar "senggugut kuat". Ia adalah <span className="font-semibold">penyakit sebenar</span> yang menjejaskan 
                    tubuh dan jiwa. Lebih awal ia dikesan dan dirawat, lebih tinggi peluang untuk mengawal 
                    simptom dan melindungi kesuburan anda.
                  </p>
                  <p>
                    <span className="font-semibold">Anda tidak keseorangan.</span> Dapatkan sokongan. Suarakan pengalaman anda. Dan yang paling penting — 
                    <span className="font-semibold"> jangan normalisasikan kesakitan.</span>
                  </p>

                </div>

                <div className="blog-details-previous mt-5">
                  <div className="prev-next">
                    <ul>
                      <li>
                        <a href="#">Previous</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CommentForm */}
            </div>

            {/* <div className="col-lg-4">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
