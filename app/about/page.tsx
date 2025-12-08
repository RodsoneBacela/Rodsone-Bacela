'use client'

import { MotionButton, MotionDiv } from '@/components/ui/motion';
import { Code2, Database, Brain, Boxes, Cloud, GitBranch, GraduationCap, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const techStacks = [
  {
    category: 'Frontend',
    icon: Code2,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Dados',
    icon: Database,
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Outras',
    icon: Cloud,
    technologies: ['Vercel', 'GitHub Actions', 'Hardware', 'Software', 'Redes', 'Pandas', 'NumPy' ],
  },
] as const;

const stats = [
  { value: '1+', label: 'Anos de Experiência' },
  { value: '3+', label: 'Projetos Entregues' },
] as const;

export default function AboutPage() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 overflow-hidden bg-black text-white font-plex">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto mb-12 [perspective:1200px]">
            <div
              className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${
                flipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/20 [backface-visibility:hidden]">
                <Image
                  src="/me.png"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                />
              
              </div>

              {/* Verso */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-purple-500/20 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Image
                  src="/me-back.png"
                  alt="Foto alternativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end justify-center pb-8">
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4">
            Desenvolvedor Full Stack e entusiasta de Dados. Apaixonado por criar soluções elegantes,
            escaláveis e com excelente experiência de usuário.
          </p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
        >
          {stats.map((stat, i) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 120 }}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 text-blue-400">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
            </MotionDiv>
          ))}
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <GraduationCap className="w-10 h-10 text-blue-400" />
              Minha Jornada
            </h2>
            <div className="space-y-5 text-white/70 text-lg md:text-xl leading-relaxed">
              <p>
                Formado em <span className="text-blue-foreground font-semibold">Ciência da Computação</span> pela{' '}
                <span className="text-blue-400 font-medium">Africa University</span> (2019–2024).
              </p>
              <p>
                Comecei como desenvolvedor front-end com React e evolui para arquitetando sistemas completos:
                do banco de dados ao deploy .
              </p>
              <p>
                Hoje combino minha paixão programação com análise de dados e automações inteligentes
                sempre buscando o equilíbrio perfeito entre performance, UI atraentes e usabilidade.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
              <Award className="w-10 h-10 text-purple-400" />
              Formação & Certificações
            </h2>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-bold text-blue-400">Africa University</h3>
              <p className="text-white/80 text-base md:text-lg">Licenciatura em Ciência da Computação com Honras</p>
              <span className="text-white/50 text-md">2019 — 2024</span>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-bold text-blue-400">Design Thinking</h3>
              <p className="text-white/80 text-base md:text-lg">Design Thinking & Empreendedorismo</p>
              <span className="text-white/50 text-md">Março de 2024</span>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Stack Tecnológico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, i) => {
              const Icon = stack.icon;
              return (
                <MotionDiv
                  key={stack.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{stack.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm md:text-lg rounded-lg bg-white/5 border border-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>

        {/* CTA Final */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="inline-block text-white p-14 rounded-3xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent border border-white/10 backdrop-blur-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              Vamos construir algo?
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg">
              Estou disponível para projetos freelance, vagas remotas ou presenciais.
            </p>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 transition-all"
            >
              <Link href="/about">
                Entrar em Contato
              </Link>
            </MotionButton>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}