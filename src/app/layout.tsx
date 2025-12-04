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

  title: "Dr. Asyraf Azizan | Gynae And Laparoscopic Surgery In Kuala Lumpur & Selangor (Klang Valley)",
  description: "Dr. Asyraf Azizan is a Consultant Obstetrician & Gynaecologist at KPJ Kajang Specialist Hospital, specializing in Antenatal Care & Delivery, Laparoscopy and Microwave Ablation (Minimally Invasive Surgery) & Early Gynae Cancer Treatment. Book an appointment today!",
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'images/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'images/png' },
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
    <html lang="en">
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
