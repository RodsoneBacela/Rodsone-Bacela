'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/data';

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');

  const current = projects[selectedIndex];

  const next = () => setSelectedIndex((i) => (i + 1) % projects.length);
  const prev = () => setSelectedIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen  md:-px-8 bg-black text-white pt-20 rounded-md">
      <div className="hidden md:flex h-[calc(100vh-5rem)]">
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={current.gallery[0]}
                alt={current.title}
                fill
                priority
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/40" />

              <div 
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-linear(135deg, ${current.color}20, transparent)` }}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-16">
                <div className="max-w-5xl space-y-8">
                  <motion.span
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm uppercase tracking-widest"
                  >
                    {current.category}
                  </motion.span>

                  <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-6xl font-bold leading-tight"
                  >
                    {current.title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-white/90 max-w-3xl leading-relaxed"
                  >
                    {current.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="flex items-center gap-3"
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      current.status === 'Concluído' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                    }`}>
                      {current.status}
                    </span>
                    <span className="text-white/60">• {current.year}</span>
                  </motion.div>

                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-5"
                  >
                    <Link
                      href={`/projects/${current.id}`}
                      className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
                      style={{ backgroundColor: current.color }}
                    >
                      Explorar Projeto
                      <ArrowRight className="group-hover:translate-x-2 transition" />
                    </Link>

                    {current.liveUrl && (
                      <a
                        href={current.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 rounded-xl transition-all"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                    )}

                    {current.githubUrl && (
                      <a
                        href={current.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 rounded-xl transition-all"
                      >
                        <Github size={20} />
                        GitHub
                      </a>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-8 pt-10"
                  >
                    <button onClick={prev} className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition">
                      <ChevronLeft size={28} />
                    </button>

                    <div className="flex gap-3">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedIndex(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === selectedIndex 
                              ? `w-14 bg-white` 
                              : 'w-10 bg-white/40 hover:bg-white/60'
                          }`}
                          style={i === selectedIndex ? { backgroundColor: current.color } : {}}
                        />
                      ))}
                    </div>

                    <button onClick={next} className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition">
                      <ChevronRight size={28} />
                    </button>

                    <span className="ml-6 text-white/70 font-light text-lg">
                      {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.aside
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-96 lg:w-[440px] bg-linearto-b from-zinc-950 via-black to-black border-l border-white/10 overflow-y-auto"
        >
          <div className="p-10 border-b border-white/10 sticky top-0 bg-black/50 backdrop-blur-xl z-10">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              Projetos em Destaque
            </h2>
            <p className="text-white/60 mt-3 text-lg">Alguns trabalhos</p>
          </div>

          <div className="p-8 space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  onClick={() => setSelectedIndex(i)}
                  className={`block rounded-3xl overflow-hidden transition-all duration-500 group ${
                    i === selectedIndex
                      ? 'ring-4 ring-white/30 bg-white/10 shadow-2xl'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.gallery[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    
                    {i === selectedIndex && (
                      <div className="absolute inset-0 ring-4 ring-white/20" />
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-wider text-white/60">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        project.status === 'Concluído' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="text-white/70 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-sm text-white/60">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.technologies.slice(0, 2).join(' • ')}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>

      {/* ==== MOBILE LAYOUT ==== */}
      <div className="md:hidden">
        {viewMode === 'showcase' ? (
          <div className="relative min-h-screen flex flex-col pb-10">
            <Image 
              src={current.gallery[0]} 
              alt={current.title} 
              fill 
              className="object-cover brightness-75" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

            <div className="relative flex-1 flex flex-col justify-end p-8 pb-32">
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-xs uppercase tracking-wider">
                  {current.category}
                </span>
                <button
                  onClick={() => setViewMode('grid')}
                  className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20"
                >
                  <Grid size={20} />
                </button>
              </div>

              <h1 className="text-5xl font-bold mb-4 leading-tight">
                {current.title}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm ${
                  current.status === 'Concluído' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {current.status}
                </span>
                <span className="text-white/70">• {current.year}</span>
              </div>

              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                {current.description}
              </p>

              <div className="flex gap-4">
                <Link
                  href={`/projects/${current.id}`}
                  className="flex-1 py-5 bg-linear-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl text-center shadow-2xl"
                  style={{ backgroundColor: current.color }}
                >
                  Ver Projeto Completo
                </Link>
              </div>

              <div className="flex items-center justify-center gap-12 mt-12">
                <button onClick={prev} className="p-3 rounded-full bg-white/20 backdrop-blur">
                  <ChevronLeft size={32} />
                </button>
                <div className="flex gap-3">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`h-2 rounded-full transition-all ${i === selectedIndex ? 'w-12' : 'w-8'} bg-white/60`}
                      style={i === selectedIndex ? { backgroundColor: current.color } : {}}
                    />
                  ))}
                </div>
                <button onClick={next} className="p-3 rounded-full bg-white/20 backdrop-blur">
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid Mobile - igual ao anterior, só melhorei o visual */
          <div className="p-6 pb-32 bg-black min-h-screen">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-bold">Todos os Projetos</h2>
              <button 
                onClick={() => setViewMode('showcase')} 
                className="px-6 py-3 bg-white/10 rounded-xl text-sm backdrop-blur border border-white/20"
              >
                Voltar ao Showcase
              </button>
            </div>
            <div className="grid gap-8">
              {projects.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/projects/${p.id}`} className="block group">
                    <div className="relative h-64 rounded-3xl overflow-hidden">
                      <Image 
                        src={p.gallery[0]} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition duration-700" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-sm uppercase tracking-wider text-white/70 mb-2">
                          {p.category} • {p.year}
                        </p>
                        <h3 className="text-3xl font-bold">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}