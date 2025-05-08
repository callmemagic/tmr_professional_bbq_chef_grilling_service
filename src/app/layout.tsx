import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "【專業BBQ師傅到會】全程代烤服務｜新鮮海鮮｜無須動手｜每日限額",
  description: "專業燒烤師傅上門代烤，一站式送齊所有食材及用具。新鮮海鮮無味精，8位套餐HKD4,480，即日登記減$100！適合天台、住宅花園、屋苑會所，企業及私人派對首選。立即WhatsApp查詢！",
  openGraph: {
    title: "【專業BBQ師傅到會】全程代烤服務｜新鮮海鮮｜無須動手",
    description: "專業燒烤師傅上門代烤，一站式送齊食材用具。8位套餐$4,480，即日登記減$100！立即查詢！",
    images: ['/images/daniel-l_IQP3BLFF0-unsplash.jpg'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="【專業BBQ師傅到會】全程代烤服務｜新鮮海鮮｜無須動手" />
        <meta property="og:description" content="專業燒烤師傅上門代烤，一站式送齊食材用具。8位套餐$4,480，即日登記減$100！立即查詢！" />
        <meta property="og:image" content="https://tmrseafoodbbq.com/images/daniel-l_IQP3BLFF0-unsplash.jpg" />
        <meta property="og:url" content="https://tmrseafoodbbq.com" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
