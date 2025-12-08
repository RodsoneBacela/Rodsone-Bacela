import { Metadata, Viewport } from "next";
import HomePage  from "./home/page";

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
    description: 'Sou um engenheiro de Software e entusiasta de Dados. Apaixonado por criar soluções escaláveis',
    images: [
      {
        url: 'https://rodsone-bacela.vercel.app/card.png',
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
    images: ['https://rodsone-bacela.vercel.app/card.png'],
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




export default function Home() {


  return (
    <div className="border-neutral-200 border-b">
      <HomePage />
    </div>
  );
}
