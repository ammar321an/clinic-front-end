import React from "react";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import Carousel from "../../../Carousel/Carousel";
import DataTable from "../../../DataTable/DataTable";

interface GynaeSurgeryContentProps {
  images: string[];
}

const innovationTableData = {
  headers: ["Teknik / Inovasi", "Apa yang Baharu", "Kelebihan", "Kekangan / Cabaran"],
  data: [
    [
        "Pembedahan robotik untuk penyakit benign (contoh: fibroid, histerektomi)",
        "Kawalan lebih balik, pandangan lebih jelas, sesuai untuk kes kompleks",
        "Kurang kehilangan darah, pemulihan lebih cepat, komplikasi lebih rendah berbanding pembedahan terbuka",
        "Kos tinggi, memerlukan latihan khusus, masa pembedahan mungkin lebih lama"
    ],
    [
        "Pembedahan robotik untuk kanser ginekologi",
        "Pembedahan peringkat awal kanser secara invasif minimal",
        "Pemulihan cepat, kurang kesakitan, tempoh hospital singkat",
        "Beberapa kajian menunjukkan hasil onkologi mungkin kurang baik dalam sesetengah jenis kanser jika tidak dilakukan oleh pakar"
    ],
    [
        "Pembedahan lubang tunggal & tanpa parut",
        "Pembedahan melalui pusat atau faraj",
        "Kosmetik lebih baik, kurang trauma tisu",
        "Sukar dilakukan, risiko teknik tinggi, memerlukan kemahiran tinggi"
    ],
    [
        "Protokol Pemulihan Segera (ERAS)",
        "Standard penjagaan pra dan pasca operasi",
        "Kurang masa di hospital, lebih cepat pulih, kurang ubat tahan sakit",
        "Kurang masa di hospital, lebih cepat pulih, kurang ubat tahan sakit"
    ],
    [
        "Teknologi baru & latihan",
        "Realiti tambahan (AR), panduan pembedahan, latihan simulasi",
        "Pembedahan lebih tepat, latihan lebih selamat, hasil lebih baik",
        "Masih dalam peringkat awal; kos tinggi; perlukan kajian jangka panjang"
    ]
  ]
};

const GynaeSurgeryContent: React.FC<GynaeSurgeryContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-4a.jpg",
                        alt: "Kemajuan Pembedahan Ginekologi: Pendekatan Moden dalam Penjagaan Kesihatan Wanita",
                        title: "Kemajuan Pembedahan Ginekologi: Pendekatan Moden dalam Penjagaan Kesihatan Wanita",
                        description: "Teknik pembedahan minimal invasif, robotik, dan tanpa parut kini mengubah cara penjagaan kesihatan wanita, menawarkan rawatan yang lebih selamat, kurang sakit, dan pemulihan yang lebih cepat."
                        },
                        {
                        src: "/images/blog/blog-details-4b.jpg",
                        alt: "Kemajuan Pembedahan Ginekologi: Pendekatan Moden dalam Penjagaan Kesihatan Wanita",
                        title: "Kemajuan Pembedahan Ginekologi: Pendekatan Moden dalam Penjagaan Kesihatan Wanita",
                        description: "Teknik pembedahan minimal invasif, robotik, dan tanpa parut kini mengubah cara penjagaan kesihatan wanita, menawarkan rawatan yang lebih selamat, kurang sakit, dan pemulihan yang lebih cepat."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Kemajuan dalam Pembedahan Ginekologi: Teknik Minimal Invasif, Robotik, dan Tanpa Parut yang Mengubah Penjagaan Kesihatan Wanita
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Dalam beberapa dekad yang lalu, pembedahan ginekologi telah mengalami transformasi besar. 
                Pembedahan terbuka dengan luka besar dan tempoh pemulihan yang lama kini semakin jarang. 
                Dengan kemunculan teknik pembedahan <span className="font-semibold">minimal invasif (MIS),</span> bantuan <span className="font-semibold">robotik,</span> 
                dan pendekatan <span className="font-semibold">tanpa parut,</span> pesakit kini menikmati pemulihan yang lebih cepat, kurang kesakitan, dan hasil 
                kosmetik yang lebih baik
                </p>
                <p>
                Artikel ini meneroka teknologi terkini dalam pembedahan ginekologi, kelebihannya, cabaran, dan masa depan bidang ini.
                </p>

               <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Apa Maksud “Minimal Invasif”, “Robotik”, dan “Tanpa Parut”?</span>
                        <ul className="custom-bullet-list mt-1">
                            <li><span className="font-semibold">Pembedahan Minimal Invasif (MIS):</span> Teknik seperti laparoskopi (melalui beberapa insisi kecil) dan histeroskopi (melalui saluran semula jadi seperti faraj) yang mengurangkan kecederaan pada badan.</li>
                            <li><span className="font-semibold">Pembedahan Bantuan Robotik:</span> Pakar bedah mengawal lengan robotik untuk melakukan pembedahan. Robot ini memberi kelebihan seperti penglihatan 3D, pergerakan instrumen yang lebih tepat, dan kawalan yang lebih stabil.</li>
                            <li><span className="font-semibold">Pendekatan Tanpa Parut:</span> Teknik seperti laparoskopi lubang tunggal (satu insisi di pusat) dan pembedahan melalui bukaan semula jadi (faraj) yang meninggalkan sedikit atau tiada parut yang kelihatan.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Inovasi Terkini & Bukti Klinikal</span>
                          <div className="mt-3 mb-3">
                            <DataTable
                            headers={innovationTableData.headers}
                            data={innovationTableData.data}
                            rowsPerPage={10}
                            />
                        </div>
                    </li>
                    <li>
                        <span className="list-title">Contoh & Kajian Kes</span>
                        <ul className="custom-bullet-list mt-1">
                            <li>Di pusat kanser terkemuka, penggunaan pembedahan robotik meningkat daripada 11% kepada 90% untuk kanser tertentu — masa pemulihan berkurang, dan keperluan ubat tahan sakit menurun.</li>
                            <li>Dalam kes <span className="font-semibold">myomektomi (buang fibroid),</span> pembedahan robotik terbukti membantu pesakit yang sukar menjalani laparoskopi biasa seperti wanita obes atau yang pernah menjalani pembedahan sebelum ini.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Cabaran & Risiko</span>
                        <p className="mt-1 mb-1">Walaupun teknologinya maju, terdapat perkara yang perlu dipertimbangkan:</p>
                        <ul className="custom-bullet-list mt-1">
                            <li><span className="font-semibold">Kos Tinggi:</span> Mesin robotik dan bahan guna habis sangat mahal.</li>
                            <li><span className="font-semibold">Kemahiran Pakar Bedah:</span> Tidak semua pakar bedah terlatih untuk teknik ini. Keputusan bergantung pada pengalaman.</li>
                            <li><span className="font-semibold">Risiko Onkologi:</span> Untuk sesetengah jenis kanser seperti kanser serviks, ada kajian menunjukkan pembedahan terbuka mungkin lebih selamat.</li>
                            <li><span className="font-semibold">Pemilihan Pesakit:</span> Tidak semua pesakit sesuai — contohnya, yang mempunyai fibroid besar, tisu parut lama, atau obesiti melampau.</li>
                            <li><span className="font-semibold">Teknikal & Pembelajaran:</span> Teknik seperti pembedahan satu lubang atau melalui faraj lebih sukar dan perlukan latihan tinggi.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Masa Depan Pembedahan Ginekologi</span>
                        <ul className="custom-bullet-list mt-1">
                            <li><span className="font-semibold">Robotik generasi baru </span>dengan maklum balas sentuhan (haptik), panduan berasaskan AI, dan pengimejan yang lebih baik.</li>
                            <li><span className="font-semibold">Pembedahan tanpa parut </span>melalui faraj (NOTES) semakin berkembang.</li>
                            <li><span className="font-semibold">Latihan realiti maya (VR) dan simulasi </span>dijangka mempercepat pembelajaran pakar baru.</li>
                            <li><span className="font-semibold">Lebih banyak penyelidikan </span>jangka panjang diperlukan untuk membandingkan hasil sebenar antara teknik baharu dan konvensional.</li>
                            <li><span className="font-semibold">Akses global: </span>Usaha sedang dilakukan untuk menjadikan teknologi ini mampu milik di negara membangun.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Apa Ertinya Untuk Pesakit?</span>
                        <ul className="custom-bullet-list mt-1">
                            <li>Anda boleh <span className="font-semibold">pulih lebih cepat,</span> mengalami <span className="font-semibold">kurang kesakitan,</span> dan <span className="font-semibold">kurang parut</span> jika pembedahan dilakukan dengan teknik MIS/robotik.</li>
                            <li>Sentiasa <span className="font-semibold">tanya doktor anda</span>: Adakah teknik ini sesuai untuk anda? Adakah mereka berpengalaman dengan teknik tersebut?</li>
                            <li><span className="font-semibold">Realistik:</span> Teknik tanpa parut sering masih melibatkan satu insisi kecil — bukan sepenuhnya tanpa luka.</li>
                        </ul>
                    </li>
                </ul>

                <h5>
                Kesimpulan
                </h5>
                <p>
                Pembedahan ginekologi telah memasuki era baru yang lebih canggih, kurang menyakitkan, 
                dan lebih selamat. Namun, setiap kes adalah unik — penting untuk berbincang dengan 
                pakar bedah yang berpengalaman dan memahami kelebihan serta risikonya.
                </p>
            </div>
        </div>
    </>
  );
};

export default GynaeSurgeryContent;