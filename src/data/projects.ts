// data/projects.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  more_details: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  designUrl?: string;
  slug: string;
  progress: number;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Redesign Landing Page Standard Bank Moçambique",
    description:
      "Este projeto consistiu no redesign da landing page do Standard Bank Moçambique, com o objetivo principal de modernizar a sua interface e otimizar a experiência do usuário (UX)",
    more_details:
      "CASO: O desafio era transformar uma página existente em uma versão mais atual, visualmente atraente e funcional, alinhada às tendências de design web contemporâneas. Design de Interface (UI): Foco na criação de um layout limpo. Experiência do Usuário (UX), Desenvolvimento Front-end",
    image: "/images/3.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Github",
      "Vercel",
    ],
    githubUrl: "https://github.com/RodsoneBacela/Standard-B-Redesign",
    liveUrl: "https://standard-b-redesign.vercel.app/",
    slug: "standard-bank",
    progress: 100,
    designUrl:
      "https://www.figma.com/design/GCMnW2DRfGLnnnfEAR44oH/Untitled?t=PI6AOhsCz15VzAgZ-0",
  },
  {
    id: "2",
    name: "Subscription Control",
    description:
      "Um sistema de controle de mensalidades para ginásios é uma ferramenta essencial para a gestão eficiente de ginásios, instrutores fitness ou qualquer espaço que cobre por planos de mensalidade.",
    more_details:
      "Ele automatiza tarefas repetitivas, melhora o controle financeiro e oferece uma melhor experiência para os clientes e para a gestores dos ginásios. Funcionalidades Essenciais: Analise geral, registar clientes, gestão de mensalidades, controle financeiro, relatórios",
    image: "/images/258.png",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Github",
      "Vercel",
      "Tailwindcss",
    ],
    githubUrl: "",
    liveUrl: "https://258-gym-control.vercel.app/",
    slug: "gym-control",
    progress: 70,
  },
  {
    id: "3",
    name: "Recibos.com",
    description:
      "O Sistema de Geração de Recibos é uma aplicação web moderna e intuitiva desenvolvida com Next.js que permite a criação, visualização e exportação de recibos de forma rápida, segura e profissional.",
    more_details:
      "Pensado para pequenas e médias empresas, prestadores de serviço e freelancers, o sistema oferece uma interface simples e elegante inspirada no design minimalista da Apple, garantindo uma ótima experiência tanto em computadores, tablets quanto em dispositivos móveis. Principais funcionalidades: Formulário inteligente,Pré-visualização em tempo real, Download em PDF, Cálculo automático de subtotal, impostos (IVA) e valor total ",
    image: "/images/recibos.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Shadcn",
      "Github",
      "Vercel",
      "Tailwindcss",
      "Lucide Icons",
      "Context API",
    ],
    githubUrl: "https://github.com/RodsoneBacela/recibos.com",
    liveUrl: "https://recibos-com.vercel.app/",
    slug: "recibos",
    progress: 100,
  },
];
