import "./globals.css";
import "../../styles/bootstrap.min.css";
import "../../styles/animate.css";
import "../../styles/icofont.min.css";
import "../../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import FloatingActionBar from "@/components/Layouts/FloatingActionBar";
import ConditionalTopHeader from "@/components/Layouts/ConditionalTopHeader";
import { Toaster } from "@/components/ui/toaster"


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drasyrafazizan.com'),
  
  title: {
    default: "Dr. Muhammad Asyraf Azizan | Pakar Sakit Puan & Gynae Laparoscopic Surgery Kajang",
    template: "%s | Dr. Asyraf Azizan"
  },
  
  description: "Dr. Muhammad Asyraf Azizan - Pakar Sakit Puan & Obstetrik di KPJ Kajang Specialist Hospital. Consultant Obstetrician & Gynaecologist specializing in Antenatal Care, Laparoscopic Surgery, Microwave Ablation & Early Gynae Cancer Treatment. Tempah temujanji: 019-456 5039",
  
  keywords: [
    // Malay keywords
    "Dr Asyraf Azizan",
    "pakar sakit puan Kajang",
    "pakar kandungan Kajang",
    "doktor sakit puan",
    "klinik sakit puan Kajang",
    "gynae Kajang",
    "pembedahan laparoskopi",
    "rawatan kanser ginekologi",
    "penjagaan kehamilan",
    "endometriosis rawatan",
    "PCOS rawatan",
    "menopaus",
    // English keywords
    "gynecologist Kajang",
    "obstetrician Kajang",
    "O&G specialist Kajang",
    "laparoscopic surgery Malaysia",
    "gynae laparoscopy",
    "antenatal care Kajang",
    "early cancer treatment",
    "women's health specialist",
    "minimal invasive surgery",
    "KPJ Kajang",
    "fertility specialist Malaysia",
  ],
  
  authors: [{ name: "Dr. Muhammad Asyraf Azizan" }],
  creator: "Dr. Muhammad Asyraf Azizan",
  
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    alternateLocale: 'en_US',
    url: 'https://www.drasyrafazizan.com',
    siteName: 'Dr. Asyraf Azizan',
    title: 'Dr. Muhammad Asyraf Azizan | Pakar Sakit Puan & Gynae Laparoscopic Surgery',
    description: 'Consultant Obstetrician & Gynaecologist di KPJ Kajang - Laparoscopic Surgery, Antenatal Care & Early Gynae Cancer Treatment',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon-180.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={poppins.className}>
        <ConditionalTopHeader />
        {children}
        <GoTop />
        <FloatingActionBar />
        <Toaster />
      </body>
    </html>
  );
}
