'use client';

import { useEffect, useState } from 'react';
import { stack, software } from '@/data/about';
import Image from 'next/image';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto pt-2 font-font-plex-sans px-4 sm:px-6 lg:px-8" id='about'>
      <div className="h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] shadow-green-500 shadow-sm relative overflow-hidden rounded-lg">
        <Image src="/images/bg.png" fill alt='bg' className='object-cover object-center' />
      </div>

      <div className="relative -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-40 flex flex-col items-center justify-center text-center">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 [perspective:1000px] mb-6">
          <div
            className={`w-full h-full rounded-full transition-transform duration-1000 [transform-style:preserve-3d] ${
              flipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-green-500 shadow-sm shadow-green-500 [backface-visibility:hidden]">
              <Image src="/images/me.png" alt="me" fill className="object-cover" />
            </div>

            <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-green-500 shadow-sm shadow-green-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Image src="/images/me-back.png" alt="me back" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12 text-white p-4">
          <div className='w-full md:w-1/2 flex flex-col items-start gap-4 text-center md:text-left'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Sobre mim</h1>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
              Desenvolvedor de software com foco em front-end, crio soluções que são não apenas inovadoras e funcionais,
              mas também visualmente impactantes. Minha experiência inclui React.js e Next.js, complementada por uma base sólida em
              análise de dados e Python. Sou atento aos detalhes, com excelente capacidade de resolução de problemas e comunicação.
              O objetivo é sempre entregar resultados e qualidade, seja atuando em equipe ou de forma independente.
            </p>
          </div>
          <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-6'>
            <div className='flex flex-col gap-2 w-full text-center md:text-left'>
              <h2 className='text-xl sm:text-2xl font-bold'>Educação</h2>
              <div className='bg-white/10 p-4 sm:p-6 rounded-md text-white w-full'>
                <h3 className='text-lg sm:text-xl font-bold text-green-500'>Africa University</h3>
                <p className='text-sm sm:text-base'>Bachelor of Science Honors in Computer Science</p>
                <span className='text-xs sm:text-sm'>2019 - 2024</span>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-full text-center md:text-left'>
              <h2 className='text-xl sm:text-2xl font-bold'>Certificação</h2>
              <div className='bg-white/10 p-4 sm:p-6 rounded-md text-white w-full'>
                <h3 className='text-lg sm:text-xl font-bold text-green-500'>Africa University</h3>
                <p className='text-sm sm:text-base'>Design Thinking & Design Thinking and Entrepreneurship</p>
                <span className='text-xs sm:text-sm'>March - 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full max-w-5xl mx-auto flex flex-col items-center gap-6 pb-10 mt-8'>
          <h2 className='text-xl sm:text-2xl font-bold text-white'>Software & Stacks</h2>
          <div className='bg-white/10 text-white p-4 sm:p-6 rounded-md w-full flex flex-col gap-6'>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
              {software.map((item, index) => (
                <div
                  key={index}
                  className='px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md border border-neutral-400 text-xs sm:text-sm'
                >
                  {item}
                </div>
              ))}
            </div>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
              {stack.map((item, index) => (
                <div
                  key={index}
                  className='px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-neutral-400 text-xs sm:text-sm'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}