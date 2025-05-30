"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [displayLetter, setDisplayLetter] = useState<string>('R');
  const indexRef = useRef<number>(0);

  const letters = ['R', 'O', 'D', 'S', 'O', 'N', 'E'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayLetter(letters[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % letters.length;
    }, 1000);
    return () => clearInterval(intervalId);
  }, [letters]);

  return (
    <section
      id="home" 
      className="relative border-b-1 border-neutral-500/50 border-dashed flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-4 sm:p-8 lg:p-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row max-w-7xl gap-8 md:gap-16 lg:gap-24 mx-auto items-center justify-center text-center md:text-left">
        <div className="flex-1 order-2 md:order-1 mt-1 md:mt-0"> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide mb-4 animate-fade-in-up">
            Rodsone Bacela
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-neutral-600 mb-6 animate-fade-in-up delay-200">
            Software Developer
          </h2>
          <p className="tracking-wide text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-10">
            Dou vida a projectos IU, criando experiências digitais <span className='text-green-500  font-bold'>F</span>uncionais, <span className='text-green-500 font-bold'>L</span>impas e <span className='text-green-500'>I</span>mpactantes.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
                <Link
                href="https://www.linkedin.com/in/rodsone-bacela" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-neutral-900 font-bold py-3 px-8 rounded-sm shadow-lg hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
                >
                Contactar-me
                </Link>
                </div>
            <div>
                <Link
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border-1 border-neutral-500 text-white font-bold py-3 px-8 rounded-sm shadow-lg hover:bg-green-200/10 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                Baixar CV
                </Link>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex-shrink-0 md:relative md:top-auto md:right-auto md:w-auto md:h-auto
                      w-48 h-48 sm:w-64 sm:h-64
                      mb-1 md:mb-0"> 
          <div className="absolute inset-x-0 top-0 sm:top-2 sm:right-4 md:relative md:top-auto md:right-auto flex justify-center md:justify-end">
            <div className="relative
              w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112
              flex items-center justify-center rounded-full border border-white/10 border-dashed animate-spin-slow">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 xl:w-104 xl:h-104 flex items-center justify-center rounded-full border border-white/20 border-dashed animate-spin-slow-reverse">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center rounded-full border border-white/30 border-dashed animate-spin-slow">
                  <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-88 xl:h-88 flex items-center justify-center rounded-full border border-white/40 border-dashed animate-spin-slow-reverse">
                    <div className="w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 flex items-center justify-center rounded-full border border-white/50 border-dashed animate-spin-slow">
                      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[156px] font-black font-plex-sans text-green-500 text-shadow-green-500 text-shadow-lg">
                        {displayLetter}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;