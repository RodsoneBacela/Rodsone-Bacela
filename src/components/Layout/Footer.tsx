import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50/5 border-t-1 border-neutral-800 backdrop-blur-sm text-white p-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-4 items-center text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} Rodsone. All rights reserved.
        </p>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            href="https://github.com/RodsoneBacela"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={24} /> 
          </Link>
          <Link
            href="https://www.linkedin.com/in/rodsone-bacela-4622bb137"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </Link>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;