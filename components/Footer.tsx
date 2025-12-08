"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rodsonfrenandes03@gmai.com", label: "Email" },
  ];


  return (
    <footer className="relative border-t border-neutral-700 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between  gap-4"
        >
          <div className="flex flex-col items-start">
            <h3 className="text-2xl mb-4 text-white">
              Rodsone<span className="text-green-500">.</span>
            </h3>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
           <div className="flex gap-4  text-white">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      className="group-hover:text-blue-500 transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
          </motion.div>

          </div>
          <p className="text-white text-sm flex items-end gap-2">
            © {currentYear} Rodsone Bacela. All Rights Reserved
            
          </p>

        </motion.div>
      </div>
    </footer>
  );
}
