"use client";

import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [displayLetter, setDisplayLetter] = useState<string>("R");
  const indexRef = useRef<number>(0);
  const letters = ["R", "O", "D", "S", "O", "N", "E"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayLetter(letters[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % letters.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 font-plex">
      {/* Background Grid */}
      

      {/* Background Orbs (sempre visíveis – são leves) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Text Content – sempre visível */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-medium tracking-wider text-md md:text-2xl uppercase"
            >
              Engenheiro de Software & <br/> Analista de Dados
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mt-4 text-white"
            >
              Rodsone<br />
              <span className="text-blue-500">Bacela</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Desenvolvedor Full Stack e entusiasta de Dados. Apaixonado por criar soluções elegantes, escaláveis e com excelente experiência de usuário.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex  gap-4 mt-10 justify-center lg:justify-start"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-white"
                >
                  Projetos
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 md:px-8 md:py-4 border border-white/20 hover:border-white/40 rounded-lg font-medium transition-all text-white"
                >
                  Contato
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-5 sm:gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/seu-usuario" },
                { icon: Linkedin, href: "https://linkedin.com/in/seu-perfil" },
                { icon: Mail, href: "mailto:seu@email.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} className="text-white"/>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ===== ANIMAÇÃO DA LETRA – SÓ VISÍVEL A PARTIR DE lg (1024px) ===== */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[440px] h-[440px] flex items-center justify-center">
              {/* Rings */}
              {[
                { opacity: 0.1, duration: 40 },
                { opacity: 0.2, duration: 50, reverse: true },
                { opacity: 0.3, duration: 45 },
                { opacity: 0.4, duration: 55, reverse: true },
                { opacity: 0.5, duration: 60 },
              ].map((ring, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: ring.reverse ? -360 : 360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                  className={`absolute rounded-full border border-dashed border-white/${Math.round(ring.opacity * 100)}`}
                  style={{
                    width: `calc(100% - ${i * 24}px)`,
                    height: `calc(100% - ${i * 24}px)`,
                  }}
                />
              ))}

              {/* Orbs ao redor da letra */}
              {[
                { top: "14%", left: "10%", size: "w-20 md:w-28", delay: 0 },
                { top: "18%", right: "8%", size: "w-28 md:w-36", delay: 0.6, color: "bg-purple-500/40" },
                { bottom: "16%", left: "14%", size: "w-20 md:w-24", delay: 1.2, color: "bg-cyan-500/30" },
                { bottom: "12%", right: "10%", size: "w-32 md:w-40", delay: 0.8 },
              ].map((orb, i) => (
                <motion.div
                  key={`orb-${i}`}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
                  className={`absolute ${orb.size} ${orb.color || "bg-blue-500/40"} rounded-full blur-3xl`}
                  style={{ top: orb.top, bottom: orb.bottom, left: orb.left, right: orb.right }}
                />
              ))}

              {/* Letra central animada */}
              <h1 className="relative z-10 text-[14rem] font-black text-blue-400 drop-shadow-2xl -tracking-tight">
                {displayLetter}
              </h1>
            </div>
          </div>
        </motion.div>
        
      </div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
    </section>
  );
}