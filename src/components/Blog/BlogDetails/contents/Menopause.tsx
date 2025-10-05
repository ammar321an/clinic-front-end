import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface MenopauseContentProps {
  images: string[];
}

const MenopauseContent: React.FC<MenopauseContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-6a.jpg",
                        alt: "Simptom “Red Flag” dalam Kesihatan Wanita: Tanda Bahaya yang Tidak Boleh Diabaikan",
                        title: "Red Flag Symptoms",
                        description: "Pentingnya mengenali simptom 'red flag' dalam kesihatan wanita."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Menopause dan Perimenopause: Lebih Dari Sekadar Klise
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Bila sebut tentang <span className="font-semibold">menopause</span>, ramai yang terbayang wanita berusia 
                yang tiba-tiba jadi “moody”, mudah panas, atau kurang ceria. Namun, 
                sebenarnya <span className="font-semibold">menopause dan perimenopause</span> jauh lebih kompleks dan penuh 
                dengan pengalaman unik bagi setiap wanita. Ia bukan sekadar babak 
                “akhir zaman subur” tetapi satu fasa penting yang memerlukan pemahaman 
                mendalam dan sokongan yang betul.
                </p>
                <p>
                Dalam artikel ini, kita akan bongkar fakta sebenar tentang menopause dan 
                perimenopause — apa yang wanita alami, cabaran tersembunyi, dan bagaimana menghadapinya dengan bijak.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Itu Menopause dan Perimenopause?
                </h5>
                <ul className="custom-bullet-list">
                    <li>
                        <span className="font-semibold">Perimenopause</span> ialah tempoh peralihan sebelum menopause, biasanya bermula 4-10 tahun sebelum haid berhenti sepenuhnya.
                    </li>
                    <li>
                        <span className="font-semibold">Menopause</span> ialah bila haid terakhir berlaku dan seseorang wanita tidak lagi mengalami haid selama 12 bulan berturut-turut.
                    </li>
                </ul>

                <p>
                Perimenopause adalah fasa di mana hormon wanita (terutama estrogen) mula turun naik secara tidak menentu, 
                menyebabkan pelbagai simptom yang boleh mengganggu kualiti hidup.
                </p>

                <h2>Simptom-simptom Perimenopause dan Menopause</h2>
                <p>Setiap wanita mengalami simptom yang berbeza, dan bukan semua mengalami “klise” yang selalu disebut, seperti:</p>
                <ul className="custom-bullet-list">
                    <li>Hot flashes (serangan panas)</li>
                    <li>Peluh malam</li>
                    <li>Sukar tidur</li>
                    <li>Perubahan mood, mudah marah atau sedih</li>
                    <li>Masalah tumpuan dan ingatan</li>
                    <li>Kekeringan faraj dan kesakitan semasa hubungan intim</li>
                    <li>Kegemukan di bahagian perut</li>
                    <li>Risiko osteoporosis dan masalah jantung bertambah</li>
                </ul>

                <p>
                    Namun, banyak wanita juga menghadapi <span className="font-semibold">simptom yang lebih halus</span> dan jarang dibincangkan, 
                    seperti keletihan kronik, kegelisahan, dan perubahan dalam hubungan sosial atau seksual.
                </p>

                <h5>Kenapa Menopause Perlu Diberi Perhatian Serius?</h5>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Fasa perubahan fizikal dan emosi yang besar</span>
                        <ul className="custom-bullet-list">
                            <li>Bukan sekadar “masalah usia”, menopause mempengaruhi hormon yang memberi kesan kepada hampir semua sistem badan.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Pengurusan kesihatan jangka panjang</span>
                        <ul className="custom-bullet-list">
                            <li>Risiko penyakit kronik seperti osteoporosis, penyakit jantung, dan diabetes meningkat selepas menopause.</li>
                        </ul> 
                    </li>
                    <li>
                        <span className="list-title">Kualiti hidup</span>
                        <ul className="custom-bullet-list">
                            <li>Tanpa rawatan atau sokongan yang sesuai, simptom menopause boleh menjejaskan kehidupan harian, kerjaya, dan hubungan peribadi.</li>
                        </ul>
                    </li> 
                </ul>


                <h5>Cara Menghadapi Menopause dan Perimenopause dengan Bijak</h5>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Dapatkan maklumat tepat</span>
                        <ul className="custom-bullet-list">
                            <li>Fahami apa yang berlaku pada tubuh anda dan jangan percaya mitos yang salah.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Jaga gaya hidup sihat</span>
                        <ul className="custom-bullet-list">
                            <li>Amalkan diet seimbang, bersenam secara konsisten, dan cukup tidur.</li>
                        </ul> 
                    </li>
                    <li>
                        <span className="list-title">Rawatan hormon</span>
                        <ul className="custom-bullet-list">
                            <li>Dalam sesetengah kes, terapi hormon boleh membantu mengurangkan simptom teruk, tetapi mesti dilakukan di bawah pengawasan doktor.</li>
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Sokongan emosi</span>
                        <ul className="custom-bullet-list">
                            <li>Jangan malu untuk bercakap tentang apa yang anda rasa. Kaunseling dan kumpulan sokongan boleh memberi banyak manfaat.</li>
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Pemeriksaan kesihatan berkala</span>
                        <ul className="custom-bullet-list">
                            <li>Pantau risiko osteoporosis, penyakit jantung, dan masalah kesihatan lain.</li>
                        </ul>
                    </li> 
                </ul>
            </div>

            <div className="blog-details-img">

                <h5>
                Kesimpulan
                </h5>
                <p>
                Menopause dan perimenopause bukanlah fasa yang perlu ditakuti atau dipandang rendah. 
                Ia adalah proses semula jadi yang memerlukan perhatian, pemahaman, dan sokongan yang betul. 
                Dengan pendekatan yang tepat, wanita boleh terus menjalani kehidupan yang aktif, sihat, 
                dan bermakna walaupun selepas menopaus.
                </p>

            </div>
        </div>
    </>
  );
};

export default MenopauseContent;