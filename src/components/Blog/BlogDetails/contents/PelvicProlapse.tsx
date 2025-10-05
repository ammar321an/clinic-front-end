import React from "react";
import Link from "next/link";
import Image from "next/image";
import AlertNoticeBar from "../../../AlertNoticeBar/AlertNoticeBar";
import SimpleAlert from "../../../AlertNoticeBar/SimpleAlert";
import ChatBubble from "../../../ChatBubble/ChatBubble";
import Carousel from "../../../Carousel/Carousel";

interface PelvicProlapseContentProps {
  images: string[];
}

const PelvicProlapseContent: React.FC<PelvicProlapseContentProps> = ({ images }) => {
  return (
    <>
        <div className="blog-details-item">
            <div className="blog-details-img">
                <Carousel
                    className="mb-5"
                    items={[
                        {
                        src: "/images/blog/blog-details-9a.jpg",
                        alt: "Prolaps Organ Pelvis (Peranakan Jatuh): Apa Wanita Perlu Tahu",
                        title: "Prolaps Organ Pelvis (Peranakan Jatuh): Apa Wanita Perlu Tahu",
                        description: "Keadaan organ pelvis turun dan menekan faraj, sering dialami wanita selepas bersalin, menopaus, atau tekanan berulang."
                        }
                    ]}
                    autoPlay={false}
                    autoPlayInterval={5000}
                    showIndicators={true}
                    showControls={true}
                    controlColor="oklch(90.1% 0.058 230.902)"
                />
                <h2>
                Prolaps Organ Pelvis (Peranakan Jatuh): Apa Wanita Perlu Tahu
                </h2>

                <h5>
                Pengenalan
                </h5>
                <p>
                Prolaps organ pelvis (Pelvic Organ Prolapse – POP/Peranakan Jatuh) ialah 
                keadaan di mana <span className="font-semibold">organ dalam pelvis seperti rahim, pundi kencing, atau 
                rektum turun dari posisi asal dan menekan ke arah faraj.</span> Keadaan ini sering 
                berlaku dalam kalangan wanita, terutamanya selepas melahirkan anak secara 
                normal, semasa menopaus, atau jika pernah mengalami tekanan berulang di kawasan pelvis.
                </p>
                <p>
                Walaupun biasa berlaku, ramai wanita <span className="font-semibold">malu</span> atau <span className="font-semibold">tidak menyedari</span> bahawa simptom yang mereka 
                alami mungkin tanda prolaps. Dengan kesedaran dan rawatan yang sesuai, masalah ini boleh 
                dikawal dan dirawat.
                </p>
            </div>

            <div className="blog-details-img">
                <h5>
                Apa Sebenarnya Berlaku Dalam Prolaps Organ Pelvis?
                </h5>
                <p>
                Otot dan tisu sokongan dalam lantai pelvis bertanggungjawab memegang organ-organ dalaman wanita seperti:
                </p>
                <ul className="custom-bullet-list">
                    <li>
                        Rahim
                    </li>
                    <li>
                        Pundi kencing
                    </li>
                    <li>
                        Rektum (bahagian akhir usus besar)
                    </li>
                    <li>
                        Vagina
                    </li>
                </ul>

                <p>
                Apabila otot ini menjadi lemah atau rosak — biasanya disebabkan oleh <span className="font-semibold">proses bersalin, 
                penuaan, atau tekanan berlebihan</span> — organ-organ ini boleh turun (prolaps) dan menonjol 
                ke dalam atau luar faraj.
                </p>
                
                <h5>Jenis-Jenis Prolaps Organ Pelvis</h5>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Cystocele (Prolaps Pundi Kencing)</span>
                        <span className="list-description">Pundi kencing turun ke arah faraj.</span>
                    </li>
                    <li>
                        <span className="list-title">Rectocele (Prolaps Rektum)</span>
                        <span className="list-description">Bahagian usus besar menekan ke arah dinding belakang faraj.</span>
                    </li>
                    <li>
                        <span className="list-title">Uterine prolapse (Prolaps Rahim)</span>
                        <span className="list-description">
                            Rahim turun ke dalam faraj dan dalam kes teruk, boleh terkeluar dari faraj.
                        </span>
                    </li>
                    <li>
                        <span className="list-title">Enterocele</span>
                        <span className="list-description">Gelung usus kecil menolak bahagian atas faraj.</span>
                    </li>
                    <li>
                        <span className="list-title">Vaginal vault prolapse</span>
                        <span className="list-description">Bahagian atas faraj (biasanya selepas histerektomi) menjadi longgar dan turun ke bawah.</span>
                    </li>
                </ul>
                <AlertNoticeBar
                type="white"
                title="Nota Penting: Tanda-Tanda dan Gejala Prolaps"
                message="Ramai wanita mengalami gejala berikut:"
                bulletPoints={[
                    "Rasa berat atau tekanan di kawasan pelvis",
                    "Benjolan terasa atau kelihatan keluar dari faraj",
                    "Sukar atau tidak puas buang air kecil atau besar",
                    "Kerap kencing atau kebocoran urin (inkontinens)",
                    "Sakit semasa hubungan seksual",
                    "Sakit belakang bawah",
                    "Kerap sembelit"
                ]}
                messageBottom="Kadang-kadang, gejala hanya muncul ketika berdiri lama, bersenam, atau di penghujung hari."
                linkText="Hubungi doktor"
                linkHref="/appointment"
                />

                <h5>Siapa Berisiko Mengalami Prolaps Organ Pelvis?</h5>
                <ul className="custom-bullet-list">
                    <li>
                        Pernah melahirkan anak secara normal (lebih-lebih lagi jika kelahiran sukar atau bayi besar)
                    </li>
                    <li>
                        Umur meningkat dan menopaus (penurunan estrogen melemahkan tisu sokongan)
                    </li>
                    <li>
                        Kerap angkat berat
                    </li>
                    <li>
                        Batuk kronik (seperti pesakit asma atau perokok)
                    </li>
                    <li>
                        Sembelit kronik
                    </li>
                    <li>
                        Berat badan berlebihan (obesiti)
                    </li>
                    <li>
                        Sejarah pembedahan pelvis atau histerektomi
                    </li>
                </ul>

                <h5>Bagaimana Prolaps Dikenalpasti?</h5>
                <p>Pemeriksaan pelvis oleh doktor pakar sakit puan boleh mengenal pasti tahap dan jenis prolaps. Kadang kala ujian tambahan seperti:</p>
                <ul className="custom-bullet-list">
                    <li>Ujian dinamik air kencing (urodynamics)</li>
                    <li>Ultrasound pelvis</li>
                    <li>MRI pelvis (jika perlu)</li>
                </ul>
                <p>akan dijalankan untuk perancangan rawatan.</p>

                <h5>Pilihan Rawatan untuk Prolaps</h5>
                <p>Rawatan bergantung kepada tahap prolaps, simptom dan keperluan pesakit. Antara pilihan termasuk:</p>
                <ul className="custom-numbered-list">
                    <li>
                        <span className="list-title">Rawatan Konservatif (bukan pembedahan)</span>
                        <ul className="custom-bullet-list mt-2">
                            <li><span className="font-semibold">Senaman Kegel (senaman lantai pelvis)</span> Menguatkan otot untuk menyokong organ dalaman.</li>
                            <li><span className="font-semibold">Pessary atau gelang faraj</span> Alat silikon dimasukkan ke dalam faraj untuk menyokong organ yang turun.</li>
                            <li><span className="font-semibold">Terapi hormon tempatan (krim estrogen faraj)</span> Untuk wanita menopaus — membantu menguatkan tisu faraj.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="list-title">Rawatan Pembedahan</span>
                        <p className="mb-2 mt-2">Bagi prolaps yang lebih teruk atau tidak bertindak balas kepada rawatan konservatif:</p>
                        <ul className="custom-bullet-list">
                            <li><span className="font-semibold">Pembaikan faraj (vaginal repair)</span></li>
                            <li><span className="font-semibold">Sling atau mesh</span> untuk menyokong organ</li>
                            <li><span className="font-semibold">Histerektomi</span> (buang rahim jika perlu dan sesuai) – Vnotes (pembedahan tanpa parut abdomen)</li>
                        </ul> 
                    </li>
                </ul>
                
                <h5>Apa Yang Boleh Wanita Lakukan Untuk Mencegah atau Mengawal Prolaps?</h5>
                <ul className="custom-bullet-list">
                    <li>Lakukan <span className="font-semibold">senaman lantai pelvis (Kegel)</span> secara konsisten</li>
                    <li>Elakkan angkat benda berat</li>
                    <li>Rawat sembelit dengan diet tinggi serat dan air secukupnya</li>
                    <li>Kekalkan berat badan sihat</li>
                    <li>Hentikan merokok untuk kurangkan batuk kronik</li>
                    <li>Dapatkan rawatan awal jika ada simptom</li>
                </ul>
            </div>

            <div className="blog-details-img">

                <h5>
                Kesimpulan
                </h5>
                <p>
                Prolaps organ pelvis bukanlah sesuatu yang perlu dimalukan. Ia adalah masalah biasa 
                dan boleh berlaku kepada mana-mana wanita, terutama selepas bersalin atau usia 
                meningkat. Dengan <span className="font-semibold">rawatan awal, gaya hidup sihat dan sokongan pakar,</span> wanita boleh 
                kembali menjalani kehidupan yang aktif dan selesa.
                </p>
                <p>
                Jika anda mempunyai simptom atau rasa tidak pasti, <span className="font-semibold">jangan tunggu — berjumpalah 
                dengan pakar ginekologi anda untuk pemeriksaan dan nasihat lanjut.</span>
                </p>

            </div>
        </div>
    </>
  );
};

export default PelvicProlapseContent;