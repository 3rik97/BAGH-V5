import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import MobileNav from "./components/header-mobile";
import Navbar from "./components/v2/navigation";
import Footer from "./components/footer";
// import Navbar from "./components/v2/navigation";

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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ['400', '700', '900']

})
export const metadata: Metadata = {
  title: "BAGH Casino Online | Bangladesh's Trusted Betting",
  description: "BAGH Casino brings smart, secure online betting to Bangladesh. Enjoy fair play, local support, and high-quality slots and live games with Bagh8.",
  alternates: {
    canonical: "https://www.bagh55.com/",
  },
  other: {
    'google-site-verification': 'yraiRxDBM2pGvft8s6LGwfXWPVAXAKwsw8rIiPFvsVo',
  },
  openGraph: {
    title: "BAGH Casino Online | Bangladesh's Trusted Betting",
    description: "BAGH Casino brings smart, secure online betting to Bangladesh. Enjoy fair play, local support, and high-quality slots and live games with Bagh8.",
    siteName: "55",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 400,
        alt: "Secure play at Bagh55 online casino in Bangladesh",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "BAGH Casino Online | Bangladesh's Trusted Betting",
    description: "BAGH Casino brings smart, secure online betting to Bangladesh. Enjoy fair play, local support, and high-quality slots and live games with Bagh8.",
    images: [
      {
        url: "/logo.png",
        width: 600,
        height: 400,
        alt: "Secure play at Bagh55 online casino in Bangladesh",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunitoFont.variable} ${montserrat.variable} antialiased`}
      >
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
