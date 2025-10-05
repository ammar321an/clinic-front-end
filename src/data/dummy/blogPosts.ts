export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  createdAt: string;
}

export interface BlogDetailData {
  slug: string;
  title: string;
  author: string | null;
  publishedDate: string;
  metaDescription: string;
  ogImage: string;
  images: string[];
  contentComponent: string; // Name of the content component file
  tags: string[];
  category: string | null;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Kanser Ginekologi: Saringan, Faktor Risiko & Pengesanan Awal",
    excerpt: "Kanser ginekologi merujuk kepada kanser yang menyerang organ pembiakan wanita seperti rahim, ovari, serviks, faraj, dan vulva. Ia merupakan salah satu penyebab utama kematian wanita di seluruh dunia, tetapi dengan saringan dan pengesanan awal, risiko boleh dikurangkan secara signifikan.",
    image: "/images/blog/blog-details-2a.jpg",
    slug: "kanser-ginekologi-saringan-faktor-risiko-pengesanan-awal",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Kesuburan, Pembekuan Telur & Perancangan Masa Depan",
    excerpt: "Kesuburan adalah satu aspek penting dalam kehidupan ramai wanita, terutama bagi mereka yang merancang untuk memiliki anak suatu hari nanti. Namun, pelbagai faktor seperti usia, kesihatan, dan pilihan hidup boleh mempengaruhi kemampuan seseorang wanita untuk hamil.",
    image: "/images/blog/blog-details-3a.jpg",
    slug: "kesuburan-pembekuan-telur-perancangan-masa-depan",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 3,
    title: "Endometriosis: Kesakitan Senyap, Perjuangan Tersembunyi",
    excerpt: "Endometriosis adalah penyakit ginekologi kronik yang sering disalah anggap sebagai senggugut biasa. Ketahui simptom, rawatan, dan cara hidup dengan endometriosis.",
    image: "/images/blog/blog-details.jpg",
    slug: "endometriosis-kesakitan-senyap-perjuangan-tersembunyi",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 4,
    title: "Kemajuan dalam Pembedahan Ginekologi: Teknik Minimal Invasif, Robotik, dan Tanpa Parut yang Mengubah Penjagaan Kesihatan Wanita",
    excerpt: "Dalam beberapa dekad yang lalu, pembedahan ginekologi telah mengalami transformasi besar. Pembedahan terbuka dengan luka besar dan tempoh pemulihan yang lama kini semakin jarang. Dengan kemunculan teknik pembedahan minimal invasif (MIS), bantuan robotik, dan pendekatan tanpa parut, pesakit kini menikmati pemulihan yang lebih cepat, kurang kesakitan, dan hasil kosmetik yang lebih baik.",
    image: "/images/blog/blog-details-4a.jpg",
    slug: "kemajuan-pembedahan-ginekologi-teknik-minimal-invasif-robotik-dan-tanpa-parut-yang-mengubah-penjagaan-kesihatan-wanita",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 5,
    title: "Sindrom Ovari Polisistik (PCOS): Apa Yang Perlu Diketahui, Dijangka & Cara Menguruskannya Setiap Hari",
    excerpt: "Sindrom Ovari Polisistik (PCOS) ialah gangguan hormon yang biasa berlaku di kalangan wanita usia subur. Ia bukan sahaja memberi kesan kepada kitaran haid, tetapi juga boleh menjejaskan kesuburan, berat badan, kesihatan kulit, emosi, dan tahap insulin dalam badan. Walaupun PCOS adalah keadaan jangka panjang, pengurusan harian yang betul boleh membantu wanita hidup dengan lebih sihat dan berkualiti.",
    image: "/images/blog/blog-details-5a.jpg",
    slug: "sindrom-ovari-polisistik-pcos-apa-yang-perlu-diketahui-dijangka-cara-menguruskannya-setiap-hari",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 6,
    title: "Simptom “Red Flag” Dalam Kalangan Wanita: Bila Perlu Jumpa Pakar Ginekologi Dengan Segera",
    excerpt: "Ramai wanita mengalami simptom berkaitan sistem reproduktif seperti senggugut, keputihan, atau perubahan kitaran haid dari semasa ke semasa. Namun, terdapat beberapa simptom yang tidak boleh diabaikan — dikenali sebagai “red flag symptoms” — yang mungkin menunjukkan masalah kesihatan serius seperti jangkitan teruk, ketumbuhan, atau kanser ginekologi.",
    image: "/images/blog/blog-details-6a.jpg",
    slug: "simptom-red-flag-dalam-kalangan-wanita-bila-perlu-jumpa-pakar-ginekologi-dengan-segera",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 7,
    title: "Menopause dan Perimenopause: Lebih Dari Sekadar Klise",
    excerpt: "Bila sebut tentang menopause, ramai yang terbayang wanita berusia yang tiba-tiba jadi “moody”, mudah panas, atau kurang ceria. Namun, sebenarnya menopause dan perimenopause jauh lebih kompleks dan penuh dengan pengalaman unik bagi setiap wanita. Ia bukan sekadar babak “akhir zaman subur” tetapi satu fasa penting yang memerlukan pemahaman mendalam dan sokongan yang betul.",
    image: "/images/blog/blog-details-7a.jpg",
    slug: "menopause-dan-perimenopause-lebih-dari-sekadar-klise",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 8,
    title: "Ketidakcukupan Serviks (Cervical Insufficiency) & Cerclage: Perlindungan Kehamilan Anda",
    excerpt: "Kehamilan sepatutnya berlangsung selama kira-kira 40 minggu, namun bagi sesetengah wanita, rahim tidak dapat mengekalkan kandungan kerana serviks yang lemah. Keadaan ini dikenali sebagai “cervical insufficiency” atau ketidakcukupan serviks, dan ia boleh menyebabkan keguguran lewat atau kelahiran pramatang.",
    image: "/images/blog/blog-details-8a.jpg",
    slug: "ketidakcukupan-serviks-cervical-insufficiency-cerclage-perlindungan-kehamilan-anda",
    createdAt: "2025-10-01T10:00:00Z",
  },
  {
    id: 9,
    title: "Prolaps Organ Pelvis (Peranakan Jatuh)): Apa Wanita Perlu Tahu",
    excerpt: "Prolaps organ pelvis (Pelvic Organ Prolapse – POP/Peranakan Jatuh) ialah keadaan di mana organ dalam pelvis seperti rahim, pundi kencing, atau rektum turun dari posisi asal dan menekan ke arah faraj. Keadaan ini sering berlaku dalam kalangan wanita, terutamanya selepas melahirkan anak secara normal, semasa menopaus, atau jika pernah mengalami tekanan berulang di kawasan pelvis.",
    image: "/images/blog/blog-details-9a.jpg",
    slug: "prolaps-organ-pelvis-peranakan-jatuh-apa-wanita-perlu-tahu",
    createdAt: "2025-10-01T10:00:00Z",
  },
];

export const blogDetailsData: BlogDetailData[] = [
  {
    slug: "endometriosis-kesakitan-senyap-perjuangan-tersembunyi",
    title: "Endometriosis: Kesakitan Senyap, Perjuangan Tersembunyi",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-01-13T10:00:00Z",
    metaDescription: "Endometriosis adalah penyakit ginekologi kronik yang sering disalah anggap sebagai senggugut biasa. Ketahui simptom, rawatan, dan cara hidup dengan endometriosis.",
    ogImage: "/images/blog/blog-details.jpg",
    images: ["/images/blog/blog-details.jpg"],
    contentComponent: "Endometriosis",
    tags: ["Endometriosis", "Women Health", "Gynecology"],
    category: "Women Health",
  },
  {
    slug: "kanser-ginekologi-saringan-faktor-risiko-pengesanan-awal",
    title: "Kanser Ginekologi: Saringan, Faktor Risiko & Pengesanan Awal",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-02-20T10:00:00Z",
    metaDescription: "Artikel ini akan membincangkan tentang pentingnya saringan kanser ginekologi, faktor risiko utama, dan bagaimana pengesanan awal boleh menyelamatkan nyawa.",
    ogImage: "/images/blog/blog-details-2a.jpg",
    images: ["/images/blog/blog-details-2a.jpg"],
    contentComponent: "GynaeCancer",
    tags: ["Kanser Ginekologi", "Kesihatan Wanita", "Ginekologi"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "kesuburan-pembekuan-telur-perancangan-masa-depan",
    title: "Kesuburan, Pembekuan Telur & Perancangan Masa Depan",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-02-20T10:00:00Z",
    metaDescription: "Artikel ini membincangkan tentang kesuburan, proses pembekuan telur, dan kepentingan perancangan masa depan bagi wanita.",
    ogImage: "/images/blog/blog-details-3a.jpg",
    images: ["/images/blog/blog-details-3a.jpg"],
    contentComponent: "Infertility",
    tags: ["Kesuburan", "Pembekuan Telur", "Perancangan Keluarga"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "kemajuan-pembedahan-ginekologi-teknik-minimal-invasif-robotik-dan-tanpa-parut-yang-mengubah-penjagaan-kesihatan-wanita",
    title: "Kemajuan dalam Pembedahan Ginekologi: Teknik Minimal Invasif, Robotik, dan Tanpa Parut yang Mengubah Penjagaan Kesihatan Wanita",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-03-15T10:00:00Z",
    metaDescription: "Pembedahan ginekologi telah mengalami transformasi besar dengan kemunculan teknik pembedahan minimal invasif (MIS), bantuan robotik, dan pendekatan tanpa parut.",
    ogImage: "/images/blog/blog-details-4a.jpg",
    images: ["/images/blog/blog-details-4a.jpg"],
    contentComponent: "GynaeSurgery",
    tags: ["Pembedahan Ginekologi", "Teknik Minimal Invasif", "Robotik"],
    category: "Teknologi Perubatan",
  },
  {
    slug: "sindrom-ovari-polisistik-pcos-apa-yang-perlu-diketahui-dijangka-cara-menguruskannya-setiap-hari",
    title: "Sindrom Ovari Polisistik (PCOS): Apa Yang Perlu Diketahui, Dijangka & Cara Menguruskannya Setiap Hari",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-04-10T10:00:00Z",
    metaDescription: "PCOS adalah gangguan hormon yang biasa berlaku di kalangan wanita usia subur. Pengurusan harian yang betul boleh membantu wanita hidup dengan lebih sihat dan berkualiti.",
    ogImage: "/images/blog/blog-details-5a.jpg",
    images: ["/images/blog/blog-details-5a.jpg"],
    contentComponent: "Pcos",
    tags: ["PCOS", "Sindrom Ovari Polisistik", "Kesihatan Wanita"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "simptom-red-flag-dalam-kalangan-wanita-bila-perlu-jumpa-pakar-ginekologi-dengan-segera",
    title: "Simptom “Red Flag” Dalam Kalangan Wanita: Bila Perlu Jumpa Pakar Ginekologi Dengan Segera",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-05-05T10:00:00Z",
    metaDescription: "Terdapat beberapa simptom yang tidak boleh diabaikan — dikenali sebagai “red flag symptoms” — yang mungkin menunjukkan masalah kesihatan serius seperti jangkitan teruk, ketumbuhan, atau kanser ginekologi.",
    ogImage: "/images/blog/blog-details-6a.jpg",
    images: ["/images/blog/blog-details-6a.jpg"],
    contentComponent: "RedFlag",
    tags: ["Red Flag Symptoms", "Kesihatan Wanita", "Ginekologi"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "menopause-dan-perimenopause-lebih-dari-sekadar-klise",
    title: "Menopause dan Perimenopause: Lebih Dari Sekadar Klise",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-06-01T10:00:00Z",
    metaDescription: "Menopause dan perimenopause adalah fasa penting dalam kehidupan wanita. Artikel ini membincangkan perubahan yang berlaku dan cara menghadapinya.",
    ogImage: "/images/blog/blog-details-7a.jpg",
    images: ["/images/blog/blog-details-7a.jpg"],
    contentComponent: "Menopause",
    tags: ["Menopause", "Perimenopause", "Kesihatan Wanita"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "ketidakcukupan-serviks-cervical-insufficiency-cerclage-perlindungan-kehamilan-anda",
    title: "Ketidakcukupan Serviks (Cervical Insufficiency) & Cerclage: Perlindungan Kehamilan Anda",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-06-20T10:00:00Z",
    metaDescription: "Ketidakcukupan serviks boleh menyebabkan keguguran lewat atau kelahiran pramatang. Artikel ini membincangkan punca, simptom, dan rawatan cerclage.",
    ogImage: "/images/blog/blog-details-8a.jpg",
    images: ["/images/blog/blog-details-8a.jpg"],
    contentComponent: "CervicalInsufficiency",
    tags: ["Ketidakcukupan Serviks", "Cervical Insufficiency", "Cerclage", "Kesihatan Wanita"],
    category: "Kesihatan Wanita",
  },
  {
    slug: "prolaps-organ-pelvis-peranakan-jatuh-apa-wanita-perlu-tahu",
    title: "Prolaps Organ Pelvis (Peranakan Jatuh): Apa Wanita Perlu Tahu",
    author: "Dr. Muhammad Asyraf Azizan",
    publishedDate: "2024-07-01T10:00:00Z",
    metaDescription: "Prolaps organ pelvis adalah keadaan di mana organ pelvis jatuh dari kedudukan asalnya. Artikel ini membincangkan punca, simptom, dan rawatan.",
    ogImage: "/images/blog/blog-details-9a.jpg",
    images: ["/images/blog/blog-details-9a.jpg"],
    contentComponent: "PelvicProlapse",
    tags: ["Prolaps Organ Pelvis", "Pelvic Prolapse", "Kesihatan Wanita"],
    category: "Kesihatan Wanita",
  },
];

// Helper function to get blog detail by slug
export const getBlogDetailBySlug = (slug: string): BlogDetailData | undefined => {
  return blogDetailsData.find((blog) => blog.slug === slug);
};

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((blog) => blog.slug === slug);
};