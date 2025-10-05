import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface PcosContentProps {
  images: string[];
}

const PcosContent: React.FC<PcosContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-5a.jpg",
                        alt: "PCOS Awareness",
                        title: "PCOS Awareness",
                        description: "Pentingnya kesedaran tentang PCOS."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Sindrom Ovari Polisistik (PCOS): Apa Yang Perlu Diketahui, Dijangka & Cara Menguruskannya Setiap Hari
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                <span className="font-semibold">Sindrom Ovari Polisistik (PCOS)</span> ialah gangguan hormon yang biasa berlaku di kalangan wanita usia subur. 
                Ia bukan sahaja memberi kesan kepada kitaran haid, tetapi juga boleh menjejaskan kesuburan, berat badan, 
                kesihatan kulit, emosi, dan tahap insulin dalam badan. Walaupun PCOS adalah keadaan jangka panjang, 
                pengurusan harian yang betul boleh membantu wanita hidup dengan lebih sihat dan berkualiti.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Itu PCOS?
                </h5>
                <p>
                PCOS adalah keadaan yang berlaku apabila ovari wanita menghasilkan hormon androgen (hormon lelaki) secara berlebihan. 
                Ini menyebabkan gangguan kepada ovulasi, penghasilan telur, dan kitaran haid yang tidak teratur. Ciri utama PCOS termasuk:
                </p>
                <ul className="custom-bullet-list">
                    <li>
                        Kitaran haid tidak teratur atau tiada haid langsung
                    </li>
                    <li>
                        Pertumbuhan bulu berlebihan di muka atau badan (hirsutism)
                    </li>
                    <li>
                        Jerawat yang sukar dirawat
                    </li>
                    <li>
                        Penambahan berat badan atau kesukaran untuk menurunkan berat
                    </li>
                    <li>
                        Masalah kesuburan (sukar hamil)
                    </li>
                    <li>
                        Kehadiran banyak folikel kecil di ovari (dikesan melalui imbasan ultrasound)
                    </li>
                </ul>
                
                <h5>Apa Yang Menyebabkan PCOS?</h5>
                <p>Punca sebenar PCOS belum diketahui sepenuhnya, tetapi beberapa faktor berikut dipercayai menyumbang:</p>
                <ul className="custom-bullet-list">
                    <li>
                        <span className="font-semibold">Faktor genetik:</span> Kecenderungan keluarga dengan PCOS
                    </li>
                    <li>
                        <span className="font-semibold">Ketidakseimbangan hormon:</span> Tahap insulin yang tinggi boleh merangsang pengeluaran androgen berlebihan
                    </li>
                    <li>
                        <span className="font-semibold">Kerintangan insulin:</span> Ramai wanita dengan PCOS mempunyai rintangan terhadap insulin, yang boleh menyebabkan kenaikan berat dan peningkatan risiko diabetes jenis 2
                    </li>
                </ul>

                <h5>Bagaimana PCOS Dikesan?</h5>
                <p>Diagnosis PCOS biasanya berdasarkan gabungan beberapa perkara:</p>
                <ul className="custom-bullet-list">
                    <li>
                        <span className="font-semibold">Sejarah kesihatan dan simptom</span>
                    </li>
                    <li>
                        <span className="font-semibold">Ujian darah:</span> untuk periksa tahap hormon
                    </li>
                    <li>
                        <span className="font-semibold">Imbasan ultrasound pelvis :</span> untuk melihat struktur ovari dan kehadiran folikel kecil
                    </li>
                </ul>
                
                <h5>Apa Yang Boleh Dijangka?</h5>
                <p>PCOS boleh menjejaskan pelbagai aspek kehidupan wanita:</p>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Kesan terhadap kesuburan</span>
                        <span className="list-description">Ramai wanita dengan PCOS mengalami kesukaran untuk hamil kerana ovulasi yang tidak tetap. Namun, dengan rawatan dan pemantauan yang sesuai, kebanyakan wanita masih boleh hamil.</span>
                    </li>
                    <li>
                        <span className="list-title">Masalah metabolik</span>
                        <span className="list-description">Risiko tinggi untuk mendapat diabetes jenis 2, hipertensi, dan kolesterol tinggi.</span>
                    </li>
                    <li>
                        <span className="list-title">Kesihatan mental dan emosi</span>
                        <span className="list-description">
                            Simptom seperti pertumbuhan bulu berlebihan, jerawat, dan berat badan 
                            boleh memberi kesan psikologi — termasuk <span className="font-semibold">kemurungan, kebimbangan,</span> 
                            dan <span className="font-semibold">keyakinan diri yang rendah.</span>
                        </span>
                    </li>
                    <li>
                        <span className="list-title">Risiko jangka panjang</span>
                        <span className="list-description">
                            Risiko meningkat untuk mendapat <span className="font-semibold">kanser rahim</span> 
                            disebabkan kitaran haid yang tidak teratur dan kekurangan 
                            pengeluaran progesteron.
                        </span>
                    </li>
                </ul>

                <h2>Pengurusan Harian PCOS: Apa Yang Boleh Anda Lakukan</h2>
                <p>Walaupun PCOS tidak mempunyai "penyembuhan", ia boleh dikawal dengan strategi gaya hidup dan perubatan:</p>

                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Pemakanan sihat</span>
                        <ul className="custom-bullet-list">
                            <li>Pilih makanan indeks glisemik rendah (GI rendah) seperti bijirin penuh, kekacang, sayur hijau, dan buah-buahan.</li>
                            <li>Elakkan gula tambahan, makanan proses, dan minuman manis.</li>
                            <li>Kurangkan saiz hidangan dan makan secara berkala untuk kawal gula darah.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Aktiviti fizikal</span>
                        <ul className="custom-bullet-list">
                            <li>Bersenam sekurang-kurangnya 30 minit sehari, 5 hari seminggu (contoh: berjalan laju, berenang, zumba).</li>
                            <li>Senaman membantu meningkatkan sensitiviti insulin dan membantu penurunan berat.</li>
                        </ul> 
                    </li>
                    <li>
                        <span className="list-title">Penurunan berat badan</span>
                        <ul className="custom-bullet-list">
                            <li>Penurunan 5–10% berat badan boleh memperbaiki ovulasi, mengurangkan jerawat, dan memperbaiki kitaran haid.</li>
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Rawatan perubatan</span>
                        <ul className="custom-bullet-list">
                            <li><span className="font-semibold">Pil perancang:</span> untuk mengatur kitaran haid dan mengurangkan simptom seperti jerawat dan pertumbuhan bulu</li>
                            <li><span className="font-semibold">Metformin:</span> ubat yang bantu kawal gula darah dan mengurangkan rintangan insulin</li>
                            <li><span className="font-semibold">Clomiphene atau Letrozole:</span> digunakan untuk merangsang ovulasi bagi wanita yang ingin hamil</li>
                            <li><span className="font-semibold">Rawatan jerawat atau pertumbuhan bulu berlebihan:</span> termasuk ubat hormon atau terapi laser</li>
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Pengurusan tekanan</span>
                        <ul className="custom-bullet-list">
                            <li>Amalkan teknik relaksasi seperti pernafasan dalam, yoga, journaling atau bercakap dengan kaunselor.</li>
                            <li>PCOS boleh menyebabkan tekanan — dan tekanan juga boleh memburukkan gejala PCOS.</li>
                        </ul>
                    </li> 
                </ul>
            </div>

            <AlertNoticeBar
            type="faq"
            title="Soalan Lazim (FAQ)"
            faqItems={[
                {
                question: "Adakah wanita dengan PCOS boleh hamil?",
                answer: "Ya, dengan rawatan dan bimbingan daripada pakar kesuburan, ramai wanita berjaya hamil walaupun mempunyai PCOS.",
                isCorrect: true
                },
                {
                question: "Adakah PCOS hanya berlaku kepada wanita gemuk?",
                answer: "Tidak. PCOS boleh berlaku pada wanita dengan berat badan normal juga.",
                isCorrect: false
                },
                {
                question: "Adakah PCOS akan hilang selepas kahwin atau bersalin?",
                answer: "Tidak. PCOS adalah keadaan jangka panjang. Namun, simptom boleh dikawal dan menjadi lebih baik selepas bersalin dalam beberapa kes.",
                isCorrect: false
                },
                {
                question: "Adakah pil perancang akan menyembuhkan PCOS?",
                answer: "Tidak. Ia hanya membantu mengawal simptom — bukan menyembuhkan.",
                isCorrect: false
                }
            ]}
                linkText="Hubungi doktor"
                linkHref="/appointment"
            />

            <div className="blog-details-img">

                <h5>
                Kesimpulan
                </h5>
                <p>
                PCOS mungkin kelihatan menakutkan, tetapi dengan pengetahuan yang betul dan 
                tindakan proaktif, ia boleh diurus dengan baik. Gaya hidup sihat, pemakanan seimbang, 
                senaman berkala, dan sokongan perubatan boleh membantu anda menjalani kehidupan yang 
                sihat dan seimbang walaupun dengan PCOS.
                </p>
                <p>
                Jangan malu untuk berbincang dengan doktor, jururawat, atau pakar diet anda — pengurusan
                awal dan berterusan adalah kunci untuk mengurangkan komplikasi jangka panjang.
                </p>

            </div>
        </div>
    </>
  );
};

export default PcosContent;