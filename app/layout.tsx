import type { Metadata } from "next";
import { Noto_Sans_Thai } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
});

export const metadata: Metadata = {
  title: "Lighting Factory Outlet Online - ไฟจากโรงงานตรง ราคาโรงงาน",
  description: "แหล่งรวมไฟส่องสว่างจากโรงงานโดยตรง ไม่ผ่านคนกลาง ราคาขายส่ง สำหรับบ้าน ธุรกิจ และโครงการ รับประกันคุณภาพ ประหยัดสูงสุด 60%",
  keywords: "ไฟโรงงาน, ไฟขายส่ง, ไฟราคาโรงงาน, Lighting Pool, ไฟตกแต่ง, ไฟส่องสว่าง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className={`${notoSansThai.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
