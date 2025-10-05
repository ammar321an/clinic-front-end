import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface CervicalInsufficiencyContentProps {
  images: string[];
}

const CervicalInsufficiencyContent: React.FC<CervicalInsufficiencyContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-8a.jpg",
                        alt: "Ketidakcukupan Serviks & Cerclage: Langkah Pencegahan untuk Kehamilan Selamat",
                        title: "Ketidakcukupan Serviks & Cerclage: Langkah Pencegahan untuk Kehamilan Selamat",
                        description: "Rawatan cerclage membantu menguatkan serviks lemah dan melindungi kandungan sehingga bersalin."
                        },
                        {
                        src: "/images/blog/blog-details-8b.jpg",
                        alt: "Ketidakcukupan Serviks & Cerclage: Langkah Pencegahan untuk Kehamilan Selamat",
                        title: "Ketidakcukupan Serviks & Cerclage: Langkah Pencegahan untuk Kehamilan Selamat",
                        description: "Rawatan cerclage membantu menguatkan serviks lemah dan melindungi kandungan sehingga bersalin."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Ketidakcukupan Serviks (Cervical Insufficiency) & Cerclage: Perlindungan Kehamilan Anda
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Kehamilan sepatutnya berlangsung selama kira-kira 40 minggu, namun bagi sesetengah wanita, 
                rahim tidak dapat mengekalkan kandungan kerana serviks yang lemah. Keadaan ini dikenali sebagai 
                “cervical insufficiency” atau ketidakcukupan serviks, dan ia boleh menyebabkan keguguran lewat 
                atau kelahiran pramatang.
                </p>
                <p>
                Berita baiknya, dengan rawatan pencegahan yang dikenali sebagai cerclage serviks, ramai wanita 
                dapat meneruskan kehamilan dengan lebih selamat sehingga ke tarikh jangkaan bersalin.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Itu Ketidakcukupan Serviks?
                </h5>
                <p>
                Ketidakcukupan serviks berlaku apabila serviks (pangkal rahim) menjadi lemah atau terbuka 
                terlalu awal semasa kehamilan tanpa rasa sakit atau kontraksi. Ia biasanya berlaku pada 
                trimester kedua (antara minggu ke-16 hingga ke-24) dan boleh menyebabkan:
                </p>
                <ul className="custom-bullet-list">
                    <li>
                        Keguguran lewat kehamilan
                    </li>
                    <li>
                        Pecah air ketuban awal
                    </li>
                    <li>
                        Kelahiran pramatang
                    </li>
                </ul>
                
                <h5>Tanda-Tanda Ketidakcukupan Serviks</h5>
                <p>Keadaan ini sering berlaku tanpa sebarang simptom, tetapi tanda-tanda berikut perlu diberi perhatian:</p>
                <ul className="custom-bullet-list">
                    <li>
                        Rasa tekanan di bahagian bawah perut atau pelvis
                    </li>
                    <li>
                        Keluar lendir faraj yang luar biasa
                    </li>
                    <li>
                        Rasa seperti janin "menurun" terlalu awal
                    </li>
                    <li>
                        Sakit belakang ringan yang berpanjangan
                    </li>
                    <li>
                        Pendarahan ringan atau spotting (jarang berlaku)
                    </li>
                </ul>
                <p>Selalunya, diagnosis dibuat selepas wanita mengalami keguguran lewat atau kelahiran pramatang dalam kehamilan sebelum ini.</p>

                <h5>Siapa Berisiko?</h5>
                <p>Wanita lebih berisiko mengalami ketidakcukupan serviks jika mereka:</p>
                <ul className="custom-bullet-list">
                    <li>
                        Pernah mengalami keguguran lewat atau kelahiran pramatang yang tidak dapat dijelaskan
                    </li>
                    <li>
                        Mempunyai sejarah prosedur pada serviks seperti LEEP, cone biopsy atau dilatation and curettage (D&C)
                    </li>
                    <li>
                        Pernah menjalani cerclage pada kehamilan sebelumnya
                    </li>
                    <li>
                        Mempunyai bentuk rahim atau serviks yang tidak normal secara semula jadi
                    </li>
                </ul>

                <h5>Bagaimana Ia Dikesan?</h5>
                <p>Pakar akan menilai panjang dan kekuatan serviks melalui:</p>
                <ul className="custom-bullet-list">
                    <li>
                        Ultrasound transvaginal – untuk mengukur panjang serviks
                    </li>
                    <li>
                        Sejarah kehamilan lepas – jika pernah alami keguguran atau kelahiran pramatang
                    </li>
                </ul>
                <p>Panjang serviks kurang daripada 25mm sebelum minggu ke-24 mungkin menandakan risiko tinggi dan memerlukan intervensi.</p>

                <h2>Apa Itu Cerclage Serviks?</h2>
                <p>
                Cerclage serviks ialah prosedur perubatan di mana serviks dijahit dengan benang khas 
                untuk menguatkan dan menutup pangkal rahim, supaya ia tidak terbuka terlalu awal. Tujuan 
                cerclage adalah untuk memanjangkan tempoh kehamilan dan mengurangkan risiko kelahiran pramatang.
                </p>

                <h5>Jenis-Jenis Cerclage</h5>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Cerclage profilaksis / pencegahan (prophylactic)</span>
                        <ul className="custom-bullet-list">
                            <li>Dilakukan antara minggu ke-12 hingga ke-14, sebelum serviks mula terbuka</li>
                            <li>Biasanya untuk wanita dengan sejarah kehamilan berisiko tinggi</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Cerclage terapeutik / intervensi (therapeutic)</span>
                        <ul className="custom-bullet-list">
                            <li>Dilakukan jika ultrasound menunjukkan serviks mula memendek semasa kehamilan</li>
                        </ul> 
                    </li>
                    <li>
                        <span className="list-title">Penurunan berat badan</span>
                        <ul className="custom-bullet-list">
                            <li>Penurunan 5–10% berat badan boleh memperbaiki ovulasi, mengurangkan jerawat, dan memperbaiki kitaran haid.</li>
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Cerclage kecemasan (emergency)</span>
                        <ul className="custom-bullet-list">
                            <li>Dilakukan jika serviks telah terbuka dan kantung ketuban mula menonjol</li>
                            <li>Risiko tinggi tetapi kadang-kala boleh menyelamatkan kehamilan</li>
                        </ul>
                    </li> 
                </ul>

                <h5>Pemulihan Selepas Cerclage</h5>
                <ul className="custom-bullet-list">
                    <li>Prosedur dilakukan secara bius setempat atau penuh</li>
                    <li>Anda mungkin perlu berehat di hospital selama 1–2 hari</li>
                    <li>Rehat di rumah dan hadkan aktiviti berat selama beberapa minggu</li>
                    <li>Elakkan hubungan seksual sehingga dibenarkan oleh doktor</li>
                    <li>Cerclage biasanya dibuka sekitar minggu ke-36–37 atau lebih awal jika kontraksi atau pecah ketuban berlaku</li>
                </ul>

                <AlertNoticeBar
                    title="Nota Menarik: Apakah Kejayaan Rawatan Cerclage?"
                    type="white"
                    message="Cerclage berkesan untuk majoriti wanita dengan ketidakcukupan serviks, terutamanya jika dilakukan awal dan dalam situasi yang sesuai. Ia boleh:"
                    messageItems={[
                        { title: "Meningkatkan Peluang Kehamilan Penuh", description: "Meningkatkan peluang membawa kandungan hingga ke minggu ke-37 ke atas" },
                        { title: "Mengurangkan Risiko", description: "Mengurangkan risiko keguguran lewat" },
                        { title: "Membantu Bayi Lahir Lebih Matang & Sihat", description: "Memberi peluang kepada bayi untuk lahir lebih matang dan sihat" },
                    ]}
                    linkText="Hubungi doktor"
                    linkHref="/appointment"
                />

                <h5>Apa Yang Boleh Anda Lakukan?</h5>
                <ul className="custom-bullet-list">
                    <li>Jika anda mempunyai sejarah kelahiran pramatang atau keguguran lewat, berjumpalah dengan pakar sakit puan seawal kehamilan</li>
                    <li>Dapatkan pemantauan ultrasound serviks secara berkala</li>
                    <li>Rehat secukupnya dan amalkan gaya hidup sihat sepanjang kehamilan</li>
                    <li>Dengar nasihat pakar mengenai keperluan cerclage</li>
                </ul>
            </div>

            <div className="blog-details-img">

                <h5>
                Kesimpulan
                </h5>
                <p>
                Ketidakcukupan serviks bukanlah penghujung harapan untuk kehamilan yang sihat. Dengan pemantauan rapi dan rawatan seperti cerclage, 
                ramai wanita berjaya melahirkan bayi yang sihat dan cukup bulan.
                </p>
                <p>
                Jangan abaikan sejarah kehamilan anda. Dapatkan nasihat awal daripada pakar untuk merancang kehamilan yang lebih selamat dan terjamin.
                </p>

            </div>
        </div>
    </>
  );
};

export default CervicalInsufficiencyContent;