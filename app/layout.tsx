import type { Metadata } from "next";
import { Lexend, Noto_Sans_Tamil, Noto_Serif_Tamil } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

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

export const metadata: Metadata = {
  title: "யாழ் | தமிழ் முதன்மை AI & தானியங்கி Agent • Yaazh AI",
  description:
    "யாழ் Web Platform (18+ தமிழ் AI கருவிகள் & சங்க இலக்கிய LangLM), Chrome Extension (e-Sevai & மாணவர் தானியங்கி) மற்றும் Computer Automation Desktop Agent.",
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
      lang="ta"
      className={`${lexend.variable} ${notoTamil.variable} ${notoSerifTamil.variable} dark`}
    >
      <body className={`${lexend.className} ${notoTamil.className} tamil-copy antialiased bg-[#383b34] text-[#f2f3ef]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
