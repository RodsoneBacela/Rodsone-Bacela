"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre Mim", href: "/about" },
    { label: "Projetos", href: "/projects" },
    { label: "Contato", href: "/contact" },
  ];

  const navigateTo = (href: string) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-black/50"
      }`}
    >
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">

          <motion.button
            onClick={() => navigateTo("/")}
            className="text-2xl tracking-wider px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">Rodsone</span>
            <span className="text-green-500">.</span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 py-2">
            {navItems.map(item => {
              const isActive = pathname === item.href; 

              return (
                <motion.button
                  key={item.href}
                  onClick={() => navigateTo(item.href)}
                  className={`relative text-base md:text-base tracking-wide transition-colors ${
                    isActive
                      ? "text-blue-500"
                      : "text-white hover:text-white/70"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white pr-4"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pt-4 pb-2 bg-black/80 px-4"
          >
            {navItems.map(item => {
              const isActive = pathname === item.href;

              return (
                <button
                  key={item.href}
                  onClick={() => navigateTo(item.href)}
                  className={`block w-full text-left py-3 text-sm tracking-wide transition-colors ${
                    isActive ? "text-blue-500" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
