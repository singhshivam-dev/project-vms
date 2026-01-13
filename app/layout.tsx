import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veljimanagement.com"),

  title: {
    default: "Velji Management Services | Recruitment & Staffing Company",
    template: "%s | Velji Management Services",
  },

  description:
    "Velji Management Services (VMS) provides reliable recruitment, staffing, and manpower solutions across India. We specialize in permanent hiring, contract staffing, bulk recruitment, and executive search for IT, non-IT, and industrial sectors.",

  applicationName: "Velji Management Services",
  authors: [{ name: "Velji Management Services" }],
  creator: "Velji Management Services",
  publisher: "Velji Management Services",

  alternates: {
    canonical: "https://www.veljimanagement.com",
  },

  openGraph: {
    title: "Velji Management Services | Recruitment & Staffing Company",
    description:
      "Velji Management Services (VMS) provides recruitment, staffing, and manpower solutions across India for IT, non-IT, and industrial sectors.",
    url: "https://www.veljimanagement.com",
    siteName: "Velji Management Services",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Velji Management Services | Recruitment & Staffing Company",
    description:
      "Velji Management Services provides recruitment and staffing solutions across India.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
