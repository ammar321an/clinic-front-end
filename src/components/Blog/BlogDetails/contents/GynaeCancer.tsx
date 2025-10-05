import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface GynaeCancerContentProps {
  images: string[];
}

const GynaeCancerContent: React.FC<GynaeCancerContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-2a.jpg",
                        alt: "Gynae Cancer Awareness",
                        title: "Gynae Cancer Awareness",
                        description: "Pentingnya kesedaran tentang kanser ginekologi."
                        },
                        {
                        src: "/images/blog/blog-details-2b.jpg",
                        alt: "Gynae Cancer Awareness",
                        title: "Gynae Cancer Awareness",
                        description: "Pentingnya kesedaran tentang kanser ginekologi."
                        },
                        {
                        src: "/images/blog/blog-details-2c.jpg",
                        alt: "Gynae Cancer Awareness",
                        title: "Gynae Cancer Awareness",
                        description: "Pentingnya kesedaran tentang kanser ginekologi."
                        },
                        {
                        src: "/images/blog/blog-details-2d.jpg",
                        alt: "Gynae Cancer Awareness",
                        title: "Gynae Cancer Awareness",
                        description: "Pentingnya kesedaran tentang kanser ginekologi."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Kanser Ginekologi: Saringan, Faktor Risiko & Pengesanan Awal
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Kanser ginekologi merujuk kepada kanser yang menyerang organ 
                pembiakan wanita seperti <span className="font-semibold">rahim, ovari, serviks, faraj, dan vulva.</span> 
                Ia merupakan salah satu penyebab utama kematian wanita di seluruh dunia, 
                tetapi <span className="font-semibold">dengan saringan dan pengesanan awal, risiko boleh dikurangkan 
                secara signifikan.</span>
                </p>
                <p>
                Artikel ini akan membincangkan tentang pentingnya <span className="font-semibold">saringan kanser ginekologi,</span> faktor risiko utama, 
                dan bagaimana pengesanan awal boleh menyelamatkan nyawa.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Jenis-Jenis Kanser Ginekologi
                </h5>
                <p>
                Antara kanser ginekologi yang biasa ditemui ialah:
                </p>

                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Kanser Serviks</span>
                        <span className="list-description">Kanser pada bahagian bawah rahim yang boleh dikesan awal melalui ujian pap smear.</span>
                    </li>
                    <li>
                        <span className="list-title">Kanser Ovari</span>
                        <span className="list-description">Kanser pada bahagian bawah rahim yang boleh dikesan awal melalui ujian pap smear.</span>
                    </li>
                    <li>
                        <span className="list-title">Kanser Rahim (Endometrium) </span>
                        <span className="list-description">Kanser pada lapisan rahim, biasanya dikesan melalui pendarahan faraj yang tidak normal.</span>
                    </li>
                    <li>
                        <span className="list-title">Kanser Faraj dan Vulva</span>
                        <span className="list-description">Kanser yang jarang berlaku tetapi penting untuk diberi perhatian.</span>
                    </li>
                </ul>

                <h5>Faktor Risiko Kanser Ginekologi</h5>
                <p>Beberapa faktor boleh meningkatkan risiko wanita mendapat kanser ginekologi:</p>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Jangkitan HPV (Human Papillomavirus)</span>
                        <span className="list-description">Terutamanya jenis HPV berisiko tinggi yang menyebabkan kanser serviks.</span>
                    </li>
                    <li>
                        <span className="list-title">Umur</span>
                        <span className="list-description">Risiko meningkat selepas umur 50 tahun.</span>
                    </li>
                    <li>
                        <span className="list-title">Sejarah keluarga</span>
                        <span className="list-description">Ada ahli keluarga yang pernah menghidap kanser ovari atau kanser payudara.</span>
                    </li>
                    <li>
                        <span className="list-title">Kitaran haid yang tidak normal atau tiada haid</span>
                        <span className="list-description">Seperti dalam sindrom PCOS.</span>
                    </li>
                    <li>
                        <span className="list-title">Obesiti</span>
                        <span className="list-description">Berat badan berlebihan dikaitkan dengan risiko lebih tinggi kanser rahim.</span>
                    </li>
                    <li>
                        <span className="list-title">Gaya hidup</span>
                        <span className="list-description">Merokok, diet tidak sihat, dan kurang bersenam meningkatkan risiko.</span>
                    </li>
                    <li>
                        <span className="list-title">Penggunaan hormon</span>
                        <span className="list-description">Penggunaan hormon estrogen tanpa progesteron dalam jangka panjang.</span>
                    </li>
                </ul>
            </div>

            <AlertNoticeBar
                title="Nota Penting: Pentingnya Saringan Kanser Ginekologi"
                type="info"
                message="Saringan bertujuan untuk mengesan tanda awal kanser sebelum ia merebak atau menyebabkan simptom serius. Antara kaedah saringan yang biasa digunakan ialah:"
                messageItems={[
                    { title: "Ujian Pap Smear dan HPV:", description: "Untuk mengesan perubahan pra-kanser dan kanser serviks. Disyorkan dilakukan setiap 3-5 tahun bergantung kepada umur dan risiko." },
                    { title: "Imbasan Ultrasound Pelvik", description: "Terutamanya untuk wanita berisiko tinggi kanser ovari atau yang mengalami simptom seperti sakit pelvis berpanjangan." },
                    { title: "Ujian Darah CA-125", description: "Sebagai penanda untuk kanser ovari dalam kes tertentu, walaupun bukan ujian saringan rutin." },
                    { title: "Biopsi", description: "Diambil jika terdapat tisu abnormal pada rahim atau serviks." },
                ]}
                linkText="Hubungi doktor"
                linkHref="/appointment"
            />

            <div className="blog-details-img">
                <h5>
                Pengesanan Awal Menyelamatkan Nyawa
                </h5>

                <p>Kanser yang dikesan pada peringkat awal biasanya lebih mudah dirawat dan mempunyai kadar kejayaan yang tinggi. Contohnya:</p>

                <ul className="custom-bullet-list">
                    <li>Kanser serviks yang dikesan melalui ujian pap smear/HPV boleh dirawat dengan mudah jika belum merebak.</li>
                    <li>Kanser rahim yang dikesan melalui pendarahan faraj luar biasa dapat dirawat sebelum tahap lanjut.</li>
                </ul>

                <p>
                Oleh itu, <span className="font-semibold">jumpa doktor segera jika anda mengalami simptom 
                seperti pendarahan faraj yang tidak normal, sakit pelvis, 
                atau perubahan dalam kitaran haid.</span>
                </p>

                <AlertNoticeBar
                    title="Langkah-langkah Pencegahan"
                    type="danger"
                    messageItems={[
                        { title: "Vaksin HPV", description: "Vaksin ini boleh melindungi daripada jenis HPV yang menyebabkan kanser serviks." },
                        { title: "Amalkan gaya hidup sihat", description: "Makan seimbang, bersenam, dan elakkan merokok." },
                        { title: "Lakukan saringan secara berkala", description: "Mengikut saranan doktor." },
                        { title: "Kenali tanda-tanda awal", description: "Jangan abaikan simptom pelik yang berlarutan." },
                    ]}
                    linkText="Hubungi doktor"
                    linkHref="/appointment"
                />

                <h5>
                Kesimpulan
                </h5>
                <p>
                Kanser ginekologi boleh memberi kesan serius kepada kesihatan wanita, 
                tetapi dengan pengetahuan, saringan berkala, dan pengesanan awal, 
                kita boleh melawan penyakit ini dengan lebih berkesan.
                </p>
                <p>
                Utamakan kesihatan anda dan jangan takut untuk berjumpa pakar jika 
                anda mempunyai keraguan atau simptom yang membimbangkan.
                </p>

            </div>
        </div>
    </>
  );
};

export default GynaeCancerContent;