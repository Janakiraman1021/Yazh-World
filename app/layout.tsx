import type { Metadata } from "next";
import { Lexend, Noto_Sans_Tamil, Noto_Serif_Tamil, Noto_Sans_Devanagari, Noto_Sans_Telugu, Noto_Sans_Kannada, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { I18nProvider } from "./i18n/context";
import { Analytics } from "@vercel/analytics/next";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-lexend",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
});

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-tamil",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-telugu",
  display: "swap",
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-kannada",
  display: "swap",
});

const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-malayalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yaazh | Universal Autonomous AI & Intelligent Agent Platform",
  description:
    "Yaazh Web Platform (20+ Universal AI Tools & Deep Intelligence), Chrome Extension (Autonomous Web & Form Automation), and Computer Automation Desktop Agent.",
  icons: {
    icon: "/yaazh-logo.png",
    apple: "/yaazh-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${notoTamil.variable} ${notoSerifTamil.variable} ${notoDevanagari.variable} ${notoTelugu.variable} ${notoKannada.variable} ${notoMalayalam.variable} dark`}
    >
      <body className={`${lexend.className} ${notoTamil.className} tamil-copy antialiased bg-[#383b34] text-[#f2f3ef]`}>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
