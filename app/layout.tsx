import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: 'Rodsone Bacela - Engenheiro de Software | Portfólio',
    template: '%s | Rodsone Bacela - Portfólio'
  },
  description: 'Engenheiro de Software e entusiasta de Dados. Apaixonado por criar soluções escaláveis e com excelente experiência de usuário.. Veja meus projetos e entre em contato.',
  keywords: [
  "Rodsone Bacela",
  "Rodsone Fernandes",
  "engenheiro de software",
  "software engineer",
  "desenvolvedor web",
  "web developer",
  "Next.js developer",
  "desenvolvedor Next.js",
  "React developer",
  "desenvolvedor React",
  "programador JavaScript",
  "JavaScript developer",
  "programador TypeScript",
  "TypeScript developer",
  "Moçambique",
  "Mozambique software developer",
  "desenvolvedor fullstack",
  "fullstack developer",
  "portfólio de desenvolvedor",
  "developer portfolio",
  "UI moderna",
  "modern UI",
  "design minimalista",
  "minimal design"
],


  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://rodsone-bacela.vercel.app/',
    siteName: 'Rodsone Bacela - Portfólio',
    title: 'Rodsone Bacela - Engenheiro de Software',
    description: 'Portfólio com projetos em Next.js, React, TypeScript e mais.',
    images: [
      {
        url: 'https://seu-site.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rodsone Bacela - Portfólio'
      }
    ]
  },
  
  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'Rodsone Bacela - Engenheiro de Software',
    description: 'Conheça meus projetos ',
    images: ['https://seu-site.com/og-image.jpg'],
    creator: '@seuusuario'
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'seu-codigo-do-search-console',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
      
        className={`${inter.variable} ${plexSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 ">
          {children}
        </main>
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
