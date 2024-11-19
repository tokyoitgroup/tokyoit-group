import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tokyo IT Group",
  description:
    "東京ITグループの勉強会紹介ページ。エンジニア同士が学び合い、成長するための場です。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.tokyoitgroup.com/",
    title: "Tokyo IT Group | エンジニアのための成長の場",
    description:
      "東京ITグループは、エンジニア同士が集まり、学び、成長するためのコミュニティです。最新技術の習得やプロジェクトを通じてスキルを磨きます。",
    siteName: "Tokyo IT Group",
    images: [
      {
        url: "https://www.tokyoitgroup.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tokyo IT Group - 成長と学びの場",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TokyoITGroup",
    title: "Tokyo IT Group | エンジニアのための成長の場",
    description:
      "エンジニアが集まり、学び、成長するTokyo IT Group。最新技術を学びながら新しい仲間とプロジェクトを進めていきます。",
    images: ["https://tokyoitgroup.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
