import Footer from "@/components/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "src/components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
    // 도메인을 실제 도메인으로 교체
    url: "https://tokyoitgroup.com",
    title: "Tokyo IT Group | エンジニアのための成長の場",
    description:
      "東京ITグループは、エンジニア同士が集まり、学び、成長するためのコミュニティです。最新技術の習得やプロジェクトを通じてスキルを磨きます。",
    siteName: "Tokyo IT Group",
    images: [
      {
        // OGP 이미지 경로
        url: "https://tokyoitgroup.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tokyo IT Group - 成長と学びの場",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // 트위터 계정을 추가
    site: "@TokyoITGroup",
    title: "Tokyo IT Group | エンジニアのための成長の場",
    description:
      "エンジニアが集まり、学び、成長するTokyo IT Group。最新技術を学びながら新しい仲間とプロジェクトを進めていきます。",
    // 동일한 OGP 이미지를 사용
    images: ["https://tokyoitgroup.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 기본 SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="東京ITグループの勉強会紹介ページ。エンジニア同士が学び合い、成長するための場です。"
        />
        <meta
          name="keywords"
          content="Tokyo IT Group, エンジニア, IT勉強会, 最新技術, 学び, 成長"
        />
        <meta name="author" content="Tokyo IT Group" />

        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta
          property="og:title"
          content="Tokyo IT Group | エンジニアのための成長の場"
        />
        <meta
          property="og:description"
          content="エンジニア同士が集まり、学び、成長するTokyo IT Group。最新技術を学びながら新しい仲間とプロジェクトを進めていきます。"
        />
        <meta property="og:site_name" content="Tokyo IT Group" />
        <meta property="og:url" content="https://tokyoitgroup.com" />
        <meta
          property="og:image"
          content="https://tokyoitgroup.com/images/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Tokyo IT Group - 成長と学びの場"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TokyoITGroup" />
        <meta
          name="twitter:title"
          content="Tokyo IT Group | エンジニアのための成長の場"
        />
        <meta
          name="twitter:description"
          content="東京ITグループは、エンジニア同士が集まり、学び、成長するためのコミュニティです。最新技術の習得やプロジェクトを通じてスキルを磨きます。"
        />
        <meta
          name="twitter:image"
          content="https://tokyoitgroup.com/images/og-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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
