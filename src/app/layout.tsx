import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Jersey10 = localFont({
  src: "/fonts/Jersey10-Regular.ttf",
  display: "swap",
});
const DotGothic16 = localFont({
  src: "/fonts/DotGothic16-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tokyo IT Group | エンジニアのための勉強会と技術共有",
  description:
    "東京ITグループは、エンジニア同士が集まり、学び、成長するためのコミュニティです。最新技術の習得やプロジェクトを通じてスキルを磨きます。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.tokyoitgroup.com/",
    title: "Tokyo IT Group | エンジニアのための勉強会と技術共有",
    description:
      "東京ITグループは、エンジニア同士が集まり、学び、成長するためのコミュニティです。",
    siteName: "Tokyo IT Group",
    images: [
      {
        url: "/images/1.webp",
        width: 1200,
        height: 630,
        alt: "Tokyo IT Group - 成長と学びの場",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@TokyoITGroup",
  //   title: "Tokyo IT Group | エンジニアのための勉強会と技術共有",
  //   description:
  //     "エンジニアが集まり、学び、成長するTokyo IT Group。最新技術を学びながら新しい仲間とプロジェクトを進めていきます。",
  //   images: ["https://tokyoitgroup.com/images/og-image.jpg"],
  // },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.tokyoitgroup.com/",
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
        className={`${Jersey10.className} ${DotGothic16.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
