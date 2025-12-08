export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;

  features: string[];                    
  about: string;                         
  challenges?: string;               
  gallery: string[];        
  thumbnail?: string;   

  technologies: string[];
  tags: string[];

  liveUrl?: string;
  githubUrl?: string;

  category: 'Web Development' | 'Data Analytics' | 'Data Science' | 'Full-Stack' | 'Mobile';
  year: string;
  status: 'Concluído' | 'Em Desenvolvimento' | 'Pausado';
  color: string;     
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas e responsivas utilizando as mais recentes tecnologias como React, TypeScript e Node.js.",
    icon: "Code"
  },
  {
    id: "2",
    title: "Análise de Dados",
    description: "Transformo dados brutos em insights acionáveis através de análise estatística, visualização e machine learning.",
    icon: "BarChart3"
  },
  {
    id: "3",
    title: "Engenharia de Software",
    description: "Desenvolvimento de soluções escaláveis e robustas com foco em arquitetura limpa e boas práticas de código.",
    icon: "Cpu"
  },
  {
    id: "4",
    title: "Freelancer",
    description: "Soluções personalizadas para projetos de curto e longo prazo, usando as melhores tecnologias e estratégias.",
    icon: "Lightbulb"
  }
]; 


export const projects: Project[] = [
  {
    id: 'redesign-SBank',
    title: 'Redesign Landing Page Standard Bank Moçambique',
    description: 'Este projeto consistiu no redesign da landing page do Standard Bank Moçambique, com o objetivo principal de modernizar a sua interface e otimizar a experiência do usuário (UX)',
    fullDescription: 'CASO: O desafio era transformar uma página existente em uma versão mais atual, visualmente atraente e funcional, alinhada às tendências de design web contemporâneas. Design de Interface (UI): Foco na criação de um layout limpo. Experiência do Usuário (UX), Desenvolvimento Front-end',
    
    features: [
      'Landing Page',
    ],
    
    about: 'CASO: O desafio era transformar uma página existente em uma versão mais atual, visualmente atraente e funcional, alinhada às tendências de design web contemporâneas. Design de Interface (UI): Foco na criação de um layout limpo. Experiência do Usuário (UX), Desenvolvimento Front-end',
    
    gallery: [
      '/images/std/std.webp',
      '/images/std/std1.webp',
      '/images/std/std2.webp',
      '/images/std/std3.webp',
    ],

    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Github', 'Vercel'],
    tags: ['Landing Page', ],

    liveUrl: 'https://dashboard.rodsone.dev',
    githubUrl: 'https://github.com/rodsonebacela/dashboard-analytics',

    category: 'Web Development',
    year: '2024',
    status: 'Concluído',
    color: '#3b82f6' 
  },

  {
    id: 'recibos.com',
    title: 'Recibos.com',
    description: 'Sistema de Geração de Recibos ',
    fullDescription: 'O Sistema de Geração de Recibos é uma aplicação web moderna e intuitiva desenvolvida com Next.js que permite a criação, visualização e exportação de recibos de forma rápida, segura e profissional.',

    features: [
      'Gerar recibos',
      'Editar os recibos',
      'Live preview',
      'exportar o pdf',
    ],

    about: 'Pensado para pequenas e médias empresas, prestadores de serviço e freelancers, o sistema oferece uma interface simples e elegante inspirada no design minimalista da Apple, garantindo uma ótima experiência tanto em computadores, tablets quanto em dispositivos móveis',

    gallery: [
      '/images/recibo/rcb.webp',
      '/images/recibo/rcb1.webp',
      '/images/recibo/rcb2.webp',


    ],

    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn', 'Vercel', 'Context API', 'Github'],
    tags: ['Saas', 'Next.js',],

    liveUrl: 'https://recibos-com.vercel.app/',
    githubUrl: '#',

    category: 'Web Development',
    year: '2025',
    status: 'Concluído',
    color: '#10b981' 
  },


];