'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/data';


interface FeaturedProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onNavigate: (page: string) => void;
}

export default function FeaturedProjects({
  projects,
  onProjectClick,
  onNavigate,
}: FeaturedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const currentProject = projects[currentIndex];

  return (
    <section className="py-32 px-6 relative overflow-hidden font-plex bg-black">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6 text-white">Projetos em Destaque</h2>
          <p className="text-white/60 text-xl">
            Alguns dos meus trabalhos mais recentes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
                onClick={() => onProjectClick(currentProject)}
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-4/3">
                  <Image
                    src={currentProject.gallery[0]}
                    alt={currentProject.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-xs text-blue-400 mb-2 tracking-wider uppercase">
                      {currentProject.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-3 text-white">
                      {currentProject.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-2">
                      {currentProject.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      Ver detalhes <ArrowRight size={18} />
                    </motion.button>
                  </div>

                  {/* Projecto Numero */}
                  <div className="absolute top-8 left-8 text-8xl opacity-10 text-blue-500">
                    0{currentIndex + 1}
                  </div>
                </div>

                <div className="absolute -bottom-6 left-8 flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevProject();
                    }}
                    className="w-12 h-12 rounded-full bg-white/5 text-white backdrop-blur-sm border border-white/10 hover:border-blue-500 flex items-center justify-center"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>

                  <div className="text-sm text-white/60">
                    {String(currentIndex + 1).padStart(2, '0')} /{' '}
                    {String(projects.length).padStart(2, '0')}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextProject();
                    }}
                    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:border-blue-500 flex items-center justify-center"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl">Explore</h3>
              <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                      currentIndex === index
                        ? 'border-blue-500'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={project.gallery[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 right-2 text-xs opacity-0 group-hover:opacity-100 truncate">
                        {project.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h4 className="text-sm md:text-2xl text-white/60 mb-3">STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm md:text-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

           
            <motion.button
              onClick={() => onNavigate('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group px-8 py-4 border text-white border-white/20 hover:border-blue-500 rounded-xl flex items-center justify-between"
            >
              <span className='text-base'>Ver Todos os Projetos</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
