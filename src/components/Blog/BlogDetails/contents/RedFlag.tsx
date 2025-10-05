import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface RedFlagContentProps {
  images: string[];
}

const RedFlagContent: React.FC<RedFlagContentProps> = ({ images }) => {
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
                Simptom “Red Flag” dalam Kesihatan Wanita: Tanda Bahaya yang Tidak Boleh Diabaikan
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Ramai wanita mengalami simptom berkaitan sistem reproduktif seperti senggugut, keputihan, 
                atau perubahan kitaran haid dari semasa ke semasa. Namun, terdapat beberapa simptom yang 
                <span className="font-semibold">tidak boleh diabaikan</span> — dikenali sebagai <span className="font-semibold">“red flag symptoms”</span> — yang mungkin menunjukkan 
                masalah kesihatan serius seperti jangkitan teruk, ketumbuhan, atau kanser ginekologi.
                </p>
                <p>
                Mengenali tanda-tanda amaran ini dan mendapatkan rawatan segera boleh menyelamatkan nyawa serta meningkatkan peluang pemulihan.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Maksud Simptom “Red Flag”?
                </h5>
                <p>
                Simptom <span className="font-semibold">“red flag”</span> ialah gejala yang <span className="font-semibold">luar biasa, berterusan, 
                atau membimbangkan</span> yang mungkin menandakan masalah perubatan 
                yang memerlukan perhatian segera daripada pakar, termasuk pakar 
                ginekologi.
                </p>

                <h2>⚠️ 10 Simptom "Red Flag" Wanita Perlu Tahu</h2>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Pendarahan faraj yang tidak normal</span>
                        <ul className="custom-bullet-list">
                            <li>Pendarahan di luar waktu haid, selepas hubungan intim, atau selepas menopaus.</li>
                            <li>Haid yang sangat banyak hingga memerlukan penukaran tuala wanita setiap 1-2 jam.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Boleh menandakan fibroid, polip, gangguan hormon, atau kanser serviks / rahim."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Sakit pelvik yang teruk atau berterusan</span>
                        <ul className="custom-bullet-list">
                            <li>Sakit tajam atau berdenyut di bawah perut.</li>
                            <li>Bertambah sakit semasa haid atau bersama suami.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Mungkin tanda endometriosis, jangkitan pelvis (PID), sista ovari pecah, atau kehamilan ektopik — yang boleh mengancam nyawa. "
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul> 
                    </li>
                    <li>
                        <span className="list-title">Keputihan yang luar biasa</span>
                        <ul className="custom-bullet-list">
                            <li>Keputihan yang berbau busuk, pekat seperti keju, berwarna kuning/hijau/coklat.</li>
                            <li>Disertai gatal, sakit semasa kencing, atau demam.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Mungkin jangkitan kulat, bakteria, atau penyakit jangkitan seksual (STD)."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Benjolan atau bengkak luar biasa di bahagian faraj atau pelvik</span>
                        <ul className="custom-bullet-list">
                            <li>Benjolan yang tumbuh dengan cepat atau tidak sakit tapi semakin membesar.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Perlu diperiksa untuk menilai kemungkinan ketumbuhan, sista, atau kanser."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Hilang selera makan dan turun berat badan tanpa sebab</span>
                        <ul className="custom-bullet-list">
                            <li>Berat badan turun walaupun makan seperti biasa atau lebih.</li>
                            <li>Cepat kenyang dan rasa buncit walaupun makan sedikit.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Gejala ini biasa berlaku dalam kanser ovari atau penyakit serius lain."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Perut membuncit atau terasa penuh sepanjang masa</span>
                        <ul className="custom-bullet-list">
                            <li>Rasa seperti hamil walaupun tidak.</li>
                            <li>Sukar memakai pakaian lama kerana perut membesar tanpa sebab.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Gejala biasa dalam kanser ovari yang sering tidak disedari pada peringkat awal."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Sakit semasa hubungan intim</span>
                        <ul className="custom-bullet-list">
                            <li>Sakit yang konsisten atau bertambah buruk dari masa ke masa.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Mungkin disebabkan endometriosis, jangkitan, atau masalah struktur dalaman rahim/faraj."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Sakit semasa hubungan intim</span>
                        <ul className="custom-bullet-list">
                            <li>Sakit yang konsisten atau bertambah buruk dari masa ke masa.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Mungkin disebabkan endometriosis, jangkitan, atau masalah struktur dalaman rahim/faraj."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li> 
                    <li>
                        <span className="list-title">Masalah kencing atau buang air besar</span>
                        <ul className="custom-bullet-list">
                            <li>Sakit, kerap kencing, atau sukar membuang air kecil atau besar.</li>
                            <li>Terdapat darah dalam air kencing atau najis.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Mungkin tanda masalah sistem urinari atau penyebaran jangkitan/tumor."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Demam berpanjangan selepas prosedur ginekologi</span>
                        <ul className="custom-bullet-list">
                            <li>Selepas IUD dipasang, D&C, pembedahan atau biopsi.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Tanda jangkitan dalam rahim atau pelvis yang perlu rawatan segera."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Tiada haid secara tiba-tiba atau haid terlalu kerap</span>
                        <ul className="custom-bullet-list">
                            <li>Tidak datang haid selama lebih 3 bulan tanpa sebab jelas (bukan mengandung).</li>
                            <li>Datang haid setiap 2 minggu atau lebih kerap.</li>
                            <AlertNoticeBar
                                type="white"
                                title="Kenapa bahaya?"
                                message="Gangguan hormon, PCOS, masalah tiroid, atau masalah rahim yang memerlukan pemeriksaan."
                                linkText="Hubungi doktor"
                                linkHref="/appointment"
                                showCloseButton={true}
                            />
                        </ul>
                    </li>
                </ul>

                <h5>Bila Anda Perlu Jumpa Pakar Ginekologi Dengan Segera</h5>
                <p>Anda <span className="font-semibold">perlu segera ke hospital atau klinik pakar ginekologi</span> jika mengalami:</p>
                <ul className="custom-bullet-list">
                    <li>
                        Pendarahan faraj yang sangat banyak atau berketul
                    </li>
                    <li>
                        Sakit perut bawah yang tiba-tiba dan teruk
                    </li>
                    <li>
                        Pengsan atau hampir pengsan bersama sakit pelvik
                    </li>
                    <li>
                        Demam panas selepas prosedur berkaitan rahim
                    </li>
                    <li>
                        Tanda-tanda kehamilan luar rahim (kehamilan positif tetapi tiada kantung dalam rahim)
                    </li>
                    <li>
                        Benjolan atau perubahan pada kawasan alat sulit
                    </li>
                </ul>

                <AlertNoticeBar
                    type="info"
                    title="Ingat!"
                    message="Ramai wanita cenderung menangguhkan rawatan kerana rasa malu, takut, atau menganggap simptom “biasa”. Tapi dalam kes kesihatan wanita — lebih awal anda bertindak, lebih baik hasil rawatan."
                    linkText="Hubungi doktor"
                    linkHref="/appointment"
                    showCloseButton={true}
                />
                
                <h5>Langkah Tindakan</h5>
                <ul className="custom-bullet-list">
                    <li>
                        <span className="font-semibold">Dengar badan anda. </span>Anda tahu apa yang biasa dan luar biasa bagi diri sendiri.
                    </li>
                    <li>
                        <span className="font-semibold">Catat simptom – </span>bila berlaku, berapa lama, apa yang anda rasa.
                    </li>
                    <li>
                        <span className="font-semibold">Jumpa doktor atau pakar ginekologi </span>seawal mungkin jika ada keraguan.
                    </li>
                </ul>
            </div>

            <div className="blog-details-img">

                <h5>
                Kesimpulan
                </h5>
                <p>
                Simptom “red flag” adalah isyarat penting dari tubuh anda — 
                jangan abaikan. Walaupun tidak semua simptom bermaksud 
                penyakit serius, hanya pemeriksaan perubatan boleh memberi kepastian.
                </p>
                <p>
                Utamakan kesihatan anda. Pemeriksaan awal boleh menyelamatkan masa, tenaga, dan nyawa.
                </p>

            </div>
        </div>
    </>
  );
};

export default RedFlagContent;