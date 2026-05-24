import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIxEdu | 科技教育與學校創新",
  description: "聚焦 AI 教育、數位學習、STEAM 課程與 Maker 教育的一頁式個人網站。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
