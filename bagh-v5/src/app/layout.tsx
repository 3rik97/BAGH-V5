import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Adjust based on what you need
  variable: '--font-inter',
});
const Nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Adjust based on what you need
  variable: '--font-nunito',
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAGH Casino Online | Bangladesh’s Trusted Betting",
  description: "BAGH Casino brings smart, secure online betting to Bangladesh. Enjoy fair play, local support, and high-quality slots and live games with Bagh8.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="yraiRxDBM2pGvft8s6LGwfXWPVAXAKwsw8rIiPFvsVo"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${Nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
