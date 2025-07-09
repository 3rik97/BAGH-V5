import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Adjust based on what you need
  variable: '--font-inter',
});
const nunitoFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Adjust based on what you need
  variable: '--font-nunito',
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAGH Casino Online | Bangladesh's Trusted Betting",
  description: "BAGH Casino brings smart, secure online betting to Bangladesh. Enjoy fair play, local support, and high-quality slots and live games with Bagh8.",
  alternates: {
    canonical: "https://www.bagh55.com/",
  },
  other: {
    'google-site-verification': 'yraiRxDBM2pGvft8s6LGwfXWPVAXAKwsw8rIiPFvsVo',
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZH45BM41D0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ZH45BM41D0');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunitoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
