"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-50/5 text-white p-4 border-b border-neutral-800 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto md:px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500 transition-colors duration-300">
          Rodsone Bacela
        </Link>
        <div className="md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" /> 
            ) : (
              <Menu className="h-7 w-7" /> 
            )}
          </button>
        </div>

        <ul className="hidden md:flex  space-x-6 lg:space-x-8 text-lg">
          <li>
            <Link href="about" className="hover:text-green-500 transition-colors duration-300">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="projects" className="hover:text-green-500 transition-colors duration-300">
              Projectos
            </Link>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-neutral-900/95 border-t border-neutral-800 shadow-lg pb-4">
          <ul className="flex flex-col items-center space-y-6 pt-4 text-lg">
            <li>
              <Link href="about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-500 transition-colors duration-300">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-500 transition-colors duration-300">
                Projectos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;