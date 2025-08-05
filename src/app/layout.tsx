import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  title: "Rodsone Bacela – Software Developer",
  description:
    "Portfólio de Rodsone Bacela, desenvolvedor de software com foco em front-end e experiência em React, Next.js e Tailwind CSS.",
  alternates: {
    canonical: "https://rodsone-bacela.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://rodsone-bacela.vercel.app",
    siteName: "Rodsone Bacela",
    title: "Rodsone Bacela – Software Developer",
    description:
      "Portfólio de Rodsone Bacela, desenvolvedor de software com foco em front-end e experiência em React, Next.js e Tailwind CSS.",
    images: [
      {
        url: "https://rodsone-bacela.vercel.app/images/profile.png",
        width: 800,
        height: 600,
        alt: "Rodsone Bacela",
      },
    ],
  },
  twitter: { // As discussed, this is for Twitter
    card: "summary_large_image",
    site: "@rodsone_fernandes",
    creator: "@rodsone_fernandes",
    title: "Rodsone Bacela – Software Developer",
    description:
      "Portfólio de Rodsone Bacela, desenvolvedor de software com foco em front-end e experiência em React, Next.js e Tailwind CSS.",
    images: {
      url: "https://rodsone-bacela.vercel.app/images/profile.png",
      alt: "Rodsone Bacela",
    },
  },
  keywords: [
    "Rodsone Bacela",
    "RodsoneBacela",
    "rodsone-bacela",
    "Rodsone Fernandes",
    "desenvolvedor de software",
    "front-end",
    "React",
    "Next.js",
    "Tailwind CSS",
    "portfólio",
  ],
  authors: [{ name: "Rodsone Bacela", url: "https://rodsone-bacela.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${plexSans.variable} antialiased`}
      >
        <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
