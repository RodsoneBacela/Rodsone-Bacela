import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "Rodsone Bacela – Software Developer",
  description:
    "Portfólio de Rodsone Bacela, desenvolvedor de software com foco em front-end e experiência em React, Next.js e Tailwind CSS.",
  canonical: "https://rodsone-bacela.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://rodsone-bacela.vercel.app",
    site_name: "Rodsone Bacela",
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
  twitter: {
    handle: "@rodsone_fernandes",
    site: "@rodsone_fernandes",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Rodsone Bacela, Rodsone Fernandes, desenvolvedor de software, front-end, React, Next.js, Tailwind CSS, portfólio",
    },
    {
      name: "author",
      content: "Rodsone Bacela",
    },
  ],
};

export default SEO;
