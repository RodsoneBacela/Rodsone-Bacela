'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Check, Sparkles, X } from 'lucide-react';
import { Project } from '@/data/data';
import { useState } from 'react';

export default function ProjectContent({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0">
          <Image
            src={project.gallery[0]}
            alt={project.title}
            fill
            className="object-cover brightness-30"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white text-base font-semibold hover:text-white mb-8 transition px-6 py-3 bg-blue-500 rounded-full shadow-lg"
          >
            <ArrowLeft size={20} />
            Voltar 
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="px-4 py-2 rounded-full bg-white/40 backdrop-blur border border-white/20 text-sm uppercase tracking-wider text-white">
              {project.category.replace(/([A-Z])/g, ' $1').trim()}
            </span>

            <h1 className="text-5xl md:text-8xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4 mt-10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full flex items-center gap-3 transition transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Ver Projeto
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="px-8 py-4 bg-white/40 backdrop-blur border border-white/30 hover:bg-white/20 rounded-full flex items-center gap-3 transition text-white"
                >
                  <Github size={20} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>


      {/** modal imagens*/}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={closeLightbox}>
          <div className="relative max-w-6xl max-h-screen p-8" onClick={(e) => e.stopPropagation()}>
            {/* Botão fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition z-10"
            >
              <X size={28} />
            </button>

            {/* Imagem grande */}
            <Image
              src={project.gallery[selectedImageIndex]}
              alt={`${project.title} - ${selectedImageIndex + 1}`}
              width={1600}
              height={900}
              className="max-w-full max-h-screen object-contain rounded-2xl"
            />

            {/* Navegação */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
            >
              →
            </button>

            {/* Contador */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur text-white">
              {selectedImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
        </div>
      )}

      <section className="py-20 px-6 bg-linear-to-b from-black to-zinc-950">
              <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Galeria do Projeto
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img}
                  alt={`${project.title} - imagem ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-28 md:w-full md:h-64 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="text-white text-5xl">+</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

          <div className='max-w-7xl mx-auto pb-16'>
            <h2 className="text-4xl font-bold mb-8 text-white">Sobre o Projeto</h2>
            <p className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
              {project.about}
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-10 flex items-center gap-3 text-white">
              <Sparkles className="text-blue-400" />
              Principais Funcionalidades
            </h2>
            <div className="space-y-5">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
                >
                  <Check className="text-blue-400 w-8 h-8 rounded-full border-2 border-blue-400 shrink-0" size={20} />
                  <span className="text-base md:text-lg text-white" >{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-5 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 text-white rounded-lg bg-white/5 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
            <h3 className="text-2xl font-bold mb-8 text-white">Informações</h3>
            <dl className="space-y-6">
              <div><dt className="text-white/40 text-sm">Categoria</dt><dd className="text-xl font-medium text-white">{project.category}</dd></div>
              <div><dt className="text-white/40 text-sm">Ano</dt><dd className="text-xl font-medium text-white">{project.year}</dd></div>
              <div>
                <dt className="text-white/40 text-sm">Status</dt>
                <dd className="text-xl">
                  <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'Concluído' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {project.status}
                  </span>
                </dd>
              </div>
            </dl>
          </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}