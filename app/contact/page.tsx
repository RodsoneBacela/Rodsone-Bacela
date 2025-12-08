'use client'

import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dev.rdsn@gmail.com', href: 'mailto:dev.rdsn@gmail.com' },
    { icon: MapPin, label: 'Localização', value: 'Moçambique', href: null },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RodsoneBacela' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rodsone-bacela' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-neutral-950 text-white text-center">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-5xl md:text-6xl mb-4 font-bold">Vamos Conversar</h1>
        <p className="text-white/60 max-w-xl mx-auto text-lg">
          Tem um projeto em mente ou quer apenas dizer olá? Ficarei feliz em ouvir de você.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
              <info.icon size={20} className="text-blue-500" />
            </div>
            {info.href ? (
              <a href={info.href} className="text-white/90 hover:text-blue-500 transition-colors">
                {info.value}
              </a>
            ) : (
              <span className="text-white/90">{info.value}</span>
            )}
          </motion.div>
        ))}

        {/* Social Links */}
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl mb-4 flex items-start">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 flex items-center justify-center transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-white/10"
            >
              <h3 className="text-xl mb-3">Disponibilidade</h3>
              <p className="text-white/70 leading-relaxed">
                Atualmente disponível para novos projetos freelance e oportunidades de colaboração.
                Responderei em até 24 horas.
              </p>
            </motion.div>
      </div>
    </div>
  );
}
