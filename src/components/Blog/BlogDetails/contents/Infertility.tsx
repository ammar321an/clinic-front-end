import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface InfertilityContentProps {
  images: string[];
}

const InfertilityContent: React.FC<InfertilityContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-3a.jpg",
                        alt: "Infertility Awareness",
                        title: "Infertility Awareness",
                        description: "Pentingnya kesedaran tentang kesuburan."
                        },
                        {
                        src: "/images/blog/blog-details-3b.jpg",
                        alt: "Infertility Awareness",
                        title: "Infertility Awareness",
                        description: "Pentingnya kesedaran tentang kesuburan."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Kesuburan, Pembekuan Telur & Perancangan Masa Depan
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Kesuburan adalah satu aspek penting dalam kehidupan ramai wanita, 
                terutama bagi mereka yang merancang untuk memiliki anak suatu hari nanti. 
                Namun, pelbagai faktor seperti usia, kesihatan, dan pilihan hidup boleh 
                mempengaruhi kemampuan seseorang wanita untuk hamil.
                </p>
                <p>
                Dalam artikel ini, kita akan membincangkan tentang <span className="font-semibold">kesuburan wanita, 
                teknologi pembekuan telur (egg freezing),</span> dan bagaimana perancangan masa 
                depan dapat membantu anda mengambil langkah yang tepat untuk 
                merealisasikan impian menjadi ibu.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Itu Kesuburan?
                </h5>
                <p>
                Kesuburan merujuk kepada keupayaan seseorang wanita untuk mengandung dan melahirkan anak. Ia dipengaruhi oleh faktor seperti:
                </p>

                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Umur</span>
                        <span className="list-description">Kesuburan wanita mula menurun selepas umur 30 tahun dan semakin ketara selepas 35 tahun.</span>
                    </li>
                    <li>
                        <span className="list-title">Kualiti dan kuantiti telur (oosit)</span>
                        <span className="list-description">Wanita dilahirkan dengan sejumlah telur yang semakin berkurang dari masa ke masa.</span>
                    </li>
                    <li>
                        <span className="list-title">Kesihatan reproduktif</span>
                        <span className="list-description">Masalah seperti PCOS, endometriosis, atau saluran fallopio tersumbat boleh menjejaskan kesuburan.</span>
                    </li>
                    <li>
                        <span className="list-title">Gaya hidup </span>
                        <span className="list-description">Merokok, tekanan, diet tidak seimbang, dan kurang bersenam juga memberi kesan negatif.</span>
                    </li>
                </ul>

                <h5>Pembekuan Telur (Egg Freezing)</h5>
                <p>
                    Pembekuan telur adalah satu prosedur perubatan di mana 
                    telur wanita diambil dan disimpan pada suhu sangat rendah 
                    untuk kegunaan masa depan. Ia merupakan pilihan yang 
                    semakin popular bagi wanita yang ingin:
                </p>
                <ul className="custom-bullet-list">
                    <li>
                        <span className="font-semibold">Menunda kehamilan</span> kerana sebab peribadi, kerjaya, atau pendidikan.
                    </li>
                    <li>
                        <span className="font-semibold">Menghadapi rawatan perubatan</span> yang mungkin menjejaskan kesuburan, seperti kemoterapi.
                    </li>
                    <li>
                        <span className="font-semibold">Memastikan peluang untuk hamil</span> apabila umur semakin meningkat.
                    </li>
                </ul>
            </div>

            <AlertNoticeBar
                title="Nota Menarik: Proses Pembekuan Telur"
                type="white"
                messageItems={[
                    { title: "Stimulasi ovari: ", description: "Wanita akan diberi hormon untuk merangsang ovari menghasilkan telur lebih daripada biasa." },
                    { title: "Pengambilan telur:", description: "Prosedur ringkas dilakukan untuk mengeluarkan telur dari ovari menggunakan jarum halus di bawah panduan ultrasound." },
                    { title: "Pembekuan: ", description: "Telur yang diambil akan dibekukan menggunakan teknologi cecair nitrogen pada suhu sangat rendah dan disimpan." },
                    { title: "Penggunaan masa depan: ", description: "Apabila anda bersedia untuk hamil, telur beku ini boleh dicairkan, disenyawakan dengan sperma, dan dipindahkan ke rahim melalui prosedur IVF." },
                ]}
                linkText="Hubungi doktor"
                linkHref="/appointment"
            />

            <div className="blog-details-img">
                <h5>
                Kebaikan dan Cabaran Pembekuan Telur
                </h5>
                <p><span className="font-semibold">Kebaikan:</span></p>

                <ul className="custom-bullet-list">
                    <li>Memberi lebih kawalan kepada wanita mengenai masa untuk hamil.</li>
                    <li>Peluang untuk melindungi kesuburan sebelum menjalani rawatan kesihatan yang berat</li>
                    <li>Meningkatkan peluang kehamilan pada usia lanjut.</li>
                </ul>

                <p><span className="font-semibold">Cabaran:</span></p>

                <ul className="custom-bullet-list">
                    <li>Kos rawatan yang agak tinggi dan tidak selalu ditanggung insurans.</li>
                    <li>Tidak semua telur yang dibekukan akan berjaya digunakan untuk kehamilan.</li>
                    <li>Risiko prosedur hormon dan pengambilan telur walaupun kecil.</li>
                </ul>

                <h5>Perancangan Masa Depan: Apa Yang Perlu Anda Pertimbangkan?</h5>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Faham kesuburan diri:</span>
                        <span className="list-description">Dapatkan pemeriksaan awal jika merancang untuk menunda kehamilan atau mempunyai sejarah masalah kesuburan.</span>
                    </li>
                    <li>
                        <span className="list-title">Berbincang dengan pakar:</span>
                        <span className="list-description">Pakar ginekologi atau pakar kesuburan boleh membantu menerangkan pilihan dan risiko.</span>
                    </li>
                    <li>
                        <span className="list-title">Rancang kewangan: </span>
                        <span className="list-description">Rawatan pembekuan telur dan IVF memerlukan perbelanjaan, jadi penting untuk membuat perancangan kewangan.</span>
                    </li>
                    <li>
                        <span className="list-title">Ambil kira faktor peribadi: </span>
                        <span className="list-description">Keutamaan kerjaya, hubungan, dan kesediaan mental juga perlu dipertimbangkan.</span>
                    </li>
                </ul>

                <h5>
                Kesimpulan
                </h5>
                <p>
                Kesuburan dan pembekuan telur adalah satu topik yang penting dalam perancangan kehidupan wanita masa kini. Dengan teknologi moden, 
                wanita kini mempunyai lebih banyak pilihan untuk mengawal masa dan cara mereka ingin memiliki anak.
                </p>
                <p>
                Walau bagaimanapun, <span className="font-semibold">perancangan yang bijak dan nasihat daripada pakar</span> adalah kunci untuk memastikan keputusan 
                yang dibuat sesuai dengan keadaan dan impian anda.
                </p>

            </div>
        </div>
    </>
  );
};

export default InfertilityContent;