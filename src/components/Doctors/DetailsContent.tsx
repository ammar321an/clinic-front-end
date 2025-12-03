"use client";

import React from "react";
import Sidebar from "./Sidebar";
import {
  GraduationCap,
  Award,
  FileText,
  Scissors,
  Target,
  Presentation,
  Briefcase,
} from "lucide-react";

const DetailsContent: React.FC = () => {
  return (
    <>
      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Sidebar />
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      Dr. Muhammad Asyraf Azizan (Doktor Pakar Sakit Puan dan
                      Perbidanan (O&G))
                    </h3>
                    <p>
                      Master Obstetrics & Gynaecology (Universiti Malaya) |
                      GESEA Level 2 | Subkepakaran: Advance Gynae Surgery &
                      Laparoskopi
                    </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <Briefcase
                        className="d-inline-block me-2 mb-1"
                        size={24}
                      />
                      Biografi
                    </h3>

                    <p>
                      Dr. Muhammad Asyraf Azizan ialah seorang Doktor Pakar
                      Sakit Puan dan Perbidanan (O&G) dengan subkepakaran dalam
                      Advance Gynae Surgery dan Laparoskopi, serta pemegang
                      GESEA Level 2. Beliau komited dalam memberikan rawatan
                      moden, selamat dan berasaskan bukti kepada setiap pesakit,
                      dengan penekanan terhadap teknik perubatan dan pembedahan
                      yang minimal invasif.
                    </p>

                    <p>
                      Sejak peringkat awal persekolahan, Dr. Asyraf menunjukkan
                      kecemerlangan akademik dengan memperoleh UPSR 5A, PMR 8A
                      dan SPM 9A di MRSM Bitara Langkawi. Beliau seterusnya
                      melanjutkan pengajian kedoktoran di Setchenov Moscow
                      Medical Academy, Rusia, sebelum meneruskan latihan
                      kepakaran Master Obstetrics & Gynaecology di Universiti
                      Malaya. Keghairahan beliau dalam bidang pembedahan lanjut
                      membawa kepada latihan subkepakaran Minimally Invasive
                      Surgery / Laparoscopy (GESEA, Eropah).
                    </p>

                    <p>
                      Beliau memulakan kerjayanya sebagai pegawai perubatan
                      siswazah di Hospital Tuanku Fauziah, Kangar (2010–2015).
                      Latihan kepakarannya diteruskan di Hospital Kuala Lumpur
                      (2015–2017) dan Universiti Malaya (2017–2019). Setelah
                      bergelar pakar, beliau berkhidmat di Hospital Duchess of
                      Kent, Sandakan, Sabah, sebelum menyambung latihan
                      subkepakaran dalam Gynae-Oncology di beberapa pusat
                      tersohor: Hospital Serdang (2022–2023), Hospital Sultan
                      Ismail, Johor Bahru (2023–2024) dan UMMC (2024–2025).
                      Beliau turut menabur bakti di Hospital Tanjong Karang dari
                      April hingga Ogos 2025.
                    </p>

                    <p>
                      Dalam kerjaya dan perkhidmatannya, Dr. Asyraf berpegang
                      kepada misi untuk mengaplikasi teknik perubatan terkini
                      serta mempromosikan kaedah kelahiran yang selamat dan
                      patuh syarak. Beliau berwawasan untuk meningkatkan
                      kepakaran dalam bidang perubatan dan pembedahan demi
                      manfaat masyarakat sejagat, sambil mengekalkan nilai
                      peribadi seperti rendah diri, saling menghormati serta
                      proaktif dalam memajukan bidang O&G.
                    </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <GraduationCap
                        className="d-inline-block me-2 mb-1"
                        size={24}
                      />
                      Pendidikan
                    </h3>
                    <ul>
                      <li>
                        UPSR 5A, PMR 8A, SPM 9A - MRSM Bitara Langkawi
                      </li>
                      <li>
                        Ijazah Kedoktoran - Setchenov Moscow Medical Academy,
                        Rusia
                      </li>
                      <li>
                        Master Obstetrics & Gynaecology - Universiti Malaya
                        (2017-2019)
                      </li>
                      <li>
                        Subkepakaran Minimally Invasive Surgery / Laparoscopy
                        (GESEA Level 2, Eropah)
                      </li>
                      <li>
                        Latihan Subkepakaran Gynae-Oncology:
                        <ul>
                          <li>Hospital Serdang (2022–2023)</li>
                          <li>
                            Hospital Sultan Ismail, Johor Bahru (2023–2024)
                          </li>
                          <li>UMMC (2024–2025)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <Presentation
                        className="d-inline-block me-2 mb-1"
                        size={24}
                      />
                      Pembentangan & Penyelidikan Antarabangsa
                    </h3>
                    <p>
                      Beliau telah diberi peluang mewakili institusi dalam
                      beberapa kongres perubatan utama di Malaysia, Asia dan
                      antarabangsa:
                    </p>
                    <ul>
                      <li>
                        <strong>2019 – Perak (PSM Congress)</strong>
                        <br />
                        POWER Study – kajian klinikal yang mengkaji pencegahan
                        diabetes gestasi melalui senaman berjalan berasaskan
                        pedometer.
                      </li>
                      <li>
                        <strong>2019 – Korea Selatan (ASGO)</strong>
                        <br />
                        Pembentangan mengenai keganasan ovari yang tidak
                        dijangka selepas laparoskopi, berdasarkan pengalaman di
                        Universiti Malaya.
                      </li>
                      <li>
                        <strong>2022 – OGSM International Congress</strong>
                        <br />
                        Kehamilan ovari — laporan kes unik yang jarang berlaku.
                      </li>
                      <li>
                        <strong>2024 – OGSM International Congress</strong>
                        <br />
                        Kes tumor Ancient Vaginal Schwannoma, antara kes yang
                        sangat jarang direkodkan.
                      </li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <FileText
                        className="d-inline-block me-2 mb-1"
                        size={24}
                      />
                      Penerbitan Akademik
                    </h3>
                    <p>
                      Beliau turut menghasilkan beberapa penerbitan dalam
                      jurnal perubatan tempatan dan antarabangsa:
                    </p>
                    <ul>
                      <li>POWER Study – proses penerbitan</li>
                      <li>
                        Ovarian Malignancy Following Laparoscopy – proses
                        penerbitan
                      </li>
                      <li>
                        Primary Unruptured Ovarian Pregnancy – diterbitkan dalam
                        Annals Case Report & Medical Journal of Malaysia
                      </li>
                      <li>Ancient Vaginal Schwannoma – proses penerbitan</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <Award className="d-inline-block me-2 mb-1" size={24} />
                      Anugerah & Pengiktirafan
                    </h3>
                    <p>
                      Beliau menerima beberapa pengiktirafan atas usaha dalam
                      bidang perubatan wanita:
                    </p>
                    <ul className="mb-4">
                      <li>Best Oral Obstetrics Presentation Award (2019)</li>
                      <li>Finalist ASGO 2019 – Korea</li>
                      <li>Finalist Poster Presentation OGSM 2022</li>
                      <li>Anugerah Perkhidmatan Cemerlang 2021 (APC)</li>
                      <li>Finalist Poster Presentation OGSM 2024</li>
                    </ul>
                    <p>
                      Pengiktirafan ini mengukuhkan komitmen beliau dalam
                      menyediakan rawatan berkualiti tinggi yang berasaskan
                      bukti (evidence-based).
                    </p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <Scissors className="d-inline-block me-2 mb-1" size={24} />
                      Kemahiran & Pengalaman Pembedahan
                    </h3>
                    <p>
                      Dengan pengalaman mengendalikan ratusan pembedahan
                      kompleks, beliau berpengalaman luas dalam:
                    </p>

                    <h4 className="mt-4">Pembedahan Invasif (6 bulan terkini)</h4>
                    <ul>
                      <li>Total abdominal hysterectomy + BSO: 20–30 kes</li>
                      <li>Laparoscopic hysterectomy + BSO: 20–30 kes</li>
                      <li>Pelvic lymph node dissection: 10–20 kes</li>
                      <li>Omentectomy: 10–20 kes</li>
                      <li>Adhesiolysis: 20–30 kes</li>
                      <li>Pelvic exenteration: 3 kes</li>
                      <li>Radical hysterectomy: 20–30 kes</li>
                      <li>
                        Lain-lain pembedahan lanjutan laparoskopi & onkologi
                        wanita
                      </li>
                    </ul>

                    <h4 className="mt-4">Prosedur Ginekologi Tidak Invasif</h4>
                    <ul>
                      <li>LLETZ & cone biopsy</li>
                      <li>Colposcopy</li>
                      <li>Hysteroscopy</li>
                      <li>D&C diagnostik</li>
                      <li>Forceps & vacuum-assisted delivery</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>
                      <Target className="d-inline-block me-2 mb-1" size={24} />
                      Misi
                    </h3>
                    <p>
                      Untuk memastikan setiap wanita mendapat pilihan rawatan
                      yang:
                    </p>
                    <ul className="mb-4">
                      <li>Lebih selamat</li>
                      <li>Kurang sakit</li>
                      <li>Risiko lebih rendah</li>
                      <li>Pulih lebih cepat</li>
                    </ul>
                    <p>
                      Dengan teknik pembedahan moden seperti laparoskopi &
                      VNOTES, beliau percaya setiap pesakit berhak mendapat
                      rawatan terbaik yang minimally invasive, high precision
                      dan berpusatkan pesakit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;